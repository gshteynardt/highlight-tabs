import React, { useState, ReactNode, CSSProperties } from 'react';
import cn from 'classnames';

import './style.scss';

export interface Props {
  className?: string;
  initTab?: number;
  children: ReactNode;
}

const Tabs = (props: Props) => {
  const { className, children, initTab = 0 } = props;
  const [active, setActive] = useState(initTab);
  const componentClass = cn(className, 'Tabs');
  const tabWidth = 100 / React.Children.count(children);

  const labels = React.Children.map(children, (child: any, index) => {
    const label = child.props.label;

    return (
      <li
        key={label}
        className={
          cn(
            'Tabs__Label',
            { 'Tabs__Label_active': active === index },
          )
        }
        onClick={() => setActive(index)}
        style={{ '--Tab-width': `${tabWidth}%` } as CSSProperties}
      >
        {label}
      </li>
    );
  });

  const content = React.Children.map(children, (child, index) => index === active
    ? child
    : <div hidden>{child}</div>);

  return (
    <div className={componentClass}>
      <ul className="Tabs__Labels">
        {labels}
      </ul>
      {content}
    </div>
  );
};

export default React.memo(Tabs);