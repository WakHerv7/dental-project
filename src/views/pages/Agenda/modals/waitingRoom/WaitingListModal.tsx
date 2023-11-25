import { useState } from 'react';
import type { MouseEvent } from 'react';
import { HiReply, HiShieldCheck, HiShieldExclamation, 
    HiCalendar, HiPhone, HiMail, HiSun } from 'react-icons/hi';
import { FaTooth, FaClipboardList, FaClipboardCheck } from 'react-icons/fa';

import { Avatar, Card, Tag, Table, Dialog, Button, Radio } from '@/components/ui';
import {getFormattedDate, getFormattedTime, getPersonAge} from '@/utils';

type TaskProps = {
    title: string,
    category: string,
    status: string,
    description: string,
    applicant: string,
    executor: string,
  }

type ModalProps = {
    searchDialogOpen: boolean,
    setSearchDialogOpen: (value:boolean) => void,
}

const { Tr, Th, Td, THead, TBody } = Table;

const patientList = [
    {
        name: "Louise Bernard",
        picture: "/img/avatars/thumb-1.jpg",
        age: 29,
        status: 1, // 1= En avance | 0= A l'heure | -1= En retard
        delay: "2h",
        appointmentDate: "2023-09-07",
        appointmentTime: "12:00",
        lastAppointmentDate: "2023-08-14",
        email: "louise@gmail.com",
        phone: "+237 698754523012",
        insurance: true,
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.",
        paid:650000,
        balance: 1450000,
        appointmentStatus: 1, // 1= Confirmé | 2= Annullé et excusé | 3= Annullé et non excusé | 4= Suspendu
    },
    {
        name: "Louise Bernard",
        picture: "/img/avatars/thumb-2.jpg",
        age: 29,
        status: -1, // 1= En avance | 0= A l'heure | -1= En retard
        delay: "2h30",
        appointmentDate: "2023-09-07",
        appointmentTime: "12:00",
        lastAppointmentDate: "2023-08-14",
        email: "louise@gmail.com",
        phone: "+237 698754523012",
        insurance: false,
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.",
        paid: 50000,
        balance: 0,
        appointmentStatus: 1, // 1= Confirmé | 2= Annullé et excusé | 3= Annullé et non excusé | 4= Suspendu
    },
    {
        name: "Louise Bernard",
        picture: "/img/avatars/thumb-3.jpg",
        age: 29,
        status: 1, // 1= En avance | 0= A l'heure | -1= En retard
        delay: "2h",
        appointmentDate: "2023-09-07",
        appointmentTime: "12:00",
        lastAppointmentDate: "2023-08-14",
        email: "louise@gmail.com",
        phone: "+237 698754523012",
        insurance: true,
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.",
        paid: 0,
        balance: 65000,
        appointmentStatus: 1, // 1= Confirmé | 2= Annullé et excusé | 3= Annullé et non excusé | 4= Suspendu
    },
];


const WaitingListModal = ( {searchDialogOpen, setSearchDialogOpen}:ModalProps ) => {
    const [dialogIsOpen, setIsOpen] = useState(false)

    const openDialog = () => {
        document.body.style.overflow = 'hidden';
        setIsOpen(true)
    }

    const onDialogClose = (e: MouseEvent) => {
        document.body.style.overflow = '';
        setIsOpen(false)
    }

  return (
    <>
    <div
        onClick={openDialog}
    >
        
        {/* <HiOutlineSearch /> */}
        <Button variant="twoTone" className='w-full'>
            Voir la liste des patients en salle d'attente
        </Button>
    </div>
    <Dialog
        isOpen={dialogIsOpen}        
        contentClassName="pb-0 px-0 bg-nael-lighten-600"
        onClose={onDialogClose}
        onRequestClose={onDialogClose}
        closable={false}
        width={600}
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
                <h3 className="mb-4">Salle d'attente ({patientList.length})</h3>
                <Button
                    className="ltr:mr-2 rtl:ml-2 mb-4"
                    variant="solid"
                    size='sm'
                    onClick={()=>setSearchDialogOpen(true)}
                >
                    Ajouter un patient
                </Button>
            </div>

            <div className="">
                {patientList.map((patient, idx) => (
                    <Card key={idx} className='flex flex-col gap-4 mb-3'>
                        <div className="flex gap-3 relative mb-5">
                            <div className="relative">
                                <Avatar
                                    size={137}
                                    src={patient.picture}               
                                />
                                <div className="absolute"
                                style={{
                                    position: "absolute",
                                    bottom: -5,
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                }}>
                                    <Tag className="text-white bg-indigo-900 border-0">{patient.age} ans</Tag>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex gap-3 mb-3">
                                    <h5>{patient.name}</h5>
                                    {patient.status >= 0 ?
                                        <Tag className="w-fit bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100 border-0 rounded">
                                            {patient.status > 0 ? `En avance de ${patient.delay}`: "A l'heure"}
                                        </Tag>
                                        :
                                        <Tag className="w-fit text-red-600 bg-red-100 dark:text-red-100 dark:bg-red-500/20 border-0">
                                            En retard de {patient.delay}
                                        </Tag>
                                    }
                                </div>
                                <div className="flex gap-2 items-center">
                                    <HiCalendar color='indigo'/>
                                    <span className='text-[13px]'>{getFormattedDate(patient.appointmentDate)}, à {patient.appointmentTime}</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <span className={`text-lg bg-indigo-900 text-white rounded-[5px] p-[2px]`}>
                                        <HiReply size={10}/>
                                    </span>                                    
                                    <span className='text-[13px]'>{getFormattedDate(patient.lastAppointmentDate)}</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <HiMail color='indigo'/>
                                    <span className='text-[13px]'>{patient.email}</span>
                                </div>
                                <div className="flex gap-2  items-center">
                                    <HiPhone color='indigo'/>
                                    <span className='text-[13px]'>{patient.phone}</span>
                                </div>
                                <div className={`flex gap-2 ${patient.insurance ? 'text-yellow-600':'text-gray-600'} items-center`}>
                                    {  patient.insurance ?
                                        <>
                                        <HiShieldCheck />
                                        <span className='text-[13px]'> Assuré</span>
                                        </>
                                        :
                                        <>
                                        <HiShieldExclamation/>
                                        <span className='text-[13px]'> Non assuré</span>
                                        </>
                                    }
                                </div>
                                
                            </div>
                            <div className='flex flex-col justify-between items-end' style={{
                                position: 'absolute',
                                right:0,
                                height: '100%',
                                textAlign: 'right',                                
                            }}>
                                <span className={`text-lg bg-indigo-900 w-fit text-white rounded-[5px] p-[5px]`}>
                                    <FaTooth />
                                </span>
                                <div className="flex gap-2">
                                    <span className={`text-lg w-fit text-yellow-600 bg-yellow-100 dark:text-yellow-100 dark:bg-yellow-500/20 rounded-[5px] p-[5px]`}>
                                        <HiSun />
                                    </span>
                                    <span className={`text-lg w-fit text-green-600 bg-green-100 dark:text-green-100 dark:bg-green-500/20 rounded-[5px] p-[5px]`}>
                                        <FaClipboardCheck />
                                    </span>
                                    <span className={`text-lg w-fit text-red-600 bg-red-100 dark:text-red-100 dark:bg-red-500/20 rounded-[5px] p-[5px]`}>
                                        <FaClipboardList />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={`w-fit px-3 mb-4 text-nael-blue-600 bg-nael-lighten-600 dark:text-indigo-100 dark:bg-indigo-500/20 rounded-[5px] p-[5px]`}>
                            <p className='text-sm font-[600]'>
                                Some quick example text to build on the card title and make
                                up the bulk of the card&apos;s content.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <span className="text-md font-bold">
                                    Etat financier
                                </span>
                                <div className="flex gap-4 mt-1">
                                    <div className="flex flex-col">
                                        <small className="text-gray">
                                            Avance
                                        </small>
                                        <Tag className="text-green-600 bg-green-100 dark:text-green-100 dark:bg-green-500/20 border-0 min-w-2">
                                            {patient.paid.toLocaleString('fr-FR')}
                                        </Tag>
                                    </div>
                                    <div className="flex flex-col">
                                        <small className="text-gray">
                                            Reste
                                        </small>
                                        <Tag className="text-red-600 bg-red-100 dark:text-red-100 dark:bg-red-500/20 border-0 min-w-2">
                                            {patient.balance.toLocaleString('fr-FR')}
                                        </Tag>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <span className="text-md font-bold mb-2">
                                    Etat du rendez-vous
                                </span>
                                <div className='border border-gray-200 dark:border-gray-700 rounded-md mt-1'>
                                <Radio.Group value={patient.appointmentStatus} className='grid grid-cols-2 p-2 w-full text-[13px]'>
                                    <Radio readOnly className='mb-2' value={1}>Confirmé</Radio>
                                    <Radio readOnly className='mb-2' value={2}>Annulé et excusé</Radio>
                                    <Radio readOnly className='mb-0' value={3}>Annulé et non excusé</Radio>
                                    <Radio readOnly className='mb-0' value={4}>Suspendu</Radio>
                                </Radio.Group>
                                </div>
                            </div>
                        </div>
                        
                    </Card>
                ))}
            </div>
        </div>
        {/* <div className="text-right px-6 py-3 rounded-bl-lg rounded-br-lg">
            <Button
                className="ltr:mr-2 rtl:ml-2"
                variant="solid"
                size='sm'
                onClick={onDialogClose}
            >
                Tache terminée
            </Button>
            <Button variant="twoTone" size='sm' onClick={onDialogOk}>
                Modifier
            </Button>
        </div> */}
    </Dialog>
    </>
  )
}

export default WaitingListModal;

