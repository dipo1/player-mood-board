import MoodForm from '../components/MoodForm';

export default function PlayerPage() {
    return (
        <main id="player-page">
            <section className="container">
                <h1>How do you feel after training?</h1>
                <div className="box">
                    <MoodForm />
                </div>
            </section>
        </main>
    );
}
