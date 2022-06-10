import { createEffect, createSignal } from "solid-js";
import {
  generatedColor,
  generatedColorMix,
  generatedColorMixShadeCorrected,
  generatedColorRelative
} from "../functions/functions.styled";

/**
 * This file contains all application-wide pallet variables
 */

/* Base Variables */
export const Base = {
  TEXT_FONT_STACK: `'Inter', 'Open Sans', 'Helvetica Neue Light', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif`,
  //TEXT_FONT_STACK: `'IBM Plex Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Monaco', monospace`,
  CODE_FONT_STACK: `'IBM Plex Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Monaco', monospace`,
  MAX_WIDTH: 1180
}

/* Color System */

const WHITE: string = '#FFF';
const BLACK: string = '#000';

export const [colorScale, setColorScale] = createSignal({
  PRIMARY: '#0066FF',
  COMPLETE: '#379498',
  SUCCESS: '#1AA35E',
  WARNING: '#ffcf37',
  DANGER: '#F12B56',
  INFO: '#2B364C'
});

export const [ColorLegacy, setColorLegacy] = createSignal<Record<string, string>>({
  ...generatedColor(colorScale())
});

export const [ColorRelative, setColorRelative] = createSignal<Record<string, string>>({
  ...generatedColorRelative(colorScale())
});

export const [ColorMix, setColorMix] = createSignal<Record<string, string>>({
  ...generatedColorMix(colorScale())
})

export const [ColorShades, setColorShades] = createSignal<Record<string, string>>({
  ...generatedColorMixShadeCorrected(colorScale())
});

createEffect(() => {
  console.log('Master color tables updated');
  setColorLegacy({...generatedColor(colorScale())});
  setColorRelative({...generatedColorRelative(colorScale())});
  setColorMix({...generatedColorMix(colorScale())});
  setColorShades({...generatedColorMixShadeCorrected(colorScale())});
})

/* Grid System */

const GRID_COLUMNS: number = 12;

