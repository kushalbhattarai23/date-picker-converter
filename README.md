# English & Nepali Date Picker

A modern, user-friendly date picker component built with React and TypeScript that seamlessly converts between English (AD) and Nepali (BS) calendar systems. This component provides an intuitive interface for selecting dates in either calendar system while automatically displaying the corresponding date in both formats.

![Date Picker Preview](https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

## Features

- 📅 Single date picker interface for both English (AD) and Nepali (BS) dates
- 🔄 Real-time date conversion between AD and BS calendars
- 📱 Fully responsive design that works on all devices
- 🎨 Modern UI with smooth animations
- 💪 Built with TypeScript for type safety
- 🛡️ Zero dependencies except for React and the Nepali date picker library

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/english-nepali-datepicker.git
cd english-nepali-datepicker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Usage

The date picker can be used as a standalone component in your React application:

```tsx
import CombinedDatePicker from './components/CombinedDatePicker';

function App() {
  return (
    <div>
      <CombinedDatePicker />
    </div>
  );
}
```

## How It Works

The component uses the Nepali Date Picker library to handle Nepali calendar functionality and provides automatic conversion between English (AD) and Nepali (BS) dates. When a user selects a date:

1. If selecting from the Nepali calendar:
   - The Nepali date is stored and displayed
   - The date is automatically converted to English (AD) format
   - Both dates are shown in the interface

2. If selecting from the English calendar:
   - The English date is stored and displayed
   - The date is automatically converted to Nepali (BS) format
   - Both dates are shown in the interface

## Dependencies

- React 18.x
- TypeScript 5.x
- Nepali Date Picker v4.0.8
- Tailwind CSS (for styling)
- Lucide React (for icons)

## Browser Support

The date picker works in all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Nepali Date Picker](https://nepalidatepicker.sajanmaharjan.com.np/) by Sajan Maharjan
- Icons provided by [Lucide](https://lucide.dev/)
