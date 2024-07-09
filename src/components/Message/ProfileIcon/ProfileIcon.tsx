import { FC } from 'react';
import { ProfileIconProps } from './ProfileIcon.types';
import { ReactComponent as UserProfileIcon } from '@assets/user-profile-icon.svg';
import { ReactComponent as BotProfileIcon } from '@assets/bot-profile-icon.svg';

export const ProfileIcon: FC<ProfileIconProps> = ({ isRoleAssistant }) =>
  isRoleAssistant ? <BotProfileIcon /> : <UserProfileIcon />;
