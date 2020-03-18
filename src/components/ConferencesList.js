import BasicGrid from './BasicGrid'
import React from 'react'
import styled from '@emotion/styled'
import addDays from 'date-fns/addDays'
import parseISO from 'date-fns/parseISO'
import dateIsPast from 'date-fns/isPast'

const isPast = ({ startDay }) => dateIsPast(addDays(parseISO(startDay), 1))
const isFuture = conference => !isPast(conference)

const Wrapper = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  width: 100%;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
  text-transform: ${props => (props.capitalize ? 'capitalize' : 'none')};
`

const Title = styled.h3`
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

const ConferencesList = ({ conferences, ...props }) => (
  <>
    <a name="upcoming"></a>
    <Wrapper>
      <Title>Upcoming Homeferences</Title>
    </Wrapper>
    <BasicGrid conferences={conferences.filter(isFuture)} {...props} />
    <a name="past"></a>
    <Wrapper>
      <Title>Past Homeferences</Title>
    </Wrapper>
    <BasicGrid conferences={conferences.filter(isPast)} {...props} />
  </>
)

export default ConferencesList
