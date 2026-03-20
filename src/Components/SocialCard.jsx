import React from 'react'

export const SocialCard = ({item}) => {
    return (
        <a href={item.link} target="_blank" rel="noopener noreferrer"  className='flex items-center gap-4 p-4 mt-4 bg-black/30 rounded-xl border border-white/5 cursor-pointer hover:bg-[#00ff88]/10 transition-colors'>
                <div className="text-[#00ff88]">{item.icon}</div>
                <div>
                    <p className="text-[10px] uppercase text-gray-500 font-bold">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                </div>
        </a>
    )
}
