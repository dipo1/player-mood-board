import {API_BASE_URL, API_STORAGE_KEY, API_USE_LOCAL_STORAGE} from "../config.ts";

const BASE_URL = API_BASE_URL;
const STORAGE_KEY = API_STORAGE_KEY;
const USE_LOCAL_STORAGE = API_USE_LOCAL_STORAGE === 'true';

type Mood = 'happy' | 'neutral' | 'sad';

export async function submitMood(emoji: Mood): Promise<void> {
    if (USE_LOCAL_STORAGE) {
        const moods = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        moods.push({ emoji, timestamp: new Date().toISOString() });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(moods));
        return;
    }

    await fetch(`${BASE_URL}/mood`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emoji }),
    });
}

export async function fetchMoodSummary(date: string): Promise<Record<Mood, number>> {
    if (USE_LOCAL_STORAGE) {
        const moods: { emoji: Mood; timestamp: string }[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        const filtered = moods.filter((m) => m.timestamp.startsWith(date));

        const result: Record<Mood, number> = { happy: 0, neutral: 0, sad: 0 };
        for (const mood of filtered) {
            result[mood.emoji]++;
        }

        return result;
    }

    const res = await fetch(`${BASE_URL}/moods?date=${date}`);
    return res.json();
}
