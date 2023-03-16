'use strict';

/**
 * complaint-issue service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::complaint-issue.complaint-issue');
