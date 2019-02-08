import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NotPaid extends Component {

  static defaultProps = {
    daysOverdue: 60
  }

  static propTypes = {
    dueDate: PropTypes.string.isRequired,
    daysOverdue: PropTypes.number
  }

  componentDidMount() {
    const {dueDate: dueDateStr, daysOverdue} = this.props

    const dueDate = new Date(dueDateStr)
    const currentDate = new Date()
    const utc1 = Date.UTC(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate());
    const utc2 = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const days = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));

    if(days > 0) {
      const daysLate = daysOverdue - days;
      let opacity = (daysLate*100/daysOverdue)/100;
        opacity = (opacity < 0) ? 0 : opacity;
        opacity = (opacity > 1) ? 1 : opacity;

      if(opacity >= 0 && opacity <= 1) {
        document.getElementsByTagName("BODY")[0].style.opacity = opacity;
      }

    }

  }

  render() {
    return null
  }
}
