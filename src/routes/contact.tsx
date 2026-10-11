import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '@/components/rain/contact';
import { pageHead } from '@/data/content';
export const Route = createFileRoute('/contact')({
 head: () => pageHead('Contact & request a quote', 'Discuss your project with Rain Energy in Lagos. Request an engineering, construction or gas infrastructure quote.', '/contact'),
 component: ContactPage,
});
