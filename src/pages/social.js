import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"

const Social = () => {
  const [instagramPosts, setInstagramPosts] = useState();


  const fetchData = async () => {
    // FETCH INSTAGRAM
    await fetch("https://www.instagram.com/mimmipik/?__a=1")
      .then(async response => await response.json())
      .then(async response => {
        await setInstagramPosts(response.graphql.user.edge_owner_to_timeline_media.edges);
      });

  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(instagramPosts)

  return (
    <Layout>
      <article className="sheet">
        <Helmet>
          <title>Social</title>
          <meta charset="UTF-8" />
          <meta name="description" content="Free Web tutorials" />
          <meta name="keywords" content="HTML, CSS, JavaScript" />
          <meta name="author" content="John Doe" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
        <div>ciao</div>
      </article>
    </Layout>
  )
}

export default Social


