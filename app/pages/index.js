import React from 'react'
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css' // if using the included styles
import * as cookie from 'cookie'
import styles from '../styles/Home.module.css'

var SpotifyWebApi = require('spotify-web-api-node');

export async function getServerSideProps(context) {
// credentials are optional
  var spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: 'http://127.0.0.1:3000/'
  });

  const requestCookie = context.req.headers.cookie
  var loggedIn = false
  var spotifyAuthToken = null
  var data = {}
  if (requestCookie) {
    const parsedCookies = cookie.parse(requestCookie);
  
    spotifyAuthToken = parsedCookies.spotifyAuthToken
    if (spotifyAuthToken) {
      loggedIn = true
      spotifyApi.setAccessToken(spotifyAuthToken)
      var savedTracks = []
      var hasMore = true
  
      while(hasMore) {
        var response = await spotifyApi.getMySavedTracks({
            limit : 50,
            offset: 1
          })
          .then(function(data) {
            console.log(data.body);
            return data.body
          }, function(err) {
            console.log('Something went wrong!', err);
            return err.body
          });
        }
        savedTracks = savedTracks.concat(response.items)
        hasMore = !!response.next
    }
    data = savedTracks
  }

  return {
    props: {
      spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
      loggedIn: loggedIn,
      spotifyAuthToken: spotifyAuthToken,
      data: data
    }
  }
}

export default function Home({ spotifyClientId, spotifyAuthToken, loggedIn, data }) {
  const [token, setToken] = React.useState(spotifyAuthToken)

  return (
    <div className={styles.container}>
      {loggedIn ? (
          <div>hello</div>
        ) : (
        <SpotifyAuth
          redirectUri='http://127.0.0.1:3000'
          clientID={spotifyClientId}
          scopes={[Scopes.userLibraryRead, Scopes.userReadPrivate, Scopes.userReadEmail]}
          onAccessToken={(token) => setToken(token)}
        />
      )}

      <main>
      </main>

      <footer>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}