const { expect } = require('chai');
const package = require('../package.json');

describe('Intro', () => {
  it('should invite participants', () => {
    console.log('Welcome to JS Mentoring program. You are ready to start the journey!');
  });

  it('package should have 3 authors', () => {
    expect(package.authors, 'New author is not found').to.have.length(3);
  });

  it('added value should be an email', () => {
    const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const matchResult = package.authors[2]?.toLowerCase().match(reg);

    expect(matchResult, 'Added value is not an email').not.to.equal(null);
    expect(matchResult, 'New author is not found').not.to.equal(undefined);
  });
});