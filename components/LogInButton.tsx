"use client";
import { Button, Text } from "@mantine/core";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
// import { IconUserCircle } from '@tabler/icons-react';

export function LogInButton() {
  const { data: session } = useSession();
  const pathName = usePathname();

  if (session?.user) {
    return (
      <>
        <a>{session?.user?.email}</a>
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return pathName === "/login" ? (
    <button style={{ blockSize: "2rem", inlineSize: "6rem" }}></button>
  ) : (
    <button
      style={{ blockSize: "2rem", inlineSize: "6rem" }}
      onClick={() => signIn()}
    >
      Sign in
    </button>
  );
}
