import React from 'react'
import ReactDOM from 'react-dom'
import { createServer } from 'miragejs'
import { App } from './App'

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Site entregue',
          value: 1500,
          type: 'income',
          category: 'Desenvolvimento',
          createdAt: new Date('2021-11-23')
        },
        {
          id: 2,
          title: 'Aluguel',
          value: 500,
          type: 'outcome',
          category: 'casa',
          createdAt: new Date('2021-12-03')
        },
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)