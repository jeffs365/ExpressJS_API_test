const Facade = require('../../lib/facade');
const customerSchema = require('./schema');

class CustomerFacade extends Facade {

    find(query) {
        var limit = 10;
        var page = 0;

        if (query.limit) {
            limit = parseInt(query.limit);
            query.limit = undefined;
        }

        if (query.page) {
            if (parseInt(query.page) > 0)
                page = parseInt(query.page) - 1;
            query.page = undefined;
        }

        return this.Schema.find(query)
            .limit(limit)
            .skip(page)
            .exec();
    }
}

module.exports = new CustomerFacade(customerSchema);
