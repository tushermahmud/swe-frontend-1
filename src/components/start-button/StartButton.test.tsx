import { cleanup, fireEvent, getByTestId, render,screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StartButton } from './StartButton';
import React from 'react';
import { TestElement } from '../../enums/TestElement';
import { gameConfig } from '../../config/game-config';

afterEach(cleanup);

describe('[GAME] StartButton', () => {
  it('SHOULD Render StartButton with proper config', () => {
    const { getByTestId } = render(<StartButton />);
    const buttonElement = getByTestId(TestElement.START_BUTTON);
    expect(buttonElement).toHaveTextContent(gameConfig.startButton.buttonText);
  });

  it('SHOULD Render StartButton with click event', () => {
    const { getByTestId } = render(<StartButton />);
    const alertMock = jest.spyOn(window,'alert').mockImplementation(); 
    fireEvent.click(getByTestId(TestElement.START_BUTTON));
    expect(alertMock).toBeCalledTimes(1);
  });
});
