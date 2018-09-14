# VuetifyImageInput

Provides basic image editing tools.

## demo

[Try it out!](https://seregpie.github.io/VuetifyImageInput/)

## dependencies

- [Vue](https://github.com/vuejs/vue)
- [Vuetify](https://github.com/vuetifyjs/vuetify)
- [PaperDuck](https://github.com/SeregPie/PaperDuck)
- [VDragged](https://github.com/zhanziyang/v-dragged)

## setup

### npm

```shell
npm install vuetify-image-input
```

### ES module

Register the component globally.

```javascript
import Vue from 'vue';
import VImageInput from 'vuetify-image-input';

Vue.component(VImageInput.name, VImageInput);
```

*or*

Register the component in the scope of another component.

```javascript
import VImageInput from 'vuetify-image-input';

export default {
  components: {
    [VImageInput.name]: VImageInput,
  },
  // ...
};
```

### browser

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vuetify"></script>
<script src="https://unpkg.com/paperduck"></script>
<script src="https://unpkg.com/vuetify-image-input"></script>
```

The component will be available under the name `VuetifyImageInput`. If Vue is detected, the component will be registered automatically.

## usage

```html
<v-image-input
  v-model="imageData"
  :image-quality="0.85"
  clearable
  image-format="jpeg"
/>
```

## properties

| property | type | default |
| ---: | :--- | :--- |
| `clear-icon` | [`Function`, `String`] | `$vuetify.icons.clear` |
| `clearable` | `Boolean` | `false` |
| `disabled` | `Boolean` | `false` |
| `flip-horizontally-icon-style` | [`Function`, `Object`] | |
| `flip-horizontally-icon` | [`Function`, `String`] | `'flip'` |
| `flip-vertically-icon-style` | [`Function`, `Object`] | `{transform: 'rotate(90deg)'}` |
| `flip-vertically-icon` | [`Function`, `String`] | `'flip'` |
| `full-height` | `Boolean` | `false` |
| `full-width` | `Boolean` | `false` |
| `hide-actions` | `Boolean` | `false` |
| `image-format` | `String` | `'png'` |
| `image-height` | `Number` | `256` |
| `image-quality` | | |
| `image-width` | `Number` | `256` |
| `readonly` | `Boolean` | `false` |
| `rotate-clockwise-icon-style` | [`Function`, `Object`] | `{transform: 'scaleX(-1)'}` |
| `rotate-clockwise-icon` | [`Function`, `String`] | `'rotate_90_degrees_ccw'` |
| `rotate-counterclockwise-icon-style` | [`Function`, `Object`] | |
| `rotate-counterclockwise-icon` | [`Function`, `String`] | `'rotate_90_degrees_ccw'` |
| `upload-icon-style` | [`Function`, `Object`] | |
| `upload-icon` | [`Function`, `String`] | `'cloud_upload'` |
| `value` | `String` | |

## todo

- Image dragging.
- Debounced output.
- More styling options.
- Progress while uploading the image.
- Scale the element if if does not fit inside his container.
