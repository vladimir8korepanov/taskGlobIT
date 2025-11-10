import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = "Поиск..." }: SearchBarProps) {
  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-12 px-6 pr-14 rounded-3xl border border-blueberry bg-white text-plumbum placeholder:text-asphalt focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
      <Search className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-primary pointer-events-none" />
    </div>
  );
}

