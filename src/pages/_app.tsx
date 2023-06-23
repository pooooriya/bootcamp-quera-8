import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import "style/tailwind.css";
import { QueraKalaTheme } from "theme";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider } from "react-query";
import createCache from "@emotion/cache";
import { queryClient } from "services/queryClient";
import AppContextProvider from "context/store";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={QueraKalaTheme}>
          <CacheProvider value={cacheRtl}>
            <Component {...pageProps} />
          </CacheProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </ThemeProvider>
      </QueryClientProvider>
    </AppContextProvider>
  );
}

export default MyApp;
