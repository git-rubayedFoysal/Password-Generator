# Password Generator

A React-based password generator that creates secure, random passwords with customizable options.

## Features

- **Customizable Length** — Set password length from 6 to 100 characters
- **Number Inclusion** — Optionally include numbers (0-9)
- **Special Characters** — Optionally include special characters (!@#$%^&*_-+=[]{}~`)
- **One-Click Copy** — Copy generated password to clipboard instantly
- **Auto-Generate** — Automatically regenerates password when settings change

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure

```
PasswordGenerator/
├── src/
│   ├── App.jsx      # Main component with password logic
│   ├── App.css     # Component styles
│   ├── main.jsx    # Entry point
│   └── index.css   # Global styles
├── index.html      # HTML template
├── package.json    # Dependencies
└── vite.config.js  # Vite configuration
```

## How It Works

| State | Description |
|-------|-------------|
| `password` | Generated password string |
| `length` | Password length (default: 8) |
| `numberAllow` | Include numbers toggle |
| `charAllow` | Include special characters toggle |

### Key Functions

- `generatePassword()` — Creates random password based on settings
- `copyPassword()` — Copies password to clipboard

## Tech Stack

- React
- Vite
- Tailwind CSS