import styled, { CSSObject } from 'styled-components';
import { gameConfig } from '../../config/game-config';

export const ContainerStyled = styled.div(
  (): CSSObject => {
    const maxWidth = window.innerWidth<360 && window.innerHeight> 640? window.innerWidth : window.innerWidth>360 && window.innerHeight< 640? ((window.innerHeight * 9)/16).toFixed(1)  : gameConfig.container.maxWidth;
    const responsiveWidth = maxWidth.toString();
    const maxHeight = window.innerWidth<360 && window.innerHeight> 640? ((window.innerWidth * 16)/9).toFixed(1) : window.innerWidth>360 && window.innerHeight< 640? window.innerHeight : gameConfig.container.maxHeight;
    const responsiveHeight = maxHeight.toString()
    return ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    width: gameConfig.container.maxWidth,
    height: gameConfig.container.maxHeight,
    maxWidth: parseFloat(responsiveWidth), 
    maxHeight: parseFloat(responsiveHeight),
    backgroundColor: '#a5f3fc',
    borderRadius: gameConfig.container.borderRadius,
    boxShadow: '0 0 24px 8px #0284c7',
  })},
);
