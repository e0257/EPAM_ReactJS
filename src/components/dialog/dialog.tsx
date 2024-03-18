import React, { ReactNode } from 'react';
import { Portal } from 'react-portal';
import FocusTrap from 'focus-trap-react';

import './dialog.scss';

interface DialogProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export default function Dialog({ title, children, onClose }: DialogProps) {
  return (
    <Portal>
      <FocusTrap>
        <div className="dialog-overlay" onClick={onClose}>
          <div className="dialog-content" onClick={e => e.stopPropagation()}>
            <div className="dialog-header">
              <h2 className="dialog-title">{title}</h2>
              <button className="dialog-close-button" onClick={onClose}>×</button>
            </div>
            <div className="dialog-body">
              {children}
            </div>
          </div>
        </div>
      </FocusTrap>
    </Portal>
  );
};
