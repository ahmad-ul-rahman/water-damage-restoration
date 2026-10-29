import React from 'react'
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from 'react-compare-slider'
import { Droplets, Sparkles, CheckCircle, ShieldCheck } from 'lucide-react'

export const BeforeAfterSection: React.FC = () => {
  return (
    <section id="before-after" className="relative py-24 bg-[#0B1528] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E5FF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14233D] border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-bold uppercase tracking-wider">
            <span>Proven Real-World Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            See the Difference:{' '}
            <span className="bg-gradient-to-r from-[#00E5FF] to-cyan-300 bg-clip-text text-transparent">
              Before & After Restoration
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Drag the interactive slider below to inspect our real on-site restoration results. From flooded hardwood subfloors to pristine pre-loss condition.
          </p>
        </div>

        {/* Comparison Slider Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#1E3352] shadow-2xl bg-[#101E35]">
            <ReactCompareSlider
              itemOne={
                <div className="relative w-full h-full">
                  <ReactCompareSliderImage
                    src="/images/before-damage.jpg"
                    alt="Severely water-damaged living room with 3 inches of standing floodwater on hardwood floor"
                    className="w-full h-[360px] sm:h-[480px] lg:h-[540px] object-cover object-center"
                  />
                  {/* Before Label */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 py-1.5 px-3.5 rounded-lg bg-red-600/90 text-white font-extrabold text-xs tracking-wider uppercase backdrop-blur-md shadow-lg">
                    <Droplets className="w-3.5 h-3.5 fill-current" />
                    <span>BEFORE • 4&quot; Flood Water</span>
                  </div>
                </div>
              }
              itemTwo={
                <div className="relative w-full h-full">
                  <ReactCompareSliderImage
                    src="/images/after-restored.jpg"
                    alt="Exact same living room completely dried and restored to flawless pre-loss condition"
                    className="w-full h-[360px] sm:h-[480px] lg:h-[540px] object-cover object-center"
                  />
                  {/* After Label */}
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-2 py-1.5 px-3.5 rounded-lg bg-[#00E5FF] text-[#0B1528] font-extrabold text-xs tracking-wider uppercase backdrop-blur-md shadow-lg shadow-cyan-500/30">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    <span>AFTER • 72-Hour Full Restoration</span>
                  </div>
                </div>
              }
              handle={
                <ReactCompareSliderHandle
                  buttonStyle={{
                    backdropFilter: 'blur(8px)',
                    background: '#00E5FF',
                    border: '3px solid #0B1528',
                    color: '#0B1528',
                    boxShadow: '0 0 20px rgba(0, 229, 255, 0.6)',
                  }}
                  linesStyle={{
                    color: '#00E5FF',
                    width: 3,
                  }}
                />
              }
              className="w-full h-full select-none"
            />

            {/* Bottom Summary Bar */}
            <div className="p-4 sm:p-5 bg-[#14233D] border-t border-[#1E3352] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-[#00E5FF] flex-shrink-0" />
                <span>Zero Hardwood Warping or Cupping</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle className="w-4 h-4 text-[#00E5FF] flex-shrink-0" />
                <span>100% Moisture Clearance Certificate</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#00E5FF] flex-shrink-0" />
                <span>Zero Mold Spore Growth Guarantee</span>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-slate-400 mt-3">
            &larr; Drag the center slider left and right to inspect the transformation &rarr;
          </p>
        </div>
      </div>
    </section>
  )
}
