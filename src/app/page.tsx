"use client";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Note from "@/components/Note";
import PopUp from "@/components/PopUp";

export default function Home() {
  const { data: session } = useSession();
  const [notes, setNotes] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [openPopup, setOpenPopUp] = useState(false);
  const [editMode, setEditMode] = useState(true);
  const [currentNote, setCurrentNote] = useState<any>({});

  useEffect(() => {
    console.log({ email: session?.user?.email });

    axios
      .post(`api/get_note`, { email: session?.user?.email })
      .then((res) => {
        console.log(res?.data);
        setNotes(res?.data);
      })
      .catch((error) => console.log(error));
  }, [session?.user, updateUI]);

  if (!session?.user) {
    return <Login />;
  }

  return (
    <main>
      <Navbar />
      <div className="appContainer relative">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {notes.map((note: any) => {
            return (
              <Note
                key={note._id}
                note={note?.note}
                onClick={() => {
                  setEditMode(true);
                  setOpenPopUp(true);
                  setCurrentNote(note);
                }}
              />
            );
          })}
        </div>
        <div
          className="bg-primary rounded-full grid place-items-center
        w-[50px] h-[50px] text-[30px] cursor-pointer dark:text-slate-400 fixed z-10 right-0 bottom-0 m-3"
          onClick={() => {
            setEditMode(false);
            setOpenPopUp(true);
          }}
        >
          +
        </div>
      </div>

      {openPopup && (
        <PopUp
          setOpenPopUp={setOpenPopUp}
          editMode={editMode}
          setUpdateUI={setUpdateUI}
          text={currentNote.note}
          id={currentNote._id}
        />
      )}
    </main>
  );
}
