import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from "../components/Layout";
import Hero from "../components/Hero"
import Blogs from "../components/blog/Blogs";


const Home:React.FC = () => {
  return (
    <Layout >
      <Hero />
      <Blogs />
      
      
    </Layout>
  )
}

export default Home;

export const Head: HeadFC = () => <title>Home Page</title>
