import { Heading } from "@chakra-ui/react";
import { P } from "@components/Text";
import React from "react";

export const PostDoctoralExperience = ({ postDoctoralExperience }) => {
  if (!postDoctoralExperience) return <></>;

  return (
    <section
      id="post-doctoral-experiences"
      className="w-full h-screen p-2 md:p-10 flex flex-col justify-center gap-5"
    >
      <Heading>Post Doctoral Experiences</Heading>

      <P>{postDoctoralExperience}</P>
    </section>
  );
};
