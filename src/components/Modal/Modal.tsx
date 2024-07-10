import { FC, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '@components';
import { ModalProps } from './Modal.types';
import * as Styled from './Modal.styles';
import { ReactComponent as CloseIcon } from '@assets/close-icon.svg';
import { useOnClickOutside } from '@hooks';

export const Modal: FC<ModalProps> = ({
  title,
  submitLabel,
  cancelLabel,
  children,
  onSubmit,
  onCancel,
  onClose,
}) => {
  const [domReady, setDomReady] = useState(false);
  const modalReference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDomReady(true);
  }, []);

  useOnClickOutside(modalReference, onClose);

  return domReady
    ? createPortal(
        <>
          <Styled.Backdrop />
          <Styled.Modal ref={modalReference}>
            <Styled.Header>
              <span>{title}</span>
              <CloseIcon onClick={onClose} />
            </Styled.Header>
            <Styled.Body>{children}</Styled.Body>
            <Styled.Footer>
              <Button onClick={onSubmit} variant='primary'>
                {submitLabel}
              </Button>
              <Button onClick={onCancel} variant='secondary'>
                {cancelLabel}
              </Button>
            </Styled.Footer>
          </Styled.Modal>
        </>,
        document.getElementById('overlays-portal')!
      )
    : null;
};
