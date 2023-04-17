import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './SlideItem_StateActiveInteracti.module.css';

interface Props {
  className?: string;
  classes?: {
    slideImage?: string;
    root?: string;
  };
}
/* @figmaId 56:184154 */
export const SlideItem_StateActiveInteracti: FC<Props> = memo(function SlideItem_StateActiveInteracti(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.slideImage || ''} ${classes.slideImage}`}></div>
    </div>
  );
});
