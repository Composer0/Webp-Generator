/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;

  var defineProperty = Object.defineProperty || function (obj, key, desc) {
    obj[key] = desc.value;
  };

  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    });
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: true
  });
  defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: true
  });
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    defineProperty(this, "_invoke", {
      value: enqueue
    });
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method;
    var method = delegate.iterator[methodName];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method, or a missing .next mehtod, always terminate the
      // yield* loop.
      context.delegate = null; // Note: ["return"] must be used for ES3 parsing compatibility.

      if (methodName === "throw" && delegate.iterator["return"]) {
        // If the delegate iterator has a return method, give it a
        // chance to clean up.
        context.method = "return";
        context.arg = undefined;
        maybeInvokeDelegate(delegate, context);

        if (context.method === "throw") {
          // If maybeInvokeDelegate(context) changed context.method from
          // "return" to "throw", let that override the TypeError below.
          return ContinueSentinel;
        }
      }

      if (methodName !== "return") {
        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  define(Gp, iteratorSymbol, function () {
    return this;
  });
  define(Gp, "toString", function () {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (val) {
    var object = Object(val);
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? undefined : _typeof(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


document.addEventListener('DOMContentLoaded', function () {
  var webpImages = [];
  var downloadButtonSingle = document.querySelector("#downloadButtonSingle");
  var downloadButtonMultiple = document.querySelector("#downloadButtonMultiple");
  var inputElement = document.getElementById('imageUploadButton');
  var imagesProcessed = 0;
  var imageElements = []; // *Array to store original and converted image elements

  var convertImages = function convertImages(event) {
    if (event.target.files.length > 0) {
      // *Reset webpImages array
      webpImages.length = 0;
      imagesProcessed = 0; // *Slider Value

      var sliderValue = parseFloat(document.getElementById('slider').value); // *Default value for the slider

      var _slider = document.getElementById('slider');

      var _sliderValueDisplay = document.getElementById('sliderValue');

      _slider.addEventListener('input', function () {
        sliderValue = parseFloat(this.value);
        _sliderValueDisplay.textContent = sliderValue;
      });

      for (var i = 0; i < event.target.files.length; i++) {
        var file = event.target.files[i]; // *Create elements for file sizes and converted image data

        var originalDataSize = document.createElement('span');
        var convertedImage = document.createElement('img');
        convertedImage.classList.add('webp-image');
        var convertedDataSize = document.createElement('span'); // *Store image and data span elements in the object with the same identifiers

        imageElements[i] = {
          originalDataSize: originalDataSize,
          convertedImage: convertedImage,
          convertedDataSize: convertedDataSize
        }; // *Process image and update elements

        processImage(event, file, originalDataSize, convertedImage, convertedDataSize, sliderValue);
      }
    }
  };

  function processImage(event, file, originalDataSize, convertedImage, convertedDataSize, sliderValue) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var userImage = new Image();
    userImage.src = URL.createObjectURL(file);

    userImage.onload = function () {
      canvas.width = userImage.width;
      canvas.height = userImage.height;
      ctx.drawImage(userImage, 0, 0); // *Convert canvas to WebP

      canvas.toBlob(function (blob) {
        //Calculate the file size of the WebP Image
        var fileSizeKB = blob.size / 1024;
        var reader = new FileReader();

        reader.onloadend = function () {
          var webpImage = reader.result; // *Update file size elements and converted image data

          originalDataSize.innerText = 'Original File Size: ' + file.size + ' bytes';
          convertedDataSize.innerText = 'Converted File Size: ' + fileSizeKB.toFixed(2) + ' KB';
          convertedImage.src = webpImage; // *Store WebP image data with original filename

          var originalFilename = file.name;
          var webpFilename = getWebpFilename(originalFilename);
          var imageIndex = imagesProcessed++; // *get the image index from the imagesProcessed counter
          // *Store WebP image data

          webpImages[imageIndex] = {
            name: originalFilename,
            data: webpImage,
            filename: webpFilename
          }; // *Check to ensure all images have been uploaded and converted

          if (imagesProcessed === event.target.files.length) {
            renderWebpImages();
            console.log(renderWebpImages());

            if (event.target.files.length === 1) {
              downloadButtonSingle.style.display = 'block';
              downloadButtonMultiple.style.display = 'none';
            } else {
              downloadButtonSingle.style.display = 'none';
              downloadButtonMultiple.style.display = 'block';
            }
          }
        };

        reader.readAsDataURL(blob);
      }, 'image/webp', sliderValue);
    };
  } // *Update the slider value display


  var slider = document.getElementById('slider');
  var sliderValueDisplay = document.getElementById('sliderValue');
  slider.addEventListener('input', function () {
    sliderValueDisplay.textContent = this.value;
  });

  function getWebpFilename(originalFilename) {
    var extensionIndex = originalFilename.lastIndexOf('.');
    var filename = originalFilename.substring(0, extensionIndex);
    return filename + '.webp';
  }

  function renderWebpImages() {
    // *Clear the existing images
    var streamlineContainer = document.querySelector('#streamline');
    streamlineContainer.innerHTML = '';
    console.log('is running'); // *Render WebP images in order

    var _loop = function _loop() {
      var _webpImages$i = webpImages[i],
          name = _webpImages$i.name,
          data = _webpImages$i.data,
          filename = _webpImages$i.filename;
      var _imageElements$i = imageElements[i],
          originalDataSize = _imageElements$i.originalDataSize,
          convertedImage = _imageElements$i.convertedImage,
          convertedDataSize = _imageElements$i.convertedDataSize; // *Create a div to hold each image's content

      var fileWrapper = document.createElement('div');
      fileWrapper.classList.add('file-wrapper'); // *Show file name

      var fileNameElement = document.createElement('p');
      var fileNameText = document.createTextNode('File Name:' + ' '); // *const brElement = document.createElement('br');

      var filenameText = document.createTextNode(filename);
      fileNameElement.appendChild(fileNameText); // *fileNameElement.appendChild(brElement);

      fileNameElement.appendChild(filenameText);
      fileNameElement.classList.add('filename-wrapper');
      fileWrapper.appendChild(fileNameElement);
      var fileWrapperRow = document.createElement('div');
      fileWrapperRow.classList.add('file-wrapper-row'); // *Show WebP image

      convertedImage.src = data;
      convertedImage.alt = name; // *Set the alt attribute to the original filename

      fileWrapperRow.appendChild(convertedImage); // *Show file sizes

      var originalFileSize = document.createElement('p');
      originalFileSize.innerText = originalDataSize.innerText;
      originalFileSize.classList.add('data-wrapper');
      fileWrapperRow.appendChild(originalFileSize);
      var convertedFileSize = document.createElement('p');
      convertedFileSize.innerText = convertedDataSize.innerText;
      convertedFileSize.classList.add('data-wrapper');
      fileWrapperRow.appendChild(convertedFileSize); // *Create a button for individual download

      var downloadButton = document.createElement('button');
      downloadButton.innerText = 'Download';
      downloadButton.classList.add('single-download');
      downloadButton.addEventListener('click', function () {
        downloadWebpImage(data, name);
      });
      fileWrapperRow.appendChild(downloadButton); // *Add the image content to the streamline container

      streamlineContainer.appendChild(fileWrapper);
      streamlineContainer.appendChild(fileWrapperRow);
    };

    for (var i = 0; i < webpImages.length; i++) {
      _loop();
    } // *Hide slider after conversion


    var sliderWrapper = document.querySelector('.slider-wrapper');
    sliderWrapper.style.display = 'none';
  }

  function downloadWebpImage(_x, _x2) {
    return _downloadWebpImage.apply(this, arguments);
  }

  function _downloadWebpImage() {
    _downloadWebpImage = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(dataURI, filename) {
      var response, blob, url, downloadLink;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch(dataURI);

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.blob();

          case 6:
            blob = _context.sent;
            url = URL.createObjectURL(blob);
            downloadLink = document.createElement('a');
            downloadLink.href = url;
            downloadLink.download = filename.replace(/\.[^/.]+$/, "") + ".webp"; // *Remove the file extension and add .webp

            downloadLink.click();
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            console.error('Error downloading image', _context.t0);

          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 14]]);
    }));
    return _downloadWebpImage.apply(this, arguments);
  }

  var downloadImages = function downloadImages() {
    if (webpImages.length > 0) {
      if (downloadButtonSingle.style.display === 'block') {
        // *Download single file
        var _webpImages$2 = webpImages[0],
            name = _webpImages$2.name,
            data = _webpImages$2.data;
        var fileName = getWebpFilename(name);
        var downloadLink = document.createElement('a');
        downloadLink.href = data;
        downloadLink.download = fileName;
        downloadLink.click();
      } else {
        var zip = new JSZip();

        for (var i = 0; i < webpImages.length; i++) {
          var _webpImages$i3 = webpImages[i],
              _name = _webpImages$i3.name,
              _data = _webpImages$i3.data;

          var _fileName = getWebpFilename(_name); // *Use the original filename for the WebP file


          zip.file(_fileName, _data.split(',')[1], {
            base64: true
          });
        }

        zip.generateAsync({
          type: 'blob'
        }).then(function (content) {
          var downloadLink = document.createElement('a');
          downloadLink.href = URL.createObjectURL(content);
          downloadLink.download = 'webp_images.zip';
          downloadLink.click();
        });
      }
    }
  };

  inputElement.addEventListener('change', convertImages);
  downloadButtonSingle.addEventListener('click', downloadImages);
  downloadButtonMultiple.addEventListener('click', downloadImages);
});

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/bundle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/orionpalmer/Desktop/generator/src/js/bundle.js */"./src/js/bundle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9idW5kbGUuanMiXSwibmFtZXMiOlsicnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCJ1bmRlZmluZWQiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiR2VuU3RhdGVTdXNwZW5kZWRTdGFydCIsIkdlblN0YXRlU3VzcGVuZGVkWWllbGQiLCJHZW5TdGF0ZUV4ZWN1dGluZyIsIkdlblN0YXRlQ29tcGxldGVkIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGlzcGxheU5hbWUiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJfX2F3YWl0IiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImVucXVldWUiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJuZXh0IiwiZG9uZSIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIm1ldGhvZE5hbWUiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwibGVuZ3RoIiwicG9wIiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwiaSIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdEVudHJ5Iiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJtb2R1bGUiLCJyZWdlbmVyYXRvclJ1bnRpbWUiLCJhY2NpZGVudGFsU3RyaWN0TW9kZSIsImdsb2JhbFRoaXMiLCJGdW5jdGlvbiIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwiY2hpbGRyZW4iLCJnZXQiLCJsIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2VicEltYWdlcyIsImRvd25sb2FkQnV0dG9uU2luZ2xlIiwicXVlcnlTZWxlY3RvciIsImRvd25sb2FkQnV0dG9uTXVsdGlwbGUiLCJpbnB1dEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImltYWdlc1Byb2Nlc3NlZCIsImltYWdlRWxlbWVudHMiLCJjb252ZXJ0SW1hZ2VzIiwiZXZlbnQiLCJ0YXJnZXQiLCJmaWxlcyIsInNsaWRlclZhbHVlIiwicGFyc2VGbG9hdCIsInNsaWRlciIsInNsaWRlclZhbHVlRGlzcGxheSIsInRleHRDb250ZW50IiwiZmlsZSIsIm9yaWdpbmFsRGF0YVNpemUiLCJjcmVhdGVFbGVtZW50IiwiY29udmVydGVkSW1hZ2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb252ZXJ0ZWREYXRhU2l6ZSIsInByb2Nlc3NJbWFnZSIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJ1c2VySW1hZ2UiLCJJbWFnZSIsInNyYyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIm9ubG9hZCIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhd0ltYWdlIiwidG9CbG9iIiwiYmxvYiIsImZpbGVTaXplS0IiLCJzaXplIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsIndlYnBJbWFnZSIsImlubmVyVGV4dCIsInRvRml4ZWQiLCJvcmlnaW5hbEZpbGVuYW1lIiwid2VicEZpbGVuYW1lIiwiZ2V0V2VicEZpbGVuYW1lIiwiaW1hZ2VJbmRleCIsImRhdGEiLCJmaWxlbmFtZSIsInJlbmRlcldlYnBJbWFnZXMiLCJjb25zb2xlIiwibG9nIiwic3R5bGUiLCJkaXNwbGF5IiwicmVhZEFzRGF0YVVSTCIsImV4dGVuc2lvbkluZGV4IiwibGFzdEluZGV4T2YiLCJzdWJzdHJpbmciLCJzdHJlYW1saW5lQ29udGFpbmVyIiwiaW5uZXJIVE1MIiwiZmlsZVdyYXBwZXIiLCJmaWxlTmFtZUVsZW1lbnQiLCJmaWxlTmFtZVRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImZpbGVuYW1lVGV4dCIsImFwcGVuZENoaWxkIiwiZmlsZVdyYXBwZXJSb3ciLCJhbHQiLCJvcmlnaW5hbEZpbGVTaXplIiwiY29udmVydGVkRmlsZVNpemUiLCJkb3dubG9hZEJ1dHRvbiIsImRvd25sb2FkV2VicEltYWdlIiwic2xpZGVyV3JhcHBlciIsImRhdGFVUkkiLCJmZXRjaCIsInJlc3BvbnNlIiwidXJsIiwiZG93bmxvYWRMaW5rIiwiaHJlZiIsImRvd25sb2FkIiwicmVwbGFjZSIsImNsaWNrIiwiZG93bmxvYWRJbWFnZXMiLCJmaWxlTmFtZSIsInppcCIsIkpTWmlwIiwic3BsaXQiLCJiYXNlNjQiLCJnZW5lcmF0ZUFzeW5jIiwiY29udGVudCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJB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Q0FBQ3VDLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLENBQWhCLENBQW5CLEVBQXVDO0FBQUVDLGtCQUFNLEVBQUU7QUFBVixXQUF2QztBQUNEOztBQUVESCxXQUFHLENBQUNJLGFBQUosQ0FBa0I7QUFBRWpOLGNBQUksRUFBRTtBQUFSLFNBQWxCLEVBQW9DcUMsSUFBcEMsQ0FBeUMsVUFBUzZLLE9BQVQsRUFBa0I7QUFDekQsY0FBTVosWUFBWSxHQUFHbkYsUUFBUSxDQUFDcUIsYUFBVCxDQUF1QixHQUF2QixDQUFyQjtBQUNBOEQsc0JBQVksQ0FBQ0MsSUFBYixHQUFvQm5ELEdBQUcsQ0FBQ0MsZUFBSixDQUFvQjZELE9BQXBCLENBQXBCO0FBQ0FaLHNCQUFZLENBQUNFLFFBQWIsR0FBd0IsaUJBQXhCO0FBQ0FGLHNCQUFZLENBQUNJLEtBQWI7QUFDRCxTQUxEO0FBTUQ7QUFDRjtBQUNGLEdBNUJEOztBQThCQWpGLGNBQVksQ0FBQ0wsZ0JBQWIsQ0FBOEIsUUFBOUIsRUFBd0NTLGFBQXhDO0FBQ0FQLHNCQUFvQixDQUFDRixnQkFBckIsQ0FBc0MsT0FBdEMsRUFBK0N1RixjQUEvQztBQUNBbkYsd0JBQXNCLENBQUNKLGdCQUF2QixDQUF3QyxPQUF4QyxFQUFpRHVGLGNBQWpEO0FBQ0QsQ0F0T0QsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5IHx8IGZ1bmN0aW9uIChvYmosIGtleSwgZGVzYykgeyBvYmpba2V5XSA9IGRlc2MudmFsdWU7IH07XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGRlZmluZVByb3BlcnR5KGdlbmVyYXRvciwgXCJfaW52b2tlXCIsIHsgdmFsdWU6IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkgfSk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lUHJvcGVydHkoR3AsIFwiY29uc3RydWN0b3JcIiwgeyB2YWx1ZTogR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgZGVmaW5lUHJvcGVydHkoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgXCJjb25zdHJ1Y3RvclwiLFxuICAgIHsgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uLCBjb25maWd1cmFibGU6IHRydWUgfVxuICApO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgZGVmaW5lUHJvcGVydHkodGhpcywgXCJfaW52b2tlXCIsIHsgdmFsdWU6IGVucXVldWUgfSk7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kTmFtZSA9IGNvbnRleHQubWV0aG9kO1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2ROYW1lXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kLCBvciBhIG1pc3NpbmcgLm5leHQgbWVodG9kLCBhbHdheXMgdGVybWluYXRlIHRoZVxuICAgICAgLy8geWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgIGlmIChtZXRob2ROYW1lID09PSBcInRocm93XCIgJiYgZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1ldGhvZE5hbWUgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ1wiICsgbWV0aG9kTmFtZSArIFwiJyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIHZhciBvYmplY3QgPSBPYmplY3QodmFsKTtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHdlYnBJbWFnZXMgPSBbXTtcbiAgY29uc3QgZG93bmxvYWRCdXR0b25TaW5nbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rvd25sb2FkQnV0dG9uU2luZ2xlXCIpO1xuICBjb25zdCBkb3dubG9hZEJ1dHRvbk11bHRpcGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkb3dubG9hZEJ1dHRvbk11bHRpcGxlXCIpO1xuICBjb25zdCBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2VVcGxvYWRCdXR0b24nKTtcbiAgbGV0IGltYWdlc1Byb2Nlc3NlZCA9IDA7XG4gIGNvbnN0IGltYWdlRWxlbWVudHMgPSBbXTsgLy8gKkFycmF5IHRvIHN0b3JlIG9yaWdpbmFsIGFuZCBjb252ZXJ0ZWQgaW1hZ2UgZWxlbWVudHNcblxuICBjb25zdCBjb252ZXJ0SW1hZ2VzID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmZpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vICpSZXNldCB3ZWJwSW1hZ2VzIGFycmF5XG4gICAgICB3ZWJwSW1hZ2VzLmxlbmd0aCA9IDA7XG4gICAgICBpbWFnZXNQcm9jZXNzZWQgPSAwO1xuXG4gICAgICAvLyAqU2xpZGVyIFZhbHVlXG4gICAgICBsZXQgc2xpZGVyVmFsdWUgPSBwYXJzZUZsb2F0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZXInKS52YWx1ZSk7IC8vICpEZWZhdWx0IHZhbHVlIGZvciB0aGUgc2xpZGVyXG4gICAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyJyk7XG4gICAgICBjb25zdCBzbGlkZXJWYWx1ZURpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyVmFsdWUnKTtcbiAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBzbGlkZXJWYWx1ZSA9IHBhcnNlRmxvYXQodGhpcy52YWx1ZSk7XG4gICAgICAgIHNsaWRlclZhbHVlRGlzcGxheS50ZXh0Q29udGVudCA9IHNsaWRlclZhbHVlO1xuICAgICAgfSk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnQudGFyZ2V0LmZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzW2ldO1xuXG4gICAgICAgIC8vICpDcmVhdGUgZWxlbWVudHMgZm9yIGZpbGUgc2l6ZXMgYW5kIGNvbnZlcnRlZCBpbWFnZSBkYXRhXG4gICAgICAgIGxldCBvcmlnaW5hbERhdGFTaXplID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBsZXQgY29udmVydGVkSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY29udmVydGVkSW1hZ2UuY2xhc3NMaXN0LmFkZCgnd2VicC1pbWFnZScpO1xuICAgICAgICBsZXQgY29udmVydGVkRGF0YVNpemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgLy8gKlN0b3JlIGltYWdlIGFuZCBkYXRhIHNwYW4gZWxlbWVudHMgaW4gdGhlIG9iamVjdCB3aXRoIHRoZSBzYW1lIGlkZW50aWZpZXJzXG4gICAgICAgIGltYWdlRWxlbWVudHNbaV0gPSB7XG4gICAgICAgICAgb3JpZ2luYWxEYXRhU2l6ZSxcbiAgICAgICAgICBjb252ZXJ0ZWRJbWFnZSxcbiAgICAgICAgICBjb252ZXJ0ZWREYXRhU2l6ZSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyAqUHJvY2VzcyBpbWFnZSBhbmQgdXBkYXRlIGVsZW1lbnRzXG4gICAgICAgIHByb2Nlc3NJbWFnZShldmVudCwgZmlsZSwgb3JpZ2luYWxEYXRhU2l6ZSwgY29udmVydGVkSW1hZ2UsIGNvbnZlcnRlZERhdGFTaXplLCBzbGlkZXJWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIHByb2Nlc3NJbWFnZShldmVudCwgZmlsZSwgb3JpZ2luYWxEYXRhU2l6ZSwgY29udmVydGVkSW1hZ2UsIGNvbnZlcnRlZERhdGFTaXplLCBzbGlkZXJWYWx1ZSkge1xuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBsZXQgdXNlckltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgdXNlckltYWdlLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG5cbiAgICB1c2VySW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICBjYW52YXMud2lkdGggPSB1c2VySW1hZ2Uud2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gdXNlckltYWdlLmhlaWdodDtcbiAgICAgIGN0eC5kcmF3SW1hZ2UodXNlckltYWdlLCAwLCAwKTtcblxuICAgICAgLy8gKkNvbnZlcnQgY2FudmFzIHRvIFdlYlBcbiAgICAgIGNhbnZhcy50b0Jsb2IoXG4gICAgICAgIGZ1bmN0aW9uKGJsb2IpIHtcbiAgICAgICAgICAvL0NhbGN1bGF0ZSB0aGUgZmlsZSBzaXplIG9mIHRoZSBXZWJQIEltYWdlXG4gICAgICAgICAgY29uc3QgZmlsZVNpemVLQiA9IGJsb2Iuc2l6ZSAvIDEwMjQ7XG5cbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnN0IHdlYnBJbWFnZSA9IHJlYWRlci5yZXN1bHQ7XG5cbiAgICAgICAgICAvLyAqVXBkYXRlIGZpbGUgc2l6ZSBlbGVtZW50cyBhbmQgY29udmVydGVkIGltYWdlIGRhdGFcbiAgICAgICAgICBvcmlnaW5hbERhdGFTaXplLmlubmVyVGV4dCA9ICdPcmlnaW5hbCBGaWxlIFNpemU6ICcgKyBmaWxlLnNpemUgKyAnIGJ5dGVzJztcbiAgICAgICAgICBjb252ZXJ0ZWREYXRhU2l6ZS5pbm5lclRleHQgPSAnQ29udmVydGVkIEZpbGUgU2l6ZTogJyArIGZpbGVTaXplS0IudG9GaXhlZCgyKSArICcgS0InO1xuICAgICAgICAgIGNvbnZlcnRlZEltYWdlLnNyYyA9IHdlYnBJbWFnZTtcblxuICAgICAgICAgIC8vICpTdG9yZSBXZWJQIGltYWdlIGRhdGEgd2l0aCBvcmlnaW5hbCBmaWxlbmFtZVxuICAgICAgICAgIGNvbnN0IG9yaWdpbmFsRmlsZW5hbWUgPSBmaWxlLm5hbWU7XG4gICAgICAgICAgY29uc3Qgd2VicEZpbGVuYW1lID0gZ2V0V2VicEZpbGVuYW1lKG9yaWdpbmFsRmlsZW5hbWUpO1xuICAgICAgICAgIGNvbnN0IGltYWdlSW5kZXggPSBpbWFnZXNQcm9jZXNzZWQrKzsgLy8gKmdldCB0aGUgaW1hZ2UgaW5kZXggZnJvbSB0aGUgaW1hZ2VzUHJvY2Vzc2VkIGNvdW50ZXJcblxuICAgICAgICAgIC8vICpTdG9yZSBXZWJQIGltYWdlIGRhdGFcbiAgICAgICAgICB3ZWJwSW1hZ2VzW2ltYWdlSW5kZXhdID0geyBuYW1lOiBvcmlnaW5hbEZpbGVuYW1lLCBkYXRhOiB3ZWJwSW1hZ2UsIGZpbGVuYW1lOiB3ZWJwRmlsZW5hbWUgfTtcblxuICAgICAgICAgIC8vICpDaGVjayB0byBlbnN1cmUgYWxsIGltYWdlcyBoYXZlIGJlZW4gdXBsb2FkZWQgYW5kIGNvbnZlcnRlZFxuICAgICAgICAgIGlmIChpbWFnZXNQcm9jZXNzZWQgPT09IGV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJlbmRlcldlYnBJbWFnZXMoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlbmRlcldlYnBJbWFnZXMoKSlcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuZmlsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgIGRvd25sb2FkQnV0dG9uU2luZ2xlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICBkb3dubG9hZEJ1dHRvbk11bHRpcGxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkb3dubG9hZEJ1dHRvblNpbmdsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICBkb3dubG9hZEJ1dHRvbk11bHRpcGxlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgICB9LCAnaW1hZ2Uvd2VicCcsIHNsaWRlclZhbHVlKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gKlVwZGF0ZSB0aGUgc2xpZGVyIHZhbHVlIGRpc3BsYXlcbiAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlcicpO1xuICBjb25zdCBzbGlkZXJWYWx1ZURpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyVmFsdWUnKTtcbiAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7XG4gICAgc2xpZGVyVmFsdWVEaXNwbGF5LnRleHRDb250ZW50ID0gdGhpcy52YWx1ZTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gZ2V0V2VicEZpbGVuYW1lKG9yaWdpbmFsRmlsZW5hbWUpIHtcbiAgICBjb25zdCBleHRlbnNpb25JbmRleCA9IG9yaWdpbmFsRmlsZW5hbWUubGFzdEluZGV4T2YoJy4nKTtcbiAgICBjb25zdCBmaWxlbmFtZSA9IG9yaWdpbmFsRmlsZW5hbWUuc3Vic3RyaW5nKDAsIGV4dGVuc2lvbkluZGV4KTtcbiAgICByZXR1cm4gZmlsZW5hbWUgKyAnLndlYnAnO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyV2VicEltYWdlcygpIHtcbiAgICAvLyAqQ2xlYXIgdGhlIGV4aXN0aW5nIGltYWdlc1xuICAgIGNvbnN0IHN0cmVhbWxpbmVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RyZWFtbGluZScpO1xuICAgIHN0cmVhbWxpbmVDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc29sZS5sb2coJ2lzIHJ1bm5pbmcnKTtcbiAgICBcbiAgICAvLyAqUmVuZGVyIFdlYlAgaW1hZ2VzIGluIG9yZGVyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3ZWJwSW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB7IG5hbWUsIGRhdGEsIGZpbGVuYW1lIH0gPSB3ZWJwSW1hZ2VzW2ldO1xuICAgICAgY29uc3QgeyBvcmlnaW5hbERhdGFTaXplLCBjb252ZXJ0ZWRJbWFnZSwgY29udmVydGVkRGF0YVNpemUgfSA9IGltYWdlRWxlbWVudHNbaV07XG4gICAgXG4gICAgICAvLyAqQ3JlYXRlIGEgZGl2IHRvIGhvbGQgZWFjaCBpbWFnZSdzIGNvbnRlbnRcbiAgICAgIGNvbnN0IGZpbGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBmaWxlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdmaWxlLXdyYXBwZXInKTtcbiAgICAgIFxuICAgICAgLy8gKlNob3cgZmlsZSBuYW1lXG4gICAgICBjb25zdCBmaWxlTmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBjb25zdCBmaWxlTmFtZVRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnRmlsZSBOYW1lOicgKyAnICcpO1xuICAgICAgLy8gKmNvbnN0IGJyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICBjb25zdCBmaWxlbmFtZVRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShmaWxlbmFtZSk7XG5cbiAgICAgIGZpbGVOYW1lRWxlbWVudC5hcHBlbmRDaGlsZChmaWxlTmFtZVRleHQpO1xuICAgICAgLy8gKmZpbGVOYW1lRWxlbWVudC5hcHBlbmRDaGlsZChickVsZW1lbnQpO1xuICAgICAgZmlsZU5hbWVFbGVtZW50LmFwcGVuZENoaWxkKGZpbGVuYW1lVGV4dCk7XG4gIFxuICAgICAgZmlsZU5hbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZpbGVuYW1lLXdyYXBwZXInKTtcbiAgICAgIGZpbGVXcmFwcGVyLmFwcGVuZENoaWxkKGZpbGVOYW1lRWxlbWVudCk7XG5cbiAgICAgIGNvbnN0IGZpbGVXcmFwcGVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBmaWxlV3JhcHBlclJvdy5jbGFzc0xpc3QuYWRkKCdmaWxlLXdyYXBwZXItcm93JylcblxuICAgICAgLy8gKlNob3cgV2ViUCBpbWFnZVxuICAgICAgY29udmVydGVkSW1hZ2Uuc3JjID0gZGF0YTtcbiAgICAgIGNvbnZlcnRlZEltYWdlLmFsdCA9IG5hbWU7IC8vICpTZXQgdGhlIGFsdCBhdHRyaWJ1dGUgdG8gdGhlIG9yaWdpbmFsIGZpbGVuYW1lXG4gICAgICBmaWxlV3JhcHBlclJvdy5hcHBlbmRDaGlsZChjb252ZXJ0ZWRJbWFnZSk7XG5cbiAgXG5cbiAgICBcbiAgICAgIC8vICpTaG93IGZpbGUgc2l6ZXNcbiAgICAgIGNvbnN0IG9yaWdpbmFsRmlsZVNpemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBvcmlnaW5hbEZpbGVTaXplLmlubmVyVGV4dCA9IG9yaWdpbmFsRGF0YVNpemUuaW5uZXJUZXh0O1xuICAgICAgb3JpZ2luYWxGaWxlU2l6ZS5jbGFzc0xpc3QuYWRkKCdkYXRhLXdyYXBwZXInKTtcbiAgICAgIGZpbGVXcmFwcGVyUm93LmFwcGVuZENoaWxkKG9yaWdpbmFsRmlsZVNpemUpO1xuICAgICAgXG4gICAgICBjb25zdCBjb252ZXJ0ZWRGaWxlU2l6ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGNvbnZlcnRlZEZpbGVTaXplLmlubmVyVGV4dCA9IGNvbnZlcnRlZERhdGFTaXplLmlubmVyVGV4dDtcbiAgICAgIGNvbnZlcnRlZEZpbGVTaXplLmNsYXNzTGlzdC5hZGQoJ2RhdGEtd3JhcHBlcicpO1xuICAgICAgZmlsZVdyYXBwZXJSb3cuYXBwZW5kQ2hpbGQoY29udmVydGVkRmlsZVNpemUpO1xuICBcbiAgICAgIC8vICpDcmVhdGUgYSBidXR0b24gZm9yIGluZGl2aWR1YWwgZG93bmxvYWRcbiAgICAgIGNvbnN0IGRvd25sb2FkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBkb3dubG9hZEJ1dHRvbi5pbm5lclRleHQgPSAnRG93bmxvYWQnO1xuICAgICAgZG93bmxvYWRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2luZ2xlLWRvd25sb2FkJyk7XG4gICAgICBkb3dubG9hZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG93bmxvYWRXZWJwSW1hZ2UoZGF0YSwgbmFtZSk7XG4gICAgICB9KTtcbiAgICAgIGZpbGVXcmFwcGVyUm93LmFwcGVuZENoaWxkKGRvd25sb2FkQnV0dG9uKTtcbiAgICBcbiAgICAgIC8vICpBZGQgdGhlIGltYWdlIGNvbnRlbnQgdG8gdGhlIHN0cmVhbWxpbmUgY29udGFpbmVyXG4gICAgICBzdHJlYW1saW5lQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpbGVXcmFwcGVyKTtcbiAgICAgIHN0cmVhbWxpbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoZmlsZVdyYXBwZXJSb3cpO1xuICAgIH1cbiAgICBcbiAgICAvLyAqSGlkZSBzbGlkZXIgYWZ0ZXIgY29udmVyc2lvblxuICAgIGNvbnN0IHNsaWRlcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLXdyYXBwZXInKTtcbiAgICBzbGlkZXJXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbiAgXG5cbiAgXG4gIGFzeW5jIGZ1bmN0aW9uIGRvd25sb2FkV2VicEltYWdlKGRhdGFVUkksIGZpbGVuYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVVSSSk7XG4gICAgICBjb25zdCBibG9iID0gYXdhaXQgcmVzcG9uc2UuIGJsb2IoKTtcbiAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cbiAgICAgIGNvbnN0IGRvd25sb2FkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGRvd25sb2FkTGluay5ocmVmID0gdXJsO1xuICAgICAgZG93bmxvYWRMaW5rLmRvd25sb2FkID0gZmlsZW5hbWUucmVwbGFjZSgvXFwuW14vLl0rJC8sIFwiXCIpICsgXCIud2VicFwiOyAvLyAqUmVtb3ZlIHRoZSBmaWxlIGV4dGVuc2lvbiBhbmQgYWRkIC53ZWJwXG4gICAgICBkb3dubG9hZExpbmsuY2xpY2soKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZG93bmxvYWRpbmcgaW1hZ2UnLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZG93bmxvYWRJbWFnZXMgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAod2VicEltYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoZG93bmxvYWRCdXR0b25TaW5nbGUuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAvLyAqRG93bmxvYWQgc2luZ2xlIGZpbGVcbiAgICAgICAgY29uc3QgeyBuYW1lLCBkYXRhIH0gPSB3ZWJwSW1hZ2VzWzBdO1xuICAgICAgICBjb25zdCBmaWxlTmFtZSA9IGdldFdlYnBGaWxlbmFtZShuYW1lKTtcbiAgICAgICAgY29uc3QgZG93bmxvYWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBkb3dubG9hZExpbmsuaHJlZiA9IGRhdGE7XG4gICAgICAgIGRvd25sb2FkTGluay5kb3dubG9hZCA9IGZpbGVOYW1lO1xuICAgICAgICBkb3dubG9hZExpbmsuY2xpY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHppcCA9IG5ldyBKU1ppcCgpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2VicEltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHsgbmFtZSwgZGF0YSB9ID0gd2VicEltYWdlc1tpXTtcbiAgICAgICAgICBjb25zdCBmaWxlTmFtZSA9IGdldFdlYnBGaWxlbmFtZShuYW1lKTsgLy8gKlVzZSB0aGUgb3JpZ2luYWwgZmlsZW5hbWUgZm9yIHRoZSBXZWJQIGZpbGVcblxuICAgICAgICAgIHppcC5maWxlKGZpbGVOYW1lLCBkYXRhLnNwbGl0KCcsJylbMV0sIHsgYmFzZTY0OiB0cnVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgemlwLmdlbmVyYXRlQXN5bmMoeyB0eXBlOiAnYmxvYicgfSkudGhlbihmdW5jdGlvbihjb250ZW50KSB7XG4gICAgICAgICAgY29uc3QgZG93bmxvYWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgIGRvd25sb2FkTGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChjb250ZW50KTtcbiAgICAgICAgICBkb3dubG9hZExpbmsuZG93bmxvYWQgPSAnd2VicF9pbWFnZXMuemlwJztcbiAgICAgICAgICBkb3dubG9hZExpbmsuY2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNvbnZlcnRJbWFnZXMpO1xuICBkb3dubG9hZEJ1dHRvblNpbmdsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvd25sb2FkSW1hZ2VzKTtcbiAgZG93bmxvYWRCdXR0b25NdWx0aXBsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvd25sb2FkSW1hZ2VzKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==