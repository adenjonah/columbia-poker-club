import React, { useState, useEffect } from 'react';

function SpringMTT() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const deadline = new Date('February 22, 2026 11:30:00 EST');
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

        {/* Key Details */}
        <article className="text-center max-w-xl mb-12 space-y-4">
          <p className="text-xl sm:text-2xl text-text-dark">
            <strong>Date:</strong> Sunday, February 22nd, 2026
          </p>
          <p className="text-xl sm:text-2xl text-text-dark">
            <strong>Time:</strong> 11:30 AM – 11:00 PM
          </p>
          <p className="text-xl sm:text-2xl text-text-dark">
            <strong>Location:</strong> Roone Auditorium, Lerner Hall
          </p>
          <p className="text-xl sm:text-2xl text-text-dark">
            <strong>Registration Deadline:</strong> Friday, Feb 20 at 11:59 PM
          </p>
          <p className="text-xl sm:text-2xl text-text-dark">
            <strong>Entrant Cap:</strong> 500
          </p>
          <p className="text-xl sm:text-2xl text-text-dark">
            <strong>Entry Fee:</strong> Free!
          </p>
        </article>

        {/* Countdown */}
        <aside className="bg-primary-dark text-text-light p-4 sm:p-6 rounded-lg shadow-lg mb-12 w-[90%] max-w-md mx-auto">
          <p className="text-lg sm:text-2xl font-bold text-center">
            Tournament starts in
          </p>
          <p className="text-2xl sm:text-5xl font-extrabold text-center mt-4">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </p>
        </aside>

        {/* Tournament Structure */}
        <section className="max-w-2xl w-full mb-12 px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-text-dark text-center mb-4">
            Tournament Structure
          </h3>
          <ul className="text-lg sm:text-xl text-text-dark space-y-2 list-disc list-inside">
            <li>No-Limit Texas Hold&apos;em</li>
            <li>Equal starting stacks for all players</li>
            <li>20–30 minute blind levels</li>
            <li>No rebuys</li>
            <li>Top ~30–50 places win prizes</li>
          </ul>
        </section>

        {/* Prizes */}
        <section className="max-w-2xl w-full mb-12 px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-text-dark text-center mb-4">
            Prizes
          </h3>
          <p className="text-lg sm:text-xl text-text-dark text-center">
            <strong>$5,000+</strong> in promotional items including tech gear, poker accessories, and swag for all participants.
          </p>
        </section>

        {/* Workshop Links */}
        <section className="max-w-2xl w-full mb-12 px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-text-dark text-center mb-4">
            Required Workshops for Beginners
          </h3>
          <p className="text-lg sm:text-xl text-text-dark text-center mb-4">
            New to poker? Watch these lessons before the tournament:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://youtu.be/5roo2xOsrJg?si=lr1VRpsMUxvAdZU6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-dark text-text-light text-lg font-bold py-3 px-6 rounded-full hover:bg-primary transition text-center"
            >
              Lesson 1
            </a>
            <a
              href="https://www.youtube.com/watch?v=KCCoB3suWNM&t=546s"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-dark text-text-light text-lg font-bold py-3 px-6 rounded-full hover:bg-primary transition text-center"
            >
              Lesson 2
            </a>
          </div>
        </section>

        {/* Registration Form */}
        <section className="w-full max-w-2xl mb-12 px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-text-dark text-center mb-4">
            Register
          </h3>
          <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScRLxUjmdlKob8zrkyY9oayM5vLGnGwxUoIML9xFzazsh3JRg/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              title="Spring 2026 Tournament Registration"
            >
              Loading…
            </iframe>
          </div>
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
          This event is for entertainment purposes only. No real money gambling is involved. Columbia Poker Club is a student organization at Columbia University.
        </p>
      </section>
    </div>
  );
}

export default SpringMTT;
