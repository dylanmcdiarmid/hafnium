var RenderLoop = require('./lib/render-loop')
// Currently main just wraps instantiating RenderLoop
var main = function(parentElement, initialState, renderFn) {
  return new RenderLoop(parentElement, initialState, renderFn)
}

// Expose virtual dom index
// There is nothing different in here from the exposed libraries below
// at this point
main.virtualDom = require('virtual-dom')
// Expose primary virtual dom libraries
// virtual-hyperscript
main.h = require('virtual-dom/h')
// diff - reponsible for generating virtual patches
main.diff = require('virtual-dom/diff')
// patch - responsible for applying the generated patches to a rendered dom tree
main.patch = require('virtual-dom/patch')
// create - creates a renderable dom tree from a virtual tree
main.create = require('virtual-dom/create-element')

module.exports = main
