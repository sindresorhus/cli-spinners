export type SpinnerName = keyof typeof import('./spinners.json');

export type Spinner = {
	/**
	The recommended interval.
	*/
	readonly interval: number;

	/**
	A list of frames to show for the spinner.
	*/
	readonly frames: string[];
};

/**
70+ spinners for use in the terminal.

@example
```
import cliSpinners from 'cli-spinners';

console.log(cliSpinners.dots);
// {
// 	interval: 80,
// 	frames: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
// }
```
*/
declare const cliSpinners: {
	readonly [spinnerName in SpinnerName]: Spinner;
};

export default cliSpinners;

/**
Get a random spinner.

@example
```
import {randomSpinner} from 'cli-spinners';

console.log(randomSpinner());
// {
// 	interval: 80,
// 	frames: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
// }
```
*/
export function randomSpinner(): Spinner;
