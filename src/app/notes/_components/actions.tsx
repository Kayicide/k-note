"use client"

import * as React from "react"
import { Dialog } from "@radix-ui/react-dialog"
import { GearIcon } from "@radix-ui/react-icons"

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog"
import { Button } from "~/components/ui/button"
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { Label } from "~/components/ui/label"
import { Switch } from "~/components/ui/switch"
import { toast } from "~/components/ui/use-toast"
import { signOut } from "next-auth/react"

export function Actions() {
  const [open, setIsOpen] = React.useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = React.useState(false)

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">
            <span className="sr-only">Actions</span>
            <GearIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onSelect={() => setIsOpen(true)}>
            Notes Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={() => signOut()}
            className="text-red-600"
          >
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={open} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Settings</DialogTitle>
            <DialogDescription>
              Note Feature Settings
            </DialogDescription>
          </DialogHeader>
          <div className="pb-6">
            <div className="flex items-start justify-between space-x-4 pt-3">
              <Switch name="show" id="show" defaultChecked={true} />
              <Label className="grid gap-1 font-normal" htmlFor="show">
                <span className="font-semibold">
                  SUPER COOL
                </span>
                <span className="text-sm text-muted-foreground">
                  This is a test setting that does something super cool I promise WOW
                  XD
                </span>
              </Label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}