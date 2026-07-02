const DEFAULT_APP_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/login'
    : 'https://steady.capablemind.app/login'

function appLoginUrl() {
  const rawUrl = process.env.NEXT_PUBLIC_STEADY_APP_URL?.trim() || DEFAULT_APP_URL

  try {
    const url = new URL(rawUrl)
    url.pathname = '/login'
    url.search = ''
    url.hash = ''
    return url.toString()
  } catch {
    return DEFAULT_APP_URL
  }
}

export const APP_URL = appLoginUrl()
