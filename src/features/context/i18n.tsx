import { ReactNode, createContext, useState } from "react";
import { LANGUAGES  } from "shared/types/i18n";
import { i18nKeys } from "./i18nKeys";

export type LanguageContextParams = {
    language: LANGUAGES; 
    lacales: (typeof i18nKeys) [keyof typeof i18nKeys];
    setLanguage: (val: LANGUAGES) => void;
};

export const LanguageContext = createContext<LanguageContextParams | null>(null);



export const LanguageProvider = ({children}: {children: ReactNode}) => {
    const[language, setLanguage] = useState<LANGUAGES>(LANGUAGES.RU)

    return <LanguageContext.Provider value={{ language, setLanguage, lacales: i18nKeys[language] }}>
    {children}
    </LanguageContext.Provider>;
};