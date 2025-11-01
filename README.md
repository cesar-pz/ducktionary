# Custom Wordle

A minimal and modern Wordle clone with both random 5-letter word mode (default) and custom word puzzle creation (5-10 letters).

## Features

- 🎲 **Random Mode (Default)**: Play with randomly selected 5-letter words
- ✏️ **Custom Mode**: Create puzzles with words from 5 to 10 letters
- 🎨 **Modern UI**: Clean, minimal design with beautiful gradient background
- 🎮 **Full Wordle Mechanics**: 
  - Green tiles for correct letters in correct positions
  - Yellow tiles for correct letters in wrong positions
  - Gray tiles for incorrect letters
  - Keyboard color feedback
  - 6 attempts to guess the word
- 📱 **Responsive Design**: Works on desktop and mobile devices
- ⌨️ **Dual Input**: Use physical keyboard or on-screen keyboard

## How to Play

### Random Mode (Default)
1. Open `index.html` in your browser
2. The game starts automatically with a random 5-letter word
3. Type your guess using your keyboard or click the on-screen keys
4. Press Enter to submit your guess
5. You have 6 attempts to guess the word

### Custom Mode
1. Click the "Custom Mode" button at the top
2. Enter a word between 5-10 letters
3. Click "Start Game"
4. Share the puzzle with friends to challenge them!

## Installation

Simply open `index.html` in any modern web browser. No build process or dependencies required!

```bash
# Clone the repository
git clone https://github.com/cesar-pz/custom-wordle.git

# Navigate to the directory
cd custom-wordle

# Open in browser
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows
```

Or use a local server:
```bash
python3 -m http.server 8080
# Then visit http://localhost:8080
```

## Technologies Used

- Pure HTML5
- CSS3 (with modern features like gradients, animations, flexbox)
- Vanilla JavaScript (no frameworks or dependencies)

## Screenshots

### Random 5-Letter Mode (Default)
![Random Mode](https://github.com/user-attachments/assets/73a2d58c-93e4-4f51-aed2-3e4bd24a4e81)

### Custom Mode Interface
![Custom Mode](https://github.com/user-attachments/assets/6da101a0-a20e-4aef-80b0-289a3fe7997a)

### Gameplay with 7-Letter Word
![7-Letter Gameplay](https://github.com/user-attachments/assets/b5f24994-7afa-4539-9c68-3c216d394059)

### Winning State
![Win State](https://github.com/user-attachments/assets/998ff835-e6de-4b1d-8faa-7017a3af7e1d)

## License

MIT