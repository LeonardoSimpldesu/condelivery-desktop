import { User, Mail, Monitor, Link } from 'lucide-react'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs"
import { Profile } from '@/components/pages/settings/profile'
import { Adresses } from '@/components/pages/settings/adresses'
import { Appearance } from '@/components/pages/settings/appearance'
import { Connections } from '@/components/pages/settings/connections'

export default function SettingsPage() {

    return (
        <Tabs defaultValue="profile" className="flex flex-col md:flex-row gap-8">
            <div className="lg:w-1/5">
                <TabsList aria-orientation="vertical" data-orientation="vertical" className='flex-col w-full space-y-1 bg-white h-fit'>
                    <TabsTrigger value="profile" className="w-full justify-start text-foreground hover:bg-slate-50 data-[state=active]:shadow-none data-[state=active]:bg-slate-100">
                        <User className="mr-2 h-4 w-4" />
                        Perfil
                    </TabsTrigger>
                    <TabsTrigger value="adresses" className="w-full justify-start text-foreground hover:bg-slate-50 data-[state=active]:shadow-none data-[state=active]:bg-slate-100 ">
                        <Mail className="mr-2 h-4 w-4" />
                        Endereços
                    </TabsTrigger>
                    <TabsTrigger value="connections" className="w-full justify-start text-foreground hover:bg-slate-50 data-[state=active]:shadow-none data-[state=active]:bg-slate-100 ">
                        <Link className="mr-2 h-4 w-4" />
                        Conexões
                    </TabsTrigger>
                    <TabsTrigger value="appearance" className="w-full justify-start text-foreground hover:bg-slate-50 data-[state=active]:shadow-none data-[state=active]:bg-slate-100 ">
                        <Monitor className="mr-2 h-4 w-4" />
                        Appearance
                    </TabsTrigger>
                </TabsList>
            </div>

            <div className="w-full lg:w-2/4">
                <TabsContent value='profile' className='w-full'>
                    <Profile />
                </TabsContent>

                <TabsContent value='adresses' className='w-full'>
                    <Adresses />
                </TabsContent>
                
                <TabsContent value='connections' className='w-full'>
                    <Connections />
                </TabsContent>

                <TabsContent value='appearance' className='w-full'>
                    <Appearance />
                </TabsContent>
            </div>
        </Tabs>
    )
}