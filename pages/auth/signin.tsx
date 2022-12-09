import {
  getProviders,
  signIn,
  getCsrfToken,
  useSession,
} from "next-auth/react";

import { InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

export const getServerSideProps = async (context: any) => {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);
  return {
    props: { providers, csrfToken },
  };
};

const SignIn = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: session } = useSession();
  console.log(session);
  const router = useRouter();
  if (session) {
    router.push("/");
  }
  return (
    <div className="">
      <h2 className="text-center text-3xl">Sign in with:</h2>
      <div className="container border-2 flex flex-col max-w-xs m-auto">
        {providers
          ? Object.values(providers).map((provider, i) => {
              if (provider.id !== "email") {
                return (
                  <button
                    key={i}
                    onClick={() => signIn(provider.id)}
                    className="border-2 m-2"
                  >
                     {provider.id}
                  </button>
                );
              }
            })
          : ""}
      </div>
    </div>
  );
};

export default SignIn;
