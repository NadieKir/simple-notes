import { getContrastRatio } from "@mui/material";

import palette from 'style/_colors.module.scss';

const WHITE_COLOR = "#fff";

export const getContrastColor = (color: string) => 
  getContrastRatio(color, WHITE_COLOR) > 4.0 ? palette.white : palette.black
