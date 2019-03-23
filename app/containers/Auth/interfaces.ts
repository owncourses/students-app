interface AuthFields {
  type: string;
  label: string;
  value: string;
  disabled: boolean;
  error: string;
}

export interface CourseInterface {
  id: number;
  title: string;
  description: string;
  cover_image_name: string;
  created: string;
  updated: string;
  href: {
    coverImageUrl: string;
  };
}

export interface UserInterface {
  email: string;
  created: string;
  first_name: string;
  last_name: string;
  id: string;
  updated: string;
  roles: [string];
  courses: [CourseInterface];
}

export interface AuthFieldsInterface extends Array<AuthFields> {}
