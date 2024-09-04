"use client";
import { Button, Menu, Text, Avatar } from "@mantine/core";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

export function LogInButton() {
  const { data: session } = useSession();
  const pathName = usePathname();

  if (session?.user) {
    return (
      <Menu position="bottom-end" withArrow>
        <Menu.Target>
          <Button
            // color black
            color="dark"
            variant="subtle"
            style={{
              display: "flex",

              alignItems: "flex-start",
              maxWidth: "100%",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            <Avatar
              color="black"
              src={session.user.image || ""}
              radius="lg"
              size="md"
              style={{  padding: "3px" }}
            />
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item disabled>Profile:{session.user.name}</Menu.Item>
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
