import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query siteMetaData {
        site {
          siteMetadata {
            title
            description
            image
            intro
            author
            menuLinks {
              name
              slug
              url
            }
            footerLinks {
              name
              url
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
