"use client";

import * as React from "react";
import Link from "next/link";
import Image from 'next/image';
import { useAnimate, AnimationSequence } from "framer-motion";
import { DIcons } from "dicons";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { HighlighterItem, HighlightGroup, Particles } from "@/components/ui/highlighter";

// Types
interface ServiceBubbleProps {
  id: string;
  text: string;
  className: string;
}

// Animation sequence with proper typing
const ANIMATION_SEQUENCE: AnimationSequence = [
  [
    "#pointer",
    { left: 200, top: 60 },
    { duration: 0, at: 0 }
  ],
  [
    "#javascript",
    { opacity: 1 },
    { duration: 0.3, at: "<" }
  ],
  [
    "#pointer",
    { left: 50, top: 102 },
    { duration: 0.5, ease: "easeInOut", at: "+0.5" }
  ],
  [
    "#javascript",
    { opacity: 0.4 },
    { duration: 0.1, at: "-0.3" }
  ],
  [
    "#react-js",
    { opacity: 1 },
    { duration: 0.3, at: "<" }
  ],
  [
    "#pointer",
    { left: 224, top: 170 },
    { duration: 0.5, ease: "easeInOut", at: "+0.5" }
  ],
  [
    "#react-js",
    { opacity: 0.4 },
    { duration: 0.1, at: "-0.3" }
  ],
  [
    "#typescript",
    { opacity: 1 },
    { duration: 0.3, at: "<" }
  ],
  [
    "#pointer",
    { left: 88, top: 198 },
    { duration: 0.5, ease: "easeInOut", at: "+0.5" }
  ],
  [
    "#typescript",
    { opacity: 0.4 },
    { duration: 0.1, at: "-0.3" }
  ],
  [
    "#next-js",
    { opacity: 1 },
    { duration: 0.3, at: "<" }
  ],
  [
    "#pointer",
    { left: 200, top: 60 },
    { duration: 0.5, ease: "easeInOut", at: "+0.5" }
  ],
  [
    "#next-js",
    { opacity: 0.5 },
    { duration: 0.1, at: "-0.3" }
  ]
];

// Rest of the components remain the same
const ServiceBubble = React.memo(function ServiceBubble({ id, text, className }: ServiceBubbleProps) {
  return (
    <div
      id={id}
      className={cn(
        "absolute rounded-3xl border border-slate-400 bg-slate-200 px-2 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800",
        className
      )}
    >
      {text}
    </div>
  );
});

const BackgroundLogo = React.memo(function BackgroundLogo() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px] animate-pulse" />
      <div className="relative top-40">
        <Image 
          src="/images/logo.png"
          alt="OYAPS Logo"
          width={400}
          height={400}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.12] mix-blend-screen animate-float filter drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]"
          priority
        />
      </div>
    </div>
  );
});

const AnimatedPointer = React.memo(function AnimatedPointer() {
  return (
    <div id="pointer" className="absolute">
      <svg
        width="16.8"
        height="18.2"
        viewBox="0 0 12 13"
        className="fill-cyan-500"
        stroke="white"
        strokeWidth="1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
        />
      </svg>
      <span className="bg-ali relative -top-1 left-3 rounded-3xl px-2 py-1 text-xs text-white">
        OYAPS
      </span>
    </div>
  );
});

const ContactButtons = React.memo(function ContactButtons() {
  return (
    <div className="flex flex-wrap gap-2">
      <Link href="https://calendly.com/oyaps/30min" target="_blank">
        <Button>Book a call</Button>
      </Link>
      <Link
        href="mailto:oyapsstudio@gmail.com"
        target="_blank"
        className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
      >
        <span className="flex items-center gap-1">
          <DIcons.Mail strokeWidth={1} className="h-5 w-5" />
        </span>
      </Link>
      <Link
        href="https://wa.me/+9647765155920"
        target="_blank"
        className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
      >
        <span className="flex items-center gap-1">
          <DIcons.WhatsApp strokeWidth={1} className="h-4 w-4" />
        </span>
      </Link>
    </div>
  );
});

export function Connect() {
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    const runAnimation = async () => {
      while (true) {
        await animate(ANIMATION_SEQUENCE);
      }
    };

    runAnimation();

    return () => {
      // Cleanup animation on unmount
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions, react-hooks/exhaustive-deps
      scope.current && animate(scope.current, { opacity: 1 });
    };
  }, [animate, scope]);

  return (
    <section id="contact" className="py-20 px-8 bg-gray-900">
      <HighlightGroup className="group h-full">
        <div className="group/item h-full md:col-span-6 lg:col-span-12" data-aos="fade-down">
          <HighlighterItem className="rounded-3xl p-6">
            <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-slate-800 bg-gray-800 dark:border-slate-800 dark:bg-black">
              <BackgroundLogo />
              
              <Particles
                className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                quantity={200}
                color="#555555"
                vy={-0.2}
              />

              <div className="flex justify-center">
                <div className="flex h-full flex-col justify-center gap-10 p-4 md:h-[300px] md:flex-row">
                  <div className="relative mx-auto h-[270px] w-[300px] md:h-[270px] md:w-[300px]" ref={scope}>
                    <ServiceBubble
                      id="next-js"
                      text="Web Application"
                      className="bottom-12 left-14"
                    />
                    <ServiceBubble
                      id="react-js"
                      text="Mobile Application"
                      className="left-2 top-20"
                    />
                    <ServiceBubble
                      id="typescript"
                      text="Ai & ML projects"
                      className="bottom-20 right-1"
                    />
                    <ServiceBubble
                      id="javascript"
                      text="Cyber Security"
                      className="right-12 top-10"
                    />
                    <AnimatedPointer />
                  </div>

                  <div className="-mt-20 flex h-full flex-col justify-center p-2 md:-mt-4 md:ml-10 md:w-[400px]">
                    <div className="flex flex-col items-center">
                      <h3 className="mt-6 pb-1 font-bold">
                        <span className="text-2xl md:text-4xl text-white">
                          Ready To Turn Your Ideas Into Reality?
                        </span>
                      </h3>
                    </div>
                    <p className="mb-4 text-white">
                      Feel free to reach out to us!
                    </p>
                    <ContactButtons />
                  </div>
                </div>
              </div>
            </div>
          </HighlighterItem>
        </div>
      </HighlightGroup>
    </section>
  );
}