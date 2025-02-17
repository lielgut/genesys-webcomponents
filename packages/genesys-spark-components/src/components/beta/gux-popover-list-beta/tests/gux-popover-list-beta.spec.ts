import { newSpecPage } from '@stencil/core/testing';
import * as floatingUi from '@floating-ui/dom';
import MutationObserver from 'mutation-observer';
import { GuxPopoverListBeta } from '../gux-popover-list-beta';

const components = [GuxPopoverListBeta];
const language = 'en';
const html = `
  <div>
    <div id="popover-target">
      Example Element
    </div>
    <gux-popover-list-beta id="popover-example" position="top" for="popover-target" is-open>
      <div>popover content</div>
    </gux-popover-list-beta>
  </div>`;

describe('gux-popover-list-beta', () => {
  beforeEach(async () => {
    global.MutationObserver = MutationObserver;
  });

  afterEach(async () => {
    jest.spyOn(floatingUi, 'autoUpdate').mockRestore();
  });

  describe('#render', () => {
    it('should render popover', async () => {
      jest.spyOn(floatingUi, 'autoUpdate').mockReturnValue(jest.fn());

      const page = await newSpecPage({ components, html, language });

      expect(page.rootInstance).toBeInstanceOf(GuxPopoverListBeta);
      expect(page.root).toMatchSnapshot();
    });
  });
  describe('#interaction', () => {
    it('should open and close', async () => {
      const cleanupSpy = jest.fn();
      const autoUpdateSpy = jest
        .spyOn(floatingUi, 'autoUpdate')
        .mockReturnValue(cleanupSpy);

      const page = await newSpecPage({ components, html, language });
      const element = page.root as HTMLGuxPopoverListBetaElement;
      const elementWrapper = element.shadowRoot.querySelector(
        '.gux-popover-wrapper'
      );
      expect(elementWrapper).not.toHaveClass('gux-hidden');
      expect(autoUpdateSpy).toBeCalledTimes(1);
      expect(cleanupSpy).not.toBeCalled();

      element.isOpen = false;
      await page.waitForChanges();
      expect(elementWrapper).toHaveClass('gux-hidden');
      expect(cleanupSpy).toBeCalledTimes(1);

      element.isOpen = true;
      await page.waitForChanges();
      expect(autoUpdateSpy).toBeCalledTimes(2);
      expect(cleanupSpy).toBeCalledTimes(1);
    });
  });
});
