import React from 'react'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
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
        <div className="first__viewport__container">
          <div className="site__heading_wrapper">
            <span className="home__span__title">Better Call</span>
            <h1 className="home__title">T-Devs</h1>
          </div>
          <div className="wrapper__t-devs__image">
              <img src={'/t-devs.png'} width="300" />
            </div>
        <button className="home__whois__button">
          Chi Siamo
        </button>
        </div>
        <p className="sheet__lead"></p>
        <div className="sheet__gallery">
          gallery
        </div>
        <div className="sheet__body">
        </div>
      </div>
      <div class="scroll">
          <a href="yourlink">
            <div class="mouse">
              <div class="wheel"></div>
            </div>
          </a>
        </div>
    </article>
  </Layout>
)

export default IndexPage


