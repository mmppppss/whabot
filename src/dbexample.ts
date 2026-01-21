import { ClientsRepo } from "./database/repositories/client.repo";
import { CreateClientDto } from "./types/client";
async function main() {
	const c = new ClientsRepo()
	const cc = await c.create({
		name: "Juan Pérez",
		email: "juaan@example.com",
		phone: "7003400001",
	})
	console.log(cc);
}
main()
