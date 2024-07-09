import { FC } from 'react';
import * as Styled from './Message.styles';
import { MessageProps } from './Message.types';
import { ReactComponent as UserProfileIcon } from '@assets/user-profile-icon.svg';
import { ReactComponent as BotProfileIcon } from '@assets/bot-profile-icon.svg';

export const Message: FC<MessageProps> = ({
  children,
  time,
  role,
  loading,
}) => {
  const isRoleAssistant = role === 'assistant';

  return (
    <Styled.Container $isRoleAssistant={isRoleAssistant}>
      {!loading && (
        <Styled.MessageWrapper $isRoleAssistant={isRoleAssistant}>
          <Styled.Message $isRoleAssistant={isRoleAssistant}>
            {children}
          </Styled.Message>
          <Styled.Time>
            {isRoleAssistant ? 'Replied at ' : 'You at '} {time}
          </Styled.Time>
        </Styled.MessageWrapper>
      )}
      {loading && (
        <Styled.Loading data-testid='loading' $isFullyLoaded={!loading} />
      )}
      {isRoleAssistant ? <BotProfileIcon /> : <UserProfileIcon />}
    </Styled.Container>
  );
};
