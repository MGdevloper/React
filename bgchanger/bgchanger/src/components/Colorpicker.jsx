import React, { useState } from 'react';

function Colorpicker({ ref }) {
    const [color, setColor] = useState("#ffffff");
    const [copied, setCopied] = useState(false);

    // Copy color to clipboard
    const handleCopy = async () => {
        await window.navigator.clipboard.writeText(color);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1200);
        ref.current.value = color;
        ref.current.nextElementSibling.click()




    };


    return (
        <div className="fixed top-4 left-0 right-0 mx-auto z-50 flex justify-center px-2">
            <div className="w-full max-w-sm sm:max-w-md bg-gradient-to-br from-gray-900/80 via-blue-900/60 to-gray-800/80 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-5 flex flex-col items-center gap-5">
                <h2 className="text-xl font-bold text-white mb-1 tracking-wide text-center">🎨 Color Picker</h2>
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                    <input
                        type="color"
                        value={color}
                        onChange={e => setColor(e.target.value)}
                        className="w-14 outline-none h-14 rounded-lg border-white shadow cursor-pointer transition-all duration-200"
                    />
                    <input
                        type="text"
                        value={color}
                        readOnly
                        className="flex-1 px-3 py-2 rounded-lg bg-gray-900 text-white font-mono text-base border border-gray-700 outline-none text-center sm:text-left"
                    />
                    <button
                        onClick={handleCopy}
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow hover:scale-105 transition"
                    >
                        {copied ? "Copied!" : "Copy"}
                    </button>
                </div>
                <div
                    className="w-full h-10 rounded-xl mt-2 border border-gray-700 transition-all duration-300"
                    style={{ background: color }}
                />
                <span className="text-xs text-gray-300 text-center">Tip: Pick a color and copy its code!</span>
            </div>
        </div>
    );
}

export default Colorpicker