"use client";
import { Button, Menu, Text, Avatar } from "@mantine/core";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export function LogInButton() {
  const { data: session } = useSession();
  const pathName = usePathname();

  if (session?.user) {
    return (
      <Menu width={200} position="bottom-end" withArrow>
        <Menu.Target>
          <Button
            // color black
            color="dark"
            variant="subtle"
            style={{ display: "flex", alignItems: "stretch" }}
          >
            <Avatar
              color="black"
              src={session.user.image || ""}
              radius="lg"
              size="md"
              style={{ marginRight: "0.5rem", padding: "3px" }}
            />
            <Text>{session.user.name || session.user.email}</Text>
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>{session.user.email}</Menu.Item>
          <Menu.Item color="red" onClick={() => signOut()}>
            Sign out
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    );
  }

  return pathName === "/login" ? (
    <></>
  ) : (
    <Button
      variant="light"
      color="dark"
      style={{ blockSize: "2rem", inlineSize: "6rem" }}
      onClick={() => signIn()}
    >
      Sign in
    </Button>
  );
}
