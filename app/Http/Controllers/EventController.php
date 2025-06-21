<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;
use Inertia\Inertia;

class EventController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'event_date' => 'required|date',
        ]);

        Event::create($validated);

        return back()->with('success', 'Event created successfully!');
    }

    public function index($view)
    {
        $events = Event::all();

        return Inertia::render($view, ['events' => $events]);
    }
}
