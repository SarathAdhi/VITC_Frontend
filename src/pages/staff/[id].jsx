import { Heading } from "@chakra-ui/react";
import { LinkedItem } from "@elements/LinkedItem";
import { PageWrapper } from "@layouts/PageWrapper";
import { staffs } from "@utils/constants";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const sidebarNavLinks = [
  { key: "about", href: "About" },
  { key: "educational-details", href: "Educational Details" },
  { key: "research-details", href: "Research Details" },
  { key: "patents-published", href: "Patents Published" },
  { key: "international-collaborations", href: "International Collaborations" },
];

const LeftSideBar = ({ image, router }) => {
  const [currentTabKey, setCurrentTabKey] = useState(sidebarNavLinks[0].key);

  return (
    <div className="sticky top-0 w-full md:w-80 md:h-screen bg-[#004c93] grid gap-5 justify-items-center place-content-center">
      <div className="relative hidden md:flex w-28 h-40 rounded-[50%] border-[#4b6fa5] border-4">
        <Image src={image} layout="fill" className="rounded-[50%]" />
      </div>

      <div className="flex flex-col items-center">
        {sidebarNavLinks.map(({ key, href }) => (
          <LinkedItem
            key={key}
            href={`#${key}`}
            className={clsx(
              currentTabKey === key && "!text-white",
              "text-center font-bold text-lg text-[#ffffff8c] duration-200 hover:text-[#ffffffbf]"
            )}
            onClick={() => setCurrentTabKey(key)}
          >
            {href}
          </LinkedItem>
        ))}
      </div>
    </div>
  );
};

const ViewStaff = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [staffDetails, setStaffDetails] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const filterStaffs = staffs.find((staff) => `${staff.id}` === id);
      setStaffDetails(filterStaffs);
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) return <div className="text-center">Loading...</div>;
  if (!staffDetails) return <p className="text-center">Staff not found</p>;

  const { name, department, college, designation } = staffDetails;

  return (
    <PageWrapper title="" className="flex flex-col md:flex-row">
      <LeftSideBar {...staffDetails} router={router} />

      <div className="flex flex-col">
        <section
          id="about"
          className="h-screen p-10 flex flex-col justify-center"
        >
          <Heading color={"#004c93"}>{name}</Heading>

          <p className="text-lg text-[#6c757d]">
            <span className="font-bold">Designation : </span>
            <span className="font-medium">{designation}</span>
          </p>

          <p className="text-lg text-[#6c757d]">
            <span className="font-bold">School / Centre : </span>
            <span className="font-medium">
              School of Computer Science and Engineering
            </span>
          </p>

          <p className="text-lg text-[#6c757d]">
            <span className="font-bold">Department : </span>
            <span className="font-medium">{department}</span>
          </p>
        </section>

        <section
          id="educational-details"
          className="h-screen p-10 flex flex-col justify-center"
        >
          <Heading>Educational Details</Heading>
        </section>
        <section
          id="research-details"
          className="h-screen p-10 flex flex-col justify-center"
        >
          <Heading>Research Details</Heading>
        </section>
        <section
          id="patents-published"
          className="h-screen p-10 flex flex-col justify-center"
        >
          <Heading>Patent Published Details</Heading>
        </section>
        <section
          id="international-collaborations"
          className="h-screen p-10 flex flex-col justify-center"
        >
          <Heading>International Collaborations</Heading>
        </section>
      </div>
    </PageWrapper>
  );
};

export default ViewStaff;
