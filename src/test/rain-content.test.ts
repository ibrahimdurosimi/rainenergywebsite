import { describe, it, expect } from 'vitest';
import { services, projects, news, stats } from '@/data/content';
describe('Rain Energy demo requirements',()=>{
 it('provides the six requested service lines',()=>{expect(services.map(s=>s.slug)).toEqual(['engineering','procurement','fabrication','construction-installation','commissioning','lpg-cng'])});
 it('provides six sample projects with the requested locations and years',()=>{expect(projects.map(p=>[p.location,p.year])).toEqual([['Niger Delta','2024'],['Ogun State','2023'],['Delta State','2023'],['Lagos','2025'],['Rivers State','2022'],['Bayelsa State','2024']])});
 it('uses the requested illustrative company figures',()=>{expect(stats.map(s=>[s.value,s.suffix])).toEqual([[15,'+'],[40,'+'],[6,''],[100,'%']])});
 it('provides four 2026 sample articles with three paragraphs',()=>{expect(news).toHaveLength(4);for(const n of news){expect(n.date).toMatch(/2026$/);expect(n.paragraphs).toHaveLength(3)}});
});
