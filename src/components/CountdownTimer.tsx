import { useState, useEffect } from "react";

const targetDate = new Date("2026-02-20T22:00:00-08:00"); // Feb 20, 2026 at 10PM PST

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Sec" },
  ];

  return (
    <section className="py-16 bg-card/50 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-6">
            Countdown to Opening Night
          </p>
          
          <div className="grid grid-cols-4 gap-3 md:gap-6">
            {timeUnits.map((unit, index) => (
              <div key={index} className="bg-background border border-border rounded-xl p-4 md:p-6">
                <p className="text-3xl md:text-5xl font-display font-bold text-foreground tabular-nums">
                  {String(unit.value).padStart(2, "0")}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">{unit.label}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            February 20, 2026 • 10:00 PM
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;