/* eslint-disable */
const ContactRepository = require('../repositories/ContactsRepository');
const isValidUUID = require('../utils/isValidUUID')
class ContactController {
	async index(request, response) {
		// Listar todos os registros
		const { orderBy } = request.query;
		const contacts = await ContactRepository.findAll(orderBy);

		console.log({ contacts });
		response.json(contacts);
	}

	async show(request, response) {
		// Obter um registro
		const { id } = request.params;

		if (!isValidUUID(id)) {
			return response.status(400).json({ error: 'Invalid user id' })
		}
		const contact = await ContactRepository.findById(id);

		if (!contact) {
			// 404: Not found
			return response.status(404).json({ error: 'Contact not found' });
		}

		response.json(contact);
	}

	async store(request, response) {
		// Criar um novo registro
		const { name, email, phone, category_id } = request.body;

		if (!name) {
			return response.status(400).json({ error: 'Name is required' });
		}

		const contactExists = await ContactRepository.findByEmail(email);
		if (contactExists) {
			return response
				.status(400)
				.json({ error: 'This email is already in use' });
		}

		const contact = await ContactRepository.create({
			name,
			email,
			phone,
			category_id,
		});
		response.status(201).json(contact);
	}

	// Editar um registro
	async update(request, response) {
		const { id } = request.params;
		const { name, email, phone, category_id } = request.body;

		if (!isValidUUID(id)) {
			return response.status(400).json({ error: 'Invalid user id' })
		}

		const contactExists = await ContactRepository.findById(id);
		if (!contactExists) {
			return response.status(404).json({ error: 'Contact not found' });
		}
		if (!name) {
			return response.status(400).json({ error: 'Name is required' });
		}
		const contactByEmail = await ContactRepository.findByEmail(email);
		if (contactByEmail && contactByEmail.id !== id) {
			return response
				.status(400)
				.json({ error: 'This email is alkready in use' });
		}
		const contact = await ContactRepository.update(id, {
			name,
			email,
			phone,
			category_id,
		});
		response.json(contact);
	}

	async delete(request, response) {
		// Deletar um registro
		const { id } = request.params;

		await ContactRepository.delete(id);
		// 204 :No content
		response.sendStatus(204);
	}
}

module.exports = new ContactController();
