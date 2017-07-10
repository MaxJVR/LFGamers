import { LFGamersPage } from './app.po';

describe('lfgamers App', () => {
  let page: LFGamersPage;

  beforeEach(() => {
    page = new LFGamersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
