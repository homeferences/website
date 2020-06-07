import React from 'react'
import styled from '@emotion/styled'

const Section = styled.section`
  background-color: black;
  color: white;
  padding: 1.5rem;
  @media screen and (min-width: ${(props) => props.theme.responsive.small}) {
    padding: 2rem;
  }
  line-height: 120%;
  a {
    color: #f8ef2a;
  }
  img {
    width: 100%;
    max-width: 200px;
    margin-bottom: 2rem;
    @media screen and (min-width: ${(props) => props.theme.responsive.small}) {
      width: 200px;
      margin-right: 2rem;
      margin-bottom: 0;
    }
  }

  > div {
    margin: auto;
    max-width: ${(props) => props.theme.sizes.maxWidth};
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: ${(props) => props.theme.responsive.small}) {
      flex-direction: row;
    }
  }
  p + p {
    margin-top: 1rem;
  }
`

const BLM = () => (
  <Section>
    <div>
      <div>
        <a
          href="https://blacklivesmatter.com/"
          rel="noreferrer noopener"
          target="_blank"
          title="Black Lives Matter"
        >
          <img src="/blm.svg" alt="Black Lives Matter" />
        </a>
      </div>
      <div>
        <p>
          Please consider spending some of your time you were going to invest
          into attending a conference for learning more about{' '}
          <a
            href="https://www.nytimes.com/2019/05/29/books/review/antiracist-reading-list-ibram-x-kendi.html"
            rel="noreferrer noopener"
            target="_blank"
          >
            antiracism
          </a>
          . The video about the Blue Eyes/Brown Eyes experiment from Jane Elliot
          is a highly{' '}
          <a
            href="https://www.youtube.com/watch?v=1mcCLm_LwpE"
            rel="noreferrer noopener"
            target="_blank"
          >
            recommended watch to get started
          </a>
          .
        </p>
        <p>
          If you can, please consider donation to antiracism organizations. You
          can also directly support Black open-source developers through the{' '}
          <a
            href="https://github.com/sponsors"
            rel="noreferrer noopener"
            target="_blank"
          >
            GitHub sponsors
          </a>{' '}
          program,{' '}
          <a
            href="https://twitter.com/IfiokJr/status/1269314007854460929"
            rel="noreferrer noopener"
            target="_blank"
          >
            this thread
          </a>{' '}
          contains mentions of developers who identify as black.
        </p>
      </div>
    </div>
  </Section>
)

export default BLM
