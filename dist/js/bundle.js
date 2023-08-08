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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



document.addEventListener('DOMContentLoaded', function () {
  var webpImages = [];
  var downloadButtonSingle = document.querySelector("#downloadButtonSingle");
  var downloadButtonMultiple = document.querySelector("#downloadButtonMultiple");
  var inputElement = document.getElementById('imageUploadButton');
  var imagesProcessed = 0;
  var imageElements = []; // *Array to store original and converted image elements

  var isImageProcessing = false;
  var PopupCard = document.getElementById('popup-card');
  var closeButton = document.querySelector('.close-button');

  function resetProcessingState() {
    webpImages.length = 0;
    imageElements.length = 0;
    isImageProcessing = false; // Clear existing images and data in the streamline container

    var streamlineContainer = document.querySelector('#streamline');
    streamlineContainer.innerHTML = ''; // Hide download buttons

    downloadButtonSingle.style.display = 'none';
    downloadButtonMultiple.style.display = 'none';
  }

  var convertImages = function convertImages(event) {
    resetProcessingState();

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
          originalImageURL: null,
          webpImageURL: null,
          // This will be updated once we have the image processed.
          imageIndex: i
        };
        console.log("Original Data Size for image", i, ":", imageElements[i].originalDataSize); // Process image and update elements

        processImage(event, file, originalDataSize, convertedImage, convertedDataSize, sliderValue, document.getElementById('popup-card'), i);
      }
    }
  }; // !Process Image


  function processImage(event, file, originalDataSize, convertedImage, convertedDataSize, sliderValue, popup, imageIndex) {
    var startTime = performance.now();
    console.log('processing image: ', file);
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var originalImage = new Image();
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
          imageElements[imageIndex].originalImageURL = originalImage;
          imageElements[imageIndex].webpImageURL = webpImage; //Store the converted WebP image URL here
          // *Update file size elements and converted image data

          originalDataSize.innerText = 'Original File Size: ' + file.size + ' bytes';
          convertedDataSize.innerText = 'Converted File Size: ' + fileSizeKB.toFixed(2) + ' KB';
          convertedImage.src = webpImage; // *Store WebP image data with original filename

          var originalFilename = file.name;
          var webpFilename = getWebpFilename(originalFilename);
          webpImages.push({
            name: originalFilename,
            data: webpImage,
            originalBlob: file //Store the original image blob for render purposes

          });
          imageElements[imageIndex].originalFilename = originalFilename; // imagesProcessed++; // *get the image index from the imagesProcessed counter

          imagesProcessed++;
          convertedImage.dataset.index = imageIndex;
          imageElements[imageIndex].originalImageURL = originalImage;
          imageElements[imageIndex].webpImageURL = webpImage; // *Store WebP image data

          webpImages[imageIndex] = {
            name: originalFilename,
            data: webpImage,
            filename: webpFilename,
            originalBlob: file
          };
          console.log(webpImages); // *Check to ensure all images have been uploaded and converted

          if (imagesProcessed === event.target.files.length) {
            renderWebpImages();
            console.log(renderWebpImages());

            if (imagesProcessed === 1) {
              console.log("Number of files uploaded:", imagesProcessed);
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
  } // !Render Webp images and data


  function renderWebpImages() {
    var matchedArray = webpImages.map(function (webpImage, index) {
      return _objectSpread(_objectSpread({}, webpImage), imageElements[index]);
    });
    console.log(matchedArray); // *Clear the existing images

    var streamlineContainer = document.querySelector('#streamline');
    streamlineContainer.innerHTML = '';
    console.log('is running'); // *Render WebP images in order

    var _loop = function _loop() {
      var _matchedArray$i = matchedArray[i],
          name = _matchedArray$i.name,
          data = _matchedArray$i.data,
          filename = _matchedArray$i.filename,
          originalImageURL = _matchedArray$i.originalImageURL,
          originalBlob = _matchedArray$i.originalBlob,
          originalDataSize = _matchedArray$i.originalDataSize,
          convertedImage = _matchedArray$i.convertedImage,
          convertedDataSize = _matchedArray$i.convertedDataSize;

      if (convertedImage && originalDataSize && convertedDataSize) {
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
        fileWrapperRow.appendChild(convertedFileSize); // *Create a Comparison Button

        var popup = document.getElementById('popup-card');
        var comparisonButton = document.createElement('button');
        comparisonButton.classList.add('compare-button');
        var comparisonButtonContainer = document.createElement('a');
        comparisonButtonContainer.classList.add('compare-button');
        var comparisonButtonIcon = document.createElement('i');
        comparisonButtonIcon.classList.add('fas', 'fa-info-circle');
        comparisonButtonIcon.dataset.index = i; // Set data-index attribute directly

        comparisonButtonContainer.appendChild(comparisonButtonIcon);
        comparisonButtonIcon.addEventListener("click", function (e) {
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
            originalImageElement.src = URL.createObjectURL(matchedArray[dataIndex].originalBlob);
            imagesContainer.appendChild(originalImageElement);
            var convertedImageElement = document.createElement('img');
            convertedImageElement.classList.add('image-after');
            convertedImageElement.alt = 'converted image';
            convertedImageElement.src = data;
            imagesContainer.appendChild(convertedImageElement); // !Remove previously generated elements if they exist

            var prevComparisonRangeSliders = imagesContainer.querySelectorAll('.comparison-slider');
            var prevSliderLines = imagesContainer.querySelectorAll('.slider-line');
            var prevSliderButtons = imagesContainer.querySelectorAll('.slider-button');
            prevComparisonRangeSliders.forEach(function (slider) {
              return slider.parentNode.removeChild(slider);
            });
            prevSliderLines.forEach(function (line) {
              return line.parentNode.removeChild(line);
            });
            prevSliderButtons.forEach(function (button) {
              return button.parentNode.removeChild(button);
            });
            var comparisonRangeSlider = document.createElement('input');
            comparisonRangeSlider.type = 'range';
            comparisonRangeSlider.min = '0';
            comparisonRangeSlider.max = '100';
            comparisonRangeSlider.value = '50%';
            comparisonRangeSlider.classList.add('comparison-slider');
            comparisonRangeSlider.setAttribute('aria-label', 'Percentage of before photo shown');
            imagesContainer.appendChild(comparisonRangeSlider);
            var sliderLine = document.createElement('div');
            sliderLine.classList.add('slider-line');
            imagesContainer.appendChild(sliderLine);
            var sliderButton = document.createElement("div");
            sliderButton.classList.add("slider-button", "fas", "fa-arrows-alt-h");
            imagesContainer.appendChild(sliderButton); // !Slider Functionality

            var Container = document.querySelector('#image-container');
            var comparisonSliders = document.querySelectorAll('.comparison-slider');
            comparisonSliders.forEach(function (comparisonSlider) {
              comparisonSlider.addEventListener('input', function (e) {
                Container.style.setProperty('--position', "".concat(e.target.value, "%"));
              });
            });
            popup.classList.remove('hide');
            popup.classList.add('show'); // !Popup Card

            closeButton.addEventListener('click', function () {
              PopupCard.classList.remove('show');
              PopupCard.classList.add('hide');
              comparisonSliders.forEach(function (comparisonSlider) {
                comparisonSlider.value = 50;
              });
            });
          }
        });
        fileWrapperRow.appendChild(comparisonButtonContainer); // *Create a button for individual download

        var downloadButtonContainer = document.createElement('div');
        downloadButtonContainer.classList.add('single-download');
        var downloadButtonIcon = document.createElement('i'); // downloadButton.innerText = 'Download';

        downloadButtonIcon.classList.add('fas', 'fa-download');
        downloadButtonContainer.addEventListener('click', function () {
          downloadWebpImage(data, name);
        });
        downloadButtonContainer.appendChild(downloadButtonIcon);
        fileWrapperRow.appendChild(downloadButtonContainer); // *Add the image content to the streamline container

        streamlineContainer.appendChild(fileWrapper);
        streamlineContainer.appendChild(fileWrapperRow);
        var endTimeRendering = performance.now();
        var processingTimeRendering = endTimeRendering - startTimeRendering;
        console.log('Rendering time:', processingTimeRendering);
      } else {
        console.log("Skipping rendering for image ".concat(i, " due to missing elements")); // *Hide slider after conversion
      }
    };

    for (var i = 0; i < webpImages.length; i++) {
      _loop();
    }

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
          var _webpImages$i2 = webpImages[i],
              _name = _webpImages$i2.name,
              _data = _webpImages$i2.data;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9idW5kbGUuanMiXSwibmFtZXMiOlsicnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCJ1bmRlZmluZWQiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiR2VuU3RhdGVTdXNwZW5kZWRTdGFydCIsIkdlblN0YXRlU3VzcGVuZGVkWWllbGQiLCJHZW5TdGF0ZUV4ZWN1dGluZyIsIkdlblN0YXRlQ29tcGxldGVkIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGlzcGxheU5hbWUiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJfX2F3YWl0IiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImVucXVldWUiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJuZXh0IiwiZG9uZSIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIm1ldGhvZE5hbWUiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwibGVuZ3RoIiwicG9wIiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwiaSIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdEVudHJ5Iiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJtb2R1bGUiLCJyZWdlbmVyYXRvclJ1bnRpbWUiLCJhY2NpZGVudGFsU3RyaWN0TW9kZSIsImdsb2JhbFRoaXMiLCJGdW5jdGlvbiIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwiY2hpbGRyZW4iLCJnZXQiLCJsIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2VicEltYWdlcyIsImRvd25sb2FkQnV0dG9uU2luZ2xlIiwicXVlcnlTZWxlY3RvciIsImRvd25sb2FkQnV0dG9uTXVsdGlwbGUiLCJpbnB1dEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImltYWdlc1Byb2Nlc3NlZCIsImltYWdlRWxlbWVudHMiLCJpc0ltYWdlUHJvY2Vzc2luZyIsIlBvcHVwQ2FyZCIsImNsb3NlQnV0dG9uIiwicmVzZXRQcm9jZXNzaW5nU3RhdGUiLCJzdHJlYW1saW5lQ29udGFpbmVyIiwiaW5uZXJIVE1MIiwic3R5bGUiLCJkaXNwbGF5IiwiY29udmVydEltYWdlcyIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImZpbGVzIiwic2xpZGVyVmFsdWUiLCJwYXJzZUZsb2F0Iiwic2xpZGVyIiwic2xpZGVyVmFsdWVEaXNwbGF5IiwidGV4dENvbnRlbnQiLCJmaWxlIiwib3JpZ2luYWxEYXRhU2l6ZSIsImNyZWF0ZUVsZW1lbnQiLCJjb252ZXJ0ZWRJbWFnZSIsImNsYXNzTGlzdCIsImFkZCIsImNvbnZlcnRlZERhdGFTaXplIiwib3JpZ2luYWxJbWFnZSIsIkltYWdlIiwic3JjIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwib3JpZ2luYWxJbWFnZVVSTCIsIndlYnBJbWFnZVVSTCIsImltYWdlSW5kZXgiLCJwcm9jZXNzSW1hZ2UiLCJwb3B1cCIsInN0YXJ0VGltZSIsInBlcmZvcm1hbmNlIiwibm93IiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsIm9ubG9hZCIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhd0ltYWdlIiwidG9CbG9iIiwiYmxvYiIsImZpbGVTaXplS0IiLCJzaXplIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsIndlYnBJbWFnZSIsImRhdGFzZXQiLCJpbmRleCIsImlubmVyVGV4dCIsInRvRml4ZWQiLCJvcmlnaW5hbEZpbGVuYW1lIiwid2VicEZpbGVuYW1lIiwiZ2V0V2VicEZpbGVuYW1lIiwiZGF0YSIsIm9yaWdpbmFsQmxvYiIsImZpbGVuYW1lIiwicmVuZGVyV2VicEltYWdlcyIsImVuZFRpbWUiLCJwcm9jZXNzaW5nVGltZSIsInJlYWRBc0RhdGFVUkwiLCJleHRlbnNpb25JbmRleCIsImxhc3RJbmRleE9mIiwic3Vic3RyaW5nIiwibWF0Y2hlZEFycmF5IiwibWFwIiwic3RhcnRUaW1lUmVuZGVyaW5nIiwiZmlsZVdyYXBwZXIiLCJmaWxlTmFtZUVsZW1lbnQiLCJmaWxlTmFtZVRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImZpbGVuYW1lVGV4dCIsImFwcGVuZENoaWxkIiwiZmlsZVdyYXBwZXJSb3ciLCJhbHQiLCJvcmlnaW5hbEZpbGVTaXplIiwiY29udmVydGVkRmlsZVNpemUiLCJjb21wYXJpc29uQnV0dG9uIiwiY29tcGFyaXNvbkJ1dHRvbkNvbnRhaW5lciIsImNvbXBhcmlzb25CdXR0b25JY29uIiwiZSIsImltYWdlc0NvbnRhaW5lciIsImJlZm9yZUltYWdlIiwiYWZ0ZXJJbWFnZSIsInJlbW92ZUNoaWxkIiwiZGF0YUluZGV4Iiwib3JpZ2luYWxJbWFnZUVsZW1lbnQiLCJjb252ZXJ0ZWRJbWFnZUVsZW1lbnQiLCJwcmV2Q29tcGFyaXNvblJhbmdlU2xpZGVycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwcmV2U2xpZGVyTGluZXMiLCJwcmV2U2xpZGVyQnV0dG9ucyIsInBhcmVudE5vZGUiLCJsaW5lIiwiYnV0dG9uIiwiY29tcGFyaXNvblJhbmdlU2xpZGVyIiwibWluIiwibWF4Iiwic2V0QXR0cmlidXRlIiwic2xpZGVyTGluZSIsInNsaWRlckJ1dHRvbiIsIkNvbnRhaW5lciIsImNvbXBhcmlzb25TbGlkZXJzIiwiY29tcGFyaXNvblNsaWRlciIsInNldFByb3BlcnR5IiwicmVtb3ZlIiwiZG93bmxvYWRCdXR0b25Db250YWluZXIiLCJkb3dubG9hZEJ1dHRvbkljb24iLCJkb3dubG9hZFdlYnBJbWFnZSIsImVuZFRpbWVSZW5kZXJpbmciLCJwcm9jZXNzaW5nVGltZVJlbmRlcmluZyIsInNsaWRlcldyYXBwZXIiLCJkYXRhVVJJIiwiZmV0Y2giLCJyZXNwb25zZSIsInVybCIsImRvd25sb2FkTGluayIsImhyZWYiLCJkb3dubG9hZCIsInJlcGxhY2UiLCJjbGljayIsImRvd25sb2FkSW1hZ2VzIiwiZmlsZU5hbWUiLCJ6aXAiLCJKU1ppcCIsInNwbGl0IiwiYmFzZTY0IiwiZ2VuZXJhdGVBc3luYyIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFB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RyxPQUFwQixDQUFwQjtBQUNBWixzQkFBWSxDQUFDRSxRQUFiLEdBQXdCLGlCQUF4QjtBQUNBRixzQkFBWSxDQUFDSSxLQUFiO0FBQ0QsU0FMRDtBQU1EO0FBQ0Y7QUFDRixHQTVCRDs7QUE4QkFuSSxjQUFZLENBQUNMLGdCQUFiLENBQThCLFFBQTlCLEVBQXdDaUIsYUFBeEM7QUFDQWYsc0JBQW9CLENBQUNGLGdCQUFyQixDQUFzQyxPQUF0QyxFQUErQ3lJLGNBQS9DO0FBQ0FySSx3QkFBc0IsQ0FBQ0osZ0JBQXZCLENBQXdDLE9BQXhDLEVBQWlEeUksY0FBakQ7QUFDRCxDQWphRCxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgfHwgZnVuY3Rpb24gKG9iaiwga2V5LCBkZXNjKSB7IG9ialtrZXldID0gZGVzYy52YWx1ZTsgfTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZGVmaW5lUHJvcGVydHkoZ2VuZXJhdG9yLCBcIl9pbnZva2VcIiwgeyB2YWx1ZTogbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB9KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBkZWZpbmVQcm9wZXJ0eShHcCwgXCJjb25zdHJ1Y3RvclwiLCB7IHZhbHVlOiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuICBkZWZpbmVQcm9wZXJ0eShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICBcImNvbnN0cnVjdG9yXCIsXG4gICAgeyB2YWx1ZTogR2VuZXJhdG9yRnVuY3Rpb24sIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9XG4gICk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9pbnZva2VcIiwgeyB2YWx1ZTogZW5xdWV1ZSB9KTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2ROYW1lID0gY29udGV4dC5tZXRob2Q7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZE5hbWVdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QsIG9yIGEgbWlzc2luZyAubmV4dCBtZWh0b2QsIGFsd2F5cyB0ZXJtaW5hdGUgdGhlXG4gICAgICAvLyB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgaWYgKG1ldGhvZE5hbWUgPT09IFwidGhyb3dcIiAmJiBkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWV0aG9kTmFtZSAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAnXCIgKyBtZXRob2ROYW1lICsgXCInIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24odmFsKSB7XG4gICAgdmFyIG9iamVjdCA9IE9iamVjdCh2YWwpO1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCBpbiBtb2Rlcm4gZW5naW5lc1xuICAvLyB3ZSBjYW4gZXhwbGljaXRseSBhY2Nlc3MgZ2xvYmFsVGhpcy4gSW4gb2xkZXIgZW5naW5lcyB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG4gIH0gZWxzZSB7XG4gICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0IFwiLi9wYXJ0cy9jb21wYXJpc29uLXNsaWRlclwiXG5pbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICBjb25zdCB3ZWJwSW1hZ2VzID0gW107XG4gIGNvbnN0IGRvd25sb2FkQnV0dG9uU2luZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkb3dubG9hZEJ1dHRvblNpbmdsZVwiKTtcbiAgY29uc3QgZG93bmxvYWRCdXR0b25NdWx0aXBsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZG93bmxvYWRCdXR0b25NdWx0aXBsZVwiKTtcbiAgY29uc3QgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlVXBsb2FkQnV0dG9uJyk7XG4gIGxldCBpbWFnZXNQcm9jZXNzZWQgPSAwO1xuICBjb25zdCBpbWFnZUVsZW1lbnRzID0gW107IC8vICpBcnJheSB0byBzdG9yZSBvcmlnaW5hbCBhbmQgY29udmVydGVkIGltYWdlIGVsZW1lbnRzXG4gIGxldCBpc0ltYWdlUHJvY2Vzc2luZyA9IGZhbHNlO1xuICBjb25zdCBQb3B1cENhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAtY2FyZCcpO1xuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1idXR0b24nKTtcbiAgXG4gIGZ1bmN0aW9uIHJlc2V0UHJvY2Vzc2luZ1N0YXRlKCkge1xuICAgIHdlYnBJbWFnZXMubGVuZ3RoID0gMDtcbiAgICBpbWFnZUVsZW1lbnRzLmxlbmd0aCA9IDA7XG4gICAgaXNJbWFnZVByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgXG4gICAgLy8gQ2xlYXIgZXhpc3RpbmcgaW1hZ2VzIGFuZCBkYXRhIGluIHRoZSBzdHJlYW1saW5lIGNvbnRhaW5lclxuICAgIGNvbnN0IHN0cmVhbWxpbmVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RyZWFtbGluZScpO1xuICAgIHN0cmVhbWxpbmVDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIFxuICAgIC8vIEhpZGUgZG93bmxvYWQgYnV0dG9uc1xuICAgIGRvd25sb2FkQnV0dG9uU2luZ2xlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZG93bmxvYWRCdXR0b25NdWx0aXBsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgY29uc3QgY29udmVydEltYWdlcyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgcmVzZXRQcm9jZXNzaW5nU3RhdGUoKTtcbiAgICBcbiAgICBpZiAoaXNJbWFnZVByb2Nlc3NpbmcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiT25nb2luZyBpbWFnZSBwcm9jZXNzaW5nLiBQbGVhc2Ugd2FpdC4uLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIFxuICAgIGlmIChldmVudC50YXJnZXQuZmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gUmVzZXQgd2VicEltYWdlcyBhcnJheVxuICAgICAgd2VicEltYWdlcy5sZW5ndGggPSAwO1xuICAgICAgaW1hZ2VzUHJvY2Vzc2VkID0gMDtcbiAgICAgIGlzSW1hZ2VQcm9jZXNzaW5nID0gdHJ1ZTtcbiAgXG4gICAgICAvLyBTbGlkZXIgVmFsdWVcbiAgICAgIGxldCBzbGlkZXJWYWx1ZSA9IHBhcnNlRmxvYXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlcicpLnZhbHVlKTsgLy8gRGVmYXVsdCB2YWx1ZSBmb3IgdGhlIHNsaWRlclxuICAgICAgY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlcicpO1xuICAgICAgY29uc3Qgc2xpZGVyVmFsdWVEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlclZhbHVlJyk7XG4gICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2xpZGVyVmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMudmFsdWUpO1xuICAgICAgICBzbGlkZXJWYWx1ZURpc3BsYXkudGV4dENvbnRlbnQgPSBzbGlkZXJWYWx1ZTtcbiAgICAgIH0pO1xuICBcbiAgICAgIFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudC50YXJnZXQuZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbaV07XG4gIFxuICAgICAgICAvLyBDcmVhdGUgZWxlbWVudHMgZm9yIGZpbGUgc2l6ZXMgYW5kIGNvbnZlcnRlZCBpbWFnZSBkYXRhXG4gICAgICAgIGxldCBvcmlnaW5hbERhdGFTaXplID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBsZXQgY29udmVydGVkSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY29udmVydGVkSW1hZ2UuY2xhc3NMaXN0LmFkZCgnd2VicC1pbWFnZScpO1xuICAgICAgICBsZXQgY29udmVydGVkRGF0YVNpemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIFxuICAgICAgICAvLyBDcmVhdGUgaW1hZ2UgZWxlbWVudCB0byBzdG9yZSB0aGUgb3JpZ2luYWwgaW1hZ2VcbiAgICAgICAgbGV0IG9yaWdpbmFsSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgb3JpZ2luYWxJbWFnZS5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICBcbiAgICAgICAgLy8gU3RvcmUgaW1hZ2UgYW5kIGRhdGEgc3BhbiBlbGVtZW50cyBpbiB0aGUgb2JqZWN0IHdpdGggdGhlIHNhbWUgaWRlbnRpZmllcnNcbiAgICAgICAgaW1hZ2VFbGVtZW50c1tpXSA9IHtcbiAgICAgICAgICBvcmlnaW5hbERhdGFTaXplLFxuICAgICAgICAgIGNvbnZlcnRlZEltYWdlLFxuICAgICAgICAgIGNvbnZlcnRlZERhdGFTaXplLFxuICAgICAgICAgIG9yaWdpbmFsSW1hZ2UsIC8vIFN0b3JlIHRoZSBvcmlnaW5hbCBpbWFnZSBlbGVtZW50XG4gICAgICAgICAgb3JpZ2luYWxJbWFnZVVSTDogbnVsbCxcbiAgICAgICAgICB3ZWJwSW1hZ2VVUkw6IG51bGwsIC8vIFRoaXMgd2lsbCBiZSB1cGRhdGVkIG9uY2Ugd2UgaGF2ZSB0aGUgaW1hZ2UgcHJvY2Vzc2VkLlxuICAgICAgICAgIGltYWdlSW5kZXg6IGksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKFwiT3JpZ2luYWwgRGF0YSBTaXplIGZvciBpbWFnZVwiLCBpLCBcIjpcIiwgaW1hZ2VFbGVtZW50c1tpXS5vcmlnaW5hbERhdGFTaXplKTtcbiAgXG4gICAgICAgIC8vIFByb2Nlc3MgaW1hZ2UgYW5kIHVwZGF0ZSBlbGVtZW50c1xuICAgICAgICBwcm9jZXNzSW1hZ2UoZXZlbnQsIGZpbGUsIG9yaWdpbmFsRGF0YVNpemUsIGNvbnZlcnRlZEltYWdlLCBjb252ZXJ0ZWREYXRhU2l6ZSwgc2xpZGVyVmFsdWUsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cC1jYXJkJyksIGkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyAhUHJvY2VzcyBJbWFnZVxuICAgZnVuY3Rpb24gcHJvY2Vzc0ltYWdlKGV2ZW50LCBmaWxlLCBvcmlnaW5hbERhdGFTaXplLCBjb252ZXJ0ZWRJbWFnZSwgY29udmVydGVkRGF0YVNpemUsIHNsaWRlclZhbHVlLCBwb3B1cCwgaW1hZ2VJbmRleCkge1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGNvbnNvbGUubG9nKCdwcm9jZXNzaW5nIGltYWdlOiAnLCBmaWxlKVxuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICBsZXQgb3JpZ2luYWxJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIG9yaWdpbmFsSW1hZ2Uuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcblxuICAgIG9yaWdpbmFsSW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICBjYW52YXMud2lkdGggPSBvcmlnaW5hbEltYWdlLndpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IG9yaWdpbmFsSW1hZ2UuaGVpZ2h0O1xuICAgICAgY3R4LmRyYXdJbWFnZShvcmlnaW5hbEltYWdlLCAwLCAwKTtcblxuICAgICAgLy8gKkNvbnZlcnQgY2FudmFzIHRvIFdlYlBcbiAgICAgIGNhbnZhcy50b0Jsb2IoXG4gICAgICAgIGZ1bmN0aW9uKGJsb2IpIHtcbiAgICAgICAgICAvL0NhbGN1bGF0ZSB0aGUgZmlsZSBzaXplIG9mIHRoZSBXZWJQIEltYWdlXG4gICAgICAgICAgY29uc3QgZmlsZVNpemVLQiA9IGJsb2Iuc2l6ZSAvIDEwMjQ7XG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCB3ZWJwSW1hZ2UgPSByZWFkZXIucmVzdWx0O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBVcGRhdGUgd2VicCBpbWFnZSBlbGVtZW50cy5cbiAgICAgICAgICAgIC8vIGNvbnN0IGltYWdlSW5kZXggPSBpbWFnZXNQcm9jZXNzZWQrKztcbiAgICAgICAgICAgIC8vIGNvbnN0IGRhdGFJbmRleCA9IGltYWdlRWxlbWVudHNbaW1hZ2VJbmRleF0uZGF0YUluZGV4O1xuICAgICAgICAgICAgY29udmVydGVkSW1hZ2UuZGF0YXNldC5pbmRleCA9IGltYWdlSW5kZXg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpbWFnZUVsZW1lbnRzW2ltYWdlSW5kZXhdLm9yaWdpbmFsSW1hZ2VVUkwgPSBvcmlnaW5hbEltYWdlOyBcbiAgICAgICAgICAgIGltYWdlRWxlbWVudHNbaW1hZ2VJbmRleF0ud2VicEltYWdlVVJMID0gd2VicEltYWdlOyAvL1N0b3JlIHRoZSBjb252ZXJ0ZWQgV2ViUCBpbWFnZSBVUkwgaGVyZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAqVXBkYXRlIGZpbGUgc2l6ZSBlbGVtZW50cyBhbmQgY29udmVydGVkIGltYWdlIGRhdGFcbiAgICAgICAgICAgIG9yaWdpbmFsRGF0YVNpemUuaW5uZXJUZXh0ID0gJ09yaWdpbmFsIEZpbGUgU2l6ZTogJyArIGZpbGUuc2l6ZSArICcgYnl0ZXMnO1xuICAgICAgICAgICAgY29udmVydGVkRGF0YVNpemUuaW5uZXJUZXh0ID0gJ0NvbnZlcnRlZCBGaWxlIFNpemU6ICcgKyBmaWxlU2l6ZUtCLnRvRml4ZWQoMikgKyAnIEtCJztcbiAgICAgICAgICAgIGNvbnZlcnRlZEltYWdlLnNyYyA9IHdlYnBJbWFnZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gKlN0b3JlIFdlYlAgaW1hZ2UgZGF0YSB3aXRoIG9yaWdpbmFsIGZpbGVuYW1lXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbEZpbGVuYW1lID0gZmlsZS5uYW1lO1xuICAgICAgICAgICAgY29uc3Qgd2VicEZpbGVuYW1lID0gZ2V0V2VicEZpbGVuYW1lKG9yaWdpbmFsRmlsZW5hbWUpO1xuICAgICAgICAgICAgd2VicEltYWdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgbmFtZTogb3JpZ2luYWxGaWxlbmFtZSxcbiAgICAgICAgICAgICAgZGF0YTogd2VicEltYWdlLFxuICAgICAgICAgICAgICBvcmlnaW5hbEJsb2I6IGZpbGUsIC8vU3RvcmUgdGhlIG9yaWdpbmFsIGltYWdlIGJsb2IgZm9yIHJlbmRlciBwdXJwb3Nlc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpbWFnZUVsZW1lbnRzW2ltYWdlSW5kZXhdLm9yaWdpbmFsRmlsZW5hbWUgPSBvcmlnaW5hbEZpbGVuYW1lO1xuICAgICAgICAgICAgLy8gaW1hZ2VzUHJvY2Vzc2VkKys7IC8vICpnZXQgdGhlIGltYWdlIGluZGV4IGZyb20gdGhlIGltYWdlc1Byb2Nlc3NlZCBjb3VudGVyXG4gICAgICAgICAgICBpbWFnZXNQcm9jZXNzZWQrKztcblxuICAgICAgICAgICAgY29udmVydGVkSW1hZ2UuZGF0YXNldC5pbmRleCA9IGltYWdlSW5kZXg7XG4gICAgICAgICAgICBpbWFnZUVsZW1lbnRzW2ltYWdlSW5kZXhdLm9yaWdpbmFsSW1hZ2VVUkwgPSBvcmlnaW5hbEltYWdlO1xuICAgICAgICAgICAgaW1hZ2VFbGVtZW50c1tpbWFnZUluZGV4XS53ZWJwSW1hZ2VVUkwgPSB3ZWJwSW1hZ2U7XG4gICAgICAgICAgXG4gICAgICAgICAgICAvLyAqU3RvcmUgV2ViUCBpbWFnZSBkYXRhXG4gICAgICAgICAgICB3ZWJwSW1hZ2VzW2ltYWdlSW5kZXhdID0geyBuYW1lOiBvcmlnaW5hbEZpbGVuYW1lLCBkYXRhOiB3ZWJwSW1hZ2UsIGZpbGVuYW1lOiB3ZWJwRmlsZW5hbWUsIG9yaWdpbmFsQmxvYjpmaWxlIH07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh3ZWJwSW1hZ2VzKVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vICpDaGVjayB0byBlbnN1cmUgYWxsIGltYWdlcyBoYXZlIGJlZW4gdXBsb2FkZWQgYW5kIGNvbnZlcnRlZFxuICAgICAgICAgICAgaWYgKGltYWdlc1Byb2Nlc3NlZCA9PT0gZXZlbnQudGFyZ2V0LmZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICByZW5kZXJXZWJwSW1hZ2VzKCk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlbmRlcldlYnBJbWFnZXMoKSlcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGlmIChpbWFnZXNQcm9jZXNzZWQgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk51bWJlciBvZiBmaWxlcyB1cGxvYWRlZDpcIiwgaW1hZ2VzUHJvY2Vzc2VkKTtcbiAgICAgICAgICAgICAgICBkb3dubG9hZEJ1dHRvblNpbmdsZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICBkb3dubG9hZEJ1dHRvbk11bHRpcGxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG93bmxvYWRCdXR0b25TaW5nbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBkb3dubG9hZEJ1dHRvbk11bHRpcGxlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBlbmRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgY29uc3QgcHJvY2Vzc2luZ1RpbWUgPSBlbmRUaW1lIC0gc3RhcnRUaW1lO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdQcm9jZXNzaW5nIHRpbWU6JywgcHJvY2Vzc2luZ1RpbWUpO1xuICAgICAgICB9O1xuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICAgIH0sICdpbWFnZS93ZWJwJywgc2xpZGVyVmFsdWUpO1xuICAgIH07XG4gIH1cblxuICAvLyAqVXBkYXRlIHRoZSBzbGlkZXIgdmFsdWUgZGlzcGxheVxuICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyJyk7XG4gIGNvbnN0IHNsaWRlclZhbHVlRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZXJWYWx1ZScpO1xuICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICBzbGlkZXJWYWx1ZURpc3BsYXkudGV4dENvbnRlbnQgPSB0aGlzLnZhbHVlO1xuICB9KTtcblxuICBmdW5jdGlvbiBnZXRXZWJwRmlsZW5hbWUob3JpZ2luYWxGaWxlbmFtZSkge1xuICAgIGNvbnN0IGV4dGVuc2lvbkluZGV4ID0gb3JpZ2luYWxGaWxlbmFtZS5sYXN0SW5kZXhPZignLicpO1xuICAgIGNvbnN0IGZpbGVuYW1lID0gb3JpZ2luYWxGaWxlbmFtZS5zdWJzdHJpbmcoMCwgZXh0ZW5zaW9uSW5kZXgpO1xuICAgIHJldHVybiBmaWxlbmFtZSArICcud2VicCc7XG4gIH1cblxuXG4gIC8vICFSZW5kZXIgV2VicCBpbWFnZXMgYW5kIGRhdGFcbiAgZnVuY3Rpb24gcmVuZGVyV2VicEltYWdlcygpIHtcblxuICAgIGNvbnN0IG1hdGNoZWRBcnJheSA9IHdlYnBJbWFnZXMubWFwKCh3ZWJwSW1hZ2UsIGluZGV4KSA9PiAoe1xuICAgICAgLi4ud2VicEltYWdlLFxuICAgICAgLi4uaW1hZ2VFbGVtZW50c1tpbmRleF1cbiAgICB9KSk7XG4gICAgY29uc29sZS5sb2cobWF0Y2hlZEFycmF5KTtcblxuICAgIFxuXG4gICAgLy8gKkNsZWFyIHRoZSBleGlzdGluZyBpbWFnZXNcbiAgICBjb25zdCBzdHJlYW1saW5lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0cmVhbWxpbmUnKTtcbiAgICBzdHJlYW1saW5lQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnNvbGUubG9nKCdpcyBydW5uaW5nJyk7XG4gICAgXG4gICAgLy8gKlJlbmRlciBXZWJQIGltYWdlcyBpbiBvcmRlclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2VicEltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgeyBuYW1lLCBkYXRhLCBmaWxlbmFtZSwgb3JpZ2luYWxJbWFnZVVSTCwgb3JpZ2luYWxCbG9iLCBvcmlnaW5hbERhdGFTaXplLCBjb252ZXJ0ZWRJbWFnZSwgY29udmVydGVkRGF0YVNpemUgfSA9IG1hdGNoZWRBcnJheVtpXTtcblxuICAgICAgaWYgKGNvbnZlcnRlZEltYWdlICYmIG9yaWdpbmFsRGF0YVNpemUgJiYgY29udmVydGVkRGF0YVNpemUpIHtcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lUmVuZGVyaW5nID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZW5kZXJpbmcgd2VicDogJywgZmlsZW5hbWUpXG4gICAgICBcbiAgICAgICAgLy8gKkNyZWF0ZSBhIGRpdiB0byBob2xkIGVhY2ggaW1hZ2UncyBjb250ZW50XG4gICAgICAgIGNvbnN0IGZpbGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZpbGVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2ZpbGUtd3JhcHBlcicpO1xuICAgICAgICBcbiAgICAgICAgLy8gKlNob3cgZmlsZSBuYW1lXG4gICAgICAgIGNvbnN0IGZpbGVOYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgZmlsZU5hbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0ZpbGUgTmFtZTonICsgJyAnKTtcbiAgICAgICAgLy8gKmNvbnN0IGJyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgIGNvbnN0IGZpbGVuYW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGZpbGVuYW1lKTtcblxuICAgICAgICBmaWxlTmFtZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZmlsZU5hbWVUZXh0KTtcbiAgICAgICAgLy8gKmZpbGVOYW1lRWxlbWVudC5hcHBlbmRDaGlsZChickVsZW1lbnQpO1xuICAgICAgICBmaWxlTmFtZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZmlsZW5hbWVUZXh0KTtcbiAgICBcbiAgICAgICAgZmlsZU5hbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZpbGVuYW1lLXdyYXBwZXInKTtcbiAgICAgICAgZmlsZVdyYXBwZXIuYXBwZW5kQ2hpbGQoZmlsZU5hbWVFbGVtZW50KTtcblxuICAgICAgICBjb25zdCBmaWxlV3JhcHBlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmaWxlV3JhcHBlclJvdy5jbGFzc0xpc3QuYWRkKCdmaWxlLXdyYXBwZXItcm93JylcblxuICAgICAgICAvLyAqU2hvdyBXZWJQIGltYWdlXG4gICAgICAgIGNvbnZlcnRlZEltYWdlLnNyYyA9IGRhdGE7XG4gICAgICAgIGNvbnZlcnRlZEltYWdlLmFsdCA9IG5hbWU7IC8vICpTZXQgdGhlIGFsdCBhdHRyaWJ1dGUgdG8gdGhlIG9yaWdpbmFsIGZpbGVuYW1lXG4gICAgICAgIGZpbGVXcmFwcGVyUm93LmFwcGVuZENoaWxkKGNvbnZlcnRlZEltYWdlKTtcblxuICAgICAgXG4gICAgICAgIC8vICpTaG93IGZpbGUgc2l6ZXNcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxGaWxlU2l6ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgb3JpZ2luYWxGaWxlU2l6ZS5pbm5lclRleHQgPSBvcmlnaW5hbERhdGFTaXplLmlubmVyVGV4dDtcbiAgICAgICAgb3JpZ2luYWxGaWxlU2l6ZS5jbGFzc0xpc3QuYWRkKCdkYXRhLXdyYXBwZXInKTtcbiAgICAgICAgZmlsZVdyYXBwZXJSb3cuYXBwZW5kQ2hpbGQob3JpZ2luYWxGaWxlU2l6ZSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjb252ZXJ0ZWRGaWxlU2l6ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29udmVydGVkRmlsZVNpemUuaW5uZXJUZXh0ID0gY29udmVydGVkRGF0YVNpemUuaW5uZXJUZXh0O1xuICAgICAgICBjb252ZXJ0ZWRGaWxlU2l6ZS5jbGFzc0xpc3QuYWRkKCdkYXRhLXdyYXBwZXInKTtcbiAgICAgICAgZmlsZVdyYXBwZXJSb3cuYXBwZW5kQ2hpbGQoY29udmVydGVkRmlsZVNpemUpO1xuXG5cbiAgICAgICAgLy8gKkNyZWF0ZSBhIENvbXBhcmlzb24gQnV0dG9uXG4gICAgICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwLWNhcmQnKTtcbiAgICAgICAgY29uc3QgY29tcGFyaXNvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb21wYXJpc29uQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NvbXBhcmUtYnV0dG9uJyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBjb21wYXJpc29uQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBjb21wYXJpc29uQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbXBhcmUtYnV0dG9uJyk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgY29uc3QgY29tcGFyaXNvbkJ1dHRvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgIGNvbXBhcmlzb25CdXR0b25JY29uLmNsYXNzTGlzdC5hZGQoJ2ZhcycsICdmYS1pbmZvLWNpcmNsZScpO1xuICAgICAgICBjb21wYXJpc29uQnV0dG9uSWNvbi5kYXRhc2V0LmluZGV4ID0gaTsgLy8gU2V0IGRhdGEtaW5kZXggYXR0cmlidXRlIGRpcmVjdGx5XG5cbiAgICAgICAgY29tcGFyaXNvbkJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wYXJpc29uQnV0dG9uSWNvbik7XG5cblxuICAgICAgICBjb21wYXJpc29uQnV0dG9uSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICBjb25zdCBpbWFnZXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2UtY29udGFpbmVyJyk7XG4gICAgICAgICAgY29uc3QgYmVmb3JlSW1hZ2UgPSBpbWFnZXNDb250YWluZXIucXVlcnlTZWxlY3RvcignLmltYWdlLWJlZm9yZScpO1xuICAgICAgICAgIGNvbnN0IGFmdGVySW1hZ2UgPSBpbWFnZXNDb250YWluZXIucXVlcnlTZWxlY3RvcignLmltYWdlLWFmdGVyJyk7XG5cbiAgICAgICAgICBpZiAoYmVmb3JlSW1hZ2UgJiYgYWZ0ZXJJbWFnZSkge1xuICAgICAgICAgICAgaW1hZ2VzQ29udGFpbmVyLnJlbW92ZUNoaWxkKGJlZm9yZUltYWdlKTtcbiAgICAgICAgICAgIGltYWdlc0NvbnRhaW5lci5yZW1vdmVDaGlsZChhZnRlckltYWdlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gVXNlIGUudGFyZ2V0IHRvIGdldCB0aGUgZWxlbWVudCB0aGF0IHRyaWdnZXJlZCB0aGUgZXZlbnRcbiAgICAgICAgICAgIGNvbnN0IGRhdGFJbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXg7IC8vIEFjY2VzcyB0aGUgZGF0YS1pbmRleCBkaXJlY3RseVxuXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbEltYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgb3JpZ2luYWxJbWFnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW1hZ2UtYmVmb3JlJyk7XG4gICAgICAgICAgICBvcmlnaW5hbEltYWdlRWxlbWVudC5hbHQgPSAnb3JpZ2luYWwgaW1hZ2UnO1xuICAgICAgICAgICAgb3JpZ2luYWxJbWFnZUVsZW1lbnQuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChtYXRjaGVkQXJyYXlbZGF0YUluZGV4XS5vcmlnaW5hbEJsb2IpO1xuXG4gICAgICAgICAgICBpbWFnZXNDb250YWluZXIuYXBwZW5kQ2hpbGQob3JpZ2luYWxJbWFnZUVsZW1lbnQpO1xuXG4gICAgICAgICAgICBjb25zdCBjb252ZXJ0ZWRJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGNvbnZlcnRlZEltYWdlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbWFnZS1hZnRlcicpO1xuICAgICAgICAgICAgY29udmVydGVkSW1hZ2VFbGVtZW50LmFsdCA9ICdjb252ZXJ0ZWQgaW1hZ2UnO1xuICAgICAgICAgICAgY29udmVydGVkSW1hZ2VFbGVtZW50LnNyYyA9IGRhdGE7XG4gICAgICAgICAgICBpbWFnZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udmVydGVkSW1hZ2VFbGVtZW50KTtcblxuXG4gICAgICAgICAgICAvLyAhUmVtb3ZlIHByZXZpb3VzbHkgZ2VuZXJhdGVkIGVsZW1lbnRzIGlmIHRoZXkgZXhpc3RcbiAgICAgICAgICAgIGNvbnN0IHByZXZDb21wYXJpc29uUmFuZ2VTbGlkZXJzID0gaW1hZ2VzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wYXJpc29uLXNsaWRlcicpO1xuICAgICAgICAgICAgY29uc3QgcHJldlNsaWRlckxpbmVzID0gaW1hZ2VzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXItbGluZScpO1xuICAgICAgICAgICAgY29uc3QgcHJldlNsaWRlckJ1dHRvbnMgPSBpbWFnZXNDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlci1idXR0b24nKTtcblxuICAgICAgICAgICAgcHJldkNvbXBhcmlzb25SYW5nZVNsaWRlcnMuZm9yRWFjaChzbGlkZXIgPT4gc2xpZGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2xpZGVyKSk7XG4gICAgICAgICAgICBwcmV2U2xpZGVyTGluZXMuZm9yRWFjaChsaW5lID0+IGxpbmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5lKSk7XG4gICAgICAgICAgICBwcmV2U2xpZGVyQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChidXR0b24pKTtcblxuICAgICAgICAgICAgY29uc3QgY29tcGFyaXNvblJhbmdlU2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGNvbXBhcmlzb25SYW5nZVNsaWRlci50eXBlID0gJ3JhbmdlJztcbiAgICAgICAgICAgIGNvbXBhcmlzb25SYW5nZVNsaWRlci5taW4gPSAnMCc7XG4gICAgICAgICAgICBjb21wYXJpc29uUmFuZ2VTbGlkZXIubWF4ID0gJzEwMCc7XG4gICAgICAgICAgICBjb21wYXJpc29uUmFuZ2VTbGlkZXIudmFsdWUgPSAnNTAlJztcbiAgICAgICAgICAgIGNvbXBhcmlzb25SYW5nZVNsaWRlci5jbGFzc0xpc3QuYWRkKCdjb21wYXJpc29uLXNsaWRlcicpO1xuICAgICAgICAgICAgY29tcGFyaXNvblJhbmdlU2xpZGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdQZXJjZW50YWdlIG9mIGJlZm9yZSBwaG90byBzaG93bicpO1xuICAgICAgICAgICAgaW1hZ2VzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBhcmlzb25SYW5nZVNsaWRlcik7XG5cbiAgICAgICAgICAgIGNvbnN0IHNsaWRlckxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHNsaWRlckxpbmUuY2xhc3NMaXN0LmFkZCgnc2xpZGVyLWxpbmUnKTtcbiAgICAgICAgICAgIGltYWdlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzbGlkZXJMaW5lKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgc2xpZGVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHNsaWRlckJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2xpZGVyLWJ1dHRvblwiLCBcImZhc1wiLCBcImZhLWFycm93cy1hbHQtaFwiKTtcbiAgICAgICAgICAgIGltYWdlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzbGlkZXJCdXR0b24pO1xuXG4gICAgICAgICAgICAvLyAhU2xpZGVyIEZ1bmN0aW9uYWxpdHlcbiAgICAgICAgICAgIGNvbnN0IENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbWFnZS1jb250YWluZXInKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY29tcGFyaXNvblNsaWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsICgnLmNvbXBhcmlzb24tc2xpZGVyJyk7XG5cbiAgICAgICAgICAgIGNvbXBhcmlzb25TbGlkZXJzLmZvckVhY2goY29tcGFyaXNvblNsaWRlciA9PiB7XG4gICAgICAgICAgICAgIGNvbXBhcmlzb25TbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIENvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wb3NpdGlvbicsIGAke2UudGFyZ2V0LnZhbHVlfSVgKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcblxuICAgICAgICAgIC8vICFQb3B1cCBDYXJkXG4gICAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBQb3B1cENhcmQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICAgICAgUG9wdXBDYXJkLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTsgIFxuXG4gICAgICAgICAgICBjb21wYXJpc29uU2xpZGVycy5mb3JFYWNoKGNvbXBhcmlzb25TbGlkZXIgPT4ge1xuICAgICAgICAgICAgICBjb21wYXJpc29uU2xpZGVyLnZhbHVlID0gNTA7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZmlsZVdyYXBwZXJSb3cuYXBwZW5kQ2hpbGQoY29tcGFyaXNvbkJ1dHRvbkNvbnRhaW5lcik7XG5cbiAgICBcbiAgICAgICAgLy8gKkNyZWF0ZSBhIGJ1dHRvbiBmb3IgaW5kaXZpZHVhbCBkb3dubG9hZFxuICAgICAgICBjb25zdCBkb3dubG9hZEJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkb3dubG9hZEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzaW5nbGUtZG93bmxvYWQnKTtcbiAgICAgICAgY29uc3QgZG93bmxvYWRCdXR0b25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAvLyBkb3dubG9hZEJ1dHRvbi5pbm5lclRleHQgPSAnRG93bmxvYWQnO1xuICAgICAgICBkb3dubG9hZEJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCgnZmFzJywgJ2ZhLWRvd25sb2FkJyk7XG4gICAgICAgIFxuICAgICAgICBkb3dubG9hZEJ1dHRvbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkb3dubG9hZFdlYnBJbWFnZShkYXRhLCBuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvd25sb2FkQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvd25sb2FkQnV0dG9uSWNvbik7XG4gICAgICAgIGZpbGVXcmFwcGVyUm93LmFwcGVuZENoaWxkKGRvd25sb2FkQnV0dG9uQ29udGFpbmVyKTtcbiAgICAgIFxuICAgICAgICAvLyAqQWRkIHRoZSBpbWFnZSBjb250ZW50IHRvIHRoZSBzdHJlYW1saW5lIGNvbnRhaW5lclxuICAgICAgICBzdHJlYW1saW5lQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpbGVXcmFwcGVyKTtcbiAgICAgICAgc3RyZWFtbGluZUNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWxlV3JhcHBlclJvdyk7XG5cbiAgICAgICAgY29uc3QgZW5kVGltZVJlbmRlcmluZyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICBjb25zdCBwcm9jZXNzaW5nVGltZVJlbmRlcmluZyA9IGVuZFRpbWVSZW5kZXJpbmcgLSBzdGFydFRpbWVSZW5kZXJpbmc7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZW5kZXJpbmcgdGltZTonLCBwcm9jZXNzaW5nVGltZVJlbmRlcmluZyk7XG4gICAgICB9IGVsc2Uge1xuICBcbiAgICAgICAgY29uc29sZS5sb2coYFNraXBwaW5nIHJlbmRlcmluZyBmb3IgaW1hZ2UgJHtpfSBkdWUgdG8gbWlzc2luZyBlbGVtZW50c2ApIFxuICAgICAgICAvLyAqSGlkZSBzbGlkZXIgYWZ0ZXIgY29udmVyc2lvblxuICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3Qgc2xpZGVyV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItd3JhcHBlcicpO1xuICAgICAgc2xpZGVyV3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAgIFxuICB9XG5cbiAgXG4gIGFzeW5jIGZ1bmN0aW9uIGRvd25sb2FkV2VicEltYWdlKGRhdGFVUkksIGZpbGVuYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVVSSSk7XG4gICAgICBjb25zdCBibG9iID0gYXdhaXQgcmVzcG9uc2UuIGJsb2IoKTtcbiAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cbiAgICAgIGNvbnN0IGRvd25sb2FkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGRvd25sb2FkTGluay5ocmVmID0gdXJsO1xuICAgICAgZG93bmxvYWRMaW5rLmRvd25sb2FkID0gZmlsZW5hbWUucmVwbGFjZSgvXFwuW14vLl0rJC8sIFwiXCIpICsgXCIud2VicFwiOyAvLyAqUmVtb3ZlIHRoZSBmaWxlIGV4dGVuc2lvbiBhbmQgYWRkIC53ZWJwXG4gICAgICBkb3dubG9hZExpbmsuY2xpY2soKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZG93bmxvYWRpbmcgaW1hZ2UnLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZG93bmxvYWRJbWFnZXMgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAod2VicEltYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoZG93bmxvYWRCdXR0b25TaW5nbGUuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAvLyAqRG93bmxvYWQgc2luZ2xlIGZpbGVcbiAgICAgICAgY29uc3QgeyBuYW1lLCBkYXRhIH0gPSB3ZWJwSW1hZ2VzWzBdO1xuICAgICAgICBjb25zdCBmaWxlTmFtZSA9IGdldFdlYnBGaWxlbmFtZShuYW1lKTtcbiAgICAgICAgY29uc3QgZG93bmxvYWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICBkb3dubG9hZExpbmsuaHJlZiA9IGRhdGE7XG4gICAgICAgIGRvd25sb2FkTGluay5kb3dubG9hZCA9IGZpbGVOYW1lO1xuICAgICAgICBkb3dubG9hZExpbmsuY2xpY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHppcCA9IG5ldyBKU1ppcCgpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2VicEltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHsgbmFtZSwgZGF0YSB9ID0gd2VicEltYWdlc1tpXTtcbiAgICAgICAgICBjb25zdCBmaWxlTmFtZSA9IGdldFdlYnBGaWxlbmFtZShuYW1lKTsgLy8gKlVzZSB0aGUgb3JpZ2luYWwgZmlsZW5hbWUgZm9yIHRoZSBXZWJQIGZpbGVcblxuICAgICAgICAgIHppcC5maWxlKGZpbGVOYW1lLCBkYXRhLnNwbGl0KCcsJylbMV0sIHsgYmFzZTY0OiB0cnVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgemlwLmdlbmVyYXRlQXN5bmMoeyB0eXBlOiAnYmxvYicgfSkudGhlbihmdW5jdGlvbihjb250ZW50KSB7XG4gICAgICAgICAgY29uc3QgZG93bmxvYWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgIGRvd25sb2FkTGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChjb250ZW50KTtcbiAgICAgICAgICBkb3dubG9hZExpbmsuZG93bmxvYWQgPSAnd2VicF9pbWFnZXMuemlwJztcbiAgICAgICAgICBkb3dubG9hZExpbmsuY2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNvbnZlcnRJbWFnZXMpO1xuICBkb3dubG9hZEJ1dHRvblNpbmdsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvd25sb2FkSW1hZ2VzKTtcbiAgZG93bmxvYWRCdXR0b25NdWx0aXBsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvd25sb2FkSW1hZ2VzKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==