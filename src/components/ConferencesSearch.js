import React, { useState } from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import styled from '@emotion/styled'

const Form = styled.form`
  max-width: ${props => props.theme.sizes.maxWidth};
  width: 100%;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
  text-transform: ${props => (props.capitalize ? 'capitalize' : 'none')};
`

const Input = styled.input`
  max-width: 100%;
  padding: 1.2em 0;
  border-bottom: 3px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.secondary};
  width: 100%;
`

const ConferencesSearch = ({ onSearch }) => {
  const { searchPlaceholder } = useSiteMetadata()
  const [query, setQuery] = useState('')

  const onSubmitHandler = e => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <Form onSubmit={onSubmitHandler}>
      <Input
        type="text"
        placeholder={searchPlaceholder}
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </Form>
  )
}

export default ConferencesSearch
