import React from "react";

interface PropsType {
  note: string;
  onClick: () => void;
}

const Note = ({ note, onClick }: PropsType) => {
  return (
    <div className="dark:bg-slate-800 text-grey-400 h-[220px] rounded-lg cursor-pointer p-4">
      <p className="h-[calc(180px-32px)] overflow-hidden dark:text-slate-400">
        {note}
      </p>
      <div className="flex gap-4 justify-end mt-2">
        <button
          className="bg-primary dark:text-slate-400 px-4 py-1 rounded-sm hover:bg-grey-600 mr-4"
          onClick={onClick}
        >
          Edit
        </button>
        <button className="bg-primary dark:text-slate-400 px-4 py-1 rounded-sm hover:bg-grey-600">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
