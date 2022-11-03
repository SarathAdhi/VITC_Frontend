import { Heading } from "@chakra-ui/react";
import { P } from "@components/Text";
import { CheckIcon } from "@heroicons/react/outline";
import React from "react";

export const InternationalCollaboration = ({
  majorInternationalCollaborationsDetails = [],
}) => {
  if (majorInternationalCollaborationsDetails.length === 0) return <></>;

  return (
    <section
      id="major-international-collaborations"
      className="h-screen p-2 md:p-10 flex flex-col justify-center gap-5"
    >
      <Heading>Major International Collaborations</Heading>

      {majorInternationalCollaborationsDetails.map((detail, index) => (
        <P key={detail + index} className="flex items-center gap-1">
          <CheckIcon className="w-5 h-5" />
          {detail}
        </P>
      ))}
    </section>
  );
};
