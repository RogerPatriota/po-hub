import { CheckCheck, TrendingUp, CircleAlert, Clock3 } from 'lucide-react';
import DataCard from '@/components/DataCard';

function GeneralVision() {
  return (
    <div>
        <div className='flex justify-between'>
            <DataCard title="Total de demandas" value="8" icon={<TrendingUp size={20} />}  />
            <DataCard title="Demandas Concluídas" value="2" icon={<CheckCheck size={20} color='green' />} color="text-green-600" />
            <DataCard title="Em desenvolvimento" value="2" icon={<Clock3 size={20} color='blue' />} color="text-blue-600" />
            <DataCard title="Backlog" value="2" icon={<CircleAlert size={20} />} />
        </div>
    </div>
  );
}

export default GeneralVision;