export const UPDATE_FIELD = 'UPDATE_FIELD';
export const CLEAR_FINDER_STATE = 'CLEAR_FINDER_STATE';
export const RECEIVE_CATEGORY_RESULTS = 'RECEIVE_CATEGORY_RESULTS';
export const RECEIVE_ARTICLE_PAGEVIEWS = 'RECEIVE_ARTICLE_PAGEVIEWS';
export const RECEIVE_ARTICLE_PAGEASSESSMENT = 'RECEIVE_ARTICLE_PAGEASSESSMENT';
export const RECEIVE_ARTICLE_REVISION = 'RECEIVE_ARTICLE_REVISION';
export const RECEIVE_ARTICLE_REVISIONSCORE = 'RECEIVE_ARTICLE_REVISIONSCORE';
export const SORT_ARTICLE_FINDER = "SORT_ARTICLE_FINDER";

export const fetchStates = {
 TITLE_RECEIVED: 1,
 PAGEASSESSMENT_RECEIVED: 2,
 REVISION_RECEIVED: 3,
 REVISIONSCORE_RECEIVED: 4,
 PAGEVIEWS_RECEIVED: 5
};

export const WP10Weights = {
  FA: 100,
  GA: 80,
  B: 60,
  C: 40,
  Start: 20,
  Stub: 0
};