import FullCalendar from "@fullcalendar/react";
import { React } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";


export default function Calendar(){



    return (
        <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
        />
    );

};