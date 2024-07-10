import { FC, useState } from 'react';
import * as Styled from './Message.styles';
import { MessageProps } from './Message.types';
import { Footer } from './Footer';
import { ProfileIcon } from './ProfileIcon';

export const Message: FC<MessageProps> = ({
  onReport,
  children,
  time,
  role,
  loading,
}) => {
  const [copied, setCopied] = useState(false);
  const isRoleAssistant = role === 'assistant';
  const repliedTime = `${isRoleAssistant ? 'Replied at' : 'You at'} ${time}`;
  const successIconDisplayDuration = 1000;

  const handleClickCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(children);
    setTimeout(() => setCopied(false), successIconDisplayDuration);
  };

  return (
    <Styled.Container $isRoleAssistant={isRoleAssistant}>
      {!loading ? (
        <Styled.MessageWrapper $isRoleAssistant={isRoleAssistant}>
          <Styled.Message $isRoleAssistant={isRoleAssistant}>
            {children}
          </Styled.Message>
          <Footer
            copiedSuccessfully={copied}
            repliedTime={repliedTime}
            onCopy={handleClickCopy}
            onReport={onReport}
            isRoleAssistant={isRoleAssistant}
          />
        </Styled.MessageWrapper>
      ) : (
        <Styled.Loading data-testid='loading' />
      )}
      <ProfileIcon isRoleAssistant={isRoleAssistant} />
    </Styled.Container>
  );
};
