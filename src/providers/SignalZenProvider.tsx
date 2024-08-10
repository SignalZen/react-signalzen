import React, { ReactNode } from 'react';
import SignalZenContext from './../contexts/SignalZenContext';
import { useSignalZen } from '../hooks/useSignalZen';

export default ({
  children,
  token,
  options,
}: {
  children: ReactNode;
  token: string;
  options: Record<string, any>;
}) => {
  const value = useSignalZen(token, options);

  return (
    <SignalZenContext.Provider value={value}>{children}</SignalZenContext.Provider>
  );
};
