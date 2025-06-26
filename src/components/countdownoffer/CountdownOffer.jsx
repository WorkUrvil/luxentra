'use client';

import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

// Countdown ends in 3 days (customize as needed)
const endTime = dayjs().add(3, 'day').endOf('day');

export default function CountdownOffer() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = dayjs();
    const diff = endTime.diff(now);
    const d = dayjs.duration(diff);

    return {
      days: d.days(),
      hours: d.hours(),
      minutes: d.minutes(),
      seconds: d.seconds(),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white text-black text-center py-16 px-6">
      <h2 className="text-3xl font-bold mb-3">✨ Limited-Time Launch Offer</h2>
      <p className="text-sm text-black mb-6">
        Enjoy exclusive pricing on premium tech. Offer ends soon!
      </p>

      <div className="flex justify-center gap-6 text-xl font-semibold mb-8">
        <TimerBox label="Days" value={timeLeft.days} />
        <TimerBox label="Hours" value={timeLeft.hours} />
        <TimerBox label="Minutes" value={timeLeft.minutes} />
        <TimerBox label="Seconds" value={timeLeft.seconds} />
      </div>

      <a
        href="/products"
        className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#bfa980] to-[#e9e5d6] text-[#0e2f2f] font-bold tracking-wide hover:from-[#e9e5d6] hover:to-[#bfa980] transition"
      >
        Shop Now
      </a>
    </section>
  );
}

function TimerBox({ label, value }) {
  return (
    <div className="bg-white/10 rounded-xl px-4 py-3 min-w-[70px]">
      <div className="text-3xl font-bold">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-xs tracking-wide text-[#e9e5d6] mt-1">{label}</div>
    </div>
  );
}
