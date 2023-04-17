import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component1_Property1Frame33.module.css';
import { IcOutlineArrowRightIcon } from './IcOutlineArrowRightIcon';
import { IcOutlineArrowRightIcon2 } from './IcOutlineArrowRightIcon2';

interface Props {
  className?: string;
  classes?: {
    rectangle13?: string;
    frame24?: string;
    rectangle14?: string;
    frame25?: string;
    rectangle15?: string;
    frame26?: string;
    rectangle16?: string;
    frame27?: string;
    rectangle17?: string;
    frame28?: string;
    rectangle18?: string;
    frame29?: string;
    rectangle19?: string;
    frame30?: string;
    rectangle20?: string;
    frame31?: string;
    rectangle21?: string;
    frame32?: string;
    icOutlineArrowRight?: string;
    icOutlineArrowRight2?: string;
    root?: string;
  };
  swap?: {
    icOutlineArrowRight?: ReactNode;
    icOutlineArrowRight2?: ReactNode;
  };
  text?: {
    films?: ReactNode;
    gaming?: ReactNode;
    cosplay?: ReactNode;
    gaming2?: ReactNode;
    cosplay2?: ReactNode;
    anime?: ReactNode;
    asianDramas?: ReactNode;
    starWars?: ReactNode;
    tableTop?: ReactNode;
    tech?: ReactNode;
    animation?: ReactNode;
  };
}
/* @figmaId 15:183536 */
export const Component1_Property1Frame33: FC<Props> = memo(function Component1_Property1Frame33(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.frame24 || ''} ${classes.frame24}`}>
        <div className={`${props.classes?.rectangle13 || ''} ${classes.rectangle13}`}></div>
        {props.text?.films != null ? props.text?.films : <div className={classes.films}>Films</div>}
      </div>
      <div className={`${props.classes?.frame25 || ''} ${classes.frame25}`}>
        <div className={`${props.classes?.rectangle14 || ''} ${classes.rectangle14}`}></div>
        {props.text?.gaming != null ? props.text?.gaming : <div className={classes.gaming}>Gaming</div>}
      </div>
      <div className={`${props.classes?.frame26 || ''} ${classes.frame26}`}>
        <div className={`${props.classes?.rectangle15 || ''} ${classes.rectangle15}`}></div>
        {props.text?.cosplay != null ? props.text?.cosplay : <div className={classes.cosplay}>Cosplay</div>}
      </div>
      <div className={`${props.classes?.frame27 || ''} ${classes.frame27}`}>
        <div className={`${props.classes?.rectangle16 || ''} ${classes.rectangle16}`}></div>
      </div>
      <div className={`${props.classes?.frame28 || ''} ${classes.frame28}`}>
        <div className={`${props.classes?.rectangle17 || ''} ${classes.rectangle17}`}></div>
      </div>
      <div className={`${props.classes?.frame29 || ''} ${classes.frame29}`}>
        <div className={`${props.classes?.rectangle18 || ''} ${classes.rectangle18}`}></div>
      </div>
      <div className={`${props.classes?.frame30 || ''} ${classes.frame30}`}>
        <div className={`${props.classes?.rectangle19 || ''} ${classes.rectangle19}`}></div>
      </div>
      <div className={`${props.classes?.frame31 || ''} ${classes.frame31}`}>
        <div className={`${props.classes?.rectangle20 || ''} ${classes.rectangle20}`}></div>
      </div>
      <div className={`${props.classes?.frame32 || ''} ${classes.frame32}`}>
        <div className={`${props.classes?.rectangle21 || ''} ${classes.rectangle21}`}></div>
      </div>
      <div className={classes.films2}>Films</div>
      {props.text?.gaming2 != null ? props.text?.gaming2 : <div className={classes.gaming2}>Gaming</div>}
      {props.text?.cosplay2 != null ? props.text?.cosplay2 : <div className={classes.cosplay2}>Cosplay</div>}
      {props.text?.anime != null ? props.text?.anime : <div className={classes.anime}>Anime</div>}
      {props.text?.asianDramas != null ? (
        props.text?.asianDramas
      ) : (
        <div className={classes.asianDramas}>Asian Dramas</div>
      )}
      {props.text?.starWars != null ? props.text?.starWars : <div className={classes.starWars}>Star Wars</div>}
      {props.text?.tableTop != null ? props.text?.tableTop : <div className={classes.tableTop}>Table Top</div>}
      {props.text?.tech != null ? props.text?.tech : <div className={classes.tech}>Tech</div>}
      {props.text?.animation != null ? props.text?.animation : <div className={classes.animation}>Animation</div>}
      <div className={`${props.classes?.icOutlineArrowRight || ''} ${classes.icOutlineArrowRight}`}>
        {props.swap?.icOutlineArrowRight || <IcOutlineArrowRightIcon className={classes.icon} />}
      </div>
      <div className={`${props.classes?.icOutlineArrowRight2 || ''} ${classes.icOutlineArrowRight2}`}>
        {props.swap?.icOutlineArrowRight2 || <IcOutlineArrowRightIcon2 className={classes.icon2} />}
      </div>
    </div>
  );
});
