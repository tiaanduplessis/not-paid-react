import React, { Component } from 'react'

import NotPaid from 'not-paid-react'

export default class App extends Component {
  render () {
    return (
      <div>
        <NotPaid dueDate="2019-01-26" daysOverdue={60}/>
        <h1>Hi</h1>
      </div>
    )
  }
}
