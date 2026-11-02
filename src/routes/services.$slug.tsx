import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServicePage } from "@/components/rain/work";
import { NotFound } from "@/components/rain/shared";
import { pageHead, services } from "@/data/content";
export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageHead(loaderData.name, loaderData.summary, `/services/${loaderData.slug}`)
      : pageHead("Service not found", "Explore Rain Energy services.", "/services"),
  component: Page,
  notFoundComponent: () => <NotFound kind="service" to="/services" label="Explore all services" />,
});
function Page() {
  const { slug } = Route.useParams();
  return <ServicePage slug={slug} />;
}
