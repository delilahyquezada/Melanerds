import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './_DotIndictaor_ActiveFalse.module.css';
import { DotIndictaorIcon } from './DotIndictaorIcon';

interface Props {
  className?: string;
}
/* @figmaId 56:184166 */
export const _DotIndictaor_ActiveFalse: FC<Props> = memo(function _DotIndictaor_ActiveFalse(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.dotIndictaor}>
        <DotIndictaorIcon className={classes.icon} />
      </div>
    </div>
  );
});
