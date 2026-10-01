<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules

- Site content (products, clients, case studies, contact) lives in `src/data/suyog.ts` — single source so copy stays factual and editable in one place.
- Page sections live in `src/components/site/*` and are composed in `src/routes/index.tsx` with in-page anchors; keeps the one-page marketing site navigable without extra routes.
- Animation uses `motion/react` with shared `Reveal`/`Counter` helpers in `src/components/site/primitives.tsx`; reduced-motion is handled globally in `src/styles.css`.
