/* eslint-disable */
const db = require('../../database/index');



class ContactsRepository {
	async findAll(orderBy) {
		const rows = await db.query(
			`SELECT * FROM contacts ORDER BY name ${orderBy}`
		);
		return rows;
	}

	async findById(id) {
		const [row] = await db.query('SELECT * FROM contacts WHERE id = $1', [id]);
		return row;
	}

	async findByEmail(email) {
		const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [
			email,
		]);
		return row;
	}


	async create({ name, email, phone, category_id }) {
		const [row] = await db.query(
			`INSERT INTO contacts(name,email,phone,category_id) VALUES($1, $2, $3, $4)
			RETURNING * `,
			[name, email, phone, category_id]
		);
		return row;
	}

	update(id, { name, email, phone, category_id }) {
		return new Promise((resolve) => {
			const updatedContact = {
				id: v4(),
				name,
				email,
				phone,
				category_id,
			};
			contacts = contacts.map((contact) =>
				contact.id === id ? updatedContact : contact
			);
			resolve(updatedContact);
		});
	}
	async delete (id){
		const deleteOp = await db.query('DELETE FROM contacts WHERE id = $1',[id]);
		return deleteOp
	}
}



module.exports = new ContactsRepository();
