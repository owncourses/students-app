export interface LessonInterface {
  id: string;
  title: string;
  description: string;
  position: number;
  embed_code: string;
  created: string;
  updated: string;
  module: {
    id: string;
    title: string;
    course: {
      id: number;
      title: string;
    };
  };
}
