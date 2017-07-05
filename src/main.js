import '../styles/reset.css';

// pre-load required dependencies
import 'pixi';
import 'p2';

import Phaser from 'phaser';
import GameState from './states/game-state';


class Game extends Phaser.Game {

    constructor() {
        super(800, 600, Phaser.AUTO, '', null);
        // todo - can we split up GameState into create/update etc.?
        this.state.add('GameState', GameState, false);
        this.state.start('GameState');
    }
}


new Game();
