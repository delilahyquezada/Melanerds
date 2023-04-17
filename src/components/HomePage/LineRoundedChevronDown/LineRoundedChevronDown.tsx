import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { ChevronIcon } from './ChevronIcon';
import classes from './LineRoundedChevronDown.module.css';

interface Props {
  className?: string;
  classes?: {
    chevron?: string;
    root?: string;
  };
  swap?: {
    chevron?: ReactNode;
  };
}
/* @figmaId 57:184593 */
export const LineRoundedChevronDown: FC<Props> = memo(function LineRoundedChevronDown(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.chevron || ''} ${classes.chevron}`}>
        {props.swap?.chevron || <ChevronIcon className={classes.icon} />}
      </div>
    </div>
  );
});
