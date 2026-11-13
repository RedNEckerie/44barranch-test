# Ranch photos

The site shows a simple drawing until a real photo is in this folder.

The home page banner is already here: `44bar-hero.jpg`. That picture is the Hereford bull with the ranch name and the 44-over-a-bar brand. The home page uses it full width. Because the name is already in the picture, the page does not print a second big title on top of it.

## Replace the banner

Upload a new file with the exact name `44bar-hero.jpg` to replace the current one. A wide picture (about 16:9) works best. Keep it near 1600 pixels wide or less so the site stays quick.

## Add the other photos

1. On GitHub, open this folder: `src/assets/photos`.
2. Click **Add file**, then **Upload files**.
3. Name the file exactly as in the list below. The name is how the site knows where it goes.
4. Commit it to `main` (or merge it there). After the build finishes, your photo replaces the drawing.

| File name | Where it shows |
| --- | --- |
| `44bar-hero.jpg` | Banner at the top of the home page |
| `chickens.jpg` | Chickens section |
| `turkeys.jpg` | Turkeys section |
| `cattle.jpg` | Cattle section |
| `dogs.jpg` | Ranch dogs section |
| `about.jpg` | About page |

`.jpeg`, `.png`, and `.webp` work too, if the first part of the name matches (`chickens.png`). Use lowercase.

Phone pictures are fine. Around 1600 pixels on the long side is plenty.

## Blog pictures

Those do not go in this folder. Put a blog picture in `public/photos/` and point the post at it. See `EDITING.md` in the project root.
