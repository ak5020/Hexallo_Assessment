import { EventCardProps } from '../types';
import { events } from '../utils/constants';
import EventCard from './EventCard';

const EventCardContainer: React.FC = () => {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-8">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-12 text-red-00">
                        Event Cards with Smart Hover
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {events.map((event: EventCardProps, i) => (
                            <EventCard key={i} {...event} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventCardContainer;