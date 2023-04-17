import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { _DotIndictaor_ActiveFalse } from '../_DotIndictaor_ActiveFalse/_DotIndictaor_ActiveFalse';
import { _DotIndictaor_ActiveTrue } from '../_DotIndictaor_ActiveTrue/_DotIndictaor_ActiveTrue';
import { ArrowLeft } from '../ArrowLeft/ArrowLeft';
import { ArrowRight } from '../ArrowRight/ArrowRight';
import { SlideItem_StateActiveInteracti } from '../SlideItem_StateActiveInteracti/SlideItem_StateActiveInteracti';
import { SlideItem_StateFarInteraction } from '../SlideItem_StateFarInteraction/SlideItem_StateFarInteraction';
import { SlideItem_StateUpcomingInterac } from '../SlideItem_StateUpcomingInterac/SlideItem_StateUpcomingInterac';
import { ArrowLeftIcon } from './ArrowLeftIcon';
import { ArrowRightIcon } from './ArrowRightIcon';
import classes from './Carousel_Slide1.module.css';

interface Props {
  className?: string;
  classes?: {
    slideImage?: string;
    slideImage2?: string;
    slideImage3?: string;
    slideImage4?: string;
    slideImage5?: string;
    slideList?: string;
    root?: string;
  };
}
/* @figmaId 56:184173 */
export const Carousel_Slide1: FC<Props> = memo(function Carousel_Slide1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.slidesBox}>
        <div className={`${props.classes?.slideList || ''} ${classes.slideList}`}>
          <SlideItem_StateFarInteraction
            className={classes.slideItem4}
            classes={{ slideImage: `${props.classes?.slideImage || ''} ${classes.slideImage}` }}
          />
          <SlideItem_StateFarInteraction
            className={classes.slideItem3}
            classes={{ slideImage: `${props.classes?.slideImage2 || ''} ${classes.slideImage2}` }}
          />
          <SlideItem_StateUpcomingInterac
            className={classes.slideItem5}
            classes={{ slideImage: `${props.classes?.slideImage3 || ''} ${classes.slideImage3}` }}
          />
          <SlideItem_StateUpcomingInterac
            className={classes.slideItem2}
            classes={{ slideImage: `${props.classes?.slideImage4 || ''} ${classes.slideImage4}` }}
          />
          <SlideItem_StateActiveInteracti
            className={classes.slideItem1}
            classes={{ slideImage: `${props.classes?.slideImage5 || ''} ${classes.slideImage5}` }}
          />
        </div>
      </div>
      <div className={classes.slidesNavigation}>
        <div className={classes.clickArea}>
          <ArrowLeft
            className={classes.arrowLeft}
            swap={{
              icon: <ArrowLeftIcon className={classes.icon} />,
            }}
          />
        </div>
        <div className={classes.slideIndicator}>
          <_DotIndictaor_ActiveTrue />
          <_DotIndictaor_ActiveFalse />
          <_DotIndictaor_ActiveFalse />
          <_DotIndictaor_ActiveFalse />
          <_DotIndictaor_ActiveFalse />
        </div>
        <div className={classes.clickArea2}>
          <ArrowRight
            className={classes.arrowRight}
            swap={{
              icon: <ArrowRightIcon className={classes.icon2} />,
            }}
          />
        </div>
      </div>
    </div>
  );
});
