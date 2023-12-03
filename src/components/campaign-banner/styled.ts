import styled, { CSSObject } from 'styled-components';
import { gameConfig } from '../../config/game-config';

export const BannerStyled = styled.div(
  (): CSSObject => ({
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    top: gameConfig.campaignBanner.offsetTop,
    borderRadius: gameConfig.campaignBanner.borderRadius,
    width: window.innerWidth > 360 ? gameConfig.campaignBanner.width : '90%',
    padding: gameConfig.campaignBanner.padding,
    backgroundColor: gameConfig.campaignBanner.background,
    color: gameConfig.campaignBanner.textColor,
  }),
);
