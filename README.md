# Mimo - A Simple Chrome Extension for Random Memes

Mimo is a simple and fun Chrome extension that displays random memes from Reddit using the [Meme API](https://github.com/D3vd/Meme_Api). Whenever you need a quick break, open Mimo and enjoy a random meme to lift your mood!

## Features

- Fetches a random meme from Reddit using the [Meme API](https://meme-api.com/gimme).
- Lightweight and easy to use.
- Provides a fun way to take a quick break from your tasks.

## How It Works

1. When the extension is opened, Mimo makes a GET request to the `https://meme-api.com/gimme` endpoint.
2. The API responds with a random meme image and other details such as title and subreddit.
3. Mimo displays the meme image along with its title and source subreddit.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/SaranshBaniyal/mimo-chrome-extension.git
    ```
   
2. Go to `chrome://extensions/` in your Chrome browser.
3. Enable **Developer mode** by toggling the switch in the top-right corner.
4. Click on **Load unpacked** and select the `mimo` folder (the root directory of the cloned repository).

## Usage

1. After installing, click the Mimo icon in the Chrome toolbar.
2. Enjoy a new random meme every time you open the extension!

## API Reference

Mimo uses the `https://meme-api.com/gimme` endpoint from the [Meme API](https://github.com/D3vd/Meme_Api). It returns JSON data with the following fields:

```json
{
  "postLink": "https://redd.it/abc123",
  "subreddit": "memes",
  "title": "A funny meme",
  "url": "https://i.redd.it/xyz123.jpg",
  "nsfw": false,
  "spoiler": false,
  "author": "reddit_user",
  "ups": 1234
}
