# KAI camera

### required accounts:

1. github.com (gitlab)
2. netlify.com
3. dropbox

##github

1.  upload 'kai-camera' repo to your github account.
2.  in project's root folder create ".env" file, with 2 variables in it. your .env file might look like this:

```
DBX_ACCESS_TOKEN=
NETLIFY_BUILD_HOOK_URL=
```

##netlify

1. click "new site from git"
2. select your git account with 'kai-camera' repo in it, wait for deploy
3. go Overview > Site settings > Build & deploy, and there go:
  1. Build hooks: press 'Add build hook'. type NETLIFY_BUILD_HOOK_URL and press 'Save'. copy build hook URL to clipboard.
   2. Environment > Environment variables: click 'Edit variables'. Type NETLIFY_BUILD_HOOK_URL as a 'key' and paste value from clipboard as a variable's 'value'

##dropbox

1. go to https://www.dropbox.com/developers
2. click "App Console" button (top left corner)
3. click "Create App" button
4. Choose an API: select 'Dropbox API'
5. Choose the type of access you need: select 'App folder'
6. Name your app: type your app name
7. click 'Create app' button (bottom right area)
8. Find string 'Generated access token' and click 'generate'.
9.

## How to build and run project:

```bash
yarn install
yarn build
```

## How to run project locally:

```bash
yarn install
yarn develop
```
