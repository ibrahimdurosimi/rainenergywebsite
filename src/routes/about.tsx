import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/rain/company";
import { pageHead } from "@/data/content";
export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About Rain Energy",
      "Discover Rain Energy, our Nigerian workforce, mission, values and leadership.",
      "/about",
    ),
  component: AboutPage,
});
