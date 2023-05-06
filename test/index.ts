import { Webhook } from '../src';
const webhook = new Webhook(
  'null'
);

webhook.send({
  embeds: [
    {
      title: 'hookflow',
      description:
        'This embed + attached components were sent by the [hookflow](https://npmjs.com/package/hookflow) NPM package!',
      color: null,
    },
  ],
});