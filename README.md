# Event Manager App

A React Native mobile application for managing events. Built with Expo and React Navigation.

## Features

- View list of events with details
- Search through events
- Add new events
- Edit existing events
- Delete events
- Save favorite events

## Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS) or Android Emulator (for Android)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd event-manager
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your desired platform:
- Press `i` to run on iOS simulator
- Press `a` to run on Android emulator
- Press `w` to run on web browser
- Scan the QR code with your phone's camera (iOS) or Expo Go app (Android) to run on your device

## Project Structure

- `/screens` - Main screen components
  - `EventsScreen.js` - Home screen with event list
  - `EditEventScreen.js` - Screen for adding/editing events
- `/components` - Reusable components
  - `EventCard.js` - Component for displaying event information

## Technologies Used

- React Native
- Expo
- React Navigation
- @expo/vector-icons

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
