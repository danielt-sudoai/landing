import { TypeAvailableLanguagesMapped } from "./type-Available-Language";

export type TypePricing = {
  isMostPopular?: boolean;
  currency?: {
    currency: TypeAvailableLanguagesMapped;
    recurring: TypeAvailableLanguagesMapped;
  };
  title: TypeAvailableLanguagesMapped;
  price: TypeAvailableLanguagesMapped;
  features: TypeAvailableLanguagesMapped;
  button: TypeAvailableLanguagesMapped;
};
