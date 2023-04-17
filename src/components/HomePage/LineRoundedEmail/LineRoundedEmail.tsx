import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { EmailIcon } from './EmailIcon';
import classes from './LineRoundedEmail.module.css';

interface Props {
  className?: string;
  classes?: {
    email?: string;
    root?: string;
  };
  swap?: {
    email?: ReactNode;
  };
}
/* @figmaId 57:184645 */
export const LineRoundedEmail: FC<Props> = memo(function LineRoundedEmail(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.email || ''} ${classes.email}`}>
        {props.swap?.email || <EmailIcon className={classes.icon} />}
      </div>
    </div>
  );
});
