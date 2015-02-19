var StateMap = function(renderLoop, initialState) {
  if (!(this instanceof StateMap)) {
    return new StateMap(renderLoop, initialState)
  }
  this.values = initialState
  this.renderLoop = renderLoop
}

StateMap.prototype.get = function(k) {
  return this.values[k]
}

StateMap.prototype.set = function(k, v) {
  this.values[k] = v
  this.renderLoop.update(k)
  return this
}

module.exports = StateMap
