import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from "../components/Layout";


const Home = () => {
  return (
    <Layout>
      Blog Website
    </Layout>
  )
}

export default Home;

export const Head: HeadFC = () => <title>Home Page</title>
