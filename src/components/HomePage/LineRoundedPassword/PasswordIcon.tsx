import { memo, SVGProps } from 'react';

const PasswordIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13 8.13953H3C1.61929 8.13953 0.5 9.25881 0.5 10.6395V18.1395C0.5 19.5202 1.61929 20.6395 3 20.6395H13C14.3807 20.6395 15.5 19.5202 15.5 18.1395V10.6395C15.5 9.25881 14.3807 8.13953 13 8.13953Z'
      stroke='#211F54'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8 0.639526C6.67392 0.639526 5.40215 1.16631 4.46447 2.10399C3.52678 3.04167 3 4.31344 3 5.63953V8.13953H13V5.63953C13 4.31344 12.4732 3.04167 11.5355 2.10399C10.5979 1.16631 9.32608 0.639526 8 0.639526V0.639526Z'
      stroke='#211F54'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(PasswordIcon);
export { Memo as PasswordIcon };
