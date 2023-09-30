import { MovieCardPop } from '@/components';
import QueryClientProviderConfig from '@/lib/QueryClientProviderConfig';
import PortalProvider from '@/lib/providers/PortalProvider';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProviderConfig>
      <PortalProvider>
        <Component {...pageProps} />
        <MovieCardPop />
      </PortalProvider>
    </QueryClientProviderConfig>
  );
}
