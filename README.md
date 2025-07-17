# Find Your Date ❤️

A romantic website that shows today's date with special images based on the day and time.

## Features

- **Beautiful Romantic Design**: Gradient backgrounds, floating hearts animation, and elegant typography
- **Smart Date Detection**: Automatically detects the current date and time
- **Dynamic Image Selection**: Shows different images based on the day and time:
  - **Friday & Saturday**: Shows weekend image
  - **Sunday Evening (6 PM onwards) & Monday Morning (before 12 PM)**: Shows special evening image
  - **Monday to Thursday**: Randomly selects from weekday images
- **Interactive Popup**: Beautiful modal with date, image, and romantic message
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Animations**: Smooth animations and sparkle effects for enhanced user experience

## How to Use

1. **Open the Website**: Simply open `index.html` in your web browser
2. **Click the Button**: Click the "Click for Today's Date" button
3. **View the Popup**: A beautiful popup will appear showing:
   - Today's full date
   - A special image based on the day/time
   - A romantic message
4. **Close the Popup**: Click the X button, press Escape, or click outside the popup

## File Structure

```
Find Your Date/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── README.md           # This file
└── WhatsApp Images/    # Your romantic images
    ├── WhatsApp Image 2025-07-17 at 12.01.59.jpeg
    ├── WhatsApp Image 2025-07-17 at 12.01.59 (1).jpeg
    ├── WhatsApp Image 2025-07-17 at 12.01.59 (2).jpeg
    └── WhatsApp Image 2025-07-17 at 12.01.59 (3).jpeg
```

## Image Schedule

| Day/Time | Image Shown |
|----------|-------------|
| Friday & Saturday | WhatsApp Image 2025-07-17 at 12.01.59 (2).jpeg |
| Sunday Evening (6 PM+) & Monday Morning (< 12 PM) | WhatsApp Image 2025-07-17 at 12.01.59 (3).jpeg |
| Monday - Thursday | Random selection from:<br>• WhatsApp Image 2025-07-17 at 12.01.59.jpeg<br>• WhatsApp Image 2025-07-17 at 12.01.59 (1).jpeg |

## Technical Details

- **HTML5**: Semantic markup with modern structure
- **CSS3**: Advanced styling with gradients, animations, and responsive design
- **JavaScript**: Dynamic date detection and image selection logic
- **Fonts**: Google Fonts (Dancing Script for titles, Poppins for body text)
- **No Dependencies**: Pure HTML, CSS, and JavaScript - no external libraries required

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Customization

You can easily customize the website by:
- Replacing the images in the root directory
- Modifying the messages in `script.js`
- Changing colors and styles in `styles.css`
- Adjusting the time periods in the `getTimePeriod()` function

## Getting Started

1. Download all files to a folder
2. Make sure all image files are in the same directory as `index.html`
3. Open `index.html` in your web browser
4. Enjoy the romantic experience! 💕

---

Made with ❤️ for special moments together 