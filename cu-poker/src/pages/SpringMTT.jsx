function SpringMTT() {
  return (
    <div className="w-full">
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 bg-primary-light overflow-hidden">
        <div className="absolute inset-0 bg-mesh-soft opacity-40 pointer-events-none" />

        <div className="relative w-full max-w-3xl flex flex-col items-center">
          <header className="text-center mb-8">
            <h1 className="text-3xl sm:text-5xl font-bold text-text-dark">
              Columbia Poker
            </h1>
            <h2 className="text-2xl sm:text-4xl font-bold text-text-dark mt-2">
              Spring 2026 Tournament
            </h2>
          </header>

          <div className="glass-dark bg-primary-dark/90 text-text-light p-6 sm:p-8 rounded-2xl shadow-card-lg mb-12 w-full max-w-md text-center">
            <p className="text-2xl sm:text-4xl font-bold">
              Tournament Complete!
            </p>
            <p className="text-lg sm:text-xl mt-2 text-white/85">
              Thank you to everyone who participated!
            </p>
          </div>

          <article className="text-center max-w-xl mb-12 space-y-3 text-text-dark">
            <p className="text-xl sm:text-2xl">
              <strong>Date:</strong> Sunday, February 22nd, 2026
            </p>
            <p className="text-xl sm:text-2xl">
              <strong>Location:</strong> Roone Auditorium, Lerner Hall
            </p>
            <p className="text-xl sm:text-2xl">
              <strong>Prize Pool:</strong> $5,000+ in promotional items
            </p>
          </article>

          <section className="w-full mb-10 border-gradient p-6 md:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-text-dark text-center mb-4">
              Tournament Recap
            </h3>
            <p className="text-lg sm:text-xl text-text-dark/90 text-center leading-relaxed">
              Columbia Poker Club hosted its Spring 2026 Multi-Table Tournament on February 22nd at Roone Auditorium in Lerner Hall. Players competed in a No-Limit Texas Hold&apos;em freeze-out with equal starting stacks and 20&ndash;30 minute blind levels. Over $5,000 in prizes were awarded to the top finishers. Thank you to all the players, volunteers, and sponsors who made this event possible!
            </p>
          </section>

          <section className="w-full mb-10 border-gradient p-6 md:p-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-text-dark text-center mb-4">
              Tournament Format
            </h3>
            <ul className="text-lg sm:text-xl text-text-dark/90 space-y-2 list-disc list-inside">
              <li>No-Limit Texas Hold&apos;em</li>
              <li>Equal starting stacks for all players</li>
              <li>20&ndash;30 minute blind levels</li>
              <li>No rebuys</li>
              <li>Top ~30&ndash;50 places won prizes</li>
            </ul>
          </section>

          <footer className="flex flex-col sm:flex-row gap-3 mb-6">
            <a
              href="https://discord.gg/4yzGm64uQ8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Join Our Discord
            </a>
            <a
              href="https://instagram.com/columbiapoker"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Follow Our Instagram
            </a>
          </footer>

          <p className="text-xs text-text-dark/60 text-center max-w-lg px-4">
            This event was for entertainment purposes only. No real money gambling was involved. Columbia Poker Club is a student organization at Columbia University.
          </p>
        </div>
      </section>
    </div>
  );
}

export default SpringMTT;
