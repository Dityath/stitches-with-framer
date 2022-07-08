import Link from "next/link";
import React from "react";
import {
  NavbarDiv,
  NavbarInside,
  NavbarLink,
  NavbarLinkDiv,
  NavbarLinks,
  NavbarTitle,
  NavbarUnderline,
} from "../styles/navbarStyle";

const Navbar = () => {
  return (
    <NavbarDiv>
      <NavbarInside>
        <NavbarTitle>Title</NavbarTitle>
        <NavbarLinks>
          <NavbarLinkDiv>
            <Link href="/">
              <NavbarLink>Home</NavbarLink>
            </Link>
            <NavbarUnderline />
          </NavbarLinkDiv>
          <NavbarLinkDiv>
            <Link href="/about">
              <NavbarLink>About</NavbarLink>
            </Link>
            <NavbarUnderline />
          </NavbarLinkDiv>
        </NavbarLinks>
      </NavbarInside>
    </NavbarDiv>
  );
};

export default Navbar;
