import { Brand } from "@/shared/types/brand";
import React from "react";

interface TagProp {
  brand: Brand;
}

const Tag = (TagProp: TagProp) => {
  return (
    <div className="tag text-center rounded-md bg-transparent p-2 text-black w-full border border-black inline hover:cursor-pointer">
      {TagProp.brand.name}
    </div>
  );
};

export default Tag;
