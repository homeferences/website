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
