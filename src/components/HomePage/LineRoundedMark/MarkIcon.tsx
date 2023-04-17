import { memo, SVGProps } from 'react';

const MarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M17.233 8.74747C17.233 15.2021 10.622 19.1786 9.2481 19.936C9.17199 19.978 9.08649 20 8.99957 20C8.91265 20 8.82715 19.978 8.75104 19.936C7.37614 19.1786 0.767171 15.2021 0.767171 8.74747C0.767171 3.6019 3.85451 -9.53674e-07 9.00008 -9.53674e-07C14.1457 -9.53674e-07 17.233 3.6019 17.233 8.74747Z'
      stroke='#211F54'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M4.88366 8.23291C4.88366 9.32466 5.31736 10.3717 6.08934 11.1437C6.86133 11.9157 7.90836 12.3494 9.00011 12.3494C10.0919 12.3494 11.1389 11.9157 11.9109 11.1437C12.6829 10.3717 13.1166 9.32466 13.1166 8.23291C13.1166 7.14116 12.6829 6.09412 11.9109 5.32213C11.1389 4.55015 10.0919 4.11645 9.00011 4.11645C7.90836 4.11645 6.86133 4.55015 6.08934 5.32213C5.31736 6.09412 4.88366 7.14116 4.88366 8.23291V8.23291Z'
      stroke='#211F54'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(MarkIcon);
export { Memo as MarkIcon };
