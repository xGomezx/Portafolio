import React from 'react'

export const StackCard = ({ name, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-emerald-500 hover:bg-white/10 transition-all duration-300 cursor-default">
      <div className="bg-black/50 rounded-xl p-3">
        <Icon size={28} className="text-emerald-400" />
      </div>
      <span className="text-white text-sm sm:text-base font-semibold text-center">{name}</span>
    </div>
  )
}