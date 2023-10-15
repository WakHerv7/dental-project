import { forwardRef } from 'react'
import classNames from 'classnames'
import Tag from '@/components/ui/Tag'
import { HiArrowUp, HiArrowDown } from 'react-icons/hi'
// import PriorityColor from '@/utils/PriorityColor'
import type { ReactNode } from 'react'

type PriorityTagProps = {
    label?: string
    bgColor?: string
    textColor?: string
    className?: string
}

const PriorityTag = forwardRef<HTMLDivElement, PriorityTagProps>(
    (props, ref) => {
        const { label, className, bgColor, textColor } = props

        return (
            <Tag
                ref={ref}
                className={classNames(
                    'gap-1 font-bold border-0',
                    textColor,
                    bgColor,
                    className
                )}
            >
                <span>
                    {label}
                </span>
            </Tag>
        )
    }
)

PriorityTag.displayName = 'PriorityTag'

export default PriorityTag
