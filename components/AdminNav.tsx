"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function AdminNav() {
  const router = useRouter();

  const deleteLocalStorageKey = () => {
    localStorage.removeItem("accessKey");
    router.push("/");
  }


  return (
    <header className="admin-header">
    <Link href="/" className="cursor-pointer">
      <Image
        src="/assets/icons/logo-full.svg"
        height={32}
        width={162}
        alt="Logo"
        className="h-8 w-fit"
      />
    </Link>

    <p className="text-16-semibold ">Admin Dashboard</p>
    <Button className="bg-green-500" onClick={deleteLocalStorageKey}>Logout</Button>
  </header>
  )
}
