This folder contains a few exercises about [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String). ES6 brings a lot of nice features to this class such as [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals). [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) are also augmented with Ruby-like functions: [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`join`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join), [`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).

Make sure you are in the right folder and you downloaded the necessary NPM packages before starting!

```bash
cd ~/code/<github_nickname>/react-redux-challenges
cd 01-React/01-Tooling/02-Manipulating-Strings
yarn install
```

## 1 - Dash Insertion

Let's start with a simple exercise. The goal is to implement an `insertDash(word)` function which takes a `String` as a parameter (the `word`) and returns a new `String` containing dashes between two consonants.

Examples:

```js
insertDash("hello"); // => "hel-lo"
insertDash("Le Wagon"); // => "Le Wagon"
insertDash("Internationalization"); // => "In-ter-nationalization"
```

Your job is to open the `lib/01_dash_insertion.js` file and implement the method. To test it, run the following command:

```bash
yarn test
```

It will run both [`eslint`](https://eslint.org/) (for style) and [`jest`](https://facebook.github.io/jest/) (for testing). Obviously, you want to have **no style error** and **pass all the tests**!

## 2 - Counting words

For this second exercise, we want you to write an `occurrences(text, word)` function which takes two `String` as parameters: a long text, and a word. This method should return a `Number`, being the number of occurrences of the `word` in the given `text`. This search should be **case insensitive**.

Examples:

```js
occurrences("", "hello"); // => 0
occurrences("Lorem ipsum dolor sit amet, consectetur adipisicing elit", "lorem"); // => 1
occurrences("a fat cat sat on a mat and ate a fat rat", "at"); // => 0
occurrences("a fat cat sat on a mat and ate a fat rat", "cat"); // => 1
occurrences("a fat cat sat on a mat and ate a fat rat", "fat"); // => 2
```




## Eslint Update. (2021-04-19)
Some time ago eslint has added extra questions on the setup of this package to tackle more specific cases. To have this working correctly on your computer, you need to have the `SublimeLinter` and `ESLint` packages installed in your code editor.

For Sublime:
You can check by opening the command palette on sublime by typing (`cmnd` + `shift` + `p`).
As soon as you see the search bar pop up, you can then type in `Package Control: List Packages`. This will open up a list of all the packages that you have currently installed. Arrow through to make sure that you have the two packages listed above. If you don't have them, you can close that menu by pressing `esc`, and once again open the command palette (`cmnd` + `shift` + `p`). This time you are going to type `Package Control: Install Package` and press enter. After that, type in the name of one of the packages and click it. Repeat the process for the second one and then make sure you restart your sublime (`cmnd` + `q`).

For VS Code:
Click on the Extension Marketplace. Search for the two packages listed above to see if you’ve already installed them. If not, click the button to install. Repeat for both packages. Make sure to restart (`cmnd` + `q`) after both have been installed.

Now we are ready to initialize `eslint`.


### Initalizing eslint.

Go to your terminal and type
```bash
eslint --init
```

You will realize that the questions prompted by eslint are now different than the ones showed in the lecture. Since by this point we are just doing a warmup/refreshner on JavaScript, we will answer them this way.

1. ? How would you like to use ESLint? (Use arrow keys)
- ❯ To check syntax, find problems, and enforce code style

2. ? What type of modules does your project use? (Use arrow keys)
- ❯ CommonJS (require/exports)  -- We are not in react yet 😉

3. ? Which framework does your project use? (Use arrow keys)
- ❯ None of these -- We are not in react yet 😉

4. ? Where does your code run? (Press <space> to select, <a> to toggle all, <i> to invert selection)
- ❯ Node -- We will jump to the browser in the next challenge, but for now we are going to select the `node` option.

5. ? How would you like to define a style for your project? (Use arrow keys)
- ❯ Use a popular style guide

6. ? Which style guide do you want to follow? (Use arrow keys)
- ❯ Airbnb (https://github.com/airbnb/javascript)

7. ? What format do you want your config file to be in? (Use arrow keys)
- ❯ JavaScript

8. ? Would you like to install them now with npm? (Y/n)
- ❯ Type the `n` key. (This happens since the eslint installer doesn't looks for this packages in the `yarn.lock` but in it's `npm` counter part). You can press `n` safely since we already have them.

And finally if everything went right, you should have gotten this message.
```bash
Successfully created .eslintrc.js file in /Users/<user_name>/code/<your_github_user_name>/react-redux-challenges/01-React/01-Tooling/02-Manipulating-Strings
```
