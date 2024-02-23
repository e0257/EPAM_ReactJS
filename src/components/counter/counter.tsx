import React, { useState } from 'react';

import './counter.scss';

interface CounterProps {
  initialValue?: number;
}

export default function Counter({ initialValue = 0 }: CounterProps) {
  const [count, setCount] = useState(initialValue);

  return React.createElement('div', { className: 'counter' },
    React.createElement('button', { onClick: () => setCount(count - 1) }, 'Dec'),
    React.createElement('span', null, count),
    React.createElement('button', { onClick: () => setCount(count + 1) }, 'Inc')
  );
};
