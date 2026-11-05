---
name: Juego de planos
description: Steven Correa's portfolio as an engineering drawing set, one sheet per project on a green cutting mat.
colors:
  mat: "#255a43"
  mat-deep: "#1d4a37"
  mat-line: "rgba(214, 236, 206, 0.12)"
  mat-line-5: "rgba(214, 236, 206, 0.24)"
  mat-ink: "#e3eee6"
  paper: "#f3f5f4"
  paper-2: "#e9edeb"
  ink: "#2b2f8f"
  ink-deep: "#1f2270"
  ink-2: "#4f539e"
  rule: "rgba(43, 47, 143, 0.32)"
  rule-2: "rgba(43, 47, 143, 0.16)"
  hi: "#ffe14d"
  hi-a: "rgba(255, 225, 77, 0.9)"
  red: "#c9262a"
  tape: "rgba(232, 222, 186, 0.8)"
typography:
  display:
    fontFamily: "Osifont, Archivo, system-ui, sans-serif"
    fontSize: "clamp(46px, 6.4vw, 96px)"
    fontWeight: 400
    lineHeight: 0.86
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Osifont, Archivo, system-ui, sans-serif"
    fontSize: "clamp(40px, 5vw, 72px)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "0.01em"
  title:
    fontFamily: "Osifont, Archivo, system-ui, sans-serif"
    fontSize: "clamp(22px, 2.1vw, 30px)"
    fontWeight: 400
    lineHeight: 1.1
  subtitle:
    fontFamily: "Osifont, Archivo, system-ui, sans-serif"
    fontSize: "clamp(18px, 1.7vw, 24px)"
    fontWeight: 400
    lineHeight: 1.15
  contact:
    fontFamily: "Osifont, Archivo, system-ui, sans-serif"
    fontSize: "clamp(22px, 3.1vw, 44px)"
    fontWeight: 400
    lineHeight: 1.05
  sheet-number:
    fontFamily: "Osifont, Archivo, system-ui, sans-serif"
    fontSize: "48px"
    fontWeight: 400
    lineHeight: 0.95
  sheet-number-compact:
    fontFamily: "Osifont, Archivo, system-ui, sans-serif"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: 0.95
  action:
    fontFamily: "Osifont, Archivo, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.1
  value-lg:
    fontFamily: "Osifont, Archivo, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.25
  index-name:
    fontFamily: "Osifont, Archivo, system-ui, sans-serif"
    fontSize: "27px"
    fontWeight: 400
    lineHeight: 1
  value:
    fontFamily: "Osifont, Archivo, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.25
  label:
    fontFamily: "Osifont, Archivo, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0.02em"
  lede:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "tnum"
  note:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "14.5px"
    fontWeight: 400
    lineHeight: 1.45
  code:
    fontFamily: "ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "13.5px"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  none: "0"
  bubble: "50%"
spacing:
  mat-gap: "26px"
  frame-inset: "20px"
  pad: "34px"
  title-block: "316px"
  column-gap: "40px"
  row-gap: "26px"
  cell: "8px 14px 10px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "11px 14px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.paper}"
  button-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "11px 14px"
    height: "44px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-done:
    backgroundColor: "{colors.hi}"
    textColor: "{colors.ink}"
  title-block-cta:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "12px 14px"
  title-block-cell:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "{spacing.cell}"
  detail-bubble:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.bubble}"
    size: "42px"
  detail-bubble-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  sheet-rail-item:
    textColor: "{colors.mat-ink}"
    rounded: "{rounded.none}"
    height: "34px"
    width: "40px"
  sheet-rail-item-current:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  lang-switch-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
---

# Design System: Juego de planos

## Overview

**Creative North Star: "The Drawing Set"**

The portfolio is a set of engineering drawings laid on a green self-healing cutting mat. Each project is a sheet: a bond-white page with an ISO 5457 frame, zone markers along its edges, a title block, and drawings dimensioned with measured numbers. Everything on the paper is drawn in one diazo blue-violet ink. Two marks may interrupt that ink: the checker's yellow highlighter, laid over figures that have been verified, and the redline red that strikes superseded values and draws revision clouds.

The density is that of a real drawing sheet: thick frame lines, thin cell rules, tables (parts lists, revision tables, schedules) set close and read by eye. Lettering is ISO 3098 technical lettering (Osifont) at a single weight. Running notes are in Archivo. Hierarchy comes from size, rule weight and position in the sheet, never from bold. Paper sits flat on the mat with a single physical shadow. Nothing floats, glows or rounds off, except the detail bubble, which is a circle because that is what a detail callout is.

Motion belongs to the instruments. A pen plotter draws each sheet's linework once when the sheet arrives. A highlighter swipes across the verified figure from left to right. Non-current sheets keep their drawings and title block at underlay strength; the sheet you arrive at inks to full. Under reduced motion all of it is static and fully inked.

**Key Characteristics:**
- Bond-white sheets on a green cutting mat with its printed grid; one sheet per subject, numbered 00 to 06.
- A single ink color for every line and letter on the paper; yellow and red are marks with fixed meanings, not accents.
- ISO 3098 lettering for titles, labels, title blocks and dimensions; Archivo for prose.
- Drawing-set apparatus as the component vocabulary: frames, zone markers, title blocks, detail bubbles, BOM balloons, revision tables, revision clouds, hatching.
- Square corners everywhere except the circular bubble and balloon.
- Motion limited to plotter draw-in and highlighter swipe, once each.

## Colors

One ink on one paper, on a green mat, with two marking colors that each carry a single meaning.

### Primary
- **Diazo Blue-Violet Ink** (`ink`): every line, letter, frame, rule, dimension and drawing on the sheet. Filled-ink cells (primary action, active language, pressed states) use it as a background with paper-colored lettering.
- **Pressed Ink** (`ink-deep`): hover state of ink-filled actions only (primary button, title block email cell).
- **Faded Ink** (`ink-2`): secondary lettering in the same ink at lower strength: cell labels, table headers, small notes under figures, zone markers, comment lines in code.

### Secondary
- **Checker's Highlighter** (`hi`, banded as `hi-a`): marks a figure as checked. Used on verified measurements in prose (as a band from 14% to 88% of the line height), on the matching dimension figure inside drawings, on the parts-list row and balloon a reader is pointing at, on overtime cells in the shift schedule, on the text selection, and on the copy-email button once the copy is confirmed.

### Tertiary
- **Redline Red** (`red`): superseded values (struck through with a 1px line), the "before" leg of a before/after dimension, and revision clouds with their delta symbol. Nothing else.

### Neutral
- **Bond White** (`paper`): sheet surface, and the fill behind drawn boxes so linework reads cleanly over crossing lines.
- **Grey Bond** (`paper-2`): scrollbar thumb on the mat; the paper's shaded side.
- **Cutting Mat Green** (`mat`): the page background under all sheets, carried by the hand-authored mat drawing with its 38px minor and 190px major grid in `mat-line` and `mat-line-5`.
- **Mat Shadow Green** (`mat-deep`): the mobile sheet rail bar and the scrollbar track.
- **Mat Lettering** (`mat-ink`): text placed on the mat rather than on paper: rail sheet numbers and the colophon. Rail borders use it at 35% opacity.
- **Cell Rule** (`rule`) and **Faint Rule** (`rule-2`): thin rules between table rows and inside title blocks; the faint rule draws hatching in table cells.
- **Drafting Tape** (`tape`): the translucent tape strips holding the cover sheet's corners, multiplied over paper and mat.

### Named Rules
**The One Ink Rule.** Everything on the paper is drawn in the ink or its faded strength. A new element gets the ink, not a new color.

**The Checked Mark Rule.** Yellow means "this has been checked or confirmed". It never decorates a heading, a label or an unverified claim.

**The Redline Rule.** Red means "superseded" or "revised". A value in red is always paired with the value that replaced it.

## Typography

**Display Font:** Osifont (ISO 3098 technical lettering), with Archivo, system-ui fallback
**Body Font:** Archivo variable (with system-ui, sans-serif)
**Label/Mono Font:** Osifont for labels; ui-monospace stack for code listings only

**Character:** Hand-lettering by stencil next to a plain grotesque. Osifont makes every title, dimension and label read as drafted; Archivo carries sentences without competing.

### Hierarchy
- **Display** (400, clamp(46px, 6.4vw, 96px), 0.86): the author's name on sheet 00 only. Balanced wrapping.
- **Headline** (400, clamp(40px, 5vw, 72px), 0.9): sheet titles, one per sheet.
- **Title** (400, clamp(22px, 2.1vw, 30px), 1.1): the role line on the cover. The sheet subtitle sits one step down (clamp(18px, 1.7vw, 24px), 1.15).
- **Index name** (400, 27px, 1): project names in the sheet index.
- **Value** (400, 15 to 20px): title block values, table identifiers, buttons and the email cell (20px). Sheet numbers in title blocks run 40 to 48px at 0.95.
- **Label** (400, 12 to 13px, 0.02em, uppercase in copy): title block field labels, table headers (12.5px), zone markers (13px), all in faded ink.
- **Lede** (Archivo 400, 17px, 1.5, max 62ch): the paragraph under each sheet title.
- **Body** (Archivo 400, 16px, 1.5, max 60ch): running text, with tabular numerals throughout.
- **Note** (Archivo 400, 13 to 14.5px, 1.35 to 1.45): numbered notes, table cells, captions, index one-liners (14px, max 50ch).
- **Drawing text** (Osifont 13px; small 12px in faded ink; large 16px): inside SVG drawings.

### Named Rules
**The Single Weight Rule.** Osifont is set at 400 only. Hierarchy comes from size, ink strength and rule weight; nothing on the sheet is bold except keywords in code listings.

**The Lettering Rule.** Anything a draftsman would letter (titles, labels, numbers, dimensions, table keys, buttons) is Osifont. Anything a writer would write (sentences) is Archivo.

## Layout

Each section is a sheet in a single column of sheets on the mat, separated by the mat gap (26px). The sheet rail sits fixed on the right (40px wide, 12px from the edge), so main content keeps 64px of right padding. A sheet is paper with a 20px inset to its frame; the frame is a 2px ink border. Inside the frame the main field uses 34px padding.

- **Sheet 00 (cover)** fills the viewport height. Its frame is a two-column grid: main field and a vertical title block (316px, 292px at 1280px and below). The sheet index under the cover text is a table of rows on a 64px / fluid / 338px / 160px grid (bubble, name and one-liner, dimension drawing, status).
- **Project sheets** use a header row (title and subtitle over a 2px ink rule) then two areas: drawings (1.55fr) and side column (min 300px, 1fr) for parts list, notes and the horizontal title block, with 26px row and 40px column gaps. The horizontal title block sits at the bottom of the side column.
- **Zone markers** 1 to 8 and A to F sit in the 20px band between paper edge and frame, with ink ticks at 60% opacity.

Responsive behavior:
- **1280px and below:** the index grid and title block narrow.
- **1100px and below:** the cover title block moves under the main field as a two-column grid of cells; project sheets stack to one column; a quick-contact row (email cell plus links) appears under the cover thesis.
- **860px and below:** mat gap and frame inset drop to 10px and frame padding to 18px; zone markers and drafting tape are hidden; the rail becomes a fixed bottom bar of 44px targets on the deep mat; index rows reflow to bubble plus stacked name, drawing and status; wide drawings pan horizontally inside a panning frame at a minimum width of 640px, with a lettered "swipe" hint line above them in the active language; non-current sheets are no longer dimmed.
- **Print:** each sheet prints on its own page without mat, rail or shadow.

Language is chosen by the `?lang=es|en` query parameter, falling back to the browser language. Bilingual content is written as paired elements with `lang="es"` and `lang="en"`; only the active language renders. Both languages share one layout; neither gets its own composition.

## Elevation & Depth

The system is flat paper on a flat mat. The only shadow is the physical one under each sheet where it lies on the mat; nothing on the paper is lifted. Depth on the paper comes from line weight (2px frame and section rules, 1px cell rules, 0.8 to 1.2 stroke in drawings) and from ink strength: the current sheet's drawings and title block are at full strength, the others at underlay strength (drawings 50%, title block 60% opacity) on viewports wider than 860px.

### Shadow Vocabulary
- **Sheet on mat** (`box-shadow: 0 1px 1px rgba(0, 0, 0, 0.18), 0 16px 32px -14px rgba(0, 0, 0, 0.5)`): every sheet, including the 404 sheet. Removed in print.

### Named Rules
**The Paper Lies Flat Rule.** Only sheets cast a shadow, and only onto the mat. Elements on the paper never get shadows, glows or lifts; emphasis is ink, rule weight or the highlighter.

## Shapes

Square corners throughout (radius 0): sheets, frames, title block cells, buttons, tables, code listings, rail items. The circle is reserved for drawing-set callouts: the detail bubble (42px, 38px in captions; 1.5px ink outline split by a horizontal rule into detail number over sheet number) and the parts-list balloon inside drawings. Revision clouds are a scalloped red outline drawn around a note box, computed from its size, with a delta symbol at top left. Hatching is 45-degree ink lines at 6px pitch in drawings, and a 45-degree faint-rule stripe in table cells for rest days. Center lines use a long-dash/dot pattern (14 4 2 4).

## Components

### Buttons
Drafted, square and plain: an outlined cell or an ink-filled cell.
- **Shape:** square (0), 1.5px ink border, minimum height 44px, Osifont 16px, 14px icons drawn as single-stroke line glyphs.
- **Primary (solid):** ink fill, paper lettering; hover moves to pressed ink.
- **Outline:** paper fill, ink lettering; hover fills with ink and letters in paper.
- **Confirmed:** the copy-email button turns highlighter yellow with ink lettering for about two seconds, then returns.
- **Focus:** 2px dashed ink outline, 3px offset (paper-colored on the mat rail).

### Title Block
The ISO 7200 title block is the sheet's control panel.
- **Vertical (cover):** cells separated by 1px ink rules, 8px 14px 10px padding; each cell is a faded-ink label over a value. Holds author, location and time zone, contact (the ink-filled email cell at 20px plus link rows separated by cell rules), the revisions table, the language switch, and a status / drawn / date / sheet-number grid with the sheet number at 48px.
- **Horizontal (project sheets):** 2px ink border, a 1fr 1fr 86px grid with the sheet number cell spanning two rows at 40px; fields for status, links and dates.
- **Language switch:** a two-cell grid in a 1.5px ink border; the active language is ink-filled.

### Tables
Parts lists (BOM), revision tables, the cover revisions list, the shift schedule and the skills list share one grammar: faded-ink Osifont headers over a 1px ink rule, rows separated by 1px cell rules, identifiers (item number, revision letter, date) in Osifont, descriptions in Archivo. Block titles above them sit on a 2px ink rule with a faded-ink count at the right.

### Navigation
- **Sheet rail:** fixed column of square sheet numbers (00 to 06) on the mat, Osifont 15px in mat lettering with 35%-opacity borders; hover adds a 14% paper wash; the current sheet is a paper cell with ink lettering. A rule separates the language pair, whose active item is styled the same way. Below 860px it becomes a full-width bottom bar on the deep mat with 44px targets.
- **Sheet index:** each row of the cover index is a link to its sheet. Hover washes the row with ink at 4.5% and fills its detail bubble with ink.

### Detail Bubble (signature)
A 1.5px ink circle split horizontally: detail number above, sheet number below, Osifont 15px. It appears in index rows and drawing captions and always means "this detail is drawn on that sheet".

### BOM Balloon (signature)
Numbered paper circles with an ink stroke placed on drawings. Hovering or focusing a balloon highlights the matching parts-list row and the balloon itself with the highlighter; focus thickens the stroke to 2.4.

### Dimension Drawing (signature)
Each index row and each project drawing states its measured proof as a dimension: extension lines, arrowed dimension line, lettered figure. Before/after figures draw the superseded leg in red and the current figure in ink with a highlighter band behind it.

### Revision Cloud
A note box wrapped in a scalloped red outline with a delta mark; text in red, its heading in Osifont 15px. Used for revised or corrected statements only.

### Code Listing
1px ink border on paper, 14px 16px padding, monospace 13.5px at 1.55, comments in faded ink italic, keywords bold. Scrolls horizontally rather than wrapping.

### Motion
- **Plotter draw-in:** marked strokes in a sheet's drawings draw from zero to full length over 1.1s on the ease-out curve, staggered 25ms per stroke up to 0.9s, once, when the sheet first enters 85% of the viewport.
- **Highlighter swipe:** the highlighter band grows left to right over 0.7s after a 0.5s delay, once per sheet.
- **Underlay:** drawings on non-current sheets fade to 50% over 0.6s (wider than 860px only).
- **State transitions:** 0.2s to 0.25s background and color changes on hover.
- **Reduced motion:** strokes fully drawn, bands fully laid, no dimming, smooth scrolling off.

## Do's and Don'ts

### Do:
- **Do** draw every line and letter on paper in the ink (#2b2f8f) or faded ink (#4f539e).
- **Do** letter titles, labels, figures, table keys and buttons in Osifont at weight 400; set sentences in Archivo.
- **Do** state measured proof as a dimension drawing, with the superseded value in red and the current one under the highlighter.
- **Do** put actions and metadata into title block cells: a faded-ink label over an Osifont value, separated by 1px ink rules.
- **Do** keep corners square; use circles only for detail bubbles and BOM balloons.
- **Do** use hatching (45-degree lines) for sectioned or inactive areas, and hard-stop bands for the highlighter.
- **Do** keep motion to the plotter draw-in and the highlighter swipe, each once, and make both static under reduced motion.
- **Do** use a 2px dashed ink focus outline at 3px offset, paper-colored where the control sits on the mat.
- **Do** write every piece of content in both languages as paired `lang` elements in the same layout.

### Don't:
- **Don't** use cards, pills, rounded containers or tag chips; content sits in frames, cells and table rows.
- **Don't** use smooth color gradients or glows; the only gradients allowed are hard-stop drawing devices (the highlighter band, hatching).
- **Don't** add shadows to anything on the paper; only sheets cast a shadow onto the mat.
- **Don't** use yellow on headings, labels or unverified figures, or red for anything but superseded values and revision clouds.
- **Don't** introduce a second ink color, a bold lettering weight, or a dark hero section.
- **Don't** use tech logo tiles or icon grids; the only icons are single-stroke line glyphs (external, download, arrow) at 14px.
