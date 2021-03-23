import { CSSProperties } from 'react';

export interface Style extends CSSProperties {
  '--left': number,
  '--opacity'?: number,
}