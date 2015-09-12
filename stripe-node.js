Meteor.startup(function() {
  this.Stripe = Npm.require('stripe')(process.env.STRIPE_SECRET);
})