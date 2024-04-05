"use client";
import { ThemeSwitcher } from "@/components/global/ThemeSwitcher";
import { FaFileAlt } from "react-icons/fa";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
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
import { cn } from "@/lib/utils";
import { DotBackground } from "@/components/Home/DotBackground";
import NeumorphismButton from "@/components/ui/neo-button";
import Link from "next/link";
export default function Home() {


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
    "A curious and creative developer who thrives on building dynamic web applications using  MERN stack.";
  return (
    <main className="">
      <HeroHighlight className="w-full px-5">
        <div className="w-full md:flex md:flex-row flex flex-col justify-around md:gap-16 md:justify-start md:px-20 items-center">
          <div className="rounded-full md:h-[300px] h-[250px] w-[250px] place-content-center md:w-[500px] overflow-hidden">
            <Image
              src={"/IMG_2091.jpg"}
              width={500}
              height={500}
              alt="Ashwin KV"
              className={cn(
                "object-cover grayscale   transition-all duration-1000 hover:grayscale-0 "
              )}
            />
          </div>
          <div>
            <h1 className="text-xl lg:text:3xl xl:text-5xl font-bold">
              <span className="text-blue-500 dark:text-blue-500">Hey</span>{" "}
              There!
            </h1>
            <h1 className="text-xl mt-5 lg:text:3xl xl:text-5xl font-bold">
              I'm
              <span className="text-blue-500 dark:text-blue-500">
                {" "}
                Ashwin KV
              </span>{" "}
            </h1>

            <div className=" h-16 ">
              <TextGenerateEffect words={subHeading} />
            </div>
            <div className="flex w-full justify-center mt-10">
              <NeumorphismButton classname="!rounded-sm " Icon={FaFileAlt}>
                View Resume
              </NeumorphismButton>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center md:justify-start gap-5 md:px-20 p-5">
          <Link href={"https://github.com/dreamographer"}>
            <NeumorphismButton classname="hover:!text-black" Icon={FaGithub}>
              GitHub
            </NeumorphismButton>
          </Link>
          <Link href={"https://www.linkedin.com/in/ashwin-kv/"}>
            <NeumorphismButton Icon={FaLinkedin}>linkedIn</NeumorphismButton>
          </Link>
        </div>
      </HeroHighlight>
      <DotBackground>
        <section>
          <div>
            <Card className="p-5">
              <CardTitle>NTYYHHHHYH</CardTitle>
              <CardHeader>Theis will be the ehdin</CardHeader>
              <CardContent>New update</CardContent>
              <CardDescription>
                thiis the description for the card
              </CardDescription>
            </Card>
          </div>
          <div>
            <Card className="p-5">
              <CardTitle>NTYYHHHHYH</CardTitle>
              <CardHeader>Theis will be the ehdin</CardHeader>
              <CardContent>New update</CardContent>
              <CardDescription>
                thiis the description for the card
              </CardDescription>
            </Card>
          </div>
        </section>
      </DotBackground>
    </main>
  );
}
