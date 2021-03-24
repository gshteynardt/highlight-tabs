/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo, ReactNode } from 'react';
import cn from 'classnames';

interface Props {
  className?: string;
  children: ReactNode;
  label: string;
}

const Tab = (props: Props) => {
  const { className, children } = props;
  const componentClass = cn(className, 'Tabs__Tab');

  return (
    <div className={componentClass}>
      {children}
    </div>
  );
};

const areEqual = (prev: Props, next: Props) => prev === next;

export default memo(Tab, areEqual);