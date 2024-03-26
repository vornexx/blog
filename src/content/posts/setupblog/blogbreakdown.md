---
title: Fuwari x FrontmatterCMS
published: 2024-03-26T04:00:00.000Z
description: A short, simple breakdown of how they work and the setup process.
image: https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/c17819a4-a120-4ed6-d70a-3a1a6aec9f00/original=true/202897.jpeg
tags:
   - Markdown
   - Setup
   - Guide
category: Setup
draft: false
---

## What is Fuwari?

Fuwari is a blog template that is built with Astro. For the things that are not mentioned in this guide, you may find the answers in the [Astro Docs](https://docs.astro.build/).

#### The features Fuwari offers :
- Built with Astro and Tailwind CSS
- Smooth animations and page transitions built with Swup
- Light / dark mode
- Customizable theme colors & banner
- Responsive design
- Search with Pagefind
- Tags
- Categories

### How do I use Fuwari?

1. [Generate a new repository](https://github.com/saicaca/fuwari/generate) from this template or fork this repository.
2. To edit your blog locally, clone your repository, run `pnpm install` AND `pnpm add sharp` to install dependencies.  
   - Install [pnpm](https://pnpm.io) `npm install -g pnpm` if you haven't.
3. Edit the config file `src/config.ts` to customize your blog.
4. Run `pnpm new-post <filename>` to create a new post and edit it in `src/content/posts/`.
5. Deploy your blog to Vercel, Netlify, GitHub Pages, etc. following [the guides](https://docs.astro.build/en/guides/deploy/).

#### Deployment settings :
**Framework : `Astro`**
**Build command : `npm run build`**
**Build output directory: `dist`**

### What is the Fuwari Frontmatter of the posts?

```yaml
---
title: My First Blog Post
published: 2023-09-09 (YEAR-MONTH-DAY)
description: This is the first post of my new Astro blog.
image: /images/cover.jpg (can also be a direct link to an image)
tags: [Foo, Bar]
category: Front-end
draft: false
---
```

### What are the terminal commands to run the project, install dependencies etc.?

All commands are run from the root of the project, from a terminal:

| Command                             | Action                                           |
|:------------------------------------|:-------------------------------------------------|
| `pnpm install` AND `pnpm add sharp` | Installs dependencies                            |
| `pnpm dev`                          | Starts local dev server at `localhost:4321`      |
| `pnpm build`                        | Build your production site to `./dist/`          |
| `pnpm preview`                      | Preview your build locally, before deploying     |
| `pnpm new-post <filename>`          | Create a new post                                |
| `pnpm astro ...`                    | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro --help`                 | Get help using the Astro CLI                     |

## What is FrontMatterCMS?

Well, [FrontmatterCMS](https://frontmatter.codes/) is the CMS that runs within Visual Studio Code, GitPod, and many more. It grants control over your static generator's content by bringing in the CMS features from Front Matter.

### How did I configure mine and how do I use it?

> Download the Extension from the VS Code store. (assuming you use VS Code) then,
> Configure it to your liking and enable ` Writing Settings`.

