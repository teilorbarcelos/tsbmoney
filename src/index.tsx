import React from 'react'
import ReactDOM from 'react-dom'
import { createServer, Model } from 'miragejs'
import { App } from './App'

createServer({
  models: {
    transactions: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Site entregue',
          value: 4500,
          type: 'income',
          category: 'Development',
          createdAt: new Date('2021-11-23')
        },
        {
          id: 2,
          title: 'Aluguel',
          value: 500,
          type: 'outcome',
          category: 'Moradia',
          createdAt: new Date('2021-12-03')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transactions')
    })

    this.post('/newTransaction', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transactions', {
        ...data,
        createdAt: new Date(Date.now())
      })
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)