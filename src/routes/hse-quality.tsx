import { createFileRoute, redirect } from "@tanstack/react-router";
import { pageHead } from "@/data/content";

export const Route = createFileRoute("/hse-quality")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
  head: () => pageHead("HSE & Quality", "Rain Energy Limited HSE documentation.", "/hse-quality"),
  component: () => null,
});
