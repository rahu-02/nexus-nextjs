import React from "react";
import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
  title: "nexus",
  description: "Web site created using create-react-app",
  //ogTitle:'...'
};

export default function AboutPage() {
  return <Page />;
}
