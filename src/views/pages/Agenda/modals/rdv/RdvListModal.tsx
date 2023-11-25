import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { MouseEvent } from 'react';
import {Table, Input, Dialog, Button, Avatar} from '@/components/ui';
import { HiReply } from 'react-icons/hi';
import Select from '@/components/ui/Select';
import { HiDotsVertical, HiOutlineSearch } from 'react-icons/hi';
import Dropdown from '@/components/ui/Dropdown';
import type { SyntheticEvent } from 'react';
import RdvDetailsModal from './RdvDetailsModal';
import {getFormattedDate, getFormattedTime, getPersonAge} from '@/utils';

type ModalSettings = {
    dialogIsOpen: boolean,
    setIsOpen: (value:boolean) => void,
}

const { Tr, Th, Td, THead, TBody } = Table

const rdvList = [
    {
        id: 0,
        name: 'Louise Martin',
        email: 'louise.martin@gmail.com',
        date: '2023-09-15',
        startTime: '10:15',
        duration: '45min',
        reason: 'Visite systématique',
        typeOfCare: '',
        practitioner: 'Joe Dubois',
        status: "confirmed",
        postponementReason: '',
    },
    {
        id: 0,
        name: 'Paul Enrique',
        email: 'paul.enrique@gmail.com',
        date: '2023-09-15',
        startTime: '10:15',
        duration: '45min',
        reason: '',
        typeOfCare: 'Chirurgie',
        practitioner: 'Joe Dubois',
        status: "postponed",
        postponementReason: 'Absent et justifié',
    },
    {
        id: 0,
        name: 'Louise Martin',
        email: 'louise.martin@gmail.com',
        date: '2023-09-15',
        startTime: '10:15',
        duration: '45min',
        reason: 'Visite systématique',
        typeOfCare: '',
        practitioner: 'Joe Dubois',
        status: "confirmed",
        postponementReason: '',
    },
    {
        id: 0,
        name: 'Paul Enrique',
        email: 'paul.enrique@gmail.com',
        date: '2023-09-15',
        startTime: '10:15',
        duration: '45min',
        reason: '',
        typeOfCare: 'Chirurgie',
        practitioner: 'Joe Dubois',
        status: "postponed",
        postponementReason: 'Absent et justifié',
    },
    {
        id: 0,
        name: 'Louise Martin',
        email: 'louise.martin@gmail.com',
        date: '2023-09-15',
        startTime: '10:15',
        duration: '45min',
        reason: 'Visite systématique',
        typeOfCare: '',
        practitioner: 'Joe Dubois',
        status: "confirmed",
        postponementReason: '',
    },
    {
        id: 0,
        name: 'Paul Enrique',
        email: 'paul.enrique@gmail.com',
        date: '2023-09-15',
        startTime: '10:15',
        duration: '45min',
        reason: '',
        typeOfCare: 'Chirurgie',
        practitioner: 'Joe Dubois',
        status: "postponed",
        postponementReason: 'Absent et justifié',
    },
    {
        id: 0,
        name: 'Louise Martin',
        email: 'louise.martin@gmail.com',
        date: '2023-09-15',
        startTime: '10:15',
        duration: '45min',
        reason: 'Visite systématique',
        typeOfCare: '',
        practitioner: 'Joe Dubois',
        status: "confirmed",
        postponementReason: '',
    },
    {
        id: 0,
        name: 'Paul Enrique',
        email: 'paul.enrique@gmail.com',
        date: '2023-09-15',
        startTime: '10:15',
        duration: '45min',
        reason: '',
        typeOfCare: 'Chirurgie',
        practitioner: 'Joe Dubois',
        status: "postponed",
        postponementReason: 'Absent et justifié',
    },
    
];

const RdvListModal = ({dialogIsOpen, setIsOpen}:ModalSettings  ) => {
    const [oneTaskDialogIsOpen, setOneTaskDialogIsOpen] = useState(Array(rdvList.length).fill(false));
    const [rdvDetailsDialogIsOpen, setRdvDetailsDialogIsOpen] = useState(Array(rdvList.length).fill(false));
    const openRdvDetailsModal = (index: number) => {
        const updatedDialogIsOpen = [...rdvDetailsDialogIsOpen];
        updatedDialogIsOpen[index] = true;
        setRdvDetailsDialogIsOpen(updatedDialogIsOpen);
    };
    

    const onDialogClose = (e: MouseEvent) => {
        // console.log('onDialogClose', e)
        setIsOpen(false)
    }

    const onDialogOk = (e: MouseEvent) => {
        // console.log('onDialogOk', e)
        setIsOpen(false)
    }

    // *********************************************************
    const dropdownItems = [
        { key: 'a', name: 'Details', url:'#' },
        { key: 'b', name: 'Terminer', url:'#' },
        { key: 'c', name: 'Modifier', url:'#' },
        { key: 'd', name: 'Archiver', url:'#' },
        { key: 'e', name: 'Supprimer', url:'#' },
    ]    
    const onDropdownItemClick = (eventKey: string, e: SyntheticEvent) => {
        console.log('Dropdown Item Clicked', eventKey, e)
    }    
    const onDropdownClick = (e: SyntheticEvent) => {
        console.log('Dropdown Clicked', e)
    }
    // *********************************************************
    const openTaskDetailsModal = (index: number) => {
        const updatedDialogIsOpen = [...oneTaskDialogIsOpen];
        updatedDialogIsOpen[index] = true;
        setOneTaskDialogIsOpen(updatedDialogIsOpen);
    };

  return (
    <>
    <Dialog
        isOpen={dialogIsOpen}        
        contentClassName="pb-0 px-0"
        onClose={onDialogClose}
        onRequestClose={onDialogClose}
        closable={false}
        width={'90vw'}
    >
        <div className="px-6 pb-6">
            <Button
                className="ltr:mr-2 rtl:ml-2 mb-4"
                variant="twoTone"
                size='sm'
                onClick={onDialogClose}
                icon={<HiReply/>}
            >
                Retour
            </Button>
            <div className="flex items-center justify-between mb-6">
                <h4>Liste des rendez-vous</h4>
                <div className="flex items-center gap-2">
                    <Input
                        placeholder="Rechercher une tache"
                        prefix={<HiOutlineSearch className="text-xs" />}
                        className='max-w-[200px]'
                    />
                    <Select
                        placeholder="Toutes les taches"
                        options={[
                            { value: '1', label: 'A'},
                            { value: '2', label: 'B'},
                            { value: '3', label: 'C'},
                        ]}
                    ></Select>

                    <Select
                        placeholder="Requerant"
                        options={[
                            { value: '1', label: 'A'},
                            { value: '2', label: 'B'},
                            { value: '3', label: 'C'},
                        ]}
                    ></Select>

                    <Select
                        placeholder="Executant"
                        options={[
                            { value: '1', label: 'A'},
                            { value: '2', label: 'B'},
                            { value: '3', label: 'C'},
                        ]}
                    ></Select>
                </div>
                
            </div>
            {/* max-h-[67vh] overflow-y-auto */}
            <div className="">
                <Table className='table-auto'>
                    <THead>
                        <Tr>
                            <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Nom</Th>
                            <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Date</Th>
                            <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Début</Th>
                            <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Durée</Th>                            
                            <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Motif de consultation</Th>
                            <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Type de soins</Th>
                            <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Practicien traitant</Th>
                            <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Statut</Th>
                            <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Raison du report</Th>
                            <Th className={"text-xs"} style={{paddingLeft:'0px'}}>Actions</Th>
                        </Tr>
                    </THead>
                    <TBody>

                    {rdvList.map((rdv, index) => (
                        <Tr key={index}>
                            <Td className='relative text-xs align-middle' style={{paddingLeft:'5px'}}>
                                <div className="flex items-center gap-3">                                
                                    <Avatar
                                        size={30}
                                        src="/img/avatars/thumb-1.jpg"
                                        shape="circle"
                                    />                                
                                    <div>
                                        <h6 className="text-sm font-bold">
                                            {rdv.name}
                                        </h6>
                                        <p className='text-xs'>{rdv.email}</p>
                                    </div>
                                </div>
                            </Td>
                            <Td className={"text-xs align-middle"} style={{paddingLeft:'0px'}}>{getFormattedDate({mydate:rdv.date, monthShort:true})}</Td>
                            <Td className={"text-xs align-middle"} style={{paddingLeft:'0px'}}>{rdv.startTime}</Td>
                            <Td className={"text-xs align-middle"} style={{paddingLeft:'0px'}}>{rdv.duration}</Td>
                            <Td className={"text-xs align-middle"} style={{paddingLeft:'0px'}}>{rdv.reason}</Td>
                            <Td className={"text-xs align-middle"} style={{paddingLeft:'0px'}}>{rdv.typeOfCare}</Td>
                            <Td className={"text-xs align-middle"} style={{paddingLeft:'0px'}}>{rdv.practitioner}</Td>
                            <Td className={"text-xs align-middle"} style={{paddingLeft:'0px'}}>{rdv.status}</Td>
                            <Td className={"text-xs align-middle"} style={{paddingLeft:'0px'}}>{rdv.postponementReason}</Td>
                            <Td className={"text-xs align-middle"}>
                                <div>
                                <Dropdown 
                                renderTitle={
                                    <HiDotsVertical size={18} className='cursor-pointer'/>
                                }
                                menuClass="p-0 min-w-[100px] "
                                onClick={onDropdownClick}
                                placement={'bottom-end'}
                                >
                                    {dropdownItems.map((item, dindex) => (
                                        <Dropdown.Item
                                            key={item.key}
                                            eventKey={item.key}
                                            onSelect={onDropdownItemClick}
                                        >
                                            {dindex===0 ?
                                            <span className="text-black" 
                                            onClick={()=>openRdvDetailsModal(index)}
                                            >
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
                                <RdvDetailsModal
                                    dialogIsOpen={rdvDetailsDialogIsOpen[index]}
                                    setIsOpen={(isOpen) => {
                                    const updatedDialogIsOpen = [...rdvDetailsDialogIsOpen];
                                    updatedDialogIsOpen[index] = isOpen;
                                    setRdvDetailsDialogIsOpen(updatedDialogIsOpen);
                                    }}
                                    rdvDetails={{
                                        name: rdv.name,
                                        email: rdv.email,
                                        phone: "+237 6978245364",
                                        date: getFormattedDate({mydate:rdv.date, monthShort:true}),
                                        startTime: rdv.startTime,
                                        duration: rdv.duration,
                                        rdvType: "Consultation",
                                        consultationReason: rdv.typeOfCare,
                                        typeOfCare: rdv.typeOfCare,
                                        status: rdv.status,
                                        postponementReason: rdv.postponementReason,
                                        description: "Lorem ipsum",
                                        practitioner: rdv.practitioner,
                                    }}
                                />
                                </div>
                            </Td>
                        </Tr>
                    ))}

                    </TBody>
                </Table>
            </div>
        </div>
        {/* <div className="text-right px-6 py-3 rounded-bl-lg rounded-br-lg">
            <Button
                className="ltr:mr-2 rtl:ml-2"
                variant="solid"
                size='sm'
                onClick={onDialogClose}
            >
                Modifier
            </Button>
            <Button variant="solid" size='sm' color="rose-600" onClick={onDialogOk}>
                Supprimer
            </Button>
        </div> */}
    </Dialog>
    </>
  )
}

export default RdvListModal;
