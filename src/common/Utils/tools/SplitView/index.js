import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import MasterView from './MasterView'
import DetailView from './DetailView'

class SplitView extends Component {
  static Master = MasterView
  static Detail = DetailView

  static defaultProps = {
    isReady: true
  }

  render() {
    const { className, isReady, expand } = this.props
    const classNames = classnames(
      'p-wrapper',
      expand ? 'expanded' : null,
      isReady ? null : 'hidden',
      className || null
    )

    return (
      <div className={classNames}>
        {this.props.children}
      </div>
    )
  }
}

SplitView.propTypes = {
  children: PropTypes.node,
  className: PropTypes.any,
  expand: PropTypes.bool,
  isReady: PropTypes.bool
}

SplitView.defaultProps = {
  expand: false,
  isReady: true
}

export default SplitView
