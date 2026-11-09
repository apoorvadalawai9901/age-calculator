# Age Calculator

A clean, responsive age calculator that shows your age in years, months, and days. Enter a date of birth to get an instant, friendly result — your date is processed locally in your browser.

## Features

- Calculates age in years, months, and days.
- Accounts for month lengths and leap years using calendar dates.
- Prevents future dates and reports missing or invalid dates with a friendly message.
- Includes age-based messages and an animated result panel.
- Provides a reset button to clear the form and result.
- Responsive layout, accessible form feedback, and reduced-motion support.
- No frameworks, libraries, build tools, or server required.

## Technologies used

- HTML5
- CSS3
- Vanilla JavaScript

## How to run

1. Download or clone this repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a browser. You can also use the **Live Server** extension in VS Code and select **Open with Live Server**.

The app works offline without a build step or external assets.

## Project structure

```text
age-calculator/
├── index.html   # Page structure and form
├── style.css    # Responsive layout, colors, and animations
├── script.js    # Date validation and age calculation
└── README.md    # Project documentation
```

## Push to GitHub

Create a new repository on GitHub (for example, `age-calculator`), then run these commands from the project folder. Replace the URL with your repository's URL:

```bash
git init
git add index.html style.css script.js README.md
git commit -m "Initial commit - Created Age Calculator Web App"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/age-calculator.git
git push -u origin main
```
