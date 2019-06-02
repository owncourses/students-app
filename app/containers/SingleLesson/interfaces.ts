export interface LessonInterface {
  id: string;
  title: string;
  description: string;
  position: number;
  embed_code: string;
  created: string;
  updated: string;
  completed: boolean | null;
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
