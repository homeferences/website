import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import Placeholder from './Placeholder'
import parseISO from 'date-fns/parseISO'
import isToday from 'date-fns/isToday'

const List = styled.ul`
  margin: 3rem auto;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 0 1.5rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

const Cover = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.border};
  padding-bottom: 60%;
  padding-bottom: calc(1 / (${props => props.aspectRatio}) * 100%);
  position: relative;
  transition: opacity 0.4s;
  background-position: center;
  background-size: cover;
  img {
    transition: transform 0.6s !important;
  }
  &:hover {
    opacity: 0.8;
    transform: scale(1.03);
  }
  @media (hover: none) {
    opacity: 1 !important;
    transform: scale(1) !important;
  }
`

const Item = styled.li`
  position: relative;
  display: inline-block;
  flex: 0 100%;
  margin: 0 0 2rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 49%;
  }
  a {
    text-decoration: none;
    transition: color 0.3s;
    color: ${props => props.theme.colors.tertiary};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    @media (hover: none) {
      color: ${props => props.theme.colors.tertiary} !important;
    }
  }
`

const Title = styled.h2`
  transition: color 0.3s;
  color: ${props => props.theme.colors.text};
  font-weight: ${props => props.theme.fonts.boldWeight};
  margin: 1rem 0 0 0;
  display: block;
  line-height: 1.25;
  font-size: 1rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 1.1rem;
  }
  &:hover {
    color: ${props => props.theme.colors.highlight};
  }
  @media (hover: none) {
    color: ${props => props.theme.colors.text} !important;
  }
`

const Excerpt = styled.p`
  padding: 0.5rem 0 0 0;
  line-height: 1.5;
  color: ${props => props.theme.colors.secondary};
`

const Container = styled.div`
  padding: 1rem 0 0;
  line-height: 1.5;
  font-size: 0.9em;
`

const Divider = styled.span`
  margin: 0 0.25rem;
  color: ${props => props.theme.colors.border};
`

const Date = styled.span`
  display: inline-block;
  color: ${props => props.theme.colors.tertiary};
`

const Tag = styled.span`
  display: inline-block;
  margin: 0 0.5rem 0 0;
  text-transform: capitalize;
  a {
    text-decoration: underline;
    color: ${props => props.theme.colors.tertiary};
    @media (hover: none) {
      color: ${props => props.theme.colors.tertiary} !important;
    }
  }
`

const Links = styled.p`
  margin-top: 1rem;
`

const IconLink = styled.a`
  display: flex;
  align-items: center;
  svg.feather {
    margin-right: 0.25rem;
  }
`

const Keywords = styled.ul`
  margin-top: 0.5rem;
  list-style: none;
  font-size: 75%;
  opacity: 0.75;
  display: flex;
  flex-wrap: wrap;
  li {
    :after {
      content: ',';
    }
    margin-right: 0.25rem;
  }
  li:last-child {
    :after {
      content: '';
    }
  }
`

const twitterShareLink = conference => {
  const today = isToday(parseISO(conference.startDay))
  const text = ['Check out this #homeference:']
  text.push(conference.twitter || conference.name)
  text.push('is happening online')
  text.push(today ? 'today' : `from ${conference.startDay}`)
  if (conference.endDay !== conference.startDay) {
    text.push(`to ${conference.endDay}`)
  }
  text.push(conference.url)
  text.push('#homeferences')
  text.push('🏠💻🤔💡')

  if (conference.topic) {
    text.push(conference.topic)
  }
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    text.join(' ')
  )}`
}

export const ConferenceItem = ({ conference }) => (
  <Item key={conference.name}>
    <a href={conference.url}>
      <div>
        {conference.image && (
          <Cover
            aspectRatio={2 / 1}
            style={{ backgroundImage: `url(${conference.image})` }}
          />
        )}
        {!conference.image ? <Placeholder aspectRatio={2 / 1} /> : ''}
      </div>
    </a>
    <a href={conference.url}>
      <Title>{conference.name}</Title>
      <Container>
        {conference.startDay && <Date>{conference.startDay}</Date>}
        {conference.endDay !== conference.startDay && (
          <>
            {' '}
            to <Date>{conference.endDay}</Date>
          </>
        )}
      </Container>
      <Excerpt>{conference.topic}</Excerpt>
      {conference.keywords && (
        <Keywords>
          {conference.keywords.map((k, i) => (
            <li key={i}>{k}</li>
          ))}
        </Keywords>
      )}
    </a>

    <Links>
      {conference.twitter && (
        <IconLink
          href={`https://twitter.com/${conference.twitter.replace(/^@/, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          title={`${conference.name} on Twitter`}
        >
          <i data-feather="twitter"></i>
          {conference.twitter.replace(/^@/, '')}
        </IconLink>
      )}
      <IconLink
        href={twitterShareLink(conference)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i data-feather="share-2"></i>
        Share on Twitter
      </IconLink>
    </Links>
  </Item>
)

const BasicGrid = ({ conferences }) => {
  useEffect(() => {
    feather.replace()
  })
  return (
    <List>
      {conferences.map((conference, k) => (
        <ConferenceItem conference={conference} key={k} />
      ))}
    </List>
  )
}

export default BasicGrid
