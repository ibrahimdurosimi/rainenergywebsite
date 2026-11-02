import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/rain/company";
import { pageHead } from "@/data/content";
export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About Rain Energy",
      "A fully indigenous Nigerian oil and gas servicing company: 100% Nigerian-owned and built on 20+ years of founding-team experience.",
      "/about",
    ),
  component: AboutPage,
});
