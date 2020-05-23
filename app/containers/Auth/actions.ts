import {
  AUTH_ACTION,
  AUTH_ACTION_ERROR,
  AUTH_ACTION_SUCCESS,
  LOGOUT_ACTION,
  LOGOUT_ACTION_SUCCESS,
  NOTIFICATIONS_ACTION,
  NOTIFICATIONS_ACTION_ERROR,
  NOTIFICATIONS_ACTION_SUCCESS,
  TOGGLE_NOTIFICATION_ACTION,
  TOGGLE_NOTIFICATION_ACTION_ERROR,
  TOGGLE_NOTIFICATION_ACTION_SUCCESS,
  USER_ACTION,
  userLoginInterface
} from "./constants";
import { NotificationsInterface, UserInterface } from "./interfaces";

export function authAction(
  payload: userLoginInterface
): { type: string; payload: userLoginInterface } {
  return {
    type: AUTH_ACTION,
    payload
  };
}

export function authActionSuccess(
  user: UserInterface
): { type: string; user: UserInterface } {
  return {
    type: AUTH_ACTION_SUCCESS,
    user
  };
}

export function authActionError(
  error: string
): { type: string; error: string } {
  return {
    type: AUTH_ACTION_ERROR,
    error
  };
}

export function getUser(): { type: string } {
  return {
    type: USER_ACTION
  };
}

export function logoutAction(): { type: string } {
  return {
    type: LOGOUT_ACTION
  };
}

export function logoutActionSuccess(): { type: string } {
  return {
    type: LOGOUT_ACTION_SUCCESS
  };
}

export function getNotifications(): { type: string } {
  return {
    type: NOTIFICATIONS_ACTION
  };
}

export function getNotificationsSuccess(
  notifications: NotificationsInterface
): { type: string; payload: NotificationsInterface } {
  return {
    type: NOTIFICATIONS_ACTION_SUCCESS,
    payload: notifications
  };
}

export function getNotificationsError(
  error: string
): { type: string; error: string } {
  return {
    type: NOTIFICATIONS_ACTION_ERROR,
    error
  };
}

export function toggleNotification(id): { type: string; id: string } {
  console.log(id);
  return {
    type: TOGGLE_NOTIFICATION_ACTION,
    id
  };
}

export function toggleNotificationSuccess(
  notifications: NotificationsInterface
): { type: string; payload: NotificationsInterface } {
  return {
    type: TOGGLE_NOTIFICATION_ACTION_SUCCESS,
    payload: notifications
  };
}

export function toggleNotificationError(
  error: string
): { type: string; error: string } {
  return {
    type: TOGGLE_NOTIFICATION_ACTION_ERROR,
    error
  };
}
