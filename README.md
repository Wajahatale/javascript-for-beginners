# JavaScript for Beginners

Code from the **JavaScript for Beginners** video series. Every file here is written on screen in the videos — nothing is hidden, nothing is pre-built.

No frameworks. No build tools. No npm packages. Just JavaScript.

---

## Who this is for

People who have never written code, or who have tried JavaScript before and bounced off it. If you can open a folder on your computer, you can follow along.

---

## What you need

| Tool | Why | Where |
|---|---|---|
| Node.js (LTS) | Runs JavaScript on your machine | [nodejs.org](https://nodejs.org) |
| VS Code | The editor used in every video | [code.visualstudio.com](https://code.visualstudio.com) |
| Live Server | Auto-reloading local server (VS Code extension by Ritwick Dey) | VS Code Extensions panel |

Episode 1 walks through installing all three. If you're starting from zero, start there.

Check your install:

```bash
node --version
npm --version
```

If both print a version number, you're set. If you see "command not found", close your terminal completely and reopen it.

---

## Getting the code

```bash
git clone https://github.com/Wajahatale/javascript-for-beginners.git
cd javascript-for-beginners
```

Or click the green **Code** button above and choose **Download ZIP**.

---

## Episodes

### 01 — Setup and Variables
`01-setup-and-variables/`

Installing Node.js and VS Code, running your first file, variables, data types, and making a web page react to a click.

| File | What it is |
|---|---|
| `hello.js` | One line. Your first program. |
| `variables.js` | `let`, `const`, strings, numbers, booleans, template literals |
| `index.html` | A page with a heading and a button |
| `script.js` | Finds those elements and responds to clicks |

**Run the Node files:**

```bash
cd 01-setup-and-variables
node hello.js
node variables.js
```

**Run the browser files:** right-click `index.html` in VS Code and choose **Open with Live Server**.

---

*More episodes will be added here as they're published.*

---

## Homework

Each episode ends with exercises. Try them before looking at anything else — typing code that doesn't work yet is how this actually sticks.

**Episode 1**

1. Add a second button that resets the counter to zero
2. Change the heading to display your own name
3. Break something on purpose, read the error, then fix it

Number three matters most. Errors are the language telling you exactly what's wrong and on which line. Getting comfortable reading them now will save you months later.

Solutions live in `solutions/` — open them after you've made an honest attempt.

---

## Stuck?

- **Something won't run?** Check you're in the right folder. `cd` into the episode directory first.
- **`node` not recognised?** Reopen your terminal. If that fails, reinstall Node and tick "Add to PATH".
- **Live Server does nothing?** Make sure you right-clicked the `.html` file, not the `.js` file.
- **Still stuck?** Open an [issue](../../issues) with the error message and which episode you're on. Someone else has almost certainly hit the same thing.

---

## Contributing

Found a typo, a broken link, or a bug in the code? Pull requests are welcome — especially from people learning, since you'll spot the confusing parts faster than I will.

---

## Licence

MIT. Use this code however you like, in anything you like.
