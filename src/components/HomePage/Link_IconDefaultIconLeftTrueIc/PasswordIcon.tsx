import { memo, SVGProps } from 'react';

const PasswordIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.1667 6.61627H2.83333C1.68274 6.61627 0.75 7.54901 0.75 8.69961V14.9496C0.75 16.1002 1.68274 17.0329 2.83333 17.0329H11.1667C12.3173 17.0329 13.25 16.1002 13.25 14.9496V8.69961C13.25 7.54901 12.3173 6.61627 11.1667 6.61627Z'
      stroke='#4A3AFF'
      strokeWidth={1.4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7 0.366272C5.89493 0.366272 4.83512 0.805259 4.05372 1.58666C3.27232 2.36806 2.83333 3.42787 2.83333 4.53294V6.61627H11.1667V4.53294C11.1667 3.42787 10.7277 2.36806 9.94628 1.58666C9.16488 0.805259 8.10507 0.366272 7 0.366272V0.366272Z'
      stroke='#4A3AFF'
      strokeWidth={1.4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(PasswordIcon);
export { Memo as PasswordIcon };
