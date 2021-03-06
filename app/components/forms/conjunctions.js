/** @jsx React.DOM */

var React = require('react')
var chunk = require('chunk')
var conjunctions = require('aaronshaf-bible-data/words/sblgnt/json/conjunctions.json')

var conjunctionArray = Object.keys(conjunctions).map(function(conjunction) {
  return {
    conjunction: conjunction,
    occurrences: conjunctions[conjunction].occurrences
  } 
})
var chunkedConjunctions = chunk(conjunctionArray,4)

module.exports = React.createClass({
  displayName: 'Conjunctions',

  propTypes: {
    forms: React.PropTypes.any.isRequired
  },

  renderConjunctionCell: function(data) {
    var className = ''
    if(!this.props.forms || !this.props.forms.length) return null
    var morph = this.props.forms.get('C---------').get('morph')
    if(morph === data.conjunction) {
      className = 'bible-form-highlighted'
    }
    return (
      <td key={data.conjunction} className={className}>
        {data.conjunction} 
        <span className="bible-reference-count"> ({data.occurrences})</span>
      </td>
    )
  },

  render: function() {
    if(!this.props.forms || !this.props.forms.get) return null

    var row = 0
    var conjunctions = chunkedConjunctions.map(function(chunk) {
      var cells = chunk.map(this.renderConjunctionCell)
      return (
        <tr key={row++}>
          {cells}
        </tr>
      )
    }.bind(this))
    
    return (
      <div className="bible-paradigms">
        <table className="bible-conjunctions">
          <caption className="bible-panel-heading bible-morph-category">
            <h2>
              <span>Conjunctions</span>
            </h2>
          </caption>
          <tbody>
            {conjunctions}
          </tbody>
        </table>
      </div>
    )
  }
})


