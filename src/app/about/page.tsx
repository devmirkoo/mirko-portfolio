'use client'

import { Suspense, useState, useEffect, ReactNode } from 'react';
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { Skeleton } from "@/components/ui/skeleton";

import nextConfig from '../../../next.config.mjs'

const BLUR_FADE_DELAY = 0.04;

interface TypeEffectProps {
  text: string;
  delay?: number;
}

function TypeEffect({ text, delay = 30 }: TypeEffectProps) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (typeof text !== 'string') {
      console.error('Il valore passato a TypeEffect non è una stringa.');
      return;
    }

    let i = 0;
    setDisplayText(''); // Reset the displayed text before starting the new effect

    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1)); // Aggiorna il testo con il slice del testo originale
        i++;
      } else {
        clearInterval(timer);
      }
    }, delay);

    return () => clearInterval(timer);
  }, [text, delay]);

  return <span>{displayText}</span>;
}

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8 pb-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                About Me
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Suspense fallback={<Skeleton className="size-40 rounded-full" />}>
                <Avatar className="size-40 border stroke-2 stroke-black">
                  <AvatarImage className="scale-125 bg-white" alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </Suspense>
            </BlurFade>
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-2xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              yOffset={8}
              text={`Who really is ${DATA.name.split(" ")[0]}?`} />
            <BlurFade delay={BLUR_FADE_DELAY * 1}>
              <p className="text-muted-foreground text-md">
                <TypeEffect text="You just know my name, but you don't know me. Let me introduce myself. 🔍" />
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="history">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="mx-auto w-full max-w-[850px] pb-24">
            <h2 className="text-2xl pb-3 font-bold">History</h2>
            <div className="flex flex-col md:flex-row md:items-center justify-between border rounded-lg p-4">
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <div className="flex-1 flex flex-col md:flex-row items-center">
                  <div className="md:flex-1 flex flex-col justify-center pr-4">
                    <Markdown>
                      {DATA.history.born.description}
                    </Markdown>
                  </div>
                  <div className="md:flex-1 flex justify-center mt-4 md:mt-0">
                    <Suspense fallback={<Skeleton className="w-full md:w-[350px] max-w-[350px] h-[262px] rounded-2xl" />}>
                      <Image
                        className='w-full md:w-[350px] max-w-[350px] rounded-2xl border-2 border-white'
                        src={`${nextConfig.basePath}/littleMe.png`}
                        alt="Born"
                        width={480}
                        height={360}
                      />
                    </Suspense>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <div className="mx-auto w-full max-w-[850px] pb-24">
            <h2 className="text-right text-2xl pb-3 font-bold">Discovery Computing</h2>
            <div className="flex flex-col md:flex-row md:items-center justify-between border rounded-lg p-4">
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <div className="flex-1 flex flex-col md:flex-row items-center">
                  <div className="md:flex-1 flex justify-center md:pr-4">
                    <Suspense fallback={<Skeleton className="w-full md:w-[350px] max-w-[350px] h-[262px] rounded-2xl" />}>
                      <Image
                        className='w-full md:w-[350px] max-w-[350px] rounded-2xl border-2 border-white'
                        src={`${nextConfig.basePath}/elementarySchool.png`}
                        alt="Discovery Computing"
                        width={480}
                        height={360}
                      />
                    </Suspense>
                  </div>
                  <div className="md:flex-1 flex flex-col justify-center mt-4 md:mt-0">
                    <Markdown>
                      {DATA.history.discoveryComputing.description}
                    </Markdown>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <div className="mx-auto w-full max-w-[850px] pb-24">
            <h2 className="text-2xl pb-3 font-bold">Discovery Programming</h2>
            <div className="flex flex-col md:flex-row md:items-center justify-between border rounded-lg p-4">
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <div className="flex-1 flex flex-col md:flex-row items-center">
                  <div className="md:flex-1 flex flex-col justify-center pr-4">
                    <Markdown>
                      {DATA.history.discoveryProgramming.description}
                    </Markdown>
                  </div>
                  <div className="md:flex-1 flex flex-col items-center py-0 md:py-4">
                    <Suspense fallback={<Skeleton className="w-full md:w-[300px] max-w-[300px] h-[533px] rounded-2xl" />}>
                      <Image
                        className='w-full md:w-[300px] max-w-[300px] rounded-2xl border-2 border-white'
                        src={`${nextConfig.basePath}/codePhoto.png`}
                        alt="Code"
                        width={1080}
                        height={1920}
                      />
                    </Suspense>
                    <p className="text-muted-foreground font-light text-sm pt-2 text-center ">
                      Screen of some code I was working on regarding a Discord Bot in Javascript that communicates with the Roblox API
                    </p>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="mx-auto w-full max-w-[850px] pb-24">
            <h2 className="text-center text-2xl pb-3 font-bold">Present</h2>
            <div className="flex flex-col items-center border rounded-lg p-4">
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <div className="flex flex-col items-center">
                  <Markdown>
                    {DATA.history.present.description}
                  </Markdown>
                  <div className="w-[300px] h-[300px] overflow-hidden rounded-full border-2 border-white">
                    <Suspense fallback={<Skeleton className="w-full h-full rounded-full" />}>
                      <Image
                        className="w-full h-full object-cover"
                        src={`${nextConfig.basePath}/meNow.png`}
                        alt="Present"
                        width={300}
                        height={300}
                      />
                    </Suspense>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </BlurFade>
      </section>

      <section id="thanks">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 22}>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Thank You ❤️
              </h2>
              <p className="mx-auto max-w-[600px] text-balance text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Thank you for viewing the About page. If you want to get to know me or talk to me, please look at the list of my socials.{" "}
                <Link
                  href={DATA.url}
                  className="text-blue-500 hover:underline"
                >
                  Click here to get redirected to my socials list.
                </Link>{" "}<br /> 
              I&apos;ll respond whenever I can. I will ignore all soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}