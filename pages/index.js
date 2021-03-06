import React from 'react';
import Head from 'next/head'
import Page from './../src/components/Page'

import Store from './../store'

const Main = () => {
  return (
    <Store>
    <div className="container">
      <Head>
        <title>Learn Context</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main">
        <Page />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          width: 100vw;
          height: 100vh;
          justify-content: center;
          align-items: center;
        }
        .main {
          display: flex;
          width: 600px;
          height: 600px;
          background: #f8f8f8;
          justify-content: center;
          align-items: center;
          border: solid 1px #000000;
        }

        @media (min-width: 600px) {
          
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
    </Store>
  )
}

export default Main;