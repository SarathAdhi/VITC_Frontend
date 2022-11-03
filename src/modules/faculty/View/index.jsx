import React from "react";
import { About } from "./submodules/About";
import { Awards } from "./submodules/Awards";
import { BookPublished } from "./submodules/BookPublished";
import { CompletedConsultancyProject } from "./submodules/CompletedConsultancyProject";
import { CompletedFundedProject } from "./submodules/CompletedFundedProject";
import { EducationalDetails } from "./submodules/EducationalDetails";
import { IndustryCollaboration } from "./submodules/IndustryCollaboration";
import { InternationalCollaboration } from "./submodules/InternationalCollaboration";
import { OnGoingConsultancyProject } from "./submodules/OnGoingConsultancyProject";
import { OnGoingFundedProject } from "./submodules/OnGoingFundedProject";
import { OtherDetails } from "./submodules/OtherDetails";
import { PatentGranted } from "./submodules/PatentGranted";
import { PatentPublished } from "./submodules/PatentPublished";
import { PostDoctoralExperience } from "./submodules/PostDoctoralExperience";
import { ResearchDetails } from "./submodules/ResearchDetails";

export const ViewFacultyDetails = ({ facultyDetails }) => {
  return (
    <div className="w-full flex flex-col md:col-span-10 lg:col-span-11 xl:col-span-12 2xl:col-span-14">
      <About {...facultyDetails} />

      <EducationalDetails {...facultyDetails} />

      <PostDoctoralExperience {...facultyDetails} />

      <ResearchDetails {...facultyDetails.researchDetails} />

      <OnGoingConsultancyProject {...facultyDetails} />

      <CompletedConsultancyProject {...facultyDetails} />

      <OnGoingFundedProject {...facultyDetails} />

      <CompletedFundedProject {...facultyDetails} />

      <PatentPublished {...facultyDetails} />

      <PatentGranted {...facultyDetails} />

      <BookPublished {...facultyDetails} />

      <Awards {...facultyDetails} />

      <InternationalCollaboration {...facultyDetails} />

      <IndustryCollaboration {...facultyDetails} />

      <OtherDetails {...facultyDetails} />
    </div>
  );
};
