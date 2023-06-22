import { Grid } from "@mui/material";
import { Card } from "components/Base/Card";
import { Layout } from "components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useCategoryDetail from "services/Queries/useCategoryDetail";

export const CategoryDetail = (): JSX.Element => {
  const router = useRouter();
  const [slug, setSlug] = useState("");
  const query = useCategoryDetail(slug);

  useEffect(() => {
    if (router.isReady) {
      setSlug(String(router.query.slug));
    }
  }, [router.isReady, router.query.slug]);

  return (
    <Layout>
      <Grid container gap={3} justifyContent="center" alignItems="center">
        {query.data?.map((item: any) => (
          <Grid item xs={2} key={item.id}>
            <Link href={`/product/${item.id}`}>
              <Card {...item} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};
