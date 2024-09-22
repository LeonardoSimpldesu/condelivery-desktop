import { 
    Tabs, 
    TabsContent, 
    TabsList, 
    TabsTrigger 
} from "@/components/ui/tabs"
export default function SettingsLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return(
      <div className="flex-1 text-foreground">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-2">Configurações</h1>
          <p className="text-muted-foreground mb-8">Altere as informações do seu perfil, realize as conexões com aplicativos de terceiros.</p>
          {children}
        </div>
      </div>

    )
}