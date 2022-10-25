import users from '../models/users'

class UserController {
    constructor() {
        this.model = users;
    }

    async all(req, res) {
        try {
            const documents = await this.model.find({
                status: true,
            });
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

    async getByUsername(req, res) {
        try {
            const { username } = req.params;
            const document = await this.model.findOne({
                username,
            });
            return res.status(200).json(document);
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    }

    async updateDocument(req, res) {
        try {
            const { username } = req.params;
            const { body } = req;
            await this.model.findOneAndUpdate(
                { username },
                { ...body },
            );
            return res.status(200).json({
                message: `User ${username} has been updated`
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    }

    async deleteDocument(req, res) {
        try {
            const { username } = req.params;
            await this.model.findOneAndUpdate(
                { username },
                { status: false }
            );
            return res.status(200).json({
                message: `User ${username} has been deleted`
            })
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    }
}

export default UserController;