import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewStory: React.FC = () => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  const generateStoryDetails = () => {
    // Simulate generating story details from the prompt
    // In a real application, you would call an API here
    setTitle(`Generated Title from: ${prompt}`);
    setAuthor('Generated Author');
    setExcerpt(`Generated excerpt from the prompt: ${prompt}. This is a sample excerpt.`);
    setImageUrl('https://images.unsplash.com/photo-1682685797527-645515d39e83?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    setShowDetails(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // e.g., by sending the data to an API or updating local state.
    console.log({ title, author, excerpt, imageUrl });
    // After submitting, navigate back to the home page.
    navigate('/');
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Create a New Story</h2>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label htmlFor="prompt" className="block text-gray-700 text-sm font-bold mb-2">
            Storyline Prompt:
          </label>
          <textarea
            id="prompt"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <button
            type="button"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={generateStoryDetails}
          >
            Generate Story Details
          </button>
        </div>

        {showDetails && (
          <>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                Title:
              </label>
              <input
                type="text"
                id="title"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={title}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label htmlFor="author" className="block text-gray-700 text-sm font-bold mb-2">
                Author:
              </label>
              <input
                type="text"
                id="author"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={author}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label htmlFor="excerpt" className="block text-gray-700 text-sm font-bold mb-2">
                Excerpt:
              </label>
              <textarea
                id="excerpt"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={excerpt}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label htmlFor="imageUrl" className="block text-gray-700 text-sm font-bold mb-2">
                Image URL:
              </label>
              <input
                type="url"
                id="imageUrl"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={imageUrl}
                readOnly
              />
            </div>
          </>
        )}

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={!showDetails}
          >
            Create Story
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewStory;
