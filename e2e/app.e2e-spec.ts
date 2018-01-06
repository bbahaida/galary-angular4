import { Ang4AppPage } from './app.po';

describe('ang4-app App', function() {
  let page: Ang4AppPage;

  beforeEach(() => {
    page = new Ang4AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
