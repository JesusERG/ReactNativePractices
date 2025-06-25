import { createContext } from 'react';

export const DisplayContext = createContext<{
  signedIn: boolean;
  setSignedIn: (signedIn: boolean) => void;
}>({
  signedIn: false,
  setSignedIn: () => {
    false;
  },
});
