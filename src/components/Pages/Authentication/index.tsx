import React, { useContext, useState } from "react";
import { Stack } from "@mui/material";
import { Challenge } from "./Steps/Challenge";
import { Verify } from "./Steps/Verify";
import { useRouter } from "next/dist/client/router";
import UseLogin from "services/Mutations/useLogin";
import { Fetcher } from "config/axios";
import { AppContext } from "context/store";

export enum AuthenticationStep {
  Challange = 1,
  Verify,
}

export const Authentication: React.FC = (): JSX.Element => {
  const [step, setStep] = useState<AuthenticationStep>(
    AuthenticationStep.Challange
  );
  const { setUser } = useContext(AppContext);
  const [state, setState] = useState<any>();
  const router = useRouter();
  const mutation = UseLogin();
  return (
    <Stack>
      {(() => {
        switch (step) {
          case AuthenticationStep.Challange:
            return (
              <Challenge
                onNext={(data) => {
                  setState({ ...state, ...data });
                  setStep(AuthenticationStep.Verify);
                }}
              />
            );
          case AuthenticationStep.Verify:
            return (
              <Verify
                onNext={(data) => {
                  setState({ ...state, ...data });
                  mutation.mutate(
                    {
                      username: "johnd",
                      password: "m38rmF$",
                    },
                    {
                      onSuccess: (resp: any) => {
                        if (resp.token) {
                          Fetcher.defaults.headers.common.Authorization =
                            "Bearer " + resp?.token;
                          localStorage.setItem("token", resp.token);
                          localStorage.setItem("username", state.username);
                          setUser({
                            isAuthenticated: true,
                            username: state.username,
                            token: resp.token,
                          });
                          router.push({
                            pathname: "/",
                          });
                        }
                      },
                    }
                  );
                }}
              />
            );
          default:
            return null;
        }
      })()}
    </Stack>
  );
};
