import { memo, SVGProps } from 'react';

const IcOutlineArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 300 300' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M125 212.5L187.5 150L125 87.5V212.5Z' fill='black' />
  </svg>
);
const Memo = memo(IcOutlineArrowRightIcon);
export { Memo as IcOutlineArrowRightIcon };
