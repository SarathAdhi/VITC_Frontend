import { PageLayout } from "@layouts/PageLayout";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "@lib/axios";
import { FacultyDetailsModal } from "@modules/faculty/Home/FacultyDetailsModal";
import { useRouter } from "next/router";

const breadcrumbItem = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/",
    name: "School",
  },
  {
    href: "/",
    name: "SCOPE",
  },
  {
    href: "/",
    name: "",
  },
];

const Home = () => {
  const router = useRouter();

  const { search } = router.query;

  console.log(search);

  const [facultyDetails, setFacultyDetails] = useState([]);
  const [currentFacultyDetails, setCurrentFacultyDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTabKey, setSelectedTabKey] = useState("Software Systems");

  const fetchFacultyDetails = async () => {
    const faculty = await axios.get("/faculty");

    setFacultyDetails(faculty);
  };

  useEffect(() => {
    fetchFacultyDetails();
  }, []);

  if (!facultyDetails) return <div className="text-center">Loading...</div>;

  return (
    <PageLayout title="Home" breadcrumbItem={breadcrumbItem}>
      <div className="mt-5 md:mt-0 w-full grid py-4 bg-[#f1f1f1] justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {facultyDetails.map((staff) => (
          <button
            key={staff.name}
            className="w-full sm:w-60"
            onClick={() => {
              setCurrentFacultyDetails(staff);
              setIsModalOpen(true);
            }}
          >
            <div className="relative w-full h-60">
              <Image src={staff?.image} layout="fill" />
            </div>

            <div className="text-white text-center bg-[#433840] py-4">
              <h4>
                {staff.salutation} {staff.name}
              </h4>
              <p className="text-[#c6edff] text-sm">{staff.designation}</p>
            </div>
          </button>
        ))}
      </div>

      <FacultyDetailsModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        {...currentFacultyDetails}
      />
    </PageLayout>
  );
};

export default Home;
