TIC TAC TOE JJK EDITION

# Synopsis:

/**
 * PROJECT CORE CONFIGURATION
 * Author: Gege Akutami 
 * Status: Domain Expanded
 */

const GOJO_DIRECTIVE = "Winning by dying and winning even if you die are two completely different things, Megumi. Give it your all. It’s okay to be selfish.";

Before even reaching the tic tac toe project, I studied the curriculum from The Odin Project, I carefully plannned ahead in my head, thinking of the theme, and how the game mechanics should look like before figuring out how to implement them. Because at this stage, I look what is ahead, and carefully outline how each project should be like. I feel like, thanks to The Odin Project, I am improving at planning, and stratagizing the projects before I even start them too!

I did not feel like repeating the game, and having a generic tic tac toe project as two repositories- I did not feel like it was the ideal thing, so I just first followed the curriculum, and then, in the same repository, I changed the generic tic tac toe game, and I turned it into what is now: TIC TAC TOE: JJK EDITION.

Please, consider for all purposes, as this should be; a fan-art project of a game. JJK was created by Gege Akutami.
The svg is meant to represent Satorou Gojo, a key character from the anime/manga. Now, it is no longer a generic game, but a game infused with personality, and soul of its own! Infusing all of me into the domain, and now it is locked on inside the box! 

Without further ado, allow me to introducte you to the architecture of the final tic tac toe project:

# Domain Expansion: Tic Tac Toe (JJK Edition)

> *"Infinity holds, for I am the best number one sorcerer!"*

A feature-rich, highly stylized, multilingual web-based Tic Tac Toe game built as an ambitious evolution of [The Odin Project's JavaScript Tic Tac Toe](https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe) curriculum project.

---

## 📜 Phase 1: The Foundation & Console-First Architecture

Every great domain expansion starts with a stable barrier. This project originated directly from the core specifications and clean-code constraints outlined by **The Odin Project**:

1. **Structuring the Core Engine**: Storing the gameboard data as a flat array (`["", "", "", "", "", "", "", "", ""]`) inside a dedicated `Gameboard` object.
2. **Player and Flow Objects**: Encapsulating player identities within factory functions and building a controller object to manage turn progression.
3. **Encapsulation & Scope Control**: Strictly adhering to zero global variables. Tucking singleton instances (like the gameboard and display controller) inside **IIFEs (Immediately Invoked Function Expressions / Module Pattern)** so they cannot be accidentally re-instantiated.
4. **Console-First Logic**: Building and testing the entire game logic in the console before writing a single line of HTML or CSS. This included writing robust checking algorithms for all possible 3-in-a-row winning combinations and tie/stalemate states.
5. **DOM Integration**: Expanding from the console into an interactive web page by building a display controller module that dynamically renders the board array to the DOM, handling cell click events, and validating moves against already-taken spots.
6. **Interface Polish**: Cleaned up the initial interface to accept dynamic player name inputs, added start/restart buttons, and introduced dynamic message elements to display game results.

---

## ⛩️ Phase 2: Transforming into JJK Edition & Crafting the Gojo Aesthetic

Once the core curriculum constraints were locked down, the project evolved into an immersive anime domain clash, requiring careful visual engineering and styling:

* **Vectorizing Gojo's Silhouette**: Meticulously designing and embedding a custom, crisp SVG silhouette of Satoru Gojo positioned gracefully on the side of the UI, ensuring it remains pristine, responsive, and completely untouched by game grid updates.
* **JJK Aesthetic Overhaul**: Infusing a signature **Jujutsu Kaisen theme** (deep cursed purple gradients, infinite void styling, and striking visual contrasts) with character selection (Satoru Gojo vs. Ryomen Sukuna), custom visual markers (Infinity `♾️` and Cursed Face `👹`), and customizable player slot ordering.

---

## 🎵 Phase 3: Finalizing the Domain Expansion (Tournaments, i18n & OST)

The final phase pushed the application into a complete, production-ready interactive experience:

* **5-Round Tournament Mode (Best of 5)**: Upgraded from a single match into a competitive series (first to 3 wins) complete with automatic round progression via the "Open Domain" button, tie/stalemate handling, and a persistent live Cursed Scoreboard tracking series scores dynamically.
* **Multilingual Localization (i18n)**: Full support across **10 languages** (English, Japanese, Spanish, German, Russian, Chinese, Korean, Turkish, Indonesian, and French) featuring custom localized character dialogue for turns, round victories, series wins, and timeouts.
* **Cursed Energy Turn Timer**: Adds high-stakes tactical pressure with a real-time 15-second countdown timer per turn that automatically handles turn expiration.
* **State Persistence (`localStorage`)**: Robust saving and loading system that archives game boards, player names, markers, active turns, scores, language selections, and series states.
* **Embedded OST Player**: A floating custom-styled top-right YouTube music panel streaming *Lost In Paradise* directly into the experience.

---

## 🛠️ Technical Architecture & Design Patterns

The codebase adheres strictly to the modular patterns learned during the foundational track:
1. **`Gameboard Module`**: Manages the core 9-index array state, cell mutations, validation, board clearing, and archive state restoration.
2. **`Player Factory`**: Generates player objects dynamically with custom names and assigned cursed markers.
3. **`Localization Dictionary (i18n)`**: A multi-language lookup dictionary containing dynamic template functions for round progression, timeouts, ties, and series victories.
4. **`Display Controller Module`**: Handles all DOM caching, grid event listeners, control buttons (`Open Domain`, `Save Game`, `RESET CLASH`), dropdown selectors, scoreboard updates, and timer displays.
5. **`Game Flow Controller Module`**: Manages turn-switching, winning combination evaluation, tie detection, multi-round progression logic, interval-based turn timers, and `localStorage` integration.

/**
 * SYSTEM TERMINATION LOG
 */
const JUNPEI_REFLECTION = {
    status: "I already know how repulsive humans can be.",
    
    metabolism: "People always pretend their emotions are everything, but the heart is just the metabolism of the soul. It's all a delusion."
};