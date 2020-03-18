import React, { useEffect, useState } from 'react'
import { Spinner } from 'theme-ui'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../components/Container'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import Intro from '../components/Intro'
import ConferencesList from '../components/ConferencesList'
import ConferencesSearch from '../components/ConferencesSearch'
import EmptyListText from '../components/EmptyListText'
import debounce from 'lodash/debounce'

const URL = 'https://homeferences.github.io/list/homeferences.json'

const IndexPage = () => {
  const [conferences, setConferences] = useState([])
  const [loading, setLoading] = useState(true)
  const [filteredConferences, setFilteredConferences] = useState([])
  const { intro } = useSiteMetadata()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(URL)
        const data = await response.json()

        setConferences(data)
        setFilteredConferences(data)
        setLoading(false)
      } catch (e) {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const onSearch = query => {
    setFilteredConferences(
      conferences.filter(conference => {
        const inDescription = conference.description
          ? conference.description.toLowerCase().indexOf(query.toLowerCase()) >=
            0
          : false
        const inTopic = conference.topic
          ? conference.topic.toLowerCase().indexOf(query.toLowerCase()) >= 0
          : false
        const inTitle = conference.name
          ? conference.name.toLowerCase().indexOf(query.toLowerCase()) >= 0
          : false
        return inDescription || inTopic || inTitle
      })
    )
  }

  return (
    <Layout>
      <SEO />
      <Container fullWidth noPadding>
        <Intro text={intro} />
        <ConferencesSearch onSearch={debounce(onSearch, 250)} />
        {!loading && filteredConferences.length > 0 && (
          <ConferencesList conferences={filteredConferences} />
        )}

        {loading && filteredConferences.length === 0 && (
          <div style={{ width: '100hw', textAlign: 'center' }}>
            <Spinner />
          </div>
        )}

        {!loading && filteredConferences.length === 0 && (
          <div style={{ width: '100hw', textAlign: 'center' }}>
            <EmptyListText />
          </div>
        )}
      </Container>
    </Layout>
  )
}

export default IndexPage
