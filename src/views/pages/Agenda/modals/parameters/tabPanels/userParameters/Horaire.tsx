import React from 'react'
import { Avatar, Card, Tag, Table, Dialog, Button, Radio } from '@/components/ui';
import { FormItem } from '@/components/ui/Form';
import { Input } from '@/components/ui';

const { Tr, Th, Td, THead, TBody } = Table

const timeSlots = [
    {
        jour: "Lundi",
    },
    {
        jour: "Mardi",
    },
    {
        jour: "Mercredi",
    },
    {
        jour: "Jeudi",
    },
    {
        jour: "Vendredi",
    },
    {
        jour: "Samedi",
    },
    {
        jour: "Dimanche",
    },
];


const Horaire = () => {
  return (
    <div>
        <div className="flex gap-3 mb-5">
            <FormItem label="De" className='flex gap-2 mb-0'>
                <Input type="Date" name="day-start"/>
            </FormItem>
            <FormItem label="à" className='flex gap-2 mb-0'>
                <Input type="Date" name="day-end"/>
            </FormItem>
        </div>

        <Table>
            <THead>
                <Tr>
                    <Th>Jours</Th>
                    <Th>Debut de journée</Th>
                    <Th>Pause déjeuner</Th>
                    <Th>Fin de journée</Th>
                </Tr>
            </THead>
            <TBody>
            {/* timeSlots */}
            {timeSlots.map((item, index) => (
                <Tr key={index}>
                    <Td className='flex'>
                        <span>{item.jour}</span>
                    </Td>
                    <Td className="">
                        <Input type="Time" value={'07:30'} name="daytime-start"/>
                    </Td>
                    <Td className="flex gap-3">
                        <Input type="Time" name="pause-start" value={'12:00'} disabled={true}/>
                        <Input type="Time" name="pause-end" value={'14:00'} disabled={true}/>
                    </Td>
                    <Td className="">
                        <Input type="Time" value={'19:30'} name="daytime-end"/>
                    </Td>
                </Tr>
            ))}                            
            </TBody>
        </Table>
    </div>
  )
}

export default Horaire
