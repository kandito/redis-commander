'use strict';

module.exports = function (app) {
  require('./auth')(app);
  require('./home')(app);
  require('./apiv1')(app);
  require('./tools')(app);
};
