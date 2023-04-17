import { memo, SVGProps } from 'react';

const EmailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M14.1377 1.91276V8.79355C14.1377 9.24977 13.9565 9.68731 13.6339 10.0099C13.3113 10.3325 12.8738 10.5137 12.4175 10.5137H2.09636C1.64014 10.5137 1.2026 10.3325 0.880001 10.0099C0.557402 9.68731 0.376168 9.24977 0.376168 8.79355V1.91276'
      stroke='black'
      strokeWidth={1.15597}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14.1377 1.91283C14.1377 1.4566 13.9565 1.01906 13.6339 0.696465C13.3113 0.373866 12.8738 0.192631 12.4175 0.192631H2.09636C1.64014 0.192631 1.2026 0.373866 0.880001 0.696465C0.557402 1.01906 0.376168 1.4566 0.376168 1.91283L6.34525 5.63992C6.61864 5.81079 6.93455 5.90139 7.25695 5.90139C7.57935 5.90139 7.89526 5.81079 8.16866 5.63992L14.1377 1.91283Z'
      stroke='black'
      strokeWidth={1.15597}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(EmailIcon);
export { Memo as EmailIcon };
