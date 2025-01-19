export type TLanguage = 'en';

export interface IAppState {
  language: TLanguage;
  isDarkMode: boolean;
}

export interface IAppContext {
  state: IAppState;
  changeLanguage: (lang: TLanguage) => void;
  toggleDarkMode: () => void;
}

export enum EActionTypes {
  SET_LANGUAGE = 'SET_LANGUAGE',
  TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE',
}

export type TAppAction =
  | { type: EActionTypes.SET_LANGUAGE; payload: TLanguage }
  | { type: EActionTypes.TOGGLE_DARK_MODE };
