import { createFileRoute } from "@tanstack/react-router";
import { HsePage } from "@/components/rain/company";
import { pageHead } from "@/data/content";
export const Route = createFileRoute("/hse-quality")({
  head: () =>
    pageHead(
      "HSE & Compliance",
      "Health, Safety and Environment underpin every decision at Rain Energy, with statutory compliance across CAC, PENCOM, NSITF, ITF and BPP.",
      "/hse-quality",
    ),
  component: HsePage,
});
