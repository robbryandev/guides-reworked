import { defineConfig, presetWind, presetTypography } from 'unocss';
import transformerVariantGroup from '@unocss/transformer-variant-group';

export default defineConfig({
  rules: [
    ["bg-center", {
      "background-position": "center"
    }],
    ["bg-repeat-none", {
      "background-repeat": "no-repeat"
    }]
  ],
  presets: [
    presetWind(),
    presetTypography()
  ],
  transformers: [
    transformerVariantGroup()
  ]
})