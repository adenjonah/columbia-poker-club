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
        <h1 className="text-4xl sm:text-7xl font-extrabold text-text-dark mb-6">
          Spring Tournament
        </h1>
        <p className="text-xl sm:text-2xl text-text-dark mb-12 text-center max-w-2xl">
          Join us for the Columbia University Poker Tournament on Sunday, March 30th! Compete in No Limit Hold'Em for a chance to win $1500 in prizes. Enjoy a free dinner and exciting gameplay sponsored by{' '}
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
          . Don't miss out on this incredible event!
        </p>
        <div className="bg-primary-dark text-text-light p-4 sm:p-6 rounded-lg shadow-lg mb-8 w-[90%] max-w-md mx-auto">
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
        </div>
        <div className="flex flex-col gap-4">
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