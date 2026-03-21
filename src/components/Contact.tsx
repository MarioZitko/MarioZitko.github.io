import { useState, useRef, JSX } from "react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_4db2quh";
const TEMPLATE_ID = "template_pjg7whg";
const PUBLIC_KEY = "XR4RsEB5-71Y2K2Ex";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact(): JSX.Element {
	const formRef = useRef<HTMLFormElement>(null);
	const [status, setStatus] = useState<Status>("idle");

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const form = formRef.current!;

		// Honeypot — bots fill the hidden field, humans don't
		const honeypot = (form.elements.namedItem("_trap") as HTMLInputElement)
			?.value;
		if (honeypot) return;

		setStatus("sending");
		try {
			await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
			setStatus("success");
			form.reset();
		} catch {
			setStatus("error");
		}
	}

	const inputClass =
		"w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-colors duration-200";

	return (
		<motion.section
			id="contact"
			className="container mx-auto my-24 px-4 w-full max-w-2xl"
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6 }}
			aria-label="Contact section"
		>
			<h2 className="text-4xl font-bold text-center mb-3">Let's Connect</h2>
			<p className="text-center text-zinc-400 text-sm mb-10">
				Have a project in mind or just want to say hi? I'll get back to you.
			</p>

			<form ref={formRef} onSubmit={handleSubmit} noValidate>
				{/* Honeypot — hidden from real users */}
				<input
					type="text"
					name="_trap"
					className="hidden"
					tabIndex={-1}
					autoComplete="off"
				/>

				<div className="flex flex-col gap-4">
					<input
						type="text"
						name="from_name"
						placeholder="Your name"
						required
						className={inputClass}
					/>
					<input
						type="email"
						name="from_email"
						placeholder="Your email"
						required
						className={inputClass}
					/>
					<textarea
						name="message"
						placeholder="Your message"
						rows={5}
						required
						className={`${inputClass} resize-none`}
					/>
				</div>

				<button
					type="submit"
					disabled={status === "sending" || status === "success"}
					className="mt-4 w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors duration-200"
				>
					{status === "sending"
						? "Sending…"
						: status === "success"
							? "Message sent!"
							: "Send Message"}
				</button>

				{status === "error" && (
					<p className="mt-3 text-center text-sm text-red-400">
						Something went wrong — try emailing me directly.
					</p>
				)}
			</form>

			<div className="mt-10 flex justify-center gap-8">
				<a
					href="https://github.com/MarioZitko"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
					aria-label="GitHub profile"
				>
					<SiGithub size={22} />
					<span className="text-sm">GitHub</span>
				</a>
				<a
					href="https://www.linkedin.com/in/mariozitkovic/"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
					aria-label="LinkedIn profile"
				>
					<FaLinkedinIn size={22} />
					<span className="text-sm">LinkedIn</span>
				</a>
			</div>
		</motion.section>
	);
}
