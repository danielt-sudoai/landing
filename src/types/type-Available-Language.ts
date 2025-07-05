export type TypeMapKeysToAny<T> = {
  [K in keyof T]: any;
};

export type TypeAvailableLanguages = "it_IT" | "en_GB";

export type TypeAvailableLanguagesModel = {
  it_IT: any;
  en_GB: any;
};

export type TypeAvailableLanguagesMapped =
  TypeMapKeysToAny<TypeAvailableLanguagesModel>;
