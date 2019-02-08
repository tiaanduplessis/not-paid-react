# not-paid-react

> React wrapper around [not-paid](https://github.com/kleampa/not-paid)

[![NPM](https://img.shields.io/npm/v/not-paid-react.svg)](https://www.npmjs.com/package/not-paid-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save not-paid-react
# OR
yarn add not-paid-react
```

## Usage

```jsx
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
```

## License

MIT © [tiaanduplessis](https://github.com/tiaanduplessis)
