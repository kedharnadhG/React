import React from 'react'
import GrandDaughter from './GrandDaughter'
import Grandson from './Grandson'

function Child() {
  return (
    <div className='children'>
        <h1>Child</h1>
        <GrandDaughter/>
        <Grandson />
    </div>
  )
}

export default Child