# Token utility

A tool to get a token for API testing. This would normally be handled by the implicit flows, but we don't have time to get this organised ahead of the external testers.

## Installation

1. Install NodeJS v20
2. Install dependencies

```sh
npm install --workspace token-util
```

## Usage

1. Build and run the app

```sh
npm run build --workspace token-util
npm run start --workspace token-util
```

2. Open http://localhost:3000
3. Sign in by clicking the button
4. Copy your token to your clipboard
