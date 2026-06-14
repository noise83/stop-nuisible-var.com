import type { FAQItem } from "@/data/site";

export function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details key={item.question} className="group rounded-[8px] border border-[#102337]/12 bg-white p-5">
          <summary className="cursor-pointer list-none font-bold text-[#102337]">
            {item.question}
            <span className="float-right text-[#bf593f] group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 leading-7 text-[#607080]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
