import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ArrowRight.module.css';
import { ArrowRightIcon } from './ArrowRightIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 56:184170 */
export const ArrowRight: FC<Props> = memo(function ArrowRight(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <ArrowRightIcon className={classes.icon2} />}</div>
    </div>
  );
});
