import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function AboutUs() {
  return (
    <Layout title="about-us">
      <p>Birds are the best.</p>
    </Layout>
  );
}

export const Head = () => <Seo title="About Us" />;
