import { ReactNode, forwardRef, useEffect, useRef, useState } from 'react';
import type { CommonProps } from '../@types/common';
import "./accordion-style.css";
import TodoList from '@/views/pages/Agenda/components/tasks/TodoList';
import { HiMinus, HiPlus } from 'react-icons/hi';
import Badge from '../Badge';
interface AccordionItem {
    title: string | ReactNode;
    content?: string | ReactNode;
    contentType?: string | "text" | "checklist" | "image",
    checklist?:{
        id?: string,
        label:string, 
        checked:boolean
    }[],
}

export interface AccordionProps extends CommonProps {
    accordionItems: AccordionItem[]
    activeIndexes?: number[]
}



const Accordion = forwardRef<HTMLElement, AccordionProps>((props, ref) => {
    const { accordionItems, activeIndexes, className, ...rest } = props

    // const [activeIndex, setActiveIndex] = useState<number[]>([]);
    const [activeItems, setActiveItems] = useState<number[]>(activeIndexes || []);
    const [contentHeights, setContentHeights] = useState<number[]>([]);
    const [rotateIndices, setRotateIndices] = useState<number[]>([]);

    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const heights = contentRefs.current.map((ref) => (ref ? ref.scrollHeight : 0));
        setContentHeights(heights);
    }, [accordionItems]);

    useEffect(() => {
        const initialActiveItems = accordionItems
          .map((_, index) => index)
          .filter((index) => activeItems.includes(index));
    
        setActiveItems(initialActiveItems);
      }, [accordionItems]);

    const toggleAccordion = (index: number) => {
        if (activeItems.includes(index)) {
            setActiveItems(activeItems.filter((item) => item !== index));
          } else {
            setActiveItems([...activeItems, index]);
          }
    };

    return (
        <div>
        {accordionItems.map((item, index) => (
          <div key={index} className={`flex flex-col ${className}`}>
          <button
            className="py-6 box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex gap-3">
                <h6 className="text-white">{item.title}</h6>
                {item.contentType === "checklist" ?
                <Badge
                    className="flex items-center"
                    content={item.checklist?.length}
                    innerClass="bg-white text-nael-blue-600 font-bold"
                />
                :
                <></>
                }
                
            </div>
            {activeItems.includes(index) ?
            <HiMinus size={24} />
            :
            <HiPlus size={24} />
            }
            {/* <svg
              className={`w-6 h-6 transform transition-transform ${
                rotateIndices.includes(index) ? 'rotate-180' : ''
              }`}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9.293 7.293a1 1 0 0 1 1.414 0L12 8.586l1.293-1.293a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 0-1.414z"
              />
            </svg> */}
          </button>
          <div
            ref={(ref) => (contentRefs.current[index] = ref)}
            style={{ maxHeight: activeItems.includes(index) ? `${contentHeights[index]}px` : '0px' }}
            className="overflow-auto transition-max-height duration-700 ease-in-out"
          >
            {item.contentType === "text" ? 
                <div className="pb-10">{item.content}</div>
            : item.contentType === "checklist" ?
                <TodoList data={item.checklist ? item.checklist : []}/>
                :
                <></>
            }
          </div>
        </div>
        ))}
      </div>
    )
})

Accordion.displayName = 'Accordion'

export default Accordion;