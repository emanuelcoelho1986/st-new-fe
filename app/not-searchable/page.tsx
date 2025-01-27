import { Option } from "@/components/DropdownOptions";
import DropdownSelect from "@/components/DropdownSelect";
import Link from "next/link";

export default function NotSearchable() {

  const options: Option[] = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
    { value: "date", label: "Date" },
    { value: "elderberry", label: "Elderberry" },
  ]

  return (
    <div className="grid grid-rows-[20px_1fr_20px] p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Link href="/">Searchable</Link>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <DropdownSelect options={options} isSearchable={false} />
      </main>
    </div>
  );
}
