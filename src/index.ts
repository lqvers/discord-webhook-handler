import fetch from 'node-fetch';

interface WebhookProperties {
  content?: string;
  username?: string;
  avatar_url?: string;
  embeds?: object[];
  tts?: true;
}

interface WebhookInfoData {
  name: string;
  avatar: string;
}

interface WebhookInfo {
  id: string;
  type: number;
  name: string | null;
  avatar: string | null;
  channel_id: string;
  guild_id: string | null;
  application_id: string | null;
  token: string;
}

export class Webhook {
  url: string;
  user?: {
    username: string;
    avatar_url: string;
  };

  constructor(url: string, user?: { username: string; avatar_url: string }) {
    this.url = url;
    if (user) {
      this.user = {
        username: user.username,
        avatar_url: user.avatar_url,
      };
    }
  }

  async send(properties: WebhookProperties) {
    try {
      if (this.user) {
        properties.username = this.user.username;
        properties.avatar_url = this.user.avatar_url;
      }

      const response = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(properties),
      });

      return true
    } catch (e) {
      throw new Error((e as string).toString());
      return false
    }
  }

  async delete() {
    const response = await fetch(this.url, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Failed to delete webhook: ${response.status} ${response.statusText}`);
    }

    return true
  }

  async update(properties: WebhookInfoData) {
    try {
      if (this.user) {
        if (!this.user.username && !this.user.avatar_url) {
          throw new Error('Must provide either username or avatar url to update webhook');
          return false
        }

        properties.name = this.user.username;
        properties.avatar = this.user.avatar_url;
      }

      const response = await fetch(this.url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(properties),
      });

      if (!response.ok) {
        return false
        throw new Error(`Failed to update webhook: ${response.status} ${response.statusText}`);
      }

      return true
    } catch (e) {
      throw new Error((e as string).toString());
    }
  }

  async fetch() {
    try {
      const response = await fetch(this.url);
      const data = (await response.json()) as WebhookInfo;

      return data
    } catch (e) {
      throw new Error((e as string).toString());
    }
  }
}
