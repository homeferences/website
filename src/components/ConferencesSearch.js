import React, { useState } from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import styled from '@emotion/styled'

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

  const clearHandler = () => {
    setQuery('')
    onSearch('')
  }

  return (
    <Form>
      <Input
        type="text"
        placeholder={searchPlaceholder}
        value={query}
        onChange={({ target: { value } }) => {
          setQuery(value)
          onSearch(value)
        }}
        onKeyUp={({ keyCode }) => {
          if (keyCode === 27) {
            clearHandler()
          }
        }}
      />
      {query.length > 0 && (
        <ClearButton type="button" onClick={clearHandler}>
          <i data-feather="x"></i>
        </ClearButton>
      )}
    </Form>
  )
}

export default ConferencesSearch
