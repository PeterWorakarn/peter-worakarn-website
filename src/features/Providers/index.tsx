import React from 'react';
import { QueryClientProvider, QueryClient, setLogger } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, refetchOnMount: 'always' },
  },
});


const Providers: React.FC = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        {children}
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default Providers;