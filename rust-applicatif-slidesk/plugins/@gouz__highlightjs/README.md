# SliDesk Plugin: HighlightJS

This plugin allows you to add `HighlightJS` in your slides.

You can change the theme modifying `plugin.json` with the `addStyles`.

You can change supported langages with the https://highlightjs.org/download package and replace the `highlight.min.js` file.

To use the plugin, add the langage after the 3 quotes

```
  ```js

  ```python
```

You can focus to specified lines too:

```
  ```javascript@focus=3:5
  import { Elysia } from 'elysia';

  const app = new Elysia()
                    .get('/', 'Hello World!')
                    .listen(3000);

  console.log(
      `Example app listening on port ${app.server?.port}`
  );
  ```
```
