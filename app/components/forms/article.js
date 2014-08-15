/** @jsx React.DOM */
//
var React = require('react')
var Parsing = require('../../utils/parsing')
var GendersHeader = require('./genders-header')

module.exports = React.createClass({
  propTypes: {
    forms: React.PropTypes.any.isRequired,
    parseCategories: React.PropTypes.any.isRequired
  },
  
  render: function() {
    var numbers = Parsing.get('number').get('options').toArray().map(function(number) {
      var cases = Parsing.get('case').get('options').toArray().map(function(_case) {
        if(_case.get('label') === 'Vocative') return
        var forms = Parsing.get('gender').get('options').toArray().map(function(gender) {
          var formCode = 'RA----' + _case.get('code') + number.get('code') + gender.get('code') + '-'
          if(!this.props.forms || !this.props.forms.get) return
          var form = this.props.forms.get(formCode)

          if(!form || !form.get) return
          var morph = form.get('morph')

          var sameNumber = this.props.parseCategories.get('number').get('code') === number.get('code')
          var sameCase = this.props.parseCategories.get('case').get('code') === _case.get('code')
          var sameGender = this.props.parseCategories.get('gender').get('code') === gender.get('code')

          var className = ''
          if(sameNumber && sameCase && sameGender) {
            className = 'bible-form-highlighted'
          }

          return (
            <td key={gender.get('code')} className={className}>
              {morph}
            </td>
          )
        }.bind(this))

        return (
          <tr key={_case.get('code')}>
            <th>{_case.get('label')}</th>
            {forms}
          </tr>
        )
      }.bind(this))
      return (
        <table key={number.get('code')}>
          <caption className="bible-panel-heading bible-morph-category">
            <h2>
              <span>{number.get('label')} articles</span>
            </h2>
          </caption>
          <GendersHeader />
          {cases}
        </table>
      )
    }.bind(this))

    return (
      <div className="bible-paradigms">{numbers}</div>
    )
  }
})
