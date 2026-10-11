import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/components/rain/home';
import { pageHead } from '@/data/content';
export const Route = createFileRoute('/')({
 head: () => pageHead('Engineering, procurement and construction', 'Indigenous expertise delivering upstream and downstream engineering, procurement and construction projects across Nigeria.', '/'),
 component: HomePage,
});
