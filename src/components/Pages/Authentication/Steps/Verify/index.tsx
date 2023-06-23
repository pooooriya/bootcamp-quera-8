import { Button, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { IStep } from "../../Types";

const validationSchema = yup.object({
  password: yup.string().required("کد ارسال شده الزامی است"),
});
type FormProps = {
  password: string;
};
interface IVerifyProps extends IStep<FormProps> {}
export const Verify: React.FC<IVerifyProps> = ({ onNext }): JSX.Element => {
  const formik = useFormik<FormProps>({
    initialValues: {
      password: "",
    },
    validationSchema,
    onSubmit(values) {
      onNext(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack minHeight="100vh" justifyContent="center" alignItems="center">
        <Stack width={300} spacing={3}>
          <Typography
            id="password"
            textAlign="center"
            fontWeight={700}
            fontSize={20}
          >
            کد ارسال شده برای شماره شما
          </Typography>
          <TextField
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            label="کد ارسال شده"
            name="password"
            id="password"
          />
          <Button type="submit" variant="contained">
            ورود به کئورا کالا
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};
