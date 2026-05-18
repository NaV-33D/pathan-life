import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ChevronRight, ChevronLeft, Ruler, User, ArrowRight } from 'lucide-react';

const STEPS = [
  { id: 'personal', title: 'Personal Info', icon: User },
  { id: 'measurements', title: 'Body Dimensions', icon: Ruler },
  { id: 'preference', title: 'Fitting Style', icon: Check },
];

export default function MeasurementForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    height: '',
    weight: '',
    chest: '',
    waist: '',
    shoulder: '',
    armLength: '',
    kurtaLength: '',
    fit: 'Slim Fit',
  });

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, STEPS.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="custom-order" className="py-24 bg-transparent">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            Digital Tailor
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl text-beige"
          >
            Bespoke <span className="italic">Measurements</span>
          </motion.h2>
        </div>

        <div className="glass-dark rounded-3xl p-8 md:p-12 shadow-2xl">
          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-12 relative lg:px-12">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2" />
            {STEPS.map((step, idx) => (
              <div key={step.id} className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                    idx <= currentStep 
                    ? 'bg-gold text-white shadow-lg shadow-gold/20' 
                    : 'bg-[#111] text-white/30 border border-white/10'
                  }`}
                >
                  <step.icon size={20} />
                </div>
                <span className={`text-[10px] mt-3 uppercase tracking-widest font-bold transition-colors ${
                  idx <= currentStep ? 'text-beige' : 'text-white/30'
                }`}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>

          {/* Form Content */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <motion.div
                  key="step0"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="grid grid-cols-1 md:grid-cols-1 gap-8"
                >
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-white/40">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-xl focus:outline-none focus:border-gold transition-colors text-beige font-medium"
                      onChange={handleInputChange}
                      value={formData.name}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-white/40">Height (cm)</label>
                      <input
                        type="number"
                        name="height"
                        placeholder="e.g. 180"
                        className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-xl focus:outline-none focus:border-gold transition-colors text-beige"
                        onChange={handleInputChange}
                        value={formData.height}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-white/40">Weight (kg)</label>
                      <input
                        type="number"
                        name="weight"
                        placeholder="e.g. 75"
                        className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-xl focus:outline-none focus:border-gold transition-colors text-beige"
                        onChange={handleInputChange}
                        value={formData.weight}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="grid grid-cols-2 gap-6"
                >
                  {[
                    { label: 'Chest (inches)', name: 'chest' },
                    { label: 'Waist (inches)', name: 'waist' },
                    { label: 'Shoulder (inches)', name: 'shoulder' },
                    { label: 'Arm Length (inches)', name: 'armLength' },
                    { label: 'Kurta Length (inches)', name: 'kurtaLength' },
                  ].map((field) => (
                    <div key={field.name} className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-white/40">{field.label}</label>
                      <input
                        type="number"
                        name={field.name}
                        placeholder="0.0"
                        className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-xl focus:outline-none focus:border-gold transition-colors text-beige"
                        onChange={handleInputChange}
                        // @ts-ignore
                        value={formData[field.name]}
                      />
                    </div>
                  ))}
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                   <div className="space-y-4">
                      <label className="text-xs uppercase tracking-widest font-bold text-white/40 block text-center mb-6">Select Preferred Fit</label>
                      <div className="grid grid-cols-3 gap-4">
                        {['Slim Fit', 'Regular Fit', 'Classic Fit'].map(fit => (
                          <button
                            key={fit}
                            onClick={() => setFormData({...formData, fit})}
                            className={`py-6 rounded-2xl border transition-all ${
                              formData.fit === fit 
                              ? 'border-gold bg-gold/10 text-gold shadow-sm' 
                              : 'border-white/10 text-white/40 hover:border-gold/30'
                            }`}
                          >
                            <span className="text-sm font-bold uppercase tracking-widest">{fit}</span>
                          </button>
                        ))}
                      </div>
                   </div>
                   
                   <div className="bg-emerald/10 p-6 rounded-2xl border border-emerald/20 text-center">
                     <p className="text-emerald text-sm font-medium">✨ All measurements are reviewed by our master tailors before production begins.</p>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-white/5">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-opacity ${
                currentStep === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100 text-beige/60 hover:text-gold'
              }`}
            >
              <ChevronLeft size={18} /> Previous
            </button>
            
            {currentStep === STEPS.length - 1 ? (
              <button
                className="px-10 py-4 bg-emerald text-white rounded-xl font-extrabold text-sm uppercase tracking-widest hover:bg-emerald-700 transition-colors flex items-center gap-2"
              >
                Submit Design <ArrowRight size={18} />
              </button>
            ) : (
              <button
                onClick={nextStep}
                className="px-10 py-4 bg-gold text-white rounded-xl font-extrabold text-sm uppercase tracking-widest hover:bg-gold-dark transition-colors flex items-center gap-2"
              >
                Next Step <ChevronRight size={18} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
