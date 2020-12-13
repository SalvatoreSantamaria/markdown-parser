import { expect } from 'chai'
import { markdownParser } from './markdownParser';

describe('Markdown Headers', () => {
  it('passes basic valid cases', () => {
    const expectedH1 = "<h1>header</h1>"
    const actualH1 = markdownParser("# header")
    const expectedH2 = "<h2>smaller header</h2>"
    const actualH2 = markdownParser("## smaller header")
    const expectedH6 = "<h6>h6 header</h6>"
    const actualH6 = markdownParser("###### h6 header")

    expect(actualH1).to.deep.equal(expectedH1)
    expect(actualH2).to.deep.equal(expectedH2)
    expect(actualH6).to.deep.equal(expectedH6)
  })

  it("returns the input for basic invalid cases where input is '#Invalid' ", () => {
    const expected = '#Invalid'
    const actual = markdownParser('#Invalid') 
    expect(actual).to.deep.equal(expected)
  })

  it("returns the input for basic invalid cases where input is '####### Invalid' ", () => {
    const expected = '########Invalid'
    const actual = markdownParser('########Invalid') 
    expect(actual).to.deep.equal(expected)
  })

  it("returns the input for basic invalid cases where input is ' #Invalid' ", () => {
    const expected = ' #Invalid'
    const actual = markdownParser(' #Invalid') 
    expect(actual).to.deep.equal(expected)
  })

  it("returns the input for basic invalid cases where input is ' # Invalid' ", () => {
    const expected = ' # Invalid'
    const actual = markdownParser(' # Invalid') 
    expect(actual).to.deep.equal(expected)
  })


})


// let assert = require("chai").assert;
// describe('Markdown Headers', function() {
//   it('basic_valid_cases', function() {
//     //assert.deepEqual(markdownParser("# header"), "<h1>header</h1>");
//     assert.deepEqual(markdownParser("## smaller header"), "<h2>smaller header</h2>");
//   });
//   it('basic_invalid_cases', function() {
//     assert.deepEqual(markdownParser("#Invalid"), "#Invalid");
//   });
// });