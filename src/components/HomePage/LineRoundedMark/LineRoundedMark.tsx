import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './LineRoundedMark.module.css';
import { MarkIcon } from './MarkIcon';

interface Props {
  className?: string;
  classes?: {
    mark?: string;
    root?: string;
  };
  swap?: {
    mark?: ReactNode;
  };
}
/* @figmaId 57:184653 */
export const LineRoundedMark: FC<Props> = memo(function LineRoundedMark(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.mark || ''} ${classes.mark}`}>
        {props.swap?.mark || <MarkIcon className={classes.icon} />}
      </div>
    </div>
  );
});
