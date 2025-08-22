export const GA_MEASUREMENT_ID = "G-E84W0SJEYW";

export const IS_PRODUCTION = process.env.NODE_ENV === "production";

export const SHOULD_TRACK = IS_PRODUCTION && GA_MEASUREMENT_ID;
