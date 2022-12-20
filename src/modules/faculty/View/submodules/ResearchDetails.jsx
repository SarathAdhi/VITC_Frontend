import { Heading } from "@chakra-ui/react";
import { H3, P } from "@components/Text";
import { CheckIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";

export const ResearchDetails = ({
  specialization,
  orcid,
  scopus,
  googleScholar,
  hIndex,
  i10Index,
}) => {
  return (
    <section
      id="research-details"
      className="h-screen p-2 md:p-10 flex flex-col justify-center gap-5"
    >
      <Heading>Research Details</Heading>

      <div className="w-full flex items-start justify-between ">
        <div className="grid gap-5">
          <div>
            <H3 className="text-[#6C757D] !text-lg">Areas of Specialization</H3>

            <P className="grid ">
              {specialization.map((spe) => (
                <span key={spe} className="flex items-center gap-1">
                  <CheckIcon className="w-5 h-5" />
                  {spe}
                </span>
              ))}
            </P>
          </div>

          <div className="grid gap-4">
            <div className="flex items-center gap-5">
              <Image
                src={"/assets/faculty/orcid.png"}
                className="object-contain"
                width={"112px"}
                height={"40px"}
              />

              <a href={orcid}>{orcid}</a>
            </div>

            <div className="flex items-center gap-5">
              <Image
                src={"/assets/faculty/scopus.png"}
                className="object-contain"
                width={"112px"}
                height={"40px"}
              />

              <a href={scopus}>{scopus}</a>
            </div>

            <div className="flex items-center gap-5">
              <Image
                src={"/assets/faculty/google-scholar.png"}
                className="object-contain"
                width={"112px"}
                height={"40px"}
              />

              <a href={googleScholar}>{googleScholar}</a>
            </div>

            <div className="flex items-center gap-5">
              <Image
                src={"/assets/faculty/hindex.png"}
                className="object-contain"
                width={"112px"}
                height={"40px"}
              />
              <P>: {hIndex}</P>
            </div>

            <div className="flex items-center gap-5">
              <Image
                src={"/assets/faculty/i10index.png"}
                className="object-contain"
                width={"112px"}
                height={"40px"}
              />
              <P>: {i10Index}</P>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
