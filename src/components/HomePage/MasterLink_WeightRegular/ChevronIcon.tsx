import { memo, SVGProps } from 'react';

const ChevronIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.166667 0.0833335L6 5.91667L11.8333 0.0833335'
      stroke='#211F54'
      strokeWidth={1.4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(ChevronIcon);
export { Memo as ChevronIcon };
