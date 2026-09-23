'use client';

import { useCallback } from 'react';

const faqData = [
  {
    q: "Are you a packaging company or an operations company?",
    a: "Both. We design and produce packaging, but we also manage the supply chain and operations around it. Most clients start with one need and discover we can handle more. That's by design."
  },
  {
    q: "I already have a packaging supplier. Why would I need Logic?",
    a: "Your supplier makes boxes. We manage the system around those boxes — sourcing strategy, vendor coordination, cost optimization, retail compliance, inventory planning, and launch execution. Most of our clients still use their existing suppliers. We just make sure the whole operation runs instead of lurching from crisis to crisis."
  },
  {
    q: 'What does "month to month" actually mean? Can I cancel anytime?',
    a: "It means exactly that. No annual contracts, no cancellation penalties. We earn your business every month. Most clients stay because the value compounds over time — the longer we work together, the more we understand your supply chain and the more leverage we create. But you are never locked in."
  },
  {
    q: "We're pre-launch. Is it too early to work with Logic?",
    a: "No — this is actually the best time to engage. We're currently working with a pre-seed brand building their packaging system from scratch, designed to scale from first production run into commercial volumes and retail. Starting early means you avoid the expensive rework that comes from outgrowing packaging that was only built for launch."
  },
  {
    q: "How is this different from hiring a full-time ops person?",
    a: "A senior ops hire in California costs $150-200K in salary plus benefits, software, and recruiting fees — easily $250K+ all in. And that one person probably won't have deep expertise in packaging engineering, global sourcing, retail compliance, and inventory management. Our retainers start at $2,500 per month and give you access to all of that from day one."
  },
  {
    q: "Do you handle international sourcing and manufacturing?",
    a: "Yes. We source across 15+ countries including China, Vietnam, Thailand, India, Mexico, and Turkey. We manage supplier audits, factory vetting, freight, customs compliance, and quality control. Our supply chains carry ISO, FAMA, FSC, and FDA certifications."
  },
  {
    q: "What if our packaging isn't broken — we just want it to be better?",
    a: "That is a great place to start. Some of our best engagements are with brands whose packaging works fine but isn't optimized. We find cost savings, improve the unboxing experience, tighten retail presentation, or redesign for sustainability — all while maintaining what already works."
  },
  {
    q: "What kind of company helps with both packaging and supply chain?",
    a: "Logic Agency is a full-service packaging and supply chain partner. We handle packaging design, global sourcing, production management, retail compliance, and ongoing operations — all under one team. Most companies separate these functions across multiple vendors, which creates handoff problems and cost inefficiencies. We keep it integrated so nothing falls through the cracks."
  },
  {
    q: "Do I need a packaging agency or a supply chain consultant?",
    a: "If your packaging and supply chain challenges are connected — and they almost always are — you need a partner who handles both. A packaging agency will design a great box but won't manage the sourcing, freight, or retail compliance behind it. A supply chain consultant will optimize your logistics but won't touch the packaging design. Logic Agency bridges both, which is why our clients typically consolidate multiple vendor relationships into one engagement with us."
  },
  {
    q: "How do I find an outsourced operations team for my product brand?",
    a: "Look for a partner with hands-on experience in your product category, a global supplier network, transparent pricing, and a track record with brands at your scale. Logic Agency works on monthly retainers starting at $2,500/month, with no long-term contracts. We work with brands from pre-launch through $20M+ in revenue across beauty, CPG, and tech wearables. The best way to evaluate fit is a 15-minute call."
  }
];

export default function FaqAccordion() {
  const handleClick = useCallback((e) => {
    const fi = e.currentTarget;
    fi.classList.toggle('op');
  }, []);

  return (
    <div className="fg">
      {faqData.map((item, i) => (
        <div key={i} className="fi" onClick={handleClick}>
          <div className="fq">
            <h3>{item.q}</h3>
            <div className="ft">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </div>
          </div>
          <div className="fa">
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
