import React from 'react'
import styled from '@emotion/styled'
import Container from '../components/Container'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import { useStaticQuery, graphql } from 'gatsby'

const Title = styled.h1`
  font-weight: ${props => props.theme.fonts.boldWeight};
  line-height: 1.25;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: 0 auto 1rem;
  font-size: 2rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 2.5rem;
  }
`

const Content = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  p {
    line-height: 1.5;
    margin: 0 0 1.75rem;
  }
  a {
    transition: 0.3s color;
    color: ${props => props.theme.colors.secondary};
    text-decoration: underline;
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    @media (hover: none) {
      color: ${props => props.theme.colors.secondary} !important;
    }
  }
  code {
    font-family: ${props => props.theme.fonts.monospace};
    font-size: 0.9rem;
    padding: 0.25rem;
    background: ${props => props.theme.colors.code};
    color: ${props => props.theme.colors.text};
    border-radius: 0.3em;
  }
`

const About = ({ data }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            twitter
            github
          }
        }
      }
    `
  )
  return (
    <Layout>
      <Container>
        <SEO title="About" description="About Homeferences" />
        <Title>About</Title>
        <Content>
          <p>
            This is a{' '}
            <a
              href="https://www.gatsbyjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby
            </a>{' '}
            based static website, which renders the{' '}
            <a
              href="https://github.com/homeferences/list"
              target="_blank"
              rel="noopener noreferrer"
            >
              List of Homeferences
            </a>
            .
          </p>
          <blockquote>
            <p>
              <em>Homeferences</em> are Conferences which happen virtually, so
              you can attend from your home.
            </p>
          </blockquote>
          <p>
            Follow the Twitter account{' '}
            <a
              href={`https://twitter.com/${site.siteMetadata.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{site.siteMetadata.twitter}
            </a>{' '}
            to stay up to date.
          </p>
          <p>
            Please check out our GitHub repositories and contribute:{' '}
            <a
              href={site.siteMetadata.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.siteMetadata.github}
            </a>
            .
          </p>
        </Content>
      </Container>
    </Layout>
  )
}

export default About
