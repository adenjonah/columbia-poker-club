import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { lectureProgression, additionalLectures } from '../data/lectures';

function Learn() {
  const [activeTab, setActiveTab] = useState('progression');
  const navigate = useNavigate();


  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-success-light text-success-dark border-success';
      case 'upcoming':
        return 'bg-warning-light text-warning-dark border-warning';
      default:
        return 'bg-primary-light text-primary-dark border-primary';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'upcoming':
        return 'Upcoming';
      default:
        return 'TBD';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const LectureCard = ({ lecture, isAdditional = false }) => (
    <div className={`bg-primary rounded-xl shadow-lg p-6 border-l-4 ${
      lecture.status === 'completed' ? 'border-success' : 
      lecture.status === 'upcoming' ? 'border-warning' : 'border-primary'
    } hover:shadow-xl transition-shadow duration-300 cursor-pointer`}
    onClick={() => navigate(`/learn/${lecture.id}`)}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-text-dark mb-2">
            {lecture.title}
          </h3>
          <p className="text-text-light mb-3">{lecture.description}</p>
          <p className="text-sm text-text-light mb-1">
            <strong>Date:</strong> {formatDate(lecture.date)}
          </p>
          <p className="text-sm text-text-light">
            <strong>Instructor:</strong> {lecture.instructor}
          </p>
        </div>
        <div className="flex flex-col items-end gap-14">
          <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(lecture.status)}`}>
            {getStatusText(lecture.status)}
          </span>
          {lecture.status === 'completed' && (
            <button 
              className="bg-primary-dark text-white px-4 py-2 rounded-lg hover:bg-primary transition-colors text-sm font-medium"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/learn/${lecture.id}`);
              }}
            >
              Learn
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-primary-light pt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-text-dark mb-4">
              Learn Poker
            </h1>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Master poker from fundamentals to advanced strategies through our structured lecture series
            </p>
          </div>

          {/* Tab Navigation */}
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
                Lecture Progression
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

          {/* Progression Tab */}
          {activeTab === 'progression' && (
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-text-dark mb-4 text-center">
                  Learning Roadmap
                </h2>
                <p className="text-lg text-text-light text-center max-w-2xl mx-auto">
                  Follow our structured progression from poker basics to advanced mastery
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="bg-primary-light rounded-lg p-6 shadow-md">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-text-dark">Progress</span>
                    <span className="text-sm font-medium text-text-dark">
                      {lectureProgression.filter(l => l.status === 'completed').length} / {lectureProgression.length} completed
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-primary h-3 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${(lectureProgression.filter(l => l.status === 'completed').length / lectureProgression.length) * 100}%` 
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Lecture Cards */}
              <div className="space-y-6">
                {lectureProgression.map((lecture, index) => (
                  <div key={lecture.id} className="relative">
                    {/* Connection Line */}
                    {index < lectureProgression.length - 1 && (
                      <div className="absolute left-6 top-20 w-0.5 h-6 bg-gray-300 z-0"></div>
                    )}
                    <div className="relative z-10">
                      <LectureCard lecture={lecture} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Additional Lectures Tab */}
          {activeTab === 'additional' && (
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-text-dark mb-4 text-center">
                  Additional Lectures
                </h2>
                <p className="text-lg text-text-light text-center max-w-2xl mx-auto">
                  Special sessions and workshops outside the main progression
                </p>
              </div>

              <div className="space-y-6">
                {additionalLectures.map((lecture) => (
                  <LectureCard key={lecture.id} lecture={lecture} isAdditional={true} />
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
