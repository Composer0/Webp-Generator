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
/* harmony import */ var _parts_comparison_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/comparison-slider */ "./src/js/parts/comparison-slider.js");
/* harmony import */ var _parts_comparison_slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_parts_comparison_slider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



document.addEventListener('DOMContentLoaded', function () {
  var webpImages = [];
  var downloadButtonSingle = document.querySelector("#downloadButtonSingle");
  var downloadButtonMultiple = document.querySelector("#downloadButtonMultiple");
  var inputElement = document.getElementById('imageUploadButton');
  var imagesProcessed = 0;
  var imageElements = []; // *Array to store original and converted image elements

  var isImageProcessing = false;

  var convertImages = function convertImages(event) {
    if (isImageProcessing) {
      console.log("Ongoing image processing. Please wait...");
      return;
    }

    if (event.target.files.length > 0) {
      // Reset webpImages array
      webpImages.length = 0;
      imagesProcessed = 0;
      isImageProcessing = true; // Slider Value

      var sliderValue = parseFloat(document.getElementById('slider').value); // Default value for the slider

      var _slider = document.getElementById('slider');

      var _sliderValueDisplay = document.getElementById('sliderValue');

      _slider.addEventListener('input', function () {
        sliderValue = parseFloat(this.value);
        _sliderValueDisplay.textContent = sliderValue;
      });

      for (var i = 0; i < event.target.files.length; i++) {
        var file = event.target.files[i]; // Create elements for file sizes and converted image data

        var originalDataSize = document.createElement('span');
        var convertedImage = document.createElement('img');
        convertedImage.classList.add('webp-image');
        var convertedDataSize = document.createElement('span'); // Create image element to store the original image

        var originalImage = new Image();
        originalImage.src = URL.createObjectURL(file); // Store image and data span elements in the object with the same identifiers

        imageElements[i] = {
          originalDataSize: originalDataSize,
          convertedImage: convertedImage,
          convertedDataSize: convertedDataSize,
          originalImage: originalImage,
          // Store the original image element
          originalImageURL: URL.createObjectURL(file),
          webpImageURL: null,
          // This will be updated once we have the image processed.
          imageIndex: i
        }; // Process image and update elements

        processImage(event, file, originalDataSize, convertedImage, convertedDataSize, sliderValue, document.getElementById('popup-card'), i);
      }
    }
  }; // !Process Image


  function processImage(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8) {
    return _processImage.apply(this, arguments);
  } // *Update the slider value display


  function _processImage() {
    _processImage = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(event, file, originalDataSize, convertedImage, convertedDataSize, sliderValue, popup, imageIndex) {
      var startTime, canvas, ctx, originalImage, originalImageURL;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            startTime = performance.now();
            console.log('processing image: ', file);
            canvas = document.createElement('canvas');
            ctx = canvas.getContext('2d');
            originalImage = new Image();
            originalImage.src = URL.createObjectURL(file);

            originalImage.onload = function () {
              canvas.width = originalImage.width;
              canvas.height = originalImage.height;
              ctx.drawImage(originalImage, 0, 0); // *Convert canvas to WebP

              canvas.toBlob(function (blob) {
                //Calculate the file size of the WebP Image
                var fileSizeKB = blob.size / 1024;
                var reader = new FileReader();

                reader.onloadend = function () {
                  var webpImage = reader.result; // Update webp image elements.
                  // const imageIndex = imagesProcessed++;
                  // const dataIndex = imageElements[imageIndex].dataIndex;

                  convertedImage.dataset.index = imageIndex;
                  imageElements[imageIndex].originalImage = originalImage;
                  imageElements[imageIndex].webpImageURL = webpImage; //Store the converted WebP image URL here
                  // *Update file size elements and converted image data

                  originalDataSize.innerText = 'Original File Size: ' + file.size + ' bytes';
                  convertedDataSize.innerText = 'Converted File Size: ' + fileSizeKB.toFixed(2) + ' KB';
                  convertedImage.src = webpImage; // *Store WebP image data with original filename

                  var originalFilename = file.name;
                  var webpFilename = getWebpFilename(originalFilename);
                  imagesProcessed++; // *get the image index from the imagesProcessed counter
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

                  var endTime = performance.now();
                  var processingTime = endTime - startTime;
                  console.log('Processing time:', processingTime);
                  isImageProcessing = false;
                };

                reader.readAsDataURL(blob);
              }, 'image/webp', sliderValue);
            };

            originalImageURL = URL.createObjectURL(file);
            _context.next = 10;
            return new Promise(function (resolve) {
              var interval = setInterval(function () {
                if (originalImageURL) {
                  clearInterval(interval);
                  resolve();
                }
              }, 50);
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _processImage.apply(this, arguments);
  }

  var slider = document.getElementById('slider');
  var sliderValueDisplay = document.getElementById('sliderValue');
  slider.addEventListener('input', function () {
    sliderValueDisplay.textContent = this.value;
  });

  function getWebpFilename(originalFilename) {
    var extensionIndex = originalFilename.lastIndexOf('.');
    var filename = originalFilename.substring(0, extensionIndex);
    return filename + '.webp';
  } // !Render Webp images and data


  function renderWebpImages() {
    webpImages.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    }); // Sort the imageElements array based on the originalImageURL property

    imageElements.sort(function (a, b) {
      return a.originalImageURL.localeCompare(b.originalImageURL);
    }); // *Clear the existing images

    var streamlineContainer = document.querySelector('#streamline');
    streamlineContainer.innerHTML = '';
    console.log('is running'); // *Render WebP images in order

    var _loop = function _loop() {
      var _webpImages$i = webpImages[i],
          name = _webpImages$i.name,
          data = _webpImages$i.data,
          filename = _webpImages$i.filename;
      var imageElement = imageElements[i];
      var originalDataSize = imageElement.originalDataSize,
          convertedImage = imageElement.convertedImage,
          convertedDataSize = imageElement.convertedDataSize;
      var startTimeRendering = performance.now();
      console.log('rendering webp: ', filename); // *Create a div to hold each image's content

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
      fileWrapperRow.appendChild(convertedFileSize); // ...
      // *Create a Comparison Button

      var popup = document.getElementById('popup-card');
      var comparisonButton = document.createElement('button');
      comparisonButton.innerText = 'Compare';
      comparisonButton.classList.add('compare-button');
      comparisonButton.dataset.index = i; // Set data-index attribute directly

      comparisonButton.addEventListener("click", function (e) {
        var imagesContainer = document.getElementById('image-container');
        var beforeImage = imagesContainer.querySelector('.image-before');
        var afterImage = imagesContainer.querySelector('.image-after');

        if (beforeImage && afterImage) {
          imagesContainer.removeChild(beforeImage);
          imagesContainer.removeChild(afterImage);
        } else {
          // Use e.target to get the element that triggered the event
          var dataIndex = e.target.dataset.index; // Access the data-index directly

          var originalImageElement = document.createElement('img');
          originalImageElement.classList.add('image-before');
          originalImageElement.alt = 'original image';
          originalImageElement.src = imageElements[dataIndex].originalImageURL;
          imagesContainer.appendChild(originalImageElement);
          var convertedImageElement = document.createElement('img');
          convertedImageElement.classList.add('image-after');
          convertedImageElement.alt = 'converted image';
          convertedImageElement.src = webpImages[dataIndex].data;
          imagesContainer.appendChild(convertedImageElement);
          popup.classList.remove('hide');
          popup.classList.add('show');
        }
      });
      fileWrapperRow.appendChild(comparisonButton); // ...
      // *Create a button for individual download

      var downloadButton = document.createElement('button');
      downloadButton.innerText = 'Download';
      downloadButton.classList.add('single-download');
      downloadButton.addEventListener('click', function () {
        downloadWebpImage(data, name);
      });
      fileWrapperRow.appendChild(downloadButton); // *Add the image content to the streamline container

      streamlineContainer.appendChild(fileWrapper);
      streamlineContainer.appendChild(fileWrapperRow);
      var endTimeRendering = performance.now();
      var processingTimeRendering = endTimeRendering - startTimeRendering;
      console.log('Rendering time:', processingTimeRendering);
    };

    for (var i = 0; i < webpImages.length; i++) {
      _loop();
    } // *Hide slider after conversion


    var sliderWrapper = document.querySelector('.slider-wrapper');
    sliderWrapper.style.display = 'none';
  }

  function downloadWebpImage(_x9, _x10) {
    return _downloadWebpImage.apply(this, arguments);
  }

  function _downloadWebpImage() {
    _downloadWebpImage = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(dataURI, filename) {
      var response, blob, url, downloadLink;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return fetch(dataURI);

          case 3:
            response = _context2.sent;
            _context2.next = 6;
            return response.blob();

          case 6:
            blob = _context2.sent;
            url = URL.createObjectURL(blob);
            downloadLink = document.createElement('a');
            downloadLink.href = url;
            downloadLink.download = filename.replace(/\.[^/.]+$/, "") + ".webp"; // *Remove the file extension and add .webp

            downloadLink.click();
            _context2.next = 17;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            console.error('Error downloading image', _context2.t0);

          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 14]]);
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

/***/ "./src/js/parts/comparison-slider.js":
/*!*******************************************!*\
  !*** ./src/js/parts/comparison-slider.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Container = document.querySelector('#image-container');
var closeButton = document.querySelector('.close-button');
var comparisonSlider = document.querySelector('.comparison-slider');
comparisonSlider.addEventListener('input', function (e) {
  Container.style.setProperty('--position', "".concat(e.target.value, "%"));
});
closeButton.addEventListener('click', function () {
  var popupCard = document.getElementById('popup-card');
  popupCard.classList.remove('show');
  popupCard.classList.add('hide');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhcnRzL2NvbXBhcmlzb24tc2xpZGVyLmpzIl0sIm5hbWVzIjpbInJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZGVzYyIsInZhbHVlIiwidW5kZWZpbmVkIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkdlblN0YXRlU3VzcGVuZGVkU3RhcnQiLCJHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkIiwiR2VuU3RhdGVFeGVjdXRpbmciLCJHZW5TdGF0ZUNvbXBsZXRlZCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRpc3BsYXlOYW1lIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiX19hd2FpdCIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJlbnF1ZXVlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwibmV4dCIsImRvbmUiLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJtZXRob2ROYW1lIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsImxlbmd0aCIsInBvcCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImkiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RFbnRyeSIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwibW9kdWxlIiwicmVnZW5lcmF0b3JSdW50aW1lIiwiYWNjaWRlbnRhbFN0cmljdE1vZGUiLCJnbG9iYWxUaGlzIiwiRnVuY3Rpb24iLCJ3ZWJwYWNrUG9seWZpbGwiLCJkZXByZWNhdGUiLCJwYXRocyIsImNoaWxkcmVuIiwiZ2V0IiwibCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndlYnBJbWFnZXMiLCJkb3dubG9hZEJ1dHRvblNpbmdsZSIsInF1ZXJ5U2VsZWN0b3IiLCJkb3dubG9hZEJ1dHRvbk11bHRpcGxlIiwiaW5wdXRFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbWFnZXNQcm9jZXNzZWQiLCJpbWFnZUVsZW1lbnRzIiwiaXNJbWFnZVByb2Nlc3NpbmciLCJjb252ZXJ0SW1hZ2VzIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiZmlsZXMiLCJzbGlkZXJWYWx1ZSIsInBhcnNlRmxvYXQiLCJzbGlkZXIiLCJzbGlkZXJWYWx1ZURpc3BsYXkiLCJ0ZXh0Q29udGVudCIsImZpbGUiLCJvcmlnaW5hbERhdGFTaXplIiwiY3JlYXRlRWxlbWVudCIsImNvbnZlcnRlZEltYWdlIiwiY2xhc3NMaXN0IiwiYWRkIiwiY29udmVydGVkRGF0YVNpemUiLCJvcmlnaW5hbEltYWdlIiwiSW1hZ2UiLCJzcmMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJvcmlnaW5hbEltYWdlVVJMIiwid2VicEltYWdlVVJMIiwiaW1hZ2VJbmRleCIsInByb2Nlc3NJbWFnZSIsInBvcHVwIiwic3RhcnRUaW1lIiwicGVyZm9ybWFuY2UiLCJub3ciLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0Iiwib25sb2FkIiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3SW1hZ2UiLCJ0b0Jsb2IiLCJibG9iIiwiZmlsZVNpemVLQiIsInNpemUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwid2VicEltYWdlIiwiZGF0YXNldCIsImluZGV4IiwiaW5uZXJUZXh0IiwidG9GaXhlZCIsIm9yaWdpbmFsRmlsZW5hbWUiLCJ3ZWJwRmlsZW5hbWUiLCJnZXRXZWJwRmlsZW5hbWUiLCJkYXRhIiwiZmlsZW5hbWUiLCJyZW5kZXJXZWJwSW1hZ2VzIiwic3R5bGUiLCJkaXNwbGF5IiwiZW5kVGltZSIsInByb2Nlc3NpbmdUaW1lIiwicmVhZEFzRGF0YVVSTCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZXh0ZW5zaW9uSW5kZXgiLCJsYXN0SW5kZXhPZiIsInN1YnN0cmluZyIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJzdHJlYW1saW5lQ29udGFpbmVyIiwiaW5uZXJIVE1MIiwiaW1hZ2VFbGVtZW50Iiwic3RhcnRUaW1lUmVuZGVyaW5nIiwiZmlsZVdyYXBwZXIiLCJmaWxlTmFtZUVsZW1lbnQiLCJmaWxlTmFtZVRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImZpbGVuYW1lVGV4dCIsImFwcGVuZENoaWxkIiwiZmlsZVdyYXBwZXJSb3ciLCJhbHQiLCJvcmlnaW5hbEZpbGVTaXplIiwiY29udmVydGVkRmlsZVNpemUiLCJjb21wYXJpc29uQnV0dG9uIiwiZSIsImltYWdlc0NvbnRhaW5lciIsImJlZm9yZUltYWdlIiwiYWZ0ZXJJbWFnZSIsInJlbW92ZUNoaWxkIiwiZGF0YUluZGV4Iiwib3JpZ2luYWxJbWFnZUVsZW1lbnQiLCJjb252ZXJ0ZWRJbWFnZUVsZW1lbnQiLCJyZW1vdmUiLCJkb3dubG9hZEJ1dHRvbiIsImRvd25sb2FkV2VicEltYWdlIiwiZW5kVGltZVJlbmRlcmluZyIsInByb2Nlc3NpbmdUaW1lUmVuZGVyaW5nIiwic2xpZGVyV3JhcHBlciIsImRhdGFVUkkiLCJmZXRjaCIsInJlc3BvbnNlIiwidXJsIiwiZG93bmxvYWRMaW5rIiwiaHJlZiIsImRvd25sb2FkIiwicmVwbGFjZSIsImNsaWNrIiwiZG93bmxvYWRJbWFnZXMiLCJmaWxlTmFtZSIsInppcCIsIkpTWmlwIiwic3BsaXQiLCJiYXNlNjQiLCJnZW5lcmF0ZUFzeW5jIiwiY29udGVudCIsIkNvbnRhaW5lciIsImNsb3NlQnV0dG9uIiwiY29tcGFyaXNvblNsaWRlciIsInNldFByb3BlcnR5IiwicG9wdXBDYXJkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7O0FBT0EsSUFBSUEsT0FBTyxHQUFJLFVBQVVDLE9BQVYsRUFBbUI7QUFDaEM7O0FBRUEsTUFBSUMsRUFBRSxHQUFHQyxNQUFNLENBQUNDLFNBQWhCO0FBQ0EsTUFBSUMsTUFBTSxHQUFHSCxFQUFFLENBQUNJLGNBQWhCOztBQUNBLE1BQUlDLGNBQWMsR0FBR0osTUFBTSxDQUFDSSxjQUFQLElBQXlCLFVBQVVDLEdBQVYsRUFBZUMsR0FBZixFQUFvQkMsSUFBcEIsRUFBMEI7QUFBRUYsT0FBRyxDQUFDQyxHQUFELENBQUgsR0FBV0MsSUFBSSxDQUFDQyxLQUFoQjtBQUF3QixHQUFsRzs7QUFDQSxNQUFJQyxTQUFKLENBTmdDLENBTWpCOztBQUNmLE1BQUlDLE9BQU8sR0FBRyxPQUFPQyxNQUFQLEtBQWtCLFVBQWxCLEdBQStCQSxNQUEvQixHQUF3QyxFQUF0RDtBQUNBLE1BQUlDLGNBQWMsR0FBR0YsT0FBTyxDQUFDRyxRQUFSLElBQW9CLFlBQXpDO0FBQ0EsTUFBSUMsbUJBQW1CLEdBQUdKLE9BQU8sQ0FBQ0ssYUFBUixJQUF5QixpQkFBbkQ7QUFDQSxNQUFJQyxpQkFBaUIsR0FBR04sT0FBTyxDQUFDTyxXQUFSLElBQXVCLGVBQS9DOztBQUVBLFdBQVNDLE1BQVQsQ0FBZ0JiLEdBQWhCLEVBQXFCQyxHQUFyQixFQUEwQkUsS0FBMUIsRUFBaUM7QUFDL0JSLFVBQU0sQ0FBQ0ksY0FBUCxDQUFzQkMsR0FBdEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQzlCRSxXQUFLLEVBQUVBLEtBRHVCO0FBRTlCVyxnQkFBVSxFQUFFLElBRmtCO0FBRzlCQyxrQkFBWSxFQUFFLElBSGdCO0FBSTlCQyxjQUFRLEVBQUU7QUFKb0IsS0FBaEM7QUFNQSxXQUFPaEIsR0FBRyxDQUFDQyxHQUFELENBQVY7QUFDRDs7QUFDRCxNQUFJO0FBQ0Y7QUFDQVksVUFBTSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBQU47QUFDRCxHQUhELENBR0UsT0FBT0ksR0FBUCxFQUFZO0FBQ1pKLFVBQU0sR0FBRyxnQkFBU2IsR0FBVCxFQUFjQyxHQUFkLEVBQW1CRSxLQUFuQixFQUEwQjtBQUNqQyxhQUFPSCxHQUFHLENBQUNDLEdBQUQsQ0FBSCxHQUFXRSxLQUFsQjtBQUNELEtBRkQ7QUFHRDs7QUFFRCxXQUFTZSxJQUFULENBQWNDLE9BQWQsRUFBdUJDLE9BQXZCLEVBQWdDQyxJQUFoQyxFQUFzQ0MsV0FBdEMsRUFBbUQ7QUFDakQ7QUFDQSxRQUFJQyxjQUFjLEdBQUdILE9BQU8sSUFBSUEsT0FBTyxDQUFDeEIsU0FBUixZQUE2QjRCLFNBQXhDLEdBQW9ESixPQUFwRCxHQUE4REksU0FBbkY7QUFDQSxRQUFJQyxTQUFTLEdBQUc5QixNQUFNLENBQUMrQixNQUFQLENBQWNILGNBQWMsQ0FBQzNCLFNBQTdCLENBQWhCO0FBQ0EsUUFBSStCLE9BQU8sR0FBRyxJQUFJQyxPQUFKLENBQVlOLFdBQVcsSUFBSSxFQUEzQixDQUFkLENBSmlELENBTWpEO0FBQ0E7O0FBQ0F2QixrQkFBYyxDQUFDMEIsU0FBRCxFQUFZLFNBQVosRUFBdUI7QUFBRXRCLFdBQUssRUFBRTBCLGdCQUFnQixDQUFDVixPQUFELEVBQVVFLElBQVYsRUFBZ0JNLE9BQWhCO0FBQXpCLEtBQXZCLENBQWQ7QUFFQSxXQUFPRixTQUFQO0FBQ0Q7O0FBQ0RoQyxTQUFPLENBQUN5QixJQUFSLEdBQWVBLElBQWYsQ0ExQ2dDLENBNENoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxXQUFTWSxRQUFULENBQWtCQyxFQUFsQixFQUFzQi9CLEdBQXRCLEVBQTJCZ0MsR0FBM0IsRUFBZ0M7QUFDOUIsUUFBSTtBQUNGLGFBQU87QUFBRUMsWUFBSSxFQUFFLFFBQVI7QUFBa0JELFdBQUcsRUFBRUQsRUFBRSxDQUFDRyxJQUFILENBQVFsQyxHQUFSLEVBQWFnQyxHQUFiO0FBQXZCLE9BQVA7QUFDRCxLQUZELENBRUUsT0FBT2YsR0FBUCxFQUFZO0FBQ1osYUFBTztBQUFFZ0IsWUFBSSxFQUFFLE9BQVI7QUFBaUJELFdBQUcsRUFBRWY7QUFBdEIsT0FBUDtBQUNEO0FBQ0Y7O0FBRUQsTUFBSWtCLHNCQUFzQixHQUFHLGdCQUE3QjtBQUNBLE1BQUlDLHNCQUFzQixHQUFHLGdCQUE3QjtBQUNBLE1BQUlDLGlCQUFpQixHQUFHLFdBQXhCO0FBQ0EsTUFBSUMsaUJBQWlCLEdBQUcsV0FBeEIsQ0FqRWdDLENBbUVoQztBQUNBOztBQUNBLE1BQUlDLGdCQUFnQixHQUFHLEVBQXZCLENBckVnQyxDQXVFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsV0FBU2YsU0FBVCxHQUFxQixDQUFFOztBQUN2QixXQUFTZ0IsaUJBQVQsR0FBNkIsQ0FBRTs7QUFDL0IsV0FBU0MsMEJBQVQsR0FBc0MsQ0FBRSxDQTdFUixDQStFaEM7QUFDQTs7O0FBQ0EsTUFBSUMsaUJBQWlCLEdBQUcsRUFBeEI7QUFDQTdCLFFBQU0sQ0FBQzZCLGlCQUFELEVBQW9CbkMsY0FBcEIsRUFBb0MsWUFBWTtBQUNwRCxXQUFPLElBQVA7QUFDRCxHQUZLLENBQU47QUFJQSxNQUFJb0MsUUFBUSxHQUFHaEQsTUFBTSxDQUFDaUQsY0FBdEI7QUFDQSxNQUFJQyx1QkFBdUIsR0FBR0YsUUFBUSxJQUFJQSxRQUFRLENBQUNBLFFBQVEsQ0FBQ0csTUFBTSxDQUFDLEVBQUQsQ0FBUCxDQUFULENBQWxEOztBQUNBLE1BQUlELHVCQUF1QixJQUN2QkEsdUJBQXVCLEtBQUtuRCxFQUQ1QixJQUVBRyxNQUFNLENBQUNxQyxJQUFQLENBQVlXLHVCQUFaLEVBQXFDdEMsY0FBckMsQ0FGSixFQUUwRDtBQUN4RDtBQUNBO0FBQ0FtQyxxQkFBaUIsR0FBR0csdUJBQXBCO0FBQ0Q7O0FBRUQsTUFBSUUsRUFBRSxHQUFHTiwwQkFBMEIsQ0FBQzdDLFNBQTNCLEdBQ1A0QixTQUFTLENBQUM1QixTQUFWLEdBQXNCRCxNQUFNLENBQUMrQixNQUFQLENBQWNnQixpQkFBZCxDQUR4QjtBQUVBRixtQkFBaUIsQ0FBQzVDLFNBQWxCLEdBQThCNkMsMEJBQTlCO0FBQ0ExQyxnQkFBYyxDQUFDZ0QsRUFBRCxFQUFLLGFBQUwsRUFBb0I7QUFBRTVDLFNBQUssRUFBRXNDLDBCQUFUO0FBQXFDMUIsZ0JBQVksRUFBRTtBQUFuRCxHQUFwQixDQUFkO0FBQ0FoQixnQkFBYyxDQUNaMEMsMEJBRFksRUFFWixhQUZZLEVBR1o7QUFBRXRDLFNBQUssRUFBRXFDLGlCQUFUO0FBQTRCekIsZ0JBQVksRUFBRTtBQUExQyxHQUhZLENBQWQ7QUFLQXlCLG1CQUFpQixDQUFDUSxXQUFsQixHQUFnQ25DLE1BQU0sQ0FDcEM0QiwwQkFEb0MsRUFFcEM5QixpQkFGb0MsRUFHcEMsbUJBSG9DLENBQXRDLENBekdnQyxDQStHaEM7QUFDQTs7QUFDQSxXQUFTc0MscUJBQVQsQ0FBK0JyRCxTQUEvQixFQUEwQztBQUN4QyxLQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLFFBQWxCLEVBQTRCc0QsT0FBNUIsQ0FBb0MsVUFBU0MsTUFBVCxFQUFpQjtBQUNuRHRDLFlBQU0sQ0FBQ2pCLFNBQUQsRUFBWXVELE1BQVosRUFBb0IsVUFBU25CLEdBQVQsRUFBYztBQUN0QyxlQUFPLEtBQUtvQixPQUFMLENBQWFELE1BQWIsRUFBcUJuQixHQUFyQixDQUFQO0FBQ0QsT0FGSyxDQUFOO0FBR0QsS0FKRDtBQUtEOztBQUVEdkMsU0FBTyxDQUFDNEQsbUJBQVIsR0FBOEIsVUFBU0MsTUFBVCxFQUFpQjtBQUM3QyxRQUFJQyxJQUFJLEdBQUcsT0FBT0QsTUFBUCxLQUFrQixVQUFsQixJQUFnQ0EsTUFBTSxDQUFDRSxXQUFsRDtBQUNBLFdBQU9ELElBQUksR0FDUEEsSUFBSSxLQUFLZixpQkFBVCxJQUNBO0FBQ0E7QUFDQSxLQUFDZSxJQUFJLENBQUNQLFdBQUwsSUFBb0JPLElBQUksQ0FBQ0UsSUFBMUIsTUFBb0MsbUJBSjdCLEdBS1AsS0FMSjtBQU1ELEdBUkQ7O0FBVUFoRSxTQUFPLENBQUNpRSxJQUFSLEdBQWUsVUFBU0osTUFBVCxFQUFpQjtBQUM5QixRQUFJM0QsTUFBTSxDQUFDZ0UsY0FBWCxFQUEyQjtBQUN6QmhFLFlBQU0sQ0FBQ2dFLGNBQVAsQ0FBc0JMLE1BQXRCLEVBQThCYiwwQkFBOUI7QUFDRCxLQUZELE1BRU87QUFDTGEsWUFBTSxDQUFDTSxTQUFQLEdBQW1CbkIsMEJBQW5CO0FBQ0E1QixZQUFNLENBQUN5QyxNQUFELEVBQVMzQyxpQkFBVCxFQUE0QixtQkFBNUIsQ0FBTjtBQUNEOztBQUNEMkMsVUFBTSxDQUFDMUQsU0FBUCxHQUFtQkQsTUFBTSxDQUFDK0IsTUFBUCxDQUFjcUIsRUFBZCxDQUFuQjtBQUNBLFdBQU9PLE1BQVA7QUFDRCxHQVRELENBbklnQyxDQThJaEM7QUFDQTtBQUNBO0FBQ0E7OztBQUNBN0QsU0FBTyxDQUFDb0UsS0FBUixHQUFnQixVQUFTN0IsR0FBVCxFQUFjO0FBQzVCLFdBQU87QUFBRThCLGFBQU8sRUFBRTlCO0FBQVgsS0FBUDtBQUNELEdBRkQ7O0FBSUEsV0FBUytCLGFBQVQsQ0FBdUJ0QyxTQUF2QixFQUFrQ3VDLFdBQWxDLEVBQStDO0FBQzdDLGFBQVNDLE1BQVQsQ0FBZ0JkLE1BQWhCLEVBQXdCbkIsR0FBeEIsRUFBNkJrQyxPQUE3QixFQUFzQ0MsTUFBdEMsRUFBOEM7QUFDNUMsVUFBSUMsTUFBTSxHQUFHdEMsUUFBUSxDQUFDTCxTQUFTLENBQUMwQixNQUFELENBQVYsRUFBb0IxQixTQUFwQixFQUErQk8sR0FBL0IsQ0FBckI7O0FBQ0EsVUFBSW9DLE1BQU0sQ0FBQ25DLElBQVAsS0FBZ0IsT0FBcEIsRUFBNkI7QUFDM0JrQyxjQUFNLENBQUNDLE1BQU0sQ0FBQ3BDLEdBQVIsQ0FBTjtBQUNELE9BRkQsTUFFTztBQUNMLFlBQUlxQyxNQUFNLEdBQUdELE1BQU0sQ0FBQ3BDLEdBQXBCO0FBQ0EsWUFBSTdCLEtBQUssR0FBR2tFLE1BQU0sQ0FBQ2xFLEtBQW5COztBQUNBLFlBQUlBLEtBQUssSUFDTCxRQUFPQSxLQUFQLE1BQWlCLFFBRGpCLElBRUFOLE1BQU0sQ0FBQ3FDLElBQVAsQ0FBWS9CLEtBQVosRUFBbUIsU0FBbkIsQ0FGSixFQUVtQztBQUNqQyxpQkFBTzZELFdBQVcsQ0FBQ0UsT0FBWixDQUFvQi9ELEtBQUssQ0FBQzJELE9BQTFCLEVBQW1DUSxJQUFuQyxDQUF3QyxVQUFTbkUsS0FBVCxFQUFnQjtBQUM3RDhELGtCQUFNLENBQUMsTUFBRCxFQUFTOUQsS0FBVCxFQUFnQitELE9BQWhCLEVBQXlCQyxNQUF6QixDQUFOO0FBQ0QsV0FGTSxFQUVKLFVBQVNsRCxHQUFULEVBQWM7QUFDZmdELGtCQUFNLENBQUMsT0FBRCxFQUFVaEQsR0FBVixFQUFlaUQsT0FBZixFQUF3QkMsTUFBeEIsQ0FBTjtBQUNELFdBSk0sQ0FBUDtBQUtEOztBQUVELGVBQU9ILFdBQVcsQ0FBQ0UsT0FBWixDQUFvQi9ELEtBQXBCLEVBQTJCbUUsSUFBM0IsQ0FBZ0MsVUFBU0MsU0FBVCxFQUFvQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQUYsZ0JBQU0sQ0FBQ2xFLEtBQVAsR0FBZW9FLFNBQWY7QUFDQUwsaUJBQU8sQ0FBQ0csTUFBRCxDQUFQO0FBQ0QsU0FOTSxFQU1KLFVBQVNHLEtBQVQsRUFBZ0I7QUFDakI7QUFDQTtBQUNBLGlCQUFPUCxNQUFNLENBQUMsT0FBRCxFQUFVTyxLQUFWLEVBQWlCTixPQUFqQixFQUEwQkMsTUFBMUIsQ0FBYjtBQUNELFNBVk0sQ0FBUDtBQVdEO0FBQ0Y7O0FBRUQsUUFBSU0sZUFBSjs7QUFFQSxhQUFTQyxPQUFULENBQWlCdkIsTUFBakIsRUFBeUJuQixHQUF6QixFQUE4QjtBQUM1QixlQUFTMkMsMEJBQVQsR0FBc0M7QUFDcEMsZUFBTyxJQUFJWCxXQUFKLENBQWdCLFVBQVNFLE9BQVQsRUFBa0JDLE1BQWxCLEVBQTBCO0FBQy9DRixnQkFBTSxDQUFDZCxNQUFELEVBQVNuQixHQUFULEVBQWNrQyxPQUFkLEVBQXVCQyxNQUF2QixDQUFOO0FBQ0QsU0FGTSxDQUFQO0FBR0Q7O0FBRUQsYUFBT00sZUFBZSxHQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEscUJBQWUsR0FBR0EsZUFBZSxDQUFDSCxJQUFoQixDQUNoQkssMEJBRGdCLEVBRWhCO0FBQ0E7QUFDQUEsZ0NBSmdCLENBQUgsR0FLWEEsMEJBQTBCLEVBbEJoQztBQW1CRCxLQTVENEMsQ0E4RDdDO0FBQ0E7OztBQUNBNUUsa0JBQWMsQ0FBQyxJQUFELEVBQU8sU0FBUCxFQUFrQjtBQUFFSSxXQUFLLEVBQUV1RTtBQUFULEtBQWxCLENBQWQ7QUFDRDs7QUFFRHpCLHVCQUFxQixDQUFDYyxhQUFhLENBQUNuRSxTQUFmLENBQXJCO0FBQ0FpQixRQUFNLENBQUNrRCxhQUFhLENBQUNuRSxTQUFmLEVBQTBCYSxtQkFBMUIsRUFBK0MsWUFBWTtBQUMvRCxXQUFPLElBQVA7QUFDRCxHQUZLLENBQU47QUFHQWhCLFNBQU8sQ0FBQ3NFLGFBQVIsR0FBd0JBLGFBQXhCLENBN05nQyxDQStOaEM7QUFDQTtBQUNBOztBQUNBdEUsU0FBTyxDQUFDbUYsS0FBUixHQUFnQixVQUFTekQsT0FBVCxFQUFrQkMsT0FBbEIsRUFBMkJDLElBQTNCLEVBQWlDQyxXQUFqQyxFQUE4QzBDLFdBQTlDLEVBQTJEO0FBQ3pFLFFBQUlBLFdBQVcsS0FBSyxLQUFLLENBQXpCLEVBQTRCQSxXQUFXLEdBQUdhLE9BQWQ7QUFFNUIsUUFBSUMsSUFBSSxHQUFHLElBQUlmLGFBQUosQ0FDVDdDLElBQUksQ0FBQ0MsT0FBRCxFQUFVQyxPQUFWLEVBQW1CQyxJQUFuQixFQUF5QkMsV0FBekIsQ0FESyxFQUVUMEMsV0FGUyxDQUFYO0FBS0EsV0FBT3ZFLE9BQU8sQ0FBQzRELG1CQUFSLENBQTRCakMsT0FBNUIsSUFDSDBELElBREcsQ0FDRTtBQURGLE1BRUhBLElBQUksQ0FBQ0MsSUFBTCxHQUFZVCxJQUFaLENBQWlCLFVBQVNELE1BQVQsRUFBaUI7QUFDaEMsYUFBT0EsTUFBTSxDQUFDVyxJQUFQLEdBQWNYLE1BQU0sQ0FBQ2xFLEtBQXJCLEdBQTZCMkUsSUFBSSxDQUFDQyxJQUFMLEVBQXBDO0FBQ0QsS0FGRCxDQUZKO0FBS0QsR0FiRDs7QUFlQSxXQUFTbEQsZ0JBQVQsQ0FBMEJWLE9BQTFCLEVBQW1DRSxJQUFuQyxFQUF5Q00sT0FBekMsRUFBa0Q7QUFDaEQsUUFBSXNELEtBQUssR0FBRzlDLHNCQUFaO0FBRUEsV0FBTyxTQUFTOEIsTUFBVCxDQUFnQmQsTUFBaEIsRUFBd0JuQixHQUF4QixFQUE2QjtBQUNsQyxVQUFJaUQsS0FBSyxLQUFLNUMsaUJBQWQsRUFBaUM7QUFDL0IsY0FBTSxJQUFJNkMsS0FBSixDQUFVLDhCQUFWLENBQU47QUFDRDs7QUFFRCxVQUFJRCxLQUFLLEtBQUszQyxpQkFBZCxFQUFpQztBQUMvQixZQUFJYSxNQUFNLEtBQUssT0FBZixFQUF3QjtBQUN0QixnQkFBTW5CLEdBQU47QUFDRCxTQUg4QixDQUsvQjtBQUNBOzs7QUFDQSxlQUFPbUQsVUFBVSxFQUFqQjtBQUNEOztBQUVEeEQsYUFBTyxDQUFDd0IsTUFBUixHQUFpQkEsTUFBakI7QUFDQXhCLGFBQU8sQ0FBQ0ssR0FBUixHQUFjQSxHQUFkOztBQUVBLGFBQU8sSUFBUCxFQUFhO0FBQ1gsWUFBSW9ELFFBQVEsR0FBR3pELE9BQU8sQ0FBQ3lELFFBQXZCOztBQUNBLFlBQUlBLFFBQUosRUFBYztBQUNaLGNBQUlDLGNBQWMsR0FBR0MsbUJBQW1CLENBQUNGLFFBQUQsRUFBV3pELE9BQVgsQ0FBeEM7O0FBQ0EsY0FBSTBELGNBQUosRUFBb0I7QUFDbEIsZ0JBQUlBLGNBQWMsS0FBSzlDLGdCQUF2QixFQUF5QztBQUN6QyxtQkFBTzhDLGNBQVA7QUFDRDtBQUNGOztBQUVELFlBQUkxRCxPQUFPLENBQUN3QixNQUFSLEtBQW1CLE1BQXZCLEVBQStCO0FBQzdCO0FBQ0E7QUFDQXhCLGlCQUFPLENBQUM0RCxJQUFSLEdBQWU1RCxPQUFPLENBQUM2RCxLQUFSLEdBQWdCN0QsT0FBTyxDQUFDSyxHQUF2QztBQUVELFNBTEQsTUFLTyxJQUFJTCxPQUFPLENBQUN3QixNQUFSLEtBQW1CLE9BQXZCLEVBQWdDO0FBQ3JDLGNBQUk4QixLQUFLLEtBQUs5QyxzQkFBZCxFQUFzQztBQUNwQzhDLGlCQUFLLEdBQUczQyxpQkFBUjtBQUNBLGtCQUFNWCxPQUFPLENBQUNLLEdBQWQ7QUFDRDs7QUFFREwsaUJBQU8sQ0FBQzhELGlCQUFSLENBQTBCOUQsT0FBTyxDQUFDSyxHQUFsQztBQUVELFNBUk0sTUFRQSxJQUFJTCxPQUFPLENBQUN3QixNQUFSLEtBQW1CLFFBQXZCLEVBQWlDO0FBQ3RDeEIsaUJBQU8sQ0FBQytELE1BQVIsQ0FBZSxRQUFmLEVBQXlCL0QsT0FBTyxDQUFDSyxHQUFqQztBQUNEOztBQUVEaUQsYUFBSyxHQUFHNUMsaUJBQVI7QUFFQSxZQUFJK0IsTUFBTSxHQUFHdEMsUUFBUSxDQUFDWCxPQUFELEVBQVVFLElBQVYsRUFBZ0JNLE9BQWhCLENBQXJCOztBQUNBLFlBQUl5QyxNQUFNLENBQUNuQyxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzVCO0FBQ0E7QUFDQWdELGVBQUssR0FBR3RELE9BQU8sQ0FBQ3FELElBQVIsR0FDSjFDLGlCQURJLEdBRUpGLHNCQUZKOztBQUlBLGNBQUlnQyxNQUFNLENBQUNwQyxHQUFQLEtBQWVPLGdCQUFuQixFQUFxQztBQUNuQztBQUNEOztBQUVELGlCQUFPO0FBQ0xwQyxpQkFBSyxFQUFFaUUsTUFBTSxDQUFDcEMsR0FEVDtBQUVMZ0QsZ0JBQUksRUFBRXJELE9BQU8sQ0FBQ3FEO0FBRlQsV0FBUDtBQUtELFNBaEJELE1BZ0JPLElBQUlaLE1BQU0sQ0FBQ25DLElBQVAsS0FBZ0IsT0FBcEIsRUFBNkI7QUFDbENnRCxlQUFLLEdBQUczQyxpQkFBUixDQURrQyxDQUVsQztBQUNBOztBQUNBWCxpQkFBTyxDQUFDd0IsTUFBUixHQUFpQixPQUFqQjtBQUNBeEIsaUJBQU8sQ0FBQ0ssR0FBUixHQUFjb0MsTUFBTSxDQUFDcEMsR0FBckI7QUFDRDtBQUNGO0FBQ0YsS0F4RUQ7QUF5RUQsR0E3VCtCLENBK1RoQztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsV0FBU3NELG1CQUFULENBQTZCRixRQUE3QixFQUF1Q3pELE9BQXZDLEVBQWdEO0FBQzlDLFFBQUlnRSxVQUFVLEdBQUdoRSxPQUFPLENBQUN3QixNQUF6QjtBQUNBLFFBQUlBLE1BQU0sR0FBR2lDLFFBQVEsQ0FBQzVFLFFBQVQsQ0FBa0JtRixVQUFsQixDQUFiOztBQUNBLFFBQUl4QyxNQUFNLEtBQUsvQyxTQUFmLEVBQTBCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBdUIsYUFBTyxDQUFDeUQsUUFBUixHQUFtQixJQUFuQixDQUp3QixDQU14Qjs7QUFDQSxVQUFJTyxVQUFVLEtBQUssT0FBZixJQUEwQlAsUUFBUSxDQUFDNUUsUUFBVCxDQUFrQixRQUFsQixDQUE5QixFQUEyRDtBQUN6RDtBQUNBO0FBQ0FtQixlQUFPLENBQUN3QixNQUFSLEdBQWlCLFFBQWpCO0FBQ0F4QixlQUFPLENBQUNLLEdBQVIsR0FBYzVCLFNBQWQ7QUFDQWtGLDJCQUFtQixDQUFDRixRQUFELEVBQVd6RCxPQUFYLENBQW5COztBQUVBLFlBQUlBLE9BQU8sQ0FBQ3dCLE1BQVIsS0FBbUIsT0FBdkIsRUFBZ0M7QUFDOUI7QUFDQTtBQUNBLGlCQUFPWixnQkFBUDtBQUNEO0FBQ0Y7O0FBQ0QsVUFBSW9ELFVBQVUsS0FBSyxRQUFuQixFQUE2QjtBQUMzQmhFLGVBQU8sQ0FBQ3dCLE1BQVIsR0FBaUIsT0FBakI7QUFDQXhCLGVBQU8sQ0FBQ0ssR0FBUixHQUFjLElBQUk0RCxTQUFKLENBQ1osc0NBQXNDRCxVQUF0QyxHQUFtRCxVQUR2QyxDQUFkO0FBRUQ7O0FBRUQsYUFBT3BELGdCQUFQO0FBQ0Q7O0FBRUQsUUFBSTZCLE1BQU0sR0FBR3RDLFFBQVEsQ0FBQ3FCLE1BQUQsRUFBU2lDLFFBQVEsQ0FBQzVFLFFBQWxCLEVBQTRCbUIsT0FBTyxDQUFDSyxHQUFwQyxDQUFyQjs7QUFFQSxRQUFJb0MsTUFBTSxDQUFDbkMsSUFBUCxLQUFnQixPQUFwQixFQUE2QjtBQUMzQk4sYUFBTyxDQUFDd0IsTUFBUixHQUFpQixPQUFqQjtBQUNBeEIsYUFBTyxDQUFDSyxHQUFSLEdBQWNvQyxNQUFNLENBQUNwQyxHQUFyQjtBQUNBTCxhQUFPLENBQUN5RCxRQUFSLEdBQW1CLElBQW5CO0FBQ0EsYUFBTzdDLGdCQUFQO0FBQ0Q7O0FBRUQsUUFBSXNELElBQUksR0FBR3pCLE1BQU0sQ0FBQ3BDLEdBQWxCOztBQUVBLFFBQUksQ0FBRTZELElBQU4sRUFBWTtBQUNWbEUsYUFBTyxDQUFDd0IsTUFBUixHQUFpQixPQUFqQjtBQUNBeEIsYUFBTyxDQUFDSyxHQUFSLEdBQWMsSUFBSTRELFNBQUosQ0FBYyxrQ0FBZCxDQUFkO0FBQ0FqRSxhQUFPLENBQUN5RCxRQUFSLEdBQW1CLElBQW5CO0FBQ0EsYUFBTzdDLGdCQUFQO0FBQ0Q7O0FBRUQsUUFBSXNELElBQUksQ0FBQ2IsSUFBVCxFQUFlO0FBQ2I7QUFDQTtBQUNBckQsYUFBTyxDQUFDeUQsUUFBUSxDQUFDVSxVQUFWLENBQVAsR0FBK0JELElBQUksQ0FBQzFGLEtBQXBDLENBSGEsQ0FLYjs7QUFDQXdCLGFBQU8sQ0FBQ29ELElBQVIsR0FBZUssUUFBUSxDQUFDVyxPQUF4QixDQU5hLENBUWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFVBQUlwRSxPQUFPLENBQUN3QixNQUFSLEtBQW1CLFFBQXZCLEVBQWlDO0FBQy9CeEIsZUFBTyxDQUFDd0IsTUFBUixHQUFpQixNQUFqQjtBQUNBeEIsZUFBTyxDQUFDSyxHQUFSLEdBQWM1QixTQUFkO0FBQ0Q7QUFFRixLQW5CRCxNQW1CTztBQUNMO0FBQ0EsYUFBT3lGLElBQVA7QUFDRCxLQXhFNkMsQ0EwRTlDO0FBQ0E7OztBQUNBbEUsV0FBTyxDQUFDeUQsUUFBUixHQUFtQixJQUFuQjtBQUNBLFdBQU83QyxnQkFBUDtBQUNELEdBalorQixDQW1aaEM7QUFDQTs7O0FBQ0FVLHVCQUFxQixDQUFDRixFQUFELENBQXJCO0FBRUFsQyxRQUFNLENBQUNrQyxFQUFELEVBQUtwQyxpQkFBTCxFQUF3QixXQUF4QixDQUFOLENBdlpnQyxDQXlaaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQUUsUUFBTSxDQUFDa0MsRUFBRCxFQUFLeEMsY0FBTCxFQUFxQixZQUFXO0FBQ3BDLFdBQU8sSUFBUDtBQUNELEdBRkssQ0FBTjtBQUlBTSxRQUFNLENBQUNrQyxFQUFELEVBQUssVUFBTCxFQUFpQixZQUFXO0FBQ2hDLFdBQU8sb0JBQVA7QUFDRCxHQUZLLENBQU47O0FBSUEsV0FBU2lELFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCO0FBQzFCLFFBQUlDLEtBQUssR0FBRztBQUFFQyxZQUFNLEVBQUVGLElBQUksQ0FBQyxDQUFEO0FBQWQsS0FBWjs7QUFFQSxRQUFJLEtBQUtBLElBQVQsRUFBZTtBQUNiQyxXQUFLLENBQUNFLFFBQU4sR0FBaUJILElBQUksQ0FBQyxDQUFELENBQXJCO0FBQ0Q7O0FBRUQsUUFBSSxLQUFLQSxJQUFULEVBQWU7QUFDYkMsV0FBSyxDQUFDRyxVQUFOLEdBQW1CSixJQUFJLENBQUMsQ0FBRCxDQUF2QjtBQUNBQyxXQUFLLENBQUNJLFFBQU4sR0FBaUJMLElBQUksQ0FBQyxDQUFELENBQXJCO0FBQ0Q7O0FBRUQsU0FBS00sVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUJOLEtBQXJCO0FBQ0Q7O0FBRUQsV0FBU08sYUFBVCxDQUF1QlAsS0FBdkIsRUFBOEI7QUFDNUIsUUFBSTlCLE1BQU0sR0FBRzhCLEtBQUssQ0FBQ1EsVUFBTixJQUFvQixFQUFqQztBQUNBdEMsVUFBTSxDQUFDbkMsSUFBUCxHQUFjLFFBQWQ7QUFDQSxXQUFPbUMsTUFBTSxDQUFDcEMsR0FBZDtBQUNBa0UsU0FBSyxDQUFDUSxVQUFOLEdBQW1CdEMsTUFBbkI7QUFDRDs7QUFFRCxXQUFTeEMsT0FBVCxDQUFpQk4sV0FBakIsRUFBOEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsU0FBS2lGLFVBQUwsR0FBa0IsQ0FBQztBQUFFSixZQUFNLEVBQUU7QUFBVixLQUFELENBQWxCO0FBQ0E3RSxlQUFXLENBQUM0QixPQUFaLENBQW9COEMsWUFBcEIsRUFBa0MsSUFBbEM7QUFDQSxTQUFLVyxLQUFMLENBQVcsSUFBWDtBQUNEOztBQUVEbEgsU0FBTyxDQUFDbUgsSUFBUixHQUFlLFVBQVNDLEdBQVQsRUFBYztBQUMzQixRQUFJQyxNQUFNLEdBQUduSCxNQUFNLENBQUNrSCxHQUFELENBQW5CO0FBQ0EsUUFBSUQsSUFBSSxHQUFHLEVBQVg7O0FBQ0EsU0FBSyxJQUFJM0csR0FBVCxJQUFnQjZHLE1BQWhCLEVBQXdCO0FBQ3RCRixVQUFJLENBQUNKLElBQUwsQ0FBVXZHLEdBQVY7QUFDRDs7QUFDRDJHLFFBQUksQ0FBQ0csT0FBTCxHQU4yQixDQVEzQjtBQUNBOztBQUNBLFdBQU8sU0FBU2hDLElBQVQsR0FBZ0I7QUFDckIsYUFBTzZCLElBQUksQ0FBQ0ksTUFBWixFQUFvQjtBQUNsQixZQUFJL0csR0FBRyxHQUFHMkcsSUFBSSxDQUFDSyxHQUFMLEVBQVY7O0FBQ0EsWUFBSWhILEdBQUcsSUFBSTZHLE1BQVgsRUFBbUI7QUFDakIvQixjQUFJLENBQUM1RSxLQUFMLEdBQWFGLEdBQWI7QUFDQThFLGNBQUksQ0FBQ0MsSUFBTCxHQUFZLEtBQVo7QUFDQSxpQkFBT0QsSUFBUDtBQUNEO0FBQ0YsT0FSb0IsQ0FVckI7QUFDQTtBQUNBOzs7QUFDQUEsVUFBSSxDQUFDQyxJQUFMLEdBQVksSUFBWjtBQUNBLGFBQU9ELElBQVA7QUFDRCxLQWZEO0FBZ0JELEdBMUJEOztBQTRCQSxXQUFTakMsTUFBVCxDQUFnQm9FLFFBQWhCLEVBQTBCO0FBQ3hCLFFBQUlBLFFBQUosRUFBYztBQUNaLFVBQUlDLGNBQWMsR0FBR0QsUUFBUSxDQUFDM0csY0FBRCxDQUE3Qjs7QUFDQSxVQUFJNEcsY0FBSixFQUFvQjtBQUNsQixlQUFPQSxjQUFjLENBQUNqRixJQUFmLENBQW9CZ0YsUUFBcEIsQ0FBUDtBQUNEOztBQUVELFVBQUksT0FBT0EsUUFBUSxDQUFDbkMsSUFBaEIsS0FBeUIsVUFBN0IsRUFBeUM7QUFDdkMsZUFBT21DLFFBQVA7QUFDRDs7QUFFRCxVQUFJLENBQUNFLEtBQUssQ0FBQ0YsUUFBUSxDQUFDRixNQUFWLENBQVYsRUFBNkI7QUFDM0IsWUFBSUssQ0FBQyxHQUFHLENBQUMsQ0FBVDtBQUFBLFlBQVl0QyxJQUFJLEdBQUcsU0FBU0EsSUFBVCxHQUFnQjtBQUNqQyxpQkFBTyxFQUFFc0MsQ0FBRixHQUFNSCxRQUFRLENBQUNGLE1BQXRCLEVBQThCO0FBQzVCLGdCQUFJbkgsTUFBTSxDQUFDcUMsSUFBUCxDQUFZZ0YsUUFBWixFQUFzQkcsQ0FBdEIsQ0FBSixFQUE4QjtBQUM1QnRDLGtCQUFJLENBQUM1RSxLQUFMLEdBQWErRyxRQUFRLENBQUNHLENBQUQsQ0FBckI7QUFDQXRDLGtCQUFJLENBQUNDLElBQUwsR0FBWSxLQUFaO0FBQ0EscUJBQU9ELElBQVA7QUFDRDtBQUNGOztBQUVEQSxjQUFJLENBQUM1RSxLQUFMLEdBQWFDLFNBQWI7QUFDQTJFLGNBQUksQ0FBQ0MsSUFBTCxHQUFZLElBQVo7QUFFQSxpQkFBT0QsSUFBUDtBQUNELFNBYkQ7O0FBZUEsZUFBT0EsSUFBSSxDQUFDQSxJQUFMLEdBQVlBLElBQW5CO0FBQ0Q7QUFDRixLQTdCdUIsQ0ErQnhCOzs7QUFDQSxXQUFPO0FBQUVBLFVBQUksRUFBRUk7QUFBUixLQUFQO0FBQ0Q7O0FBQ0QxRixTQUFPLENBQUNxRCxNQUFSLEdBQWlCQSxNQUFqQjs7QUFFQSxXQUFTcUMsVUFBVCxHQUFzQjtBQUNwQixXQUFPO0FBQUVoRixXQUFLLEVBQUVDLFNBQVQ7QUFBb0I0RSxVQUFJLEVBQUU7QUFBMUIsS0FBUDtBQUNEOztBQUVEcEQsU0FBTyxDQUFDaEMsU0FBUixHQUFvQjtBQUNsQjRELGVBQVcsRUFBRTVCLE9BREs7QUFHbEIrRSxTQUFLLEVBQUUsZUFBU1csYUFBVCxFQUF3QjtBQUM3QixXQUFLQyxJQUFMLEdBQVksQ0FBWjtBQUNBLFdBQUt4QyxJQUFMLEdBQVksQ0FBWixDQUY2QixDQUc3QjtBQUNBOztBQUNBLFdBQUtRLElBQUwsR0FBWSxLQUFLQyxLQUFMLEdBQWFwRixTQUF6QjtBQUNBLFdBQUs0RSxJQUFMLEdBQVksS0FBWjtBQUNBLFdBQUtJLFFBQUwsR0FBZ0IsSUFBaEI7QUFFQSxXQUFLakMsTUFBTCxHQUFjLE1BQWQ7QUFDQSxXQUFLbkIsR0FBTCxHQUFXNUIsU0FBWDtBQUVBLFdBQUttRyxVQUFMLENBQWdCckQsT0FBaEIsQ0FBd0J1RCxhQUF4Qjs7QUFFQSxVQUFJLENBQUNhLGFBQUwsRUFBb0I7QUFDbEIsYUFBSyxJQUFJN0QsSUFBVCxJQUFpQixJQUFqQixFQUF1QjtBQUNyQjtBQUNBLGNBQUlBLElBQUksQ0FBQytELE1BQUwsQ0FBWSxDQUFaLE1BQW1CLEdBQW5CLElBQ0EzSCxNQUFNLENBQUNxQyxJQUFQLENBQVksSUFBWixFQUFrQnVCLElBQWxCLENBREEsSUFFQSxDQUFDMkQsS0FBSyxDQUFDLENBQUMzRCxJQUFJLENBQUNnRSxLQUFMLENBQVcsQ0FBWCxDQUFGLENBRlYsRUFFNEI7QUFDMUIsaUJBQUtoRSxJQUFMLElBQWFyRCxTQUFiO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsS0EzQmlCO0FBNkJsQnNILFFBQUksRUFBRSxnQkFBVztBQUNmLFdBQUsxQyxJQUFMLEdBQVksSUFBWjtBQUVBLFVBQUkyQyxTQUFTLEdBQUcsS0FBS3BCLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBaEI7QUFDQSxVQUFJcUIsVUFBVSxHQUFHRCxTQUFTLENBQUNqQixVQUEzQjs7QUFDQSxVQUFJa0IsVUFBVSxDQUFDM0YsSUFBWCxLQUFvQixPQUF4QixFQUFpQztBQUMvQixjQUFNMkYsVUFBVSxDQUFDNUYsR0FBakI7QUFDRDs7QUFFRCxhQUFPLEtBQUs2RixJQUFaO0FBQ0QsS0F2Q2lCO0FBeUNsQnBDLHFCQUFpQixFQUFFLDJCQUFTcUMsU0FBVCxFQUFvQjtBQUNyQyxVQUFJLEtBQUs5QyxJQUFULEVBQWU7QUFDYixjQUFNOEMsU0FBTjtBQUNEOztBQUVELFVBQUluRyxPQUFPLEdBQUcsSUFBZDs7QUFDQSxlQUFTb0csTUFBVCxDQUFnQkMsR0FBaEIsRUFBcUJDLE1BQXJCLEVBQTZCO0FBQzNCN0QsY0FBTSxDQUFDbkMsSUFBUCxHQUFjLE9BQWQ7QUFDQW1DLGNBQU0sQ0FBQ3BDLEdBQVAsR0FBYThGLFNBQWI7QUFDQW5HLGVBQU8sQ0FBQ29ELElBQVIsR0FBZWlELEdBQWY7O0FBRUEsWUFBSUMsTUFBSixFQUFZO0FBQ1Y7QUFDQTtBQUNBdEcsaUJBQU8sQ0FBQ3dCLE1BQVIsR0FBaUIsTUFBakI7QUFDQXhCLGlCQUFPLENBQUNLLEdBQVIsR0FBYzVCLFNBQWQ7QUFDRDs7QUFFRCxlQUFPLENBQUMsQ0FBRTZILE1BQVY7QUFDRDs7QUFFRCxXQUFLLElBQUlaLENBQUMsR0FBRyxLQUFLZCxVQUFMLENBQWdCUyxNQUFoQixHQUF5QixDQUF0QyxFQUF5Q0ssQ0FBQyxJQUFJLENBQTlDLEVBQWlELEVBQUVBLENBQW5ELEVBQXNEO0FBQ3BELFlBQUluQixLQUFLLEdBQUcsS0FBS0ssVUFBTCxDQUFnQmMsQ0FBaEIsQ0FBWjtBQUNBLFlBQUlqRCxNQUFNLEdBQUc4QixLQUFLLENBQUNRLFVBQW5COztBQUVBLFlBQUlSLEtBQUssQ0FBQ0MsTUFBTixLQUFpQixNQUFyQixFQUE2QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxpQkFBTzRCLE1BQU0sQ0FBQyxLQUFELENBQWI7QUFDRDs7QUFFRCxZQUFJN0IsS0FBSyxDQUFDQyxNQUFOLElBQWdCLEtBQUtvQixJQUF6QixFQUErQjtBQUM3QixjQUFJVyxRQUFRLEdBQUdySSxNQUFNLENBQUNxQyxJQUFQLENBQVlnRSxLQUFaLEVBQW1CLFVBQW5CLENBQWY7QUFDQSxjQUFJaUMsVUFBVSxHQUFHdEksTUFBTSxDQUFDcUMsSUFBUCxDQUFZZ0UsS0FBWixFQUFtQixZQUFuQixDQUFqQjs7QUFFQSxjQUFJZ0MsUUFBUSxJQUFJQyxVQUFoQixFQUE0QjtBQUMxQixnQkFBSSxLQUFLWixJQUFMLEdBQVlyQixLQUFLLENBQUNFLFFBQXRCLEVBQWdDO0FBQzlCLHFCQUFPMkIsTUFBTSxDQUFDN0IsS0FBSyxDQUFDRSxRQUFQLEVBQWlCLElBQWpCLENBQWI7QUFDRCxhQUZELE1BRU8sSUFBSSxLQUFLbUIsSUFBTCxHQUFZckIsS0FBSyxDQUFDRyxVQUF0QixFQUFrQztBQUN2QyxxQkFBTzBCLE1BQU0sQ0FBQzdCLEtBQUssQ0FBQ0csVUFBUCxDQUFiO0FBQ0Q7QUFFRixXQVBELE1BT08sSUFBSTZCLFFBQUosRUFBYztBQUNuQixnQkFBSSxLQUFLWCxJQUFMLEdBQVlyQixLQUFLLENBQUNFLFFBQXRCLEVBQWdDO0FBQzlCLHFCQUFPMkIsTUFBTSxDQUFDN0IsS0FBSyxDQUFDRSxRQUFQLEVBQWlCLElBQWpCLENBQWI7QUFDRDtBQUVGLFdBTE0sTUFLQSxJQUFJK0IsVUFBSixFQUFnQjtBQUNyQixnQkFBSSxLQUFLWixJQUFMLEdBQVlyQixLQUFLLENBQUNHLFVBQXRCLEVBQWtDO0FBQ2hDLHFCQUFPMEIsTUFBTSxDQUFDN0IsS0FBSyxDQUFDRyxVQUFQLENBQWI7QUFDRDtBQUVGLFdBTE0sTUFLQTtBQUNMLGtCQUFNLElBQUluQixLQUFKLENBQVUsd0NBQVYsQ0FBTjtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEtBbkdpQjtBQXFHbEJRLFVBQU0sRUFBRSxnQkFBU3pELElBQVQsRUFBZUQsR0FBZixFQUFvQjtBQUMxQixXQUFLLElBQUlxRixDQUFDLEdBQUcsS0FBS2QsVUFBTCxDQUFnQlMsTUFBaEIsR0FBeUIsQ0FBdEMsRUFBeUNLLENBQUMsSUFBSSxDQUE5QyxFQUFpRCxFQUFFQSxDQUFuRCxFQUFzRDtBQUNwRCxZQUFJbkIsS0FBSyxHQUFHLEtBQUtLLFVBQUwsQ0FBZ0JjLENBQWhCLENBQVo7O0FBQ0EsWUFBSW5CLEtBQUssQ0FBQ0MsTUFBTixJQUFnQixLQUFLb0IsSUFBckIsSUFDQTFILE1BQU0sQ0FBQ3FDLElBQVAsQ0FBWWdFLEtBQVosRUFBbUIsWUFBbkIsQ0FEQSxJQUVBLEtBQUtxQixJQUFMLEdBQVlyQixLQUFLLENBQUNHLFVBRnRCLEVBRWtDO0FBQ2hDLGNBQUkrQixZQUFZLEdBQUdsQyxLQUFuQjtBQUNBO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJa0MsWUFBWSxLQUNYbkcsSUFBSSxLQUFLLE9BQVQsSUFDQUEsSUFBSSxLQUFLLFVBRkUsQ0FBWixJQUdBbUcsWUFBWSxDQUFDakMsTUFBYixJQUF1Qm5FLEdBSHZCLElBSUFBLEdBQUcsSUFBSW9HLFlBQVksQ0FBQy9CLFVBSnhCLEVBSW9DO0FBQ2xDO0FBQ0E7QUFDQStCLG9CQUFZLEdBQUcsSUFBZjtBQUNEOztBQUVELFVBQUloRSxNQUFNLEdBQUdnRSxZQUFZLEdBQUdBLFlBQVksQ0FBQzFCLFVBQWhCLEdBQTZCLEVBQXREO0FBQ0F0QyxZQUFNLENBQUNuQyxJQUFQLEdBQWNBLElBQWQ7QUFDQW1DLFlBQU0sQ0FBQ3BDLEdBQVAsR0FBYUEsR0FBYjs7QUFFQSxVQUFJb0csWUFBSixFQUFrQjtBQUNoQixhQUFLakYsTUFBTCxHQUFjLE1BQWQ7QUFDQSxhQUFLNEIsSUFBTCxHQUFZcUQsWUFBWSxDQUFDL0IsVUFBekI7QUFDQSxlQUFPOUQsZ0JBQVA7QUFDRDs7QUFFRCxhQUFPLEtBQUs4RixRQUFMLENBQWNqRSxNQUFkLENBQVA7QUFDRCxLQXJJaUI7QUF1SWxCaUUsWUFBUSxFQUFFLGtCQUFTakUsTUFBVCxFQUFpQmtDLFFBQWpCLEVBQTJCO0FBQ25DLFVBQUlsQyxNQUFNLENBQUNuQyxJQUFQLEtBQWdCLE9BQXBCLEVBQTZCO0FBQzNCLGNBQU1tQyxNQUFNLENBQUNwQyxHQUFiO0FBQ0Q7O0FBRUQsVUFBSW9DLE1BQU0sQ0FBQ25DLElBQVAsS0FBZ0IsT0FBaEIsSUFDQW1DLE1BQU0sQ0FBQ25DLElBQVAsS0FBZ0IsVUFEcEIsRUFDZ0M7QUFDOUIsYUFBSzhDLElBQUwsR0FBWVgsTUFBTSxDQUFDcEMsR0FBbkI7QUFDRCxPQUhELE1BR08sSUFBSW9DLE1BQU0sQ0FBQ25DLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDbkMsYUFBSzRGLElBQUwsR0FBWSxLQUFLN0YsR0FBTCxHQUFXb0MsTUFBTSxDQUFDcEMsR0FBOUI7QUFDQSxhQUFLbUIsTUFBTCxHQUFjLFFBQWQ7QUFDQSxhQUFLNEIsSUFBTCxHQUFZLEtBQVo7QUFDRCxPQUpNLE1BSUEsSUFBSVgsTUFBTSxDQUFDbkMsSUFBUCxLQUFnQixRQUFoQixJQUE0QnFFLFFBQWhDLEVBQTBDO0FBQy9DLGFBQUt2QixJQUFMLEdBQVl1QixRQUFaO0FBQ0Q7O0FBRUQsYUFBTy9ELGdCQUFQO0FBQ0QsS0F4SmlCO0FBMEpsQitGLFVBQU0sRUFBRSxnQkFBU2pDLFVBQVQsRUFBcUI7QUFDM0IsV0FBSyxJQUFJZ0IsQ0FBQyxHQUFHLEtBQUtkLFVBQUwsQ0FBZ0JTLE1BQWhCLEdBQXlCLENBQXRDLEVBQXlDSyxDQUFDLElBQUksQ0FBOUMsRUFBaUQsRUFBRUEsQ0FBbkQsRUFBc0Q7QUFDcEQsWUFBSW5CLEtBQUssR0FBRyxLQUFLSyxVQUFMLENBQWdCYyxDQUFoQixDQUFaOztBQUNBLFlBQUluQixLQUFLLENBQUNHLFVBQU4sS0FBcUJBLFVBQXpCLEVBQXFDO0FBQ25DLGVBQUtnQyxRQUFMLENBQWNuQyxLQUFLLENBQUNRLFVBQXBCLEVBQWdDUixLQUFLLENBQUNJLFFBQXRDO0FBQ0FHLHVCQUFhLENBQUNQLEtBQUQsQ0FBYjtBQUNBLGlCQUFPM0QsZ0JBQVA7QUFDRDtBQUNGO0FBQ0YsS0FuS2lCO0FBcUtsQixhQUFTLGdCQUFTNEQsTUFBVCxFQUFpQjtBQUN4QixXQUFLLElBQUlrQixDQUFDLEdBQUcsS0FBS2QsVUFBTCxDQUFnQlMsTUFBaEIsR0FBeUIsQ0FBdEMsRUFBeUNLLENBQUMsSUFBSSxDQUE5QyxFQUFpRCxFQUFFQSxDQUFuRCxFQUFzRDtBQUNwRCxZQUFJbkIsS0FBSyxHQUFHLEtBQUtLLFVBQUwsQ0FBZ0JjLENBQWhCLENBQVo7O0FBQ0EsWUFBSW5CLEtBQUssQ0FBQ0MsTUFBTixLQUFpQkEsTUFBckIsRUFBNkI7QUFDM0IsY0FBSS9CLE1BQU0sR0FBRzhCLEtBQUssQ0FBQ1EsVUFBbkI7O0FBQ0EsY0FBSXRDLE1BQU0sQ0FBQ25DLElBQVAsS0FBZ0IsT0FBcEIsRUFBNkI7QUFDM0IsZ0JBQUlzRyxNQUFNLEdBQUduRSxNQUFNLENBQUNwQyxHQUFwQjtBQUNBeUUseUJBQWEsQ0FBQ1AsS0FBRCxDQUFiO0FBQ0Q7O0FBQ0QsaUJBQU9xQyxNQUFQO0FBQ0Q7QUFDRixPQVh1QixDQWF4QjtBQUNBOzs7QUFDQSxZQUFNLElBQUlyRCxLQUFKLENBQVUsdUJBQVYsQ0FBTjtBQUNELEtBckxpQjtBQXVMbEJzRCxpQkFBYSxFQUFFLHVCQUFTdEIsUUFBVCxFQUFtQnBCLFVBQW5CLEVBQStCQyxPQUEvQixFQUF3QztBQUNyRCxXQUFLWCxRQUFMLEdBQWdCO0FBQ2Q1RSxnQkFBUSxFQUFFc0MsTUFBTSxDQUFDb0UsUUFBRCxDQURGO0FBRWRwQixrQkFBVSxFQUFFQSxVQUZFO0FBR2RDLGVBQU8sRUFBRUE7QUFISyxPQUFoQjs7QUFNQSxVQUFJLEtBQUs1QyxNQUFMLEtBQWdCLE1BQXBCLEVBQTRCO0FBQzFCO0FBQ0E7QUFDQSxhQUFLbkIsR0FBTCxHQUFXNUIsU0FBWDtBQUNEOztBQUVELGFBQU9tQyxnQkFBUDtBQUNEO0FBck1pQixHQUFwQixDQXpnQmdDLENBaXRCaEM7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBTzlDLE9BQVA7QUFFRCxDQXZ0QmMsRUF3dEJiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQU9nSixNQUFQLE9BQWtCLFFBQWxCLEdBQTZCQSxNQUFNLENBQUNoSixPQUFwQyxHQUE4QyxFQTV0QmpDLENBQWY7O0FBK3RCQSxJQUFJO0FBQ0ZpSixvQkFBa0IsR0FBR2xKLE9BQXJCO0FBQ0QsQ0FGRCxDQUVFLE9BQU9tSixvQkFBUCxFQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUksUUFBT0MsVUFBUCx5Q0FBT0EsVUFBUCxPQUFzQixRQUExQixFQUFvQztBQUNsQ0EsY0FBVSxDQUFDRixrQkFBWCxHQUFnQ2xKLE9BQWhDO0FBQ0QsR0FGRCxNQUVPO0FBQ0xxSixZQUFRLENBQUMsR0FBRCxFQUFNLHdCQUFOLENBQVIsQ0FBd0NySixPQUF4QztBQUNEO0FBQ0YsQzs7Ozs7Ozs7Ozs7O0FDeHZCRGlKLE1BQU0sQ0FBQ2hKLE9BQVAsR0FBaUIsVUFBU2dKLE1BQVQsRUFBaUI7QUFDakMsTUFBSSxDQUFDQSxNQUFNLENBQUNLLGVBQVosRUFBNkI7QUFDNUJMLFVBQU0sQ0FBQ00sU0FBUCxHQUFtQixZQUFXLENBQUUsQ0FBaEM7O0FBQ0FOLFVBQU0sQ0FBQ08sS0FBUCxHQUFlLEVBQWYsQ0FGNEIsQ0FHNUI7O0FBQ0EsUUFBSSxDQUFDUCxNQUFNLENBQUNRLFFBQVosRUFBc0JSLE1BQU0sQ0FBQ1EsUUFBUCxHQUFrQixFQUFsQjtBQUN0QnRKLFVBQU0sQ0FBQ0ksY0FBUCxDQUFzQjBJLE1BQXRCLEVBQThCLFFBQTlCLEVBQXdDO0FBQ3ZDM0gsZ0JBQVUsRUFBRSxJQUQyQjtBQUV2Q29JLFNBQUcsRUFBRSxlQUFXO0FBQ2YsZUFBT1QsTUFBTSxDQUFDVSxDQUFkO0FBQ0E7QUFKc0MsS0FBeEM7QUFNQXhKLFVBQU0sQ0FBQ0ksY0FBUCxDQUFzQjBJLE1BQXRCLEVBQThCLElBQTlCLEVBQW9DO0FBQ25DM0gsZ0JBQVUsRUFBRSxJQUR1QjtBQUVuQ29JLFNBQUcsRUFBRSxlQUFXO0FBQ2YsZUFBT1QsTUFBTSxDQUFDcEIsQ0FBZDtBQUNBO0FBSmtDLEtBQXBDO0FBTUFvQixVQUFNLENBQUNLLGVBQVAsR0FBeUIsQ0FBekI7QUFDQTs7QUFDRCxTQUFPTCxNQUFQO0FBQ0EsQ0FyQkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUVBVyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFXO0FBQ3ZELE1BQU1DLFVBQVUsR0FBRyxFQUFuQjtBQUNBLE1BQU1DLG9CQUFvQixHQUFHSCxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsdUJBQXZCLENBQTdCO0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUdMLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1Qix5QkFBdkIsQ0FBL0I7QUFDQSxNQUFNRSxZQUFZLEdBQUdOLFFBQVEsQ0FBQ08sY0FBVCxDQUF3QixtQkFBeEIsQ0FBckI7QUFDQSxNQUFJQyxlQUFlLEdBQUcsQ0FBdEI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsRUFBdEIsQ0FOdUQsQ0FNN0I7O0FBQzFCLE1BQUlDLGlCQUFpQixHQUFHLEtBQXhCOztBQUVBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBU0MsS0FBVCxFQUFnQjtBQUNwQyxRQUFJRixpQkFBSixFQUF1QjtBQUNyQkcsYUFBTyxDQUFDQyxHQUFSLENBQVksMENBQVo7QUFDQTtBQUNEOztBQUVELFFBQUlGLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxLQUFiLENBQW1CcEQsTUFBbkIsR0FBNEIsQ0FBaEMsRUFBbUM7QUFDakM7QUFDQXNDLGdCQUFVLENBQUN0QyxNQUFYLEdBQW9CLENBQXBCO0FBQ0E0QyxxQkFBZSxHQUFHLENBQWxCO0FBQ0FFLHVCQUFpQixHQUFHLElBQXBCLENBSmlDLENBTWpDOztBQUNBLFVBQUlPLFdBQVcsR0FBR0MsVUFBVSxDQUFDbEIsUUFBUSxDQUFDTyxjQUFULENBQXdCLFFBQXhCLEVBQWtDeEosS0FBbkMsQ0FBNUIsQ0FQaUMsQ0FPc0M7O0FBQ3ZFLFVBQU1vSyxPQUFNLEdBQUduQixRQUFRLENBQUNPLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjs7QUFDQSxVQUFNYSxtQkFBa0IsR0FBR3BCLFFBQVEsQ0FBQ08sY0FBVCxDQUF3QixhQUF4QixDQUEzQjs7QUFDQVksYUFBTSxDQUFDbEIsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBVztBQUMxQ2dCLG1CQUFXLEdBQUdDLFVBQVUsQ0FBQyxLQUFLbkssS0FBTixDQUF4QjtBQUNBcUssMkJBQWtCLENBQUNDLFdBQW5CLEdBQWlDSixXQUFqQztBQUNELE9BSEQ7O0FBTUEsV0FBSyxJQUFJaEQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzJDLEtBQUssQ0FBQ0csTUFBTixDQUFhQyxLQUFiLENBQW1CcEQsTUFBdkMsRUFBK0NLLENBQUMsRUFBaEQsRUFBb0Q7QUFDbEQsWUFBSXFELElBQUksR0FBR1YsS0FBSyxDQUFDRyxNQUFOLENBQWFDLEtBQWIsQ0FBbUIvQyxDQUFuQixDQUFYLENBRGtELENBR2xEOztBQUNBLFlBQUlzRCxnQkFBZ0IsR0FBR3ZCLFFBQVEsQ0FBQ3dCLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBdkI7QUFDQSxZQUFJQyxjQUFjLEdBQUd6QixRQUFRLENBQUN3QixhQUFULENBQXVCLEtBQXZCLENBQXJCO0FBQ0FDLHNCQUFjLENBQUNDLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLFlBQTdCO0FBQ0EsWUFBSUMsaUJBQWlCLEdBQUc1QixRQUFRLENBQUN3QixhQUFULENBQXVCLE1BQXZCLENBQXhCLENBUGtELENBU2xEOztBQUNBLFlBQUlLLGFBQWEsR0FBRyxJQUFJQyxLQUFKLEVBQXBCO0FBQ0FELHFCQUFhLENBQUNFLEdBQWQsR0FBb0JDLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQlgsSUFBcEIsQ0FBcEIsQ0FYa0QsQ0FhbEQ7O0FBQ0FiLHFCQUFhLENBQUN4QyxDQUFELENBQWIsR0FBbUI7QUFDakJzRCwwQkFBZ0IsRUFBaEJBLGdCQURpQjtBQUVqQkUsd0JBQWMsRUFBZEEsY0FGaUI7QUFHakJHLDJCQUFpQixFQUFqQkEsaUJBSGlCO0FBSWpCQyx1QkFBYSxFQUFiQSxhQUppQjtBQUlGO0FBQ2ZLLDBCQUFnQixFQUFFRixHQUFHLENBQUNDLGVBQUosQ0FBb0JYLElBQXBCLENBTEQ7QUFNakJhLHNCQUFZLEVBQUUsSUFORztBQU1HO0FBQ3BCQyxvQkFBVSxFQUFFbkU7QUFQSyxTQUFuQixDQWRrRCxDQXdCbEQ7O0FBQ0FvRSxvQkFBWSxDQUFDekIsS0FBRCxFQUFRVSxJQUFSLEVBQWNDLGdCQUFkLEVBQWdDRSxjQUFoQyxFQUFnREcsaUJBQWhELEVBQW1FWCxXQUFuRSxFQUFnRmpCLFFBQVEsQ0FBQ08sY0FBVCxDQUF3QixZQUF4QixDQUFoRixFQUF1SHRDLENBQXZILENBQVo7QUFDRDtBQUNGO0FBQ0YsR0FsREQsQ0FUdUQsQ0E2RHZEOzs7QUE3RHVELFdBOER4Q29FLFlBOUR3QztBQUFBO0FBQUEsSUE0SXZEOzs7QUE1SXVEO0FBQUE7QUFBQTtBQUFBLDRCQThEdkQsaUJBQTRCekIsS0FBNUIsRUFBbUNVLElBQW5DLEVBQXlDQyxnQkFBekMsRUFBMkRFLGNBQTNELEVBQTJFRyxpQkFBM0UsRUFBOEZYLFdBQTlGLEVBQTJHcUIsS0FBM0csRUFBa0hGLFVBQWxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUUcscUJBRFIsR0FDb0JDLFdBQVcsQ0FBQ0MsR0FBWixFQURwQjtBQUVFNUIsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDUSxJQUFsQztBQUNJb0Isa0JBSE4sR0FHZTFDLFFBQVEsQ0FBQ3dCLGFBQVQsQ0FBdUIsUUFBdkIsQ0FIZjtBQUlNbUIsZUFKTixHQUlZRCxNQUFNLENBQUNFLFVBQVAsQ0FBa0IsSUFBbEIsQ0FKWjtBQU1NZix5QkFOTixHQU1zQixJQUFJQyxLQUFKLEVBTnRCO0FBT0VELHlCQUFhLENBQUNFLEdBQWQsR0FBb0JDLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQlgsSUFBcEIsQ0FBcEI7O0FBRUFPLHlCQUFhLENBQUNnQixNQUFkLEdBQXVCLFlBQVc7QUFDaENILG9CQUFNLENBQUNJLEtBQVAsR0FBZWpCLGFBQWEsQ0FBQ2lCLEtBQTdCO0FBQ0FKLG9CQUFNLENBQUNLLE1BQVAsR0FBZ0JsQixhQUFhLENBQUNrQixNQUE5QjtBQUNBSixpQkFBRyxDQUFDSyxTQUFKLENBQWNuQixhQUFkLEVBQTZCLENBQTdCLEVBQWdDLENBQWhDLEVBSGdDLENBS2hDOztBQUNBYSxvQkFBTSxDQUFDTyxNQUFQLENBQ0UsVUFBU0MsSUFBVCxFQUFlO0FBQ2I7QUFDQSxvQkFBTUMsVUFBVSxHQUFHRCxJQUFJLENBQUNFLElBQUwsR0FBWSxJQUEvQjtBQUVBLG9CQUFNQyxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFmOztBQUNBRCxzQkFBTSxDQUFDRSxTQUFQLEdBQW1CLFlBQVc7QUFDNUIsc0JBQU1DLFNBQVMsR0FBR0gsTUFBTSxDQUFDcEksTUFBekIsQ0FENEIsQ0FHNUI7QUFDQTtBQUNBOztBQUNBd0csZ0NBQWMsQ0FBQ2dDLE9BQWYsQ0FBdUJDLEtBQXZCLEdBQStCdEIsVUFBL0I7QUFJQTNCLCtCQUFhLENBQUMyQixVQUFELENBQWIsQ0FBMEJQLGFBQTFCLEdBQTBDQSxhQUExQztBQUNBcEIsK0JBQWEsQ0FBQzJCLFVBQUQsQ0FBYixDQUEwQkQsWUFBMUIsR0FBeUNxQixTQUF6QyxDQVg0QixDQVd3QjtBQUVwRDs7QUFDQWpDLGtDQUFnQixDQUFDb0MsU0FBakIsR0FBNkIseUJBQXlCckMsSUFBSSxDQUFDOEIsSUFBOUIsR0FBcUMsUUFBbEU7QUFDQXhCLG1DQUFpQixDQUFDK0IsU0FBbEIsR0FBOEIsMEJBQTBCUixVQUFVLENBQUNTLE9BQVgsQ0FBbUIsQ0FBbkIsQ0FBMUIsR0FBa0QsS0FBaEY7QUFDQW5DLGdDQUFjLENBQUNNLEdBQWYsR0FBcUJ5QixTQUFyQixDQWhCNEIsQ0FrQjVCOztBQUNBLHNCQUFNSyxnQkFBZ0IsR0FBR3ZDLElBQUksQ0FBQ2pILElBQTlCO0FBQ0Esc0JBQU15SixZQUFZLEdBQUdDLGVBQWUsQ0FBQ0YsZ0JBQUQsQ0FBcEM7QUFDQXJELGlDQUFlLEdBckJhLENBcUJUO0FBRW5COztBQUNBTiw0QkFBVSxDQUFDa0MsVUFBRCxDQUFWLEdBQXlCO0FBQUUvSCx3QkFBSSxFQUFFd0osZ0JBQVI7QUFBMEJHLHdCQUFJLEVBQUVSLFNBQWhDO0FBQTJDUyw0QkFBUSxFQUFFSDtBQUFyRCxtQkFBekIsQ0F4QjRCLENBMEI1Qjs7QUFDQSxzQkFBSXRELGVBQWUsS0FBS0ksS0FBSyxDQUFDRyxNQUFOLENBQWFDLEtBQWIsQ0FBbUJwRCxNQUEzQyxFQUFtRDtBQUNqRHNHLG9DQUFnQjtBQUNoQnJELDJCQUFPLENBQUNDLEdBQVIsQ0FBWW9ELGdCQUFnQixFQUE1Qjs7QUFDQSx3QkFBSXRELEtBQUssQ0FBQ0csTUFBTixDQUFhQyxLQUFiLENBQW1CcEQsTUFBbkIsS0FBOEIsQ0FBbEMsRUFBcUM7QUFDbkN1QywwQ0FBb0IsQ0FBQ2dFLEtBQXJCLENBQTJCQyxPQUEzQixHQUFxQyxPQUFyQztBQUNBL0QsNENBQXNCLENBQUM4RCxLQUF2QixDQUE2QkMsT0FBN0IsR0FBdUMsTUFBdkM7QUFDRCxxQkFIRCxNQUdPO0FBQ0xqRSwwQ0FBb0IsQ0FBQ2dFLEtBQXJCLENBQTJCQyxPQUEzQixHQUFxQyxNQUFyQztBQUNBL0QsNENBQXNCLENBQUM4RCxLQUF2QixDQUE2QkMsT0FBN0IsR0FBdUMsT0FBdkM7QUFDSDtBQUNGOztBQUNELHNCQUFNQyxPQUFPLEdBQUc3QixXQUFXLENBQUNDLEdBQVosRUFBaEI7QUFDQSxzQkFBTTZCLGNBQWMsR0FBR0QsT0FBTyxHQUFHOUIsU0FBakM7QUFDQTFCLHlCQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQ3dELGNBQWhDO0FBQ0E1RCxtQ0FBaUIsR0FBRyxLQUFwQjtBQUNELGlCQTFDQzs7QUEyQ0YyQyxzQkFBTSxDQUFDa0IsYUFBUCxDQUFxQnJCLElBQXJCO0FBQ0QsZUFsREQsRUFrREcsWUFsREgsRUFrRGlCakMsV0FsRGpCO0FBbURELGFBekREOztBQTBETWlCLDRCQW5FUixHQW1FMkJGLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQlgsSUFBcEIsQ0FuRTNCO0FBQUE7QUFBQSxtQkFvRVEsSUFBSTdGLE9BQUosQ0FBWSxVQUFDWCxPQUFELEVBQWE7QUFDN0Isa0JBQU0wSixRQUFRLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0FBQ2pDLG9CQUFJdkMsZ0JBQUosRUFBc0I7QUFDcEJ3QywrQkFBYSxDQUFDRixRQUFELENBQWI7QUFDQTFKLHlCQUFPO0FBQ1I7QUFDRixlQUwyQixFQUt6QixFQUx5QixDQUE1QjtBQU1ELGFBUEssQ0FwRVI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBOUR1RDtBQUFBO0FBQUE7O0FBNkl2RCxNQUFNcUcsTUFBTSxHQUFHbkIsUUFBUSxDQUFDTyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQSxNQUFNYSxrQkFBa0IsR0FBR3BCLFFBQVEsQ0FBQ08sY0FBVCxDQUF3QixhQUF4QixDQUEzQjtBQUNBWSxRQUFNLENBQUNsQixnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFXO0FBQzFDbUIsc0JBQWtCLENBQUNDLFdBQW5CLEdBQWlDLEtBQUt0SyxLQUF0QztBQUNELEdBRkQ7O0FBSUEsV0FBU2dOLGVBQVQsQ0FBeUJGLGdCQUF6QixFQUEyQztBQUN6QyxRQUFNYyxjQUFjLEdBQUdkLGdCQUFnQixDQUFDZSxXQUFqQixDQUE2QixHQUE3QixDQUF2QjtBQUNBLFFBQU1YLFFBQVEsR0FBR0osZ0JBQWdCLENBQUNnQixTQUFqQixDQUEyQixDQUEzQixFQUE4QkYsY0FBOUIsQ0FBakI7QUFDQSxXQUFPVixRQUFRLEdBQUcsT0FBbEI7QUFDRCxHQXZKc0QsQ0EwSnZEOzs7QUFDQSxXQUFTQyxnQkFBVCxHQUE0QjtBQUUxQmhFLGNBQVUsQ0FBQzRFLElBQVgsQ0FBZ0IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDeEIsYUFBT0QsQ0FBQyxDQUFDMUssSUFBRixDQUFPNEssYUFBUCxDQUFxQkQsQ0FBQyxDQUFDM0ssSUFBdkIsQ0FBUDtBQUNELEtBRkQsRUFGMEIsQ0FNMUI7O0FBQ0FvRyxpQkFBYSxDQUFDcUUsSUFBZCxDQUFtQixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUMzQixhQUFPRCxDQUFDLENBQUM3QyxnQkFBRixDQUFtQitDLGFBQW5CLENBQWlDRCxDQUFDLENBQUM5QyxnQkFBbkMsQ0FBUDtBQUNELEtBRkQsRUFQMEIsQ0FXMUI7O0FBQ0EsUUFBTWdELG1CQUFtQixHQUFHbEYsUUFBUSxDQUFDSSxhQUFULENBQXVCLGFBQXZCLENBQTVCO0FBQ0E4RSx1QkFBbUIsQ0FBQ0MsU0FBcEIsR0FBZ0MsRUFBaEM7QUFDQXRFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFkMEIsQ0FnQjFCOztBQWhCMEIsaUNBaUJrQjtBQUMxQywwQkFBaUNaLFVBQVUsQ0FBQ2pDLENBQUQsQ0FBM0M7QUFBQSxVQUFRNUQsSUFBUixpQkFBUUEsSUFBUjtBQUFBLFVBQWMySixJQUFkLGlCQUFjQSxJQUFkO0FBQUEsVUFBb0JDLFFBQXBCLGlCQUFvQkEsUUFBcEI7QUFDQSxVQUFNbUIsWUFBWSxHQUFHM0UsYUFBYSxDQUFDeEMsQ0FBRCxDQUFsQztBQUNBLFVBQVFzRCxnQkFBUixHQUFnRTZELFlBQWhFLENBQVE3RCxnQkFBUjtBQUFBLFVBQTBCRSxjQUExQixHQUFnRTJELFlBQWhFLENBQTBCM0QsY0FBMUI7QUFBQSxVQUEwQ0csaUJBQTFDLEdBQWdFd0QsWUFBaEUsQ0FBMEN4RCxpQkFBMUM7QUFFQSxVQUFNeUQsa0JBQWtCLEdBQUc3QyxXQUFXLENBQUNDLEdBQVosRUFBM0I7QUFDQTVCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBQWdDbUQsUUFBaEMsRUFOMEMsQ0FRMUM7O0FBQ0EsVUFBTXFCLFdBQVcsR0FBR3RGLFFBQVEsQ0FBQ3dCLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBcEI7QUFDQThELGlCQUFXLENBQUM1RCxTQUFaLENBQXNCQyxHQUF0QixDQUEwQixjQUExQixFQVYwQyxDQVkxQzs7QUFDQSxVQUFNNEQsZUFBZSxHQUFHdkYsUUFBUSxDQUFDd0IsYUFBVCxDQUF1QixHQUF2QixDQUF4QjtBQUNBLFVBQU1nRSxZQUFZLEdBQUd4RixRQUFRLENBQUN5RixjQUFULENBQXdCLGVBQWUsR0FBdkMsQ0FBckIsQ0FkMEMsQ0FlMUM7O0FBQ0EsVUFBTUMsWUFBWSxHQUFHMUYsUUFBUSxDQUFDeUYsY0FBVCxDQUF3QnhCLFFBQXhCLENBQXJCO0FBRUFzQixxQkFBZSxDQUFDSSxXQUFoQixDQUE0QkgsWUFBNUIsRUFsQjBDLENBbUIxQzs7QUFDQUQscUJBQWUsQ0FBQ0ksV0FBaEIsQ0FBNEJELFlBQTVCO0FBRUFILHFCQUFlLENBQUM3RCxTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEIsa0JBQTlCO0FBQ0EyRCxpQkFBVyxDQUFDSyxXQUFaLENBQXdCSixlQUF4QjtBQUVBLFVBQU1LLGNBQWMsR0FBRzVGLFFBQVEsQ0FBQ3dCLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBdkI7QUFDQW9FLG9CQUFjLENBQUNsRSxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixrQkFBN0IsRUExQjBDLENBNEIxQzs7QUFDQUYsb0JBQWMsQ0FBQ00sR0FBZixHQUFxQmlDLElBQXJCO0FBQ0F2QyxvQkFBYyxDQUFDb0UsR0FBZixHQUFxQnhMLElBQXJCLENBOUIwQyxDQThCZjs7QUFDM0J1TCxvQkFBYyxDQUFDRCxXQUFmLENBQTJCbEUsY0FBM0IsRUEvQjBDLENBa0MxQzs7QUFDQSxVQUFNcUUsZ0JBQWdCLEdBQUc5RixRQUFRLENBQUN3QixhQUFULENBQXVCLEdBQXZCLENBQXpCO0FBQ0FzRSxzQkFBZ0IsQ0FBQ25DLFNBQWpCLEdBQTZCcEMsZ0JBQWdCLENBQUNvQyxTQUE5QztBQUNBbUMsc0JBQWdCLENBQUNwRSxTQUFqQixDQUEyQkMsR0FBM0IsQ0FBK0IsY0FBL0I7QUFDQWlFLG9CQUFjLENBQUNELFdBQWYsQ0FBMkJHLGdCQUEzQjtBQUVBLFVBQU1DLGlCQUFpQixHQUFHL0YsUUFBUSxDQUFDd0IsYUFBVCxDQUF1QixHQUF2QixDQUExQjtBQUNBdUUsdUJBQWlCLENBQUNwQyxTQUFsQixHQUE4Qi9CLGlCQUFpQixDQUFDK0IsU0FBaEQ7QUFDQW9DLHVCQUFpQixDQUFDckUsU0FBbEIsQ0FBNEJDLEdBQTVCLENBQWdDLGNBQWhDO0FBQ0FpRSxvQkFBYyxDQUFDRCxXQUFmLENBQTJCSSxpQkFBM0IsRUEzQzBDLENBOENoRDtBQUNBOztBQUNBLFVBQU16RCxLQUFLLEdBQUd0QyxRQUFRLENBQUNPLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBZDtBQUNBLFVBQU15RixnQkFBZ0IsR0FBR2hHLFFBQVEsQ0FBQ3dCLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBekI7QUFDQXdFLHNCQUFnQixDQUFDckMsU0FBakIsR0FBNkIsU0FBN0I7QUFDQXFDLHNCQUFnQixDQUFDdEUsU0FBakIsQ0FBMkJDLEdBQTNCLENBQStCLGdCQUEvQjtBQUNBcUUsc0JBQWdCLENBQUN2QyxPQUFqQixDQUF5QkMsS0FBekIsR0FBaUN6RixDQUFqQyxDQXBEZ0QsQ0FvRFo7O0FBQ3BDK0gsc0JBQWdCLENBQUMvRixnQkFBakIsQ0FBa0MsT0FBbEMsRUFBMkMsVUFBQ2dHLENBQUQsRUFBTztBQUNoRCxZQUFNQyxlQUFlLEdBQUdsRyxRQUFRLENBQUNPLGNBQVQsQ0FBd0IsaUJBQXhCLENBQXhCO0FBQ0EsWUFBTTRGLFdBQVcsR0FBR0QsZUFBZSxDQUFDOUYsYUFBaEIsQ0FBOEIsZUFBOUIsQ0FBcEI7QUFDQSxZQUFNZ0csVUFBVSxHQUFHRixlQUFlLENBQUM5RixhQUFoQixDQUE4QixjQUE5QixDQUFuQjs7QUFFQSxZQUFJK0YsV0FBVyxJQUFJQyxVQUFuQixFQUErQjtBQUM3QkYseUJBQWUsQ0FBQ0csV0FBaEIsQ0FBNEJGLFdBQTVCO0FBQ0FELHlCQUFlLENBQUNHLFdBQWhCLENBQTRCRCxVQUE1QjtBQUNELFNBSEQsTUFHTztBQUNMO0FBQ0EsY0FBTUUsU0FBUyxHQUFHTCxDQUFDLENBQUNsRixNQUFGLENBQVMwQyxPQUFULENBQWlCQyxLQUFuQyxDQUZLLENBRXFDOztBQUUxQyxjQUFNNkMsb0JBQW9CLEdBQUd2RyxRQUFRLENBQUN3QixhQUFULENBQXVCLEtBQXZCLENBQTdCO0FBQ0ErRSw4QkFBb0IsQ0FBQzdFLFNBQXJCLENBQStCQyxHQUEvQixDQUFtQyxjQUFuQztBQUNBNEUsOEJBQW9CLENBQUNWLEdBQXJCLEdBQTJCLGdCQUEzQjtBQUNBVSw4QkFBb0IsQ0FBQ3hFLEdBQXJCLEdBQTJCdEIsYUFBYSxDQUFDNkYsU0FBRCxDQUFiLENBQXlCcEUsZ0JBQXBEO0FBQ0FnRSx5QkFBZSxDQUFDUCxXQUFoQixDQUE0Qlksb0JBQTVCO0FBRUEsY0FBTUMscUJBQXFCLEdBQUd4RyxRQUFRLENBQUN3QixhQUFULENBQXVCLEtBQXZCLENBQTlCO0FBQ0FnRiwrQkFBcUIsQ0FBQzlFLFNBQXRCLENBQWdDQyxHQUFoQyxDQUFvQyxhQUFwQztBQUNBNkUsK0JBQXFCLENBQUNYLEdBQXRCLEdBQTRCLGlCQUE1QjtBQUNBVywrQkFBcUIsQ0FBQ3pFLEdBQXRCLEdBQTRCN0IsVUFBVSxDQUFDb0csU0FBRCxDQUFWLENBQXNCdEMsSUFBbEQ7QUFDQWtDLHlCQUFlLENBQUNQLFdBQWhCLENBQTRCYSxxQkFBNUI7QUFFQWxFLGVBQUssQ0FBQ1osU0FBTixDQUFnQitFLE1BQWhCLENBQXVCLE1BQXZCO0FBQ0FuRSxlQUFLLENBQUNaLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLE1BQXBCO0FBQ0Q7QUFDRixPQTNCRDtBQTRCQWlFLG9CQUFjLENBQUNELFdBQWYsQ0FBMkJLLGdCQUEzQixFQWpGZ0QsQ0FrRmhEO0FBR007O0FBQ0EsVUFBTVUsY0FBYyxHQUFHMUcsUUFBUSxDQUFDd0IsYUFBVCxDQUF1QixRQUF2QixDQUF2QjtBQUNBa0Ysb0JBQWMsQ0FBQy9DLFNBQWYsR0FBMkIsVUFBM0I7QUFDQStDLG9CQUFjLENBQUNoRixTQUFmLENBQXlCQyxHQUF6QixDQUE2QixpQkFBN0I7QUFDQStFLG9CQUFjLENBQUN6RyxnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxZQUFZO0FBQ25EMEcseUJBQWlCLENBQUMzQyxJQUFELEVBQU8zSixJQUFQLENBQWpCO0FBQ0QsT0FGRDtBQUdBdUwsb0JBQWMsQ0FBQ0QsV0FBZixDQUEyQmUsY0FBM0IsRUE1RjBDLENBOEYxQzs7QUFDQXhCLHlCQUFtQixDQUFDUyxXQUFwQixDQUFnQ0wsV0FBaEM7QUFDQUoseUJBQW1CLENBQUNTLFdBQXBCLENBQWdDQyxjQUFoQztBQUVBLFVBQU1nQixnQkFBZ0IsR0FBR3BFLFdBQVcsQ0FBQ0MsR0FBWixFQUF6QjtBQUNBLFVBQU1vRSx1QkFBdUIsR0FBR0QsZ0JBQWdCLEdBQUd2QixrQkFBbkQ7QUFDQXhFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCK0YsdUJBQS9CO0FBQ0QsS0F0SHlCOztBQWlCMUIsU0FBSyxJQUFJNUksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2lDLFVBQVUsQ0FBQ3RDLE1BQS9CLEVBQXVDSyxDQUFDLEVBQXhDO0FBQUE7QUFBQSxLQWpCMEIsQ0F3SDFCOzs7QUFDQSxRQUFNNkksYUFBYSxHQUFHOUcsUUFBUSxDQUFDSSxhQUFULENBQXVCLGlCQUF2QixDQUF0QjtBQUNBMEcsaUJBQWEsQ0FBQzNDLEtBQWQsQ0FBb0JDLE9BQXBCLEdBQThCLE1BQTlCO0FBRUQ7O0FBdlJzRCxXQTJSeEN1QyxpQkEzUndDO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkEyUnZELGtCQUFpQ0ksT0FBakMsRUFBMEM5QyxRQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUUyQitDLEtBQUssQ0FBQ0QsT0FBRCxDQUZoQzs7QUFBQTtBQUVVRSxvQkFGVjtBQUFBO0FBQUEsbUJBR3VCQSxRQUFRLENBQUUvRCxJQUFWLEVBSHZCOztBQUFBO0FBR1VBLGdCQUhWO0FBSVVnRSxlQUpWLEdBSWdCbEYsR0FBRyxDQUFDQyxlQUFKLENBQW9CaUIsSUFBcEIsQ0FKaEI7QUFNVWlFLHdCQU5WLEdBTXlCbkgsUUFBUSxDQUFDd0IsYUFBVCxDQUF1QixHQUF2QixDQU56QjtBQU9JMkYsd0JBQVksQ0FBQ0MsSUFBYixHQUFvQkYsR0FBcEI7QUFDQUMsd0JBQVksQ0FBQ0UsUUFBYixHQUF3QnBELFFBQVEsQ0FBQ3FELE9BQVQsQ0FBaUIsV0FBakIsRUFBOEIsRUFBOUIsSUFBb0MsT0FBNUQsQ0FSSixDQVF5RTs7QUFDckVILHdCQUFZLENBQUNJLEtBQWI7QUFUSjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVdJMUcsbUJBQU8sQ0FBQ3pGLEtBQVIsQ0FBYyx5QkFBZDs7QUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0EzUnVEO0FBQUE7QUFBQTs7QUEwU3ZELE1BQU1vTSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQVc7QUFDaEMsUUFBSXRILFVBQVUsQ0FBQ3RDLE1BQVgsR0FBb0IsQ0FBeEIsRUFBMkI7QUFDekIsVUFBSXVDLG9CQUFvQixDQUFDZ0UsS0FBckIsQ0FBMkJDLE9BQTNCLEtBQXVDLE9BQTNDLEVBQW9EO0FBQ2xEO0FBQ0EsNEJBQXVCbEUsVUFBVSxDQUFDLENBQUQsQ0FBakM7QUFBQSxZQUFRN0YsSUFBUixpQkFBUUEsSUFBUjtBQUFBLFlBQWMySixJQUFkLGlCQUFjQSxJQUFkO0FBQ0EsWUFBTXlELFFBQVEsR0FBRzFELGVBQWUsQ0FBQzFKLElBQUQsQ0FBaEM7QUFDQSxZQUFNOE0sWUFBWSxHQUFHbkgsUUFBUSxDQUFDd0IsYUFBVCxDQUF1QixHQUF2QixDQUFyQjtBQUNBMkYsb0JBQVksQ0FBQ0MsSUFBYixHQUFvQnBELElBQXBCO0FBQ0FtRCxvQkFBWSxDQUFDRSxRQUFiLEdBQXdCSSxRQUF4QjtBQUNBTixvQkFBWSxDQUFDSSxLQUFiO0FBQ0QsT0FSRCxNQVFPO0FBQ0wsWUFBTUcsR0FBRyxHQUFHLElBQUlDLEtBQUosRUFBWjs7QUFFQSxhQUFLLElBQUkxSixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHaUMsVUFBVSxDQUFDdEMsTUFBL0IsRUFBdUNLLENBQUMsRUFBeEMsRUFBNEM7QUFDMUMsK0JBQXVCaUMsVUFBVSxDQUFDakMsQ0FBRCxDQUFqQztBQUFBLGNBQVE1RCxLQUFSLGtCQUFRQSxJQUFSO0FBQUEsY0FBYzJKLEtBQWQsa0JBQWNBLElBQWQ7O0FBQ0EsY0FBTXlELFNBQVEsR0FBRzFELGVBQWUsQ0FBQzFKLEtBQUQsQ0FBaEMsQ0FGMEMsQ0FFRjs7O0FBRXhDcU4sYUFBRyxDQUFDcEcsSUFBSixDQUFTbUcsU0FBVCxFQUFtQnpELEtBQUksQ0FBQzRELEtBQUwsQ0FBVyxHQUFYLEVBQWdCLENBQWhCLENBQW5CLEVBQXVDO0FBQUVDLGtCQUFNLEVBQUU7QUFBVixXQUF2QztBQUNEOztBQUVESCxXQUFHLENBQUNJLGFBQUosQ0FBa0I7QUFBRWpQLGNBQUksRUFBRTtBQUFSLFNBQWxCLEVBQW9DcUMsSUFBcEMsQ0FBeUMsVUFBUzZNLE9BQVQsRUFBa0I7QUFDekQsY0FBTVosWUFBWSxHQUFHbkgsUUFBUSxDQUFDd0IsYUFBVCxDQUF1QixHQUF2QixDQUFyQjtBQUNBMkYsc0JBQVksQ0FBQ0MsSUFBYixHQUFvQnBGLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQjhGLE9BQXBCLENBQXBCO0FBQ0FaLHNCQUFZLENBQUNFLFFBQWIsR0FBd0IsaUJBQXhCO0FBQ0FGLHNCQUFZLENBQUNJLEtBQWI7QUFDRCxTQUxEO0FBTUQ7QUFDRjtBQUNGLEdBNUJEOztBQThCQWpILGNBQVksQ0FBQ0wsZ0JBQWIsQ0FBOEIsUUFBOUIsRUFBd0NVLGFBQXhDO0FBQ0FSLHNCQUFvQixDQUFDRixnQkFBckIsQ0FBc0MsT0FBdEMsRUFBK0N1SCxjQUEvQztBQUNBbkgsd0JBQXNCLENBQUNKLGdCQUF2QixDQUF3QyxPQUF4QyxFQUFpRHVILGNBQWpEO0FBQ0QsQ0EzVUQsRTs7Ozs7Ozs7Ozs7QUNGQSxJQUFNUSxTQUFTLEdBQUdoSSxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsa0JBQXZCLENBQWxCO0FBQ0EsSUFBTTZILFdBQVcsR0FBR2pJLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixlQUF2QixDQUFwQjtBQUNBLElBQU04SCxnQkFBZ0IsR0FBR2xJLFFBQVEsQ0FBQ0ksYUFBVCxDQUF3QixvQkFBeEIsQ0FBekI7QUFFQThILGdCQUFnQixDQUFDakksZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTJDLFVBQUNnRyxDQUFELEVBQU87QUFDakQrQixXQUFTLENBQUM3RCxLQUFWLENBQWdCZ0UsV0FBaEIsQ0FBNEIsWUFBNUIsWUFBNkNsQyxDQUFDLENBQUNsRixNQUFGLENBQVNoSyxLQUF0RDtBQUNBLENBRkQ7QUFJQWtSLFdBQVcsQ0FBQ2hJLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFlBQU07QUFDM0MsTUFBTW1JLFNBQVMsR0FBR3BJLFFBQVEsQ0FBQ08sY0FBVCxDQUF3QixZQUF4QixDQUFsQjtBQUNBNkgsV0FBUyxDQUFDMUcsU0FBVixDQUFvQitFLE1BQXBCLENBQTJCLE1BQTNCO0FBQ0EyQixXQUFTLENBQUMxRyxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixNQUF4QjtBQUNBLENBSkQsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5IHx8IGZ1bmN0aW9uIChvYmosIGtleSwgZGVzYykgeyBvYmpba2V5XSA9IGRlc2MudmFsdWU7IH07XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGRlZmluZVByb3BlcnR5KGdlbmVyYXRvciwgXCJfaW52b2tlXCIsIHsgdmFsdWU6IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkgfSk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lUHJvcGVydHkoR3AsIFwiY29uc3RydWN0b3JcIiwgeyB2YWx1ZTogR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgZGVmaW5lUHJvcGVydHkoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgXCJjb25zdHJ1Y3RvclwiLFxuICAgIHsgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uLCBjb25maWd1cmFibGU6IHRydWUgfVxuICApO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgZGVmaW5lUHJvcGVydHkodGhpcywgXCJfaW52b2tlXCIsIHsgdmFsdWU6IGVucXVldWUgfSk7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kTmFtZSA9IGNvbnRleHQubWV0aG9kO1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2ROYW1lXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kLCBvciBhIG1pc3NpbmcgLm5leHQgbWVodG9kLCBhbHdheXMgdGVybWluYXRlIHRoZVxuICAgICAgLy8geWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgIGlmIChtZXRob2ROYW1lID09PSBcInRocm93XCIgJiYgZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1ldGhvZE5hbWUgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ1wiICsgbWV0aG9kTmFtZSArIFwiJyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIHZhciBvYmplY3QgPSBPYmplY3QodmFsKTtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImltcG9ydCBcIi4vcGFydHMvY29tcGFyaXNvbi1zbGlkZXJcIlxuaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgY29uc3Qgd2VicEltYWdlcyA9IFtdO1xuICBjb25zdCBkb3dubG9hZEJ1dHRvblNpbmdsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZG93bmxvYWRCdXR0b25TaW5nbGVcIik7XG4gIGNvbnN0IGRvd25sb2FkQnV0dG9uTXVsdGlwbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rvd25sb2FkQnV0dG9uTXVsdGlwbGVcIik7XG4gIGNvbnN0IGlucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWFnZVVwbG9hZEJ1dHRvbicpO1xuICBsZXQgaW1hZ2VzUHJvY2Vzc2VkID0gMDtcbiAgY29uc3QgaW1hZ2VFbGVtZW50cyA9IFtdOyAvLyAqQXJyYXkgdG8gc3RvcmUgb3JpZ2luYWwgYW5kIGNvbnZlcnRlZCBpbWFnZSBlbGVtZW50c1xuICBsZXQgaXNJbWFnZVByb2Nlc3NpbmcgPSBmYWxzZTtcblxuICBjb25zdCBjb252ZXJ0SW1hZ2VzID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoaXNJbWFnZVByb2Nlc3NpbmcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiT25nb2luZyBpbWFnZSBwcm9jZXNzaW5nLiBQbGVhc2Ugd2FpdC4uLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIFxuICAgIGlmIChldmVudC50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gUmVzZXQgd2VicEltYWdlcyBhcnJheVxuICAgICAgd2VicEltYWdlcy5sZW5ndGggPSAwO1xuICAgICAgaW1hZ2VzUHJvY2Vzc2VkID0gMDtcbiAgICAgIGlzSW1hZ2VQcm9jZXNzaW5nID0gdHJ1ZTtcbiAgXG4gICAgICAvLyBTbGlkZXIgVmFsdWVcbiAgICAgIGxldCBzbGlkZXJWYWx1ZSA9IHBhcnNlRmxvYXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlcicpLnZhbHVlKTsgLy8gRGVmYXVsdCB2YWx1ZSBmb3IgdGhlIHNsaWRlclxuICAgICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlcicpO1xuICAgICAgY29uc3Qgc2xpZGVyVmFsdWVEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlclZhbHVlJyk7XG4gICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2xpZGVyVmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMudmFsdWUpO1xuICAgICAgICBzbGlkZXJWYWx1ZURpc3BsYXkudGV4dENvbnRlbnQgPSBzbGlkZXJWYWx1ZTtcbiAgICAgIH0pO1xuICBcbiAgICAgIFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudC50YXJnZXQuZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbaV07XG4gIFxuICAgICAgICAvLyBDcmVhdGUgZWxlbWVudHMgZm9yIGZpbGUgc2l6ZXMgYW5kIGNvbnZlcnRlZCBpbWFnZSBkYXRhXG4gICAgICAgIGxldCBvcmlnaW5hbERhdGFTaXplID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBsZXQgY29udmVydGVkSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY29udmVydGVkSW1hZ2UuY2xhc3NMaXN0LmFkZCgnd2VicC1pbWFnZScpO1xuICAgICAgICBsZXQgY29udmVydGVkRGF0YVNpemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIFxuICAgICAgICAvLyBDcmVhdGUgaW1hZ2UgZWxlbWVudCB0byBzdG9yZSB0aGUgb3JpZ2luYWwgaW1hZ2VcbiAgICAgICAgbGV0IG9yaWdpbmFsSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgb3JpZ2luYWxJbWFnZS5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICBcbiAgICAgICAgLy8gU3RvcmUgaW1hZ2UgYW5kIGRhdGEgc3BhbiBlbGVtZW50cyBpbiB0aGUgb2JqZWN0IHdpdGggdGhlIHNhbWUgaWRlbnRpZmllcnNcbiAgICAgICAgaW1hZ2VFbGVtZW50c1tpXSA9IHtcbiAgICAgICAgICBvcmlnaW5hbERhdGFTaXplLFxuICAgICAgICAgIGNvbnZlcnRlZEltYWdlLFxuICAgICAgICAgIGNvbnZlcnRlZERhdGFTaXplLFxuICAgICAgICAgIG9yaWdpbmFsSW1hZ2UsIC8vIFN0b3JlIHRoZSBvcmlnaW5hbCBpbWFnZSBlbGVtZW50XG4gICAgICAgICAgb3JpZ2luYWxJbWFnZVVSTDogVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSxcbiAgICAgICAgICB3ZWJwSW1hZ2VVUkw6IG51bGwsIC8vIFRoaXMgd2lsbCBiZSB1cGRhdGVkIG9uY2Ugd2UgaGF2ZSB0aGUgaW1hZ2UgcHJvY2Vzc2VkLlxuICAgICAgICAgIGltYWdlSW5kZXg6IGksXG4gICAgICAgIH07XG4gIFxuICAgICAgICAvLyBQcm9jZXNzIGltYWdlIGFuZCB1cGRhdGUgZWxlbWVudHNcbiAgICAgICAgcHJvY2Vzc0ltYWdlKGV2ZW50LCBmaWxlLCBvcmlnaW5hbERhdGFTaXplLCBjb252ZXJ0ZWRJbWFnZSwgY29udmVydGVkRGF0YVNpemUsIHNsaWRlclZhbHVlLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAtY2FyZCcpLCBpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gIVByb2Nlc3MgSW1hZ2VcbiAgYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc0ltYWdlKGV2ZW50LCBmaWxlLCBvcmlnaW5hbERhdGFTaXplLCBjb252ZXJ0ZWRJbWFnZSwgY29udmVydGVkRGF0YVNpemUsIHNsaWRlclZhbHVlLCBwb3B1cCwgaW1hZ2VJbmRleCkge1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGNvbnNvbGUubG9nKCdwcm9jZXNzaW5nIGltYWdlOiAnLCBmaWxlKVxuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBsZXQgb3JpZ2luYWxJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIG9yaWdpbmFsSW1hZ2Uuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcblxuICAgIG9yaWdpbmFsSW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICBjYW52YXMud2lkdGggPSBvcmlnaW5hbEltYWdlLndpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IG9yaWdpbmFsSW1hZ2UuaGVpZ2h0O1xuICAgICAgY3R4LmRyYXdJbWFnZShvcmlnaW5hbEltYWdlLCAwLCAwKTtcblxuICAgICAgLy8gKkNvbnZlcnQgY2FudmFzIHRvIFdlYlBcbiAgICAgIGNhbnZhcy50b0Jsb2IoXG4gICAgICAgIGZ1bmN0aW9uKGJsb2IpIHtcbiAgICAgICAgICAvL0NhbGN1bGF0ZSB0aGUgZmlsZSBzaXplIG9mIHRoZSBXZWJQIEltYWdlXG4gICAgICAgICAgY29uc3QgZmlsZVNpemVLQiA9IGJsb2Iuc2l6ZSAvIDEwMjQ7XG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCB3ZWJwSW1hZ2UgPSByZWFkZXIucmVzdWx0O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBVcGRhdGUgd2VicCBpbWFnZSBlbGVtZW50cy5cbiAgICAgICAgICAgIC8vIGNvbnN0IGltYWdlSW5kZXggPSBpbWFnZXNQcm9jZXNzZWQrKztcbiAgICAgICAgICAgIC8vIGNvbnN0IGRhdGFJbmRleCA9IGltYWdlRWxlbWVudHNbaW1hZ2VJbmRleF0uZGF0YUluZGV4O1xuICAgICAgICAgICAgY29udmVydGVkSW1hZ2UuZGF0YXNldC5pbmRleCA9IGltYWdlSW5kZXg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpbWFnZUVsZW1lbnRzW2ltYWdlSW5kZXhdLm9yaWdpbmFsSW1hZ2UgPSBvcmlnaW5hbEltYWdlOyBcbiAgICAgICAgICAgIGltYWdlRWxlbWVudHNbaW1hZ2VJbmRleF0ud2VicEltYWdlVVJMID0gd2VicEltYWdlOyAvL1N0b3JlIHRoZSBjb252ZXJ0ZWQgV2ViUCBpbWFnZSBVUkwgaGVyZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAqVXBkYXRlIGZpbGUgc2l6ZSBlbGVtZW50cyBhbmQgY29udmVydGVkIGltYWdlIGRhdGFcbiAgICAgICAgICAgIG9yaWdpbmFsRGF0YVNpemUuaW5uZXJUZXh0ID0gJ09yaWdpbmFsIEZpbGUgU2l6ZTogJyArIGZpbGUuc2l6ZSArICcgYnl0ZXMnO1xuICAgICAgICAgICAgY29udmVydGVkRGF0YVNpemUuaW5uZXJUZXh0ID0gJ0NvbnZlcnRlZCBGaWxlIFNpemU6ICcgKyBmaWxlU2l6ZUtCLnRvRml4ZWQoMikgKyAnIEtCJztcbiAgICAgICAgICAgIGNvbnZlcnRlZEltYWdlLnNyYyA9IHdlYnBJbWFnZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gKlN0b3JlIFdlYlAgaW1hZ2UgZGF0YSB3aXRoIG9yaWdpbmFsIGZpbGVuYW1lXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbEZpbGVuYW1lID0gZmlsZS5uYW1lO1xuICAgICAgICAgICAgY29uc3Qgd2VicEZpbGVuYW1lID0gZ2V0V2VicEZpbGVuYW1lKG9yaWdpbmFsRmlsZW5hbWUpO1xuICAgICAgICAgICAgaW1hZ2VzUHJvY2Vzc2VkKys7IC8vICpnZXQgdGhlIGltYWdlIGluZGV4IGZyb20gdGhlIGltYWdlc1Byb2Nlc3NlZCBjb3VudGVyXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vICpTdG9yZSBXZWJQIGltYWdlIGRhdGFcbiAgICAgICAgICAgIHdlYnBJbWFnZXNbaW1hZ2VJbmRleF0gPSB7IG5hbWU6IG9yaWdpbmFsRmlsZW5hbWUsIGRhdGE6IHdlYnBJbWFnZSwgZmlsZW5hbWU6IHdlYnBGaWxlbmFtZSB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAqQ2hlY2sgdG8gZW5zdXJlIGFsbCBpbWFnZXMgaGF2ZSBiZWVuIHVwbG9hZGVkIGFuZCBjb252ZXJ0ZWRcbiAgICAgICAgICAgIGlmIChpbWFnZXNQcm9jZXNzZWQgPT09IGV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmVuZGVyV2VicEltYWdlcygpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZW5kZXJXZWJwSW1hZ2VzKCkpXG4gICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuZmlsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgZG93bmxvYWRCdXR0b25TaW5nbGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgZG93bmxvYWRCdXR0b25NdWx0aXBsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvd25sb2FkQnV0dG9uU2luZ2xlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgZG93bmxvYWRCdXR0b25NdWx0aXBsZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgZW5kVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgIGNvbnN0IHByb2Nlc3NpbmdUaW1lID0gZW5kVGltZSAtIHN0YXJ0VGltZTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnUHJvY2Vzc2luZyB0aW1lOicsIHByb2Nlc3NpbmdUaW1lKTtcbiAgICAgICAgICBpc0ltYWdlUHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICAgIH0sICdpbWFnZS93ZWJwJywgc2xpZGVyVmFsdWUpO1xuICAgIH07XG4gICAgY29uc3Qgb3JpZ2luYWxJbWFnZVVSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAob3JpZ2luYWxJbWFnZVVSTCkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSwgNTApO1xuICAgIH0pXG4gIH1cblxuICAvLyAqVXBkYXRlIHRoZSBzbGlkZXIgdmFsdWUgZGlzcGxheVxuICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyJyk7XG4gIGNvbnN0IHNsaWRlclZhbHVlRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZXJWYWx1ZScpO1xuICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICBzbGlkZXJWYWx1ZURpc3BsYXkudGV4dENvbnRlbnQgPSB0aGlzLnZhbHVlO1xuICB9KTtcblxuICBmdW5jdGlvbiBnZXRXZWJwRmlsZW5hbWUob3JpZ2luYWxGaWxlbmFtZSkge1xuICAgIGNvbnN0IGV4dGVuc2lvbkluZGV4ID0gb3JpZ2luYWxGaWxlbmFtZS5sYXN0SW5kZXhPZignLicpO1xuICAgIGNvbnN0IGZpbGVuYW1lID0gb3JpZ2luYWxGaWxlbmFtZS5zdWJzdHJpbmcoMCwgZXh0ZW5zaW9uSW5kZXgpO1xuICAgIHJldHVybiBmaWxlbmFtZSArICcud2VicCc7XG4gIH1cblxuXG4gIC8vICFSZW5kZXIgV2VicCBpbWFnZXMgYW5kIGRhdGFcbiAgZnVuY3Rpb24gcmVuZGVyV2VicEltYWdlcygpIHtcblxuICAgIHdlYnBJbWFnZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSk7XG4gICAgfSk7XG4gIFxuICAgIC8vIFNvcnQgdGhlIGltYWdlRWxlbWVudHMgYXJyYXkgYmFzZWQgb24gdGhlIG9yaWdpbmFsSW1hZ2VVUkwgcHJvcGVydHlcbiAgICBpbWFnZUVsZW1lbnRzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLm9yaWdpbmFsSW1hZ2VVUkwubG9jYWxlQ29tcGFyZShiLm9yaWdpbmFsSW1hZ2VVUkwpO1xuICAgIH0pO1xuXG4gICAgLy8gKkNsZWFyIHRoZSBleGlzdGluZyBpbWFnZXNcbiAgICBjb25zdCBzdHJlYW1saW5lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0cmVhbWxpbmUnKTtcbiAgICBzdHJlYW1saW5lQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnNvbGUubG9nKCdpcyBydW5uaW5nJyk7XG4gICAgXG4gICAgLy8gKlJlbmRlciBXZWJQIGltYWdlcyBpbiBvcmRlclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2VicEltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgeyBuYW1lLCBkYXRhLCBmaWxlbmFtZSB9ID0gd2VicEltYWdlc1tpXTtcbiAgICAgIGNvbnN0IGltYWdlRWxlbWVudCA9IGltYWdlRWxlbWVudHNbaV07XG4gICAgICBjb25zdCB7IG9yaWdpbmFsRGF0YVNpemUsIGNvbnZlcnRlZEltYWdlLCBjb252ZXJ0ZWREYXRhU2l6ZSB9ID0gaW1hZ2VFbGVtZW50O1xuXG4gICAgICBjb25zdCBzdGFydFRpbWVSZW5kZXJpbmcgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgIGNvbnNvbGUubG9nKCdyZW5kZXJpbmcgd2VicDogJywgZmlsZW5hbWUpXG4gICAgXG4gICAgICAvLyAqQ3JlYXRlIGEgZGl2IHRvIGhvbGQgZWFjaCBpbWFnZSdzIGNvbnRlbnRcbiAgICAgIGNvbnN0IGZpbGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBmaWxlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdmaWxlLXdyYXBwZXInKTtcbiAgICAgIFxuICAgICAgLy8gKlNob3cgZmlsZSBuYW1lXG4gICAgICBjb25zdCBmaWxlTmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBjb25zdCBmaWxlTmFtZVRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnRmlsZSBOYW1lOicgKyAnICcpO1xuICAgICAgLy8gKmNvbnN0IGJyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICBjb25zdCBmaWxlbmFtZVRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShmaWxlbmFtZSk7XG5cbiAgICAgIGZpbGVOYW1lRWxlbWVudC5hcHBlbmRDaGlsZChmaWxlTmFtZVRleHQpO1xuICAgICAgLy8gKmZpbGVOYW1lRWxlbWVudC5hcHBlbmRDaGlsZChickVsZW1lbnQpO1xuICAgICAgZmlsZU5hbWVFbGVtZW50LmFwcGVuZENoaWxkKGZpbGVuYW1lVGV4dCk7XG4gIFxuICAgICAgZmlsZU5hbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZpbGVuYW1lLXdyYXBwZXInKTtcbiAgICAgIGZpbGVXcmFwcGVyLmFwcGVuZENoaWxkKGZpbGVOYW1lRWxlbWVudCk7XG5cbiAgICAgIGNvbnN0IGZpbGVXcmFwcGVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBmaWxlV3JhcHBlclJvdy5jbGFzc0xpc3QuYWRkKCdmaWxlLXdyYXBwZXItcm93JylcblxuICAgICAgLy8gKlNob3cgV2ViUCBpbWFnZVxuICAgICAgY29udmVydGVkSW1hZ2Uuc3JjID0gZGF0YTtcbiAgICAgIGNvbnZlcnRlZEltYWdlLmFsdCA9IG5hbWU7IC8vICpTZXQgdGhlIGFsdCBhdHRyaWJ1dGUgdG8gdGhlIG9yaWdpbmFsIGZpbGVuYW1lXG4gICAgICBmaWxlV3JhcHBlclJvdy5hcHBlbmRDaGlsZChjb252ZXJ0ZWRJbWFnZSk7XG5cbiAgICBcbiAgICAgIC8vICpTaG93IGZpbGUgc2l6ZXNcbiAgICAgIGNvbnN0IG9yaWdpbmFsRmlsZVNpemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBvcmlnaW5hbEZpbGVTaXplLmlubmVyVGV4dCA9IG9yaWdpbmFsRGF0YVNpemUuaW5uZXJUZXh0O1xuICAgICAgb3JpZ2luYWxGaWxlU2l6ZS5jbGFzc0xpc3QuYWRkKCdkYXRhLXdyYXBwZXInKTtcbiAgICAgIGZpbGVXcmFwcGVyUm93LmFwcGVuZENoaWxkKG9yaWdpbmFsRmlsZVNpemUpO1xuICAgICAgXG4gICAgICBjb25zdCBjb252ZXJ0ZWRGaWxlU2l6ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGNvbnZlcnRlZEZpbGVTaXplLmlubmVyVGV4dCA9IGNvbnZlcnRlZERhdGFTaXplLmlubmVyVGV4dDtcbiAgICAgIGNvbnZlcnRlZEZpbGVTaXplLmNsYXNzTGlzdC5hZGQoJ2RhdGEtd3JhcHBlcicpO1xuICAgICAgZmlsZVdyYXBwZXJSb3cuYXBwZW5kQ2hpbGQoY29udmVydGVkRmlsZVNpemUpO1xuXG5cbi8vIC4uLlxuLy8gKkNyZWF0ZSBhIENvbXBhcmlzb24gQnV0dG9uXG5jb25zdCBwb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cC1jYXJkJyk7XG5jb25zdCBjb21wYXJpc29uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jb21wYXJpc29uQnV0dG9uLmlubmVyVGV4dCA9ICdDb21wYXJlJztcbmNvbXBhcmlzb25CdXR0b24uY2xhc3NMaXN0LmFkZCgnY29tcGFyZS1idXR0b24nKTtcbmNvbXBhcmlzb25CdXR0b24uZGF0YXNldC5pbmRleCA9IGk7IC8vIFNldCBkYXRhLWluZGV4IGF0dHJpYnV0ZSBkaXJlY3RseVxuY29tcGFyaXNvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgY29uc3QgaW1hZ2VzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlLWNvbnRhaW5lcicpO1xuICBjb25zdCBiZWZvcmVJbWFnZSA9IGltYWdlc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaW1hZ2UtYmVmb3JlJyk7XG4gIGNvbnN0IGFmdGVySW1hZ2UgPSBpbWFnZXNDb250YWluZXIucXVlcnlTZWxlY3RvcignLmltYWdlLWFmdGVyJyk7XG5cbiAgaWYgKGJlZm9yZUltYWdlICYmIGFmdGVySW1hZ2UpIHtcbiAgICBpbWFnZXNDb250YWluZXIucmVtb3ZlQ2hpbGQoYmVmb3JlSW1hZ2UpO1xuICAgIGltYWdlc0NvbnRhaW5lci5yZW1vdmVDaGlsZChhZnRlckltYWdlKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBVc2UgZS50YXJnZXQgdG8gZ2V0IHRoZSBlbGVtZW50IHRoYXQgdHJpZ2dlcmVkIHRoZSBldmVudFxuICAgIGNvbnN0IGRhdGFJbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXg7IC8vIEFjY2VzcyB0aGUgZGF0YS1pbmRleCBkaXJlY3RseVxuXG4gICAgY29uc3Qgb3JpZ2luYWxJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBvcmlnaW5hbEltYWdlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbWFnZS1iZWZvcmUnKTtcbiAgICBvcmlnaW5hbEltYWdlRWxlbWVudC5hbHQgPSAnb3JpZ2luYWwgaW1hZ2UnO1xuICAgIG9yaWdpbmFsSW1hZ2VFbGVtZW50LnNyYyA9IGltYWdlRWxlbWVudHNbZGF0YUluZGV4XS5vcmlnaW5hbEltYWdlVVJMO1xuICAgIGltYWdlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChvcmlnaW5hbEltYWdlRWxlbWVudCk7XG5cbiAgICBjb25zdCBjb252ZXJ0ZWRJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb252ZXJ0ZWRJbWFnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW1hZ2UtYWZ0ZXInKTtcbiAgICBjb252ZXJ0ZWRJbWFnZUVsZW1lbnQuYWx0ID0gJ2NvbnZlcnRlZCBpbWFnZSc7XG4gICAgY29udmVydGVkSW1hZ2VFbGVtZW50LnNyYyA9IHdlYnBJbWFnZXNbZGF0YUluZGV4XS5kYXRhO1xuICAgIGltYWdlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb252ZXJ0ZWRJbWFnZUVsZW1lbnQpO1xuXG4gICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgfVxufSk7XG5maWxlV3JhcHBlclJvdy5hcHBlbmRDaGlsZChjb21wYXJpc29uQnV0dG9uKTtcbi8vIC4uLlxuXG4gIFxuICAgICAgLy8gKkNyZWF0ZSBhIGJ1dHRvbiBmb3IgaW5kaXZpZHVhbCBkb3dubG9hZFxuICAgICAgY29uc3QgZG93bmxvYWRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGRvd25sb2FkQnV0dG9uLmlubmVyVGV4dCA9ICdEb3dubG9hZCc7XG4gICAgICBkb3dubG9hZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzaW5nbGUtZG93bmxvYWQnKTtcbiAgICAgIGRvd25sb2FkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBkb3dubG9hZFdlYnBJbWFnZShkYXRhLCBuYW1lKTtcbiAgICAgIH0pO1xuICAgICAgZmlsZVdyYXBwZXJSb3cuYXBwZW5kQ2hpbGQoZG93bmxvYWRCdXR0b24pO1xuICAgIFxuICAgICAgLy8gKkFkZCB0aGUgaW1hZ2UgY29udGVudCB0byB0aGUgc3RyZWFtbGluZSBjb250YWluZXJcbiAgICAgIHN0cmVhbWxpbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoZmlsZVdyYXBwZXIpO1xuICAgICAgc3RyZWFtbGluZUNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWxlV3JhcHBlclJvdyk7XG5cbiAgICAgIGNvbnN0IGVuZFRpbWVSZW5kZXJpbmcgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgIGNvbnN0IHByb2Nlc3NpbmdUaW1lUmVuZGVyaW5nID0gZW5kVGltZVJlbmRlcmluZyAtIHN0YXJ0VGltZVJlbmRlcmluZztcbiAgICAgIGNvbnNvbGUubG9nKCdSZW5kZXJpbmcgdGltZTonLCBwcm9jZXNzaW5nVGltZVJlbmRlcmluZyk7XG4gICAgfVxuICAgIFxuICAgIC8vICpIaWRlIHNsaWRlciBhZnRlciBjb252ZXJzaW9uXG4gICAgY29uc3Qgc2xpZGVyV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItd3JhcHBlcicpO1xuICAgIHNsaWRlcldyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICB9XG4gIFxuXG4gIFxuICBhc3luYyBmdW5jdGlvbiBkb3dubG9hZFdlYnBJbWFnZShkYXRhVVJJLCBmaWxlbmFtZSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFVUkkpO1xuICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IHJlc3BvbnNlLiBibG9iKCk7XG4gICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG4gICAgICBjb25zdCBkb3dubG9hZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBkb3dubG9hZExpbmsuaHJlZiA9IHVybDtcbiAgICAgIGRvd25sb2FkTGluay5kb3dubG9hZCA9IGZpbGVuYW1lLnJlcGxhY2UoL1xcLlteLy5dKyQvLCBcIlwiKSArIFwiLndlYnBcIjsgLy8gKlJlbW92ZSB0aGUgZmlsZSBleHRlbnNpb24gYW5kIGFkZCAud2VicFxuICAgICAgZG93bmxvYWRMaW5rLmNsaWNrKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRvd25sb2FkaW5nIGltYWdlJywgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRvd25sb2FkSW1hZ2VzID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHdlYnBJbWFnZXMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKGRvd25sb2FkQnV0dG9uU2luZ2xlLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcbiAgICAgICAgLy8gKkRvd25sb2FkIHNpbmdsZSBmaWxlXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgZGF0YSB9ID0gd2VicEltYWdlc1swXTtcbiAgICAgICAgY29uc3QgZmlsZU5hbWUgPSBnZXRXZWJwRmlsZW5hbWUobmFtZSk7XG4gICAgICAgIGNvbnN0IGRvd25sb2FkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgZG93bmxvYWRMaW5rLmhyZWYgPSBkYXRhO1xuICAgICAgICBkb3dubG9hZExpbmsuZG93bmxvYWQgPSBmaWxlTmFtZTtcbiAgICAgICAgZG93bmxvYWRMaW5rLmNsaWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB6aXAgPSBuZXcgSlNaaXAoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdlYnBJbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCB7IG5hbWUsIGRhdGEgfSA9IHdlYnBJbWFnZXNbaV07XG4gICAgICAgICAgY29uc3QgZmlsZU5hbWUgPSBnZXRXZWJwRmlsZW5hbWUobmFtZSk7IC8vICpVc2UgdGhlIG9yaWdpbmFsIGZpbGVuYW1lIGZvciB0aGUgV2ViUCBmaWxlXG5cbiAgICAgICAgICB6aXAuZmlsZShmaWxlTmFtZSwgZGF0YS5zcGxpdCgnLCcpWzFdLCB7IGJhc2U2NDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHppcC5nZW5lcmF0ZUFzeW5jKHsgdHlwZTogJ2Jsb2InIH0pLnRoZW4oZnVuY3Rpb24oY29udGVudCkge1xuICAgICAgICAgIGNvbnN0IGRvd25sb2FkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICBkb3dubG9hZExpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoY29udGVudCk7XG4gICAgICAgICAgZG93bmxvYWRMaW5rLmRvd25sb2FkID0gJ3dlYnBfaW1hZ2VzLnppcCc7XG4gICAgICAgICAgZG93bmxvYWRMaW5rLmNsaWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjb252ZXJ0SW1hZ2VzKTtcbiAgZG93bmxvYWRCdXR0b25TaW5nbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb3dubG9hZEltYWdlcyk7XG4gIGRvd25sb2FkQnV0dG9uTXVsdGlwbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb3dubG9hZEltYWdlcyk7XG59KTtcbiIsIlxuY29uc3QgQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlLWNvbnRhaW5lcicpO1xuY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnV0dG9uJyk7XG5jb25zdCBjb21wYXJpc29uU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciAoJy5jb21wYXJpc29uLXNsaWRlcicpO1xuXG5jb21wYXJpc29uU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcblx0Q29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KCctLXBvc2l0aW9uJywgYCR7ZS50YXJnZXQudmFsdWV9JWApO1xufSk7XG5cbmNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRjb25zdCBwb3B1cENhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAtY2FyZCcpO1xuXHRwb3B1cENhcmQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuXHRwb3B1cENhcmQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xufSk7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==