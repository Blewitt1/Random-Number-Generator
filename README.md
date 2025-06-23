# 🎲 Random Number Generator — Chrome Extension

A clean, modern, dark-themed Chrome Extension that lets you instantly generate random numbers within a custom range — and remembers your inputs for next time.

---

## 🚀 Features

- 🎯 Generate random numbers between any two values
- 🌙 Sleek dark theme for comfortable use
- 💾 Remembers your last inputs and generated number across sessions
- ⚡ Lightning-fast and lightweight
- 🧠 Auto-swaps values if minimum is greater than maximum
- 🔒 No tracking, no data collection — your inputs stay local

---

## 🛠 Installation

1. Clone or download this repository.
2. Open Google Chrome and go to `chrome://extensions/`
3. Enable **Developer Mode** (top right).
4. Click **"Load unpacked"**.
5. Select the folder containing this extension’s files.

---

## 📁 Folder Structure

random-number-extension/
├── manifest.json
├── popup.html
├── style.css
├── script.js
├── icon16.png
├── icon48.png
├── icon128.png


---

## 📸 Screenshots

Make sure to include screenshots sized **1280×800** or **640×400**, in JPG or PNG (no transparency) for the Chrome Web Store listing.

---

## 🧠 Storage Use Justification

> This extension uses `chrome.storage.local` to store the last input values and the most recently generated number, so users can continue where they left off even after closing the extension.

---

## ✅ Permissions

- `storage`: To persist user inputs and output
- No other permissions are used or required.

---

## 📃 License

MIT — free to use, modify, and share.

---
