import { Heading } from "@chakra-ui/react";
import { P } from "@components/Text";
import React from "react";

export const Awards = ({ awardDetails = [] }) => {
  if (awardDetails.length === 0) return <></>;

  return (
    <section
      id="awards-&-recognitions"
      className="h-screen p-2 md:p-10 flex flex-col justify-center gap-5"
    >
      <Heading>Award & Recognitions</Heading>

      <div className="grid gap-2">
        {awardDetails.map((award, index) => (
          <P key={award + index} className="flex items-center gap-1">
            <img src="/assets/faculty/trophy.svg" className="w-5 h-5" />
            {award}
          </P>
        ))}
      </div>
    </section>
  );
};
