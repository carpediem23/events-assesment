import {
  createContext,
  useReducer,
  useContext,
  useEffect,
  FC,
  ReactNode,
} from 'react';
import i18next from 'i18next';
import StorageService from './services/Storage.service';
import {
  IAppState,
  TLanguage,
  EActionTypes,
  TAppAction,
  IAppContext,
} from './types/index.type';

const initialState: IAppState = {
  language: 'en',
  isDarkMode: (StorageService.get('isDarkMode') as boolean) || false,
};

const appReducer = (state: IAppState, action: TAppAction): IAppState => {
  switch (action.type) {
    case EActionTypes.SET_LANGUAGE:
      return { ...state, language: action.payload };
    case EActionTypes.TOGGLE_DARK_MODE:
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
};

const AppContext = createContext<IAppContext | null>(null);

export const AppContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const changeLanguage = (lang: TLanguage) => {
    i18next.changeLanguage(lang);
    dispatch({ type: EActionTypes.SET_LANGUAGE, payload: lang });
  };

  const toggleDarkMode = () => {
    dispatch({ type: EActionTypes.TOGGLE_DARK_MODE });
    StorageService.set('isDarkMode', !state.isDarkMode);
  };

  useEffect(() => {
    const currentLang = i18next.language as TLanguage;
    dispatch({ type: EActionTypes.SET_LANGUAGE, payload: currentLang });
  }, []);

  useEffect(() => {
    if (state.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [state.isDarkMode]);

  return (
    <AppContext.Provider value={{ state, changeLanguage, toggleDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppState must be used within AppContextProvider');
  }
  return context;
};
