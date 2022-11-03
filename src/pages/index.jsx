import { Modal } from "@elements/Modal";
import { PageLayout } from "@layouts/PageLayout";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { staffs } from "@utils/constants";
import { LinkedItem } from "@elements/LinkedItem";
import { Navigation } from "@elements/Navigation";
// import Navbar from "@elements/Navbar";
import Nav from "@elements/Nav";
// import Header from "@elements/header";

const tabLists = [
  { key: "softwareSystems", name: "Software Systems" },
  { key: "computationalIntelligence", name: "Computational Intelligence" },
  { key: "databaseSystems", name: "Database Systems" },
  { key: "informationSecurity", name: "Information Security" },
  { key: "analytics", name: "Analytics" },
  { key: "iot", name: "IoT" },
];

// const navbar = () => ;

const LeftSideBar = (setSelectedTabKey) => (
  <div className="w-full md:h-screen md:sticky top-0 flex-1">
    <TabList className="!flex !flex-col !w-full items-start bg-white">
      {tabLists.map((list) => (
        <Tab
          key={list.key}
          _selected={{ color: "white", bg: "#224c9c" }}
          className="text-left w-full !justify-start"
          onClick={() => setSelectedTabKey(list.key)}
        >
          {list.name}
        </Tab>
      ))}
    </TabList>
  </div>
);

const ModalFooter = ({ href }) => (
  <div className="w-full flex items-start">
    <LinkedItem
      href={href}
      className="!px-2 !py-1 text-sm rounded-md bg-[#337ab7] text-white"
    >
      View more
    </LinkedItem>
  </div>
);

const PopUpModal = ({
  id,
  name,
  college,
  email,
  isModalOpen,
  setIsModalOpen,
}) => (
  <Modal
    title={name}
    isOpen={isModalOpen}
    setIsOpen={setIsModalOpen}
    Footer={() => ModalFooter({ href: `/staff/${id}` })}
  >
    <div>
      <p>Email: {email}</p>
      <p>Intercom:</p>
      <p>Ph.D:</p>
      <p>{college}</p>
    </div>
  </Modal>
);

const Home = () => {
  const [staffDetails, setStaffDetails] = useState([]);
  const [currentStaffDetails, setCurrentStaffDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTabKey, setSelectedTabKey] = useState("softwareSystems");

  useEffect(() => {
    const filterStaffs = staffs.filter(
      (staff) => staff.department === selectedTabKey
    );
    setStaffDetails(filterStaffs);
  }, [selectedTabKey]);

  return (
    <Tabs variant="unstyled">
      <Nav />
      <PageLayout
        title="Home"
        LeftSideBar={() => LeftSideBar(setSelectedTabKey)}
      >
        <div className="w-full grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {staffDetails.map((staff) => (
            <button
              key={staff.name}
              className="w-full sm:w-60"
              onClick={() => {
                setCurrentStaffDetails(staff);
                setIsModalOpen(true);
              }}
            >
              <div className="relative w-full h-60">
                <Image src={staff.image} layout="fill" />
              </div>

              <div className="text-white text-center bg-[#433840] py-4">
                <h4>{staff.name}</h4>
                <p className="text-[#c6edff] text-sm">{staff.designation}</p>
              </div>
            </button>
          ))}
        </div>

        <PopUpModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          {...currentStaffDetails}
        />
      </PageLayout>
    </Tabs>
  );
};

export default Home;
