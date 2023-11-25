// import { useState } from 'react'
import { ReactNode, forwardRef, useEffect, useRef, useState } from 'react';
// import Avatar from '@/components/ui/Avatar'
import {Avatar, Upload, Button} from '@/components/ui'
import { HiOutlinePlus, HiUser } from 'react-icons/hi'
import classNames from 'classnames'
import type { CommonProps } from '../@types/common';

export interface AvatarInputProps extends CommonProps {
    size?:number,
    name?: string,
    label?: string,
}
const AvatarInput = forwardRef<HTMLElement, AvatarInputProps>((props, ref) => {
    const { size, name, label, className, ...rest } = props

    const [avatarImg, setAvatarImg] = useState<string | null>(null)

    const onFileUpload = (files: File[]) => {
        if (files.length > 0) {
            setAvatarImg(URL.createObjectURL(files[0]))
        }
    }

    const beforeUpload = (files: FileList | null) => {
        let valid: string | boolean = true

        const allowedFileType = ['image/jpeg', 'image/png']
        if (files) {
            for (const file of files) {
                if (!allowedFileType.includes(file.type)) {
                    valid = 'Please upload a .jpeg or .png file!'
                }
            }
        }

        return valid
    }

    return (
        <div>
            <div className='flex gap-4 items-center'>
            <Upload
                className={classNames('cursor-pointer', className)}
                showList={false}
                name={name && name}
                uploadLimit={1}
                beforeUpload={beforeUpload}
                onChange={onFileUpload}
            >
                <Button
                    className="ltr:mr-2 rtl:ml-2 bg-nael-gray hover:bg-nael-gray"
                    variant="solid"
                    size='sm'
                >
                    {label && label}
                </Button>
            </Upload>
            <Avatar
                size={size ? size : 88}
                src={avatarImg as string}
                icon={<HiUser />}
            />
            </div>

            {/* <Upload
                className={classNames('cursor-pointer', className)}
                name={name}
                showList={false}
                uploadLimit={1}
                beforeUpload={beforeUpload}
                onChange={onFileUpload}
            >
                <Avatar
                    size={size ? size : 88}
                    src={avatarImg as string}
                    icon={<HiOutlinePlus />}
                />
            </Upload> */}
        </div>
    );
});

AvatarInput.displayName = 'AvatarInput'

export default AvatarInput;
