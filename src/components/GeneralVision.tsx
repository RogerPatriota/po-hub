'use client';

import { useState } from 'react';
import { CheckCheck, TrendingUp, CircleAlert, Clock3, Calendar, ChevronDown } from 'lucide-react';
import { DateRange, DayPicker } from 'react-day-picker';
import { format, parse } from 'date-fns';

import '@/styles/calendar.css';
import DataCard from '@/components/DataCard';
import { useWorkItem } from '@/services/azure/use-work-item';

function GeneralVision() {
  const [date, setDate] = useState<DateRange | undefined>();
  const [dateInput, setDateInput] = useState<string>('');
  const [quarter, setQuarter] = useState<string>('');

  const { data } = useWorkItem('Data Automation')

  const dataQuarter = {
    Q1: '01/04/2025 - 30/06/2025',
    Q2: '01/07/2025 - 30/09/2025',
    Q3: '01/10/2025 - 31/12/2025',
    Q4: '01/01/2025 - 31/03/2025',
  }

  const handleDateChange = (date: DateRange | undefined) => {
    setDate(date);
    if (date?.from) {
      if (date.to) {
        setDateInput(`${format(date.from, 'dd/MMM/yy')} - ${format(date.to, 'dd/MMM/yy')}`);
      } else {
        setDateInput(format(date.from, 'dd/MMM/yy'));
      }
    } else {
      setDateInput('');
    }
  };

  const handleQuarterChange = (quarter: keyof typeof dataQuarter) => {
    setQuarter(quarter);
    const [fromDate, toDate] = dataQuarter[quarter].split(' - ');
    console.log(fromDate, toDate);

    const newDataRange: DateRange = {
      from: parse(fromDate, "dd/MM/yyyy", new Date()),
      to: parse(toDate, "dd/MM/yyyy", new Date()),
    }
    console.log(newDataRange);
    handleDateChange(newDataRange);
  }

  return (
    <div>

      <div className='mb-5 flex justify-end join '>
          <button popoverTarget="rdp-popover" className="btn font-normal rounded-l border-y border-l border-gray-300" style={{ anchorName: "--rdp" } as React.CSSProperties}>
            <Calendar size={20} strokeWidth={1}/>
            {date ? dateInput : "Pick a date"}
          </button>
        <div popover="auto" id="rdp-popover" className="dropdown dropdown-left input-border" style={{ positionAnchor: "--rdp" } as React.CSSProperties}>
          <DayPicker className="react-day-picker text-black" mode="range" selected={date} onSelect={handleDateChange} />
        </div>

        <div className="dropdown dropdown-center">
          <div tabIndex={0} role="button" className="btn font-normal rounded-r border-y border-r border-gray-300">
            <ChevronDown size={20} strokeWidth={1}/>
            {quarter ? quarter : "Quarter"}
          </div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-30 p-2 shadow-sm">
            {Object.keys(dataQuarter).map((quarter) => {
              return (
                <li key={quarter}>
                  <a onClick={() => handleQuarterChange(quarter as keyof typeof dataQuarter)}>{quarter}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className='flex justify-between gap-6'>
            <DataCard title="Total de demandas" value="8" icon={<TrendingUp size={20} />}  />
            <DataCard title="Demandas Concluídas" value="2" icon={<CheckCheck size={20} color='green' />} color="text-green-600" />
            <DataCard title="Em desenvolvimento" value="2" icon={<Clock3 size={20} color='blue' />} color="text-blue-600" />
            <DataCard title="Backlog" value="2" icon={<CircleAlert size={20} />} />
      </div>

      {data?.map((p: {id: string}) => {
        return <p>{p.id}</p>
      })}
    </div>
  );
}

export default GeneralVision;