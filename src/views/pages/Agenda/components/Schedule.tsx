import { useState } from 'react'
import classNames from 'classnames'
import Card from '@/components/ui/Card'
import Calendar from '@/components/ui/Calendar'
import Badge from '@/components/ui/Badge'
import useThemeClass from '@/utils/hooks/useThemeClass'
import { HiVideoCamera, HiDocumentText, HiChatAlt2 } from 'react-icons/hi'
import Button from '@/components/ui/Button'
import { Field, FieldArray, Form, Formik, getIn } from 'formik'
import { FormItem, FormContainer } from '@/components/ui/Form'
import Select from '@/components/ui/Select'
import { HiDotsVertical } from 'react-icons/hi'
import Dropdown from '@/components/ui/Dropdown'
import type { SyntheticEvent } from 'react'


type ScheduleProps = {
    data?: {
        id: string
        time: string
        eventName: string
        desciption: string
        type: string
    }[]
}

const scheduleData = [
    {
        id: '0',
        time: '10:00am',
        eventName: 'Sprint Planning',
        desciption: 'via Zoom',
        type: 'meeting',
    },
    {
        id: '1',
        time: '1:00pm',
        eventName: 'Design discussion',
        desciption: 'via Microsoft Teams',
        type: 'meeting',
    },
    {
        id: '2',
        time: '3:00pm',
        eventName: 'Create daily report',
        desciption: 'Daily task',
        type: 'task',
    },
    {
        id: '3',
        time: '4:00pm',
        eventName: 'MySql online workshop',
        desciption: 'Online workshop',
        type: 'workshop',
    },
];

// ******************************************************************

const dropdownItems = [
    { key: 'a', name: 'Item A' },
    { key: 'b', name: 'Item B' },
    { key: 'c', name: 'Item C' },
    { key: 'd', name: 'Item D' },
]

const onDropdownItemClick = (eventKey: string, e: SyntheticEvent) => {
    console.log('Dropdown Item Clicked', eventKey, e)
}

const onDropdownClick = (e: SyntheticEvent) => {
    console.log('Dropdown Clicked', e)
}

// ******************************************************************

const isToday = (someDate: Date) => {
    const today = new Date()
    return (
        someDate.getDate() === today.getDate() &&
        someDate.getMonth() === today.getMonth() &&
        someDate.getFullYear() === today.getFullYear()
    )
}

const EventIcon = ({ type }: { type: string }) => {
    const baseClass =
        'rounded-lg h-10 w-10 text-lg flex items-center justify-center'

    switch (type) {
        case 'meeting':
            return (
                <div
                    className={classNames(
                        baseClass,
                        'text-indigo-600 bg-indigo-100 dark:text-indigo-100 dark:bg-indigo-500/20'
                    )}
                >
                    <HiVideoCamera />
                </div>
            )
        case 'task':
            return (
                <div
                    className={classNames(
                        baseClass,
                        'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100'
                    )}
                >
                    <HiDocumentText />
                </div>
            )
        case 'workshop':
            return (
                <div
                    className={classNames(
                        baseClass,
                        'text-amber-600 bg-amber-100 dark:text-amber-100 dark:bg-amber-500/20'
                    )}
                >
                    <HiChatAlt2 />
                </div>
            )
        default:
            return null
    }
}

const Schedule = ({ data = [] }: ScheduleProps) => {
    const [value, setValue] = useState<Date | null>()

    const { textTheme } = useThemeClass()


    return (
        <Card className="mb-4">
            <div className="mx-auto max-w-[420px]">
                <Calendar
                    value={value}
                    dayClassName={(date, { selected }) => {
                        const defaultClass = 'text-base'

                        if (isToday(date) && !selected) {
                            return classNames(defaultClass, textTheme)
                        }

                        if (selected) {
                            return classNames(defaultClass, 'text-white')
                        }

                        return defaultClass
                    }}
                    dayStyle={() => {
                        return { height: 48 }
                    }}
                    renderDay={(date) => {
                        const day = date.getDate()

                        if (!isToday(date)) {
                            return <span>{day}</span>
                        }

                        return (
                            <span className="relative flex justify-center items-center w-full h-full">
                                {day}
                                <Badge
                                    className="absolute bottom-1"
                                    innerClass="h-1 w-1"
                                />
                            </span>
                        )
                    }}
                    onChange={(val) => {
                        setValue(val)
                    }}
                />
            </div>
            
            <hr className="my-6" />
            
            <div className="flex flex-col gap-3">
                <Button variant="solid">Nouveau rendez-vous</Button>
                <Button variant="twoTone">Voir la liste des rendez-vous</Button>
            </div>            
            
            <hr className="my-6" />

            <div className="flex flex-col">
                <FormItem
                    label="Patients"
                    className='flex justify-between m-2'
                >
                    <Select
                        placeholder="Nb. patients"
                        options={[
                            { value: '1', label: '1 patient'},
                            { value: '2', label: '2 patients'},
                        ]}
                    ></Select>
                </FormItem>
                <FormItem
                    label="Salles"
                    className='flex justify-between m-2'
                >
                    <Select
                        placeholder="Nb. salles"
                        options={[
                            { value: '1', label: '1 salle'},
                            { value: '2', label: '2 salles'},
                        ]}
                    ></Select>
                </FormItem>
            </div>

            <hr className="my-6" />

            {/* <h5 className="mb-4"></h5> */}
            <div className="flex items-center justify-between mb-6">
                <h4>Liste d'attente</h4>
                <Select
                    placeholder="Categorie"
                    options={[
                        { value: '1', label: 'A reporter'},
                        { value: '2', label: 'Validées'},
                    ]}
                ></Select>
            </div>
            {scheduleData.map((event) => (
                <div
                    key={event.id}
                    className="flex items-center justify-between rounded-md mb-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-600/40 cursor-pointer user-select"
                >
                    <div className="flex items-center gap-3">
                        <EventIcon type={event.type} />
                        <div>
                            <h6 className="text-sm font-bold">
                                {event.eventName}
                            </h6>
                            <p>{event.desciption}</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span>{event.time}</span>
                    </div>
                    <Dropdown title="..." onClick={onDropdownClick}>
                        {dropdownItems.map((item) => (
                            <Dropdown.Item
                                key={item.key}
                                eventKey={item.key}
                                onSelect={onDropdownItemClick}
                            >
                                {item.name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown>
                    
                </div>
            ))}

        </Card>
    )
}

export default Schedule
