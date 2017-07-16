import { AlicespyglassPage } from './app.po';

describe('alicespyglass App', function() {
  let page: AlicespyglassPage;

  beforeEach(() => {
    page = new AlicespyglassPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
