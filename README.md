# Tic-Tac-Toe

Rrecreating the original tic tac toe that I did as a base, before transforming it into a fan-art game

A clean, modular, and high-performance implementation of Tic-Tac-Toe built as part of The Odin Project curriculum. Designed with a strict "inside-out" architecture, zero global scope pollution, and a striking minimalist dark aesthetic.

## ✨ Features

* **Modular IIFE Architecture:** Encapsulates state and logic into self-contained singletons (`Gameboard`, `gameController`, `displayController`) to eliminate global namespace pollution.
* **Factory Functions:** Uses clean factory blueprints (`Player`) for flexible player instantiation.
* **Robust Game Logic:** Automatically checks all horizontal, vertical, and diagonal winning combinations as well as tie states.
* **Dynamic Customization:** Input fields allow players to set custom names before launching the match.
* **Minimalist Dark UI:** High-contrast pitch-black and stark white aesthetic optimized for clarity and focus.

## 📂 File Structure

```text
tic-tac-toe/
├── toe.html        # Main HTML layout and markup
├── tacstyle.css    # High-contrast minimalist dark styling
└── tic.js          # Core game logic, state management, and DOM controller