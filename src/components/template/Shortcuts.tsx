import { useState, useRef, useEffect } from 'react'
import classNames from 'classnames'
import withHeaderItem from '@/utils/hoc/withHeaderItem'
import useThemeClass from '@/utils/hooks/useThemeClass'
import {  HiChevronRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { MemoSvg } from '@/assets/svg'



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
    
  
    return (
        <>
            <div
                className={classNames(className, '')}
            >
                {shortcuts.map((data, index) => (
                            <ListItem
                            key={data.label + index}
                            data={data}
                        />
                        ))}

            </div>
            
        </>
    )
}

const Shortcuts = withHeaderItem(_Shortcuts)

export default Shortcuts
