declare module 'react-rating-stars-component' {
    import { ComponentType } from 'react';
  
    interface ReactStarsProps {
      count?: number;
      onChange?: (newRating: number) => void;
      size?: number;
      isHalf?: boolean;
      emptyIcon?: JSX.Element;
      halfIcon?: JSX.Element;
      fullIcon?: JSX.Element;
      activeColor?: string;
      value?: number;
      edit?: boolean;
    }
  
    const ReactStars: ComponentType<ReactStarsProps>;
  
    export default ReactStars;
  }
  