import { html, fixture, expect } from '@open-wc/testing';

import '../view-privacy.js';

describe('ViewPrivacy', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture(html`
      <view-privacy></view-privacy>
    `);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(html`
      <view-privacy></view-privacy>
    `);
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture(html`
      <view-privacy title="attribute title"></view-privacy>
    `);

    expect(el.title).to.equal('attribute title');
  });

  it('shows initially the text "hey there Nr. 5!" and an "increment" button', async () => {
    const el = await fixture(html`
      <view-privacy></view-privacy>
    `);

    expect(el).shadowDom.to.equalSnapshot();
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <view-privacy></view-privacy>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
