# Rep Deck

A progressive web app for building and running custom workout plans. After configuring a routine, users enter a distraction-free playback mode that presents each exercise sequentially with rep counts or a countdown timer.

> **STATUS**: Playback of a hardcoded session works. Program configuration, session selection, and PWA polish are still in progress.

---

## Tech stack

- React 19 + TypeScript
- Vite
- Vite Plugin PWA
- Supabase (TODO: program and session persistence)

---

## Architecture

### Overview

TODO

### Data model

TODO

---

## Design decisions

### Compile screens vs state machine

When a session loads, `getScreensForSession` expands it into a flat list of screens. Playback then only needs a single index, and Next/Back move through that sequence.

An alternative would be a state machine that tracks the current phase, position, and transitions. For this app, that would put workout structure into the playback logic. Compiling the screens up front keeps playback deliberately simple.

The list of screens is also easy to test independently: given a session, assert that it produces the expected sequence.

### Countdown key

The `Countdown` component remounts via a React key so a new timed screen starts fresh. The key is currently "phase + title" - a stable id on the data model is still TODO.

---

## Future improvements

- **Tests**: in order of priority: getScreensForSession, session player playback, useCountdown.
- **Screen wake lock**: keep the screen awake to make it easier to navigate between steps during a workout.
- **Begin / end screens**: session intro and completion.
- **PWA polish**: manifest, icons, installability, and offline caching of workouts and sounds.
- **Program builder**: UI to create and edit programs and sessions.
- **Session selection**: pick among `program.sessions`, skip `null` rest days.
- **UX & polish**: web + mobile.
