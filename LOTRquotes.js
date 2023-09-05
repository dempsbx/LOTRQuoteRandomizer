// Authorization header for API
const headers = {
  Accept: "application/json",
  Authorization: "Bearer rskCGx3SIPwjkuBtxVcp",
};

// Get and log random quote, the character who said it, and the movie it was said in
async function getQuote() {
  try {
    const url_1 = `https://the-one-api.dev/v2/quote?limit=2500`;
    const response = await fetch(url_1, { headers: headers });
    const data = await response.json();

    const totalQuotes = data.total;
    const randomIndex = Math.floor(Math.random() * totalQuotes);
    const quote = data.docs[randomIndex];

    const dialog = quote.dialog;
    console.log(dialog);

    const character = await getCharacter(quote.character);
    console.log(character);

    const movie = await getMovieName(quote.movie);
    console.log(movie);
  } catch (error) {
    console.error("Error fetching quotes:", error);
  }
}

// Get the character associated with the quote
async function getCharacter(characterId) {
  try {
    const url_2 = `https://the-one-api.dev/v2/character/${characterId}`;
    const response = await fetch(url_2, { headers: headers });
    const data = await response.json();

    const characterData = data.docs[0];
    const characterName = characterData.name;
    return characterName;
  } catch (error) {
    console.error("Error fetching character:", error);
  }
}

// Get the movie associated with the quote
function getMovieName(movieId) {
  var movieName;
  if (movieId == "5cd95395de30eff6ebccde5c") {
    movieName = "The Fellowship of the Ring";
  } else if (movieId == "5cd95395de30eff6ebccde5b") {
    movieName = "The Two Towers";
  } else if (movieId == "5cd95395de30eff6ebccde5d") {
    movieName = "The Return of the King";
  } else if (movieId == "5cd95395de30eff6ebccde58") {
    movieName = "The Unexpected Journey";
  } else if (movieId == "5cd95395de30eff6ebccde59") {
    movieName = "The Desolation of Smaug";
  } else if (movieId == "5cd95395de30eff6ebccde5a") {
    movieName = "The Battle of the Five Armies";
  } else if (movieId == "5cd95395de30eff6ebccde56") {
    movieName = "The Lord of the Rings Series";
  } else if (movieId == "5cd95395de30eff6ebccde57") {
    movieName = "The Hobbit Series";
  } else {
    movieName = "Failed to get movie name";
  }
  return movieName;
}

getQuote();
