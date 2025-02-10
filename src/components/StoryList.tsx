import React from 'react';
import StoryCard from './StoryCard';
import { Story } from '../types/story';

interface StoryListProps {
  stories: Story[];
}

const StoryList: React.FC<StoryListProps> = ({ stories }) => {
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {stories.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </div>
  );
};

export default StoryList;
