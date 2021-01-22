# Messenger

## Vercel hosted

Will add soon.

## Install deps

```
yarn
```

## Run project (development)

```
yarn start
```


## Build project (for production)

```
yarn build
```

## Run tests

```
yarn test
```

## Project email composer improvements

- extend tests, add more tests jest, rtl;
- add airbnb linter, prettier;
- instead of png, use svg for the icons;
- finalize docker files;

## Do not forget to add .env file, and if you are going to use our `messenger-backend' then you need to add following into env file:

```
REACT_APP_BACKEND_URL=ws://localhost:5000
```