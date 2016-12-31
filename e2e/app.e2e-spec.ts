import { SelfDev2Page } from './app.po';

describe('self-dev2 App', function() {
  let page: SelfDev2Page;

  beforeEach(() => {
    page = new SelfDev2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
