import { m } from "../paraglide/messages.js";

export default function Home() {
	return (
		<>
			<p>{m.example_message({ username: "Samuel" })}</p>
		</>
	);
}
