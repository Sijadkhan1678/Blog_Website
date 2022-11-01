import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from "../components/Layout";
import Hero from "../components/Hero"


const Home:React.FC = () => {
  return (
    <Layout >
      <Hero />
    
    </Layout>
  )
}

export default Home;

export const Head: HeadFC = () => <title>Home Page</title>
