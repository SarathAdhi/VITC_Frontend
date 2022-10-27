import { Tabs, TabList, Tab, Input } from "@chakra-ui/react";
import { H4 } from "@components/Text";
import { useRouter } from "next/router";
import { useState } from "react";

const tabLists = [
  { key: "softwareSystems", name: "Software Systems" },
  { key: "computationalIntelligence", name: "Computational Intelligence" },
  { key: "databaseSystems", name: "Database Systems" },
  { key: "informationSecurity", name: "Information Security" },
  { key: "analytics", name: "Analytics" },
  { key: "iot", name: "IoT" },
];

export const LeftSideBar = ({ selectedTabKey, setSelectedTabKey }) => {
  const { replace } = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full md:sticky top-0 flex-1 flex flex-col gap-4">
      <div className="flex">
        <Input
          borderRadius={0}
          px={2}
          height={"35px"}
          _focus={{ outline: "0px", ring: "0px" }}
          placeholder="Search Faculty Name"
          className="!rounded-l-sm"
          value={searchQuery}
          onChange={({ target }) => setSearchQuery(target.value)}
          onKeyUp={({ key }) =>
            key === "Enter" && replace(`/?search=${searchQuery}`)
          }
        />

        <button
          onClick={() => replace(`/?search=${searchQuery}`)}
          className="bg-[#0C4DA2] px-4 text-sm text-white rounded-r-sm"
        >
          Search
        </button>
      </div>

      <H4 className="text-[#0c4da2] pb-2 border-b-2 border-dashed">
        DEPARTMENT
      </H4>

      <Tabs variant="unstyled">
        <TabList className="!flex !flex-col !w-full items-start gap-2 mt-4">
          {tabLists.map((list) => (
            <div key={list.key} className="text-left w-full flex items-center">
              <Tab
                _selected={{ color: "white", bg: "#0c4da2" }}
                className="text-left w-full !justify-start bg-[#f1f1f1] "
                onClick={() => setSelectedTabKey(list.name)}
              >
                {list.name}
              </Tab>

              {selectedTabKey === list.name ? (
                <span className="hidden md:block w-0 h-0 border-t-[5px] border-t-transparent border-l-[10px] border-l-[#0c4da2] border-b-[5px] border-b-transparent" />
              ) : (
                <span className="hidden md:block w-0 h-0 border-t-[5px] border-t-transparent border-l-[10px] border-l-transparent border-b-[5px] border-b-transparent" />
              )}
            </div>
          ))}
        </TabList>
      </Tabs>
    </div>
  );
};
