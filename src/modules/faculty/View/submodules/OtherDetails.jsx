import { Heading } from "@chakra-ui/react";
import { P } from "@components/Text";
import React from "react";

export const OtherDetails = ({ editorialExperience, personalWebsite }) => {
  if (!editorialExperience && !personalWebsite) return <></>;

  return (
    <section
      id="other-information"
      className="h-screen p-2 md:p-10 flex flex-col justify-center gap-5"
    >
      <Heading>Other Information</Heading>

      <div>
        <P>{editorialExperience}</P>
        <P>{personalWebsite}</P>
      </div>
    </section>
  );
};
