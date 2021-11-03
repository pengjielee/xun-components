const ghpages = require('gh-pages');
const dayjs = require('dayjs');

ghpages.publish(
  'dist',
  {
    branch: 'gh-pages',
    repo: 'git@github.com:pengjielee/xun-components.git',
    message: `added on ${dayjs().format('YYYY-MM-DD HH:mm:ss')}`,
  },
  function (err) {
    if (err) {
      console.log('publish error');
      return;
    }
    console.log('publish success');
  },
);
