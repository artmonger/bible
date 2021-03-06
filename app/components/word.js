/** @jsx React.DOM */

var React = require('react')
var Link = require('react-router').Link
var unaccented = require('../utils/unaccented')
var GreekWordModel = require('../models/greek-word')

module.exports = React.createClass({
  propTypes: {
    book: React.PropTypes.any.isRequired,
    chapter: React.PropTypes.any.isRequired,
    verseNumber: React.PropTypes.any.isRequired
  },

  shouldComponentUpdate: function(nextProps) {
    // nextProps.word.get(5) !== this.props.word.get(5)
    var shouldUpdate = nextProps.book !== this.props.book ||
        nextProps.chapter !== this.props.chapter ||
        nextProps.verseNumber !== this.props.verseNumber

    return shouldUpdate
  },

  handleClick: function() {
    this.refs.link.getDOMNode().focus()
  },

  handleMouseEnter: function() {
    var word = unaccented(this.props.word.get(5))
    GreekWordModel.findByLemma(word,function() {})
  },

  render: function() {
    var displayWord = this.props.word.get(2)
    
    // TODO: Only do this in Chrome and IE Windows
    displayWord = displayWord
      .replace('⸀','')
      .replace('⸂','')
      .replace('⸃','')

    var params = {
      book: this.props.book,
      chapter: this.props.chapter,
      verse: this.props.verseNumber,
      wordIndex: this.props.wordIndex,
      word: this.props.word.get(3)
    }

    return (
      <span>
        <Link
            onClick={this.handleClick}
            onMouseEnter={this.handleMouseEnter}
            onFocus={this.handleMouseEnter}
            ref="link"
            to="verse"
            params={params}
            className="bible-word">{displayWord}</Link>
        <span className="bible-word-divider"> </span>
      </span>
    )
  }
})
