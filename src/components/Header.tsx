import React from 'react'
import { Eye } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-hermes-dark py-4 px-6 flex items-center justify-center shadow-md">
      <Eye size={32} className="text-hermes-accent mr-2" />
      <h1 className="text-2xl font-bold">Hermes</h1>
    </header>
  )
}

export default Header