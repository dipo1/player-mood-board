type Props = {
    summary: { happy: number; neutral: number; sad: number };
};

export default function MoodSummary({ summary }: Props) {
    return (
        <div className="mood-summary">
            <div className="mood happy">
                <span className="emoji">😃</span>
                <span className="space" />
                <span className="count">{summary.happy}</span>
            </div>
            <div className="mood neutral">
                <span className="emoji">😐</span>
                <span className="space" />
                <span className="count">{summary.neutral}</span>
            </div>
            <div className="mood sad">
                <span className="emoji">😞</span>
                <span className="space" />
                <span className="count">{summary.sad}</span>
            </div>
        </div>
    );
}
