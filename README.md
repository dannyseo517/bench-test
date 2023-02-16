# bench-test

## Environment

```
yarn@1.22.19
node@18.12.1
```

## Installation

```
yarn
```

## Running app

```
yarn
yarn start // go to localhost:9000
```

## Running Tests

```
yarn test
```

## Assumptions and other statements

1. normally, you wouldn't fetch all pages of the api, but since we need to get total amount and it's not in the api request, we need to fetch it all. Ideally, would be working with the API so it does return total amount and achieve lazy or paginated loading.
2. some of the components in the `ui/core` folder is very basic, could've used `MUI` or some other component library but wanted to write my own simple ones to showcase.
3. used custom webpack configuration because I like that it's more customizable and lightweight than CRA (since it has stuff we likely don't need for this assignment).
