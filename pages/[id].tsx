import React from "react";
import { useRouter } from "next/router";
import PageText from "../components/pageText";

const DynamicHomePage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <PageText title={`Hi ${id ? id : "You"}`} />;
};

export default DynamicHomePage;
