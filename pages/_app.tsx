import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserProvider from "@/contexts/UserContext";

const inter = Inter({
  subsets: ["latin"],
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <main className={inter.className}>
            <Component {...pageProps} />
          </main>
        </UserProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
