import { memo, SVGProps } from 'react';

const MarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.9219 6.39519C11.9219 10.8365 7.37294 13.5726 6.42762 14.0938C6.37525 14.1227 6.31641 14.1378 6.25661 14.1378C6.1968 14.1378 6.13797 14.1227 6.0856 14.0938C5.13956 13.5726 0.592068 10.8365 0.592068 6.39519C0.592068 2.85464 2.7164 0.376246 6.25696 0.376246C9.79752 0.376246 11.9219 2.85464 11.9219 6.39519Z'
      stroke='black'
      strokeWidth={1.15597}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M3.42455 6.04097C3.42455 6.79218 3.72296 7.51262 4.25415 8.04381C4.78534 8.575 5.50578 8.87341 6.25699 8.87341C7.0082 8.87341 7.72865 8.575 8.25983 8.04381C8.79102 7.51262 9.08944 6.79218 9.08944 6.04097C9.08944 5.28976 8.79102 4.56931 8.25983 4.03813C7.72865 3.50694 7.0082 3.20852 6.25699 3.20852C5.50578 3.20852 4.78534 3.50694 4.25415 4.03813C3.72296 4.56931 3.42455 5.28976 3.42455 6.04097V6.04097Z'
      stroke='black'
      strokeWidth={1.15597}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(MarkIcon);
export { Memo as MarkIcon };
