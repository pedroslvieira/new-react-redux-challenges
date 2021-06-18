Let's create our first React component!

Make sure you are in the right folder and you download the necessary NPM packages before starting!

```bash
cd ~/code/<github_nickname>/react-redux-challenges
cd 01-React/02-React-Basics/01-My-first-component
yarn install
```

## 1 - Functional Component

The goal of this first challenge is to implement a simple `Article` **functional** component.

The following instance of `Article`:

```js
<Article title="My fancy new product" body="Test it now!" />;
```
Should produce the following HTML:

```html
<div class="article">
  <h2>My fancy new product</h2>
  <p>Test it now!</p>
</div>
```

Code your solution in `lib/01_article.jsx` and test it with `yarn test`!

## Eslint Update. (2021-04-19)
Some time ago eslint has added extra questions on the setup of this package to tackle more specific cases. To have this working correctly on your computer, you need to have the `SublimeLinter` and `ESLint` packages installed in your code editor.

For Sublime:
You can check by opening the command palette on sublime by typing (`cmd` + `shift` + `p`).
As soon as you see the search bar pop up, you can then type in `Package Control: List Packages`. This will open up a list of all the packages that you have currently installed. Arrow through to make sure that you have the two packages listed above. If you don't have them, you can close that menu by pressing `esc`, and once again open the command palette (`cmd` + `shift` + `p`). This time you are going to type `Package Control: Install Package` and press enter. After that, type in the name of one of the packages and click it. Repeat the process for the second one and then make sure you restart your sublime (`cmd` + `q`).

For VS Code:
Click on the Extension Marketplace. Search for the two packages listed above to see if you’ve already installed them. If not, click the button to install. Repeat for both packages. Make sure to restart (`cmd` + `q`) after both have been installed.

Now we are ready to initialize `eslint`.


Go to your terminal and type
```bash
eslint --init
```
You will notice that the questions prompted by `eslint` are now different than the ones shown in the lecture. Given the fact that at this point, we are just doing a warm up/refresher on JavaScript, we will answer them in the following way:
1. ? How would you like to use ESLint? (Use arrow keys)
- ❯ To check syntax, find problems, and enforce code style
2. ? What type of modules does your project use? (Use arrow keys)
- ❯ CommonJS (require/exports)  -- Don’t select react because we are not in react yet
3. ? Which framework does your project use? (Use arrow keys)
- ❯ None of these -- Again, not react because we are not in react yet
4. ? Where does your code run? (Press <space> to select, <a> to toggle all, <i> to invert selection)
- ❯ Node -- We will jump to the browser in the next challenge, but for now we are going to select the `node` option.
5. ? How would you like to define a style for your project? (Use arrow keys)
-  ❯ Use a popular style guide
6. ? Which style guide do you want to follow? (Use arrow keys)
- ❯ Airbnb (https://github.com/airbnb/javascript)
7. ? What format do you want your config file to be in? (Use arrow keys)
- ❯ JavaScript
8. ? Would you like to install them now with npm? (Y/n)
- ❯ Type the `n` key. (You can press `n` safely since we already have them in the `package.json` and `yarn.lock`.)

And finally if everything went right, you should have gotten this message.
```bash
Successfully created .eslintrc.js file in /Users/<user_name>/code/<your_github_user_name>/react-redux-challenges/01-React/01-Tooling/02-Manipulating-Strings
```





