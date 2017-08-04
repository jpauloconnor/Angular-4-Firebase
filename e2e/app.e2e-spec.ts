import { WhatIDoPage } from './app.po';

describe('what-i-do App', () => {
  let page: WhatIDoPage;

  beforeEach(() => {
    page = new WhatIDoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
