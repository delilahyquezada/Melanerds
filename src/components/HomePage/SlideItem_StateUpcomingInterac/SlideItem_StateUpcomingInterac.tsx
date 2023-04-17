import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './SlideItem_StateUpcomingInterac.module.css';

interface Props {
  className?: string;
  classes?: {
    slideImage?: string;
    root?: string;
  };
}
/* @figmaId 56:184158 */
export const SlideItem_StateUpcomingInterac: FC<Props> = memo(function SlideItem_StateUpcomingInterac(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.slideImage || ''} ${classes.slideImage}`}></div>
    </div>
  );
});
