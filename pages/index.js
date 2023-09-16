import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  Heading,
  FormErrorMessage,
  Text,
  Toast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import AvatarSVG from "@/components/avatarSvg";
import { sendContactForm } from "../lib/api";

const inter = Inter({ subsets: ["latin"] });

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

export default function Home() {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const toast = useToast();

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  const { values, isLoading, error } = state;

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main className="flex flex-col bg-gradient-to-br to-black_end from-lightblack via-90% p-5">
        {/* HEADER */}
        <div className="flex flex-row h-[20vh] p-10 max-sm:justify-center">
          <img src="logo.png" className="w-[260px] h-[53px]" />
        </div>

        {/* FIRST SECTION */}
        <div className="flex flex-row max-sm:flex-col mb-[200px]">
          <div className="flex flex-col items-center w-1/2 max-sm:w-full justify-center">
            <div className="flex flex-col justify-center md:px-8 max-sm:px-5 max-sm:text-center  max-sm:mb-[5vh]">
              <p className="lg:text-4xl text-white font-extrabold mb-[45px] max-sm:text-2xl md:text-3xl">
                Open Source <span className="inline-block animate-bounce text-purple">Projects</span>
              </p>
              <p className="lg:text-3xl text-white font-extrabold mb-[45px] max-sm:text-xl md:text-2xl">
                Some <span className="inline-block animate-bounce text-purple">info</span> about me{" "}
              </p>
              <p className="lg:text-2xl text-white font-extrabold max-sm:text-lg md:text-xl">
                <span className=" inline-block animate-bounce text-purple">Contact</span> me
              </p>
            </div>
          </div>

          <div className="flex flex-col w-1/2 items-center align-center justify-center max-sm:w-full">
            <AvatarSVG />
          </div>
        </div>

        {/* SECOND SECTION */}
        <p className="text-4xl text-center text-white bold mb-[90px] font-extrabold">
          My open source <span className="text-purple mr-[5px]">projects</span> <span className="inline-block animate-pulse">🔥</span>
        </p>
        <div className="flex flex-row px-8 mb-[250px] max-sm:flex-col">
          <div className="flex flex-col w-1/2 items-center justify-center max-sm:w-full max-sm:mb-[80px]">
            <div className="flex flex-col font-extrabold text-white text-xl max-w-[350px] justify-center max-sm:items-center max-sm:text-lg">
              <p id="redtext">Lifechain.gr</p>
              <p className="max-w-[350px] mb-[25px] max-sm:text-center">
                The website of the lifechain company is opensource with all the
                libraries listed in the README
              </p>
              <div className="flex flex-row items-center mb-[20px] max-sm:text-lg">
                <img src="click.png" className="w-[32px] h-[32px] mr-[5px]" />
                <p>Take a look here!</p>
              </div>
              <div className="flex flex-row items-center max-sm:text-lg">
                <img src="github.png" className="w-[32px] h-[32px] mr-[5px]" />
                <p>Go to source code here!</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-1/2 items-center justify-center max-sm:w-full">
            <img src="logolifechain.png" className="w-[280px] h-[110px]" />
            <img
              src="lifechain.png"
              className="w-[430px] h-[210px] max-sm:w-[300px] max-sm:h-[160px] shadow-2xl shadow-redonebg rounded-xl"
            />
          </div>
        </div>

        {/* THIRD SECTION */}
        <div className="flex flex-row px-8 mb-[250px] max-sm:flex-col">
          <div className="flex flex-col w-1/2 items-center justify-center max-sm:w-full max-sm:mb-[80px]">
            <img
              src="Activ-io.png"
              className="w-[210px] h-[450px] shadow-2xl shadow-white rounded-3xl"
            />
          </div>

          <div className="flex flex-col items-center w-1/2 justify-center max-sm:w-full">
            <div className="flex flex-col max-w-[350px] font-extrabold text-white text-xl max-sm:text-lg justify-center items-end max-sm:items-center max-sm:w-full max-sm:mb-[30px]">
              <p id="purpletext">Activ.io</p>
              <p className="max-w-[350px] mb-[25px] text-end max-sm:text-center">
                An application build for educational purposes with free Open API
                to kill bordeness
              </p>
              <div className="flex flex-row items-center mb-[20px] max-sm:text-lg">
                <p className="mr-[5px]">Take a look here!</p>
                <img src="click.png" className="w-[32px] h-[32px]" />
              </div>
              <div className="flex flex-row items-center max-sm:text-lg">
                <p className="mr-[5px]">Go to source code here!</p>
                <img src="github.png" className="w-[32px] h-[32px]" />
              </div>
            </div>
          </div>
        </div>

        {/* FOURTH SECTION  */}
        <p className="text-4xl text-center text-white bold mb-[90px] font-extrabold">
          <span className="text-purple">Info</span> and{" "}
          <span className="text-purple">skills</span> of mine <span className=" inline-block animate-pulse">🧔</span>
        </p>
        <div className="flex flex-row mb-[200px] max-sm:flex-col">
          <div className="flex flex-col w-1/2 items-center justify-center max-sm:w-full max-sm:mb-[80px]">
            <div className="flex flex-col max-w-[350px] text-xl text-start font-extrabold text-white max-sm:text-lg">
              <p id="purpletext" className="text-2xl">
                Back-end and microservice
              </p>

              <p className="mb-[40px]">
                I can build back-end micro-services with technologies chosen for
                the best performance and maximum security based on client’s
                needs
              </p>

              <p>
                From user authentication to complex data handling with
                visualization if needed
              </p>
            </div>
          </div>

          <div className="flex flex-col w-1/2 items-center justify-center max-sm:w-full">
            <img
              src="Backend.png"
              className="lg:w-[460px] lg:h-[470px]
              max-sm:w-[300px] max-sm:h-[310px] 
              md:w-[350px] md:h-[360px]
              shadow-2xl shadow-white rounded-3xl"
            />
          </div>
        </div>

        <div className="flex flex-row mb-[200px] max-sm:flex-col">
          <div className="flex flex-col w-1/2 items-center justify-center max-sm:w-full max-sm:mb-[80px]">
            <img
              src="design.png"
              className="lg:w-[460px] lg:h-[470px]
              max-sm:w-[300px] max-sm:h-[310px] 
              md:w-[350px] md:h-[360px]
              shadow-2xl shadow-white rounded-3xl"
            />
          </div>

          <div className="flex flex-col w-1/2 items-center justify-center max-sm:w-full">
            <div className="flex flex-col max-w-[350px] text-xl  font-extrabold text-white max-sm:text-lg">
              <p id="purpletext" className="text-2xl">
                Designs for every screen
              </p>

              <p className="mb-[40px]">
                With plenty of time spent on Figma i can create beautiful
                designs for every screen with prototypes
              </p>

              <p>
                from animations to minimalistic apps and websites. Everything in
                your imagination
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row mb-[200px] max-sm:flex-col">
          <div className="flex flex-col w-1/2 items-center justify-center max-sm:w-full max-sm:mb-[80px]">
            <div className="flex flex-col max-w-[350px] text-xl text-start font-extrabold text-white max-sm:text-lg">
              <p id="purpletext" className="text-2xl">
                And finally front-end
              </p>

              <p className="mb-[40px]">
                Front-end for mobile application’s or desktop apps to responsive
                web-apps and websites are made using most popular frameworks,
                languages and libraries to make sure the design is transferred
                to every screen quick securing perfomance and data
              </p>

              <p>
                From mobiles ios and android to Linux and windows apps and
                responsive web-apps or websites. Everything comes to life
              </p>
            </div>
          </div>

          <div className="flex flex-col w-1/2 items-center justify-center max-sm:w-full">
            <img
              src="front-end.png"
              className="lg:w-[460px] lg:h-[470px]
              max-sm:w-[300px] max-sm:h-[310px] 
              md:w-[350px] md:h-[360px]
              shadow-2xl shadow-white rounded-3xl"
            />
          </div>
        </div>

        <p style={{ ["--align"]: "center" }} id="purpletext">
          Some details about me
        </p>

        <p className="text-center text-white text-2xl max-sm:text-lg self-center mt-[20px] mb-[150px] font-extrabold max-w-[900px]">
          I am a University student on Electrical and Computer
          Engineering-University of Peloponnese with a passion for programming
          and development . I have created many management web-apps for companies
          or freelancer’s to keep track with their work,expenses and employees
          as well as their clients and earnings with public websites to promote
          their work. I am familiar with many frameworks libraries such as
          Spring-boot/Quarkus with the Kotlin programming language using
          PostgreSQL for database and Firebase with MongoDB for the back-end.
          Designing in Figma and bringing it to life with typescript and
          tailwind with the Next.js framework. Recently i decided to create open
          source projects to strengthen my knowledge and possibly help other
          people with my code.{" "}
        </p>

        <p
          style={{ ["--align"]: "center", marginBottom: "100px" }}
          id="purpletext"
        >
          Need my service ?
        </p>

        <p
          style={{ ["--align"]: "center", marginBottom: "50px" }}
          id="purpletext"
        >
          Contact me
        </p>

        <div id="contactus" className="flex flex-col mb-[100px]">
          <Container maxW="500px" mt={12} id="contactus" textColor="purple.600">
            <div
              className="xl:w-[40vh] xl:h-[2vh] bg-dark-blue rounded-3xl mb-5
                        lg:w-[40vh] lg:h-[2vh]
                        md:w-[20vh] md:h-[1vh]
                        max-sm:w-[30vh] max-sm:h-[1vh]"
            ></div>
            {error && (
              <Text color="red.300" my={4} fontSize="xl">
                {error}
              </Text>
            )}

            <FormControl
              isRequired
              isInvalid={touched.name && !values.name}
              mb={5}
            >
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                errorBorderColor="red.300"
                value={values.name}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <FormControl
              isRequired
              isInvalid={touched.email && !values.email}
              mb={5}
            >
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                errorBorderColor="red.300"
                value={values.email}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <FormControl
              mb={5}
              isRequired
              isInvalid={touched.subject && !values.subject}
            >
              <FormLabel>Subject</FormLabel>
              <Input
                type="text"
                name="subject"
                errorBorderColor="red.300"
                value={values.subject}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <FormControl
              isRequired
              isInvalid={touched.message && !values.message}
              mb={5}
            >
              <FormLabel>Message</FormLabel>
              <Textarea
                name="message"
                rows={4}
                errorBorderColor="red.300"
                value={values.message}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>

            <Button
              mb={10}
              variant="outline"
              colorScheme="purple"
              isLoading={isLoading}
              disabled={
                !values.name ||
                !values.email ||
                !values.subject ||
                !values.message
              }
              onClick={onSubmit}
            >
              Send
            </Button>
          </Container>
        </div>

        <div className="flex flex-col h-[40vh] items-center text-lg justify-between font-extralight text-white">
          <div className="flex flex-row bg-white rounded-2xl shadow-lg shadow-white w-[100px] h-[10px]"></div>
          <p className="my-[15px]">
            this site is open source ! Find it on github
          </p>
          <p className="mb-[15px]">Email : lamproskarachristos@yahoo.com</p>
          <div className="flex flex-row w-[150px] justify-between my-[15px]">
            <img src="linkedin.png" className="w-[32px] h-[32px]" />
            <img src="github.png" className="w-[32px] h-[32px]" />
            <img src="instagram.png" className="w-[32px] h-[32px]" />
          </div>
          <p className=" text-xs">All rights reserved lamprosCodes. © 2023</p>
        </div>
      </main>
    </>
  );
}
