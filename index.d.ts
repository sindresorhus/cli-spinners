declare namespace cliSpinners {
	type SpinnerName =
		| "dots"
		| "dots2"
		| "dots3"
		| "dots4"
		| "dots5"
		| "dots6"
		| "dots7"
		| "dots8"
		| "dots9"
		| "dots10"
		| "dots11"
		| "dots12"
		| "dots8Bit"
		| "line"
		| "line2"
		| "pipe"
		| "simpleDots"
		| "simpleDotsScrolling"
		| "star"
		| "star2"
		| "flip"
		| "hamburger"
		| "growVertical"
		| "growHorizontal"
		| "balloon"
		| "balloon2"
		| "noise"
		| "bounce"
		| "boxBounce"
		| "boxBounce2"
		| "triangle"
		| "arc"
		| "circle"
		| "squareCorners"
		| "circleQuarters"
		| "circleHalves"
		| "squish"
		| "toggle"
		| "toggle2"
		| "toggle3"
		| "toggle4"
		| "toggle5"
		| "toggle6"
		| "toggle7"
		| "toggle8"
		| "toggle9"
		| "toggle10"
		| "toggle11"
		| "toggle12"
		| "toggle13"
		| "arrow"
		| "arrow2"
		| "arrow3"
		| "bouncingBar"
		| "bouncingBall"
		| "smiley"
		| "monkey"
		| "hearts"
		| "clock"
		| "earth"
		| "moon"
		| "runner"
		| "pong"
		| "shark"
		| "dqpb"
		| "weather"
		| "christmas"
		| "grenade"
		| "point"
		| "layer"
		| "betaWave";

	interface Spinner {
		/**
		Recommended interval.
		*/
		readonly interval: number;

		/**
		A list of frames to show for the spinner.
		*/
		readonly frames: string[];
	}
}

/**
60+ spinners for use in the terminal.

@example
```
import cliSpinners = require('cli-spinners');

console.log(cliSpinners.dots);
// {
//   interval: 80,
//   frames: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
// }
```
*/
declare const cliSpinners: {
	readonly [spinnerName in cliSpinners.SpinnerName]: cliSpinners.Spinner;
} & {
	/**
	 * Returns a random spinner each time it is called.
	 */
	readonly random: cliSpinners.Spinner;
	// TODO: Remove this for the next major release
	default: typeof cliSpinners;
};

export = cliSpinners;
