import React from "react";
import Breadcrumbs from "nextjs-breadcrumbs";
import { useRouter } from "next/router";

const BreadCrumb = () => {
  const router = useRouter();
  const paths = router.asPath.split("/");
  console.log(paths[-1]);
  const isMaterial: boolean = Boolean(
    paths.find((path) => path === "material")
  );
  const labelHandler = (title: string): JSX.Element => {
    if (title === paths[paths.length - 1]) {
      return <div className="text-lg m-2">{title}</div>;
    } else {
      return (
        <div className="flex flex-wrap text-lg">
          <div className="m-2 text-[#00419e]">{title}</div>
          <img src="/arrow.svg" />
        </div>
      );
    }
  };

  return (
    <div className="sticky top-16 mt-32 bg-white">
      <Breadcrumbs
        listClassName="flex flex-wrap"
        inactiveItemClassName="m-1"
        activeItemClassName="m-1"
        rootLabel="Home"
        omitRootLabel={true}
        omitIndexList={isMaterial ? [0, 2, 3] : [0, 2]}
        transformLabel={(title) => labelHandler(title)}
      />
    </div>
  );
};

export default BreadCrumb;
