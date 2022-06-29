import { HighlightTextPipe } from './highlight-text.pipe';

//PIPES ARE STATELESS AND THERE IS NO NEED TO SET UP ANYTHING
describe('HighlightTextPipe', () => {
  it('create an instance', () => {
    const pipe = new HighlightTextPipe();
    expect(pipe).toBeTruthy();
  });

  it('wrap a simple string in a <span>', ()=>{
    const pipe = new HighlightTextPipe();
    expect(pipe.transform('foobar', 'foo')).toBe('<span class="highlight-text">foo</span>bar')
  })

  it('wrap an uppercase string in a <span>', ()=>{
    const pipe = new HighlightTextPipe();
    expect(pipe.transform('FOOBAR', 'foo')).toBe('<span class="highlight-text">FOO</span>BAR')
  })

  it('wrap a string with spaces in a <span>', ()=>{
    const pipe = new HighlightTextPipe();
    expect(pipe.transform('FOO BAR', 'foo')).toBe('<span class="highlight-text">FOO</span> BAR')
  })

  it('wrap multiple words in a <span>', ()=>{
    const pipe = new HighlightTextPipe();
    expect(pipe.transform('FOO BAR FOO', 'foo')).toBe('<span class="highlight-text">FOO</span> BAR <span class="highlight-text">FOO</span>')
  })
});
