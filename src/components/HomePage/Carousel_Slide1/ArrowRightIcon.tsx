import { memo, SVGProps } from 'react';

const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.478 10.557H0.924295V7.443H13.478L8.66329 2.31595L10.7311 0.114009L19.0757 9L10.7311 17.886L8.66329 15.6841L13.478 10.557V10.557Z'
      fill='#999999'
    />
  </svg>
);
const Memo = memo(ArrowRightIcon);
export { Memo as ArrowRightIcon };
