'use client';

import { useState } from 'react';
import { CheckCheck, TrendingUp, CircleAlert, Clock3, Calendar } from 'lucide-react';
import { DateRange, DayPicker } from 'react-day-picker';
import DataCard from '@/components/DataCard';
import { format } from 'date-fns';

function GeneralVision() {
  const [date, setDate] = useState<DateRange | undefined>();
  const [dateInput, setDateInput] = useState<string>('');

  const handleDateChange = (date: DateRange | undefined) => {
    setDate(date);
    if (date?.from) {
      if (date.to) {
        setDateInput(`${format(date.from, 'dd/MMM/yyyy')} - ${format(date.to, 'dd/MMM/yyyy')}`);
      } else {
        setDateInput(format(date.from, 'dd/MMM/yyyy'));
      }
    } else {
      setDateInput('');
    }
  };

  return (
    <div>
      <div>
        <button popoverTarget="rdp-popover" className="input input-border" style={{ anchorName: "--rdp" } as React.CSSProperties}>
          <Calendar size={20} strokeWidth={1}/>
          {date ? dateInput : "Pick a date"}
        </button>
        <div popover="auto" id="rdp-popover" className="dropdown input-border" style={{ positionAnchor: "--rdp" } as React.CSSProperties}>
          <DayPicker className="react-day-picker" mode="range" selected={date} onSelect={handleDateChange} />
        </div>
      </div>
      <div className='flex justify-between gap-6'>
            <DataCard title="Total de demandas" value="8" icon={<TrendingUp size={20} />}  />
            <DataCard title="Demandas Concluídas" value="2" icon={<CheckCheck size={20} color='green' />} color="text-green-600" />
            <DataCard title="Em desenvolvimento" value="2" icon={<Clock3 size={20} color='blue' />} color="text-blue-600" />
            <DataCard title="Backlog" value="2" icon={<CircleAlert size={20} />} />
        </div>
    </div>
  );
}

export default GeneralVision;