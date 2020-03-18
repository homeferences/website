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

const URL = 'https://homeferences.github.io/list/homeferences.json'

const IndexPage = () => {
  const [conferences, setConferences] = useState([])
  const [loading, setLoading] = useState(true)
  const { intro } = useSiteMetadata()

  const fetchData = async (query = '') => {
    try {
      setLoading(true)
      const response = await fetch(URL)
      let data = await response.json()

      setConferences(
        data.filter(conference => {
          let inDescription = conference.description
            ? conference.description
                .toLowerCase()
                .indexOf(query.toLowerCase()) >= 0
            : false
          let inTopic = conference.topic
            ? conference.topic.toLowerCase().indexOf(query.toLowerCase()) >= 0
            : false
          let inTitle = conference.name
            ? conference.name.toLowerCase().indexOf(query.toLowerCase()) >= 0
            : false
          return inDescription || inTopic || inTitle
        })
      )
      setLoading(false)
    } catch (e) {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const onSearch = query => {
    setConferences([])
    fetchData(query)
  }

  return (
    <Layout>
      <SEO />
      <Container fullWidth noPadding>
        <Intro text={intro} />
        <ConferencesSearch onSearch={onSearch} />
        {!loading && conferences.length > 0 && (
          <ConferencesList conferences={conferences} />
        )}

        {loading && conferences.length === 0 && (
          <div style={{ width: '100hw', textAlign: 'center' }}>
            <Spinner />
          </div>
        )}

        {!loading && conferences.length === 0 && (
          <div style={{ width: '100hw', textAlign: 'center' }}>
            <EmptyListText />
          </div>
        )}
      </Container>
    </Layout>
  )
}

export default IndexPage
