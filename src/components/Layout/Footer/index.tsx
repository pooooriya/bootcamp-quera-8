import { Typography } from "@mui/material";

interface IFooterProps {}

export const Footer: React.FC<IFooterProps> = (): JSX.Element => {
  return (
    <div className="p-2 bg-gray-200">
      <Typography variant="subtitle1" textAlign="center">
        ساخته‌شده با افتخار در ایران | ۱۳۹۴ - ۱۴۰۲
      </Typography>
    </div>
  );
};
