import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { MasterLink_WeightRegular } from '../MasterLink_WeightRegular/MasterLink_WeightRegular';
import classes from './Link_IconDefaultIconLeftTrueIc.module.css';
import { PasswordIcon } from './PasswordIcon';

interface Props {
  className?: string;
  classes?: {
    masterLink?: string;
    root?: string;
  };
  swap?: {
    lineRoundedPassword?: ReactNode;
  };
  hide?: {
    lineRoundedChevronDown?: boolean;
  };
  text?: {
    linkItem?: ReactNode;
  };
}
/* @figmaId 57:184611 */
export const Link_IconDefaultIconLeftTrueIc: FC<Props> = memo(function Link_IconDefaultIconLeftTrueIc(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <MasterLink_WeightRegular
        className={`${props.classes?.masterLink || ''} ${classes.masterLink}`}
        swap={{
          password: <PasswordIcon className={classes.icon} />,
          lineRoundedPassword: props.swap?.lineRoundedPassword,
        }}
        hide={{
          lineRoundedChevronDown: true,
        }}
        text={{
          linkItem: props.text?.linkItem || <div className={classes.linkItem}>Link item</div>,
        }}
      />
    </div>
  );
});
