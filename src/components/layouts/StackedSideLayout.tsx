import Header from '@/components/template/Header'
import SidePanel from '@/components/template/SidePanel'
import UserDropdown from '@/components/template/UserDropdown'
import MobileNav from '@/components/template/MobileNav'
import StackedSideNav from '@/components/template/StackedSideNav'
import View from '@/views'
import LanguageSelector from '../template/LanguageSelector'
import Notification from '../template/Notification'
import Search from '../template/Search'
import Shortcuts from '../template/Shortcuts'

import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HiOutlineCog } from 'react-icons/hi';
import Tooltip from '@/components/ui/Tooltip';
import ParametersModal from '@/views/pages/Agenda/modals/parameters/ParametersModal';


const HeaderActionsStart = () => {
    return (
        <>
            <MobileNav />
            <Shortcuts hoverable={false} />
        </>
    )
}

const HeaderActionsEnd = () => {
    const location = useLocation();
    const specificUrl = '/app/agenda/dashboard';
    const [parametersDialogOpen, setParametersDialogOpen] = useState(false);
    return (
        <>
            <LanguageSelector hoverable={false} />
            <UserDropdown hoverable={false} />
            <Notification />
            {location.pathname === specificUrl? 
                <>
                    <div onClick={()=>setParametersDialogOpen(true)} className='cursor-pointer'>
                        <HiOutlineCog size={24}/>
                    </div>
                    <ParametersModal
                    dialogIsOpen={parametersDialogOpen}
                    setIsOpen={setParametersDialogOpen}
                    />
                </>
            :
                <SidePanel />
            }
            
        </>
    )
}

const StackedSideLayout = () => {
    return (
        <div className="app-layout-stacked-side flex flex-auto flex-col">
            <div className="flex flex-auto min-w-0">
                <StackedSideNav />
                <div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full">
                    <Header
                        className="shadow dark:shadow-2xl"
                        headerStart={<HeaderActionsStart />}
                        headerEnd={<HeaderActionsEnd />}
                    />
                    <div className="h-full flex flex-auto flex-col">
                        <View /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StackedSideLayout
