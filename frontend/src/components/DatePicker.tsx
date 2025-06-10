type Props = {
    id?: string;
    date: string;
    onChange: (date: string) => void;
};

export default function DatePicker({ id, date, onChange }: Props) {
    id ??= `date-picker-${Math.random().toString(36).substring(2, 9)}`;

    return (
        <input
            id={id}
            type="date"
            value={date}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}
