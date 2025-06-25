"use client";

import {
  RichTextEditor,
  RichTextEditorRef,
} from "@/components/rich-text-editor/editor";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
import { CreateNewPostTagList } from "./create-new-post-tag-list";
import { createPost } from "../../actions/create-new-post";
import { Tag } from "@prisma/client";
import { X } from "lucide-react";

type CreateNewPostProps = {
  tags: Tag[];
};
export const CreateNewPost = ({ tags }: CreateNewPostProps) => {
  const [tagList, setTagList] = useState(tags);
  const [title, setTitle] = useState("");
  const editorRef = useRef<RichTextEditorRef>(null);
  const [coverPhoto, setCoverPhoto] = useState<File | null>(null);
  const [tagWord, setTagWord] = useState("");
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const handleCoverImgUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setCoverPhoto(file);
  };

  const handleSavePost = async () => {
    const content = editorRef.current?.getContent();
    if (content) {
      await createPost({
        title,
        content,
        coverPhoto: "",
        readTime: 10,
        tags: selectedTags.map((tag) => tag.id),
      });
    }
  };

  const handleDraftSave = () => {
    const content = editorRef.current?.getContent();

    console.log({
      title,
      content,
      coverPhoto: "",
      readTime: 10,
      tags: selectedTags.map((tag) => tag.id),
    });
  };

  const handleSelectedTags = (sTag: Tag) => {
    if (selectedTags.length < 4) {
      setSelectedTags((prevTags) => [...prevTags, sTag]);
      setTagList(tagList.filter((tag) => tag.id !== sTag.id));
    } else return;
  };

  const handleDeleteSelectedtag = (dTag: Tag) => {
    setSelectedTags(selectedTags.filter((tag) => tag.id !== dTag.id));
    setTagList([dTag, ...tagList]);
  };

  const tagListOrMessage =
    selectedTags.length >= 4 ? (
      <p className="md:text-lg">Only 4 selections allowed</p>
    ) : (
      <CreateNewPostTagList tags={tagList} addTagAction={handleSelectedTags} />
    );

  return (
    <section className="">
      <div className="min-h-[100vh-52px] px-24 grid grid-cols-1 lg:grid-cols-[9fr_3fr] ">
        <div>
          <Card className="py-11 px-12 max-h-[507px] overflow-y-auto ">
            <CardHeader className="space-y-3">
              {!coverPhoto ? (
                <label
                  htmlFor="coverPhoto"
                  className=" border w-fit py-1.5 px-4 rounded border-input cursor-pointer"
                  role="button"
                >
                  <input
                    type="file"
                    name="coverPhoto"
                    id="coverPhoto"
                    className="hidden"
                    onChange={handleCoverImgUpload}
                  />
                  {/* <Button>Add a cover image</Button> */}
                  Add a cover image
                </label>
              ) : (
                <div className="flex items-center gap-5">
                  <Image
                    src={URL.createObjectURL(coverPhoto)}
                    width={100}
                    height={100}
                    alt="post-cover-image"
                    className="!w-[280px] rounded-xs"
                  />

                  <div className="space-x-2">
                    <label
                      htmlFor="coverPhoto"
                      className=" border w-fit py-1.5 px-4 rounded border-input cursor-pointer"
                      role="button"
                    >
                      <input
                        type="file"
                        name="coverPhoto"
                        id="coverPhoto"
                        className="hidden"
                        onChange={handleCoverImgUpload}
                      />
                      {/* <Button>Add a cover image</Button> */}
                      Change
                    </label>
                    <Button
                      className="text-red-500 hover:!text-red-500/80"
                      variant="ghost"
                      onClick={() => setCoverPhoto(null)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              )}

              <Textarea
                className="text-lg lg:text-5xl md:placeholder:text-2xl focus-visible:ring-0 lg:placeholder:text-5xl px-0 text-foreground tracking-tight font-bold border-none !bg-transparent "
                placeholder="New post title here..."
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  setTitle(e.target.value)
                }
              />
              <div>
                <ul className="flex items-center gap-1.5">
                  {selectedTags.map((tag) => (
                    <li
                      key={tag.id}
                      style={{ background: tag.color.text }}
                      className={`py-1 px-1.5 flex items-center justify-center gap-0.5 rounded-md cursor-pointer`}
                    >
                      <div className="flex items-center">
                        <span style={{ color: tag.color.bg }}>#</span>
                        <span className="">{tag.name}</span>
                      </div>
                      <X
                        className="hover:text-red-500 w-[20px] h-[20px] "
                        onClick={() => handleDeleteSelectedtag(tag)}
                      />
                    </li>
                  ))}
                </ul>
                <Input
                  placeholder="Add up to 4 tags..."
                  type="text"
                  name="tags"
                  value={tagWord}
                  onChange={(e) => setTagWord(e.target.value)}
                  className="border-none focus-visible:border-none !ps-0 focus-visible:ring-0 !bg-transparent h-auto lg:text-[1.1rem] py-3"
                />
              </div>
              {tagWord && <>{tagListOrMessage}</>}
            </CardHeader>
            {/* <TipTap /> */}
            <RichTextEditor content="" ref={editorRef} />
          </Card>
          <div className="flex items-center gap-3 py-6">
            <Button onClick={handleSavePost}>Publish</Button>
            <Button
              className="hover:!bg-primary/40"
              variant="ghost"
              onClick={handleDraftSave}
            >
              Save draft
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
