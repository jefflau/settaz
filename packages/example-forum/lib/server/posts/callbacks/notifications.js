/*

Notifications for new posts and post approval.

*/

import { Posts } from '../../../modules/posts/index.js'
import Users from 'meteor/vulcan:users';
import { Connectors } from 'meteor/vulcan:core';
import { createNotification } from '../../emails/notifications.js';

/**
 * @summary Add notification callback when a post is approved
 */
export function approvedNotification (post) {
  createNotification(post.userId, 'postApproved', {documentId: post._id});
}
// addCallback('posts.approve.async', PostsApprovedNotification);


/**
 * @summary Add new post notification callback on post submit
 */
export function createNotifications (post) {

  const adminUsers = Connectors.find(Users, { isAdmin: true }, { fields: { _id: 1 }});
  let adminIds = _.pluck(adminUsers, '_id');
  let notifiedUserIds = _.pluck(Users.find({'notifications_posts': true}, {fields: {_id:1}}).fetch(), '_id');

  // remove post author ID from arrays
  adminIds = _.without(adminIds, post.userId);
  notifiedUserIds = _.without(notifiedUserIds, post.userId);

  if (post.status === Posts.config.STATUS_PENDING && !!adminIds.length) {
    // if post is pending, only notify admins
    createNotification(adminIds, 'newPendingPost', {documentId: post._id});
  } else if (!!notifiedUserIds.length) {
    // if post is approved, notify everybody
    createNotification(notifiedUserIds, 'newPost', {documentId: post._id});
  }

}
// addCallback('posts.new.async', PostsNewNotifications);
