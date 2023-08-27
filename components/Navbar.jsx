"use client";
import styles  from "./navbar.module.css"
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { status ,data: session  } = useSession();

  if (status === "authenticated") {
  return (
    <div className={styles.nav}>
      <Link className="font-bold text-lg text-blue-700" href={"/"}>
        Mobile Phone Recommendation
      </Link>
      {status === "authenticated" ? (
        <>
        <span className="text-xs">  {session?.user?.name}</span>
        <button
          onClick={() => signOut()}
         
          className={styles.signIn}
          
        >
          Sign Out
        </button>

      
        </>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="bg-slate-900 text-white px-6 py-2 rounded-md"
        >
          Sign In
        </button>
      )}
    </div>
  );
}
}
