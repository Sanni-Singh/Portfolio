import { Input } from "../components/ui/input";
import Header from "../components/SkillsHeader";
import { Label } from "@radix-ui/react-label";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
// import { Socials } from "../utils/helper";
// import SocialLinks from "../components/Home/SocialLinks";
import { toast,Bounce } from "react-toastify"



const Contact = () => {

  const [errorMsg, setErrorMsg] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const firstName = form.current?.elements["user_name"].value.trim();
    const email = form.current?.elements["user_email"].value.trim();
    const msg = form.current?.elements["message"].value.trim();
    const EnvPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


    if (!firstName || !email || !msg) {
      // alert("please Enter valid Name & Email ID")
      toast.warn("Please enter valid name & email address", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      setErrorMsg(true)
      return;
    }
    else {
      setErrorMsg(false)
      emailjs
        .sendForm("service_vooty0i", "template_p41cuci", form.current, {
          publicKey: EnvPublicKey,
        })
        .then(
          () => {
            // console.log("bhej diya");
            e.target.reset();
            toast.success('Your Mail Sent Successfully. I will get back to you ASAP 😊', {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
          },
          (error) => {
            toast.error("FAILED...", error.text, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              // transition: Bounce,
            });
            console.log("FAILED...", error.text);
          }
        );
    }
  };


  return (
    <>
      <section
        id="Contact"
        className=" w-full h-auto flex flex-col items-center justify-center md:pb-2"
      >

        <div className="flex flex-col items-center justify-center">
          <Header title="LET'S CONNECT!" />

          <motion.div
            className="flex px-10 py-2 max-w-[850px]"
            initial={{ opacity: 0, scaleX: 0.7 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ ease: "easeInOut", duration: 0.8, delay: 0.3 }}
          >
            <p className=" text-gray-400 text-sm md:text-lg select-none text-center">
              I’d love to hear from you! Whether it’s just a quick hello or
              something more, don’t hesitate to drop me a message. I’ll get back
              to you as soon as I can!
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-8 p-4">
          <form ref={form} onSubmit={sendEmail}>

            <motion.div className="flex flex-col md:flex-row gap-4"
              initial={{ opacity: 0, scaleY: 0.7 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              transition={{ ease: "easeInOut", duration: 0.8, delay: 0.4 }}
            >
              <div>
                <Label className="text-gray-400 ml-1 text-lg">First Name</Label>
                <Input type="text" className="h-12 w-72 outline-none" name="user_name " />
                {errorMsg && <p className="text-red-500 ml-1 text-xs md:text-sm">Name must be at least 4 characters long</p>}
              </div>
              <div>
                <Label className="text-gray-400 ml-1 text-lg">Last Name</Label>
                <Input className="h-12 w-72 outline-none" />
                {errorMsg && <p className="text-yellow-500 ml-1 text-xs md:text-sm">Optional, can be left blank</p>}

              </div>
            </motion.div>

            <motion.div className="py-6"
              initial={{ opacity: 0, scaleY: 0.7 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              transition={{ ease: "easeInOut", duration: 0.8, delay: 0.5 }}
            >
              <Label className="text-gray-400 ml-1 text-lg">Your Email</Label>
              <Input type="email" className="h-12 w-full" name="user_email" />
              {errorMsg && <p className="text-red-500 ml-1 text-xs md:text-sm">Enter a valid email ID</p>}

            </motion.div>

            <motion.div className="py-2"
              initial={{ opacity: 0, scaleY: 0.7 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              transition={{ ease: "easeInOut", duration: 0.8, delay: 0.6 }}
            >
              <Label className="text-gray-400 ml-1 text-xl">
                Your Valuable Message 😊
              </Label>
              <Input type="textarea" className="h-40" name="message" />
              {errorMsg && <p className="text-red-500 ml-1 text-xs md:text-sm">please enter a message</p>}

            </motion.div>

            <motion.div className=" py-1 md:py-6"
              initial={{ opacity: 0, scaleY: 0.7 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              transition={{ ease: "easeInOut", duration: 0.8, delay: 0.7 }}
            >
              <button
                className="relative inline-flex h-12 w-40 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                type="submit"
                value="Send"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Send Message &rarr;
                </span>
              </button>
            </motion.div>
          </form>

        </div>
        {/* <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-20 mt-2 mb-4">
          <AnimatePresence>
            {Socials &&
              Socials.map((item, idx) => (
                <SocialLinks key={idx} data={item} index={idx} />
              ))}
          </AnimatePresence>
        </div> */}

      </section>
    </>
  );
};

export default Contact;