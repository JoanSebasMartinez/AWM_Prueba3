const Offer = require('../models/offer.model');

module.exports.createOffer = (request, response) => {
    const { job, language, salary } = request.body;
    Offer.create({
        job, language, salary
    })
        .then(offer=> response.json(offer))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllOffers = (_, response) => {
    Offer.find({}).sort({job:'asc', salary:'asc'})
        .then(offers => response.json(offers))
        .catch(err => response.json(err))
}

module.exports.getOffer = (request, response) => {
    Offer.findOne({ _id: request.params.id })
        .then(offer=> response.json(offer))
        .catch(err => response.json(err))
}

module.exports.updateOffer= (request, response) => {
    Offer.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedOffer=> response.json(updatedOffer))
        .catch(err => response.json(err))
}

module.exports.deleteOffer= (request, response) => {
    Offer.deleteOne({ _id: request.params.id })
        .then(offerDeleted => response.json(offerDeleted))
        .catch(err => response.json(err))
}