import { memo, SVGProps } from 'react';

const ChevronIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0.5L7 7.5L14 0.5' stroke='#211F54' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(ChevronIcon);
export { Memo as ChevronIcon };
