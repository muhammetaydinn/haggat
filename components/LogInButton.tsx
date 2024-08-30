"use client";
import { Button, Text } from "@mantine/core";
import { signIn, signOut, useSession } from "next-auth/react";
// import { IconUserCircle } from '@tabler/icons-react';

export function LogInButton() {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <>
        <a>{session?.user?.email}</a>
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return <button onClick={() => signIn()}>Sign in</button>;
}
