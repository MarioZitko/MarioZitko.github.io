import { useState, useRef, JSX } from "react";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_4db2quh";
const TEMPLATE_ID = "template_pjg7whg";
const PUBLIC_KEY = "XR4RsEB5-71Y2K2Ex";

const LINKEDIN_URL = "https://www.linkedin.com/in/mariozitkovic/";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MESSAGE_MAX_LENGTH = 5000;

// "invalid" is something the visitor can fix; "error" is the service failing
type Status = "idle" | "sending" | "success" | "invalid" | "error";

function validate(form: HTMLFormElement): string | null {
	const data = new FormData(form);
	const name = String(data.get("from_name") ?? "").trim();
	const email = String(data.get("from_email") ?? "").trim();
	const message = String(data.get("message") ?? "").trim();

	if (!name || !email || !message) {
		return "Please fill in your name, email and message.";
	}
	if (!EMAIL_PATTERN.test(email)) {
		return "That email address doesn't look right. Please check it.";
	}
	return null;
}

export default function Contact(): JSX.Element {
	const formRef = useRef<HTMLFormElement>(null);
	const [status, setStatus] = useState<Status>("idle");
	const [validationError, setValidationError] = useState<string | null>(null);

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const form = formRef.current!;

		// Honeypot — bots fill the hidden field, humans don't
		const honeypot = (form.elements.namedItem("_trap") as HTMLInputElement)
			?.value;
		if (honeypot) return;

		const error = validate(form);
		if (error) {
			setValidationError(error);
			setStatus("invalid");
			return;
		}

		setStatus("sending");
		try {
			await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
			setStatus("success");
			form.reset();
		} catch (err) {
			// Input is validated above, so any rejection here is on the service side
			// (EmailJS rejects with { status, text }, e.g. 412 when the Gmail link expires)
			console.error("Contact form: EmailJS send failed", err);
			setStatus("error");
		}
	}

	function handleChange() {
		if (status === "invalid") setStatus("idle");
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

			<form
				ref={formRef}
				onSubmit={handleSubmit}
				onChange={handleChange}
				noValidate
			>
				{/* Honeypot — hidden from real users */}
				<input
					type="text"
					name="_trap"
					className="hidden"
					tabIndex={-1}
					autoComplete="off"
					aria-hidden="true"
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
						maxLength={MESSAGE_MAX_LENGTH}
						className={`${inputClass} resize-none`}
					/>
				</div>

				<button
					type="submit"
					disabled={status === "sending" || status === "success"}
					aria-busy={status === "sending"}
					className="mt-4 w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors duration-200"
				>
					{status === "sending"
						? "Sending…"
						: status === "success"
							? "Message sent!"
							: "Send Message"}
				</button>

				{status === "invalid" && (
					<p role="alert" className="mt-3 text-center text-sm text-amber-400">
						{validationError}
					</p>
				)}

				{status === "error" && (
					<p role="alert" className="mt-3 text-center text-sm text-red-400">
						The message couldn't be sent right now. Please reach me on{" "}
						<a
							href={LINKEDIN_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="underline underline-offset-2 hover:text-red-300"
						>
							LinkedIn
						</a>{" "}
						instead.
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
					href={LINKEDIN_URL}
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
