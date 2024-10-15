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

export function CondoPageTabs() {
  return (
    <Tabs defaultValue="condos" className="w-fit">
      <TabsList className="flex flex-col">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.id} value={tab.id} className="px-8">
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
