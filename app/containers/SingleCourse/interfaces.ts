import { LessonInterface } from "../SingleLesson/interfaces";

export interface ModuleInterface {
  id: string;
  title: string;
  description: string;
  position: number;
  created: string;
  updated: string;
  course: {
    id: number;
    title: string;
  };
  lessons: [LessonInterface];
}
