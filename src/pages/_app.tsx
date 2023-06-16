import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import "style/tailwind.css";
import { QueraKalaTheme } from "theme";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider } from "react-query";
import { queryClient } from "services/queryClient";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={QueraKalaTheme}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
