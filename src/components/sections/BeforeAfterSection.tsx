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
      <div className="w-full px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#101E35] border border-white/15 text-slate-200 text-sm font-bold">
            <Sparkles className="w-4 h-4 text-[#00D2E0]" />
            <span>Proven Real-World Restoration Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            See the Difference: Before & After Restoration
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Drag the interactive slider below to inspect our real on-site restoration results. From flooded hardwood subfloors to pristine pre-loss condition.
          </p>
        </div>

        {/* Comparison Slider Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-[#101E35]">
            <ReactCompareSlider
              itemOne={
                <div className="relative w-full h-full">
                  <ReactCompareSliderImage
                    src="/images/before-damage.jpg"
                    alt="Severely water-damaged living room with 3 inches of standing floodwater on hardwood floor"
                    className="w-full h-[380px] sm:h-[480px] lg:h-[540px] object-cover object-center"
                  />
                  {/* Before Label */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 py-2 px-4 rounded-xl bg-[#101E35]/95 border border-white/20 text-slate-200 font-black text-sm tracking-wide uppercase backdrop-blur-md shadow-xl">
                    <Droplets className="w-4 h-4 text-[#00D2E0] fill-current" />
                    <span>BEFORE • 4&quot; Flood Water</span>
                  </div>
                </div>
              }
              itemTwo={
                <div className="relative w-full h-full">
                  <ReactCompareSliderImage
                    src="/images/after-restored.jpg"
                    alt="Exact same living room completely dried and restored to flawless pre-loss condition"
                    className="w-full h-[380px] sm:h-[480px] lg:h-[540px] object-cover object-center"
                  />
                  {/* After Label */}
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-2 py-2 px-4 rounded-xl bg-[#00D2E0] text-[#0B1528] font-black text-sm tracking-wide uppercase backdrop-blur-md shadow-xl shadow-cyan-500/20">
                    <Sparkles className="w-4 h-4 fill-current" />
                    <span>AFTER • 72-Hour Full Restoration</span>
                  </div>
                </div>
              }
              handle={
                <ReactCompareSliderHandle
                  buttonStyle={{
                    backdropFilter: 'blur(8px)',
                    background: '#00D2E0',
                    border: '3px solid #0B1528',
                    color: '#0B1528',
                    boxShadow: '0 0 20px rgba(0, 210, 224, 0.5)',
                  }}
                  linesStyle={{
                    color: '#00D2E0',
                    width: 3,
                  }}
                />
              }
              className="w-full h-full select-none"
            />

            {/* Bottom Summary Bar */}
            <div className="p-5 bg-[#14233D] border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-sm font-semibold">
              <div className="flex items-center gap-2.5 text-slate-200">
                <CheckCircle className="w-5 h-5 text-[#00D2E0] shrink-0" />
                <span>Zero Hardwood Warping or Cupping</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200">
                <CheckCircle className="w-5 h-5 text-[#00D2E0] shrink-0" />
                <span>100% Moisture Clearance Certificate</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200">
                <ShieldCheck className="w-5 h-5 text-[#00D2E0] shrink-0" />
                <span>Zero Mold Spore Growth Guarantee</span>
              </div>
            </div>
          </div>

          <p className="text-center text-sm font-medium text-slate-300 mt-4">
            &larr; Drag the center slider left and right to inspect the transformation &rarr;
          </p>
        </div>
      </div>
    </section>
  )
}
