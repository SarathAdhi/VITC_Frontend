import { Heading } from "@chakra-ui/react";
import { H4, H6, P } from "@components/Text";
import React from "react";

export const EducationalDetails = ({ educationalDetails = [] }) => {
  if (educationalDetails.length === 0) return <></>;

  return (
    <section
      id="educational-details"
      className="w-full h-screen p-2 md:p-10 flex flex-col justify-center gap-5"
    >
      <Heading>Educational Details</Heading>

      <div className="grid gap-4">
        {educationalDetails.map(
          ({ graduatedYear, university, degree }, index) => (
            <div
              key={index}
              className="w-full flex items-start justify-between"
            >
              <div>
                <H4 className="text-[#343a40] !font-bold">{university}</H4>
                <H6 className="text-[#6C757D]">{degree}</H6>
              </div>

              <P className="text-[#004c93] !font-medium">
                Graduated in {graduatedYear.split("-")[0]}
              </P>
            </div>
          )
        )}
      </div>
    </section>
  );
};
