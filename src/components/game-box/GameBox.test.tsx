import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GameBox } from './GameBox';
import React from 'react';
import { TestElement } from '../../enums/TestElement';
import { gameConfig } from '../../config/game-config';

afterEach(cleanup);

describe('[GAME] GameBox', () => {
  it('SHOULD Render GameBox with width maxHeight and maxWidth WHEN browsers viewport width and height is 1000px', () => {
    window.innerHeight = 1000;
    window.innerWidth = 1000;
    window.dispatchEvent(new Event('resize'));
    const { getByTestId } = render(
      <GameBox>
        {null}
      </GameBox>
    );
    const gameBoxElement = getByTestId(TestElement.GAME_BOX);
    expect(gameBoxElement).toHaveStyle({
      maxHeight: `${gameConfig.container.maxHeight}px`,
      maxWidth: `${gameConfig.container.maxWidth}px`,
    })
  });

  it('SHOULD Render GameBox with width 300px WHEN browsers viewport width 300px and height remains 1000px', () => {
    window.innerHeight = 1000;
    window.innerWidth = 300;
    window.dispatchEvent(new Event('resize'));
    const { getByTestId } = render(
      <GameBox>
        {null}
      </GameBox>
    );
    const gameBoxElement = getByTestId(TestElement.GAME_BOX);
    expect(gameBoxElement).toHaveStyle({
      maxHeight: `${((300 * 16)/9).toFixed(1)}px`,
      maxWidth: `${300}px`,
    })
  });

  it('SHOULD Render GameBox with height 600px WHEN browsers viewport width 1000px and height is 600px', () => {
    window.innerHeight = 600;
    window.innerWidth = 1000;
    window.dispatchEvent(new Event('resize'));
    const { getByTestId } = render(
      <GameBox>
        {null}
      </GameBox>
    );
    const gameBoxElement = getByTestId(TestElement.GAME_BOX);
    expect(gameBoxElement).toHaveStyle({
      maxHeight: `${600}px`,
      maxWidth: `${((600 * 9)/16).toFixed(1)}px`,
    })
  });
});
