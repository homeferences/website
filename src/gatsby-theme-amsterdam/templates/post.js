import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import Container from 'gatsby-theme-amsterdam/src/components/Container'
import Hero from 'gatsby-theme-amsterdam/src/components/Hero'
import MDX from 'gatsby-theme-amsterdam/src/components/MDX'
import Preview from 'gatsby-theme-amsterdam/src/components/Preview'
import SEO from 'gatsby-theme-amsterdam/src/components/SEO'
import ProgressIndicator from 'gatsby-theme-amsterdam/src/components/ProgressIndicator'
import OptionsContext from 'gatsby-theme-amsterdam/src/components/OptionsContext'

const PostTemplate = ({ data, pageContext }) => {
  const next = pageContext.previous
  const previous = pageContext.next
  const options = useContext(OptionsContext)

  let ogImage

  try {
    ogImage = data.post.cover.childImageSharp.ogimg.src
  } catch (error) {
    ogImage = null
  }

  return (
    <>
      <SEO
        title={data.post.title}
        description={data.post.excerpt}
        image={ogImage}
      />
      {options.progressIndicator && <ProgressIndicator />}
      <Container fullWidth>
        <Hero
          title={data.post.title}
          image={data.post.cover}
          date={data.post.date}
          tags={data.post.tags}
          context={pageContext}
        />
        <MDX content={data.post.body} />
        {/*<Preview previous={previous} next={next} context={pageContext} />*/}
      </Container>
    </>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    post(slug: { eq: $slug }) {
      body
      excerpt
      title
      tags
      date(formatString: "MMMM DD, YYYY")
      cover {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
          ogimg: resize(width: 1000) {
            src
          }
        }
      }
    }
  }
`
