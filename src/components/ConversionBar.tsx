import React from 'react';
import { motion } from 'framer-motion';
import { FlowingBackgroundRibbon } from './FlowingBackgroundRibbon';
import { 
  Search, 
  Users, 
  BarChart3, 
  Rocket 
} from 'lucide-react';

export const ConversionBar: React.FC = () => {
  // Pure mathematical C2 B-spline path with taller vertical clearance for zero congestion
  const ribbonPath = "M 492.79 50.46 L 499.19 50.00 L 505.54 50.05 L 511.84 50.56 L 518.07 51.52 L 524.23 52.92 L 530.29 54.73 L 536.24 56.95 L 542.09 59.56 L 547.80 62.54 L 553.38 65.86 L 558.80 69.52 L 564.06 73.50 L 569.15 77.77 L 574.06 82.32 L 578.76 87.14 L 583.25 92.20 L 587.52 97.50 L 591.56 103.01 L 595.35 108.72 L 598.89 114.60 L 602.15 120.65 L 605.14 126.84 L 607.83 133.15 L 610.22 139.58 L 612.28 146.09 L 614.03 152.69 L 615.42 159.34 L 616.47 166.03 L 617.16 172.74 L 617.46 179.47 L 617.38 186.18 L 616.92 192.86 L 616.08 199.51 L 614.88 206.10 L 613.34 212.62 L 611.46 219.05 L 609.25 225.39 L 606.74 231.61 L 603.93 237.71 L 600.83 243.66 L 597.46 249.47 L 593.83 255.09 L 589.95 260.54 L 585.83 265.77 L 581.49 270.81 L 576.94 275.61 L 572.19 280.15 L 567.26 284.45 L 562.15 288.48 L 556.88 292.23 L 551.46 295.66 L 545.90 298.78 L 540.22 301.58 L 534.42 304.03 L 528.53 306.12 L 522.55 307.85 L 516.49 309.17 L 510.37 310.10 L 504.21 310.62 L 498.00 310.70 L 491.77 310.33 L 485.53 309.53 L 479.27 308.37 L 473.03 306.98 L 466.79 305.45 L 460.56 303.89 L 454.37 302.42 L 448.20 301.14 L 442.07 300.16 L 435.99 299.59 L 429.96 299.53 L 423.99 300.06 L 418.11 301.13 L 412.31 302.74 L 406.61 304.87 L 401.03 307.49 L 395.58 310.58 L 390.27 314.14 L 385.12 318.12 L 380.14 322.53 L 375.34 327.32 L 370.75 332.49 L 366.37 337.99 L 362.25 343.80 L 358.39 349.87 L 354.83 356.18 L 351.58 362.69 L 348.68 369.36 L 346.14 376.17 L 343.99 383.07 L 342.25 390.04 L 340.95 397.04 L 340.09 404.05 L 339.67 411.04 L 339.66 417.99 L 340.06 424.91 L 340.86 431.75 L 342.03 438.52 L 343.56 445.20 L 345.45 451.76 L 347.68 458.20 L 350.22 464.49 L 353.08 470.63 L 356.24 476.58 L 359.68 482.33 L 363.38 487.89 L 367.34 493.21 L 371.55 498.29 L 375.98 503.13 L 380.62 507.68 L 385.47 511.94 L 390.50 515.90 L 395.70 519.53 L 401.07 522.83 L 406.58 525.77 L 412.22 528.33 L 417.98 530.51 L 423.84 532.29 L 429.80 533.64 L 435.83 534.56 L 441.93 535.02 L 448.07 535.02 L 454.25 534.57 L 460.46 533.75 L 466.69 532.65 L 472.93 531.39 L 479.16 530.04 L 485.39 528.72 L 491.60 527.51 L 497.78 526.51 L 503.93 525.82 L 510.02 525.54 L 516.07 525.70 L 522.05 526.30 L 527.97 527.33 L 533.81 528.80 L 539.57 530.68 L 545.24 532.97 L 550.81 535.67 L 556.29 538.79 L 561.66 542.29 L 566.90 546.17 L 572.01 550.43 L 576.96 555.03 L 581.71 559.96 L 586.24 565.18 L 590.53 570.67 L 594.54 576.42 L 598.26 582.39 L 601.66 588.57 L 604.70 594.92 L 607.37 601.44 L 609.63 608.09 L 611.48 614.85 L 612.92 621.70 L 613.96 628.63 L 614.62 635.61 L 614.91 642.63 L 614.83 649.65 L 614.39 656.67 L 613.60 663.67 L 612.49 670.63 L 611.04 677.52 L 609.29 684.33 L 607.22 691.04 L 604.87 697.62 L 602.23 704.07 L 599.32 710.36 L 596.14 716.46 L 592.71 722.36 L 589.04 728.05 L 585.13 733.50 L 581.00 738.69 L 576.66 743.60 L 572.12 748.22 L 567.38 752.51 L 562.47 756.48 L 557.38 760.08 L 552.13 763.32 L 546.73 766.16 L 541.19 768.59 L 535.52 770.58 L 529.73 772.12 L 523.83 773.20 L 517.83 773.87 L 511.75 774.16 L 505.58 774.15 L 499.35 773.87 L 493.07 773.38 L 486.75 772.73 L 480.39 771.97 L 474.01 771.18 L 467.63 770.37 L 461.24 769.61 L 454.87 768.96 L 448.53 768.47 L 442.21 768.19 L 435.95 768.17 L 429.75 768.45 L 423.61 769.10 L 417.56 770.17 L 411.59 771.71 L 405.74 773.75 L 400.02 776.27 L 394.46 779.25 L 389.08 782.66 L 383.93 786.46 L 379.01 790.67 L 374.37 795.23 L 370.02 800.13 L 366.00 805.35 L 362.33 810.87 L 359.03 816.64 L 356.12 822.67 L 353.56 828.92 L 351.32 835.36 L 349.35 841.97 L 347.62 848.73 L 346.09 855.63 L 344.72 862.61 L 343.47 869.68 L 342.31 876.81 L 341.20 883.96 L 340.10 891.11 L 338.97 898.25 L 337.78 905.35 L 336.49 912.38 L 335.05 919.32 L 333.44 926.15 L 331.61 932.83 L 329.52 939.35 L 327.14 945.69 L 324.44 951.82 L 321.41 957.71 L 318.06 963.38 L 314.42 968.78 L 310.48 973.90 L 306.27 978.75 L 301.80 983.28 L 297.08 987.50 L 292.12 991.39 L 286.95 994.92 L 281.57 998.09 L 275.99 1000.89 L 270.24 1003.29 L 264.33 1005.31 L 258.29 1006.95 L 252.14 1008.20 L 245.90 1009.09 L 239.59 1009.61 L 233.23 1009.74 L 226.86 1009.53 L 220.48 1008.95 L 214.12 1008.01 L 207.81 1006.72 L 201.56 1005.08 L 195.41 1003.10 L 189.36 1000.76 L 183.45 998.09 L 177.69 995.09 L 172.10 991.77 L 166.72 988.09 L 161.56 984.12 L 156.64 979.81 L 151.97 975.20 L 147.56 970.31 L 143.41 965.16 L 139.54 959.77 L 135.94 954.13 L 132.64 948.30 L 129.62 942.27 L 126.91 936.08 L 124.51 929.73 L 122.43 923.24 L 120.67 916.64 L 119.23 909.95 L 118.14 903.18 L 117.39 896.34 L 117.00 889.47 L 116.96 882.58 L 117.29 875.68 L 117.99 868.79 L 119.08 861.95 L 120.55 855.16 L 122.42 848.43 L 124.66 841.81 L 127.26 835.30 L 130.21 828.93 L 133.48 822.73 L 137.06 816.72 L 140.92 810.90 L 145.06 805.33 L 149.46 800.02 L 154.09 794.98 L 158.94 790.24 L 163.99 785.82 L 169.23 781.77 L 174.63 778.07 L 180.19 774.78 L 185.87 771.89 L 191.67 769.45 L 197.57 767.47 L 203.55 765.99 L 209.58 765.00 L 215.66 764.55 L 221.77 764.64 L 227.90 765.20 L 234.05 766.11 L 240.22 767.28 L 246.39 768.60 L 252.58 769.94 L 258.77 771.22 L 264.97 772.32 L 271.17 773.14 L 277.37 773.56 L 283.55 773.56 L 289.71 773.12 L 295.83 772.30 L 301.90 771.08 L 307.89 769.49 L 313.81 767.52 L 319.62 765.20 L 325.33 762.55 L 330.91 759.56 L 336.35 756.25 L 341.63 752.65 L 346.75 748.75 L 351.68 744.59 L 356.42 740.16 L 360.94 735.47 L 365.24 730.55 L 369.30 725.40 L 373.10 720.05 L 376.64 714.49 L 379.89 708.75 L 382.85 702.83 L 385.49 696.76 L 387.81 690.53 L 389.79 684.17 L 391.41 677.68 L 392.66 671.09 L 393.53 664.40 L 394.01 657.63 L 394.07 650.79 L 393.71 643.89 L 392.91 636.95 L 391.69 630.00 L 390.07 623.06 L 388.06 616.17 L 385.69 609.35 L 382.97 602.64 L 379.91 596.07 L 376.54 589.66 L 372.88 583.46 L 368.94 577.48 L 364.73 571.77 L 360.29 566.33 L 355.62 561.22 L 350.75 556.46 L 345.68 552.08 L 340.45 548.10 L 335.06 544.57 L 329.54 541.50 L 323.90 538.93 L 318.16 536.89 L 312.34 535.42 L 306.46 534.53 L 300.52 534.19 L 294.53 534.29 L 288.49 534.75 L 282.41 535.49 L 276.30 536.43 L 270.16 537.44 L 263.98 538.48 L 257.79 539.42 L 251.57 540.20 L 245.35 540.75 L 239.12 541.03 L 232.90 541.05 L 226.71 540.82 L 220.56 540.30 L 214.45 539.52 L 208.41 538.43 L 202.45 537.08 L 196.57 535.41 L 190.79 533.45 L 185.12 531.18 L 179.58 528.59 L 174.18 525.70 L 168.92 522.46 L 163.83 518.90 L 158.92 515.01 L 154.19 510.77 L 149.67 506.17 L 145.36 501.22 L 141.27 495.91 L 137.43 490.23 L 133.83 484.21 L 130.51 477.90 L 127.48 471.32 L 124.75 464.53 L 122.34 457.56 L 120.27 450.47 L 118.56 443.29 L 117.22 436.05 L 116.27 428.82 L 115.72 421.62 L 115.58 414.48 L 115.83 407.41 L 116.45 400.42 L 117.44 393.54 L 118.79 386.77 L 120.47 380.10 L 122.49 373.58 L 124.82 367.19 L 127.45 360.97 L 130.38 354.92 L 133.58 349.04 L 137.06 343.37 L 140.78 337.88 L 144.75 332.63 L 148.95 327.61 L 153.36 322.82 L 157.98 318.30 L 162.79 314.04 L 167.79 310.05 L 172.95 306.35 L 178.26 302.97 L 183.72 299.90 L 189.31 297.15 L 195.02 294.75 L 200.84 292.68 L 206.74 291.00 L 212.73 289.68 L 218.79 288.76 L 224.90 288.24 L 231.06 288.12 L 237.25 288.43 L 243.47 289.09 L 249.71 290.03 L 255.97 291.13 L 262.25 292.31 L 268.54 293.48 L 274.83 294.54 L 281.14 295.42 L 287.44 296.00 L 293.75 296.19 L 300.03 295.97 L 306.27 295.31 L 312.43 294.22 L 318.48 292.69 L 324.39 290.75 L 330.12 288.36 L 335.65 285.56 L 340.95 282.32 L 345.98 278.66 L 350.72 274.57 L 355.15 270.08 L 359.29 265.19 L 363.15 259.97 L 366.73 254.42 L 370.06 248.61 L 373.15 242.56 L 376.00 236.28 L 378.64 229.83 L 381.08 223.23 L 383.32 216.53 L 385.38 209.74 L 387.28 202.90 L 389.04 196.03 L 390.70 189.14 L 392.28 182.25 L 393.80 175.37 L 395.30 168.50 L 396.80 161.69 L 398.34 154.93 L 399.94 148.23 L 401.62 141.62 L 403.42 135.11 L 405.36 128.72 L 407.47 122.46 L 409.78 116.34 L 412.32 110.37 L 415.11 104.58 L 418.19 98.99 L 421.58 93.59 L 425.30 88.41 L 429.39 83.47 L 433.88 78.77 L 438.74 74.34 L 443.94 70.20 L 449.44 66.38 L 455.19 62.89 L 461.16 59.78 L 467.30 57.05 L 473.58 54.72 L 479.95 52.84 L 486.36 51.40 L 492.79 50.46 Z";

  const stages = [
    {
      id: '01',
      tag: '01. Strategy',
      title: 'Preliminary Research',
      mobileDesc: 'Business architecture & technical blueprints.',
      fullDesc: 'Defining business architecture, user needs, system workflows, and technical blueprints.',
      color: '#EC4A31',
      icon: (
        <Search className="w-6 h-6 sm:w-8 sm:h-8 md:w-11 md:h-11 text-slate-800 stroke-[1.8] group-hover:scale-110 transition-transform duration-300" />
      ),
    },
    {
      id: '02',
      tag: '02. Experience',
      title: 'Stakeholder Engagement',
      mobileDesc: 'Intuitive journeys & brand prototypes.',
      fullDesc: 'Crafting intuitive user journeys, brand-aligned interfaces, design systems, and clickable prototypes.',
      color: '#DF343D',
      icon: (
        <Users className="w-6 h-6 sm:w-9 sm:h-9 md:w-12 md:h-12 text-slate-800 stroke-[1.8] group-hover:scale-110 transition-transform duration-300" />
      ),
    },
    {
      id: '03',
      tag: '03. Engineering',
      title: 'Data Evaluation & Code',
      mobileDesc: 'Scalable cloud code & agile sprints.',
      fullDesc: 'Scalable cloud infrastructure, resilient microservices, rapid bi-weekly sprints, and test-driven code execution.',
      color: '#753B8F',
      icon: (
        <BarChart3 className="w-6 h-6 sm:w-9 sm:h-9 md:w-12 md:h-12 text-slate-800 stroke-[1.8] group-hover:scale-110 transition-transform duration-300" />
      ),
    },
    {
      id: '04',
      tag: '04. Quality & Scale',
      title: 'Communication of Findings',
      mobileDesc: 'Automated QA & continuous scaling.',
      fullDesc: 'Automated end-to-end regression testing, security audits, zero-downtime deployment, and continuous scaling.',
      color: '#4E89A9',
      icon: (
        <Rocket className="w-6 h-6 sm:w-8 sm:h-8 md:w-11 md:h-11 text-slate-800 stroke-[1.8] -rotate-45 group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
      ),
    },
  ];

  return (
    <section id="process" className="pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-10 lg:pb-12 bg-[#FCFCFD] border-t border-slate-100 relative z-20 overflow-hidden">
      
      {/* Dynamic Animated Flowing Neon Lines (Horizontal Right-to-Left - Hero background continuity) */}
      <FlowingBackgroundRibbon idPrefix="process" variant="horizontal-mid" opacity={0.65} />
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-purple-200/20 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-blue-200/20 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* ======================================================== */}
        {/* SECTION HEADER                                           */}
        {/* ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-10">
          <span className="text-[10px] sm:text-xs font-bold text-[#7C3AED] tracking-widest uppercase bg-[#F3E8FF] px-3.5 py-1.5 rounded-full mb-3 sm:mb-4 inline-block shadow-xs border border-purple-100">
            End-To-End Delivery
          </span>
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black text-[#0E0725] tracking-tight uppercase leading-[1.18] sm:leading-[1.15] mb-3 sm:mb-4">
            We Turn Complex Ideas Into Simple Digital Experiences.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-500 max-w-xl mx-auto">
            A proven 4-stage engineering lifecycle engineered for transparency, velocity, and enterprise reliability.
          </p>
        </div>

        {/* ======================================================== */}
        {/* SERPENTINE INFOGRAPHIC (Same Design for Desktop & Mobile) */}
        {/* ======================================================== */}
        <div className="relative w-full max-w-[860px] mx-auto select-none">
          
          {/* Base SVG Serpentine Ribbon with Smooth Edges & Animated Liquid Motion */}
          <svg 
            viewBox="0 0 800 1070" 
            className="w-full h-auto drop-shadow-md sm:drop-shadow-lg"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Dynamic Living Gradient with subtle breathing color pulse */}
              <linearGradient id="ribbonGradExact" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#EC4A31">
                  <animate attributeName="stop-color" values="#EC4A31;#F43F5E;#E11D48;#EC4A31" dur="8s" repeatCount="indefinite" />
                </stop>
                <stop offset="16%" stopColor="#E93B34">
                  <animate attributeName="stop-color" values="#E93B34;#FB7185;#F43F5E;#E93B34" dur="8s" repeatCount="indefinite" />
                </stop>
                <stop offset="36%" stopColor="#DF343D">
                  <animate attributeName="stop-color" values="#DF343D;#E11D48;#C026D3;#DF343D" dur="8s" repeatCount="indefinite" />
                </stop>
                <stop offset="55%" stopColor="#A63465">
                  <animate attributeName="stop-color" values="#A63465;#C026D3;#9333EA;#A63465" dur="8s" repeatCount="indefinite" />
                </stop>
                <stop offset="72%" stopColor="#753B8F">
                  <animate attributeName="stop-color" values="#753B8F;#9333EA;#6366F1;#753B8F" dur="8s" repeatCount="indefinite" />
                </stop>
                <stop offset="88%" stopColor="#636399">
                  <animate attributeName="stop-color" values="#636399;#3B82F6;#0284C7;#636399" dur="8s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#4E89A9">
                  <animate attributeName="stop-color" values="#4E89A9;#06B6D4;#0284C7;#4E89A9" dur="8s" repeatCount="indefinite" />
                </stop>
              </linearGradient>

              {/* Elevated Drop Shadow for 3D White Discs */}
              <filter id="nodeShadowExact" x="-35%" y="-35%" width="170%" height="170%">
                <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#0E0725" floodOpacity="0.18" />
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0E0725" floodOpacity="0.08" />
              </filter>

              {/* Traveling light pulse gradient */}
              <linearGradient id="travelPulseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Continuous Smooth Serpentine Ribbon Body with Subtle Liquid Breathing Float */}
            <motion.path 
              d={ribbonPath} 
              fill="url(#ribbonGradExact)"
              animate={{
                scale: [1, 1.008, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ transformOrigin: "400px 535px" }}
            />

            {/* Subtle animated traveling energy shimmer along centerline */}
            <path
              d="M 504.7 179.4 C 504.7 300, 227.9 300, 227.9 415.6 C 227.9 530, 504.7 530, 504.7 653.8 C 504.7 770, 229.0 770, 229.0 890.6"
              stroke="url(#travelPulseGrad)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="140 700"
              className="opacity-40 pointer-events-none"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="840"
                to="0"
                dur="4.5s"
                repeatCount="indefinite"
              />
            </path>

            {/* 4 Crisp Elevated Pure-White Circular Discs */}
            <circle cx="504.7" cy="179.4" r="81.8" fill="#FFFFFF" filter="url(#nodeShadowExact)" />
            <circle cx="227.9" cy="415.6" r="81.8" fill="#FFFFFF" filter="url(#nodeShadowExact)" />
            <circle cx="504.7" cy="653.8" r="81.8" fill="#FFFFFF" filter="url(#nodeShadowExact)" />
            <circle cx="229.0" cy="890.6" r="81.8" fill="#FFFFFF" filter="url(#nodeShadowExact)" />
          </svg>

          {/* ======================================================== */}
          {/* OVERLAY: Centered Clean Icons & Balanced Alternating Text*/}
          {/* Sits at exact cx, cy percentage centers with zero crowd  */}
          {/* ======================================================== */}

          {/* --- STATION 01 --- */}
          {/* Text 01 (Left) */}
          <div 
            className="absolute -translate-y-1/2 left-0 w-[40%] flex flex-col items-end justify-center text-right pr-2 sm:pr-4 pointer-events-auto"
            style={{ top: '16.77%' }}
          >
            <span className="text-[9px] sm:text-[11px] font-black text-[#EC4A31] tracking-wider uppercase mb-0.5 sm:mb-1 block">
              {stages[0].tag}
            </span>
            <h3 className="text-xs sm:text-base lg:text-xl font-black text-[#0E0725] tracking-tight uppercase leading-[1.15] mb-1 sm:mb-1.5">
              {stages[0].title}
            </h3>
            <p className="text-[10px] sm:hidden text-slate-500 leading-tight">
              {stages[0].mobileDesc}
            </p>
            <p className="hidden sm:block text-xs lg:text-[13px] text-slate-600 leading-relaxed max-w-[280px]">
              {stages[0].fullDesc}
            </p>
          </div>
          {/* Disc 01 Icon (Right, 63.09%, 16.77%) */}
          <div 
            className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-auto w-[20.45%] aspect-square group"
            style={{ left: '63.09%', top: '16.77%' }}
          >
            <div className="w-full h-full rounded-full flex items-center justify-center cursor-pointer">
              {stages[0].icon}
            </div>
          </div>

          {/* --- STATION 02 --- */}
          {/* Disc 02 Icon (Left, 28.49%, 38.85%) */}
          <div 
            className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-auto w-[20.45%] aspect-square group"
            style={{ left: '28.49%', top: '38.85%' }}
          >
            <div className="w-full h-full rounded-full flex items-center justify-center cursor-pointer">
              {stages[1].icon}
            </div>
          </div>
          {/* Text 02 (Right) */}
          <div 
            className="absolute -translate-y-1/2 right-0 w-[40%] flex flex-col items-start justify-center text-left pl-2 sm:pl-4 pointer-events-auto"
            style={{ top: '38.85%' }}
          >
            <span className="text-[9px] sm:text-[11px] font-black text-[#DF343D] tracking-wider uppercase mb-0.5 sm:mb-1 block">
              {stages[1].tag}
            </span>
            <h3 className="text-xs sm:text-base lg:text-xl font-black text-[#0E0725] tracking-tight uppercase leading-[1.15] mb-1 sm:mb-1.5">
              {stages[1].title}
            </h3>
            <p className="text-[10px] sm:hidden text-slate-500 leading-tight">
              {stages[1].mobileDesc}
            </p>
            <p className="hidden sm:block text-xs lg:text-[13px] text-slate-600 leading-relaxed max-w-[280px]">
              {stages[1].fullDesc}
            </p>
          </div>

          {/* --- STATION 03 --- */}
          {/* Text 03 (Left) */}
          <div 
            className="absolute -translate-y-1/2 left-0 w-[40%] flex flex-col items-end justify-center text-right pr-2 sm:pr-4 pointer-events-auto"
            style={{ top: '61.10%' }}
          >
            <span className="text-[9px] sm:text-[11px] font-black text-[#753B8F] tracking-wider uppercase mb-0.5 sm:mb-1 block">
              {stages[2].tag}
            </span>
            <h3 className="text-xs sm:text-base lg:text-xl font-black text-[#0E0725] tracking-tight uppercase leading-[1.15] mb-1 sm:mb-1.5">
              {stages[2].title}
            </h3>
            <p className="text-[10px] sm:hidden text-slate-500 leading-tight">
              {stages[2].mobileDesc}
            </p>
            <p className="hidden sm:block text-xs lg:text-[13px] text-slate-600 leading-relaxed max-w-[280px]">
              {stages[2].fullDesc}
            </p>
          </div>
          {/* Disc 03 Icon (Right, 63.09%, 61.10%) */}
          <div 
            className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-auto w-[20.45%] aspect-square group"
            style={{ left: '63.09%', top: '61.10%' }}
          >
            <div className="w-full h-full rounded-full flex items-center justify-center cursor-pointer">
              {stages[2].icon}
            </div>
          </div>

          {/* --- STATION 04 --- */}
          {/* Disc 04 Icon (Left, 28.62%, 83.23%) */}
          <div 
            className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-auto w-[20.45%] aspect-square group"
            style={{ left: '28.62%', top: '83.23%' }}
          >
            <div className="w-full h-full rounded-full flex items-center justify-center cursor-pointer">
              {stages[3].icon}
            </div>
          </div>
          {/* Text 04 (Right) */}
          <div 
            className="absolute -translate-y-1/2 right-0 w-[40%] flex flex-col items-start justify-center text-left pl-2 sm:pl-4 pointer-events-auto"
            style={{ top: '83.23%' }}
          >
            <span className="text-[9px] sm:text-[11px] font-black text-[#4E89A9] tracking-wider uppercase mb-0.5 sm:mb-1 block">
              {stages[3].tag}
            </span>
            <h3 className="text-xs sm:text-base lg:text-xl font-black text-[#0E0725] tracking-tight uppercase leading-[1.15] mb-1 sm:mb-1.5">
              {stages[3].title}
            </h3>
            <p className="text-[10px] sm:hidden text-slate-500 leading-tight">
              {stages[3].mobileDesc}
            </p>
            <p className="hidden sm:block text-xs lg:text-[13px] text-slate-600 leading-relaxed max-w-[280px]">
              {stages[3].fullDesc}
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};
