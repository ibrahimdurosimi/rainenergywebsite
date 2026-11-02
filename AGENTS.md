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

- Keep the required TanStack Start scaffold. Services live at `/services/<slug>`; add new pages as file routes in `src/routes`.
- Gold is reserved for "Request a quote" buttons only (client request); everything else uses navy, steel blue and mist blue (`--tone`).
- Keep all Rain Energy colours, typography and visual rules in the global design system (`src/styles.css`); shared page layouts must use semantic styles.
- All facts on the site come from the Rain Energy Company Profile 2026 and Brand Guidelines 2026. Keep them in `src/data/content.ts`. Do not add invented statistics, projects, news or people. The TIN must not appear on the website.
- The contact form is live: `src/lib/contact.ts` sends through Resend. It needs `RESEND_API_KEY` and `CONTACT_FROM` set as Cloudflare variables (see README).
