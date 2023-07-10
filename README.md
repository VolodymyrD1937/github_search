# Getting Started

The application allows you to search for repositories on GitHub and add them to your favorites list, where you can rate them or remove them from the list

## Available Scripts

In the project directory, you can run:

### `npm install`

Run before the first start of `npm run dev`.

Also, before starting the project, you need to generate a personal access token and insert it into the `.env` file.

1. In the upper-right corner of any page on the GitHub, click your profile photo, then click Settings.

2. In the left sidebar, click Developer settings.

3. In the left sidebar, under Personal access tokens, click Fine-grained tokens.

4. Click Generate new token.

5. Under Token name, enter a name for the token.

6. Under Expiration, select an expiration for the token.

7. Click Generate token.

More info: [Managing your personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

You will see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run lint`

Run `npm run lint` to check for linting errors.
