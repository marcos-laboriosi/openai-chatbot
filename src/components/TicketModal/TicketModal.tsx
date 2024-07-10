import { FC } from 'react';
import { Modal } from '@components';
import { TicketModalProps } from './TicketModal.types';
import * as Styled from './TicketModal.styles';

export const TicketModal: FC<TicketModalProps> = ({
  onSubmit,
  onCancel,
  onClose,
  open,
}) =>
  open && (
    <Modal
      title='Open Ticket'
      submitLabel='Create'
      cancelLabel='Cancel'
      onSubmit={onSubmit}
      onCancel={onCancel}
      onClose={onClose}
    >
      <Styled.Label>Ticket Description</Styled.Label>
      <Styled.TextArea placeholder='Enter a description' />
    </Modal>
  );
