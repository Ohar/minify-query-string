'use strict';

function minifyQueryString (query) {
  return String(query)
      .replace(/\s+/g, ' ')
      .trim();
}

module.exports = minifyQueryString;
