'use strict';

/**
 * complaint-handling service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::complaint-handling.complaint-handling');
