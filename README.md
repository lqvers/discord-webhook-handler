# [Hookflow](lqvers.github.io/discord-webhook-handler/)

An easy-to-use and lightweight package for sending, updating, and deleting Discord webhooks.

## Quick Start

```ts
import { Webhook } from 'hookflow';
const webhook = new Webhook('<url>');

try {
  // Send a message to the webhook
  await webhook.send({
    content: 'Hello, world!',
  });

  // Update the webhook's name and avatar
  await webhook.update({
    name: 'Hookcord',
    avatar: 'https://example.com/image.png',
  });

  // Fetch information about the webhook
  const webhookInfo = await webhook.fetch();
  console.log(webhookInfo.name); // Outputs: "Hookcord"

  // Delete the webhook
  await webhook.delete();
} catch (error) {
  console.error(error);
}
```

### Methods
| Method | Description | Returns |
| --------------- | --------------- | --------------- |
| send  | Send's provided content to webhook | `<Boolean>`  |
| update  | Update's webhooks info | `<Boolean>`  |
| fetch  | Retrieves information about webhook  | `<WebhookInfo>`  |
| delete  | Delete's webhook  | `<Boolean>`  |

```ts
new Webhook("<url>", {
    username: "Example Webhook",
    avatar_url: "example.com/image.png"
})

webhook.send({
  content: "Example Content",
  tts: false,
  embeds: [
    {
      title: "Example Embed",
      description: "This is an example of an embed.",
      url: "https://discordapp.com",
      color: 15258703,
      timestamp: "2022-05-05T12:00:00.000Z",
      footer: {
        text: "Example Footer",
        icon_url: "https://example.com/footer.png"
      },
      thumbnail: {
        url: "https://example.com/thumbnail.png"
      },
      image: {
        url: "https://example.com/image.png"
      },
      author: {
        name: "Example Author",
        url: "https://example.com/author",
        icon_url: "https://example.com/author.png"
      },
      fields: [
        {
          name: "Example Field 1",
          value: "This is an example field.",
          inline: true
        }
      ]
    }
  ]
});

webhook.update({
  name: 'Webhook Example',
  avatar: 'https://example.com/image.jpg',
});

webhook.fetch()

webhook.delete()
```
