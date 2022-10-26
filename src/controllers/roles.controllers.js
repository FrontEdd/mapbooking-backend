import roles from '../models/roles'
import { paginationFields, paginationResults } from '../helpers/pagination'

class RoleController {
    constructor() {
        this.model = roles;
    }

    async all(req, res) {
        try {
            const { page, per_page } = req.query;
            const { limit, offset } = paginationFields(page, per_page)
            const cards = await this.model
                .find()
                .limit(limit)
                .skip(offset);
            const count = await this.model.countDocuments();
            return res.status(200).json(
                paginationResults({ rows: cards, count }, page, per_page)
            );
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    }

    async createDocument(req, res) {
        try {
            const { name, code } = req.body;
            const document = this.model({
                name, code
            });
            await document.save();
            return res.status(201).json(document);
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    }

    async getByField(req, res) {
        try {
            const { code } = req.params;
            const document = await this.model.findOne({
                code,
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
            const { code } = req.params;
            const { body } = req;
            await this.model.findOneAndUpdate(
                { code },
                { ...body },
            );
            return res.status(200).json({
                message: `${code} role has been updated`
            });
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    }

    async deleteDocument(req, res) {
        try {
            const { code } = req.params;
            await this.model.findOneAndUpdate(
                { code },
                { status: false }
            );
            return res.status(200).json({
                message: `${code} role has been deleted`
            })
        } catch (error) {
            return res.status(500).json({
                message: error.message,
            });
        }
    }
}

export default RoleController;