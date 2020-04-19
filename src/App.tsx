import React from "react";
import profilePic from "./assets/profile_pic.jpg";

function Section(props: React.ComponentProps<"a"> & { title?: string }) {
	return (
		<section className={`mt-12 ${props.className ?? ""}`}>
			<h2 className="relative inline-block mb-4 text-2xl text-gray-800">
				<span className="relative z-10">{props.title}</span>
				<div className="absolute bottom-0 z-0 w-full h-3 ml-3 bg-blue-200" />
			</h2>
			<div className="pl-4 text-xl text-gray-700">{props.children}</div>
		</section>
	);
}

function ContactEntry(props: { name: string; value: string }) {
	return (
		<div className="flex justify-between items-baseline mb-2">
			<span>{props.name}</span>
			<span className="flex-grow border-dotted border-b-2 border-blue-200 mx-2" />
			<span>{props.value}</span>
		</div>
	);
}

function Dovednost(
	props: React.ComponentProps<"div"> & {
		name: string;
		technologies: (JSX.Element | string)[];
	}
) {
	return (
		<div className="flex flex-col mb-4">
			<div className="mb-1">{props.name}</div>
			<div className="flex items-center">
				<div className="text-base">
					<ul>
						{props.technologies.map((t, i) => (
							<li className="mb-1" key={i}>
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
									className="inline w-4 h-4 mr-3 text-gray-400 align-text-bottom"
								>
									<path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
								</svg>
								{t}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

function Client(props: {
	name: string;
	projects: React.ReactNode;
	date: [string | number, (string | number)?];
}) {
	return (
		<div className="mb-2">
			<svg
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				viewBox="0 0 24 24"
				className="inline w-6 h-6 text-gray-500 align-text-bottom"
			>
				<path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
			</svg>
			<span className="px-2">{props.name}</span>•
			<span className="pl-2 text-base">
				{
					<>
						{props.date[0]}{" "}
						<svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							className="inline w-4 h-4 mx-1 align-text-bottom"
						>
							<path d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
						{props.date[1] ?? null}
					</>
				}
			</span>
			<div className="flex flex-col mt-3 ml-8">{props.projects}</div>
		</div>
	);
}

function Link(props: React.ComponentProps<"a">) {
	return (
		<a
			{...props}
			rel="noopener"
			target="_blank"
			className="items-center self-start duration-100 ease-in-out rounded hover:text-gray-700"
		>
			{props.children}
		</a>
	);
}

function Project(props: { name: string | JSX.Element; link?: string; description?: JSX.Element }) {
	return (
		<div className="mb-5">
			<div className="mb-1">
				<svg
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					viewBox="0 0 24 24"
					className="inline w-6 h-6 mr-4 text-gray-500 align-text-bottom"
				>
					<path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
				</svg>
				<span className="text-gray-700">{props.name}</span>
			</div>
			<div className="ml-10 text-base text-gray-600">{props.description}</div>
		</div>
	);
}

function App() {
	return (
		<main className="m-3 m-8 font-sans h-64">
			<h1 className="text-4xl text-center sm:text-6xl name md:text-left mb-10" id={"top"}>
				Josef Vacek
			</h1>

			<div className="my-3 flex w-full items-center">
				<img
					className="mr-10 w-40 w-40 rounded-full border-gray-200 border-4"
					src={profilePic}
					alt="Profilová fotka"
				/>
				<ul className="">
					<ContactEntry name={"Email"} value={"vacekj@outlook.com"} />
					<ContactEntry name={"Telefon"} value={"605 98 11 66"} />
					<ContactEntry
						name={"Bydliště"}
						value={"Jarmily Glazarové 21, 779 00 Olomouc"}
					/>
					<ContactEntry name={"Datum narození"} value={"7. 8. 2000"} />
				</ul>
			</div>

			<Section title={"Dovednosti"}>
				<div className="grid grid-cols-2 grid-rows-2">
					<Dovednost
						name="Front-end web development"
						technologies={[
							"TypeScript",
							"ES6+",
							"ReactJS",
							"Moderní HTML a CSS",
							"TailwindcSS",
							"Material-UI",
							"Webpack"
						]}
					/>
					<Dovednost
						name="Back-end web development"
						technologies={[
							"Firebase",
							"PHP - Laravel",
							"NodeJS - Express",
							"Python - Flask",
							"Základy SQL, návrhu a administrace SQL databází"
						]}
					/>
					<Dovednost
						name="Testování"
						technologies={["Cypress.io", "Jest", "Puppeteer", "PHPUnit"]}
					/>
					<Dovednost
						name="Ostatní"
						technologies={[
							"Git na pokročilé úrovni",
							"NPM a Yarn včetně správy vlastních packages",
							"Unix a Unix Shell",
							"CI/CD - Travis CI a GitHub Actions",
							"Automatizace a scraping webu pomocí Puppeteer",
							"IDE - JetBrains, VSCode"
						]}
					/>
				</div>
			</Section>

			<div className="flex">
				<Section title={"Pracovní zkušenosti"}>
					<Client
						name={"Abradatas"}
						projects={
							<>
								<Project
									name={"Evaluace výuky"}
									description={
										<ul>
											<li className="mb-2">
												<Link href="https://form.evaluacevyuky.cz">
													{"Formulář pro studenty - kompletní řešení"}
												</Link>
											</li>
											<li className="mb-2">
												<Link href="https://evaluacevyuky.cz">
													{"Landing page Evaluace Výuky"}
												</Link>
											</li>
										</ul>
									}
								/>
							</>
						}
						date={[2019]}
					/>
					<Client
						name={"Gymnázium, Olomouc - Hejčín"}
						projects={
							<>
								<Project
									name={"Zastupování"}
									description={
										<ul>
											<li className="mb-2">
												<Link href="https://zastupovani.gytool.cz">
													Deployment
												</Link>
											</li>
											<li className="mb-2">
												<Link href="https://github.com/JouzaLoL/better-zastupovani">
													Code
												</Link>
											</li>
										</ul>
									}
								/>
							</>
						}
						date={[2017]}
					/>
					<Client
						name={"Allerton's Automatica"}
						projects={
							<>
								<Project
									name={"emilia.digital"}
									description={
										<span>
											Backend v Laravelu s komplexní integrací s Instagram
											API, návrh databáze
										</span>
									}
								/>
								<Project
									name={"ava.digital"}
									description={
										<Link href="https://ava.digital">Landing page</Link>
									}
								/>
							</>
						}
						date={[2019]}
					/>
				</Section>

				<div>
					<Section title={"Vzdělání"}>
						<ul className="">
							<ContactEntry
								name={"Gymnázium Olomouc, Hejčín"}
								value={"2011 - 2019"}
							/>
							<ContactEntry name={"FIT ČVUT"} value={"2019 - 2020"} />
						</ul>
					</Section>

					<Section title={"Jazyky"}>
						<ul className="">
							<ContactEntry
								name={"Anglický jazyk"}
								value={"Úroveň C2 - Certifikát CAE (skóre 208/210)"}
							/>
							<ContactEntry name={"Španělský jazyk"} value={"~ B1"} />
						</ul>
					</Section>

					<Section title={"Hobbies"}>
						<ul>
							<li className="mb-2">
								Zimní sporty, volejbal, bruslení, kalistenika, cyklistika,
								turistika, ...
							</li>
							<li className="mb-2">Četba - sci-fi, fantasy, literatura faktu</li>
							<li className="mb-2">
								Filmový a seriálový nadšenec (oblíbený režisér Christopher Nolan)
							</li>
							<li className="mb-2">Design a umění</li>
						</ul>
					</Section>
				</div>
			</div>
		</main>
	);
}

export default App;
