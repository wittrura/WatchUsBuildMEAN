import { WatchusbuildmeanPage } from './app.po';

describe('watchusbuildmean App', () => {
  let page: WatchusbuildmeanPage;

  beforeEach(() => {
    page = new WatchusbuildmeanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
