import { LinkedItem } from "@components/LinkedItem";
import { Modal } from "@elements/Modal";
import { staffUrlFormat } from "@utils/format";

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

export const FacultyDetailsModal = ({
  id,
  salutation,
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
    Footer={<ModalFooter href={`/faculty/` + staffUrlFormat(name, id)} />}
  >
    <div>
      <p>Email: {email}</p>
      <p>Intercom:</p>
      <p>Ph.D:</p>
      <p>{college}</p>
    </div>
  </Modal>
);
