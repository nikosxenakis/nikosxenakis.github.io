# PersonalWebsite

A personal website built to showcase projects, experience, and portfolio. The site includes an AI-powered chatbot that uses [Groq](https://console.groq.com/) as the LLM provider (model: `llama-3.1-8b-instant`) to answer questions about Nikolaos Xenakis.

## Installation

Ensure you have [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/) installed. Then, install the dependencies:

```bash
pnpm install
```

## Development

Runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

```bash
pnpm start
```

## Environment Variables

Create a `.env` file in the `ui/` directory with the following:

```
VITE_GROQ_API_KEY=your_groq_api_key_here
```

Get a free API key at [console.groq.com](https://console.groq.com/).

## Build

Builds the app for production to the `dist` folder. It bundles React in production mode and optimizes the build for the best performance.

```bash
pnpm run build:prod
```

## License

This project is licensed under the MIT License.
