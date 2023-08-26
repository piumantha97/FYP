"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { status ,data: session  } = useSession();
  return (
    <div className="p-4 flex justify-between items-center shadow-md bg-white">
      <Link className="font-bold text-lg text-blue-700" href={"/"}>
        Mobile Phone Recommendation
      </Link>
      {status === "authenticated" ? (
        <>
        <span className="text-xs">  {session?.user?.name}</span>
        <button
          onClick={() => signOut()}
          className="bg-slate-900 text-white px-6 py-2 rounded-md"
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
