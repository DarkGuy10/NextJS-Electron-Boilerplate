# Frontend

This will handle the electron renderer process.

This directory follows the generic structure of a NextJS app (using the App router).

Static asset files (images, fonts, etc.) should be placed inside the `public/` directory. Storybook is configured to use this as the `staticDir` path.
Storybook should also respect path aliases defined in the `tsconfig.json` file in this directory.

Make sure to add proper typings for the APIs exposed over the context bridge in `context.d.ts`.

The template comes with [SVGR](https://react-svgr.com/) installed and pre-configured, so you can import SVG files as React components.

> [!WARNING]  
> Do NOT use the inbuilt Link/Image components, since Next is used in SSG mode.
