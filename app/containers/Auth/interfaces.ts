import { ModuleInterface } from "../SingleCourse/interfaces";

export interface AuthorInterface {
  bio: string;
  href: {
    picture: string;
  };
  gender: string;
  name: string;
  picture: string;
}

interface AuthFields {
  type: string;
  label: string;
  value: string;
  disabled: boolean;
  error: string;
}

export interface CourseInterface {
  id?: number;
  title: string;
  type: string;
  description: string;
  purchase_url?: string;
  cover_image_name: string;
  created: string;
  updated: string;
  href: {
    cover_image_url: string;
  };
  progress: ProgressInterface;
  modules?: ModuleInterface[];
  authors?: AuthorInterface[];
}

export interface UserInterface {
  email: string;
  created: string;
  first_name: string;
  last_name: string;
  id: string;
  updated: string;
  roles: string[];
  courses: CourseInterface[];
}

export interface ProgressInterface {
  completed_lesson: string;
  completed_percentage: string;
  completed_time: string;
  total_duration: string;
}

export interface AuthFieldsInterface extends Array<AuthFields> {}

export interface NotificationsInterface {
  unread: number;
  notifications: NotificationInterface[];
}

export interface NotificationInterface {
  id: string;
  title: string;
  text: string;
  url?: string;
  created: string;
  url_title: string;
  label: "new" | "important";
}
