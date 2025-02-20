import process from 'node:process';
import logUpdate from 'log-update';
import cliSpinners from './index.js';

// 獲取命令行參數中指定的 spinner 名稱，默認使用 'dots2'
const spinnerName = process.argv[2] || 'dots2';
const spinner = cliSpinners[spinnerName];

if (!spinner) {
	console.error('Spinner not found');
	process.exit(1);
}

let index = 0;

// 顯示動畫
setInterval(() => {
	const {frames} = spinner;
	logUpdate(frames[index = ++index % frames.length] + ' Unicorns');
}, spinner.interval);

// 使用方法: node example.js nameOfSpinner

