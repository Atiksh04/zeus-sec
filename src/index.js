import React from 'react'
import { render } from 'react-dom'

import HomePage from './pages/index'

const target = document.querySelector('#root')

render(

      <div>
        <HomePage />
      </div>
    ,
  target
)
