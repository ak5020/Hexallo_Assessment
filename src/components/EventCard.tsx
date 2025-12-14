import { useState } from 'react';
import { Calendar, Heart, Timer, Locate } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { EventCardProps } from '../types';

// Utility for clean className merging
function cn(...inputs: any[]) {
    return twMerge(clsx(inputs));
}

const EventCard: React.FC<EventCardProps> = ({
    title,
    djName,
    date,
    time,
    location,
    price,
    lorem,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const hasDate = date !== null && date !== undefined;
    const hasTime = time !== null && time !== undefined;
    const hasLocation = location !== null && location !== undefined;

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative group cursor-pointer"
        >
            <div
                className={cn(
                    "relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300",
                    isHovered && "shadow-2xl scale-[1.02]"
                )}
            >
                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-orange-200 relative overflow-hidden" />

                {/* Heart Icon */}
                <button
                    className={cn(
                        "absolute top-4 right-4 p-2 rounded-full bg-white/80 transition-all duration-300",
                        isHovered ? "opacity-100 scale-100" : "opacity-100 scale-75"
                    )}
                >
                    <Heart className="w-5 h-5 text-gray-700" fill={isHovered ? "#f43f5e" : "#F7E4B6"} />
                </button>

                {/* Content */}
                <div className="p-5 space-y-3">
                    <div className="w-[61px] px-3 py-1 bg-red-500 text-red-800 text-xs font-semibold rounded-full">
                        Lounge
                    </div>
                    <h3 className="flex font-bold text-lg text-gray-900">{title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="font-medium">{djName}</span>
                    </div>

                    {/* Time */}
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        {hasTime && isHovered && <Timer className="w-4 h-4 text-amber-600" />}
                        <span>{time}</span>
                    </div>
                    {/* Date */}
                    {hasDate && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            {hasDate && isHovered && <Calendar className="w-4 h-4 text-amber-600" />}
                            <span>{typeof date === 'string' ? date : date?.toString()}</span>
                        </div>
                    )}
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        {hasLocation && isHovered && <Locate className="w-4 h-4 text-amber-600" />}
                        <span className='flex text-xs text-gray-500'>{location}</span>
                    </div>
                    {/* Price */}
                    <p className="flex text-lg font-bold text-amber-600">{price}</p>
                    {isHovered && <p className="text-left text-sm text-gray-700">{lorem}</p>}
                </div>
            </div>
        </div>
    );
};

export default EventCard;