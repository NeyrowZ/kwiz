import { useEffect, useState } from 'react';
import { api } from './lib/api.jsx';

const instance = window.__INSTANCE__ ?? 'unknown';

export default function App() {
  const [health, setHealth] = useState('???');

  useEffect(() => {
    let cancelled = false;

    api.get('/health').then((health) => {
      if (!cancelled) setHealth(health.message)
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section>
      <h1>API Status {health}</h1>
      <span>{instance}</span>
    </section>
  )
}