import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { findLectureById } from '../data/lectures';

function LectureDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [markdownContent, setMarkdownContent] = useState('');
  const [loading, setLoading] = useState(true);

  // Find the lecture using the shared data
  const lecture = findLectureById(id);

  useEffect(() => {
    if (lecture && lecture.status === 'completed') {
      // Determine which markdown file to load
      let markdownFile = '';
      if (lecture.id === 1) {
        markdownFile = '1-texas-holdem-basics.md';
      } else if (lecture.id === 2) {
        markdownFile = '2-positions-ranges-math.md';
      } else if (lecture.id === 'add-1') {
        markdownFile = 'add-1-tournament-poker.md';
      }

      if (markdownFile) {
        fetch(`/lecture-notes/${markdownFile}`)
          .then(response => response.text())
          .then(content => {
            setMarkdownContent(content);
            setLoading(false);
          })
          .catch(error => {
            console.error('Error loading markdown:', error);
            setMarkdownContent('# Notes not available\n\nSorry, the notes for this lecture are not available at this time.');
            setLoading(false);
          });
      } else {
        setMarkdownContent('# Notes not available\n\nSorry, the notes for this lecture are not available at this time.');
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, [lecture]);

  if (!lecture) {
    return (
      <div className="min-h-screen bg-primary-light pt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-text-dark mb-4">Lecture Not Found</h1>
            <p className="text-xl text-text-light mb-8">The lecture you're looking for doesn't exist.</p>
            <button
              onClick={() => navigate('/learn')}
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Back to Learn
            </button>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeVideoId(lecture.youtubeLink);

  return (
    <div className="min-h-screen bg-primary-light pt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={() => navigate('/learn')}
              className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-4"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Learn
            </button>
            
            <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
              {lecture.title}
            </h1>
            <p className="text-xl text-text-light mb-4">{lecture.description}</p>
            <p className="text-lg text-text-light mb-2">
              <strong>Date:</strong> {formatDate(lecture.date)}
            </p>
            <p className="text-lg text-text-light">
              <strong>Instructor:</strong> {lecture.instructor}
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Video Section - Takes up 2/3 of the width on large screens */}
            <div className="xl:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold text-text-dark">Video Recording</h2>
              
              {lecture.status === 'completed' && videoId ? (
                <div className="bg-primary-light rounded-lg p-4">
                  <div className="aspect-video bg-black rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={lecture.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>
              ) : (
                <div className="bg-primary-light rounded-lg p-8 text-center">
                  <div className="text-6xl mb-4">📹</div>
                  <p className="text-xl text-text-light">
                    {lecture.status === 'upcoming' 
                      ? 'Video will be available after the lecture' 
                      : 'Video not available'}
                  </p>
                </div>
              )}
            </div>

            {/* Notes Section - Takes up 1/3 of the width on large screens, scrollable */}
            <div className="xl:col-span-1 space-y-6">
              <h2 className="text-2xl font-bold text-text-dark">Lecture Notes</h2>
              
              {lecture.status === 'completed' ? (
                <div className="bg-primary-light rounded-lg p-6 h-[600px] overflow-y-auto">
                  {loading ? (
                    <div className="text-center py-8">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                      <p className="text-text-light">Loading notes...</p>
                    </div>
                  ) : (
                    <div className="prose prose-lg max-w-none">
                      <div 
                        className="text-text-dark"
                        dangerouslySetInnerHTML={{
                          __html: markdownContent
                            .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold mb-3 text-text-dark">$1</h1>')
                            .replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold mb-2 text-text-dark">$1</h2>')
                            .replace(/^### (.*$)/gim, '<h3 class="text-lg font-bold mb-2 text-text-dark">$1</h3>')
                            .replace(/^#### (.*$)/gim, '<h4 class="text-base font-bold mb-2 text-text-dark">$1</h4>')
                            .replace(/^\* (.*$)/gim, '<li class="mb-1">$1</li>')
                            .replace(/^- (.*$)/gim, '<li class="mb-1">$1</li>')
                            .replace(/^\d+\. (.*$)/gim, '<li class="mb-1">$1</li>')
                            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
                            .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
                            .replace(/\n\n/g, '</p><p class="mb-3">')
                            .replace(/^(?!<[h|l])/gm, '<p class="mb-3">')
                            .replace(/<li class="mb-1">/g, '<ul class="list-disc list-inside mb-3"><li class="mb-1">')
                            .replace(/(<li class="mb-1">.*<\/li>)(?!.*<li)/g, '$1</ul>')
                        }}
                      />
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-primary-light rounded-lg p-8 text-center h-[600px] flex flex-col justify-center">
                  <div className="text-6xl mb-4">📝</div>
                  <p className="text-xl text-text-light">
                    Notes will be available after the lecture
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LectureDetail;
