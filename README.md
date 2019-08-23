# KAI camera

### required accounts:

1. github.com (gitlab)
2. netlify.com
3. dropbox

##github

1.  upload 'kai-camera' repo to your github account.
 2. in project's root folder create ".env" file, with 2 variables in it. your .env file might look like this:
```
DBX_ACCESS_TOKEN=
NETLIFY_BUILD_HOOK_URL=
```

##netlify

1. click "new site from git"
2. select your git account and 'kai-camera' repo in it
3. wait for deploy
4. go Overview > Site settings > Build & deploy, and there go:
  1. Build hooks: press 'Add build hook'. choose [build hook name], copy it to clipboard and press 'Save'
	2. Environment > Environment variables: 'Edit variables'. Paste [build hook name] as a 'key', return to "Build hooks", copy hook url and paste as a 'value'

##dropbox
1. go to https://www.dropbox.com/developers
2. click "App Console" button (top left corner)
3. click "Create App" button
  1. Choose an API: select 'Dropbox API'
  2. Choose the type of access you need: select 'App folder'
  3. Name your app: type your app name
5. click 'Create app' button (bottom right area)
6. Find string 'Generated access token' and click 'generate'.

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
