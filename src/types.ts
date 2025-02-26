export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: 'frontend' | 'backend';
  features: string[];
  videos: {
    id: string;
    title: string;
    duration: string;
    url: string;
  }[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  purchasedCourses: string[];
}