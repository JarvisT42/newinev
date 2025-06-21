import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';

type Event = {
    id: number;
    title: string;
    event_date: string;
};

type PageProps = {
    auth: {
        user: any;
    };
    events: Event[];
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Event',
        href: '/user/dashboard',
    },
];

export default function Dashboard() {
    const { events } = usePage<PageProps>().props; // ✅ Fix: get `events` from page props
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const modalRef = useRef<HTMLDivElement | null>(null);

    const calendarEvents = events.map((event) => ({
        title: event.title,
        date: event.event_date,
    }));

    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        event_date: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        post(route('events.store'), {
            onSuccess: () => {
                setSuccessMessage('Event created successfully!');
                setIsModalOpen(false);
                reset();

                setTimeout(() => setSuccessMessage(''), 5000);
            },
        });
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsModalOpen(false);
            }
        };

        if (isModalOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpen]);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Event" />

            {/* Header */}
            

            {/* Success Message */}
            {successMessage && <div className="mb-4 rounded-md bg-green-100 px-4 py-2 text-green-800">{successMessage}</div>}

            {/* Calendar */}
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4">
                    <div className="relative rounded-xl border border-gray-300 p-4 dark:border-gray-600">
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl font-semibold text-gray-900">Event Management</h1>
                            <Button variant="outline" onClick={() => setIsModalOpen(true)}>
                                Add Events
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 p-4">
                    <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" weekends={true} height="800px" events={calendarEvents} />
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div ref={modalRef} className="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
                        <h2 className="mb-4 text-xl font-bold">Add Event</h2>
                        <form className="grid gap-4" onSubmit={handleSubmit}>
                            <div>
                                <Label htmlFor="eventName">Event Name</Label>
                                <Input
                                    id="eventName"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    placeholder="Enter event name"
                                />
                                {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
                            </div>
                            <div>
                                <Label htmlFor="eventDate">Date</Label>
                                <Input id="eventDate" type="date" value={data.event_date} onChange={(e) => setData('event_date', e.target.value)} />
                                {errors.event_date && <p className="text-sm text-red-500">{errors.event_date}</p>}
                            </div>
                            <div className="flex justify-end gap-2">
                                <Button variant="outline" type="button" onClick={() => setIsModalOpen(false)}>
                                    Cancel
                                </Button>
                                <Button type="submit" disabled={processing}>
                                    Save
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AppLayout>
    );
}
