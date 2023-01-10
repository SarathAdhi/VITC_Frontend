import { LinkedItem } from "@components/LinkedItem";
import { SlideOver } from "@elements/SlideOver";
import { MenuIcon } from "@heroicons/react/outline";
import { PageWrapper } from "@layouts/PageWrapper";
import axios from "@lib/axios";
import { ViewFacultyDetails } from "@modules/faculty/View";
import { getIdFormat } from "@utils/format";
import clsx from "clsx";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const sidebarLinks = [
  { dbName: "", name: "About" },
  { dbName: "educationalDetails", name: "Educational Details" },
  { dbName: "postDoctoralExperience", name: "Post Doctoral Experiences" },
  { dbName: "researchDetails", name: "Research Details" },
  {
    dbName: "ongoingConsultancyProjectDetails",
    name: "Ongoing Consultancy Project",
  },
  {
    dbName: "completedConsultancyProjectDetails",
    name: "Completed Consultancy Project",
  },
  { dbName: "ongoingFundedProjectDetails", name: "Ongoing Funded Project" },
  { dbName: "completedFundedProjectDetails", name: "Completed Funded Project" },
  { dbName: "patentPublishedDetails", name: "Patent Published" },
  { dbName: "patentGrantedDetails", name: "Patent Granted" },
  { dbName: "bookPublishedDetails", name: "Book Published" },
  { dbName: "awardDetails", name: "Awards & Recognitions" },
  {
    dbName: "majorInternationalCollaborationsDetails",
    name: "Major International Collaborations",
  },
  {
    dbName: "majorIndustryCollaborationsDetails",
    name: "Major Industry Collaborations",
  },
  { dbName: "", name: "Other Information" },
];

const LeftSideBar = ({ className, image, sidebarNavLinks }) => {
  const [currentTabKey, setCurrentTabKey] = useState(sidebarNavLinks[0].key);
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  const NavbarContent = () => (
    <>
      <div className="hidden md:flex w-44 h-44 rounded-full border-[#4b6fa5] border-4">
        <img src={image} className="w-full h-full rounded-full" />
      </div>

      <div className="flex flex-col">
        {sidebarNavLinks.map(({ key, href }) => (
          <LinkedItem
            key={key}
            href={`#${key}`}
            className={clsx(
              currentTabKey === key && "!text-white",
              "md:font-bold md:text-lg text-[#ffffff8c] duration-200 hover:text-[#ffffffbf] p-2 md:p-0"
            )}
            onClick={() => setCurrentTabKey(key)}
          >
            {href}
          </LinkedItem>
        ))}
      </div>
    </>
  );

  return (
    <>
      <div
        className={clsx(
          className,
          "z-50 sticky top-0 h-screen bg-[#004c93] hidden md:grid gap-10 justify-items-center place-content-center"
        )}
      >
        <NavbarContent />
      </div>

      <div
        className={clsx(
          className,
          "z-50 sticky top-0 grid md:hidden gap-2 bg-[#004c93]"
        )}
      >
        <div className="flex items-center justify-between">
          <img src="/assets/vitlogo.png" className="h-14" />

          <button
            onClick={() => setIsMobileNavbarOpen((pre) => !pre)}
            className="mx-2 border border-[#ffffff8c] py-1 px-2 rounded"
          >
            <MenuIcon className="w-6 h-6 text-[#ffffff8c]" />
          </button>
        </div>

        <SlideOver
          isOpen={isMobileNavbarOpen}
          setIsOpen={setIsMobileNavbarOpen}
        >
          <NavbarContent />
        </SlideOver>
      </div>
    </>
  );
};

const ViewStaff = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [facultyDetails, setFacultyDetails] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  const fetchFacultyDetails = async () => {
    const faculty = await axios.get(`/faculty/` + getIdFormat(id));

    setFacultyDetails(faculty);
    setIsLoading(false);
  };

  useEffect(() => {
    if (id) fetchFacultyDetails();
  }, [id]);

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (!facultyDetails) return <p className="text-center">Staff not found</p>;

  const facultyDbKeys = Object.entries(facultyDetails);

  console.log({ facultyDetails });

  const sidebarNavLinks = sidebarLinks
    .map(({ dbName, name }) => {
      const key = name.toLowerCase().replaceAll(" ", "-");

      const isDbKeyPresent = facultyDbKeys.some(
        (dbKey) =>
          dbKey[0] === dbName &&
          (Array.isArray(dbKey[1]) ? dbKey[1].length > 0 : dbKey[1] !== "")
      );

      if (isDbKeyPresent || dbName === "")
        return {
          key,
          href: name,
        };
    })
    .filter((link) => link !== undefined);

  return (
    <PageWrapper title="" className="w-full flex flex-col md:flex-row">
      <LeftSideBar
        className="w-full md:w-[300px] flex-shrink-0"
        {...facultyDetails}
        router={router}
        sidebarNavLinks={sidebarNavLinks}
      />

      <ViewFacultyDetails facultyDetails={facultyDetails} />
    </PageWrapper>
  );
};

export default ViewStaff;
