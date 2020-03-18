import React from 'react'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Wrapper = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  width: 100%;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
  text-transform: ${props => (props.capitalize ? 'capitalize' : 'none')};
`

const Title = styled.h4`
  line-height: 1.125;
  text-align: left;
  font-size: 1.5em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 2em;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    max-width: 70%;
  }
`

const EmptyListText = props => {
  const { emptyListText } = useSiteMetadata()

  return (
    <Wrapper>
      <Title>{emptyListText}</Title>
    </Wrapper>
  )
}

export default EmptyListText
