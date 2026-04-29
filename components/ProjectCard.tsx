import Link from "next/link";

interface ProjectCardProps {
  href: string;
  coverBg: string;
  coverContent: React.ReactNode;
  tags: { label: string; bg: string; color: string }[];
  title: string;
  description: string;
}

export default function ProjectCard({
  href,
  coverBg,
  coverContent,
  tags,
  title,
  description,
}: ProjectCardProps) {
  return (
    <Link href={href} className="block rounded-lg overflow-hidden shadow-sm">
      {/* Cover */}
      <div
        className="w-full h-[267px] flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: coverBg }}
      >
        {coverContent}
      </div>
      {/* Info */}
      <div className="bg-white px-5 py-4">
        <div className="flex gap-2 mb-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-[8px] px-2 py-1 rounded-sm font-normal"
              style={{ backgroundColor: tag.bg, color: tag.color }}
            >
              {tag.label}
            </span>
          ))}
        </div>
        <div className="space-y-1">
          <p
            className="text-[22px] font-medium leading-tight"
            style={{ color: "#000" }}
          >
            {title}
          </p>
          <p className="text-[12px] leading-snug" style={{ color: "#666" }}>
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
