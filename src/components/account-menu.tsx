import { Building, ChevronDown, LogOut } from 'lucide-react'

// import { StoreProfileDialog } from './store-profile-dialog'
import { Button } from './ui/button'
import { Dialog, DialogTrigger } from './ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Skeleton } from './ui/skeleton'

export function AccountMenu() {
  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex select-none items-center gap-2"
          >
            Pizza Shop
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-screen flex flex-col justify-center items-end md:w-8 md:items-start md:w-56" align="end">
          {/* DropdownMenuLabel: item do menu não clicável */}
          <DropdownMenuLabel className="flex flex-col">
            <div className="space-y-1.5">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-24" />
            </div>
            <>
              <span className='text-3xl md:text-sm'>Jean Michel Biz</span>
              <span className="text-base font-normal text-muted-foreground md:text-xs">
                jeanmbiz@hotmail.com
              </span>
            </>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            {/* DropdownMenuItem: itens clicáveis do menu */}
            <DropdownMenuItem>
              <Building className="mr-2 h-6 w-6 md:w-4 md:h-4" />
              <span className='text-3xl md:text-sm'>Perfil da loja</span>
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem
            asChild
            className="text-rose-500 dark:text-rose-400"
          >
            <button className="flex flex-row justify-end w-full md:justify-start" onClick={() => console.log('sair')}>
              <LogOut className="mr-2 h-6 w-6 md:h-4 md:w-4" />
              <span className='text-3xl md:text-sm'>Sair</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Dialog>
  )
}
