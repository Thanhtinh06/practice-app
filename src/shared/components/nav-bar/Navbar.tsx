"use client";
import React, { useEffect, useState } from "react";
import { Brand } from "@/shared/types/brand";
import Tag from "../tag/Tag";
import { Icon } from "@iconify/react";
import { useSelector, shallowEqual } from "react-redux"; // Import shallowEqual
import { RootState, useAppDispatch } from "@/shared/store";
import { manageBrands } from "@/shared/store/manageBrand/thunkAction";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [brandActive, setBrandActive] = useState<number>(1);
  const { brandList } = useSelector(
    (state: RootState) => state.manageBrands,
    shallowEqual // Use shallowEqual to optimize re-renders
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(manageBrands());
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const renderBrandList = React.useMemo(
    () =>
      brandList?.map((brand: Brand) => (
        <Tag
          brand={brand}
          key={brand.id}
          isActive={brand.id === brandActive}
          handleClick={() => handleBrandClick(brand.id)}
        />
      )),
    [brandList, brandActive]
  );

  const handleBrandClick = (brandId: number) => {
    setBrandActive(brandId);
  };

  return (
    <div className="flex items-center gap-1">
      <nav className="flex gap-2 overflow-x-scroll h-[60px] border-r-[1px] border-r-neutral-400 max-w-[90%] py-2">
        {renderBrandList}
      </nav>
      <Icon icon="ep:arrow-right-bold" />
    </div>
  );
};

export default Navbar;
