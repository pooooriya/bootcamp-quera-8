import { Button, Grid, Stack, Typography } from "@mui/material";
import { Card, Layout } from "components";
import Link from "next/link";
import useCategories from "services/Queries/useCategories";
import useProducts from "services/Queries/useProducts";

export const HomePage: React.FC = (): JSX.Element => {
  const query = useCategories();
  const productQuery = useProducts();
  return (
    <Layout>
      <Stack py={3} px={1} spacing={1}>
        <Typography variant="h6" fontWeight={700}>
          دسته بندی محصولات
        </Typography>
        <Grid container gap={3} justifyContent="flex-start" alignItems="center">
          {query?.data?.map((item) => (
            <Link href={`/category/${item}`} key={item}>
              <Button key={item}>{item}</Button>
            </Link>
          ))}
        </Grid>
      </Stack>
      <Stack py={3} px={1} spacing={1}>
        <Typography variant="h6" fontWeight={700}>
          محصولات
        </Typography>
        <Grid container gap={3} justifyContent="center" alignItems="center">
          {productQuery?.data?.map((item) => (
            <Grid item xs={2} key={item.id}>
              <Link href={`/product/${item.id}`}>
                <Card {...item} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Layout>
  );
};
