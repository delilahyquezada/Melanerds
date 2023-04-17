import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './LineRoundedPassword.module.css';
import { PasswordIcon } from './PasswordIcon';

interface Props {
  className?: string;
  classes?: {
    password?: string;
    root?: string;
  };
  swap?: {
    password?: ReactNode;
  };
}
/* @figmaId 57:184589 */
export const LineRoundedPassword: FC<Props> = memo(function LineRoundedPassword(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.password || ''} ${classes.password}`}>
        {props.swap?.password || <PasswordIcon className={classes.icon} />}
      </div>
    </div>
  );
});
