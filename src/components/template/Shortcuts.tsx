import { useState, useRef, useEffect } from 'react'
import classNames from 'classnames'
import withHeaderItem from '@/utils/hoc/withHeaderItem'
import useThemeClass from '@/utils/hooks/useThemeClass'
import {  HiChevronRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { MemoSvg } from '@/assets/svg'

import { HiIdentification, HiUserAdd } from 'react-icons/hi';
import { FaClock, FaCalendarPlus } from 'react-icons/fa';
import Tooltip from '@/components/ui/Tooltip';
import CallFormModal from '@/views/pages/Agenda/modals/CallFormModal'
import TimeSlotFormModal from '@/views/pages/Agenda/modals/TimeSlotFormModal';
import { useLocation } from 'react-router-dom';

type ShortcutItem = {
    label: string, 
    link: string,
    icon: string | JSX.Element,
}

const shortcuts: ShortcutItem[] = [
    {
        label: 'Mémos',
        link: "",
        icon : <MemoSvg className='text-lg' />
    },
]

const ListItem = (props: {
    data: ShortcutItem
}) => {
    const { data } = props

    return (
        <Link to={data.link}>
            <div
                className={classNames(
                    'flex items-center justify-between rounded-lg p-3.5 py-2.5 cursor-pointer user-select gap-2',
                    'bg-nael-lighten-600 text-nael-violet-600 font-semibold',
                    
                )}
            >
                {/* <HiChevronRight className="text-base" /> */}
                {data.icon}
                <div className="">
                    {data.label}
                </div>
            </div>
        </Link>
    )
}

const _Shortcuts = ({ className }: { className?: string }) => {
    const [callFormDialogOpen, setCallFormDialogOpen] = useState(false)
    const [timeSlotFormDialogOpen, setTimeSlotFormDialogOpen] = useState(false)
    
    const location = useLocation();
    const specificUrl = '/app/agenda/dashboard';

    return (
        <>
            <div
                className={classNames(className, 'flex gap-4')}
            >
                {shortcuts.map((data, index) => (
                            <ListItem
                            key={data.label + index}
                            data={data}
                        />
                        ))}

                {location.pathname === specificUrl?
                <>
                    <Tooltip title="Fiche d'appel" className="bg-nael-lighten-600 text-nael-violet-600" placement='bottom'>
                    <div onClick={()=>setCallFormDialogOpen(true)} className={`text-[20px] w-fit text-nael-violet-600 bg-nael-lighten-600 hover:bg-indigo-100 dark:text-indigo-100 dark:bg-gray-800/20 rounded-[5px] p-[10px] cursor-pointer`}>
                        <HiIdentification />
                    </div>
                    </Tooltip>
                    <CallFormModal
                    dialogIsOpen={callFormDialogOpen}
                    setIsOpen={setCallFormDialogOpen}
                    />

                    <Tooltip title="Recherche de créneau"  className="bg-nael-lighten-600 text-nael-violet-600" placement='bottom'>
                        <div onClick={()=>setTimeSlotFormDialogOpen(true)} className={`text-[20px] w-fit text-nael-violet-600 bg-nael-lighten-600 hover:bg-indigo-100 dark:text-indigo-100 dark:bg-gray-800/20 rounded-[5px] p-[10px] cursor-pointer`}>
                            <FaClock />
                        </div>
                    </Tooltip>
                    <TimeSlotFormModal
                    dialogIsOpen={timeSlotFormDialogOpen}
                    setIsOpen={setTimeSlotFormDialogOpen}
                    />
                    
                    <Tooltip title="Ajouter un nouveau patient" className="bg-nael-lighten-600 text-nael-violet-600" placement='bottom'>
                        <div className={`text-[20px] w-fit text-nael-violet-600 
                        bg-nael-lighten-600 hover:bg-indigo-100 dark:text-indigo-100 dark:bg-gray-800/20 rounded-[5px] p-[10px] cursor-pointer`}>
                            <HiUserAdd />
                        </div>
                    </Tooltip>
                    <Tooltip title="Definir un rendez-vous" className="bg-nael-lighten-600 text-nael-violet-600" placement='bottom'>
                        <div className={`text-[20px] w-fit text-nael-violet-600 bg-nael-lighten-600 hover:bg-indigo-100 dark:text-indigo-100 dark:bg-gray-800/20 rounded-[5px] p-[10px] cursor-pointer`}>
                            <FaCalendarPlus />
                        </div>
                    </Tooltip>
                </>
                :
                <></>
                }
                

            </div>
            
        </>
    )
}

const Shortcuts = withHeaderItem(_Shortcuts)

export default Shortcuts
