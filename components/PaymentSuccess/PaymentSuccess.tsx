import React from "react";
import { useState } from "react";
import { Divider, Space, Stepper, Text, rem } from "@mantine/core";
import Link from "next/link";
import {
  IconUserCheck,
  IconMailOpened,
  IconShieldCheck,
  IconCarCrane,
  IconBox,
  IconChecklist,
  IconCubeSend,
} from "@tabler/icons-react";
import { useSession } from "next-auth/react";

const PaymentSuccess = () => {
  const { data: session } = useSession();
  const [active, setActive] = useState(0);

  return (
    <div>
      <Text size="xl" className="font-bold text-center">
        Thank you for shopping!
      </Text>
      <Space h="lg" />
      <Text size="md" className="text-center text-gray-500">
        Hi {session?.user?.name}. We have received your order and are getting it
        ready to be shipped.
      </Text>
      <Space h="md" />
      <Text size="md" className="text-center text-gray-500">
        We notify you when it's on its way!
      </Text>
      <Space h="xl" />
      <Stepper className="pl-10 pr-10 flex-1" active={0} size="lg">
        <Stepper.Step
          color="green"
          className="flex items-center justify-center"
          iconSize={200}
          icon={<IconChecklist color="green" />}
        />
        <Stepper.Step icon={<IconCubeSend />} />
        <Stepper.Step icon={<IconBox />} />
      </Stepper>
      <Space h="lg" />
      <div className="justify-between flex pl-1 pr-6">
        <div>
          <Text size="lg" c={"green"} className="font-bold">
            Order Confirmed
          </Text>
        </div>
        <div>
          <Text size="md" className="text-center text-gray-300 font-semibold">
            Order shipment
          </Text>
        </div>
        <Text size="md" className="text-center text-gray-300 font-semibold">
          Package arrived
        </Text>
      </div>
      <Space h="lg" />
      <div
        className="justify-center  self-center content-center text-center items-center flex
     "
      >
        <Link className="flex gap-x-1 items-center group   text-black" href="/">
          <span className="text-ui-fg-interactive  group-hover:bg-green-500">
            Continue Shopping
          </span>

          <svg
            className="group-hover:rotate-45 ease-in-out duration-150 group-hover:bg-green-500  h-15 w-15"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
