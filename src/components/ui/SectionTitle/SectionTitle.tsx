

// import { useState } from 'react'
import { ReactNode, forwardRef, useEffect, useRef, useState } from 'react';
// import Avatar from '@/components/ui/Avatar'
import {Avatar, Upload, Button} from '@/components/ui'
import { HiOutlinePlus, HiUser } from 'react-icons/hi'
import classNames from 'classnames'
import type { CommonProps } from '../@types/common';

export interface SectionTitleProps extends CommonProps {
    title: string,
}
const SectionTitle = forwardRef<HTMLElement, SectionTitleProps>((props, ref) => {
    const { title, className, ...rest } = props

    return (
        <div>
            <div className='relative'>
                <div className='text-nael-gray text-sm w-fit bg-white  pr-3'>
                    {title}
                </div>
                <div className={`
                absolute
                top-[50%]
                left-0
                w-[100%]
                h-[1px]
                z-[-1]
                bg-gray-300`}>            
                </div>
                
            </div>
        </div>
    );
});

SectionTitle.displayName = 'SectionTitle'

export default SectionTitle;
