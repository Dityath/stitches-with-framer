import React from "react";
import { PageTextTitle, PageTextDiv } from "../styles/componentsStyles";

type PageTextProps = {
  title: string;
};

const PageText = ({ title }: PageTextProps) => {
  return (
    <PageTextDiv>
      <PageTextTitle>{title}</PageTextTitle>
    </PageTextDiv>
  );
};

export default PageText;
