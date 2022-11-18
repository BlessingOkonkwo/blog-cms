import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';

export default class Home extends Component {
  render() {
    let { Posts } = attributes;
    return (
      <>
        <Head>
          {/* <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script> */}
        </Head>
        <article>
       
          <HomeContent />
          <div>
            {Posts.map((post, k) => (
              <div key={k}>
                <h1>{post.title}</h1>
                <h1>{post.date}</h1>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        </article>
      </>
    )
  }
}