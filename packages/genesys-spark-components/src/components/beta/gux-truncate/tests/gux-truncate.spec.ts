jest.mock('../../../../utils/decorator/on-resize', () => ({
  __esModule: true,
  OnResize: jest.fn()
}));

import MutationObserver from 'mutation-observer';
import { newSpecPage } from '@stencil/core/testing';
import { GuxTruncate } from '../gux-truncate';

const components = [GuxTruncate];
const language = 'en';

describe('gux-truncate-beta', () => {
  beforeEach(async () => {
    global.MutationObserver = MutationObserver;
  });
  describe('#render', () => {
    [
      '<gux-truncate-beta>Some text to truncate</gux-truncate-beta>',
      '<gux-truncate-beta><span>Some text to truncate in a span</span></gux-truncate-beta>',
      '<gux-truncate-beta><div>Div <span>with a span</span> inside</div></gux-truncate-beta>',
      '<gux-truncate-beta>This is a long text that should be truncated after three lines of wrapped text</gux-truncate-beta>'
    ].forEach((html, index) => {
      it(`should render component as expected (${index + 1})`, async () => {
        const page = await newSpecPage({ components, html, language });

        expect(page.root).toMatchSnapshot();
      });
    });
  });
});
