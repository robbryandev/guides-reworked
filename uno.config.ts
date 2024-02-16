import { defineConfig, presetWind } from 'unocss';
import transformerVariantGroup from '@unocss/transformer-variant-group';

export default defineConfig({
  rules: [
    ["bg-center", {
      "background-position": "center"
    }],
    ["bg-repeat-none", {
      "background-repeat": "no-repeat"
    }],
    ["bg-img-game", {
      "background-image": "url('button_gamedev_transparent.png')"
    }]
  ],
  presets: [
    presetWind()
  ],
  transformers: [
    transformerVariantGroup()
  ]
})