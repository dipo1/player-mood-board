import { useState, useEffect } from 'react';
import MoodSummary from '../components/MoodSummary';
import DatePicker from '../components/DatePicker';
import { fetchMoodSummary } from '../lib/api';

export default function CoachPage() {
    const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
    const [summary, setSummary] = useState({ happy: 0, neutral: 0, sad: 0 });
    const [error, setError] = useState<string | null>(null);

    async function loadData(selectedDate: string) {
        setError(null);
        try {
            const data = await fetchMoodSummary(selectedDate);
            setSummary(data);
        } catch (e) {
            setError((e as Error).message);
        }
    }

    useEffect(() => {
        loadData(date);
        const interval = setInterval(() => loadData(date), 10000);
        return () => clearInterval(interval);
    }, [date]);

    return (
        <main id="coach-page">
            <section className="container">
                <h1>Team Mood Summary</h1>
                <div className="box">
                    <DatePicker date={date} onChange={setDate} />
                    {error && <p className="message error">{error}</p>}
                    <MoodSummary summary={summary} />
                </div>
            </section>
        </main>
    );
}
