import { memo, SVGProps } from 'react';

const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.31865 7.038H0.94953V4.962H9.31865L6.10886 1.54396L7.48738 0.0760062L13.0505 6L7.48738 11.924L6.10886 10.456L9.31865 7.038V7.038Z'
      fill='#999999'
    />
  </svg>
);
const Memo = memo(ArrowRightIcon);
export { Memo as ArrowRightIcon };
