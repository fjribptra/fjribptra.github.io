"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

interface ProjectCardProps {
    image: string,
    title: string,
    linkToProject: string,
    children: React.ReactNode
}

export default function ProjectCard(props: ProjectCardProps) {
    const router = useRouter()

    function onClickCard(linkToProject: ProjectCardProps['linkToProject']) {
        Swal.fire({
            title: `<div class="flex flex-col justify-center items-center"><p>Do you want to visit this site?</p><p class="text-xs text-blue-400">${linkToProject}</p></div>`,
            showCancelButton: true,
            confirmButtonText: "Visit",
            denyButtonText: `Cancel`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              router.push(`${linkToProject}`)
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
    }

    return (
        <button onClick={() => onClickCard(props.linkToProject)} className="bg-slate-200 w-full">
          <Image className="w-full h-[200px]" src={props.image} alt='' width={200} height={400} />
          <div className="bg-slate-100 p-2 flex flex-col gap-3">
              <h2 className="font-bold text-left">{props.title}</h2>
              <div className="flex gap-3 items-center">
              <p className="text-sm">Stack :</p>
                {props.children}
              </div>
          </div>
        </button>
    )
}