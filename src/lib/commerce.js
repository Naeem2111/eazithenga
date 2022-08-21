import Commerce from "@chec/commerce.js";

export const commerce = new Commerce(
  process.env.REACT_APP_CHEC_NELLOKICKS_PUBLIC_KEY,
  true
);
