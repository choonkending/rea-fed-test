import { jsdom } from 'jsdom';

// ignore scss 
require.extensions['.scss'] = function() {
  return null;
};

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;