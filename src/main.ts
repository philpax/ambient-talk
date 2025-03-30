import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import RevealNotes from "reveal.js/plugin/notes/notes.esm.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js";

Reveal.initialize({
  plugins: [Markdown, RevealNotes, RevealHighlight],
  transition: "none",
  hash: true,
  width: 1280,
  height: 720,
});
