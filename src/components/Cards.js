import React from 'react'

import Card from './Card'

function Cards() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-sm'>
                <Card></Card>
            </div>
            <div className='col-sm'>
                <Card></Card>
            </div>
            <div className='col-sm'>
                <Card></Card>
            </div>
        </div>
    </div>
  )
}

export default Cards