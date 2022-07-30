import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductCardTitleProps } from '../components/ProductTitle';
import { Props as ProductCardImageProps } from '../components/ProductImage';
import { Props as ProductCardButtonProps } from '../components/ProductButtons';

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  maxCount?: number;
  product: Product;

  increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (Props: ProductCardTitleProps) => JSX.Element;
  Image: (Props: ProductCardImageProps) => JSX.Element;
  Buttons: (Props: ProductCardButtonProps) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: (value: number) => void;
  reset: () => void;
}
