/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { MouseEvent, memo } from 'react';
import cn from 'classnames';

import './style.scss';
import { Style } from '../../types';

interface Props {
  className?: string;
  children: React.ReactNode;
  onMouseMove: (e: MouseEvent<HTMLElement>) => void;
  onMouseOut: (e: MouseEvent<HTMLElement>) => void;
  style: Style;
}
const Tab = (props: Props) => {
  const { className, children, onMouseMove, onMouseOut, style } = props;
  const componentClass = cn(className, 'Tab');

  return (
    <div
      className={componentClass}
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}
    >
      <div
        className="Tab__Highlight"
        style={style}
      />
      <a
        className={
          cn(
            'Tab__Link',
            { 'Tab__Link-active': false }
          )
        }
      >{children}</a>
    </div>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default memo(Tab, areEqual);