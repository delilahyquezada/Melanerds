import { memo, SVGProps } from 'react';

const SocialMediaIconSquareFacebookI = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.0386 15.1883V8.40881H8.42873L8.78657 5.76671H6.03853V4.07984C6.03853 3.31489 6.26162 2.79362 7.41383 2.79362L8.8833 2.79296V0.429889C8.62915 0.397748 7.75679 0.325793 6.74202 0.325793C4.62327 0.325793 3.17274 1.55705 3.17274 3.81825V5.76671H0.776481V8.40881H3.17274V15.1882H6.0386V15.1883Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(SocialMediaIconSquareFacebookI);
export { Memo as SocialMediaIconSquareFacebookI };
