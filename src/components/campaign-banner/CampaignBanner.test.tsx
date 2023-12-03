import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CampaignBanner } from './CampaignBanner';
import React from 'react';
import { TestElement } from '../../enums/TestElement';
import { gameConfig } from '../../config/game-config';
import { debug } from 'console';

afterEach(cleanup);

describe('[GAME] CampaignBanner', () => {
  it('SHOULD Render CampaignBanner with all the CSS properties from config file', () => {
    const { getByTestId } = render(<CampaignBanner />);
    const bannerElement = getByTestId(TestElement.CAMPAIGN_BANNER);
    expect(bannerElement).toHaveStyle({
      top: gameConfig.campaignBanner.offsetTop,
      borderRadius: `${gameConfig.campaignBanner.borderRadius}px`,
      width: gameConfig.campaignBanner.width,
      padding: `${gameConfig.campaignBanner.padding}px`,
      backgroundColor: gameConfig.campaignBanner.background,
      color: gameConfig.campaignBanner.textColor,
    });
  });

  it('SHOULD Render CampaignBanner and maintain responsiveness WHEN viewport width is 250 px', () => {
    window.innerWidth = 250;
    window.dispatchEvent(new Event('resize'));
    const { getByTestId } = render(<CampaignBanner />);
    const bannerElement = getByTestId(TestElement.CAMPAIGN_BANNER);
    expect(bannerElement).toHaveStyle({
      width: '90%',
    });
  });

  it('SHOULD Render CampaignBanner and maintain responsiveness WHEN when viewport height is 600 px', () => {
    window.innerHeight = 600;
    window.dispatchEvent(new Event('resize'));
    const { getByTestId } = render(<CampaignBanner />);
    const bannerElement = getByTestId(TestElement.CAMPAIGN_BANNER);
    expect(bannerElement).toHaveStyle({
      width: '90%',
      top: '10%',
    });
  });
});
