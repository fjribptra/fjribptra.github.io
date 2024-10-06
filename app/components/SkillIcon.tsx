type SkillIconProps = {
    title: string,
    children: React.ReactNode
}

export default function SkillIcon({children, title}: SkillIconProps) {
    return (
        <div className="border border-slate-200 rounded p-2 flex justify-center items-center gap-3 w-fit">
            {children}
            {title}
          </div>
    )
}