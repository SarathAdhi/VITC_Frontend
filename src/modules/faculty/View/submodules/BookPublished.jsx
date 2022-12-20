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

export const BookPublished = ({ bookPublishedDetails = [] }) => {
  if (bookPublishedDetails.length === 0) return <></>;

  return (
    <section
      id="book-published"
      className="h-screen p-2 md:p-10 flex flex-col justify-center gap-5"
    >
      <Heading>Book Published</Heading>

      <div className="!grid">
        <TableContainer>
          <Table variant={"striped"}>
            <Thead>
              <Tr className="bg-[#004c93]">
                <Th color={"white"} className="!border-l !border-l-white">
                  Title
                </Th>
                <Th color={"white"} className="!border-l !border-l-white">
                  Publisher
                </Th>
                <Th color={"white"} className="!border-l !border-l-white">
                  Year
                </Th>
              </Tr>
            </Thead>

            <Tbody>
              {bookPublishedDetails.map(({ title, year, publisher }, index) => (
                <Tr key={index + title}>
                  <Td className="!border-l !border-l-white">{title}</Td>
                  <Td className="!border-l !border-l-white">{publisher}</Td>
                  <Td className="!border-l !border-l-white">{year}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
};
