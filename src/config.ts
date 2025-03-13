import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'vornexx',
  subtitle: 'blog',
  lang: 'en',
  themeHue: 250,
  banner: {
    enable: false,
    src: 'https://vnx.pages.dev/avatar.webp',
  },
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/vornexx',
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'https://avatars.githubusercontent.com/u/79860992?s=4096',
  name: 'vornexx',
  bio: 'i like tech, some games, and well thats all',
  links: [
    {
      name: 'Discord',
      icon: 'fa6-brands:discord',
      url: 'https://discord.com/users/1149438819834269856',
    },
    {
      name: 'Hashnode',
      icon: 'fa6-brands:hashnode',
      url: 'https://vornexx.is-a.dev',
    },
    {
      name: 'Spotify',
      icon: 'fa6-brands:spotify',
      url: 'https://spotify.vornexx.is-a.dev',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/vornexx',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
