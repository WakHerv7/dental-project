import React, {useState} from 'react'
import { Avatar, Card, Tag, Table, Dialog, Button, Radio } from '@/components/ui';
import { FormItem } from '@/components/ui/Form';
import { Input, Select } from '@/components/ui';
import { HiMail, HiPencil, HiTrash } from 'react-icons/hi';
import { FaPlaneDeparture, FaGift, FaUsers, FaUmbrellaBeach, FaSkating
     } from 'react-icons/fa';
import { types } from 'util';
import ColorSelector from './ColorSelector';

const { Tr, Th, Td, THead, TBody } = Table

const typesRdv = [
    {
        name: "Consultation",
        color: 'blue',
    },
    {
        name: "Chirurgie",
        color: 'purple',
    },
    {
        name: "Prothese conjointe",
        color: 'green',
    },
    {
        name: "Prothese adjointe",
        color: 'orange',
    },
    {
        name: "Soins",
        color: 'cyan',
    },
    {
        name: "Divers",
        color: 'red',
    }, 
];

const salles = [
    {
        name: "Salle 1",
    },
    {
        name: "Salle 2",
    },
    {
        name: "Salle 3",
    },
];

type ColorBoxProps = {
    color: string,
    width?: number,
    height?: number,
}
const ColorBox = (props:ColorBoxProps) => {
    return (
        <>
        <div
        style={{
            width: props.width || "50",
            height: props.height || 20,
            background: props.color,
        }}
        ></div>
        </>
    )
}
const RendezVous = () => {
    const [motif, setMotif] = useState<any | null>('ep');

  return (
    <>
    <div className='flex gap-10 mb-5'>
        <div className="">
            <div className='text-sm pt-3 min-w-[300px]'>
                Définir des types de rendez-vous
            </div>
        </div>

        <div className="flex flex-col gap-4">
            
            <div className="flex gap-4 w-full">
                <div className="flex">
                    <Input type="text" className="w-full h-fit p-[6px]" name="type-rdv" placeholder='Type de RDV'/>
                    <ColorSelector size={35} dropdownPosition={"below"}/>
                </div>
                <Button
                    className="ltr:mr-2 rtl:ml-2 bg-nael-violet-600"
                    variant="solid"
                    size='sm'
                >
                    Ajouter
                </Button>
            </div>

            <Table>
                <THead>
                    <Tr>
                        <Th>Type de Rdv</Th>
                        <Th>Couleur</Th>
                        <Th>Action</Th>
                    </Tr>
                </THead>
                <TBody>
                {/* timeSlots */}
                {typesRdv.map((item, index) => (
                    <Tr key={index}>
                        <Td className='flex text-xs '>
                            {item.name}
                        </Td>
                        <Td className=" text-xs">
                            <ColorBox color={item.color}/>
                        </Td>                    
                        <Td className="text-xs">
                            <div className="flex gap-3">
                            <span className={`w-fit text-white bg-orange-500 rounded-[5px] p-[5px]`}>
                                <HiPencil size={16}/>
                            </span>
                            <span className={`w-fit text-white bg-red-500 rounded-[5px] p-[5px]`}>
                                <HiTrash size={16}/>
                            </span>
                            </div>
                        </Td>
                    </Tr>
                ))}                            
                </TBody>
            </Table>
        </div>
    </div>

    <hr/>

    <div className='flex gap-10 mt-10'>
        <div className="">
            <div className='text-sm pt-3 min-w-[300px]'>
                Enregistrer des salles
            </div>
        </div>

        <div className="flex flex-col gap-4">
            
            <div className="flex gap-4 w-full">
                <div className="flex">
                    <Input type="text" className="w-full h-fit p-[6px]" name="type-rdv" placeholder='Nom de salle'/>
                    
                </div>
                <Button
                    className="ltr:mr-2 rtl:ml-2 bg-nael-violet-600"
                    variant="solid"
                    size='sm'
                >
                    Ajouter
                </Button>
            </div>

            <Table>
                <THead>
                    <Tr>
                        <Th>Nom de la salle</Th>
                        <Th>Action</Th>
                    </Tr>
                </THead>
                <TBody>
                {/* timeSlots */}
                {salles.map((item, index) => (
                    <Tr key={index}>
                        <Td className='flex text-xs '>
                            {item.name}
                        </Td>                   
                        <Td className="text-xs">
                            <div className="flex gap-3">
                            <span className={`w-fit text-white bg-orange-500 rounded-[5px] p-[5px]`}>
                                <HiPencil size={16}/>
                            </span>
                            <span className={`w-fit text-white bg-red-500 rounded-[5px] p-[5px]`}>
                                <HiTrash size={16}/>
                            </span>
                            </div>
                        </Td>
                    </Tr>
                ))}                            
                </TBody>
            </Table>
        </div>
    </div>

    </>
  )
}

export default RendezVous
