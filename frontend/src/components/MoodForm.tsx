import { useState } from 'react';
import EmojiButton from './EmojiButton';
import { submitMood } from '../lib/api';

export default function MoodForm() {
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleMood(emoji: 'happy' | 'neutral' | 'sad') {
        setError(null);
        try {
            await submitMood(emoji);
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 2000);
        } catch (e) {
            setError((e as Error).message);
        }
    }

    return (
        <div className="mood-form">
            {submitted ? (
                <div className="message success">Thank you for your feedback! 😊</div>
            ) : (
                <>
                    <div className="emoji-buttons">
                        <EmojiButton emoji="😃" label="Happy" onClick={() => handleMood('happy')} />
                        <EmojiButton emoji="😐" label="Neutral" onClick={() => handleMood('neutral')} />
                        <EmojiButton emoji="😞" label="Sad" onClick={() => handleMood('sad')} />
                    </div>
                    {error && <div className="message error">{error}</div>}
                </>
            )}
        </div>
    );
}
