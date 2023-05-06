import { Webhook } from '../src';
const webhook = new Webhook(
  'https://discord.com/api/webhooks/1104247982347534396/pQ0uBl2HmzOeHuG7j-MvfcpKYpZ0zUqajV8o1Yrnx45cFJ0qaNlnb7nd42XsgOLvtP8r',
  { username: 'Test', avatar_url: 'https://techcrunch.com/wp-content/uploads/2010/10/pirate.jpg' },
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

webhook.update({
  name: 'BALLS',
  avatar: 'https://shiz.tk/img/favicon.png',
});

webhook.fetch().then((res) => console.log(res));
