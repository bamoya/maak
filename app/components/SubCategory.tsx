import React from 'react';

interface SubCategoryProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const SubCategory: React.FC<SubCategoryProps> = ({ title, description, icon }) => {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className="border border-gray-200 p-6 rounded-lg flex flex-col items-center justify-center">
        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
          {icon ?? (
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          )}
        </div>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
          {title}
        </h2>
        <p className="leading-relaxed text-base text-center">{description}</p>
      </div>
    </div>
  );
};

export default SubCategory;
