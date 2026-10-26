import { createFileRoute } from "@tanstack/react-router";
import { HsePage } from "@/components/rain/company";
import { pageHead } from "@/data/content";
export const Route = createFileRoute("/hse-quality")({
  head: () =>
    pageHead(
      "HSE & Quality",
      "Our health, safety, environmental and quality commitments at every project phase.",
      "/hse-quality",
    ),
  component: HsePage,
});
