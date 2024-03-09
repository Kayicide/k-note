"use client"

import * as React from "react"

import { signIn } from "next-auth/react";
import { cn } from "~/lib/utils"
import { Icons } from "~/components/icons"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Button variant="outline" type="button" onClick={() => signIn("discord", {
        callbackUrl: `${window.location.origin}/notes`,
      })}>
        <Icons.discord className="mr-2 h-4 w-4" />
        Discord
      </Button>
    </div>
  )
}