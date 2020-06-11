#!/usr/bin/env node
import startGame from '../src/index.js';
import { gameDescription, generateRound } from '../src/games/brain-progression.js';

startGame(gameDescription, generateRound);
