<svg
  id='Layer_1'
  data-name='Layer 1'
  xmlns='http://www.w3.org/2000/svg'
  viewBox='0 0 48 48'
></svg>;

import type { SVGComponentProps } from '@/types';

export default function UnderConstructionIcon(props: SVGComponentProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={props.width !== undefined ? props.width : 48}
      height={props.height !== undefined ? props.width : 48}
      viewBox={props.viewBox !== undefined ? props.viewBox : '0 0 48 48'}
      className={props.className}
    >
      <defs></defs>
      <path className='under-construction-svg' d='M4 14h7l3 14 15 9' />
      <path
        className='under-construction-svg'
        d='M12 17h32L25.84 35.16M17 30l-.1 8 4-5'
      />
      <circle className='under-construction-svg' cx='32' cy='39' r='3' />
      <path
        className='under-construction-svg'
        d='M14 13h6v4h-6zM20 13h6v4h-6zM26 13h6v4h-6zM23 9h6v4h-6z'
      />
      <path className='under-construction-svg' d='M-10-622h680V58H-10z' />
    </svg>
  );
}
