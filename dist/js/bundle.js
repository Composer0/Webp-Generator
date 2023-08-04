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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

  var convertImages =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(event) {
      var sliderValue, _slider, _sliderValueDisplay, i, file, originalDataSize, convertedImage, convertedDataSize, originalImage;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!isImageProcessing) {
              _context.next = 3;
              break;
            }

            console.log("Ongoing image processing. Please wait...");
            return _context.abrupt("return");

          case 3:
            if (!(event.target.files.length > 0)) {
              _context.next = 26;
              break;
            }

            // Reset webpImages array
            webpImages.length = 0;
            imagesProcessed = 0;
            isImageProcessing = true; // Slider Value

            sliderValue = parseFloat(document.getElementById('slider').value); // Default value for the slider

            _slider = document.getElementById('slider');
            _sliderValueDisplay = document.getElementById('sliderValue');

            _slider.addEventListener('input', function () {
              sliderValue = parseFloat(this.value);
              _sliderValueDisplay.textContent = sliderValue;
            });

            i = 0;

          case 12:
            if (!(i < event.target.files.length)) {
              _context.next = 26;
              break;
            }

            file = event.target.files[i]; // Create elements for file sizes and converted image data

            originalDataSize = document.createElement('span');
            convertedImage = document.createElement('img');
            convertedImage.classList.add('webp-image');
            convertedDataSize = document.createElement('span'); // Create image element to store the original image

            originalImage = new Image();
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
            }; // Process image and update elements

            _context.next = 23;
            return processImage(event, file, originalDataSize, convertedImage, convertedDataSize, sliderValue, document.getElementById('popup-card'), i);

          case 23:
            i++;
            _context.next = 12;
            break;

          case 26:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));

    return function convertImages(_x) {
      return _ref.apply(this, arguments);
    };
  }(); // !Process Image


  function processImage(_x2, _x3, _x4, _x5, _x6, _x7, _x8, _x9) {
    return _processImage.apply(this, arguments);
  } // *Update the slider value display


  function _processImage() {
    _processImage = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(event, file, originalDataSize, convertedImage, convertedDataSize, sliderValue, popup, imageIndex) {
      var startTime, canvas, ctx, originalImage, originalImageURL;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
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
                  imageElements[imageIndex].originalImageURL = originalImage;
                  imageElements[imageIndex].webpImageURL = webpImage; //Store the converted WebP image URL here
                  // *Update file size elements and converted image data

                  originalDataSize.innerText = 'Original File Size: ' + file.size + ' bytes';
                  convertedDataSize.innerText = 'Converted File Size: ' + fileSizeKB.toFixed(2) + ' KB';
                  convertedImage.src = webpImage; // *Store WebP image data with original filename

                  var originalFilename = file.name;
                  var webpFilename = getWebpFilename(originalFilename);
                  imageElements[imageIndex].originalFilename = originalFilename; // imagesProcessed++; // *get the image index from the imagesProcessed counter

                  convertedImage.dataset.index = imageIndex;
                  imageElements[imageIndex].originalImageURL = originalImage;
                  imageElements[imageIndex].webpImageURL = webpImage; // *Store WebP image data

                  webpImages[imageIndex] = {
                    name: originalFilename,
                    data: webpImage,
                    filename: webpFilename
                  };
                  imagesProcessed++; // *Check to ensure all images have been uploaded and converted

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
            _context2.next = 10;
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
            return _context2.stop();
        }
      }, _callee2);
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
      return a.originalImageURL.src.localeCompare(b.originalImageURL.src);
    });
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
          originalImageURL = _matchedArray$i.originalImageURL;
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
          originalImageElement.alt = 'original image'; // originalImageElement.src = matchedArray[dataIndex].originalImageURL;

          originalImageElement.src = originalImageURL.src;
          imagesContainer.appendChild(originalImageElement);
          var convertedImageElement = document.createElement('img');
          convertedImageElement.classList.add('image-after');
          convertedImageElement.alt = 'converted image'; // convertedImageElement.src = matchedArray[dataIndex].data;

          convertedImageElement.src = data;
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

  function downloadWebpImage(_x10, _x11) {
    return _downloadWebpImage.apply(this, arguments);
  }

  function _downloadWebpImage() {
    _downloadWebpImage = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3(dataURI, filename) {
      var response, blob, url, downloadLink;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return fetch(dataURI);

          case 3:
            response = _context3.sent;
            _context3.next = 6;
            return response.blob();

          case 6:
            blob = _context3.sent;
            url = URL.createObjectURL(blob);
            downloadLink = document.createElement('a');
            downloadLink.href = url;
            downloadLink.download = filename.replace(/\.[^/.]+$/, "") + ".webp"; // *Remove the file extension and add .webp

            downloadLink.click();
            _context3.next = 17;
            break;

          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](0);
            console.error('Error downloading image', _context3.t0);

          case 17:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 14]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhcnRzL2NvbXBhcmlzb24tc2xpZGVyLmpzIl0sIm5hbWVzIjpbInJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZGVzYyIsInZhbHVlIiwidW5kZWZpbmVkIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkdlblN0YXRlU3VzcGVuZGVkU3RhcnQiLCJHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkIiwiR2VuU3RhdGVFeGVjdXRpbmciLCJHZW5TdGF0ZUNvbXBsZXRlZCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRpc3BsYXlOYW1lIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiX19hd2FpdCIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJlbnF1ZXVlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwibmV4dCIsImRvbmUiLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJtZXRob2ROYW1lIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsImxlbmd0aCIsInBvcCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImkiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RFbnRyeSIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwibW9kdWxlIiwicmVnZW5lcmF0b3JSdW50aW1lIiwiYWNjaWRlbnRhbFN0cmljdE1vZGUiLCJnbG9iYWxUaGlzIiwiRnVuY3Rpb24iLCJ3ZWJwYWNrUG9seWZpbGwiLCJkZXByZWNhdGUiLCJwYXRocyIsImNoaWxkcmVuIiwiZ2V0IiwibCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIndlYnBJbWFnZXMiLCJkb3dubG9hZEJ1dHRvblNpbmdsZSIsInF1ZXJ5U2VsZWN0b3IiLCJkb3dubG9hZEJ1dHRvbk11bHRpcGxlIiwiaW5wdXRFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbWFnZXNQcm9jZXNzZWQiLCJpbWFnZUVsZW1lbnRzIiwiaXNJbWFnZVByb2Nlc3NpbmciLCJjb252ZXJ0SW1hZ2VzIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiZmlsZXMiLCJzbGlkZXJWYWx1ZSIsInBhcnNlRmxvYXQiLCJzbGlkZXIiLCJzbGlkZXJWYWx1ZURpc3BsYXkiLCJ0ZXh0Q29udGVudCIsImZpbGUiLCJvcmlnaW5hbERhdGFTaXplIiwiY3JlYXRlRWxlbWVudCIsImNvbnZlcnRlZEltYWdlIiwiY2xhc3NMaXN0IiwiYWRkIiwiY29udmVydGVkRGF0YVNpemUiLCJvcmlnaW5hbEltYWdlIiwiSW1hZ2UiLCJzcmMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJvcmlnaW5hbEltYWdlVVJMIiwid2VicEltYWdlVVJMIiwiaW1hZ2VJbmRleCIsInByb2Nlc3NJbWFnZSIsInBvcHVwIiwic3RhcnRUaW1lIiwicGVyZm9ybWFuY2UiLCJub3ciLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0Iiwib25sb2FkIiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3SW1hZ2UiLCJ0b0Jsb2IiLCJibG9iIiwiZmlsZVNpemVLQiIsInNpemUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwid2VicEltYWdlIiwiZGF0YXNldCIsImluZGV4IiwiaW5uZXJUZXh0IiwidG9GaXhlZCIsIm9yaWdpbmFsRmlsZW5hbWUiLCJ3ZWJwRmlsZW5hbWUiLCJnZXRXZWJwRmlsZW5hbWUiLCJkYXRhIiwiZmlsZW5hbWUiLCJyZW5kZXJXZWJwSW1hZ2VzIiwic3R5bGUiLCJkaXNwbGF5IiwiZW5kVGltZSIsInByb2Nlc3NpbmdUaW1lIiwicmVhZEFzRGF0YVVSTCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZXh0ZW5zaW9uSW5kZXgiLCJsYXN0SW5kZXhPZiIsInN1YnN0cmluZyIsInNvcnQiLCJhIiwiYiIsImxvY2FsZUNvbXBhcmUiLCJtYXRjaGVkQXJyYXkiLCJtYXAiLCJzdHJlYW1saW5lQ29udGFpbmVyIiwiaW5uZXJIVE1MIiwiaW1hZ2VFbGVtZW50Iiwic3RhcnRUaW1lUmVuZGVyaW5nIiwiZmlsZVdyYXBwZXIiLCJmaWxlTmFtZUVsZW1lbnQiLCJmaWxlTmFtZVRleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImZpbGVuYW1lVGV4dCIsImFwcGVuZENoaWxkIiwiZmlsZVdyYXBwZXJSb3ciLCJhbHQiLCJvcmlnaW5hbEZpbGVTaXplIiwiY29udmVydGVkRmlsZVNpemUiLCJjb21wYXJpc29uQnV0dG9uIiwiZSIsImltYWdlc0NvbnRhaW5lciIsImJlZm9yZUltYWdlIiwiYWZ0ZXJJbWFnZSIsInJlbW92ZUNoaWxkIiwiZGF0YUluZGV4Iiwib3JpZ2luYWxJbWFnZUVsZW1lbnQiLCJjb252ZXJ0ZWRJbWFnZUVsZW1lbnQiLCJyZW1vdmUiLCJkb3dubG9hZEJ1dHRvbiIsImRvd25sb2FkV2VicEltYWdlIiwiZW5kVGltZVJlbmRlcmluZyIsInByb2Nlc3NpbmdUaW1lUmVuZGVyaW5nIiwic2xpZGVyV3JhcHBlciIsImRhdGFVUkkiLCJmZXRjaCIsInJlc3BvbnNlIiwidXJsIiwiZG93bmxvYWRMaW5rIiwiaHJlZiIsImRvd25sb2FkIiwicmVwbGFjZSIsImNsaWNrIiwiZG93bmxvYWRJbWFnZXMiLCJmaWxlTmFtZSIsInppcCIsIkpTWmlwIiwic3BsaXQiLCJiYXNlNjQiLCJnZW5lcmF0ZUFzeW5jIiwiY29udGVudCIsIkNvbnRhaW5lciIsImNsb3NlQnV0dG9uIiwiY29tcGFyaXNvblNsaWRlciIsInNldFByb3BlcnR5IiwicG9wdXBDYXJkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7O0FBT0EsSUFBSUEsT0FBTyxHQUFJLFVBQVVDLE9BQVYsRUFBbUI7QUFDaEM7O0FBRUEsTUFBSUMsRUFBRSxHQUFHQyxNQUFNLENBQUNDLFNBQWhCO0FBQ0EsTUFBSUMsTUFBTSxHQUFHSCxFQUFFLENBQUNJLGNBQWhCOztBQUNBLE1BQUlDLGNBQWMsR0FBR0os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Z0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsWUFBTTtBQUMzQyxNQUFNcUksU0FBUyxHQUFHdEksUUFBUSxDQUFDTyxjQUFULENBQXdCLFlBQXhCLENBQWxCO0FBQ0ErSCxXQUFTLENBQUM1RyxTQUFWLENBQW9CaUYsTUFBcEIsQ0FBMkIsTUFBM0I7QUFDQTJCLFdBQVMsQ0FBQzVHLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLE1BQXhCO0FBQ0EsQ0FKRCxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgfHwgZnVuY3Rpb24gKG9iaiwga2V5LCBkZXNjKSB7IG9ialtrZXldID0gZGVzYy52YWx1ZTsgfTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZGVmaW5lUHJvcGVydHkoZ2VuZXJhdG9yLCBcIl9pbnZva2VcIiwgeyB2YWx1ZTogbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB9KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBkZWZpbmVQcm9wZXJ0eShHcCwgXCJjb25zdHJ1Y3RvclwiLCB7IHZhbHVlOiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuICBkZWZpbmVQcm9wZXJ0eShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICBcImNvbnN0cnVjdG9yXCIsXG4gICAgeyB2YWx1ZTogR2VuZXJhdG9yRnVuY3Rpb24sIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9XG4gICk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9pbnZva2VcIiwgeyB2YWx1ZTogZW5xdWV1ZSB9KTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2ROYW1lID0gY29udGV4dC5tZXRob2Q7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZE5hbWVdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QsIG9yIGEgbWlzc2luZyAubmV4dCBtZWh0b2QsIGFsd2F5cyB0ZXJtaW5hdGUgdGhlXG4gICAgICAvLyB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgaWYgKG1ldGhvZE5hbWUgPT09IFwidGhyb3dcIiAmJiBkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWV0aG9kTmFtZSAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAnXCIgKyBtZXRob2ROYW1lICsgXCInIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24odmFsKSB7XG4gICAgdmFyIG9iamVjdCA9IE9iamVjdCh2YWwpO1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCBpbiBtb2Rlcm4gZW5naW5lc1xuICAvLyB3ZSBjYW4gZXhwbGljaXRseSBhY2Nlc3MgZ2xvYmFsVGhpcy4gSW4gb2xkZXIgZW5naW5lcyB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG4gIH0gZWxzZSB7XG4gICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0IFwiLi9wYXJ0cy9jb21wYXJpc29uLXNsaWRlclwiXG5pbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICBjb25zdCB3ZWJwSW1hZ2VzID0gW107XG4gIGNvbnN0IGRvd25sb2FkQnV0dG9uU2luZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkb3dubG9hZEJ1dHRvblNpbmdsZVwiKTtcbiAgY29uc3QgZG93bmxvYWRCdXR0b25NdWx0aXBsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZG93bmxvYWRCdXR0b25NdWx0aXBsZVwiKTtcbiAgY29uc3QgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlVXBsb2FkQnV0dG9uJyk7XG4gIGxldCBpbWFnZXNQcm9jZXNzZWQgPSAwO1xuICBjb25zdCBpbWFnZUVsZW1lbnRzID0gW107IC8vICpBcnJheSB0byBzdG9yZSBvcmlnaW5hbCBhbmQgY29udmVydGVkIGltYWdlIGVsZW1lbnRzXG4gIGxldCBpc0ltYWdlUHJvY2Vzc2luZyA9IGZhbHNlO1xuXG4gIGNvbnN0IGNvbnZlcnRJbWFnZXMgPSBhc3luYyBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChpc0ltYWdlUHJvY2Vzc2luZykge1xuICAgICAgY29uc29sZS5sb2coXCJPbmdvaW5nIGltYWdlIHByb2Nlc3NpbmcuIFBsZWFzZSB3YWl0Li4uXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgXG4gICAgaWYgKGV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBSZXNldCB3ZWJwSW1hZ2VzIGFycmF5XG4gICAgICB3ZWJwSW1hZ2VzLmxlbmd0aCA9IDA7XG4gICAgICBpbWFnZXNQcm9jZXNzZWQgPSAwO1xuICAgICAgaXNJbWFnZVByb2Nlc3NpbmcgPSB0cnVlO1xuICBcbiAgICAgIC8vIFNsaWRlciBWYWx1ZVxuICAgICAgbGV0IHNsaWRlclZhbHVlID0gcGFyc2VGbG9hdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyJykudmFsdWUpOyAvLyBEZWZhdWx0IHZhbHVlIGZvciB0aGUgc2xpZGVyXG4gICAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyJyk7XG4gICAgICBjb25zdCBzbGlkZXJWYWx1ZURpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpZGVyVmFsdWUnKTtcbiAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBzbGlkZXJWYWx1ZSA9IHBhcnNlRmxvYXQodGhpcy52YWx1ZSk7XG4gICAgICAgIHNsaWRlclZhbHVlRGlzcGxheS50ZXh0Q29udGVudCA9IHNsaWRlclZhbHVlO1xuICAgICAgfSk7XG4gIFxuICAgICAgXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1tpXTtcbiAgXG4gICAgICAgIC8vIENyZWF0ZSBlbGVtZW50cyBmb3IgZmlsZSBzaXplcyBhbmQgY29udmVydGVkIGltYWdlIGRhdGFcbiAgICAgICAgbGV0IG9yaWdpbmFsRGF0YVNpemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGxldCBjb252ZXJ0ZWRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb252ZXJ0ZWRJbWFnZS5jbGFzc0xpc3QuYWRkKCd3ZWJwLWltYWdlJyk7XG4gICAgICAgIGxldCBjb252ZXJ0ZWREYXRhU2l6ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgXG4gICAgICAgIC8vIENyZWF0ZSBpbWFnZSBlbGVtZW50IHRvIHN0b3JlIHRoZSBvcmlnaW5hbCBpbWFnZVxuICAgICAgICBsZXQgb3JpZ2luYWxJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBvcmlnaW5hbEltYWdlLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gIFxuICAgICAgICAvLyBTdG9yZSBpbWFnZSBhbmQgZGF0YSBzcGFuIGVsZW1lbnRzIGluIHRoZSBvYmplY3Qgd2l0aCB0aGUgc2FtZSBpZGVudGlmaWVyc1xuICAgICAgICBpbWFnZUVsZW1lbnRzW2ldID0ge1xuICAgICAgICAgIG9yaWdpbmFsRGF0YVNpemUsXG4gICAgICAgICAgY29udmVydGVkSW1hZ2UsXG4gICAgICAgICAgY29udmVydGVkRGF0YVNpemUsXG4gICAgICAgICAgb3JpZ2luYWxJbWFnZSwgLy8gU3RvcmUgdGhlIG9yaWdpbmFsIGltYWdlIGVsZW1lbnRcbiAgICAgICAgICBvcmlnaW5hbEltYWdlVVJMOiBudWxsLFxuICAgICAgICAgIHdlYnBJbWFnZVVSTDogbnVsbCwgLy8gVGhpcyB3aWxsIGJlIHVwZGF0ZWQgb25jZSB3ZSBoYXZlIHRoZSBpbWFnZSBwcm9jZXNzZWQuXG4gICAgICAgICAgaW1hZ2VJbmRleDogaSxcbiAgICAgICAgfTtcbiAgXG4gICAgICAgIC8vIFByb2Nlc3MgaW1hZ2UgYW5kIHVwZGF0ZSBlbGVtZW50c1xuICAgICAgICBhd2FpdCBwcm9jZXNzSW1hZ2UoZXZlbnQsIGZpbGUsIG9yaWdpbmFsRGF0YVNpemUsIGNvbnZlcnRlZEltYWdlLCBjb252ZXJ0ZWREYXRhU2l6ZSwgc2xpZGVyVmFsdWUsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cC1jYXJkJyksIGkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyAhUHJvY2VzcyBJbWFnZVxuICBhc3luYyBmdW5jdGlvbiBwcm9jZXNzSW1hZ2UoZXZlbnQsIGZpbGUsIG9yaWdpbmFsRGF0YVNpemUsIGNvbnZlcnRlZEltYWdlLCBjb252ZXJ0ZWREYXRhU2l6ZSwgc2xpZGVyVmFsdWUsIHBvcHVwLCBpbWFnZUluZGV4KSB7XG4gICAgY29uc3Qgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgY29uc29sZS5sb2coJ3Byb2Nlc3NpbmcgaW1hZ2U6ICcsIGZpbGUpXG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGxldCBvcmlnaW5hbEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgb3JpZ2luYWxJbWFnZS5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuXG4gICAgb3JpZ2luYWxJbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IG9yaWdpbmFsSW1hZ2Uud2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gb3JpZ2luYWxJbWFnZS5oZWlnaHQ7XG4gICAgICBjdHguZHJhd0ltYWdlKG9yaWdpbmFsSW1hZ2UsIDAsIDApO1xuXG4gICAgICAvLyAqQ29udmVydCBjYW52YXMgdG8gV2ViUFxuICAgICAgY2FudmFzLnRvQmxvYihcbiAgICAgICAgZnVuY3Rpb24oYmxvYikge1xuICAgICAgICAgIC8vQ2FsY3VsYXRlIHRoZSBmaWxlIHNpemUgb2YgdGhlIFdlYlAgSW1hZ2VcbiAgICAgICAgICBjb25zdCBmaWxlU2l6ZUtCID0gYmxvYi5zaXplIC8gMTAyNDtcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IHdlYnBJbWFnZSA9IHJlYWRlci5yZXN1bHQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB3ZWJwIGltYWdlIGVsZW1lbnRzLlxuICAgICAgICAgICAgLy8gY29uc3QgaW1hZ2VJbmRleCA9IGltYWdlc1Byb2Nlc3NlZCsrO1xuICAgICAgICAgICAgLy8gY29uc3QgZGF0YUluZGV4ID0gaW1hZ2VFbGVtZW50c1tpbWFnZUluZGV4XS5kYXRhSW5kZXg7XG4gICAgICAgICAgICBjb252ZXJ0ZWRJbWFnZS5kYXRhc2V0LmluZGV4ID0gaW1hZ2VJbmRleDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGltYWdlRWxlbWVudHNbaW1hZ2VJbmRleF0ub3JpZ2luYWxJbWFnZVVSTCA9IG9yaWdpbmFsSW1hZ2U7IFxuICAgICAgICAgICAgaW1hZ2VFbGVtZW50c1tpbWFnZUluZGV4XS53ZWJwSW1hZ2VVUkwgPSB3ZWJwSW1hZ2U7IC8vU3RvcmUgdGhlIGNvbnZlcnRlZCBXZWJQIGltYWdlIFVSTCBoZXJlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vICpVcGRhdGUgZmlsZSBzaXplIGVsZW1lbnRzIGFuZCBjb252ZXJ0ZWQgaW1hZ2UgZGF0YVxuICAgICAgICAgICAgb3JpZ2luYWxEYXRhU2l6ZS5pbm5lclRleHQgPSAnT3JpZ2luYWwgRmlsZSBTaXplOiAnICsgZmlsZS5zaXplICsgJyBieXRlcyc7XG4gICAgICAgICAgICBjb252ZXJ0ZWREYXRhU2l6ZS5pbm5lclRleHQgPSAnQ29udmVydGVkIEZpbGUgU2l6ZTogJyArIGZpbGVTaXplS0IudG9GaXhlZCgyKSArICcgS0InO1xuICAgICAgICAgICAgY29udmVydGVkSW1hZ2Uuc3JjID0gd2VicEltYWdlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAqU3RvcmUgV2ViUCBpbWFnZSBkYXRhIHdpdGggb3JpZ2luYWwgZmlsZW5hbWVcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsRmlsZW5hbWUgPSBmaWxlLm5hbWU7XG4gICAgICAgICAgICBjb25zdCB3ZWJwRmlsZW5hbWUgPSBnZXRXZWJwRmlsZW5hbWUob3JpZ2luYWxGaWxlbmFtZSk7XG4gICAgICAgICAgICBpbWFnZUVsZW1lbnRzW2ltYWdlSW5kZXhdLm9yaWdpbmFsRmlsZW5hbWUgPSBvcmlnaW5hbEZpbGVuYW1lO1xuICAgICAgICAgICAgLy8gaW1hZ2VzUHJvY2Vzc2VkKys7IC8vICpnZXQgdGhlIGltYWdlIGluZGV4IGZyb20gdGhlIGltYWdlc1Byb2Nlc3NlZCBjb3VudGVyXG5cbiAgICAgICAgICAgICBjb252ZXJ0ZWRJbWFnZS5kYXRhc2V0LmluZGV4ID0gaW1hZ2VJbmRleDtcbiAgICAgICAgICAgICBpbWFnZUVsZW1lbnRzW2ltYWdlSW5kZXhdLm9yaWdpbmFsSW1hZ2VVUkwgPSBvcmlnaW5hbEltYWdlO1xuICAgICAgICAgICAgIGltYWdlRWxlbWVudHNbaW1hZ2VJbmRleF0ud2VicEltYWdlVVJMID0gd2VicEltYWdlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAqU3RvcmUgV2ViUCBpbWFnZSBkYXRhXG4gICAgICAgICAgICB3ZWJwSW1hZ2VzW2ltYWdlSW5kZXhdID0geyBuYW1lOiBvcmlnaW5hbEZpbGVuYW1lLCBkYXRhOiB3ZWJwSW1hZ2UsIGZpbGVuYW1lOiB3ZWJwRmlsZW5hbWUgfTtcblxuICAgICAgICAgICAgaW1hZ2VzUHJvY2Vzc2VkKys7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vICpDaGVjayB0byBlbnN1cmUgYWxsIGltYWdlcyBoYXZlIGJlZW4gdXBsb2FkZWQgYW5kIGNvbnZlcnRlZFxuICAgICAgICAgICAgaWYgKGltYWdlc1Byb2Nlc3NlZCA9PT0gZXZlbnQudGFyZ2V0LmZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICByZW5kZXJXZWJwSW1hZ2VzKCk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlbmRlcldlYnBJbWFnZXMoKSlcbiAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBkb3dubG9hZEJ1dHRvblNpbmdsZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICBkb3dubG9hZEJ1dHRvbk11bHRpcGxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG93bmxvYWRCdXR0b25TaW5nbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICBkb3dubG9hZEJ1dHRvbk11bHRpcGxlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBlbmRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgY29uc3QgcHJvY2Vzc2luZ1RpbWUgPSBlbmRUaW1lIC0gc3RhcnRUaW1lO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdQcm9jZXNzaW5nIHRpbWU6JywgcHJvY2Vzc2luZ1RpbWUpO1xuICAgICAgICAgIGlzSW1hZ2VQcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgICAgfSwgJ2ltYWdlL3dlYnAnLCBzbGlkZXJWYWx1ZSk7XG4gICAgfTtcbiAgICBjb25zdCBvcmlnaW5hbEltYWdlVVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmIChvcmlnaW5hbEltYWdlVVJMKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9LCA1MCk7XG4gICAgfSlcbiAgfVxuXG4gIC8vICpVcGRhdGUgdGhlIHNsaWRlciB2YWx1ZSBkaXNwbGF5XG4gIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZXInKTtcbiAgY29uc3Qgc2xpZGVyVmFsdWVEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlclZhbHVlJyk7XG4gIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgIHNsaWRlclZhbHVlRGlzcGxheS50ZXh0Q29udGVudCA9IHRoaXMudmFsdWU7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGdldFdlYnBGaWxlbmFtZShvcmlnaW5hbEZpbGVuYW1lKSB7XG4gICAgY29uc3QgZXh0ZW5zaW9uSW5kZXggPSBvcmlnaW5hbEZpbGVuYW1lLmxhc3RJbmRleE9mKCcuJyk7XG4gICAgY29uc3QgZmlsZW5hbWUgPSBvcmlnaW5hbEZpbGVuYW1lLnN1YnN0cmluZygwLCBleHRlbnNpb25JbmRleCk7XG4gICAgcmV0dXJuIGZpbGVuYW1lICsgJy53ZWJwJztcbiAgfVxuXG5cbiAgLy8gIVJlbmRlciBXZWJwIGltYWdlcyBhbmQgZGF0YVxuICBmdW5jdGlvbiByZW5kZXJXZWJwSW1hZ2VzKCkge1xuXG4gICAgd2VicEltYWdlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKTtcbiAgICB9KTtcbiAgXG4gICAgLy8gU29ydCB0aGUgaW1hZ2VFbGVtZW50cyBhcnJheSBiYXNlZCBvbiB0aGUgb3JpZ2luYWxJbWFnZVVSTCBwcm9wZXJ0eVxuICAgIGltYWdlRWxlbWVudHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEub3JpZ2luYWxJbWFnZVVSTC5zcmMubG9jYWxlQ29tcGFyZShiLm9yaWdpbmFsSW1hZ2VVUkwuc3JjKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1hdGNoZWRBcnJheSA9IHdlYnBJbWFnZXMubWFwKCh3ZWJwSW1hZ2UsIGluZGV4KSA9PiAoe1xuICAgICAgLi4ud2VicEltYWdlLFxuICAgICAgLi4uaW1hZ2VFbGVtZW50c1tpbmRleF1cbiAgICB9KSk7XG4gICAgY29uc29sZS5sb2cobWF0Y2hlZEFycmF5KTtcblxuICAgIFxuXG4gICAgLy8gKkNsZWFyIHRoZSBleGlzdGluZyBpbWFnZXNcbiAgICBjb25zdCBzdHJlYW1saW5lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0cmVhbWxpbmUnKTtcbiAgICBzdHJlYW1saW5lQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnNvbGUubG9nKCdpcyBydW5uaW5nJyk7XG4gICAgXG4gICAgLy8gKlJlbmRlciBXZWJQIGltYWdlcyBpbiBvcmRlclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2VicEltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgeyBuYW1lLCBkYXRhLCBmaWxlbmFtZSwgb3JpZ2luYWxJbWFnZVVSTCB9ID0gbWF0Y2hlZEFycmF5W2ldO1xuICAgICAgY29uc3QgaW1hZ2VFbGVtZW50ID0gaW1hZ2VFbGVtZW50c1tpXTtcbiAgICAgIGNvbnN0IHsgb3JpZ2luYWxEYXRhU2l6ZSwgY29udmVydGVkSW1hZ2UsIGNvbnZlcnRlZERhdGFTaXplIH0gPSBpbWFnZUVsZW1lbnQ7XG5cbiAgICAgIGNvbnN0IHN0YXJ0VGltZVJlbmRlcmluZyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgY29uc29sZS5sb2coJ3JlbmRlcmluZyB3ZWJwOiAnLCBmaWxlbmFtZSlcbiAgICBcbiAgICAgIC8vICpDcmVhdGUgYSBkaXYgdG8gaG9sZCBlYWNoIGltYWdlJ3MgY29udGVudFxuICAgICAgY29uc3QgZmlsZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGZpbGVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2ZpbGUtd3JhcHBlcicpO1xuICAgICAgXG4gICAgICAvLyAqU2hvdyBmaWxlIG5hbWVcbiAgICAgIGNvbnN0IGZpbGVOYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGNvbnN0IGZpbGVOYW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdGaWxlIE5hbWU6JyArICcgJyk7XG4gICAgICAvLyAqY29uc3QgYnJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICAgIGNvbnN0IGZpbGVuYW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGZpbGVuYW1lKTtcblxuICAgICAgZmlsZU5hbWVFbGVtZW50LmFwcGVuZENoaWxkKGZpbGVOYW1lVGV4dCk7XG4gICAgICAvLyAqZmlsZU5hbWVFbGVtZW50LmFwcGVuZENoaWxkKGJyRWxlbWVudCk7XG4gICAgICBmaWxlTmFtZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZmlsZW5hbWVUZXh0KTtcbiAgXG4gICAgICBmaWxlTmFtZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmlsZW5hbWUtd3JhcHBlcicpO1xuICAgICAgZmlsZVdyYXBwZXIuYXBwZW5kQ2hpbGQoZmlsZU5hbWVFbGVtZW50KTtcblxuICAgICAgY29uc3QgZmlsZVdyYXBwZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGZpbGVXcmFwcGVyUm93LmNsYXNzTGlzdC5hZGQoJ2ZpbGUtd3JhcHBlci1yb3cnKVxuXG4gICAgICAvLyAqU2hvdyBXZWJQIGltYWdlXG4gICAgICBjb252ZXJ0ZWRJbWFnZS5zcmMgPSBkYXRhO1xuICAgICAgY29udmVydGVkSW1hZ2UuYWx0ID0gbmFtZTsgLy8gKlNldCB0aGUgYWx0IGF0dHJpYnV0ZSB0byB0aGUgb3JpZ2luYWwgZmlsZW5hbWVcbiAgICAgIGZpbGVXcmFwcGVyUm93LmFwcGVuZENoaWxkKGNvbnZlcnRlZEltYWdlKTtcblxuICAgIFxuICAgICAgLy8gKlNob3cgZmlsZSBzaXplc1xuICAgICAgY29uc3Qgb3JpZ2luYWxGaWxlU2l6ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIG9yaWdpbmFsRmlsZVNpemUuaW5uZXJUZXh0ID0gb3JpZ2luYWxEYXRhU2l6ZS5pbm5lclRleHQ7XG4gICAgICBvcmlnaW5hbEZpbGVTaXplLmNsYXNzTGlzdC5hZGQoJ2RhdGEtd3JhcHBlcicpO1xuICAgICAgZmlsZVdyYXBwZXJSb3cuYXBwZW5kQ2hpbGQob3JpZ2luYWxGaWxlU2l6ZSk7XG4gICAgICBcbiAgICAgIGNvbnN0IGNvbnZlcnRlZEZpbGVTaXplID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgY29udmVydGVkRmlsZVNpemUuaW5uZXJUZXh0ID0gY29udmVydGVkRGF0YVNpemUuaW5uZXJUZXh0O1xuICAgICAgY29udmVydGVkRmlsZVNpemUuY2xhc3NMaXN0LmFkZCgnZGF0YS13cmFwcGVyJyk7XG4gICAgICBmaWxlV3JhcHBlclJvdy5hcHBlbmRDaGlsZChjb252ZXJ0ZWRGaWxlU2l6ZSk7XG5cblxuLy8gLi4uXG4vLyAqQ3JlYXRlIGEgQ29tcGFyaXNvbiBCdXR0b25cbmNvbnN0IHBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwLWNhcmQnKTtcbmNvbnN0IGNvbXBhcmlzb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmNvbXBhcmlzb25CdXR0b24uaW5uZXJUZXh0ID0gJ0NvbXBhcmUnO1xuY29tcGFyaXNvbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb21wYXJlLWJ1dHRvbicpO1xuY29tcGFyaXNvbkJ1dHRvbi5kYXRhc2V0LmluZGV4ID0gaTsgLy8gU2V0IGRhdGEtaW5kZXggYXR0cmlidXRlIGRpcmVjdGx5XG5jb21wYXJpc29uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBjb25zdCBpbWFnZXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2UtY29udGFpbmVyJyk7XG4gIGNvbnN0IGJlZm9yZUltYWdlID0gaW1hZ2VzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZS1iZWZvcmUnKTtcbiAgY29uc3QgYWZ0ZXJJbWFnZSA9IGltYWdlc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaW1hZ2UtYWZ0ZXInKTtcblxuICBpZiAoYmVmb3JlSW1hZ2UgJiYgYWZ0ZXJJbWFnZSkge1xuICAgIGltYWdlc0NvbnRhaW5lci5yZW1vdmVDaGlsZChiZWZvcmVJbWFnZSk7XG4gICAgaW1hZ2VzQ29udGFpbmVyLnJlbW92ZUNoaWxkKGFmdGVySW1hZ2UpO1xuICB9IGVsc2Uge1xuICAgIC8vIFVzZSBlLnRhcmdldCB0byBnZXQgdGhlIGVsZW1lbnQgdGhhdCB0cmlnZ2VyZWQgdGhlIGV2ZW50XG4gICAgY29uc3QgZGF0YUluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDsgLy8gQWNjZXNzIHRoZSBkYXRhLWluZGV4IGRpcmVjdGx5XG5cbiAgICBjb25zdCBvcmlnaW5hbEltYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG9yaWdpbmFsSW1hZ2VFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ltYWdlLWJlZm9yZScpO1xuICAgIG9yaWdpbmFsSW1hZ2VFbGVtZW50LmFsdCA9ICdvcmlnaW5hbCBpbWFnZSc7XG4gICAgLy8gb3JpZ2luYWxJbWFnZUVsZW1lbnQuc3JjID0gbWF0Y2hlZEFycmF5W2RhdGFJbmRleF0ub3JpZ2luYWxJbWFnZVVSTDtcbiAgICBvcmlnaW5hbEltYWdlRWxlbWVudC5zcmMgPSBvcmlnaW5hbEltYWdlVVJMLnNyYztcbiAgICBpbWFnZXNDb250YWluZXIuYXBwZW5kQ2hpbGQob3JpZ2luYWxJbWFnZUVsZW1lbnQpO1xuXG4gICAgY29uc3QgY29udmVydGVkSW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29udmVydGVkSW1hZ2VFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ltYWdlLWFmdGVyJyk7XG4gICAgY29udmVydGVkSW1hZ2VFbGVtZW50LmFsdCA9ICdjb252ZXJ0ZWQgaW1hZ2UnO1xuICAgIC8vIGNvbnZlcnRlZEltYWdlRWxlbWVudC5zcmMgPSBtYXRjaGVkQXJyYXlbZGF0YUluZGV4XS5kYXRhO1xuICAgIGNvbnZlcnRlZEltYWdlRWxlbWVudC5zcmMgPSBkYXRhO1xuICAgIGltYWdlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb252ZXJ0ZWRJbWFnZUVsZW1lbnQpO1xuXG4gICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgfVxufSk7XG5maWxlV3JhcHBlclJvdy5hcHBlbmRDaGlsZChjb21wYXJpc29uQnV0dG9uKTtcbi8vIC4uLlxuXG4gIFxuICAgICAgLy8gKkNyZWF0ZSBhIGJ1dHRvbiBmb3IgaW5kaXZpZHVhbCBkb3dubG9hZFxuICAgICAgY29uc3QgZG93bmxvYWRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGRvd25sb2FkQnV0dG9uLmlubmVyVGV4dCA9ICdEb3dubG9hZCc7XG4gICAgICBkb3dubG9hZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzaW5nbGUtZG93bmxvYWQnKTtcbiAgICAgIGRvd25sb2FkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBkb3dubG9hZFdlYnBJbWFnZShkYXRhLCBuYW1lKTtcbiAgICAgIH0pO1xuICAgICAgZmlsZVdyYXBwZXJSb3cuYXBwZW5kQ2hpbGQoZG93bmxvYWRCdXR0b24pO1xuICAgIFxuICAgICAgLy8gKkFkZCB0aGUgaW1hZ2UgY29udGVudCB0byB0aGUgc3RyZWFtbGluZSBjb250YWluZXJcbiAgICAgIHN0cmVhbWxpbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoZmlsZVdyYXBwZXIpO1xuICAgICAgc3RyZWFtbGluZUNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWxlV3JhcHBlclJvdyk7XG5cbiAgICAgIGNvbnN0IGVuZFRpbWVSZW5kZXJpbmcgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgIGNvbnN0IHByb2Nlc3NpbmdUaW1lUmVuZGVyaW5nID0gZW5kVGltZVJlbmRlcmluZyAtIHN0YXJ0VGltZVJlbmRlcmluZztcbiAgICAgIGNvbnNvbGUubG9nKCdSZW5kZXJpbmcgdGltZTonLCBwcm9jZXNzaW5nVGltZVJlbmRlcmluZyk7XG4gICAgfVxuICAgIFxuICAgIC8vICpIaWRlIHNsaWRlciBhZnRlciBjb252ZXJzaW9uXG4gICAgY29uc3Qgc2xpZGVyV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItd3JhcHBlcicpO1xuICAgIHNsaWRlcldyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICB9XG4gIFxuXG4gIFxuICBhc3luYyBmdW5jdGlvbiBkb3dubG9hZFdlYnBJbWFnZShkYXRhVVJJLCBmaWxlbmFtZSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFVUkkpO1xuICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IHJlc3BvbnNlLiBibG9iKCk7XG4gICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG4gICAgICBjb25zdCBkb3dubG9hZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBkb3dubG9hZExpbmsuaHJlZiA9IHVybDtcbiAgICAgIGRvd25sb2FkTGluay5kb3dubG9hZCA9IGZpbGVuYW1lLnJlcGxhY2UoL1xcLlteLy5dKyQvLCBcIlwiKSArIFwiLndlYnBcIjsgLy8gKlJlbW92ZSB0aGUgZmlsZSBleHRlbnNpb24gYW5kIGFkZCAud2VicFxuICAgICAgZG93bmxvYWRMaW5rLmNsaWNrKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRvd25sb2FkaW5nIGltYWdlJywgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRvd25sb2FkSW1hZ2VzID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHdlYnBJbWFnZXMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKGRvd25sb2FkQnV0dG9uU2luZ2xlLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcbiAgICAgICAgLy8gKkRvd25sb2FkIHNpbmdsZSBmaWxlXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgZGF0YSB9ID0gd2VicEltYWdlc1swXTtcbiAgICAgICAgY29uc3QgZmlsZU5hbWUgPSBnZXRXZWJwRmlsZW5hbWUobmFtZSk7XG4gICAgICAgIGNvbnN0IGRvd25sb2FkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgZG93bmxvYWRMaW5rLmhyZWYgPSBkYXRhO1xuICAgICAgICBkb3dubG9hZExpbmsuZG93bmxvYWQgPSBmaWxlTmFtZTtcbiAgICAgICAgZG93bmxvYWRMaW5rLmNsaWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB6aXAgPSBuZXcgSlNaaXAoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdlYnBJbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCB7IG5hbWUsIGRhdGEgfSA9IHdlYnBJbWFnZXNbaV07XG4gICAgICAgICAgY29uc3QgZmlsZU5hbWUgPSBnZXRXZWJwRmlsZW5hbWUobmFtZSk7IC8vICpVc2UgdGhlIG9yaWdpbmFsIGZpbGVuYW1lIGZvciB0aGUgV2ViUCBmaWxlXG5cbiAgICAgICAgICB6aXAuZmlsZShmaWxlTmFtZSwgZGF0YS5zcGxpdCgnLCcpWzFdLCB7IGJhc2U2NDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHppcC5nZW5lcmF0ZUFzeW5jKHsgdHlwZTogJ2Jsb2InIH0pLnRoZW4oZnVuY3Rpb24oY29udGVudCkge1xuICAgICAgICAgIGNvbnN0IGRvd25sb2FkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICBkb3dubG9hZExpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoY29udGVudCk7XG4gICAgICAgICAgZG93bmxvYWRMaW5rLmRvd25sb2FkID0gJ3dlYnBfaW1hZ2VzLnppcCc7XG4gICAgICAgICAgZG93bmxvYWRMaW5rLmNsaWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjb252ZXJ0SW1hZ2VzKTtcbiAgZG93bmxvYWRCdXR0b25TaW5nbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb3dubG9hZEltYWdlcyk7XG4gIGRvd25sb2FkQnV0dG9uTXVsdGlwbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb3dubG9hZEltYWdlcyk7XG59KTtcbiIsIlxuY29uc3QgQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltYWdlLWNvbnRhaW5lcicpO1xuY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnV0dG9uJyk7XG5jb25zdCBjb21wYXJpc29uU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciAoJy5jb21wYXJpc29uLXNsaWRlcicpO1xuXG5jb21wYXJpc29uU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcblx0Q29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KCctLXBvc2l0aW9uJywgYCR7ZS50YXJnZXQudmFsdWV9JWApO1xufSk7XG5cbmNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRjb25zdCBwb3B1cENhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAtY2FyZCcpO1xuXHRwb3B1cENhcmQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuXHRwb3B1cENhcmQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xufSk7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==