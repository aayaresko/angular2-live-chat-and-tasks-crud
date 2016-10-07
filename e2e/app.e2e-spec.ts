import { LiveChatPage } from './app.po';

describe('live-chat App', function() {
  let page: LiveChatPage;

  beforeEach(() => {
    page = new LiveChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
