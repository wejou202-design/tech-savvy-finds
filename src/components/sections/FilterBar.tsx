type Props = {
  options: string[];
  active: string;
  onChange: (value: string) => void;
};

const FilterBar = ({ options, active, onChange }: Props) => {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`rounded-full px-3 py-1 text-sm border transition-colors ${
            active === opt ? 'bg-primary text-primary-foreground' : 'hover:bg-accent hover:text-accent-foreground'
          }`}
          aria-pressed={active === opt}
        >
          {opt}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
