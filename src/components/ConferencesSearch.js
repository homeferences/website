import React, { useState } from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import styled from '@emotion/styled'
import _ from 'lodash'

const Form = styled.form`
  max-width: ${props => props.theme.sizes.maxWidth};
  width: 100%;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
  text-transform: ${props => (props.capitalize ? 'capitalize' : 'none')};
  position: relative;
`

const Input = styled.input`
  max-width: 100%;
  padding: 1.2em 0;
  border-bottom: 3px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.secondary};
  width: 100%;
`

const ClearButton = styled.button`
  border: none;
  outline: none;
  padding: 3px 3px;
  background: transparent;
  color: ${props => props.theme.colors.secondary};
  position: absolute;
  z-index: 2;
  top: 50%;
  transform: translateY(-50%);
  right: 2em;
  border-radius: 3px;

  :hover {
    cursor: pointer;
  }
`

const ConferencesSearch = ({ onSearch }) => {
  const { searchPlaceholder } = useSiteMetadata()
  const [query, setQuery] = useState('')

  const debounce = _.debounce(function(e) {
    onSearch(query)
  }, 250)

  const throttle = _.throttle(function(e) {
    onSearch(query)
  }, 250)

  const onSearchHandler = e => {
    e.preventDefault()
    if (query.length < 4) {
      throttle()
    } else {
      debounce()
    }
  }

  const clearHandler = () => {
    setQuery('')
    onSearch('')
  }

  return (
    <Form onSubmit={onSearchHandler}>
      <Input
        type="text"
        placeholder={searchPlaceholder}
        value={query}
        onChange={e => (setQuery(e.target.value), onSearchHandler(e))}
      />
      {query.length > 0 && (
        <ClearButton type="button" onClick={clearHandler}>
          <svg
            enableBackground={'new 0 0 386.667 386.667'}
            height="10"
            viewBox="0 0 386.667 386.667"
            width="10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z" />
          </svg>
        </ClearButton>
      )}
    </Form>
  )
}

export default ConferencesSearch
