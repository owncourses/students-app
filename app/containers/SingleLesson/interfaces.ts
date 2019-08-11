export interface LessonInterface {
  id: string;
  title: string;
  description: string;
  position: number;
  embed_code: string;
  embed_type: string;
  created: string;
  updated: string;
  completed: boolean | null;
  duration_in_minutes: number;
  pagination: {
    next_lesson_id: string;
    prev_lesson_id: string;
  };
  module: {
    id: string;
    title: string;
    course: {
      id: string;
      title: string;
    };
  };
  attachments: AttachmentInterface[];
}

export interface AttachmentInterface {
  name: string;
  id: string;
  mime_type: string;
  file_name: string;
  href: {
    download: string;
  };
}

export interface Bookmark {
  title: string;
  bookmarkTime: number;
  lessonId: string;
}

export interface BookmarkViewModel {
  title: string;
  time_in_seconds: number;
  id: string;
  user: {
    id: string;
  };
}
