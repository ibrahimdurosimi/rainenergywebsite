import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/rain/work";
import { pageHead } from "@/data/content";
export const Route = createFileRoute("/services/")({
  head: () =>
    pageHead(
      "Services",
      "EPIC&C, pipeline works, civil and structural, electrical and instrumentation, fabrication and distribution, and operations and maintenance from an indigenous Nigerian team.",
      "/services",
    ),
  component: ServicesPage,
});
