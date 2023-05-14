import Router from 'next/router';
import { useState, useEffect } from 'react';

// get current route
export function useCurrentRoute(route) {
  const [currentRoute, setCurrentRoute] = useState(route ? route : window.location.pathname)

  const handleRouteChange = (url) => {
    setCurrentRoute(url)
  }

  useEffect(() => {
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => Router.events.off('routeChangeComplete', handleRouteChange)
  }, [])

  return [currentRoute]
}