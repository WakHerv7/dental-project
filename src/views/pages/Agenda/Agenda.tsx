import Container from '@/components/shared/Container'
import Schedule from './components/Schedule'
import Activities from './components/Activities'
import { useEffect } from 'react'
import CalendarView from '@/components/shared/CalendarView'
import EventDialog, { EventParam } from './components/EventDialog'
import {
    getProjectDashboardData,
    useAppDispatch,
    useAppSelector,
} from './store'

import reducer, {
    getEvents,
    updateEvent,
    setSelected,
    openDialog,
    useAppDispatch as useCalendarAppDispatch,
    useAppSelector as useCalendarAppSelector,
} from './store/calendar'
import { injectReducer } from '@/store'
import cloneDeep from 'lodash/cloneDeep'
import dayjs from 'dayjs'
import type {
    EventDropArg,
    EventClickArg,
    DateSelectArg,
} from '@fullcalendar/core'

injectReducer('projectDashboard', reducer)
injectReducer('crmCalendar', reducer)

const Agenda = () => {
    // projectDashboard     *****************************    
    const dispatch = useAppDispatch()
    const dashboardData = useAppSelector(
        (state) => state.projectDashboard.data.dashboardData
    )
    const loading = useAppSelector(
        (state) => state.projectDashboard.data.loading
    )
    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const fetchData = () => {
        dispatch(getProjectDashboardData())
    }

    // Calendar     *****************************
    const dispatchCalendar = useCalendarAppDispatch()
    const events = useCalendarAppSelector((state) => state.crmCalendar.data.eventList)

    useEffect(() => {
        dispatchCalendar(getEvents())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const onCellSelect = (event: DateSelectArg) => {
        const { start, end } = event
        dispatchCalendar(
            setSelected({
                type: 'NEW',
                start: dayjs(start).format(),
                end: dayjs(end).format(),
            })
        )
        dispatchCalendar(openDialog())
    }
    const onEventClick = (arg: EventClickArg) => {
        const { start, end, id, title, extendedProps } = arg.event
        dispatchCalendar(
            setSelected({
                type: 'EDIT',
                eventColor: extendedProps.eventColor,
                title,
                start,
                end,
                id,
            })
        )
        dispatchCalendar(openDialog())
    }
    const onSubmit = (data: EventParam, type: string) => {
        let newEvents = cloneDeep(events)
        if (type === 'NEW') {
            newEvents.push(data)
        }

        if (type === 'EDIT') {
            newEvents = newEvents.map((event) => {
                if (data.id === event.id) {
                    event = data
                }
                return event
            })
        }
        dispatchCalendar(updateEvent(newEvents))
    }
    const onEventChange = (arg: EventDropArg) => {
        const newEvents = cloneDeep(events).map((event) => {
            if (arg.event.id === event.id) {
                const { id, extendedProps, start, end, title } = arg.event
                event = {
                    id,
                    start: dayjs(start).format(),
                    end: dayjs(end).format(),
                    title,
                    eventColor: extendedProps.eventColor,
                }
            }
            return event
        })
        dispatchCalendar(updateEvent(newEvents))
    }

    return (
        <div className="h-full w-full">
            <div className="flex md:flex-col xl:flex-row gap-4">
                <div className="flex flex-col gap-4">
                    <div className="xl:w-[380px]">
                        <Schedule data={dashboardData?.scheduleData} />
                        {/* <Activities data={dashboardData?.activitiesData} /> */}
                    </div>
                </div>
                <div className="flex flex-col gap-4 flex-auto">
                    <CalendarView
                        editable
                        selectable
                        events={events}
                        eventClick={onEventClick}
                        select={onCellSelect}
                        eventDrop={onEventChange}
                    />
                    <EventDialog submit={onSubmit} />
                </div>
            </div>
            
            
        </div>
    )
}

export default Agenda
