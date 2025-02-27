
import { TypeBoo } from './minigames/typeBoo.js';

const config = {
    type: Phaser.AUTO,
    parent: 'game-container',
    width: 800,
    height: 520,
    // All scenes
    scene: [
        TypeBoo
    ],
};

const game = new Phaser.Game(config);

const canvas = game.canvas;
const ctx = canvas.getContext('2d', { willReadFrequently: true });