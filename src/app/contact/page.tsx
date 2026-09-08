'use client';

import TextDisperse from '@/app/contact/textDisperse/textDisperse';
import { clsx } from 'clsx';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ContactForm } from '@/app/contact/contactForm';
import { useToast } from '@/components/ui/use-toast';

export default function Contact() {
  const background = useRef(null);
  const emailRef = useRef(null);
  const { toast } = useToast();

  const setBackground = (isActive: any) => {
    gsap.to(background.current, {
      opacity: isActive ? 0.7 : 0
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('liaminvents@gmail.com');
  };

  const scrollToEmail = () => {
    copyEmail();

    const emailSection = document.getElementById('email');

    if (emailSection) {
      emailSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const sameSize =
    'text-[clamp(28px,3.2vw,64px)] font-normal leading-none';

  const forceSameSize =
    '[&_*]:!text-[clamp(28px,3.2vw,64px)] [&_*]:!font-normal [&_*]:!leading-none';

  return (
    <div className="-mt-20 bg-foreground text-white">
      <div className="flex min-h-screen w-full items-center justify-center px-6 pt-20">
        <div className="relative mx-auto flex w-full max-w-[1700px] flex-col items-center justify-center gap-10 text-center uppercase">

          {/* NAME */}
          <p className={`m-0 whitespace-nowrap ${sameSize}`}>
            Liam Cassano
          </p>

          {/* DISCIPLINES */}
          <p className={`m-0 whitespace-nowrap ${sameSize}`}>
            Architecture · Robotics · Fabrication · Toronto
          </p>

          {/* LINKS */}
          <div
            className={`flex w-full items-center justify-center gap-[0.9em] whitespace-nowrap ${sameSize}`}
          >
            <div className={forceSameSize}>
              <a
                href="https://www.linkedin.com/in/liam-cassano"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TextDisperse setBackground={setBackground}>
                  <p className="m-0 whitespace-nowrap">
                    → LinkedIn
                  </p>
                </TextDisperse>
              </a>
            </div>

            <div className={forceSameSize}>
              <TextDisperse
                setBackground={setBackground}
                onClick={() => {
                  toast({
                    description:
                      'Email copied to clipboard. You can also use the form below.'
                  });

                  scrollToEmail();
                }}
              >
                <p className="m-0 whitespace-nowrap">
                  → Email
                </p>
              </TextDisperse>
            </div>

            <div className={forceSameSize}>
              <a
                href="https://www.instagram.com/liamcassdesign?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TextDisperse setBackground={setBackground}>
                  <p className="m-0 whitespace-nowrap">
                    → Instagram
                  </p>
                </TextDisperse>
              </a>
            </div>
          </div>

          <div
            ref={background}
            className={clsx(
              'pointer-events-none absolute inset-0 -z-10 h-full w-full bg-foreground opacity-0'
            )}
          />
        </div>
      </div>

      <div
        id="email"
        ref={emailRef}
        className="px-6 sm:px-20 lg:px-56"
      >
        <ContactForm />
      </div>
    </div>
  );
}