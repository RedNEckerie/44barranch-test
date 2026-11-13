# How to edit the 44 Bar Ranch site

You can change the words and photos by editing files on GitHub. When the change is merged into the `main` branch, the live site updates on its own.

## Change the words

Open the file, click the pencil, edit, and commit. Use **Commit directly to the `main` branch** if you want it to go live. A pull request is fine too; it goes live when you merge it.

- Home page (tagline, intro, and the animal sections): `src/pages/index.astro`
- About page: `src/pages/about.astro`
- The name in the top bar and the links: `src/components/Header.astro`
- The bottom of every page, including the X link: `src/components/Footer.astro`
- The site name and the short description used by Google: `src/consts.ts`
- Blog posts: `src/content/blog/`

On the About page, lines in square brackets are reminders, like `[Add how you got started.]`. Replace the whole line, brackets included, with your own sentence. Delete the highlighted note at the top once you are done.

The home page banner already says "44 Bar Ranch", so that page does not also show a big title over the picture. The tagline under the picture is the line you can rewrite.

## Add photos

Read `src/assets/photos/README.md`. Short version: upload a picture into `src/assets/photos` using one of these names.

- `44bar-hero.jpg` — top of the home page (already filled in)
- `chickens.jpg`
- `turkeys.jpg`
- `cattle.jpg`
- `dogs.jpg`
- `about.jpg`

Until you add one, that spot shows a drawing and the file name to use.

## Write a blog post

1. Open `src/content/blog/welcome.md` to see the shape of a post.
2. Create a new file in that same folder. The name becomes the web address. `gate.md` shows up at `/blog/gate/`.
3. Start the file like this, then write underneath:

```
---
title: "Your title"
description: "One sentence about the post."
pubDate: "Nov 13 2026"
---
```

To put a picture at the top of a post, upload it to `public/photos/` (for example `public/photos/gate.jpg`) and add this line with the other details at the top:

```
heroImage: "/photos/gate.jpg"
```

## Leave these alone

Do not edit `dist/` or `node_modules/`. Those are built for you. You do not need to install anything to change words or photos on GitHub.
