// src/types/story.ts

/**
 * Represents a story object.
 * @interface Story
 * @property {number} id - Unique identifier for the story.
 * @property {string} title - Title of the story.
 * @property {string} author - Author of the story.
 * @property {string} excerpt - Brief excerpt of the story.
 * @property {string} imageUrl - URL of the story's image.
 */
export interface Story {
  id: number;
  title: string;
  author: string;
  excerpt: string;
  imageUrl: string;
}
