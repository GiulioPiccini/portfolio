import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <article className="sheet">
      <Helmet>
          <title>My Title</title>
          <meta charset="UTF-8" />
          <meta name="description" content="Free Web tutorials" />
          <meta name="keywords" content="HTML, CSS, JavaScript" />
          <meta name="author" content="John Doe" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <div className="sheet__inner">
        <h1 className="sheet__title">title</h1>
        <p className="sheet__lead">subtitle</p>
        <div className="sheet__gallery">
          gallery
        </div>
        <div className="sheet__body">
          body
        </div>
      </div>
    </article>
  </Layout>
)

export default IndexPage


