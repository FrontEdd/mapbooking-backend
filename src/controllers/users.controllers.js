import users from '../models/users'

class UserController {
    constructor() {
        this.model = users;
    }

    async all(req, res) {
        try {
            const documents = await this.model.find();
            return res.status(200).json(documents);
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    }

    async createDocument(req, res) {
        try {
            const { username, email, password } = req.body;
            const document = this.model({
                username, email, password
            });
            await document.hashPassword();
            await document.save();
            return res.status(201).json(document);
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    }
}

export default UserController;