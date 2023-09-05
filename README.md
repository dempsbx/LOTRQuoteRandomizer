# Lord of the Rings Random Quote Generator

This script fetches a random quote from the Lord of the Rings movies. Along with the quote, it also logs the character who said it and the movie it was said in.

## Overview

- **Authorization**: The script uses a Bearer token to authenticate with the API.
- **Functions**:
  - `getQuote()`: Fetches and logs a random quote, character, and movie name.
  - `getCharacter(characterId)`: Returns the character name associated with the provided character ID.
  - `getMovieName(movieId)`: Returns the movie name associated with the provided movie ID.

## Prerequisites

To run the script, you'll need:

- A modern JavaScript environment (e.g., Node.js or a browser environment with async/await support).
- A valid Bearer token from [The One API](https://the-one-api.dev/).

### Installation

1. Clone the repository:

\```bash
git clone https://github.com/dempsbx/LOTRQuoteRandomizer.git
\```

2. Navigate to the project directory:

\```bash
cd LOTRQuoteRandomizer
\```

## Usage

Ensure you replace the Bearer token in the `headers` constant with your own valid token.

To run the script:

\```bash
node LOTRQuotes.js
\```

## License

Feel free to use, modify, and distribute this script as you see fit.

## Acknowledgments

- Thanks to [The One API](https://the-one-api.dev/) for providing the data.
