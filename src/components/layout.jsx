import React from 'react'
import styled from 'react-emotion';
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const MainContent = styled('main')`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

const siteTitleQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={siteTitleQuery}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Personal and professional website for Allan Calix' },
            { name: 'keywords', content: 'portfolio, personal, professional, blog' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <MainContent>
          {children}
        </MainContent>
      </>
    )}
  />
)

export default Layout
