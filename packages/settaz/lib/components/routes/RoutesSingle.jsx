import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import InstagramEmbed from 'react-instagram-embed'

const RoutesSingleContainer = styled('div')`
  margin-bottom: 20px;
`

export default function RoutesSingle({ route }) {
  const { name, grade, description, videos } = route

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
