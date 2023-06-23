import { Button, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { IStep } from "../../Types";

const validationSchema = yup.object({
  username: yup
    .string()
    .min(11, "شماره تلفن همراه شما اشتباه است")
    .required("شماره تلفن همراه الزامی میباشد"),
});

type FormProps = {
  username: string;
};

interface IChallengeProps extends IStep<FormProps> {}

export const Challenge: React.FC<IChallengeProps> = ({
  onNext,
}): JSX.Element => {
  const formik = useFormik<FormProps>({
    initialValues: {
      username: "",
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
          <Typography textAlign="center" fontWeight={700} fontSize={20}>
            ورود به کئورا کالا
          </Typography>
          <TextField
            name="username"
            id="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            label="تلفن همراه"
            inputProps={{
              maxlength: 11,
            }}
            helperText={formik.touched.username && formik.errors.username}
            error={formik.touched.username && Boolean(formik.errors.username)}
          />
          <Button type="submit" variant="contained">
            ادامه
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};
