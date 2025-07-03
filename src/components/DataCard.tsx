
type CaardProps = {
    title: string;
    value: string | number;
    icon: React.ReactNode;
    color?: string;
}

function DataCard({ title, value, icon, color }: CaardProps) {
  return (
    <div className="card bg-base-100 w-85 shadow-sm border border-gray-300">
      <div className="card-body px-7 py-5">
        <div className='flex flex-row justify-between items-center'>
          <h3 className="text-lg">{title}</h3>
          {icon}
        </div>
        <h2 className={`text-3xl font-semibold ${color}`}>{value}</h2>
      </div>
    </div>
  );
}

export default DataCard;