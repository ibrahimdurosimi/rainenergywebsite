import { createFileRoute } from '@tanstack/react-router';
import { ProjectsPage } from '@/components/rain/work';
import { pageHead } from '@/data/content';
export const Route = createFileRoute('/projects')({validateSearch:(s:Record<string,unknown>)=>({sector:typeof s['sector']==='string'?s['sector']:undefined}),head:()=>pageHead('Projects','Explore illustrative oil and gas engineering projects delivered across Nigeria.','/projects'),component:Page});
function Page(){const {sector}=Route.useSearch();return <ProjectsPage initialSector={sector ?? ""}/>}
