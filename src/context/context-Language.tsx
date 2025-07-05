"use client";

import { createContext, useContext, useState } from "react";
import { TypeAvailableLanguages } from "../types/type-Available-Language";

type typeContextLanguage = {
  l: TypeAvailableLanguages;
  updateLanguage: (language: TypeAvailableLanguages) => void;
};

const ContextLanguage = createContext<typeContextLanguage>({
  l: "it_IT",
  updateLanguage: () => {},
});

export const useContextLanguage = () => useContext(ContextLanguage);

export const ContextLanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Variables ------------------------
  // UseStates ---------------------------
  const [l, setLanguage] = useState<TypeAvailableLanguages>("it_IT");
  // UseEffects -----------------------
  // Functions ------------------------
  const updateLanguage = (newLanguage: TypeAvailableLanguages) => {
    setLanguage(newLanguage);
  };
  // Return ---------------------------
  return (
    <ContextLanguage.Provider value={{ l, updateLanguage }}>
      {children}
    </ContextLanguage.Provider>
  );
};
