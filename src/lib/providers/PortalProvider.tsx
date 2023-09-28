/* eslint-disable no-unused-vars */
import React, { ReactNode, useCallback, useState } from 'react';

export interface PortalConsumerProps {
  setPortal: (anchor: HTMLElement | null, video: any | null) => void;
}
export interface PortalDataConsumerProps {
  anchorElement: HTMLElement | null;
  miniModalMediaData: any | null;
}

export function createSafeContex<TValue extends {} | null>() {
  const context = React.createContext<TValue | undefined>(undefined);

  function useContext() {
    const value = React.useContext(context);
    if (value === undefined) {
      throw new Error('useContext must be inside a Provider with a value');
    }
    return value;
  }

  return [useContext, context.Provider] as const;
}

export const [usePortal, Provider] =
  createSafeContex<PortalConsumerProps['setPortal']>();

export const [usePortalData, PortalDataProvider] =
  createSafeContex<PortalDataConsumerProps>();

export default function PortalProvider({ children }: { children: ReactNode }) {
  const [anchorElement, setAnchorElement] = useState<any | null>(null);
  const [miniModalMediaData, setMiniModalMediaData] = useState<any | null>(
    null,
  );
  const handleChangePortal = useCallback(
    (anchor: HTMLElement | null, video: any | null) => {
      setAnchorElement(anchor);
      setMiniModalMediaData(video);
    },
    [],
  );
  return (
    <Provider value={handleChangePortal}>
      <PortalDataProvider
        value={{
          anchorElement,
          miniModalMediaData,
        }}
      >
        {children}
      </PortalDataProvider>
    </Provider>
  );
}
