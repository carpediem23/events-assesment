import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Welcome from '../components/Welcome.component';

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => navigate('/events'), 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <section id="welcome-page">
      <Welcome />
    </section>
  );
}
