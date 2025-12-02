import React from 'react'
import styles from './SpotifyAuthButton.module.scss'

const SPOTIFY_AUTHORIZE_URL = 'https://accounts.spotify.com/authorize'

const persistToken = (token, expiresInSeconds = 3600) => {
  if (typeof document === 'undefined') {
    return
  }

  const maxAge = Number.isFinite(expiresInSeconds) ? Math.max(expiresInSeconds, 60) : 3600
  document.cookie = [
    `spotifyAuthToken=${token}`,
    'path=/',
    `max-age=${maxAge}`,
    'SameSite=Lax'
  ].join('; ')
}

const parseHashFragment = (hash) => {
  if (!hash || hash.length <= 1) {
    return null
  }

  const params = new URLSearchParams(hash.replace(/^#/, ''))
  const accessToken = params.get('access_token')
  if (!accessToken) {
    return null
  }

  return {
    accessToken,
    expiresIn: Number.parseInt(params.get('expires_in') || '3600', 10)
  }
}

const buildAuthorizeUrl = ({ clientId, redirectUri, scopes, showDialog }) => {
  const params = new URLSearchParams({
    client_id: clientId,
    response_type: 'token',
    redirect_uri: redirectUri,
    scope: (scopes || []).join(' '),
    show_dialog: showDialog ? 'true' : 'false'
  })

  return `${SPOTIFY_AUTHORIZE_URL}?${params.toString()}`
}

export default function SpotifyAuthButton({
  clientId,
  redirectUri,
  scopes = [],
  onAccessToken,
  buttonText = 'Connect with Spotify',
  showDialog = true
}) {
  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const tokenPayload = parseHashFragment(window.location.hash)
    if (!tokenPayload) {
      return
    }

    persistToken(tokenPayload.accessToken, tokenPayload.expiresIn)
    if (typeof onAccessToken === 'function') {
      onAccessToken(tokenPayload.accessToken)
    }

    window.history.replaceState({}, document.title, window.location.pathname + window.location.search)
  }, [onAccessToken])

  const handleLogin = React.useCallback(() => {
    if (!clientId || !redirectUri) {
      console.warn('Spotify client ID and redirect URI are required to authenticate with Spotify.')
      return
    }

    const url = buildAuthorizeUrl({ clientId, redirectUri, scopes, showDialog })
    window.location.href = url
  }, [clientId, redirectUri, scopes, showDialog])

  return (
    <button type="button" className={styles.button} onClick={handleLogin}>
      {buttonText}
    </button>
  )
}
