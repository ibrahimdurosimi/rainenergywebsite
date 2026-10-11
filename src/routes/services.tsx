import { createFileRoute } from '@tanstack/react-router';
import { ServicesPage } from '@/components/rain/work';
import { pageHead } from '@/data/content';
export const Route = createFileRoute('/services')({
 head: () => pageHead('Oil and gas engineering services', 'Explore six integrated service lines from engineering and procurement to commissioning and LPG/CNG.', '/services'),
 component: ServicesPage,
});
