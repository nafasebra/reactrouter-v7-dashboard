import React from "react";
import type { Route } from "./+types/profile";
import { Form } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Simple Dashboard App" },
    {
      name: "description",
      content:
        "Profile of Project managment dashboard with new version of react router!",
    },
  ];
}

export default function Profile({ actionData }: any) {
  return (
    <div className="container mx-auto p-4">
      <Form
        className="bg-white shadow-md rounded-lg p-6"
        method="post"
      >
        <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="bio"
          >
            Bio
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="bio"
            placeholder="Tell us about yourself"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Save
        </button>
      </Form>
      {actionData ? (
        <p className="text-green-500 mt-4">Profile updated successfully!</p>
      ) : (
        <p className="text-red-500 mt-4">Profile update failed!</p>
      )}
    </div>
  );
}

export async function action({ request }: any) {
  const data = await request.formData();
  const username = data.get("username");
  const email = data.get("email");
  const bio = data.get("bio");

  // Perform your logic here, e.g., save the data to a database

  if (username && email && bio) {
    return { ok: true };
  } else {
    return { ok: false };
  }
}
