import BasicGrid from './BasicGrid'
import React from 'react'
import styled from '@emotion/styled'
import addDays from 'date-fns/addDays'
import parseISO from 'date-fns/parseISO'
import dateIsPast from 'date-fns/isPast'

const isPast = ({ startDay }) => dateIsPast(addDays(parseISO(startDay), 1))
const isFuture = (conference) => !isPast(conference)

const Wrapper = styled.div`
  max-width: ${(props) => props.theme.sizes.maxWidth};
  width: 100%;
  margin: 2rem auto 0;
  @media screen and (min-width: ${(props) => props.theme.responsive.large}) {
    margin: 8rem auto 0;
  }
  padding: 0 1.5rem;
  text-transform: ${(props) => (props.capitalize ? 'capitalize' : 'none')};
`

const Title = styled.h3`
  line-height: 1.125;
  text-align: left;
  font-size: 1.5em;
  @media screen and (min-width: ${(props) => props.theme.responsive.small}) {
    font-size: 2em;
  }
  @media screen and (min-width: ${(props) => props.theme.responsive.medium}) {
    max-width: 70%;
  }
  display: flex;
  align-items: center;
  small {
    font-size: 50%;
    opacity: 0.7;
    margin-left: 0.5rem;
  }
`

const ConferencesList = ({ conferences, ...props }) => {
  const upcoming = conferences.filter(isFuture)
  const past = conferences.filter(isPast)
  return (
    <>
      <div id="upcoming" />
      {upcoming.length === 0 && (
        <Wrapper>
          <Title>No upcoming Homeferences found</Title>
        </Wrapper>
      )}
      {upcoming.length > 0 && (
        <>
          <Wrapper>
            <Title>
              Upcoming Homeferences <small>({upcoming.length})</small>
            </Title>
          </Wrapper>
          <BasicGrid conferences={upcoming} {...props} />
        </>
      )}
      <div id="past" />
      {past.length > 0 && (
        <>
          <Wrapper>
            <Title>
              Past Homeferences <small>({past.length})</small>
            </Title>
          </Wrapper>
          <BasicGrid conferences={past} {...props} />
        </>
      )}
    </>
  )
}

export default ConferencesList
