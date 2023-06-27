function createEnum<T extends {[P in keyof T]: P}>(o: T) {
  return o;
}

const ROUTES = createEnum({
  PRODUCT_SCREEN: 'PRODUCT_SCREEN',
  LOGIN: 'LOGIN',
});

export default ROUTES;
