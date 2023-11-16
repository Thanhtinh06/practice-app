import Navbar from "@/shared/components/nav-bar/Navbar";
import React from "react";

const NavCarosel = () => {
  return (
    <section className="flex flex-col gap-4 w-11/12 m-auto p-y-4">
      <div className="title">
        <h2 className="font-semibold text-lg">Brands That'll Inspire</h2>
        <p>Celebrate innovation</p>
      </div>
      <Navbar />
    </section>
  );
};

export default NavCarosel;
