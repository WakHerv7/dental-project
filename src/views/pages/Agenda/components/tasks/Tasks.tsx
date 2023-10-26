import { Accordion } from '@/components/ui';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import useThemeClass from '@/utils/hooks/useThemeClass';
import { useState } from 'react';
import { HiPlusSm } from 'react-icons/hi';
import TodoList from './TodoList';


type TasksProps = {
    data?: {
        id: string
        time: string
        eventName: string
        desciption: string
        type: string
    }[]
}

const tasksList = [
    {
        title: 'Tâches en cours',
        contentType: "checklist",
        checklist:[
            {
                label: "Consulter la pile de documents laissés par l'assistant",
                checked: false,
            },
            {
                label: "Exercices de respiration pour se detendre",
                checked: true,
            },
            {
                label: "Recontrer le patient fortuné à 10h",
                checked: true,
            },
        ],
    },
    {
        title: 'Nouvelles tâches',
        contentType: "checklist",
        checklist:[
            {
                label: "Consulter la pile de documents laissés par l'assistant",
                checked: false,
            },
            {
                label: "Exercices de respiration pour se detendre",
                checked: true,
            },
            {
                label: "Recontrer le patient fortuné à 10h",
                checked: false,
            },
            {
                label: "Consulter la pile de documents laissés par l'assistant",
                checked: false,
            },
            {
                label: "Exercices de respiration pour se detendre",
                checked: true,
            },
            {
                label: "Recontrer le patient fortuné à 10h",
                checked: false,
            },
        ],
    },
    {
        title: 'Tâches achevées',
        contentType: "checklist",
        checklist:[
            {
                label: "Consulter la pile de documents laissés par l'assistant",
                checked: false,
            },
            {
                label: "Exercices de respiration pour se detendre",
                checked: true,
            },
            {
                label: "Recontrer le patient fortuné à 10h",
                checked: false,
            },
            {
                label: "Exercices de respiration pour se detendre",
                checked: true,
            },
            {
                label: "Recontrer le patient fortuné à 10h",
                checked: false,
            },
        ],
    },
];

const Tasks = ({ data = [] }: TasksProps) => {
    const [value, setValue] = useState<Date | null>()

    const { textTheme } = useThemeClass()


    return (
        <>        
        <Card className="mb-4 p-2 text-white bg-nael-blue-600">
            <div className="flex items-center justify-between mb-6">
                <h3 className='text-white'>Tâches</h3>
                <Button size="sm" variant='solid' className="flex gap-1 items-center text-white bg-nael-violet-600">
                    <HiPlusSm size={20}/>
                    Créer
                </Button>
            </div>
            <Accordion accordionItems={tasksList} activeIndexes={[0,2]}/>

        </Card>

        </>
    )
}

export default Tasks
