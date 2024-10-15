import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs';

const tabs = [
  {
    id: 'condos',
    label: 'Condomínios',
  },
  {
    id: 'maintenance',
    label: 'Manutenções',
  },
  {
    id: 'contracts',
    label: 'Contratos',
  },
  {
    id: 'mandates',
    label: 'Mandatos',
  },
];

export function DashboardTabs() {
  return (
    <Tabs defaultValue="condos" className="w-fit">
      <TabsList className="flex rounded-lg bg-accent p-1">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id} className="px-8">
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
