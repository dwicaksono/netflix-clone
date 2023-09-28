import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      onError: (error) => {
        console.log(error, 'from default options');
      },
    },
    mutations: {
      onError: (error) => {
        console.log(error, 'from default options');
      },
    },
  },
});
export default function QueryClientProviderConfig({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
