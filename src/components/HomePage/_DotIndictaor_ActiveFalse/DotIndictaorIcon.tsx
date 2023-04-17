import { memo, SVGProps } from 'react';

const DotIndictaorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={6} cy={6} r={6} fill='#999999' />
  </svg>
);
const Memo = memo(DotIndictaorIcon);
export { Memo as DotIndictaorIcon };
