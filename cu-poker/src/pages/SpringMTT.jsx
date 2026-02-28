import React from 'react';

function SpringMTT() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 bg-primary-light">
        <header className="text-center mb-8">
          <h1 className="text-2xl sm:text-5xl font-extrabold text-text-dark">
            Columbia Poker
          </h1>
          <h2 className="text-xl sm:text-4xl font-extrabold text-text-dark mt-2">
            Spring 2026 Tournament
          </h2>
        </header>

        {/* Tournament Complete Banner */}
        <div className="bg-primary-dark text-text-light p-4 sm:p-6 rounded-lg shadow-lg mb-12 w-[90%] max-w-md mx-auto">
          <p className="text-2xl sm:text-4xl font-extrabold text-center">
            Tournament Complete!
          </p>
          <p className="text-lg sm:text-xl text-center mt-2">
            Thank you to everyone who participated!
          </p>
        </div>

        {/* Event Details */}
        <article className="text-center max-w-xl mb-12 space-y-4">
          <p className="text-xl sm:text-2xl text-text-dark">
            <strong>Date:</strong> Sunday, February 22nd, 2026
          </p>
          <p className="text-xl sm:text-2xl text-text-dark">
            <strong>Location:</strong> Roone Auditorium, Lerner Hall
          </p>
          <p className="text-xl sm:text-2xl text-text-dark">
            <strong>Prize Pool:</strong> $5,000+ in promotional items
          </p>
        </article>

        {/* Summary */}
        <section className="max-w-2xl w-full mb-12 px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-text-dark text-center mb-4">
            Tournament Recap
          </h3>
          <p className="text-lg sm:text-xl text-text-dark text-center">
            Columbia Poker Club hosted its Spring 2026 Multi-Table Tournament on February 22nd at Roone Auditorium in Lerner Hall. Players competed in a No-Limit Texas Hold&apos;em freeze-out with equal starting stacks and 20–30 minute blind levels. Over $5,000 in prizes were awarded to the top finishers. Thank you to all the players, volunteers, and sponsors who made this event possible!
          </p>
        </section>

        {/* Tournament Structure */}
        <section className="max-w-2xl w-full mb-12 px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-text-dark text-center mb-4">
            Tournament Format
          </h3>
          <ul className="text-lg sm:text-xl text-text-dark space-y-2 list-disc list-inside">
            <li>No-Limit Texas Hold&apos;em</li>
            <li>Equal starting stacks for all players</li>
            <li>20–30 minute blind levels</li>
            <li>No rebuys</li>
            <li>Top ~30–50 places won prizes</li>
          </ul>
        </section>

        {/* Social Links */}
        <footer className="flex flex-col gap-4 mb-8">
          <a
            href="https://discord.gg/4yzGm64uQ8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-dark text-text-light text-lg sm:text-xl font-bold py-3 px-6 rounded-full hover:bg-primary transition text-center"
          >
            Join Our Discord
          </a>
          <a
            href="https://instagram.com/columbiapoker"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-dark text-text-light text-lg sm:text-xl font-bold py-3 px-6 rounded-full hover:bg-primary transition text-center"
          >
            Follow Our Instagram
          </a>
        </footer>

        {/* Legal Disclaimer */}
        <p className="text-xs text-text-dark/60 text-center max-w-lg px-4">
          This event was for entertainment purposes only. No real money gambling was involved. Columbia Poker Club is a student organization at Columbia University.
        </p>
      </section>
    </div>
  );
}

export default SpringMTT;
