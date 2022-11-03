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

export const PatentGranted = ({ patentGrantedDetails = [] }) => {
  if (patentGrantedDetails.length === 0) return <></>;

  return (
    <section
      id="patent-granted"
      className="h-screen p-2 md:p-10 flex flex-col justify-center gap-5"
    >
      <Heading>Patent Granted Details</Heading>

      <div className="!grid">
        <TableContainer>
          <Table variant={"striped"}>
            <Thead>
              <Tr className="bg-[#004c93]">
                <Th color={"white"} className="!border-l !border-l-white">
                  Title
                </Th>
                <Th color={"white"} className="!border-l !border-l-white">
                  Application No.
                </Th>
              </Tr>
            </Thead>

            <Tbody>
              {patentGrantedDetails.map(
                ({ title, applicationNumber }, index) => (
                  <Tr key={index + title}>
                    <Td className="!border-l !border-l-white">{title}</Td>
                    <Td className="!border-l !border-l-white">
                      {applicationNumber}
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
