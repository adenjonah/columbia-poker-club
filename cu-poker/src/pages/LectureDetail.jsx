import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { findLectureById, isPublished } from '../data/lectures';

function LectureDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [markdownContent, setMarkdownContent] = useState('');
  const [loading, setLoading] = useState(true);

  const lecture = findLectureById(id);

  useEffect(() => {
    if (!lecture || !lecture.notesPath) {
      setLoading(false);
      return;
    }
    fetch(lecture.notesPath)
      .then(response => (response.ok ? response.text() : Promise.reject(response.status)))
      .then(content => {
        setMarkdownContent(content);
        setLoading(false);
      })
      .catch(() => {
        setMarkdownContent('');
        setLoading(false);
      });
  }, [lecture]);

  if (!lecture) {
    return (
      <div className="min-h-screen bg-primary-light pt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-text-dark mb-4">Lecture Not Found</h1>
            <p className="text-xl text-text-light mb-8">The lecture you&apos;re looking for doesn&apos;t exist.</p>
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

  const published = isPublished(lecture);
  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };
  const videoId = getYouTubeVideoId(lecture.youtubeLink);

  return (
    <div className="min-h-screen bg-primary-light pt-4">
      <div className="w-full px-4 py-4">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
            <div className="flex-1 min-w-0">
              <button
                onClick={() => navigate('/learn')}
                className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Learn
              </button>
              <h1 className="text-2xl md:text-3xl font-bold text-text-dark leading-tight">
                {lecture.title}
              </h1>
              <p className="text-sm text-text-light mt-1">{lecture.description}</p>
              {lecture.instructor && lecture.youtubeLink && (
                <p className="text-xs text-text-light italic mt-1">
                  Video taught by {lecture.instructor}
                </p>
              )}
            </div>
            {published && (
              <div className="flex gap-2 shrink-0">
                <a
                  href={lecture.slidesPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary-dark text-white px-4 py-2 rounded-lg hover:bg-primary transition-colors text-sm font-medium"
                >
                  Open fullscreen ↗
                </a>
                {videoId && (
                  <a
                    href={lecture.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                  >
                    Watch video ↗
                  </a>
                )}
              </div>
            )}
          </div>

          {!published ? (
            <div className="bg-primary-light rounded-lg p-12 text-center">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-2xl text-text-dark mb-2">Coming soon</p>
              <p className="text-text-light">This lesson hasn&apos;t been published yet.</p>
            </div>
          ) : (
            <>
              <div className="bg-black rounded-lg overflow-hidden shadow-xl" style={{ height: 'calc(100vh - 180px)', minHeight: '500px' }}>
                <iframe
                  width="100%"
                  height="100%"
                  src={lecture.slidesPath}
                  title={`${lecture.title} — slides`}
                  className="block"
                  allowFullScreen
                />
              </div>
              <p className="text-xs text-text-light mt-2 text-center">
                Click into the slides, then use arrow keys to navigate. Press <kbd className="bg-gray-200 px-1 rounded">F</kbd> for fullscreen, or <kbd className="bg-gray-200 px-1 rounded">ESC</kbd> for overview.
              </p>

              {lecture.notesPath && (
                <details className="mt-8 bg-primary-light rounded-lg">
                  <summary className="cursor-pointer px-6 py-4 text-xl font-bold text-text-dark select-none">
                    Companion notes
                  </summary>
                  <div className="px-6 pb-6">
                    {loading ? (
                      <div className="text-center py-4">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                        <p className="text-text-light">Loading notes...</p>
                      </div>
                    ) : markdownContent ? (
                      <div className="prose prose-sm max-w-none text-text-dark">
                        <ReactMarkdown>{markdownContent}</ReactMarkdown>
                      </div>
                    ) : (
                      <p className="text-text-light text-center py-4">Notes unavailable.</p>
                    )}
                  </div>
                </details>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LectureDetail;
