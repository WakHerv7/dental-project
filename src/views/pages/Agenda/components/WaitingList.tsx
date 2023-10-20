import { useState } from "react";
import type { SyntheticEvent } from 'react';
import classNames from 'classnames';
import Avatar from '@/components/ui/Avatar';
import PriorityTag from '@/components/shared/PriorityTag';
import Tag from '@/components/ui/Tag';
import Select from '@/components/ui/Select';
import { HiDotsVertical } from 'react-icons/hi';
import Dropdown from '@/components/ui/Dropdown';
import BirthdayModal from "../modals/BirthdayModal";
import RdvDetailsModal from "../modals/RdvDetailsModal";
import ReprogramAppointmentModal from "../modals/ReprogramAppointmentModal";


const scheduleData = [
    {
        id: '0',
        time: '10:00am',
        eventName: 'Louise Martin',
        desciption: '04 Sept. 2023',
        type: 'meeting',
        status: 0,
        delay: 4,
    },
    {
        id: '1',
        time: '1:00pm',
        eventName: 'Leo Petit',
        desciption: '04 Sept. 2023',
        type: 'meeting',
        status: 0,
        delay: 4,
    },
    {
        id: '2',
        time: '3:00pm',
        eventName: 'Alice Bernard',
        desciption: '04 Sept. 2023',
        type: 'task',
        status: 2,
        delay: 4,
    },
    {
        id: '3',
        time: '4:00pm',
        eventName: 'Raphael Petit',
        desciption: '04 Sept. 2023',
        type: 'workshop',
        status: 2,
        delay: 4,
    },
];

const WaitingList = () => {    
    const [birthdayDialogIsOpen, setBirthdayDialogIsOpen] = useState(Array(scheduleData.length).fill(false));
    const [rdvDetailsDialogIsOpen, setRdvDetailsDialogIsOpen] = useState(Array(scheduleData.length).fill(false));
    const [reprogramDialogIsOpen, setReprogramDialogIsOpen] = useState(Array(scheduleData.length).fill(false));
    
    // *********************************************************
    const dropdownItems = [
        { key: 'a', name: 'Reprogrammer' },
        { key: 'b', name: 'Supprimer' },
    ]    
    const onDropdownItemClick = (eventKey: string, e: SyntheticEvent) => {
        console.log('Dropdown Item Clicked', eventKey, e)
    }    
    const onDropdownClick = (e: SyntheticEvent) => {
        console.log('Dropdown Clicked', e)
    }

    // *********************************************************
    const statusColor: Record<
        number,
        {
            label: string
            dotClass: string
            textClass: string
        }
    > = {
        0: {
            label: 'Priorité haute',
            dotClass: 'bg-emerald-100 dark:bg-emerald-500/20 dark:text-emerald-100',
            textClass: 'text-emerald-600 dark:text-emerald-400',
        },
        1: {
            label: 'Priorité moyenne',
            dotClass: 'bg-amber-100 dark:bg-amber-500/20 dark:text-amber-100',
            textClass: 'text-amber-600 dark:text-amber-500',
        },
        2: { label: 'Priorité faible', 
            dotClass: 'bg-red-100 dark:bg-red-500/20 dark:text-red-100', 
            textClass: 'text-red-600 dark:text-red-500'
        },
    }

    // *********************************************************

    const openBirthdayModal = (index: number) => {
        const updatedDialogIsOpen = [...birthdayDialogIsOpen];
        updatedDialogIsOpen[index] = true;
        setBirthdayDialogIsOpen(updatedDialogIsOpen);
    };

    const openRdvDetailsModal = (index: number) => {
        const updatedDialogIsOpen = [...rdvDetailsDialogIsOpen];
        updatedDialogIsOpen[index] = true;
        setRdvDetailsDialogIsOpen(updatedDialogIsOpen);
    };
    const openReprogramModal = (index: number) => {
        const updatedDialogIsOpen = [...reprogramDialogIsOpen];
        updatedDialogIsOpen[index] = true;
        setReprogramDialogIsOpen(updatedDialogIsOpen);
    };
    

    const nameToEmail = (name:string) => {
        const lowercaseName = name.toLowerCase();
        const nameParts = lowercaseName.split(' ');
        const email = nameParts.join('') + '@gmail.com';
        return email;
    }
      

    // *********************************************************
    // *********************************************************
    // *********************************************************

  return (
    <>
        <div className="flex items-center justify-between mb-6">
                
            <div className="flex items-center gap-2">
                <h4>Liste d'attente</h4>
                <Tag                    
                    className={classNames(
                        'font-bold border-0',
                        'text-white',
                        'bg-amber-500',
                        'h-fit'
                    )}
                >
                    <span>
                        5
                    </span>
                </Tag>
            </div>
            <Select
                placeholder="Categorie"
                options={[
                    { value: '1', label: 'A reporter'},
                    { value: '2', label: 'Validées'},
                ]}
            ></Select>
        </div>
        {scheduleData.map((event, index) => (
            <div
                key={event.id}
                className="flex items-center justify-between rounded-md mb-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-600/40 cursor-pointer user-select"
            >
                <div className="flex items-center gap-3">
                    {/* <EventIcon type={event.type} /> */}
                    <Avatar
                        size={30}
                        src="/img/avatars/thumb-1.jpg"
                        shape="circle"
                        onClick={()=>openBirthdayModal(index)}
                    />
                    <BirthdayModal
                    dialogIsOpen={birthdayDialogIsOpen[index]}
                    setIsOpen={(isOpen) => {
                      const updatedDialogIsOpen = [...birthdayDialogIsOpen];
                      updatedDialogIsOpen[index] = isOpen;
                      setBirthdayDialogIsOpen(updatedDialogIsOpen);
                    }}
                    picture={"/img/avatars/thumb-1.jpg"}
                    username={event.eventName}
                    birthdate={new Date("1999-10-25")}
                    />
                    <div onClick={()=>openRdvDetailsModal(index)}>
                        <h6 className="text-sm font-bold">
                            {event.eventName}
                        </h6>
                        <p className='text-xs'>RDV manqué: {event.desciption}</p>
                    </div>
                    <RdvDetailsModal
                        dialogIsOpen={rdvDetailsDialogIsOpen[index]}
                        setIsOpen={(isOpen) => {
                        const updatedDialogIsOpen = [...rdvDetailsDialogIsOpen];
                        updatedDialogIsOpen[index] = isOpen;
                        setRdvDetailsDialogIsOpen(updatedDialogIsOpen);
                        }}
                        rdvDetails={{
                            name: event.eventName,
                            email: nameToEmail(event.eventName),
                            phone: "+237 6978245364",
                            date: "15 Sept. 2023",
                            startTime: "11:30",
                            duration: "30mins",
                            rdvType: "Consultation",
                            consultationReason: "Visite systematique",
                            typeOfCare: "",
                            status: "A reporter",
                            postponementReason: "Patient absent et non justifié",
                            description: "Lorem ipsum",
                            practitioner: "Joelle Dubois",
                        }}
                    />
                    <div className="flex flex-col">
                        <div className="flex items-center">
                            {/* <Badge className={statusColor[event.status].dotClass}>
                            <span
                                className={`ml-2 rtl:mr-2 capitalize font-semibold ${statusColor[event.status].textClass}`}
                            >
                                {statusColor[event.status].label}
                            </span>
                            </Badge> */}
                            <PriorityTag 
                            label={statusColor[event.status].label}
                            bgColor={statusColor[event.status].dotClass}
                            textColor={statusColor[event.status].textClass} 
                            />
                            
                        </div>
                        <div className='text-xs'>
                            Attente: {event.delay} jours
                        </div>
                    </div>
                    
                </div>
                <div className="flex flex-col text-xs ml-3">
                    <span>{event.time}</span>
                </div>
                <Dropdown 
                renderTitle={
                    <HiDotsVertical />
                }
                menuClass="p-0 min-w-[100px] "
                onClick={onDropdownClick}>
                    {dropdownItems.map((item, dindex) => (
                        <Dropdown.Item
                            key={item.key}
                            eventKey={item.key}
                            onSelect={onDropdownItemClick}
                        >
                            {dindex===0 ?
                            <span className="text-black" onClick={()=>openReprogramModal(index)}>
                            {item.name}
                            </span>
                            :
                            <span className="text-black">
                            {item.name}
                            </span>
                            }
                        </Dropdown.Item>
                    ))}
                </Dropdown>
                <ReprogramAppointmentModal
                    dialogIsOpen={reprogramDialogIsOpen[index]}
                    setIsOpen={(isOpen) => {
                    const updatedDialogIsOpen = [...reprogramDialogIsOpen];
                    updatedDialogIsOpen[index] = isOpen;
                    setReprogramDialogIsOpen(updatedDialogIsOpen);
                    }}
                />
                
            </div>
        ))}
    </>
  )
}

export default WaitingList