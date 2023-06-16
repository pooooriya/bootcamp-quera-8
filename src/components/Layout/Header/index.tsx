import { QueraLogo } from "assets";
import Image from "next/image";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = (): JSX.Element => {
  return (
    <Stack
      className="flex flex-row bg-gray-200 p-5"
      justifyContent="space-between"
      alignItems="center"
      direction="row"
    >
      <Stack>
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
      <Stack spacing={3} direction="row">
        <Stack>
          <Button>ثبت نام</Button>
        </Stack>
        <Stack>
          <Button variant="outlined" color="primary">
            عضویت
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
