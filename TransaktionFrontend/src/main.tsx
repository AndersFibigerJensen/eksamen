import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import {ChakraProvider} from '@chakra-ui/react';
import router from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as Sentry from "@sentry/react";

const queryClient = new QueryClient({
});

Sentry.init({
  dsn: "https://180125cbd91141164be9de84b3d9bf0f@o4510504219312128.ingest.de.sentry.io/4510504253390928",
  tracesSampleRate: 1.0,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Sentry.ErrorBoundary>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          </QueryClientProvider>
       </ChakraProvider>
       </Sentry.ErrorBoundary>
  </StrictMode>,
)





