/** @jsx React.DOM */

var React = require('react')

module.exports = React.createClass({
  // getDefaultProps: function() {
  //   return {
  //     value: 'default value'
  //   }
  // },

  render: function render() {
    return (
      <section className="bible-main-right-section">
        <this.props.activeRouteHandler />
      </section>
    )
  }
})