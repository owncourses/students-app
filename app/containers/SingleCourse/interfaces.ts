import { ProgressInterface } from "../Auth/interfaces";

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
  progress: ProgressInterface;
  lessons: {
    id: string;
    title: string;
    href: {
      cover_image_url: string | null;
    };
    completed: boolean | null;
  }[];
}
