import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  banner?: string;
}

const Section = ({ id, title, children, banner }: SectionProps) => {
  return (
    <section id={id} className="border-b border-border bg-background py-10">
      <div className="container mx-auto max-w-[1100px] px-4">
        <h2 className="mb-6 border-l-[6px] border-accent pl-2.5 text-2xl font-bold">
          {title}
        </h2>
        {banner && (
          <div
            className="mb-4 h-48 w-full rounded-md border border-border bg-cover bg-center md:h-52"
            style={{ backgroundImage: `url(${banner})` }}
          />
        )}
        <div className="space-y-3 text-base leading-relaxed">{children}</div>
      </div>
    </section>
  );
};

export default Section;
