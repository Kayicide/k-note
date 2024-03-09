"use client"

import * as React from "react"
import { Separator } from "~/components/ui/separator";
import { Actions } from "./actions";

export function Header() {
  return (
    <>
        <div className="h-full flex-col flex">
            <div className="flex flex-col items-start justify-between space-y-2 py-4 px-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16 bg-popover">
                <h2 className="w-44 text-lg font-semibold">K-Notes</h2>
                <div className="ml-auto flex w-full space-x-2 sm:justify-end">
                    {/* <PresetSelector presets={presets} />
                    <PresetSave />
                    <div className="hidden space-x-2 md:flex">
                    <CodeViewer />
                    <PresetShare />
                    </div> */}
                    <Actions />
                </div>
            </div>
        </div>
        <Separator></Separator>
    </>
  )
}