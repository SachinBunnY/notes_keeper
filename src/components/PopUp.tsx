import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineClose } from "react-icons/md";

interface PropsType {
  setOpenPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  setUpdateUI: React.Dispatch<React.SetStateAction<boolean>>;
  editMode: boolean;
}
const PopUp = ({ setOpenPopUp, editMode, setUpdateUI }: PropsType) => {
  const [note, setNote] = useState("");
  const { data: session } = useSession();

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    // if(editMode) setNote(text)
    return () => {
      document.body.style.overflowY = "visible";
    };
  }, []);

  const saveEditedNote = () => {};

  const saveNewNote = () => {
    console.log({ email: session?.user?.email, note });

    axios
      .post(`api/save_note`, { email: session?.user?.email, note })
      .then((res) => {
        console.log(res?.data);
        setUpdateUI((prevState) => !prevState);
        setOpenPopUp(false);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div
      className="bg-[#00000050] fixed top-0 left-0 w-full h-screen
        grid place-items-center"
    >
      <div
        className="bg-primaryDark w-full max-w-[800px]
        text-center p-4 md:px-8 relative"
      >
        <MdOutlineClose
          className="text-[30px] text-gray-400 cursor-pointer
            absolute top-0 right-0 m-4"
          onClick={() => setOpenPopUp(false)}
        />

        <h2 className="text-[24px] text-gray-500 pb-2">
          {editMode ? "Edit Note" : "Add Note"}
        </h2>
        <textarea
          className="bg-transparent border border-primary w-full text-grey-400 p-4"
          rows={10}
          placeholder="Add Note..."
          value={note}
          onChange={(e) => setNote(e?.target?.value)}
        ></textarea>
        <div className="flex gap-4 justify-end mt-2">
          <button className="bg-primary text-grey-400 px-4 py-1 rounded-sm hover:bg-grey-600">
            Delete
          </button>
          <button
            className="bg-primary text-grey-400 px-4 py-1 rounded-sm hover:bg-grey-600"
            onClick={editMode ? saveEditedNote : saveNewNote}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
