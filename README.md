# Brain Power - Holistic Gym for the Body, Mind & Brain

A comprehensive Ionic Angular application designed specifically for seniors, providing holistic wellness exercises, AI-powered guidance, and health knowledge.

## Features

### Core Functionality
- **Daily Routine Exercises**: Breathing exercises and memory games
- **AI Assistant**: Stubbed chat interface with canned responses for sleep, stress, and pain management
- **Goals & Challenges**: Trackable daily goals with progress monitoring
- **Health Knowledge**: Educational articles on nutrition, anxiety, sleep, and Feldenkrais
- **Contact & Support**: FAQ and support information

### Accessibility Features
- **Large Text Mode**: Toggle for increased font sizes
- **High Contrast Mode**: Enhanced color contrast for better visibility
- **Senior-Friendly UI**: Large buttons, clear typography, and intuitive navigation
- **Offline Support**: All features work without internet connection

### Design System
- **Primary Color**: #40bca4 (Teal)
- **Secondary Color**: #EE8621 (Orange)
- **Background**: #f9f9f9
- **Text**: #333333
- **Typography**: System fonts with accessibility scaling

## Project Structure

```
src/
 app/
    components/           # All screen components
       splash/          # Splash screen with auto-navigation
       register/        # User registration form
       home/            # Main menu with 5 primary buttons
       intro-daily-routine/  # Routine explanation
       lets-begin/      # Exercise selection and progress
       ai-assistant/    # Chat interface
       goals/           # Goals tracking
       knowledge/       # Health articles
       contact/         # Support and FAQ
       settings/        # App preferences
    services/            # Core services
       storage.service.ts      # localStorage wrapper
       data.service.ts         # Mock data and profile management
       chat.service.ts         # Stubbed AI responses
       notifications.service.ts # Reminder management
    app.config.ts        # App configuration
    app.routes.ts        # Routing configuration
    app.component.ts     # Root component
 shared/
    components/          # Reusable components
       primary-button/  # Styled button component
       card/           # Card container component
       progress-bar/   # Progress indicator
    styles/
        theme.css        # CSS variables and global styles
 main.ts                 # Application bootstrap
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Ionic CLI

### Installation

1. **Install Ionic CLI** (if not already installed):
   ```bash
   npm install -g @ionic/cli
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Development Server**:
   ```bash
   ionic serve
   ```

4. **Build for Production**:
   ```bash
   ionic build
   ```

### Adding Capacitor for Mobile Builds

To build for Android/iOS:

1. **Install Capacitor**:
   ```bash
   npm install @capacitor/core @capacitor/cli
   ionic integrations enable capacitor
   ```

2. **Add Platform**:
   ```bash
   ionic capacitor add android
   ionic capacitor add ios
   ```

3. **Build and Sync**:
   ```bash
   ionic build
   ionic capacitor sync
   ```

4. **Open in Native IDE**:
   ```bash
   ionic capacitor open android
   ionic capacitor open ios
   ```

## Key Components

### Home Component
Displays 5 main navigation buttons in exact order:
1. Intro to Daily Routine Exercises
2. Let's Begin  Daily Routine
3. Automated AI Answer Engine
4. Goals & Challenges
5. Health Knowledge

### Services Architecture

- **StorageService**: Handles localStorage operations with type safety
- **DataService**: Manages mock data, profiles, and exercise completion tracking
- **ChatService**: Provides canned AI responses for common health queries
- **NotificationsService**: Manages reminder scheduling (stubbed for MVP)

### Data Models

```typescript
interface Profile {
  name: string;
  age: number;
  email: string;
  phone: string;
}

interface Completion {
  date: string;
  exerciseId: string;
  level: 'beginner' | 'advanced' | 'grand';
  durationSec: number;
  score?: number;
}

interface Goal {
  id: string;
  title: string;
  done: boolean;
  dueDate?: string;
}
```

## Development Notes

- **Standalone Components**: All components use Angular 18 standalone architecture
- **No Backend**: All data is stored locally using localStorage
- **Mock AI**: Chat responses are rule-based, not real AI
- **Accessibility First**: Designed with seniors and accessibility in mind
- **Offline Ready**: No network dependencies

## Testing

The app includes manual testing scenarios:
- Home shows 5 buttons in exact order
- Exercise completion writes to storage and updates progress
- Goals persist across app reloads
- AI assistant returns appropriate canned responses
- Settings toggles affect UI appearance

## Future Enhancements

- Real AI integration
- Push notifications
- Cloud data sync
- Additional exercise types
- Social features
- Advanced analytics

## Support

For questions or support, use the Contact & Support section within the app or refer to the FAQ.
