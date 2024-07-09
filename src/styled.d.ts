import 'styled-components';
import { theme } from './constants';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
/// <reference types="vite-plugin-svgr/client" />
