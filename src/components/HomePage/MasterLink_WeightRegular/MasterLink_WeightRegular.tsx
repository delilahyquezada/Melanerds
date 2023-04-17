import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { LineRoundedChevronDown } from '../LineRoundedChevronDown/LineRoundedChevronDown';
import { LineRoundedPassword } from '../LineRoundedPassword/LineRoundedPassword';
import { ChevronIcon } from './ChevronIcon';
import classes from './MasterLink_WeightRegular.module.css';
import { PasswordIcon } from './PasswordIcon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    password?: ReactNode;
    lineRoundedPassword?: ReactNode;
  };
  hide?: {
    lineRoundedChevronDown?: boolean;
  };
  text?: {
    linkItem?: ReactNode;
  };
}
/* @figmaId 57:184634 */
export const MasterLink_WeightRegular: FC<Props> = memo(function MasterLink_WeightRegular(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.swap?.lineRoundedPassword || (
        <LineRoundedPassword
          className={classes.lineRoundedPassword}
          classes={{ password: classes.password }}
          swap={{
            password: props.swap?.password || (
              <div className={classes.password}>
                <PasswordIcon className={classes.icon} />
              </div>
            ),
          }}
        />
      )}
      {props.text?.linkItem != null ? props.text?.linkItem : <div className={classes.linkItem}>Link item</div>}
      {!props.hide?.lineRoundedChevronDown && (
        <LineRoundedChevronDown
          className={classes.lineRoundedChevronDown}
          classes={{ chevron: classes.chevron }}
          swap={{
            chevron: (
              <div className={classes.chevron}>
                <ChevronIcon className={classes.icon2} />
              </div>
            ),
          }}
        />
      )}
    </div>
  );
});
