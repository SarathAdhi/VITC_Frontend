import React from "react";
import {
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export const OnGoingFundedProject = ({ ongoingFundedProjectDetails = [] }) => {
  if (ongoingFundedProjectDetails.length === 0) return <></>;

  return (
    <section
      id="ongoing-funded-project"
      className="h-screen p-2 md:p-10 flex flex-col justify-center gap-5"
    >
      <Heading>Ongoing Funded Project</Heading>

      <div className="!grid">
        <TableContainer>
          <Table variant={"striped"}>
            <Thead>
              <Tr className="bg-[#004c93]">
                <Th color={"white"} className="!border-l !border-l-white">
                  Title
                </Th>
                <Th color={"white"} className="!border-l !border-l-white">
                  Funding Agency
                </Th>
              </Tr>
            </Thead>

            <Tbody>
              {ongoingFundedProjectDetails.map(
                ({ title, fundingAgency }, index) => (
                  <Tr key={index + title}>
                    <Td className="!border-l !border-l-white">{title}</Td>
                    <Td className="!border-l !border-l-white">
                      {fundingAgency}
                    </Td>
                  </Tr>
                )
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
};
