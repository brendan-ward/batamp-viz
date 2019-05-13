import GoogleAnalytics from 'react-ga'
import * as Sentry from '@sentry/browser'

import { siteMetadata } from './gatsby-config'

/**
 * Initialize Google Analytics and Sentry
 */
export const onClientEntry = () => {
  console.log('siteMetadata', siteMetadata)
  console.log('env on browser', process.env.GATSBY_MAPBOX_API_TOKEN)
  if (process.env.NODE_ENV === 'production') {
    GoogleAnalytics.initialize(siteMetadata.googleAnalyticsId)

    Sentry.init({
      dsn: siteMetadata.sentryDSN,
    })
    window.Sentry = Sentry
  }
}
