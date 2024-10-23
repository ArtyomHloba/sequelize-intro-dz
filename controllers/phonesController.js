const _ = require('lodash');
const createHttpError = require('http-errors');
const { Phone } = require('./../models');

module.exports.createPhone = async (req, res, next) => {
  const { body } = req;
  try {
    const createdPhone = await Phone.create(body);
    const preparedPhone = _.omit(createdPhone.get(), [
      'createdAt',
      'updatedAt',
    ]);
    res.status(201).send({ data: preparedPhone });
  } catch (error) {
    next(error);
  }
};

module.exports.getPhones = async (req, res, next) => {
  const {
    query: { page, results },
  } = req;

  const limit = results;
  const offset = (page - 1) * results;

  try {
    const foundPhones = await Phone.findAll({
      raw: true,
      limit,
      offset,
      order: ['id'],
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    res.status(200).send({ data: foundPhones });
  } catch (error) {
    next(error);
  }
};

module.exports.getPhoneById = async (req, res, next) => {
  const {
    params: { phoneId },
  } = req;

  try {
    const foundPhoneById = await Phone.findByPk(phoneId, {
      raw: true,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    if (!foundPhoneById) {
      return next(createHttpError(404, 'Phone not found'));
    }

    res.status(200).send({ data: foundPhoneById });
  } catch (error) {
    next(error);
  }
};

module.exports.updatePhoneById = async (req, res, next) => {
  const {
    body,
    params: { phoneId },
  } = req;

  try {
    const [, [updatedPhone]] = await Phone.update(body, {
      where: { id: phoneId },
      raw: true,
      returning: true,
    });

    if (!updatedPhone) {
      return next(createHttpError(404, 'Phone not found'));
    }

    const prepatedPhone = _.omit(updatedPhone, ['createdAt', 'updatedAt']);

    res.status(200).send({ data: prepatedPhone });
  } catch (error) {
    next(error);
  }
};

module.exports.deletePhoneById = async (req, res, next) => {
  const {
    params: { phoneId },
  } = req;

  try {
    const deletedCount = await Phone.destroy({
      where: { id: phoneId },
    });

    if (deletedCount === 0) {
      return next(createHttpError(404, 'Phone not found'));
    }

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports.getPhonePreorder = async (req, res, next) => {
  const {
    params: { phoneId },
  } = req;

  try {
    const foundPhone = await Phone.findByPk(phoneId);

    if (!foundPhone) {
      return next(createHttpError(404, 'Phone not found'));
    }

    const foundPreorders = await foundPhone.getPreorders({
      raw: true,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    res.status(200).send({ data: foundPreorders });
  } catch (error) {
    next(error);
  }
};

module.exports.updateImage = async (req, res, next) => {
  const {
    file,
    params: { phoneId },
  } = req;
  try {
    if (!file) {
      return next(createHttpError(422, 'Image is required'));
    }
    const [, [updatedphone]] = await Phone.update(
      { image: 'images/' + file.filename },
      { where: { id: phoneId }, returning: true, raw: true }
    );

    if (!updatedphone) {
      return next(createHttpError(404, 'Phone not found'));
    }

    const preparedPhone = _.omit(updatedphone, ['createdAt', 'updatedAt']);
    res.status(200).send({ data: preparedPhone });
  } catch (error) {
    next(error);
  }
};
