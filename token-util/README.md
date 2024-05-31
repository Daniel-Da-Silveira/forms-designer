# Token utility

A tool to get a token for API testing. This would normally be handled by the implicit flows, but we don't have time to get this organised ahead of the external testers.

## Installation

1. Install NodeJS v20
2. Download the app

```
git clone -b token-util git@github.com:DEFRA/forms-designer.git
```

2. Install dependencies

```sh
cd forms-designer
nvm use
npm install --workspace token-util
```

3. Create the text file `token-util/.env` with content:

```
AZURE_CLIENT_ID="value-here"
AZURE_CLIENT_SECRET="value-here"
OIDC_WELL_KNOWN_CONFIGURATION_URL="value-here"
```

## Usage

1. Build and run the app

```sh
nvm use
npm run build --workspace token-util
npm run start --workspace token-util
```

2. Open http://localhost:3000
3. Sign in by clicking the button
4. Copy your token to your clipboard
5. Call the forms-manager API with the new token
