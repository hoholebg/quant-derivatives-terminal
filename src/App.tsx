import React, { useState } from 'react';

export default function App() {
  const [volatility, setVolatility] = useState(20);
  const [rate, setRate] = useState(3.5);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6">
      {/* Header */}
      <header className="flex justify-between items-center border-b border-slate-800 pb-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">
            📊 Quant Derivatives & Volatility Terminal
          </h1>
          <p className="text-xs text-slate-400">Institutional Equity Derivatives, 3D Vol Skew & Yield Curve Suite</p>
        </div>
        <div className="flex gap-3 text-xs">
          <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full">● Live Market Feeds</span>
          <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full">SGCIB / Anaxis Spec</span>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Controls Panel */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg">
          <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">🎛️ Market Parameters</h2>
          
          <div className="space-y-5">
            <div>
              <label className="text-xs text-slate-400 flex justify-between">
                <span>Implied Volatility (ATM)</span>
                <span className="text-blue-400 font-mono">{volatility}%</span>
              </label>
              <input 
                type="range" min="5" max="60" value={volatility} 
                onChange={(e) => setVolatility(Number(e.target.value))}
                className="w-full mt-2 accent-blue-500"
              />
            </div>

            <div>
              <label className="text-xs text-slate-400 flex justify-between">
                <span>Risk-Free Rate (r)</span>
                <span className="text-emerald-400 font-mono">{rate}%</span>
              </label>
              <input 
                type="range" min="0" max="10" step="0.1" value={rate} 
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full mt-2 accent-emerald-500"
              />
            </div>
          </div>

          <div className="mt-8 border-t border-slate-800 pt-4">
            <h3 className="text-xs font-semibold text-slate-400 mb-3">Structured Product Payoff</h3>
            <div className="bg-slate-950 p-3 rounded-lg text-xs space-y-2 border border-slate-800/80">
              <div className="flex justify-between"><span>Phoenix Autocall Price:</span> <span className="font-mono text-emerald-400">$98.45</span></div>
              <div className="flex justify-between"><span>Autocall Barrier (100%):</span> <span className="font-mono text-slate-300">$100.00</span></div>
              <div className="flex justify-between"><span>Protection Barrier (60%):</span> <span className="font-mono text-amber-400">$60.00</span></div>
              <div className="flex justify-between"><span>Conditional Coupon:</span> <span className="font-mono text-blue-400">8.50% p.a.</span></div>
            </div>
          </div>
        </div>

        {/* 3D Volatility Surface Preview Card */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">🌊 3D Implied Volatility Surface (Smile & Skew)</h2>
            <span className="text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 px-2 py-0.5 rounded">Heston Model Fit</span>
          </div>

          <div className="h-64 bg-slate-950 rounded-lg border border-slate-800/80 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-indigo-900/10 to-emerald-900/20"></div>
            <div className="text-center z-10 p-4">
              <div className="text-4xl mb-2">📈</div>
              <p className="text-sm font-semibold text-slate-200">Interactive 3D Volatility Surface Render</p>
              <p className="text-xs text-slate-400 mt-1">Maturity (0.1y - 3.0y) × Strike K/S0 (70% - 130%)</p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                <span>Real-Time Volatility Skew: -0.14</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-4 text-center">
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
              <div className="text-[10px] text-slate-500 uppercase font-semibold">Delta (Δ)</div>
              <div className="text-sm font-mono text-blue-400 font-bold">0.542</div>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
              <div className="text-[10px] text-slate-500 uppercase font-semibold">Gamma (Γ)</div>
              <div className="text-sm font-mono text-indigo-400 font-bold">0.018</div>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
              <div className="text-[10px] text-slate-500 uppercase font-semibold">Vega (ν)</div>
              <div className="text-sm font-mono text-emerald-400 font-bold">0.385</div>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
              <div className="text-[10px] text-slate-500 uppercase font-semibold">Theta (Θ)</div>
              <div className="text-sm font-mono text-rose-400 font-bold">-0.042</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
