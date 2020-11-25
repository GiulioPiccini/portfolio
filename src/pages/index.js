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
        <div className="first__viewport__container">
          <div className="site__heading_wrapper">
            <span className="home__span__title">Better Call</span>
            <h1 className="home__title">T-Devs</h1>
          </div>
          <div className="wrapper__t-devs__image">
            <img src={'/t-devs.png'} width="300" />
          </div>
          <div className="home__whois__text">
            <h3>Chi siamo</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <div class="scroll">
          <div onClick={() => window.scrollTo({top: parseInt(window.pageYOffset/window.innerHeight + 1) * window.innerHeight, behavior: 'smooth'})}>
            <div class="mouse">
              <div class="wheel"></div>
            </div>
          </div>
        </div>
    </article>
  </Layout>
)

export default IndexPage


