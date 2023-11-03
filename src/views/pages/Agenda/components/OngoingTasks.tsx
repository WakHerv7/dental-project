import React, {useState} from 'react'
import Tag from '@/components/ui/Tag';
import classNames from 'classnames';
import Button from '@/components/ui/Button';
import TasksListModal from '../modals/tasks/TasksListModal';
import TaskFormModal from '../modals/tasks/TaskFormModal';

const OngoingTasks = () => {
    const [taskListIsOpen, setTaskListIsOpen] = useState(false);
    const [taskFormIsOpen, setTaskFormIsOpen] = useState(false);
  return (
    <div>
        <div className="flex items-center gap-2">
            <h4 className="my-3">Taches en cours</h4>
            <Tag                    
                className={classNames(
                    'font-bold border-0',
                    'text-white',
                    'bg-amber-500',
                    'h-fit'
                )}
            >
                <span>
                    5
                </span>
            </Tag>
        </div>
        
        <div className="flex flex-col gap-3">
            <Button variant="solid"
            onClick={()=>setTaskFormIsOpen(true)}
            >Nouvelle tache</Button>
            <TaskFormModal
            dialogIsOpen={taskFormIsOpen}
            setIsOpen={setTaskFormIsOpen}
            />
            <Button variant="twoTone" 
            onClick={()=>setTaskListIsOpen(true)}
            >Voir toutes les taches
            </Button>
            <TasksListModal
            dialogIsOpen={taskListIsOpen}
            setIsOpen={setTaskListIsOpen}
            />
        </div> 
    </div>
  )
}

export default OngoingTasks