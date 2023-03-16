'use strict';

/**
 * officer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::officer.officer');
