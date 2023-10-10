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

const HeaderActionsStart = () => {
    return (
        <>
            <MobileNav />
            <Shortcuts hoverable={false} />
        </>
    )
}

const HeaderActionsEnd = () => {
    return (
        <>
            <LanguageSelector hoverable={false} />
            <UserDropdown hoverable={false} />
            <Notification />
            <SidePanel />
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
