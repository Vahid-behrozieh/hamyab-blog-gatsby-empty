import * as React from "react"
import {Link, graphql} from "gatsby"
import {StaticImage, GatsbyImage, getImage} from 'gatsby-plugin-image'
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({data}) => {
    return (
        <Layout>
            <Seo title="home"/>
            <h1>My WordPress Blog</h1>
            <h4>Posts</h4>
            {data.allWpPost.edges.map((post) => {
                let image=''
                if(post.node.featuredImage!=null){
                     image= getImage(post.node.featuredImage.node.localFile);
                }
                return (
                    <div>
                        {/*<StaticImage
                            src="../images/gatsby-astronaut.png"
                            width={300}
                            quality={95}
                            formats={["AUTO", "WEBP", "AVIF"]}
                            alt="A Gatsby astronaut"
                            style={{marginBottom: `1.45rem`}}
                        />*/}
                        <GatsbyImage alt={'featuredImage.altText'} image={image}/>

                        <Link to={post.node.slug}>
                            <p>{post.node.title}</p>
                        </Link>
                        {console.log(image)}
                        <div dangerouslySetInnerHTML={{__html: post.node.excerpt}}/>
                    </div>
                )
            })}
        </Layout>
    )
}

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          excerpt
          slug
          featuredImage {
          node {
            localFile {
              id
              childImageSharp {
                id
                gatsbyImageData(width:500,height:200)
              }
            }
          }
        }
        }
      }
    }
  }`

export default IndexPage
