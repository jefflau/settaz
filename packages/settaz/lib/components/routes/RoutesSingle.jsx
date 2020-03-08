import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import fetch from 'node-fetch'
import InstagramEmbed from 'react-instagram-embed'

const RoutesSingleContainer = styled('div')`
  background: green;
  margin-bottom: 20px;
`

export default function RoutesSingle({ route }) {
  const { name, grade, description, videos } = route
  const [embed, setEmbed] = useState(null)
  //instagr.am/p/fA9uwTtkSN/

  useEffect(() => {
    fetch('https://api.instagram.com/oembed?hidecaption=true&url=' + videos[0])
      .then(res => {
        console.log('res', res)
        return res.json()
      })
      .then(json => {
        console.log('json', json)
        setEmbed(json.html)
      })
  }, [])

  // useEffect(() => {
  //   fetch(videos[0] + 'media')
  //     .then(res => {
  //       console.log(res)
  //       setUrl(res.url)
  //       return res.json()
  //     })
  //     .then(console.log)
  // }, [])
  return (
    <RoutesSingleContainer>
      {name} - {grade}
      <p>{description}</p>
      <ul>
        <li>
          {videos && (
            <InstagramEmbed
              url={videos[0]}
              maxWidth={320}
              hideCaption={true}
              containerTagName="div"
              protocol=""
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          )}
        </li>
      </ul>
    </RoutesSingleContainer>
  )
}
