import { memo, SVGProps } from 'react';

const EmailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M20 3.13953V13.1395C20 13.8026 19.7366 14.4385 19.2678 14.9073C18.7989 15.3761 18.163 15.6395 17.5 15.6395H2.5C1.83696 15.6395 1.20107 15.3761 0.732233 14.9073C0.263392 14.4385 0 13.8026 0 13.1395V3.13953'
      stroke='#211F54'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M20 3.13953C20 2.47649 19.7366 1.8406 19.2678 1.37176C18.7989 0.902919 18.163 0.639526 17.5 0.639526H2.5C1.83696 0.639526 1.20107 0.902919 0.732233 1.37176C0.263392 1.8406 0 2.47649 0 3.13953L8.675 8.55619C9.07233 8.80453 9.53145 8.9362 10 8.9362C10.4686 8.9362 10.9277 8.80453 11.325 8.55619L20 3.13953Z'
      stroke='#211F54'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(EmailIcon);
export { Memo as EmailIcon };
