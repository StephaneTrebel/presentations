# Plugin `sbs` (for Step By Step)

Display elements on a slide step by step.

To do this, add the class `sbs` on the slide

```sdf
## My Title .[sbs]
```

And to control your elements, wrap your element by a `div` with the `step` class :

```html
<div class="step">First item</div>
<div class="step">!image(my/image.png, alt)</div>
<div class="step">All you want</div>
<div class="step">Last item</div>
```

You can control the step number by adding a `data-sbs` attribute to your element :

```html
<div class="step" data-sbs="3">First item</div>
<div class="step" data-sbs="2">!image(my/image.png, alt)</div>
<div class="step" data-sbs="1">All you want</div>
<div class="step" data-sbs="4">Last item</div>
```