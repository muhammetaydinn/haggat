"use client";
import { API_URL } from "@/services";
import { useForm } from "@mantine/form";
import { register } from "module";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const handleSubmit = async (values: typeof form.values) => {
    try {
      const response = await fetch(API_URL + "/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // Redirect to login page
        router.push("/login");
      } else {
        // Handle errors
        const errorData = await response.json();
        console.error("Registration error:", errorData);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      avatar: "https://picsum.photos/800",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 2 ? "You must type 'changeme' " : null,
      name: (value) => {
        if (value.length < 2) {
          return "Name must be at least 2 characters";
        }
        return null;
      },
    },
  });
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center items-center flex-col">
          <Image
            src={
              // if screen is small then logo.svg else logo-small.svg
              "/logosmall.svg"
            }
            height={60}
            width={60}
            alt="Logo"
          />
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={form.onSubmit(handleSubmit)}
            action="#"
            method="POST"
            className="space-y-6"
          >
            <div className="flex gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    {...form.getInputProps("name")}
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
           
            </div>

            {/* ///ayrı */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  {...form.getInputProps("email")}
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  {...form.getInputProps("password")}
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Do you have an account?{" "}
            <a
              href="/login"
              className="font-semibold leading-6 text-black hover:text-gray-800"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
