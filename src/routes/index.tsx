import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/rain/home";
import { pageHead } from "@/data/content";
export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Indigenous Excellence in Oil & Gas Services",
      "Rain Energy is a 100% Nigerian-owned oil and gas servicing company: EPIC&C, pipeline works, civil and structural, E&I, fabrication and LPG / CNG distribution.",
      "/",
    ),
  component: HomePage,
});
