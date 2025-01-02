import React from 'react';

const blogPosts = [
  { id: 1, title: 'First Blog Post' },
  { id: 2, title: 'Second Blog Post' },
  { id: 3, title: 'Third Blog Post' },
];

const Blog: React.FC = () => {
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
          {blogPosts.map((post) => (
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

export default Blog;