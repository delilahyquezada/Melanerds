import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './SlideItem_StateFarInteraction.module.css';

interface Props {
  className?: string;
  classes?: {
    slideImage?: string;
    root?: string;
  };
}
/* @figmaId 56:184160 */
export const SlideItem_StateFarInteraction: FC<Props> = memo(function SlideItem_StateFarInteraction(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.slideImage || ''} ${classes.slideImage}`}></div>
    </div>
  );
});
