import React, {useState} from 'react'
import { Avatar, Card, Tag, Table, Dialog, Button, Radio } from '@/components/ui';
import { FormItem } from '@/components/ui/Form';
import { Input, Select } from '@/components/ui';
import { HiMail, HiPencil, HiTrash } from 'react-icons/hi';
import { FaPlaneDeparture, FaGift, FaUsers, FaUmbrellaBeach, FaSkating
     } from 'react-icons/fa';

const { Tr, Th, Td, THead, TBody } = Table

const holidays = [
    {
        motif: "Congés de noel",
        codeMotif: 'noel',
    },
    {
        motif: "Conférence",
        codeMotif: 'conf',
    },
    {
        motif: "Voyage",
        codeMotif: 'voya',
    },
    {
        motif: "Vacances",
        codeMotif: 'vaca',
    },
    {
        motif: "Congés",
        codeMotif: 'cong',
    },
    {
        motif: "Vacances",
        codeMotif: 'vaca',
    },
    {
        motif: "Conférence",
        codeMotif: 'conf',
    },
];

type Option = {
    value: string
    label: string
}
const options: Option[] = [
    { value: '1', label: 'Motif 1'},
    { value: '2', label: 'Motif 2'},
    { value: '3', label: 'Motif 3'},
]

type IconeMotifProps = {
    value: string
}
const IconeMotif = (props:IconeMotifProps) => {
    let icon = null;

    switch (props.value) {
        case 'noel':
            icon = <FaGift size={16} color='#0F94CD'/>;
            break;
        case 'conf':
            icon = <FaUsers size={16} color='#0F94CD'/>;
            break;
        case 'cong':
            icon = <FaSkating size={16} color='#0F94CD'/>;
            break;
        case 'voya':
            icon = <FaPlaneDeparture size={16} color='#0F94CD'/>;
            break;
        case 'vaca':
            icon = <FaUmbrellaBeach size={16} color='#0F94CD'/>;
            break;
    }

    return icon;
}

const CongesEtFermetures = () => {
    const [motif, setMotif] = useState<any | null>('ep');

  return (
    <div className='flex gap-4'>
        <div className="max-w-[200px]">
            <div className='mb-4 text-sm'>
                Définir une période de vacances ou toute autre période d'indisponibilité
            </div>
            <FormItem label="Date de début" className=''>
                <Input type="Date" name="day-start"/>
            </FormItem>
            <FormItem label="Date de fin" className=''>
                <Input type="Date" name="day-end"/>
            </FormItem>
            <FormItem  label="Motif">
                <Select<Option>
                    options={options}
                    size="sm"
                    className="min-w-[130px]"
                    value={options.filter((option) => option.value === motif)}
                    onChange={(user)=>setMotif(user?.value)}
                />
            </FormItem>
            <Button
                className="ltr:mr-2 rtl:ml-2 mb-4 w-full bg-nael-violet-600"
                variant="solid"
                size='sm'
            >
                Ajouter
            </Button>
        </div>

        <Table>
            <THead>
                <Tr>
                    <Th>Date de début</Th>
                    <Th>Date de fin</Th>
                    <Th>Motif</Th>
                    <Th>Action</Th>
                </Tr>
            </THead>
            <TBody>
            {/* timeSlots */}
            {holidays.map((item, index) => (
                <Tr key={index}>
                    <Td className='flex text-xs'>
                        20/03/2023
                    </Td>
                    <Td className=" text-xs">
                        05/09/2023
                    </Td>
                    <Td className="flex gap-3 text-xs ">
                        <IconeMotif value={item.codeMotif}/>
                        <span>{item.motif}</span>
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
  )
}

export default CongesEtFermetures
