import { Component, Element, Prop, h, JSX } from '@stencil/core';

import { trackComponent } from '../../../usage-tracking';

@Component({
  styleUrl: 'gux-page-loading-spinner.less',
  tag: 'gux-page-loading-spinner'
})
export class GuxPageLoadingSpinner {
  @Element()
  private root: HTMLElement;

  /**
   * Required localized text to provide screen reader accessible label for the component
   */
  @Prop()
  screenreaderText: string = '';

  componentWillLoad(): void {
    trackComponent(this.root);
  }

  componentDidLoad(): void {
    if (!this.screenreaderText) {
      throw new Error(
        '[gux-page-loading-spinner] No screenreader-text provided. Provide a localized screenreader-text property for the component.'
      );
    }
  }

  render(): JSX.Element {
    return (
      <gux-radial-loading
        screenreaderText={this.screenreaderText}
        context="full-page"
      ></gux-radial-loading>
    );
  }
}
