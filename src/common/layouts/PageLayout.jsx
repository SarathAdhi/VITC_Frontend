import React from "react";
import clsx from "clsx";
import { PageWrapper } from "./PageWrapper";

export const PageLayout = ({
  title = "",
  children,
  className = "",
  LeftSideBar = null,
}) => {
  return (
    <PageWrapper title={title} className="flex flex-col items-center">
      <div
        className={clsx(
          "w-full flex-1 max-w-[1440px] px-2 sm:px-5",
          LeftSideBar && "gap-5 md:grid md:grid-cols-14"
        )}
      >
        {LeftSideBar && (
          <div className="z-40 sticky top-2 md:col-span-4 xl:col-span-3 ">
            <LeftSideBar />
          </div>
        )}

        <div
          className={clsx(
            "w-full",
            LeftSideBar && "col-span-10 xl:col-span-11",
            className
          )}
        >
          {children}
        </div>
      </div>
    </PageWrapper>
  );
};
