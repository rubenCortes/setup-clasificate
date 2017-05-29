import { SetupClasificatePage } from './app.po';

describe('setup-clasificate App', () => {
  let page: SetupClasificatePage;

  beforeEach(() => {
    page = new SetupClasificatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
