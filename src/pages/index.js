import React, { useEffect, useState } from 'react'
import { Spinner } from 'theme-ui'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../components/Container'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import Intro from '../components/Intro'
import ConferencesList from '../components/ConferencesList'

const URL = 'https://homeferences.github.io/list/homeferences.json'

const IndexPage = () => {
  const [conferences, setConferences] = useState([])
  const { intro } = useSiteMetadata()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL)
        let data = await response.json()

        setConferences(data)
      } catch (e) {
        console.log('error', e)
      }
    }

    fetchData()
  }, [])

  return (
    <Layout>
      <SEO />
      <Container fullWidth noPadding>
        <Intro text={intro} />
        {conferences.length > 0 && (
          <ConferencesList conferences={conferences} />
        )}
        {conferences.length === 0 && (
          <div style={{ width: '100hw', textAlign: 'center' }}>
            <Spinner />
          </div>
        )}
      </Container>
    </Layout>
  )
}

export default IndexPage
