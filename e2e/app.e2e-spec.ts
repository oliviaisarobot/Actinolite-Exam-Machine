import { ExamMachinePage } from './app.po';

describe('exam-machine App', function() {
  let page: ExamMachinePage;

  beforeEach(() => {
    page = new ExamMachinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
