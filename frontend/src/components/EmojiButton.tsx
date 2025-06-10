type Props = {
    emoji: string;
    label: string;
    onClick: () => void;
};

export default function EmojiButton({ emoji, label, onClick }: Props) {
    return (
        <button
            aria-label={label}
            onClick={onClick}
            className="emoji"
        >
            {emoji}
        </button>
    );
}
