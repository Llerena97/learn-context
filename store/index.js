import React, {useState} from 'react';

export const TestContext = React.createContext('testValue')

const Store = ({children}) => {
  const [test, setTest] = useState('testValue')
  console.log('test: ', test )
  return (
    <TestContext.Provider value={[test, setTest]}>
      {children}
    </TestContext.Provider>
  )
}

export default Store;