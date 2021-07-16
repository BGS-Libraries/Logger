'use strict';

import winston from 'winston';

winston.remove(winston.transports.Console);
winston.add(new winston.transports.Console({
  'format': winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  )
}));

winston.log = winston.debug; //this should have been in the core winston

export default winston;
