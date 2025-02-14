import React from 'react';

function MTTInterestForm() {
  return (
    <div className="w-full">
      <section className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-8 bg-primary-light">
        <h1 className="text-4xl sm:text-7xl font-extrabold text-text-dark mb-20">
          MTT Interest Form
        </h1>
        <div className="w-full max-w-3xl bg-white border border-gray-300 rounded-lg p-4">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeZYAhzX7RcgRQ-HjlxmYU4OUQHYRrMZdGUXPFuWGko88aRTQ/viewform?embedded=true"
            width="100%"
            height="500"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="MTT Interest Form"
          >
            Loading…
          </iframe>
        </div>
      </section>
    </div>
  );
}

export default MTTInterestForm;
