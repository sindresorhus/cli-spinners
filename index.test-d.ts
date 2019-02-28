import {expectType} from 'tsd-check';
import cliSpinners, {Spinner} from '.';

expectType<Spinner>(cliSpinners.dots);
