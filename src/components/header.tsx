import { Home, Pizza, UtensilsCrossed } from 'lucide-react'

import { AccountMenu } from './account-menu'
import { NavLink } from './nav-link'
import { ThemeToggle } from './theme/theme-toggle'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="h-6 w-6 hidden md:block" />

        <Separator orientation="vertical" className="h-6 hidden md:block" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="h-8 w-8 md:h-4" />
            <span className='hidden md:block'>Início</span>
          </NavLink>
          <NavLink to="/orders">
            <UtensilsCrossed className="h-8 w-8 md:h-4" />
            <span className='hidden md:block'>Pedidos</span>
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
