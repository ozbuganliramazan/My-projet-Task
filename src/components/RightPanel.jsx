import { AiOutlineClose } from 'react-icons/ai';

const RightPanel = ({ setShowRightPanel }) => {
  const closePanel = () => {
    setShowRightPanel(false);
  };

  return (
    <div className="flex-col bg-white rounded m-4 p-4 h-full">
      <div className="flex gap-5 items-center">
        <span className="whitespace-nowrap ">Quick Setting</span>
        <button
          className="p-2 hover:bg-gray-200 rounded-md"
          onClick={closePanel}
        >
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
};

export default RightPanel;
