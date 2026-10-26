import { createFileRoute, redirect } from "@tanstack/react-router";
import { pageHead } from "@/data/content";

export const Route = createFileRoute("/projects")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
  head: () =>
    pageHead("Projects", "Rain Energy Limited projects are currently being updated.", "/projects"),
  component: () => null,
});
