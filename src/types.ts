interface SVGComponentProps {
  width?: number;
  height?: number;
  viewBox?: string;
  className?: string;
}

type Envs =
  | 'GITHUB_CLIENT_ID'
  | 'GITHUB_SECRET_ID'
  | 'GOOGLE_CLIENT_ID'
  | 'GOOGLE_CLIENT_SECRET'
  | 'NEXT_PUBLIC_SECRET'
  | 'NEXTAUTH_URL'
  | 'NEXTAUTH_SECRET';

export type { SVGComponentProps, Envs };
