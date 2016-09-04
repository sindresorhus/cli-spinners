# cli-spinners [![Build Status](https://travis-ci.org/sindresorhus/cli-spinners.svg?branch=master)](https://travis-ci.org/sindresorhus/cli-spinners)

> 50+ spinners for use in the terminal

![](screenshot.gif)

The list of spinners is just a [JSON file](spinners.json) and can be used wherever.

You probably want to use one of these spinners through the [`ora`](https://github.com/sindresorhus/ora) module.


## Install

```
$ npm install --save cli-spinners
```


## Usage

```js
const cliSpinners = require('cli-spinners');

console.log(cliSpinners.dots);
/*
{
	interval: 80,
	frames: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
}
*/
```


## Preview

The header gif is outdated. Click below to see a preview of all the spinners.

[![asciicast](https://asciinema.org/a/9mlcoussb137m32swwuqtb2p1.png)](https://asciinema.org/a/9mlcoussb137m32swwuqtb2p1?size=big)


## API

Each spinner comes with a recommended `interval` and an array of `frames`.

[See the spinners.](spinners.json)


## Related

- [ora](https://github.com/sindresorhus/ora) - Elegant terminal spinner


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
