#!/usr/bin/env node
import { getGame } from '../src/games/brain-even.js';
import startGame from '../src/index.js';

startGame(getGame());
