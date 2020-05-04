import React, {useContext} from 'react';
import {TestContext} from './../../store'

const SubPage = () => {
  const [test, setTest] = useContext(TestContext)

  const handleSubmit = e => {
    e.preventDefault();
    console.log(subPage)
  }

  return (
    <div className="container">
      <form className="main" onSubmit={handleSubmit}>
        <h3>Learn Context</h3>
        <input type="text" placeholder="Type..." 
          value={test} onChange={e => setTest(e.target.value)}
        />
        <input type="submit" value="Change" />
      </form>
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
          width: 300px;
          height: 300px;
          background: #FFFFFF;
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

export default SubPage;