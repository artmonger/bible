jest.dontMock('../../../app/models/book')
jest.dontMock('immutable')

describe('models/book', function() {
  it('#findAll', function() {
    var BookModel = require('../../../app/models/book')
    expect(BookModel.findAll().length).toBe(27)
  })

  /*
  it('#findByPath', function() {
    var BookModel = require('../../../app/models/book')
    expect(BookModel.findByPath('revelation').get('osisID')).toBe('Rev')
  })

  it('#findPreviousChapter', function() {
    var BookModel = require('../../../app/models/book')

    var matthew = BookModel.findByPath('matthew')
    var mark = BookModel.findByPath('mark')

    expect(BookModel.findPreviousChapter(mark,2).get('book').get('path')).toBe('mark')
    expect(BookModel.findPreviousChapter(mark,2).get('chapter')).toBe(1)

    expect(BookModel.findPreviousChapter(mark,1).get('book').get('path')).toBe('matthew')
    expect(BookModel.findPreviousChapter(mark,1).get('chapter')).toBe(28)
  })

  it('#findNextChapter', function() {
    var BookModel = require('../../../app/models/book')

    var matthew = BookModel.findByPath('matthew')
    var mark = BookModel.findByPath('mark')

    expect(BookModel.findNextChapter(matthew,1).get('book')).toBe(matthew)
    expect(BookModel.findNextChapter(matthew,1).get('chapter')).toBe(2)

    expect(BookModel.findNextChapter(matthew,28).get('book')).toBe(mark)
    expect(BookModel.findNextChapter(matthew,28).get('chapter')).toBe(1)
  })
 */
})
