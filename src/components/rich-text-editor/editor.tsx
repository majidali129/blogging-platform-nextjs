import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { forwardRef, useImperativeHandle } from "react";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Heading from "@tiptap/extension-heading";
import { MenuBar } from "./menu-bar";
import Link from "@tiptap/extension-link";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
import CodeBlock from "@tiptap/extension-code-block";
import Image from "@tiptap/extension-image";
import Underline from "@tiptap/extension-underline";
import HardBreak from "@tiptap/extension-hard-break";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";

const lowlight = createLowlight(all);

lowlight.register("html", html);
lowlight.register("css", css);
lowlight.register("js", js);
lowlight.register("ts", ts);

interface RichTextEditorProps {
  content: string;
  editable?: boolean;
}

export interface RichTextEditorRef {
  getContent: () => string;
}
export const RichTextEditor = forwardRef<
  RichTextEditorRef,
  RichTextEditorProps
>(({ content, editable = true }, ref) => {
  const isEditable = editable ?? true;

  const editor = useEditor({
    editable: isEditable,
    immediatelyRender: false,
    extensions: [
      Paragraph,
      Text,
      HardBreak,
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "list-disc ml-3",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal ml-3",
          },
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
      Heading.configure({ levels: [1, 2, 3] }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
        protocols: ["http", "https"],
        isAllowedUri: (url, ctx) => {
          try {
            // construct URL
            const parsedUrl = url.includes(":")
              ? new URL(url)
              : new URL(`${ctx.defaultProtocol}://${url}`);

            // use default validation
            if (!ctx.defaultValidate(parsedUrl.href)) {
              return false;
            }

            // disallowed protocols
            const disallowedProtocols = ["ftp", "file", "mailto"];
            const protocol = parsedUrl.protocol.replace(":", "");

            if (disallowedProtocols.includes(protocol)) {
              return false;
            }

            // only allow protocols specified in ctx.protocols
            const allowedProtocols = ctx.protocols.map((p) =>
              typeof p === "string" ? p : p.scheme
            );

            if (!allowedProtocols.includes(protocol)) {
              return false;
            }

            // disallowed domains
            const disallowedDomains = [
              "example-phishing.com",
              "malicious-site.net",
            ];
            const domain = parsedUrl.hostname;

            if (disallowedDomains.includes(domain)) {
              return false;
            }

            // all checks have passed
            return true;
          } catch {
            return false;
          }
        },
        shouldAutoLink: (url) => {
          try {
            // construct URL
            const parsedUrl = url.includes(":")
              ? new URL(url)
              : new URL(`https://${url}`);

            // only auto-link if the domain is not in the disallowed list
            const disallowedDomains = [
              "example-no-autolink.com",
              "another-no-autolink.com",
            ];
            const domain = parsedUrl.hostname;

            return !disallowedDomains.includes(domain);
          } catch {
            return false;
          }
        },
      }),
      CodeBlock.configure({
        exitOnTripleEnter: false,
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Underline,
      Image.configure({
        inline: false,
        allowBase64: true,
      }),
    ],
    content: content,
    editorProps: {
      handleKeyDown: (view, event) => {
        if (event.shiftKey && event.key === "Enter") {
          return true;
        }
        return false;
      },
      attributes: {
        class: isEditable
          ? "min-h-[156px] border border-input rounded-xs py-2 px-3 "
          : "",
      },
    },
  });

  useImperativeHandle(ref, () => ({
    getContent: () => editor?.getHTML() || "",
  }));

  return (
    <div className="px-6">
      {isEditable && <MenuBar editor={editor} />}
      <EditorContent
        editor={editor}
        className=" max-h-[456px] overflow-y-scroll h-full"
      />
    </div>
  );
});

RichTextEditor.displayName = "RichTextEditor";
