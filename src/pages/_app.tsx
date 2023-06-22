import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import "style/tailwind.css";
import { QueraKalaTheme } from "theme";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider } from "react-query";
import { queryClient } from "services/queryClient";
import AppContextProvider from "context/store";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={QueraKalaTheme}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </ThemeProvider>
      </QueryClientProvider>
    </AppContextProvider>
  );
}

export default MyApp;
