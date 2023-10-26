import { Accordion } from '@/components/ui';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import useThemeClass from '@/utils/hooks/useThemeClass';
import { useState } from 'react';
import { HiPlusSm } from 'react-icons/hi';
import Checkbox from '@/components/ui/Checkbox'


type TodoListProps = {
    data: {
        id?: string,
        label: string,
        checked: boolean,
    }[]
}

const TodoList = ({ data = [] }: TodoListProps) => {

    return (
        <>
            {data.map((item, index) => (
                <Checkbox
                    key={index}
                    className="mb-4 text-white"
                    checked={item.checked}
                >
                    {item.label}
                </Checkbox>
            ))}

        </>
    )
}

export default TodoList
