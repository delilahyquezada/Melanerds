import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './LineRoundedPhone.module.css';
import { PhoneIcon } from './PhoneIcon';

interface Props {
  className?: string;
  classes?: {
    phone?: string;
    root?: string;
  };
  swap?: {
    phone?: ReactNode;
  };
}
/* @figmaId 57:184650 */
export const LineRoundedPhone: FC<Props> = memo(function LineRoundedPhone(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.phone || ''} ${classes.phone}`}>
        {props.swap?.phone || <PhoneIcon className={classes.icon} />}
      </div>
    </div>
  );
});
