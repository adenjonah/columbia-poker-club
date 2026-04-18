import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { lectureProgression, additionalLectures, isPublished } from '../data/lectures';

function Learn() {
  const [activeTab, setActiveTab] = useState('progression');
  const navigate = useNavigate();

  const publishedCount = lectureProgression.filter(isPublished).length;
  const totalCount = lectureProgression.length;

  const LectureCard = ({ lecture, indexLabel }) => {
    const published = isPublished(lecture);
    const handleClick = () => {
      if (published) navigate(`/learn/${lecture.id}`);
    };
    return (
      <div
        className={`bg-primary rounded-xl shadow-lg p-6 border-l-4 transition-shadow duration-300 ${
          published
            ? 'border-success hover:shadow-xl cursor-pointer'
            : 'border-gray-300 opacity-60'
        }`}
        onClick={handleClick}
      >
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            {indexLabel && (
              <p className="text-xs font-semibold uppercase tracking-wider text-text-light mb-1">
                {indexLabel}
              </p>
            )}
            <h3 className="text-xl font-bold text-text-dark mb-2">{lecture.title}</h3>
            <p className="text-text-light">{lecture.description}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium border ${
                published
                  ? 'bg-success-light text-success-dark border-success'
                  : 'bg-gray-100 text-gray-500 border-gray-300'
              }`}
            >
              {published ? 'Available' : 'Coming soon'}
            </span>
            {published && (
              <button
                className="bg-primary-dark text-white px-4 py-2 rounded-lg hover:bg-primary transition-colors text-sm font-medium"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/learn/${lecture.id}`);
                }}
              >
                Study
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-primary-light pt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-text-dark mb-4">
              Learn Poker
            </h1>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              An independent-study curriculum. Each lesson is a slide deck with interactive quizzes — optional video when available.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-primary-dark rounded-lg p-1 shadow-md">
              <button
                onClick={() => setActiveTab('progression')}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === 'progression'
                    ? 'bg-primary text-white'
                    : 'text-text-light hover:text-primary'
                }`}
              >
                Curriculum
              </button>
              <button
                onClick={() => setActiveTab('additional')}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === 'additional'
                    ? 'bg-primary text-white'
                    : 'text-text-light hover:text-primary'
                }`}
              >
                Additional Lectures
              </button>
            </div>
          </div>

          {activeTab === 'progression' && (
            <div>
              <div className="mb-8">
                <div className="bg-primary-light rounded-lg p-6 shadow-md">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-text-dark">Lessons published</span>
                    <span className="text-sm font-medium text-text-dark">
                      {publishedCount} / {totalCount}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-primary h-3 rounded-full transition-all duration-500"
                      style={{ width: `${(publishedCount / totalCount) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {lectureProgression.map((lecture, index) => (
                  <LectureCard
                    key={lecture.id}
                    lecture={lecture}
                    indexLabel={`Lesson ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'additional' && (
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-text-dark mb-4 text-center">
                  Additional Lectures
                </h2>
                <p className="text-lg text-text-light text-center max-w-2xl mx-auto">
                  Guest talks and topics outside the core curriculum.
                </p>
              </div>

              <div className="space-y-6">
                {additionalLectures.map((lecture) => (
                  <LectureCard key={lecture.id} lecture={lecture} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Learn;
