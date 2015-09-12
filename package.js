Package.describe({
  name: 'makalu:stripe-node',
  version: '0.0.2',
  summary: 'Stripe API for node.js repackaged for Meteor',
  git: 'https://github.com/makalu/meteor-stripe-node.git',
  documentation: 'README.md'
});

Npm.depends({ "stripe": "3.8.0" });

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('stripe-node.js', 'server');
});
