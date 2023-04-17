import { memo, SVGProps } from 'react';

const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 19 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6.12132 7.5H19V10.5H6.12132L11.0607 15.4393L8.93934 17.5607L0.37868 9L8.93934 0.43934L11.0607 2.56066L6.12132 7.5Z'
      fill='#999999'
    />
  </svg>
);
const Memo = memo(ArrowLeftIcon);
export { Memo as ArrowLeftIcon };
