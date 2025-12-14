export interface EventCardProps {
    title: string;
    djName: string;
    time: string;
    location: string;
    price: string;
    date?: Date | string | null; // null = no date, Date = show date
    lorem?: string;
    hasProfile?: boolean;
}