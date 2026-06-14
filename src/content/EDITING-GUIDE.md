# How to edit the website content

All the words on the website live in **one file**:

```
src/content/siteContent.ts
```

Change the text in that file, save, and the matching part of the website
updates. You do **not** need to touch any other file to change wording, links,
projects, or experience.

---

## The 3 golden rules

When you edit, you are only ever changing the text **between quotation marks**.

1. **Keep the quotes.** Every piece of text sits inside `'single quotes'`.
   Change what's *inside* them, never delete the quotes themselves.

   ```
   title: 'Change THIS text only',
   ```

2. **Keep the comma at the end of the line.** Most lines end with a `,`.
   Leave it there.

3. **Don't rename the words before the colon** (`title:`, `label:`, `href:`,
   `description:`). Those are labels the website looks for. Only edit what comes
   after the colon, inside the quotes.

If you ever see an apostrophe inside your text (like *don't*), write it as
`don\'t` with a backslash, or just reword to avoid it.

---

## Common edits

### Change a piece of text
Find it in the file and type your new wording between the quotes.

### Change a link
Links look like this:

```
href: 'https://www.linkedin.com/in/your-profile',
```

Replace the address inside the quotes with the real one. For email links keep
the `mailto:` prefix:

```
href: 'mailto:you@email.com',
```

### Your email address
It appears in a few places (home hero, contact section, contact page). Search
the file for `@` and update each one to the real address.

### Add your hero photo
The home page has a photo slot next to the headline. To use your own photo:

1. Put your image file in the `public/` folder (for example `public/hero-photo.jpg`).
2. In `siteContent.ts`, find `image:` under `home.hero` and update the `src`:

   ```
   image: {
     src: '/hero-photo.jpg',
     alt: 'Natasha Gomes',
   },
   ```

A portrait-shaped photo (taller than wide, roughly 4:5) fits the space best.
Until you swap it, a placeholder (`public/hero-photo.svg`) is shown.

### Add your resume PDF
Save your resume as `public/resume.pdf`. The "Download Resume" buttons on the
home page and contact page already point to `/resume.pdf`, so it will work as
soon as the file is in place.

### Add or remove a project / experience role
Projects and roles are written as repeated blocks inside `[ ]` square brackets,
each block wrapped in `{ }` curly braces and separated by commas. To **add** one,
copy an existing `{ ... }` block, paste it right after, and edit the text. To
**remove** one, delete its whole `{ ... }` block (including the comma after it).
Keep at least one block.

---

## Previewing your changes

After saving, your changes go live automatically once they're committed and
pushed to the repository (the host rebuilds the site for you).

To check it looks right *before* publishing, ask a developer to run:

```
npm run dev
```

and open `http://localhost:3000`.

---

## If something breaks

If the site fails to build after an edit, it's almost always a missing quote or
comma. Undo your last change (or restore the file from the previous version) and
re-do the edit more carefully. The build will not publish a broken file, so the
live site stays safe.
