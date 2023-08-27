"use client";
import { Inter, Rubik } from '@next/font/google';
import Image from "next/image";
import { signIn } from "next-auth/react";
import styles from "./signinbtn.module.css";

const title = Rubik({
  subsets: ['latin'],
  weight: ['400'],
});

 const text = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
});


export default function SignInBtn() {
  return (
    <div>
   <div  lassName='mt-32'>
  Hi!
</div>


<div className='mt-32'><p  className={styles.topic}>Don't You Have Enough Knowledge to select your mobile Mobile phone !!!</p>
  <p className={styles.satisfy}>Don't Worry</p>
  <p className={styles.place}>This is the right place</p>
</div>
    <div className={styles.back}>
    
    </div>
    <button
      onClick={() => signIn("google")}
      className="flex items-center gap-4 shadow-xl rounded-lg pl-3 bg-white my-10 mx-auto"
    >
      <Image src="/google-logo.png" height={30} width={30} />
      <span className="bg-blue-500 text-white px-4 py-3">
        Sign in with Google
      </span>
    </button>
    </div>
  );
}
