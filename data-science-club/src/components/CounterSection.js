import React, { useState, useEffect } from 'react';

function CounterSection() {
  const [count, setCount] = useState(0);
  const target = 50;

  useEffect(() => {
    if (count < target) {
      const timer = setTimeout(() => setCount(count + 1), 50);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <section className="counter-section" data-aos="fade-up">
      <h2>Our Members</h2>
      <div className="counter">{count}</div>
      <div className="animation">
        <div className="n-path" style={{ top: '15%', left: '25%' }}></div>
        <div className="n-path" style={{ top: '35%', left: '60%' }}></div>
        <div className="n-path" style={{ top: '55%', left: '40%' }}></div>
        <div className="n-path" style={{ top: '75%', left: '70%' }}></div>
        <div className="n-path" style={{ top: '50%', left: '20%' }}></div>
      </div>
    </section>
  );
}

export default CounterSection;
