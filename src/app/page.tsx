"use client";
import { ThemeSwitcher } from "@/components/global/ThemeSwitcher";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffectSmooth } from "@/components/ui/type-writer-effect";
import { useEffect, useState } from "react";
export default function Home() {
  const [isTextGeneratedVisible, setIsTextGeneratedVisible] = useState(false);
  const [isText1Visible, setisText1Visible] = useState(false);
  useEffect(() => {
    const timer2 = setTimeout(() => {
      setisText1Visible(true);
    }, 3800);

    return () => {
      clearTimeout(timer2);
    };
  }, []);

  const Title = [
    {
      text: "Welcome",
    },
    {
      text: "to",
    },
    {
      text: "my",
    },
    {
      text: "developer",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Space!",
    },
  ];
  const subHeading =
    "I'm a curious and creative developer who thrives on building dynamic web applications using  MERN stack.";
  return (
    <main>
      <HeroHighlight>
        <div className="w-full md:flex md:flex-row flex flex-col justify-center md:gap-16 md:justify-start md:pl-20 items-center">
          <div className="rounded-full h-[230px] place-content-center w-[200px] overflow-hidden">
            <Image
              src={"/IMG_2091.jpg"}
              width={200}
              height={200}
              alt="Ashwin KV"
              className="object-cover grayscale   transition-all delay-75 hover:grayscale-0"
            />
          </div>
          <div>
            <TypewriterEffectSmooth
              words={[
                {
                  text: "Hey",
                  className: "text-blue-500 dark:text-blue-500  ",
                },
                { text: "there," },
                { text: "I'm " },
                {
                  text: "ASHWIN KV",
                  className: "text-blue-500 dark:text-blue-500 ",
                },
              ]}
            />
          </div>
        </div>
        <div className="px-5 sm:px-16 w-screen">
          {/* <ThemeSwitcher /> */}

          <div className=" h-16 ">
            <TextGenerateEffect words={subHeading} />
          </div>
          <div className="h-16 ">
            {isText1Visible && (
              <TypewriterEffectSmooth
                className="text-sm lg:text:3xl xl:text-5xl"
                words={Title}
              />
            )}
          </div>
        </div>
      </HeroHighlight>
      <div>
        <Card className="p-5">
          <CardTitle>NTYYHHHHYH</CardTitle>
          <CardHeader>Theis will be the ehdin</CardHeader>
          <CardContent>New update</CardContent>
          <CardDescription>thiis the description for the card</CardDescription>
        </Card>
      </div>
    </main>
  );
}
