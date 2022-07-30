# LF-PRODUCT-CARD

Npm package deploy test using tsdx

```
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons
} from 'lf-product-card'
```

```
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    // maxCount: 10,
  }}
>
  {({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
