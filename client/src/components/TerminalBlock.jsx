import React from 'react';
import { Terminal } from 'lucide-react';

const TerminalBlock = ({ title, children, className = "" }) => (
    <div className={`border border-green-900/40 bg-black/80 backdrop-blur-sm p-1 ${className}`}>
        <div className="bg-green-900/20 px-2 py-1 flex items-center justify-between border-b border-green-900/40 mb-2">
            <span className="text-xs text-green-500 font-bold tracking-widest uppercase flex items-center gap-2">
                <Terminal size={12} /> {title}
            </span>
            <div className="flex gap-1">
                <div className="w-2 h-2 bg-green-900 rounded-full"></div>
                <div className="w-2 h-2 bg-zinc-800 rounded-full"></div>
            </div>
        </div>
        <div className="p-4 font-mono text-lg">
            {children}
        </div>
    </div>
);

export default TerminalBlock;
