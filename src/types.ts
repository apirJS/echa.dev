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

  interface User {
    id: number;
    name: string;
    imageUrl: string;
  }
  
  interface Comment {
    id: number;
    text: string;
    userId: number;
  }

export type { SVGComponentProps, Envs };
