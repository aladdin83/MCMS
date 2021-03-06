/**
 * TreatmentType model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var TreatmentType = require('../../sqldb').TreatmentType;
var TreatmentTypeEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
TreatmentTypeEvents.setMaxListeners(0);

// Model events
var events = {
  'afterCreate': 'save',
  'afterUpdate': 'save',
  'afterDestroy': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  TreatmentType.hook(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc, options, done) {
    TreatmentTypeEvents.emit(event + ':' + doc._id, doc);
    TreatmentTypeEvents.emit(event, doc);
    done(null);
  }
}

module.exports = TreatmentTypeEvents;
