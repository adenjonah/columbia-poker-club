import React from 'react';

function SpringTournament() {
  return (
    <div className="w-full">
      <section className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-2 bg-primary-light">
        <h1 className="text-4xl sm:text-7xl font-extrabold text-text-dark mb-6">
          Spring Tournament
        </h1>
        <p className="text-xl sm:text-2xl text-text-dark mb-12 text-center max-w-2xl">
          Join us for the Columbia University Poker Tournament on Sunday, March 30th! Compete in No Limit Hold'Em for a chance to win $1500 in prizes. Enjoy a free dinner and exciting gameplay sponsored by <a href="https://www.janestreet.com/" target="_blank" rel="noopener noreferrer" className="text-accent-dark hover:underline font-bold">Jane Street</a>, <a href="https://www.hudsonrivertrading.com/" target="_blank" rel="noopener noreferrer" className="text-accent-dark hover:underline font-bold">HRT</a>, and <a href="https://www.sig.com/" target="_blank" rel="noopener noreferrer" className="text-accent-dark hover:underline font-bold">SIG</a>. Don't miss out on this incredible event!
        </p>
        <div className="flex flex-col gap-4">
          <a
            href="https://forms.gle/5BD5AmaLccMD9fus8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-dark text-text-light text-lg sm:text-xl font-bold py-3 px-6 rounded-full hover:bg-primary transition text-center"
          >
            Register Now!
          </a>
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
        </div>
      </section>
    </div>
  );
}

export default SpringTournament;
