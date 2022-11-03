import { Heading } from "@chakra-ui/react";
import React from "react";

export const About = ({ name, designation, school, department }) => {
  return (
    <section
      id="about"
      className="h-screen p-2 md:p-10 flex flex-col justify-center"
    >
      <Heading size={"2xl"} color={"#004c93"}>
        {name}
      </Heading>

      <p className="text-lg text-[#6c757d]">
        <span className="font-bold">Designation : </span>
        <span className="font-medium">{designation}</span>
      </p>

      <p className="text-lg text-[#6c757d]">
        <span className="font-bold">School / Centre : </span>
        <span className="font-medium">{school}</span>
      </p>

      <p className="text-lg text-[#6c757d]">
        <span className="font-bold">Department : </span>
        <span className="font-medium">{department}</span>
      </p>
    </section>
  );
};
