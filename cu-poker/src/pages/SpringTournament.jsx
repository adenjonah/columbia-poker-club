import React, { useState, useEffect } from 'react';

function SpringTournament() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const deadline = new Date('March 1, 2025 23:59:00 EST');
      const now = new Date();
      const diff = deadline - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <section className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-2 bg-primary-light">
        <header className="text-center mb-8">
          <h1 className="text-2xl sm:text-5xl font-extrabold text-text-dark">
            Columbia Poker
          </h1>
          <h2 className="text-xl sm:text-4xl font-extrabold text-text-dark mt-2">
            Spring Tournament
          </h2>
        </header>
        <article className="text-center max-w-xl mb-12 space-y-4">
          <p className="text-xl sm:text-2xl text-text-dark">
            <strong>Date:</strong> Sunday, March 30th
          </p>
          <p className="text-xl sm:text-2xl text-text-dark">
            <strong>Time:</strong> 12:00 PM – 9:00 PM
          </p>
          <p className="text-xl sm:text-2xl text-text-dark">
            <strong>Prize Pool:</strong> $1500+
          </p>
          <p className="text-xl sm:text-2xl text-text-dark">
            Enjoy a free dinner and exciting gameplay sponsored by{' '}
            <a
              href="https://www.janestreet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-dark hover:underline font-bold"
            >
              Jane Street
            </a>
            ,{' '}
            <a
              href="https://www.hudsonrivertrading.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-dark hover:underline font-bold"
            >
              HRT
            </a>
            , and{' '}
            <a
              href="https://www.sig.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-dark hover:underline font-bold"
            >
              SIG
            </a>
            .
          </p>
        </article>
        <aside className="bg-primary-dark text-text-light p-4 sm:p-6 rounded-lg shadow-lg mb-8 w-[90%] max-w-md mx-auto">
          <p className="text-lg sm:text-2xl font-bold text-center">
            Registration closes in
          </p>
          <p className="text-2xl sm:text-5xl font-extrabold text-center mt-4">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </p>
          <a
            href="https://forms.gle/5BD5AmaLccMD9fus8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-light text-text-dark text-lg sm:text-xl font-bold py-3 px-6 rounded-full hover:bg-primary transition text-center mt-4 block w-fit mx-auto"
          >
            Register Now!
          </a>
        </aside>
        <footer className="flex flex-col gap-4">
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
      </section>
    </div>
  );
}

export default SpringTournament;