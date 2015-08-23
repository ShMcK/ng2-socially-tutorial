Package.describe({
  name: 'shmck:ng2-socially-tutorial',
  version: '0.0.1',
  summary: 'Meteor-Angular2 tutorial: Socially',
  git: 'https://github.com/shmck/ng2-socially-tutorial',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use([
    'mdg:tutorial-step-diff-compiler',
    'mdg:tutorial-diff-box',
    'mdg:tutorial-registry'
  ]);
  api.addFiles([
    'angular-meteor2.multi.patch'
  ]);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('shmck:ng2-socially-tutorial');
  api.addFiles('ng2-socially-tutorial-tests.js');
});
