import { Brand } from "@/shared/types/brand";
import React from "react";

interface TagProp {
  brand: Brand;
  isActive: boolean;
  handleClick: () => void;
}

const Tag = (TagProp: TagProp) => {
  return (
    <button
      onClick={TagProp.handleClick}
      className={`tag font-rale text-center rounded-md bg-transparent p-2 text-black w-full border border-black inline hover:cursor-pointer hover:bg-black hover:text-white ${
        TagProp.isActive ? "tag-active" : ""
      }`}
    >
      {TagProp.brand.name}
    </button>
  );
};

export default Tag;
