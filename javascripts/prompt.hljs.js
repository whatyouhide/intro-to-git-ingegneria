var hljs = remark.highlighter.engine;
hljs.registerLanguage('prompt', function () {
  'use strict';

  return {
    contains: [
      {
        className: 'constant',
        begin: '^(ironmac|whatyouhide)'
      },
      {
        className: 'keyword',
        begin: '~\/Code.*? '
      }
    ]
  };
});
