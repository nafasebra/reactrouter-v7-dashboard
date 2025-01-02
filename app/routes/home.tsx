import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Simple Dashboard App" },
    {
      name: "description",
      content: "Project managment dashboard with new version of react router!",
    },
  ];
}

export async function loader() {
  return {
    message: "User dashboard",
    tableData: [
      {
        name: "John Doe",
        email: "john.doe@example.com",
        role: "admin",
      },
      {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        role: "editor",
      },
      {
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        role: "viewer",
      },
      {
        name: "Bob Brown",
        email: "bob.brown@example.com",
        role: "admin",
      },
      {
        name: "Charlie Davis",
        email: "charlie.davis@example.com",
        role: "editor",
      },
      {
        name: "Eve White",
        email: "eve.white@example.com",
        role: "viewer",
      },
    ],
  };
}

export default function Home({
  loaderData,
}: {
  loaderData: {
    message: string;
    tableData: { name: string; email: string; role: string }[];
  };
}) {
  return (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">
          {loaderData.message}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-800">Pending Tasks</h3>
            <p className="text-2xl font-semibold text-gray-900">5</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-800">
              Completed Projects
            </h3>
            <p className="text-2xl font-semibold text-gray-900">12</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-800">Messages</h3>
            <p className="text-2xl font-semibold text-gray-900">8</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-800">
              Active Tickets
            </h3>
            <p className="text-2xl font-semibold text-gray-900">3</p>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">
                Role
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {loaderData.tableData.map((row, index) => (
              <tr key={index}>
                <td className="px-6 py-4 border-b border-gray-300">
                  {row.name}
                </td>
                <td className="px-6 py-4 border-b border-gray-300">
                  {row.email}
                </td>
                <td className="px-6 py-4 border-b border-gray-300">
                  {row.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
