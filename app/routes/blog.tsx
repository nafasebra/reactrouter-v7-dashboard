import React from 'react';

export async function loader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const blogPosts = await response.json();
  return {
    data: blogPosts,
  };
}

export default function Blog ({ loaderData }: { loaderData: {data: any[]} })  {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Title</th>
          </tr>
        </thead>
        <tbody>
          {loaderData.data.map((post) => (
            <tr key={post.id}>
              <td className="py-2 px-4 border-b">{post.id}</td>
              <td className="py-2 px-4 border-b">{post.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
