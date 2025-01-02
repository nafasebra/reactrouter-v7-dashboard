import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),
  route("profile", "./routes/profile.tsx"), // Ensure this file exists at the specified path
  route("setting", "./routes/setting.tsx"),
  route("blog", "./routes/blog.tsx"),
] satisfies RouteConfig;
