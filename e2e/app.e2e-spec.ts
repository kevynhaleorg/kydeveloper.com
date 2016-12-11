import { KydeveloperPage } from './app.po';

describe('kydeveloper App', function() {
  let page: KydeveloperPage;

  beforeEach(() => {
    page = new KydeveloperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
