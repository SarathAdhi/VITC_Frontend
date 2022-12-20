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

export const PatentPublished = ({ patentPublishedDetails = [] }) => {
  if (patentPublishedDetails.length === 0) return <></>;

  return (
    <section
      id="patent-published"
      className="w-full h-screen p-2 md:p-10 flex flex-col justify-center gap-5"
    >
      <Heading>Patent Published Details</Heading>

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
              {patentPublishedDetails.map(
                ({ id, title, applicationNumber }) => (
                  <Tr key={id + title}>
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
