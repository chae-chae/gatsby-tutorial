import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function Blog() {
  return (
    <Layout title="blog">
      <p>recent news</p>
    </Layout>
  );
}

export const Head = () => <Seo title="Blog" />;
