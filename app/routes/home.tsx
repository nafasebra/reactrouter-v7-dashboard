import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard App" },
    { name: "description", content: "Project managment dashboard with new version of react router!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
