import * as Styled from './Header.styles';
import { ReactComponent as FrontendLogo } from '@assets/frontend-logo.svg';
import { ReactComponent as DeleteIcon } from '@assets/delete-icon.svg';
import { IconButton } from '@components';
import { clearMessages, store } from '@store/messages';

export const Header = () => {
  const handleClick = () => {
    store.dispatch(clearMessages());
  };

  return (
    <Styled.Header>
      <FrontendLogo />
      <IconButton onClick={handleClick} icon={<DeleteIcon />}>
        Limpar Chat
      </IconButton>
    </Styled.Header>
  );
};
