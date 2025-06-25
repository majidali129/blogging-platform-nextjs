import {
  Bold,
  CodeSquare,
  Heading1,
  ImageIcon,
  Italic,
  Link,
  List,
  ListOrdered,
  StopCircle,
  Underline,
} from "lucide-react";
import { Editor } from "@tiptap/react";
import { Button } from "../ui/button";
import { useCallback } from "react";

export const MenuBar = ({ editor }: { editor: Editor | null }) => {
  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editor?.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);
  if (!editor) {
    return null;
  }

  const Options = [
    {
      icon: <Bold className="size-4" />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      preesed: editor.isActive("bold"),
    },
    {
      icon: <Italic className="size-4" />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      preesed: editor.isActive("italic"),
    },
    {
      icon: <Heading1 className="size-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      preesed: editor.isActive("heading", { level: 1 }),
    },
    {
      icon: <Link className="size-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      preesed: editor.isActive("heading", { level: 1 }),
    },

    {
      icon: <List className="size-4" />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
    },
    {
      icon: <ListOrdered className="size-4" />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
    },
    {
      icon: <CodeSquare className="size-4" />,
      onClick: () => editor.chain().focus().toggleCodeBlock().run(),
    },
    {
      icon: <Underline className="size-4" />,
      onClick: () => editor.chain().focus().toggleUnderline().run(),
    },
    {
      icon: <ImageIcon className="size-4" />,
      onClick: () => addImage(),
    },
    {
      icon: <StopCircle className="size-4" />,
      onClick: () => editor.chain().focus().setHardBreak().run(),
    },
  ];

  return (
    <div className=" rounded-xs p-1 mb-1  space-x-2 z-50 bg-background">
      {Options.map((option, index) => (
        <Button
          key={index}
          onClick={option.onClick}
          size="icon"
          variant="ghost"
          className={`hover:!bg-primary/30 `}
        >
          {option.icon}
        </Button>
      ))}
    </div>
  );
};
