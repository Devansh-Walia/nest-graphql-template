## Who:

- Notifications for GLUE users
- GLUE developers

## Why:

- For driving the product by checking out the analytics.
- Show users notifications.
- Track all the events that happen on GLUE, it would help GLUE developers to fix any issues that GLUE users face.

## What:

#### Below table show all the possible GLUE Social events.
| Glue Social Events                     |
| :------------------------------------- |
| USER_SIGN_UP                           |
| REPLY_ON_COMMENT                       |
| REPLY_LIKED                            |
| CREATE_PORTAL                          |
| UPDATE_PORTAL                          |
| DELETE_PORTAL                          |
| PRIVATE_PORTAL_REQUEST_ACCESS          |
| PRIVATE_PORTAL_REQUEST_ACCESS_ACCEPTED |
| PORTAL_INVITE                          |
| PORTAL_INVITE_ACCEPTED                 |
| PORTAL_MEMBER_REQUEST                  |
| PORTAL_MEMBER_REQUEST_ACCEPTED         |
| NEW_PORTAL_FOLLOWER                    |
| POST_CREATED                           |
| POST_UPDATED                           |
| POST_DELETED                           | 
| COMMENT_LIKED                          |
| COMMENT_ON_POST                        |
| POST_LIKED                             |
| USER_FOLLOWED                          |
| USER_UNFOLLOWED                        |
| USER_UPDATED                           |

## How:

1. First we need to setup the Kafka Js.
2. The GLUE social server act as a Kafka Producer and it will captures all the events mentioned above through the GLUE web.
3. All events will be sent to Event-Server which will act as a Kafka Consumer.
4. In the Event-Server there is a custom decorator named MessageTopic which accept the events from GLUE Social server and store it into glue_app_user_events and glue_app_portal_events table.   

#### Below table show the all the social events with payload

| Event Name                              | File Name               | Function Name               | Payload                                                                              |
| :-------------------------------------- | :---------------------- | :-------------------------- | :----------------------------------------------------------------------------------- |
| USER_SIGN_UP                            | AppService              | handleRedirect              | { id, name, bio, profileImageUrl, gatewayUserId, isOnboarded }                       |
| REPLY_ON_COMMENT                        | CommentReplyService     | create                      | { id, content, commentId, userId }                                                   |
| REPLY_LIKED                             | ReplyLikeService        | create                      | { id, isLiked, replyId, userId }                                                     |
| CREATE_PORTAL                           | PortalService           | create                      | { id, name, slug, description, profileMediaUrl, type, privacy, isHidden, createdBy } |
| UPDATE_PORTAL                           | PortalService           | updatePortal                | { id, name, slug, description, profileMediaUrl, type, privacy, isHidden, createdBy } |
| DELETE_PORTAL                           | PortalService           | delete                      | { id, name, slug, description, profileMediaUrl, type, privacy, isHidden, createdBy } |
| PRIVATE_PORTAL_REQUEST_ACCESS           | PortalFollowerResolver  | followRequestAPortal        | { id, portalId, userId, status }                                                     |
| PRIVATE_PORTAL_REQUEST_ACCESS_ACCEPTED  | PortalFollowerResolver  | HandlePortalfollowRequests  | { id, portalId, userId, status }                                                     |
| PORTAL_INVITE                           | PortalMemberResolver    | sendInvite                  | { id, inviteRole, invitationStatus, portalId, userId }                               |
| PORTAL_INVITE_ACCEPTED                  | PortalMemberResolver    | inviteResponseHandler       | { id, inviteRole, invitationStatus, portalId, userId, portal }                       |
| PORTAL_MEMBER_REQUEST                   | PortalMemberResolver    | joinPortalAsMember          | { id, invitationStatus, portalId, userId, portal }                                   |
| PORTAL_MEMBER_REQUEST_ACCEPTED          | PortalMemberResolver    | handleMemberRequests        | { id, invitationStatus, portalId, userId }                                           |
| NEW_PORTAL_FOLLOWER                     | PortalMemberService     | create                      | { id, status, userId, portalId }                                                     |
| POST_CREATED                            | PortalPostService       | create                      | { id, content, slug, type, roomClosedAt, portalId, userId, roomId }                  |
| POST_UPDATED                            | PortalPostService       | updateById                  | { content, media }                                                                   |
| POST_DELETED                            | PortalPostService       | delete, deleteById          | { id, content, slug, type, roomClosedAt, portalId, userId, roomId }                  |
| COMMENT_LIKED                           | CommentLikeService      | create                      | { id, isLiked, user, comment }                                                       |
| COMMENT_ON_POST                         | PostCommentService      | create                      | { id, content, user, post }                                                          |
| POST_LIKED                              | PostLikeService         | create, update              | { id, isLiked, user, post }                                                          |
| USER_FOLLOWED                           | UserService             | followUser                  | { id, userId, followingId, isFollowing }                                             |
| USER_UNFOLLOWED                         | UserService             | unfollowUser                | { id, userId, followingId, isFollowing }                                             |
| USER_UPDATED                            | UserService             | updateUser                  | { id, name, bio, profileImageUrl, gatewayUserId, isOnboarded }                       |
