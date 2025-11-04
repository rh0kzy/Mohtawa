const User = require('./User');
const SocialAccount = require('./SocialAccount');
const Post = require('./Post');
const Analytics = require('./Analytics');
const Subscription = require('./Subscription');

// Define relationships
User.hasMany(SocialAccount, { foreignKey: 'userId', as: 'socialAccounts' });
SocialAccount.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Post, { foreignKey: 'userId', as: 'posts' });
Post.belongsTo(User, { foreignKey: 'userId' });

Post.hasMany(Analytics, { foreignKey: 'postId', as: 'analytics' });
Analytics.belongsTo(Post, { foreignKey: 'postId' });

User.hasOne(Subscription, { foreignKey: 'userId', as: 'subscription' });
Subscription.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
  User,
  SocialAccount,
  Post,
  Analytics,
  Subscription
};
