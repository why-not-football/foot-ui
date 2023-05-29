import React from "react";
import Layout from "./Layout";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the content of the home page.</p>
    </div>
  );
};

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Home;
