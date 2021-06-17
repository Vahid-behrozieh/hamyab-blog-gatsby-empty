import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby"

const BlogPost = ({data}) => {
    const post = data.allWpPost.edges[0].node
    console.log(post)
    return (
        <Layout>
            <div>
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{__html: post.content}}/>
                <p> نویسنده: {post.author.node.name} </p>
                <p> تاریخ: {post.date} </p>
                {post.comments.nodes.map((item, index) => (
                    <>
                        {index}
                        {item.content}
                        <br/>
                        {item.replies.nodes[index]}

                    </>

                ))}
            </div>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
          slug
          date(formatString: "MM-DD-YYYY")
          author {
            node {
               name
            }
          }
          comments {
          nodes {
            content
            replies {
              nodes {
                content
              }
            }
          }
        }
        }
      }
    }
  }`

export default BlogPost;