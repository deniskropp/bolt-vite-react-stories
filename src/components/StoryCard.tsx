import React from 'react';
import { Story } from '../types/story';

interface StoryCardProps {
  story: Story;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={story.imageUrl} alt={story.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{story.title}</h2>
        <p className="text-gray-600 mb-2">By {story.author}</p>
        <p className="text-gray-700">{story.excerpt}</p>
      </div>
    </div>
  );
};

export default StoryCard;
