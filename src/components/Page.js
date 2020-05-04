import React, { useContext } from 'react';
import SubPage from './SubPage'
import {TestContext} from './../../store'

const Page = () => {
  const [test] = useContext(TestContext)

  return (
    <div className="container">
      <div className="main">
        <SubPage />
        <div>{test}</div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
        }
        .main {
          display: flex;
          flex-direction: column;
          width: 400px;
          height: 400px;
          background: #D8D8D8;
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
  )
}

export default Page;