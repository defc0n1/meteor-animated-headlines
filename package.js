"use strict";

Package.describe({
  name: 't3db0t:animated-headlines',
  version: '0.0.1',
  summary: 'Codyhouse Animated Headlines',
  git: 'https://github.com/t3db0t/meteor-animated-headlines.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4');
  api.use('jquery', 'client');
  api.addFiles('main.js', 'client');
  api.addFiles('style.css', 'client');
  api.export('AnimatedHeadlines');
});

Package.onTest(function(api) {
});
