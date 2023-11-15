import { BrandList } from "@/shared/constants/BrandList";
import { Brand } from "@/shared/types/brand";
import React from "react";
import Tag from "../tag/Tag";

const Navbar = (): JSX.Element => {
  const renderBrandList = (): React.ReactElement[] =>
    BrandList.map((brand: Brand) => <Tag brand={brand} key={brand.id} />);

  return (
    <nav className="flex gap-2 overscroll-x-auto">{renderBrandList()}</nav>
  );
};

export default Navbar;
