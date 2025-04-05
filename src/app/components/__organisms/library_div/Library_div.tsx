"use client";
import { auth } from "../../../../firebaseconfig";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import Library_top_unothorized from "../library_top_unuthorized/Library_top_unothorized";
import Library_bottom_unothorized from "../library_bottom_unothorized/Library_bottom_unothorized";
function Library_div() {
  const [user, setUser] = useState<User | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setUserName(user.displayName);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className=" relative min-w-[300px] bg-[#121212] rounded-[8px] px-[10px] py-[10px] flex-1 h-full flex flex-col  justify-between ">
      {user ? <div></div> : <Library_top_unothorized />}
      {!user && <Library_bottom_unothorized />}
    </div>
  );
}

export default Library_div;
