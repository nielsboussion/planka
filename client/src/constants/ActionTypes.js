export default {
  /* Socket */

  SOCKET_STATUS_CHANGED: 'SOCKET_STATUS_CHANGED',

  /* Login */

  AUTHENTICATE: 'AUTHENTICATE',
  AUTHENTICATE_ERROR_CLEAR: 'AUTHENTICATE_ERROR_CLEAR',
  LOGOUT: 'LOGOUT',
  AUTHENTICATE_REQUESTED: 'AUTHENTICATE_REQUESTED',
  AUTHENTICATE_SUCCEEDED: 'AUTHENTICATE_SUCCEEDED',
  AUTHENTICATE_FAILED: 'AUTHENTICATE_FAILED',

  /* App */

  APP_INITIALIZED: 'APP_INITIALIZED',

  /* Modal */

  MODAL_OPEN: 'MODAL_OPEN',
  MODAL_CLOSE: 'MODAL_CLOSE',

  /* Users */

  USERS_FETCH_REQUESTED: 'USERS_FETCH_REQUESTED',
  USERS_FETCH_SUCCEEDED: 'USERS_FETCH_SUCCEEDED',
  USERS_FETCH_FAILED: 'USERS_FETCH_FAILED',

  /* User */

  USER_CREATE: 'USER_CREATE',
  USER_CREATE_ERROR_CLEAR: 'USER_CREATE_ERROR_CLEAR',
  USER_UPDATE: 'USER_UPDATE',
  USER_EMAIL_UPDATE_ERROR_CLEAR: 'USER_EMAIL_UPDATE_ERROR_CLEAR',
  USER_PASSWORD_UPDATE_ERROR_CLEAR: 'USER_PASSWORD_UPDATE_ERROR_CLEAR',
  USER_USERNAME_UPDATE_ERROR_CLEAR: 'USER_USERNAME_UPDATE_ERROR_CLEAR',
  USER_DELETE: 'USER_DELETE',
  USER_TO_CARD_ADD: 'USER_TO_CARD_ADD',
  USER_FROM_CARD_REMOVE: 'USER_FROM_CARD_REMOVE',
  USER_TO_BOARD_FILTER_ADD: 'USER_TO_BOARD_FILTER_ADD',
  USER_FROM_BOARD_FILTER_REMOVE: 'USER_FROM_BOARD_FILTER_REMOVE',
  USER_CREATE_REQUESTED: 'USER_CREATE_REQUESTED',
  USER_CREATE_SUCCEEDED: 'USER_CREATE_SUCCEEDED',
  USER_CREATE_FAILED: 'USER_CREATE_FAILED',
  USER_CREATE_RECEIVED: 'USER_CREATE_RECEIVED',
  CURRENT_USER_FETCH_REQUESTED: 'CURRENT_USER_FETCH_REQUESTED',
  CURRENT_USER_FETCH_SUCCEEDED: 'CURRENT_USER_FETCH_SUCCEEDED',
  CURRENT_USER_FETCH_FAILED: 'CURRENT_USER_FETCH_FAILED',
  USER_UPDATE_REQUESTED: 'USER_UPDATE_REQUESTED',
  USER_UPDATE_SUCCEEDED: 'USER_UPDATE_SUCCEEDED',
  USER_UPDATE_FAILED: 'USER_UPDATE_FAILED',
  USER_UPDATE_RECEIVED: 'USER_UPDATE_RECEIVED',
  USER_EMAIL_UPDATE_REQUESTED: 'USER_EMAIL_UPDATE_REQUESTED',
  USER_EMAIL_UPDATE_SUCCEEDED: 'USER_EMAIL_UPDATE_SUCCEEDED',
  USER_EMAIL_UPDATE_FAILED: 'USER_EMAIL_UPDATE_FAILED',
  USER_PASSWORD_UPDATE_REQUESTED: 'USER_PASSWORD_UPDATE_REQUESTED',
  USER_PASSWORD_UPDATE_SUCCEEDED: 'USER_PASSWORD_UPDATE_SUCCEEDED',
  USER_PASSWORD_UPDATE_FAILED: 'USER_PASSWORD_UPDATE_FAILED',
  USER_USERNAME_UPDATE_REQUESTED: 'USER_USERNAME_UPDATE_REQUESTED',
  USER_USERNAME_UPDATE_SUCCEEDED: 'USER_USERNAME_UPDATE_SUCCEEDED',
  USER_USERNAME_UPDATE_FAILED: 'USER_USERNAME_UPDATE_FAILED',
  USER_AVATAR_UPLOAD_REQUESTED: 'USER_AVATAR_UPLOAD_REQUESTED',
  USER_AVATAR_UPLOAD_SUCCEEDED: 'USER_AVATAR_UPLOAD_SUCCEEDED',
  USER_AVATAR_UPLOAD_FAILED: 'USER_AVATAR_UPLOAD_FAILED',
  USER_DELETE_REQUESTED: 'USER_DELETE_REQUESTED',
  USER_DELETE_SUCCEEDED: 'USER_DELETE_SUCCEEDED',
  USER_DELETE_FAILED: 'USER_DELETE_FAILED',
  USER_DELETE_RECEIVED: 'USER_DELETE_RECEIVED',

  /* Projects */

  PROJECTS_FETCH_REQUESTED: 'PROJECTS_FETCH_REQUESTED',
  PROJECTS_FETCH_SUCCEEDED: 'PROJECTS_FETCH_SUCCEEDED',
  PROJECTS_FETCH_FAILED: 'PROJECTS_FETCH_FAILED',

  /* Project */

  PROJECT_CREATE: 'PROJECT_CREATE',
  PROJECT_UPDATE: 'PROJECT_UPDATE',
  PROJECT_DELETE: 'PROJECT_DELETE',
  PROJECT_CREATE_REQUESTED: 'PROJECT_CREATE_REQUESTED',
  PROJECT_CREATE_SUCCEEDED: 'PROJECT_CREATE_SUCCEEDED',
  PROJECT_CREATE_FAILED: 'PROJECT_CREATE_FAILED',
  PROJECT_CREATE_RECEIVED: 'PROJECT_CREATE_RECEIVED',
  PROJECT_UPDATE_REQUESTED: 'PROJECT_UPDATE_REQUESTED',
  PROJECT_UPDATE_SUCCEEDED: 'PROJECT_UPDATE_SUCCEEDED',
  PROJECT_UPDATE_FAILED: 'PROJECT_UPDATE_FAILED',
  PROJECT_UPDATE_RECEIVED: 'PROJECT_UPDATE_RECEIVED',
  PROJECT_DELETE_REQUESTED: 'PROJECT_DELETE_REQUESTED',
  PROJECT_DELETE_SUCCEEDED: 'PROJECT_DELETE_SUCCEEDED',
  PROJECT_DELETE_FAILED: 'PROJECT_DELETE_FAILED',
  PROJECT_DELETE_RECEIVED: 'PROJECT_DELETE_RECEIVED',

  /* Project membership */

  PROJECT_MEMBERSHIP_CREATE: 'PROJECT_MEMBERSHIP_CREATE',
  PROJECT_MEMBERSHIP_DELETE: 'PROJECT_MEMBERSHIP_DELETE',
  PROJECT_MEMBERSHIP_CREATE_REQUESTED: 'PROJECT_MEMBERSHIP_CREATE_REQUESTED',
  PROJECT_MEMBERSHIP_CREATE_SUCCEEDED: 'PROJECT_MEMBERSHIP_CREATE_SUCCEEDED',
  PROJECT_MEMBERSHIP_CREATE_FAILED: 'PROJECT_MEMBERSHIP_CREATE_FAILED',
  PROJECT_MEMBERSHIP_CREATE_RECEIVED: 'PROJECT_MEMBERSHIP_CREATE_RECEIVED',
  PROJECT_MEMBERSHIP_DELETE_REQUESTED: 'PROJECT_MEMBERSHIP_DELETE_REQUESTED',
  PROJECT_MEMBERSHIP_DELETE_SUCCEEDED: 'PROJECT_MEMBERSHIP_DELETE_SUCCEEDED',
  PROJECT_MEMBERSHIP_DELETE_FAILED: 'PROJECT_MEMBERSHIP_DELETE_FAILED',
  PROJECT_MEMBERSHIP_DELETE_RECEIVED: 'PROJECT_MEMBERSHIP_DELETE_RECEIVED',

  /* Board */

  BOARD_CREATE: 'BOARD_CREATE',
  BOARD_UPDATE: 'BOARD_UPDATE',
  BOARD_DELETE: 'BOARD_DELETE',
  BOARD_CREATE_REQUESTED: 'BOARD_CREATE_REQUESTED',
  BOARD_CREATE_SUCCEEDED: 'BOARD_CREATE_SUCCEEDED',
  BOARD_CREATE_FAILED: 'BOARD_CREATE_FAILED',
  BOARD_CREATE_RECEIVED: 'BOARD_CREATE_RECEIVED',
  BOARD_FETCH_REQUESTED: 'BOARD_FETCH_REQUESTED',
  BOARD_FETCH_SUCCEEDED: 'BOARD_FETCH_SUCCEEDED',
  BOARD_FETCH_FAILED: 'BOARD_FETCH_FAILED',
  BOARD_UPDATE_REQUESTED: 'BOARD_UPDATE_REQUESTED',
  BOARD_UPDATE_SUCCEEDED: 'BOARD_UPDATE_SUCCEEDED',
  BOARD_UPDATE_FAILED: 'BOARD_UPDATE_FAILED',
  BOARD_UPDATE_RECEIVED: 'BOARD_UPDATE_RECEIVED',
  BOARD_DELETE_REQUESTED: 'BOARD_DELETE_REQUESTED',
  BOARD_DELETE_SUCCEEDED: 'BOARD_DELETE_SUCCEEDED',
  BOARD_DELETE_FAILED: 'BOARD_DELETE_FAILED',
  BOARD_DELETE_RECEIVED: 'BOARD_DELETE_RECEIVED',

  /* List */

  LIST_CREATE: 'LIST_CREATE',
  LIST_UPDATE: 'LIST_UPDATE',
  LIST_DELETE: 'LIST_DELETE',
  LIST_CREATE_REQUESTED: 'LIST_CREATE_REQUESTED',
  LIST_CREATE_SUCCEEDED: 'LIST_CREATE_SUCCEEDED',
  LIST_CREATE_FAILED: 'LIST_CREATE_FAILED',
  LIST_CREATE_RECEIVED: 'LIST_CREATE_RECEIVED',
  LIST_UPDATE_REQUESTED: 'LIST_UPDATE_REQUESTED',
  LIST_UPDATE_SUCCEEDED: 'LIST_UPDATE_SUCCEEDED',
  LIST_UPDATE_FAILED: 'LIST_UPDATE_FAILED',
  LIST_UPDATE_RECEIVED: 'LIST_UPDATE_RECEIVED',
  LIST_DELETE_REQUESTED: 'LIST_DELETE_REQUESTED',
  LIST_DELETE_SUCCEEDED: 'LIST_DELETE_SUCCEEDED',
  LIST_DELETE_FAILED: 'LIST_DELETE_FAILED',
  LIST_DELETE_RECEIVED: 'LIST_DELETE_RECEIVED',

  /* Label */

  LABEL_CREATE: 'LABEL_CREATE',
  LABEL_UPDATE: 'LABEL_UPDATE',
  LABEL_DELETE: 'LABEL_DELETE',
  LABEL_TO_CARD_ADD: 'LABEL_TO_CARD_ADD',
  LABEL_FROM_CARD_REMOVE: 'LABEL_FROM_CARD_REMOVE',
  LABEL_TO_BOARD_FILTER_ADD: 'LABEL_TO_BOARD_FILTER_ADD',
  LABEL_FROM_BOARD_FILTER_REMOVE: 'LABEL_FROM_BOARD_FILTER_REMOVE',
  LABEL_CREATE_REQUESTED: 'LABEL_CREATE_REQUESTED',
  LABEL_CREATE_SUCCEEDED: 'LABEL_CREATE_SUCCEEDED',
  LABEL_CREATE_FAILED: 'LABEL_CREATE_FAILED',
  LABEL_CREATE_RECEIVED: 'LABEL_CREATE_RECEIVED',
  LABEL_UPDATE_REQUESTED: 'LABEL_UPDATE_REQUESTED',
  LABEL_UPDATE_SUCCEEDED: 'LABEL_UPDATE_SUCCEEDED',
  LABEL_UPDATE_FAILED: 'LABEL_UPDATE_FAILED',
  LABEL_UPDATE_RECEIVED: 'LABEL_UPDATE_RECEIVED',
  LABEL_DELETE_REQUESTED: 'LABEL_DELETE_REQUESTED',
  LABEL_DELETE_SUCCEEDED: 'LABEL_DELETE_SUCCEEDED',
  LABEL_DELETE_FAILED: 'LABEL_DELETE_FAILED',
  LABEL_DELETE_RECEIVED: 'LABEL_DELETE_RECEIVED',

  /* Card */

  CARD_CREATE: 'CARD_CREATE',
  CARD_UPDATE: 'CARD_UPDATE',
  CARD_DELETE: 'CARD_DELETE',
  CARD_CREATE_REQUESTED: 'CARD_CREATE_REQUESTED',
  CARD_CREATE_SUCCEEDED: 'CARD_CREATE_SUCCEEDED',
  CARD_CREATE_FAILED: 'CARD_CREATE_FAILED',
  CARD_CREATE_RECEIVED: 'CARD_CREATE_RECEIVED',
  CARD_FETCH_REQUESTED: 'CARD_FETCH_REQUESTED',
  CARD_FETCH_SUCCEEDED: 'CARD_FETCH_SUCCEEDED',
  CARD_FETCH_FAILED: 'CARD_FETCH_FAILED',
  CARD_UPDATE_REQUESTED: 'CARD_UPDATE_REQUESTED',
  CARD_UPDATE_SUCCEEDED: 'CARD_UPDATE_SUCCEEDED',
  CARD_UPDATE_FAILED: 'CARD_UPDATE_FAILED',
  CARD_UPDATE_RECEIVED: 'CARD_UPDATE_RECEIVED',
  CARD_DELETE_REQUESTED: 'CARD_DELETE_REQUESTED',
  CARD_DELETE_SUCCEEDED: 'CARD_DELETE_SUCCEEDED',
  CARD_DELETE_FAILED: 'CARD_DELETE_FAILED',
  CARD_DELETE_RECEIVED: 'CARD_DELETE_RECEIVED',

  /* Card membership */

  CARD_MEMBERSHIP_CREATE_REQUESTED: 'CARD_MEMBERSHIP_CREATE_REQUESTED',
  CARD_MEMBERSHIP_CREATE_SUCCEEDED: 'CARD_MEMBERSHIP_CREATE_SUCCEEDED',
  CARD_MEMBERSHIP_CREATE_FAILED: 'CARD_MEMBERSHIP_CREATE_FAILED',
  CARD_MEMBERSHIP_CREATE_RECEIVED: 'CARD_MEMBERSHIP_CREATE_RECEIVED',
  CARD_MEMBERSHIP_DELETE_REQUESTED: 'CARD_MEMBERSHIP_DELETE_REQUESTED',
  CARD_MEMBERSHIP_DELETE_SUCCEEDED: 'CARD_MEMBERSHIP_DELETE_SUCCEEDED',
  CARD_MEMBERSHIP_DELETE_FAILED: 'CARD_MEMBERSHIP_DELETE_FAILED',
  CARD_MEMBERSHIP_DELETE_RECEIVED: 'CARD_MEMBERSHIP_DELETE_RECEIVED',

  /* Card label */

  CARD_LABEL_CREATE_REQUESTED: 'CARD_LABEL_CREATE_REQUESTED',
  CARD_LABEL_CREATE_SUCCEEDED: 'CARD_LABEL_CREATE_SUCCEEDED',
  CARD_LABEL_CREATE_FAILED: 'CARD_LABEL_CREATE_FAILED',
  CARD_LABEL_CREATE_RECEIVED: 'CARD_LABEL_CREATE_RECEIVED',
  CARD_LABEL_DELETE_REQUESTED: 'CARD_LABEL_DELETE_REQUESTED',
  CARD_LABEL_DELETE_SUCCEEDED: 'CARD_LABEL_DELETE_SUCCEEDED',
  CARD_LABEL_DELETE_FAILED: 'CARD_LABEL_DELETE_FAILED',
  CARD_LABEL_DELETE_RECEIVED: 'CARD_LABEL_DELETE_RECEIVED',

  /* Task */

  TASK_CREATE: 'TASK_CREATE',
  TASK_UPDATE: 'TASK_UPDATE',
  TASK_DELETE: 'TASK_DELETE',
  TASK_CREATE_REQUESTED: 'TASK_CREATE_REQUESTED',
  TASK_CREATE_SUCCEEDED: 'TASK_CREATE_SUCCEEDED',
  TASK_CREATE_FAILED: 'TASK_CREATE_FAILED',
  TASK_CREATE_RECEIVED: 'TASK_CREATE_RECEIVED',
  TASK_UPDATE_REQUESTED: 'TASK_UPDATE_REQUESTED',
  TASK_UPDATE_SUCCEEDED: 'TASK_UPDATE_SUCCEEDED',
  TASK_UPDATE_FAILED: 'TASK_UPDATE_FAILED',
  TASK_UPDATE_RECEIVED: 'TASK_UPDATE_RECEIVED',
  TASK_DELETE_REQUESTED: 'TASK_DELETE_REQUESTED',
  TASK_DELETE_SUCCEEDED: 'TASK_DELETE_SUCCEEDED',
  TASK_DELETE_FAILED: 'TASK_DELETE_FAILED',
  TASK_DELETE_RECEIVED: 'TASK_DELETE_RECEIVED',

  /* Actions */

  ACTIONS_FETCH_REQUESTED: 'ACTIONS_FETCH_REQUESTED',
  ACTIONS_FETCH_SUCCEEDED: 'ACTIONS_FETCH_SUCCEEDED',
  ACTIONS_FETCH_FAILED: 'ACTIONS_FETCH_FAILED',

  /* Action */

  ACTION_CREATE_RECEIVED: 'ACTION_CREATE_RECEIVED',
  ACTION_UPDATE_RECEIVED: 'ACTION_UPDATE_RECEIVED',
  ACTION_DELETE_RECEIVED: 'ACTION_DELETE_RECEIVED',

  /* Comment action */

  COMMENT_ACTION_CREATE: 'COMMENT_ACTION_CREATE',
  COMMENT_ACTION_UPDATE: 'COMMENT_ACTION_UPDATE',
  COMMENT_ACTION_DELETE: 'COMMENT_ACTION_DELETE',
  COMMENT_ACTION_CREATE_REQUESTED: 'COMMENT_ACTION_CREATE_REQUESTED',
  COMMENT_ACTION_CREATE_SUCCEEDED: 'COMMENT_ACTION_CREATE_SUCCEEDED',
  COMMENT_ACTION_CREATE_FAILED: 'COMMENT_ACTION_CREATE_FAILED',
  COMMENT_ACTION_UPDATE_REQUESTED: 'COMMENT_ACTION_UPDATE_REQUESTED',
  COMMENT_ACTION_UPDATE_SUCCEEDED: 'COMMENT_ACTION_UPDATE_SUCCEEDED',
  COMMENT_ACTION_UPDATE_FAILED: 'COMMENT_ACTION_UPDATE_FAILED',
  COMMENT_ACTION_DELETE_REQUESTED: 'COMMENT_ACTION_DELETE_REQUESTED',
  COMMENT_ACTION_DELETE_SUCCEEDED: 'COMMENT_ACTION_DELETE_SUCCEEDED',
  COMMENT_ACTION_DELETE_FAILED: 'COMMENT_ACTION_DELETE_FAILED',

  /* Notifications */

  NOTIFICATIONS_DELETE: 'NOTIFICATIONS_DELETE',
  NOTIFICATIONS_FETCH_REQUESTED: 'NOTIFICATIONS_FETCH_REQUESTED',
  NOTIFICATIONS_FETCH_SUCCEEDED: 'NOTIFICATIONS_FETCH_SUCCEEDED',
  NOTIFICATIONS_FETCH_FAILED: 'NOTIFICATIONS_FETCH_FAILED',
  NOTIFICATIONS_DELETE_REQUESTED: 'NOTIFICATIONS_DELETE_REQUESTED',
  NOTIFICATIONS_DELETE_SUCCEEDED: 'NOTIFICATIONS_DELETE_SUCCEEDED',
  NOTIFICATIONS_DELETE_FAILED: 'NOTIFICATIONS_DELETE_FAILED',

  /* Notification */

  NOTIFICATION_CREATE_RECEIVED: 'NOTIFICATION_CREATE_RECEIVED',
  NOTIFICATION_DELETE_RECEIVED: 'NOTIFICATION_DELETE_RECEIVED',
};
