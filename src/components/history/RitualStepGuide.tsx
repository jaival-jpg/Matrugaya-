import React from 'react';
import { Shield, Award, Gift, Calendar, Check } from 'lucide-react';

export default function RitualStepGuide() {
  const steps = [
    {
      title: "Step 1: Sankalp (Sacred Intent)",
      subtitle: "Connecting the family tree and seeking blessings",
      icon: Shield,
      time: "Phase 1 - Near Holy Ghats",
      summary: "First, you sit with Pandit Prashant Pandya near the holy banks. Under the chanting of traditional Vedic hymns, you take water, rice, flowers, and copper coins in your palms to take a solemn vow ('Sankalp') dedicated solely to your deceased mother's soul.",
      benefits: [
        "Establishes a spiritual connection with your mother's ancestors",
        "Declares your sacred purpose of bringing liberation and peace",
        "Clears initial spiritual blockages before beginning the tarpan water rites"
      ]
    },
    {
      title: "Step 2: Tarpan (Water Offerings)",
      subtitle: "Satiating ancestral thirst at Bindu Sarovar",
      icon: Award,
      time: "Phase 2 - Holy waters edge",
      summary: "Under precise scriptural guidelines, black sesame seeds, barley seeds, and sacred Kusha grass are mixed with holy, energizing water from Bindu Sarovar. It is poured gently through your hands to satisfy and soothe the ancestral spirit.",
      benefits: [
        "Quenches the metaphysical thirst and hunger of the departed soul",
        "Releases lingering earthly emotional attachments and regrets",
        "Cleanses the family's lineage back generations"
      ]
    },
    {
      title: "Step 3: Pind Daan (Food Offerings)",
      subtitle: "Traditional rice and sesame balls offering",
      icon: Gift,
      time: "Phase 3 - Sacred Leaf Platters",
      summary: "Sacred food balls ('Pindas') are prepared representing the physical elements. Devotees prepare these using cooked rice, milk, honey, pure ghee, and black sesame seeds. These are arranged with love and devotion on fresh leaf platters.",
      benefits: [
        "Brings extreme energetic saturation and satiety to ancestors",
        "Fulfills deep maternal ancestral debt ('Matru Rina')",
        "Enables a smooth transition of the soul to higher consciousness fields"
      ]
    },
    {
      title: "Step 4: Vedic Mantras & Fire Havan",
      subtitle: "Sacred spiritual sound frequency fire ceremony",
      icon: Calendar,
      time: "Phase 4 - Yajna Altar",
      summary: "Panditji chants holy mantras from Purana scriptures. A sacred fire ceremony ('Yajna / Havan') is lit where special herbs, pure wood, and ghee are offered into the holy flames, transmitting physical prayers into non-physical spiritual dimensions.",
      benefits: [
        "Radiates powerful, positive cosmic vibrations throughout your lineage",
        "Assists the maternal soul in easily transcending cosmic planes (Moksha)",
        "Acts as a protective spiritual shield for descending generations"
      ]
    },
    {
      title: "Step 5: Brahmin Bhojan & Daan (Charity)",
      subtitle: "The closing offering of sincere gratitude",
      icon: Check,
      time: "Phase 5 - Bhojanshala / Charity Hall",
      summary: "The sacred Matrugaya Vidhi is completed by serving pure satvik vegetarian meals to local temple priests (Brahmins) with utmost respect. Devotees offer clothes, grains, and ancestral charity ('daan') to lock in the cosmic benefits of the service.",
      benefits: [
        "Completes the holy spiritual circle through acts of selfless charity",
        "Ensures long-term blessings of health, mental peace, and family harmony",
        "Fulfills our ancient sacred values with utmost dignity"
      ]
    }
  ];

  return (
    <div className="bg-[#FFFDF9] border-2 border-spiritual-gold/80 rounded-2xl p-6 md:p-10 shadow-xl relative overflow-hidden text-spiritual-charcoal">
      {/* Visual background highlight */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-spiritual-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-spiritual-terracotta/5 rounded-full blur-3xl pointer-events-none" />

      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs uppercase tracking-widest font-bold text-spiritual-terracotta bg-spiritual-sand border border-spiritual-gold/30 px-4 py-1.5 rounded-full inline-block mb-3">
          Vedic Practical Steps Guide
        </span>
        <h3 className="font-sans text-3xl md:text-4xl font-extrabold text-[#2A1D15] tracking-tight">
          How is Matrugaya Vidhi Conducted in Siddhpur?
        </h3>
        <p className="text-base text-spiritual-charcoal/80 mt-3 leading-relaxed">
          The step-by-step procedure is performed near the holy ghats of the sacred Bindu Sarovar under the strict guidelines of authentic scriptures. Below is the step-by-step practical timeline.
        </p>
      </div>

      {/* Vertical Timeline Presentation */}
      <div className="relative max-w-4xl mx-auto pl-4 sm:pl-8 space-y-12">
        {/* Continuous Guide Line linking steps */}
        <div className="absolute left-[23px] sm:left-[39px] top-6 bottom-6 w-0.5 border-l-2 border-dashed border-spiritual-terracotta/20 pointer-events-none" />

        {steps.map((step, idx) => {
          const IconComponent = step.icon;
          return (
            <div 
              key={idx} 
              className="relative flex flex-col md:flex-row items-start gap-6 md:gap-8 group transition-all duration-300"
            >
              {/* Timeline Icon Badge */}
              <div className="absolute left-[-23px] sm:left-[-39px] flex items-center justify-center z-10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-spiritual-gold flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-spiritual-terracotta group-hover:bg-[#FFFDF9] transition-all duration-300">
                  <IconComponent className="w-5 h-5 sm:w-7 sm:h-7 text-spiritual-terracotta" />
                </div>
              </div>

              {/* Step Card Content */}
              <div className="w-full bg-[#FCF8F2] border border-spiritual-gold/20 rounded-2xl p-6 md:p-8 hover:bg-[#FAF2E8] hover:border-spiritual-gold hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-spiritual-terracotta/10 pb-4 mb-4">
                  <div>
                    <span className="text-xs font-bold text-spiritual-terracotta font-mono uppercase tracking-wide">
                      {step.time}
                    </span>
                    <h4 className="font-sans text-xl md:text-2xl font-bold text-[#2A1D15] mt-1">
                      {step.title}
                    </h4>
                    <p className="text-sm font-medium text-spiritual-terracotta/80 mt-0.5">
                      {step.subtitle}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-base text-spiritual-charcoal leading-relaxed font-normal">
                    {step.summary}
                  </p>

                  {/* Spiritual benefits */}
                  <div className="bg-white/80 border border-spiritual-gold/15 p-4 rounded-xl space-y-2.5">
                    <span className="text-xs uppercase tracking-wider font-bold text-spiritual-charcoal/70 block">
                      Primary Spiritual Benefits:
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {step.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start space-x-2 text-xs text-spiritual-charcoal/95 leading-relaxed">
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 font-bold" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Completion Indicator */}
      <div className="text-center mt-12 pt-6 border-t border-spiritual-gold/20">
        <div className="inline-flex items-center justify-center space-x-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-2 rounded-full text-sm font-bold">
          <Check className="w-4 h-4" />
          <span>Completed Vedic Ritual brings absolute maternal liberation</span>
        </div>
      </div>
    </div>
  );
}
