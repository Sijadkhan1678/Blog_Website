import path from 'path'
import type { GatsbyNode } from "gatsby"


 export const createPages:GatsbyNode["createPages"] = async ({graphql,actions}) => {
  const { createPage } = actions
  
  const {data:{allContentfulBlogs}} = await graphql(`
     
     query {
     
      allContentfulBlogs {
      
            nodes {
               
               slug
            }
         }             
      }
  `)
  ///console.log("slug",result.allContentfulBlogs.nodes[0].slug)
  allContentfulBlogs.nodes.forEach((blog:any) => {

    const {slug}:any = blog
    
      createPage({
      path:`/blog/${slug}`,
      component: path.resolve(`./src/templates/BlogPost.tsx`),
      context: {
         slug: slug
      }
    })
  })
  
}

/* 



*/



