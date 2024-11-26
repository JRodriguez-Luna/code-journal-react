import React, { useRef, useEffect } from 'react';
type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ isOpen, children, onClose }: Props) {
  const modal = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (isOpen) {
      modal.current?.showModal();
    } else {
      modal.current?.close();
    }
  }, [isOpen]);

  return <dialog onClose={onClose}>{children}</dialog>;
}
