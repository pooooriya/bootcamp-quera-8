import { QueraLogo } from "assets";
import Image from "next/image";
import { Button, Fade, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Link from "next/link";
import { AppContext } from "context/store";
import { useContext, useState } from "react";
import { Basket } from "components/Base/Basket";
interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = (): JSX.Element => {
  const { User } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  return (
    <Stack
      className="flex flex-row bg-gray-200 p-5"
      justifyContent="space-between"
      alignItems="center"
      direction="row"
    >
      <Stack
        component={Link}
        href="/"
        sx={{
          cursor: "pointer",
        }}
      >
        <Image
          src={QueraLogo}
          alt={"لوگوی کئورا کالا"}
          width={100}
          height={50}
        />
      </Stack>
      <Stack
        spacing={2}
        direction="row"
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <Button>محصولات</Button>
        <Button>کالج</Button>
        <Button>درباره ی ما</Button>
        <Button>ارتباط با ما</Button>
      </Stack>
      {User.isAuthenticated ? (
        <>
          <Stack position="relative">
            <Stack
              component="a"
              onClick={() => setOpen(!open)}
              sx={{
                userSelect: "none",
                cursor: "pointer",
              }}
            >
              سبد خرید
            </Stack>
            {open && <Basket />}
          </Stack>
        </>
      ) : (
        <Stack spacing={3} direction="row">
          <Stack>
            <Button>ورود</Button>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};
