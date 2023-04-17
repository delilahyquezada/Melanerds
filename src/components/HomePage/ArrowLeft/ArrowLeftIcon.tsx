import { memo, SVGProps } from 'react';

const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 13 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M4.41421 5H13V7H4.41421L7.70711 10.2929L6.29289 11.7071L0.585786 6L6.29289 0.292893L7.70711 1.70711L4.41421 5Z'
      fill='#999999'
    />
  </svg>
);
const Memo = memo(ArrowLeftIcon);
export { Memo as ArrowLeftIcon };
