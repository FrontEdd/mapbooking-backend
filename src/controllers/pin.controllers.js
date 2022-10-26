import pin from '../models/pin'
import { paginationFields, paginationResults } from '../helpers/pagination'

class PinController {
    constructor() {
        this.model = pin;
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
}

export default PinController;