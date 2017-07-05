describe('LearnJS', function() {
  it('can show a problem view', function() {
    learnjs.showView('#problem1');
    expect($('.view-container .problem-view').length).toEqual(1);
  });
});
