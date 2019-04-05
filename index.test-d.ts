import {expectType} from 'tsd';
import cliSpinners = require('.');
import {Spinner} from '.';

expectType<Spinner>(cliSpinners.dots);
