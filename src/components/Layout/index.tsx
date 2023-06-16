import { Stack } from "@mui/system";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface ILayoutProps extends React.PropsWithChildren {}

export const Layout: React.FC<ILayoutProps> = ({ children }): JSX.Element => {
  return (
    <Stack>
      <Header />
      <Stack minHeight="100vh">{children}</Stack>
      <Footer />
    </Stack>
  );
};
