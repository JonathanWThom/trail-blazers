import { TrailblazersPage } from './app.po';

describe('trailblazers App', function() {
  let page: TrailblazersPage;

  beforeEach(() => {
    page = new TrailblazersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
