// About.jsx
// Centered "About the event" section with concise copy and supporting stats.

import React from "react";

const About = () => {
  const stats = [
    {
      label: "EVENT CAPACITY",
      value: "300–350",
      body: "A curated gathering of ABESEC students and participants from other colleges.",
    },
    {
      label: "WHO IT'S FOR",
      value: "Students & Aspiring Entrepreneurs",
      body: "All students from ABES Engineering College and participants from other institutions.",
    },
    {
      label: "FORMAT",
      value: "1 Day Event",
      body: "A full-day experience featuring speaker sessions, pitches, quizzes, and networking.",
    },
  ];

  return (
    <section
      className="bg-black px-6 py-16 sm:px-8 md:px-10 lg:px-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Heading and core narrative */}
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-gray-400">
          ABOUT TES 4.0
        </p>
        <h2
          id="about-heading"
          className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
        >
          Inspiring the Next Generation of Entrepreneurs
        </h2>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-300">
          TES (The Entrepreneurship Show) is a prestigious annual event organized by the
          Entrepreneurship Cell of ABES Engineering College (ABESEC). This grand event invites
          both budding and successful startups to share their experiences, including the challenges
          and triumphs they have faced on their entrepreneurial journeys.
        </p>
        <p className="mt-3 max-w-2xl text-base sm:text-lg text-gray-400">
          Our mission is to inspire and empower students to pursue their entrepreneurial
          aspirations. Through speaker sessions, panel discussions, business quizzes, and
          live pitch competitions, we aim to create awareness, clarify doubts about startups
          and funding, and encourage the entrepreneurial spirit among students.
        </p>

        {/* Stats / highlight cards */}
        <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="flex flex-col items-center rounded-2xl border border-gray-800 bg-neutral-950/80 px-4 py-6 text-center shadow-[0_0_30px_rgba(0,0,0,0.9)]"
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gray-400">
                {stat.label}
              </p>
              <p className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                {stat.value}
              </p>
              <p className="mt-3 text-sm text-gray-300">{stat.body}</p>
            </article>
          ))}
        </div>

        {/* Closing line */}
        <p className="mt-10 text-sm font-semibold text-gray-500">
          Organized by Entrepreneurship Cell, ABES Engineering College
        </p>
      </div>
    </section>
  );
};

export default About;


