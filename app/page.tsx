'use client';
import {useState} from 'react';
import Link from 'next/link';
import {useRouter } from 'next/navigation';

function Header({ title })  {
  return <h1>{title ? title : "Default title"}</h1>
}

export default function Page() {
    const router = useRouter();

  return (
    <div class="flex items-center bg-home-banner bg-cover bg-no-repeat bg-left-top h-96 ">  
    <div class="container mx-auto text-center">
    <p class="text-4xl text-slate-300 font-medium">Learn Cyber Security with this Ethical Hacking Trainer</p>
    <p class="text-xl text-slate-300 py-2">Practice web vulnerabilities in a free online test environment by signing up today.</p>
    <Link class="font-medium  text-slate-200 py-2 px-2 rounded-sm bg-slate-200/25 hover:bg-slate-100 hover:text-slate-900" href="/SignUp">Sign Up</Link>
    </div>
    </div>
  );

}
