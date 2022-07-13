import {expectType} from 'tsd';
import cliSpinners from './index.js';
import type {Spinner} from './index.js';

expectType<Spinner>(cliSpinners.dots);
