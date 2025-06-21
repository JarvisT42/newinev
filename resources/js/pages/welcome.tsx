import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import { Head, Link, usePage } from '@inertiajs/react';

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

export default function Welcome() {
    const { auth, events } = usePage<PageProps>().props;

    const calendarEvents = events.map((event) => ({
        title: event.title,
        date: event.event_date,
    }));

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-start lg:p-8">
                {/* Navigation */}
                <header className="mb-6 w-full max-w-6xl text-sm">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm text-[#1b1b18] hover:border-[#1915014a]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm text-[#1b1b18] hover:border-[#19140035]"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm text-[#1b1b18] hover:border-[#1915014a]"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                {/* Main Content */}
                <main className="w-full px-4 lg:px-0">
                    <div className="mx-auto w-full max-w-screen-2xl">
                        <div className="mb-6 text-center">
                            <h1 className="text-3xl font-bold text-[#1b1b18]">📅 Incoming Events Monitoring</h1>
                            <p className="mt-2 text-base text-gray-600">Stay updated with upcoming activities and schedules.</p>
                        </div>

                        <div className="w-full rounded-lg bg-white p-6 shadow">
                            <FullCalendar
                                plugins={[dayGridPlugin]}
                                initialView="dayGridMonth"
                                weekends={true}
                                height="800px"
                                events={calendarEvents}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
