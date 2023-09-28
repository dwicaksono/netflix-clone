import { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalWithChildrenProps {
  children: React.ReactNode;
}

const Portal: FC<any> = ({ children }: PortalWithChildrenProps) => {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Create a new div element for the portal
    const newPortalRoot = document.createElement('div');
    newPortalRoot.setAttribute('id', 'portal-root');
    document.body.appendChild(newPortalRoot);

    // Set the portal root element in the state
    setPortalRoot(newPortalRoot);

    // Clean up the portal root element when the component unmounts
    return () => {
      document.body.removeChild(newPortalRoot);
    };
  }, []);

  if (!portalRoot) return null;

  return createPortal(<>{children}</>, portalRoot);
};

export default Portal;
