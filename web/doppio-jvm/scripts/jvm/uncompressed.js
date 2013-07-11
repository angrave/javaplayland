// Underscore.js 1.3.1
// (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){function q(a,c,d){if(a===c)return a!==0||1/a==1/c;if(a==null||c==null)return a===c;if(a._chain)a=a._wrapped;if(c._chain)c=c._wrapped;if(a.isEqual&&b.isFunction(a.isEqual))return a.isEqual(c);if(c.isEqual&&b.isFunction(c.isEqual))return c.isEqual(a);var e=l.call(a);if(e!=l.call(c))return false;switch(e){case "[object String]":return a==String(c);case "[object Number]":return a!=+a?c!=+c:a==0?1/a==1/c:a==+c;case "[object Date]":case "[object Boolean]":return+a==+c;case "[object RegExp]":return a.source==
c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if(typeof a!="object"||typeof c!="object")return false;for(var f=d.length;f--;)if(d[f]==a)return true;d.push(a);var f=0,g=true;if(e=="[object Array]"){if(f=a.length,g=f==c.length)for(;f--;)if(!(g=f in a==f in c&&q(a[f],c[f],d)))break}else{if("constructor"in a!="constructor"in c||a.constructor!=c.constructor)return false;for(var h in a)if(b.has(a,h)&&(f++,!(g=b.has(c,h)&&q(a[h],c[h],d))))break;if(g){for(h in c)if(b.has(c,
h)&&!f--)break;g=!f}}d.pop();return g}var r=this,G=r._,n={},k=Array.prototype,o=Object.prototype,i=k.slice,H=k.unshift,l=o.toString,I=o.hasOwnProperty,w=k.forEach,x=k.map,y=k.reduce,z=k.reduceRight,A=k.filter,B=k.every,C=k.some,p=k.indexOf,D=k.lastIndexOf,o=Array.isArray,J=Object.keys,s=Function.prototype.bind,b=function(a){return new m(a)};if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports)exports=module.exports=b;exports._=b}else r._=b;b.VERSION="1.3.1";var j=b.each=
b.forEach=function(a,c,d){if(a!=null)if(w&&a.forEach===w)a.forEach(c,d);else if(a.length===+a.length)for(var e=0,f=a.length;e<f;e++){if(e in a&&c.call(d,a[e],e,a)===n)break}else for(e in a)if(b.has(a,e)&&c.call(d,a[e],e,a)===n)break};b.map=b.collect=function(a,c,b){var e=[];if(a==null)return e;if(x&&a.map===x)return a.map(c,b);j(a,function(a,g,h){e[e.length]=c.call(b,a,g,h)});if(a.length===+a.length)e.length=a.length;return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var f=arguments.length>2;a==
null&&(a=[]);if(y&&a.reduce===y)return e&&(c=b.bind(c,e)),f?a.reduce(c,d):a.reduce(c);j(a,function(a,b,i){f?d=c.call(e,d,a,b,i):(d=a,f=true)});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(z&&a.reduceRight===z)return e&&(c=b.bind(c,e)),f?a.reduceRight(c,d):a.reduceRight(c);var g=b.toArray(a).reverse();e&&!f&&(c=b.bind(c,e));return f?b.reduce(g,c,d,e):b.reduce(g,c)};b.find=b.detect=
function(a,c,b){var e;E(a,function(a,g,h){if(c.call(b,a,g,h))return e=a,true});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(A&&a.filter===A)return a.filter(c,b);j(a,function(a,g,h){c.call(b,a,g,h)&&(e[e.length]=a)});return e};b.reject=function(a,c,b){var e=[];if(a==null)return e;j(a,function(a,g,h){c.call(b,a,g,h)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=true;if(a==null)return e;if(B&&a.every===B)return a.every(c,b);j(a,function(a,g,h){if(!(e=
e&&c.call(b,a,g,h)))return n});return e};var E=b.some=b.any=function(a,c,d){c||(c=b.identity);var e=false;if(a==null)return e;if(C&&a.some===C)return a.some(c,d);j(a,function(a,b,h){if(e||(e=c.call(d,a,b,h)))return n});return!!e};b.include=b.contains=function(a,c){var b=false;if(a==null)return b;return p&&a.indexOf===p?a.indexOf(c)!=-1:b=E(a,function(a){return a===c})};b.invoke=function(a,c){var d=i.call(arguments,2);return b.map(a,function(a){return(b.isFunction(c)?c||a:a[c]).apply(a,d)})};b.pluck=
function(a,c){return b.map(a,function(a){return a[c]})};b.max=function(a,c,d){if(!c&&b.isArray(a))return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;var e={computed:-Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a))return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b<e.computed&&(e={value:a,computed:b})});
return e.value};b.shuffle=function(a){var b=[],d;j(a,function(a,f){f==0?b[0]=a:(d=Math.floor(Math.random()*(f+1)),b[f]=b[d],b[d]=a)});return b};b.sortBy=function(a,c,d){return b.pluck(b.map(a,function(a,b,g){return{value:a,criteria:c.call(d,a,b,g)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c<d?-1:c>d?1:0}),"value")};b.groupBy=function(a,c){var d={},e=b.isFunction(c)?c:function(a){return a[c]};j(a,function(a,b){var c=e(a,b);(d[c]||(d[c]=[])).push(a)});return d};b.sortedIndex=function(a,
c,d){d||(d=b.identity);for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(c)?e=g+1:f=g}return e};b.toArray=function(a){return!a?[]:a.toArray?a.toArray():b.isArray(a)?i.call(a):b.isArguments(a)?i.call(a):b.values(a)};b.size=function(a){return b.toArray(a).length};b.first=b.head=function(a,b,d){return b!=null&&!d?i.call(a,0,b):a[0]};b.initial=function(a,b,d){return i.call(a,0,a.length-(b==null||d?1:b))};b.last=function(a,b,d){return b!=null&&!d?i.call(a,Math.max(a.length-b,0)):a[a.length-1]};b.rest=
b.tail=function(a,b,d){return i.call(a,b==null||d?1:b)};b.compact=function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a,c){return b.reduce(a,function(a,e){if(b.isArray(e))return a.concat(c?e:b.flatten(e));a[a.length]=e;return a},[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d){var d=d?b.map(a,d):a,e=[];b.reduce(d,function(d,g,h){if(0==h||(c===true?b.last(d)!=g:!b.include(d,g)))d[d.length]=g,e[e.length]=a[h];return d},[]);
return e};b.union=function(){return b.uniq(b.flatten(arguments,true))};b.intersection=b.intersect=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a){var c=b.flatten(i.call(arguments,1));return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=i.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,
d){if(a==null)return-1;var e;if(d)return d=b.sortedIndex(a,c),a[d]===c?d:-1;if(p&&a.indexOf===p)return a.indexOf(c);for(d=0,e=a.length;d<e;d++)if(d in a&&a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(D&&a.lastIndexOf===D)return a.lastIndexOf(b);for(var d=a.length;d--;)if(d in a&&a[d]===b)return d;return-1};b.range=function(a,b,d){arguments.length<=1&&(b=a||0,a=0);for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),f=0,g=Array(e);f<e;)g[f++]=a,a+=d;return g};
var F=function(){};b.bind=function(a,c){var d,e;if(a.bind===s&&s)return s.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;e=i.call(arguments,2);return d=function(){if(!(this instanceof d))return a.apply(c,e.concat(i.call(arguments)));F.prototype=a.prototype;var b=new F,g=a.apply(b,e.concat(i.call(arguments)));return Object(g)===g?g:b}};b.bindAll=function(a){var c=i.call(arguments,1);c.length==0&&(c=b.functions(a));j(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,
c){var d={};c||(c=b.identity);return function(){var e=c.apply(this,arguments);return b.has(d,e)?d[e]:d[e]=a.apply(this,arguments)}};b.delay=function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(a,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,c){var d,e,f,g,h,i=b.debounce(function(){h=g=false},c);return function(){d=this;e=arguments;var b;f||(f=setTimeout(function(){f=null;h&&a.apply(d,e);i()},c));g?h=true:
a.apply(d,e);i();g=true}};b.debounce=function(a,b){var d;return function(){var e=this,f=arguments;clearTimeout(d);d=setTimeout(function(){d=null;a.apply(e,f)},b)}};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments,0));return b.apply(this,d)}};b.compose=function(){var a=arguments;return function(){for(var b=arguments,d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};
b.after=function(a,b){return a<=0?b():function(){if(--a<1)return b.apply(this,arguments)}};b.keys=J||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var c=[],d;for(d in a)b.has(a,d)&&(c[c.length]=d);return c};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]=b[d]});return a};b.defaults=function(a){j(i.call(arguments,
1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?a:b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,b){return q(a,b,[])};b.isEmpty=function(a){if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(b.has(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=o||function(a){return l.call(a)=="[object Array]"};b.isObject=function(a){return a===Object(a)};
b.isArguments=function(a){return l.call(a)=="[object Arguments]"};if(!b.isArguments(arguments))b.isArguments=function(a){return!(!a||!b.has(a,"callee"))};b.isFunction=function(a){return l.call(a)=="[object Function]"};b.isString=function(a){return l.call(a)=="[object String]"};b.isNumber=function(a){return l.call(a)=="[object Number]"};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===true||a===false||l.call(a)=="[object Boolean]"};b.isDate=function(a){return l.call(a)=="[object Date]"};
b.isRegExp=function(a){return l.call(a)=="[object RegExp]"};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.has=function(a,b){return I.call(a,b)};b.noConflict=function(){r._=G;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};b.mixin=function(a){j(b.functions(a),
function(c){K(c,b[c]=a[c])})};var L=0;b.uniqueId=function(a){var b=L++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var t=/.^/,u=function(a){return a.replace(/\\\\/g,"\\").replace(/\\'/g,"'")};b.template=function(a,c){var d=b.templateSettings,d="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(d.escape||t,function(a,b){return"',_.escape("+
u(b)+"),'"}).replace(d.interpolate||t,function(a,b){return"',"+u(b)+",'"}).replace(d.evaluate||t,function(a,b){return"');"+u(b).replace(/[\r\n\t]/g," ")+";__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",e=new Function("obj","_",d);return c?e(c,b):function(a){return e.call(this,a,b)}};b.chain=function(a){return b(a).chain()};var m=function(a){this._wrapped=a};b.prototype=m.prototype;var v=function(a,c){return c?b(a).chain():a},K=function(a,c){m.prototype[a]=
function(){var a=i.call(arguments);H.call(a,this._wrapped);return v(c.apply(b,a),this._chain)}};b.mixin(b);j("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){var b=k[a];m.prototype[a]=function(){var d=this._wrapped;b.apply(d,arguments);var e=d.length;(a=="shift"||a=="splice")&&e===0&&delete d[0];return v(d,this._chain)}});j(["concat","join","slice"],function(a){var b=k[a];m.prototype[a]=function(){return v(b.apply(this._wrapped,arguments),this._chain)}});m.prototype.chain=function(){this._chain=
true;return this};m.prototype.value=function(){return this._wrapped}}).call(this);
;
// Copyright 2009 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Defines a Long class for representing a 64-bit two's-complement
 * integer value, which faithfully simulates the behavior of a Java "long". This
 * implementation is derived from LongLib in GWT.
 *
 */

/**
 * Constructs a 64-bit two's-complement integer, given its low and high 32-bit
 * values as *signed* integers.  See the from* functions below for more
 * convenient ways of constructing Longs.
 *
 * The internal representation of a long is the two given signed, 32-bit values.
 * We use 32-bit pieces because these are the size of integers on which
 * Javascript performs bit-operations.  For operations like addition and
 * multiplication, we split each number into 16-bit pieces, which can easily be
 * multiplied within Javascript's floating-point representation without overflow
 * or change in sign.
 *
 * In the algorithms below, we frequently reduce the negative case to the
 * positive case by negating the input(s) and then post-processing the result.
 * Note that we must ALWAYS check specially whether those values are MIN_VALUE
 * (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
 * a positive number, it overflows back into a negative).  Not handling this
 * case would often result in infinite recursion.
 *
 * @param {number} low  The low (signed) 32 bits of the long.
 * @param {number} high  The high (signed) 32 bits of the long.
 * @constructor
 */
(function() {
  var root = this;
root.gLong = function(low, high) {
  /**
   * @type {number}
   * @private
   */
  this.low_ = low | 0;  // force into 32 signed bits.

  /**
   * @type {number}
   * @private
   */
  this.high_ = high | 0;  // force into 32 signed bits.
};


// NOTE: Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the
// from* methods on which they depend.


/**
 * A cache of the Long representations of small integer values.
 * @type {!Object}
 * @private
 */
root.gLong.IntCache_ = {};


/**
 * Returns a Long representing the given (32-bit) integer value.
 * @param {number} value The 32-bit integer in question.
 * @return {!root.gLong} The corresponding Long value.
 */
root.gLong.fromInt = function(value) {
  if (-128 <= value && value < 128) {
    var cachedObj = root.gLong.IntCache_[value];
    if (cachedObj) {
      return cachedObj;
    }
  }

  var obj = new root.gLong(value | 0, value < 0 ? -1 : 0);
  if (-128 <= value && value < 128) {
    root.gLong.IntCache_[value] = obj;
  }
  return obj;
};


/**
 * Returns a Long representing the given value, provided that it is a finite
 * number.  Otherwise, zero is returned.
 * @param {number} value The number in question.
 * @return {!root.gLong} The corresponding Long value.
 */
root.gLong.fromNumber = function(value) {
  if (isNaN(value) || !isFinite(value)) {
    return root.gLong.ZERO;
  } else if (value <= -root.gLong.TWO_PWR_63_DBL_) {
    return root.gLong.MIN_VALUE;
  } else if (value + 1 >= root.gLong.TWO_PWR_63_DBL_) {
    return root.gLong.MAX_VALUE;
  } else if (value < 0) {
    return root.gLong.fromNumber(-value).negate();
  } else {
    return new root.gLong(
        (value % root.gLong.TWO_PWR_32_DBL_) | 0,
        (value / root.gLong.TWO_PWR_32_DBL_) | 0);
  }
};


/**
 * Returns a Long representing the 64-bit integer that comes by concatenating
 * the given high and low bits.  Each is assumed to use 32 bits.
 * @param {number} lowBits The low 32-bits.
 * @param {number} highBits The high 32-bits.
 * @return {!root.gLong} The corresponding Long value.
 */
root.gLong.fromBits = function(lowBits, highBits) {
  return new root.gLong(lowBits, highBits);
};


/**
 * Returns a Long representation of the given string, written using the given
 * radix.
 * @param {string} str The textual representation of the Long.
 * @param {number=} opt_radix The radix in which the text is written.
 * @return {!root.gLong} The corresponding Long value.
 */
root.gLong.fromString = function(str, opt_radix) {
  if (str.length == 0) {
    throw Error('number format error: empty string');
  }

  var radix = opt_radix || 10;
  if (radix < 2 || 36 < radix) {
    throw Error('radix out of range: ' + radix);
  }

  if (str.charAt(0) == '-') {
    return root.gLong.fromString(str.substring(1), radix).negate();
  } else if (str.indexOf('-') >= 0) {
    throw Error('number format error: interior "-" character: ' + str);
  }

  // Do several (8) digits each time through the loop, so as to
  // minimize the calls to the very expensive emulated div.
  var radixToPower = root.gLong.fromNumber(Math.pow(radix, 8));

  var result = root.gLong.ZERO;
  for (var i = 0; i < str.length; i += 8) {
    var size = Math.min(8, str.length - i);
    var value = parseInt(str.substring(i, i + size), radix);
    if (size < 8) {
      var power = root.gLong.fromNumber(Math.pow(radix, size));
      result = result.multiply(power).add(root.gLong.fromNumber(value));
    } else {
      result = result.multiply(radixToPower);
      result = result.add(root.gLong.fromNumber(value));
    }
  }
  return result;
};


// NOTE: the compiler should inline these constant values below and then remove
// these variables, so there should be no runtime penalty for these.


/**
 * Number used repeated below in calculations.  This must appear before the
 * first call to any from* function below.
 * @type {number}
 * @private
 */
root.gLong.TWO_PWR_16_DBL_ = 1 << 16;


/**
 * @type {number}
 * @private
 */
root.gLong.TWO_PWR_24_DBL_ = 1 << 24;


/**
 * @type {number}
 * @private
 */
root.gLong.TWO_PWR_32_DBL_ =
    root.gLong.TWO_PWR_16_DBL_ * root.gLong.TWO_PWR_16_DBL_;


/**
 * @type {number}
 * @private
 */
root.gLong.TWO_PWR_31_DBL_ =
    root.gLong.TWO_PWR_32_DBL_ / 2;


/**
 * @type {number}
 * @private
 */
root.gLong.TWO_PWR_48_DBL_ =
    root.gLong.TWO_PWR_32_DBL_ * root.gLong.TWO_PWR_16_DBL_;


/**
 * @type {number}
 * @private
 */
root.gLong.TWO_PWR_64_DBL_ =
    root.gLong.TWO_PWR_32_DBL_ * root.gLong.TWO_PWR_32_DBL_;


/**
 * @type {number}
 * @private
 */
root.gLong.TWO_PWR_63_DBL_ =
    root.gLong.TWO_PWR_64_DBL_ / 2;


/** @type {!root.gLong} */
root.gLong.ZERO = root.gLong.fromInt(0);


/** @type {!root.gLong} */
root.gLong.ONE = root.gLong.fromInt(1);


/** @type {!root.gLong} */
root.gLong.NEG_ONE = root.gLong.fromInt(-1);


/** @type {!root.gLong} */
root.gLong.MAX_VALUE =
    root.gLong.fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0);


/** @type {!root.gLong} */
root.gLong.MIN_VALUE = root.gLong.fromBits(0, 0x80000000 | 0);


/**
 * @type {!root.gLong}
 * @private
 */
root.gLong.TWO_PWR_24_ = root.gLong.fromInt(1 << 24);


/** @return {number} The value, assuming it is a 32-bit integer. */
root.gLong.prototype.toInt = function() {
  return this.low_;
};


/** @return {number} The closest floating-point representation to this value. */
root.gLong.prototype.toNumber = function() {
  return this.high_ * root.gLong.TWO_PWR_32_DBL_ +
         this.getLowBitsUnsigned();
};


/**
 * @param {number=} opt_radix The radix in which the text should be written.
 * @return {string} The textual representation of this value.
 */
root.gLong.prototype.toString = function(opt_radix) {
  var radix = opt_radix || 10;
  if (radix < 2 || 36 < radix) {
    throw Error('radix out of range: ' + radix);
  }

  if (this.isZero()) {
    return '0';
  }

  if (this.isNegative()) {
    if (this.equals(root.gLong.MIN_VALUE)) {
      // We need to change the Long value before it can be negated, so we remove
      // the bottom-most digit in this base and then recurse to do the rest.
      var radixLong = root.gLong.fromNumber(radix);
      var div = this.div(radixLong);
      var rem = div.multiply(radixLong).subtract(this);
      return div.toString(radix) + rem.toInt().toString(radix);
    } else {
      return '-' + this.negate().toString(radix);
    }
  }

  // Do several (6) digits each time through the loop, so as to
  // minimize the calls to the very expensive emulated div.
  var radixToPower = root.gLong.fromNumber(Math.pow(radix, 6));

  var rem = this;
  var result = '';
  while (true) {
    var remDiv = rem.div(radixToPower);
    var intval = rem.subtract(remDiv.multiply(radixToPower)).toInt();
    var digits = intval.toString(radix);

    rem = remDiv;
    if (rem.isZero()) {
      return digits + result;
    } else {
      while (digits.length < 6) {
        digits = '0' + digits;
      }
      result = '' + digits + result;
    }
  }
};


/** @return {number} The high 32-bits as a signed value. */
root.gLong.prototype.getHighBits = function() {
  return this.high_;
};


/** @return {number} The low 32-bits as a signed value. */
root.gLong.prototype.getLowBits = function() {
  return this.low_;
};


/** @return {number} The low 32-bits as an unsigned value. */
root.gLong.prototype.getLowBitsUnsigned = function() {
  return (this.low_ >= 0) ?
      this.low_ : root.gLong.TWO_PWR_32_DBL_ + this.low_;
};


/**
 * @return {number} Returns the number of bits needed to represent the absolute
 *     value of this Long.
 */
root.gLong.prototype.getNumBitsAbs = function() {
  if (this.isNegative()) {
    if (this.equals(root.gLong.MIN_VALUE)) {
      return 64;
    } else {
      return this.negate().getNumBitsAbs();
    }
  } else {
    var val = this.high_ != 0 ? this.high_ : this.low_;
    for (var bit = 31; bit > 0; bit--) {
      if ((val & (1 << bit)) != 0) {
        break;
      }
    }
    return this.high_ != 0 ? bit + 33 : bit + 1;
  }
};


/** @return {boolean} Whether this value is zero. */
root.gLong.prototype.isZero = function() {
  return this.high_ == 0 && this.low_ == 0;
};


/** @return {boolean} Whether this value is negative. */
root.gLong.prototype.isNegative = function() {
  return this.high_ < 0;
};


/** @return {boolean} Whether this value is odd. */
root.gLong.prototype.isOdd = function() {
  return (this.low_ & 1) == 1;
};


/**
 * @param {root.gLong} other Long to compare against.
 * @return {boolean} Whether this Long equals the other.
 */
root.gLong.prototype.equals = function(other) {
  return (this.high_ == other.high_) && (this.low_ == other.low_);
};


/**
 * @param {root.gLong} other Long to compare against.
 * @return {boolean} Whether this Long does not equal the other.
 */
root.gLong.prototype.notEquals = function(other) {
  return (this.high_ != other.high_) || (this.low_ != other.low_);
};


/**
 * @param {root.gLong} other Long to compare against.
 * @return {boolean} Whether this Long is less than the other.
 */
root.gLong.prototype.lessThan = function(other) {
  return this.compare(other) < 0;
};


/**
 * @param {root.gLong} other Long to compare against.
 * @return {boolean} Whether this Long is less than or equal to the other.
 */
root.gLong.prototype.lessThanOrEqual = function(other) {
  return this.compare(other) <= 0;
};


/**
 * @param {root.gLong} other Long to compare against.
 * @return {boolean} Whether this Long is greater than the other.
 */
root.gLong.prototype.greaterThan = function(other) {
  return this.compare(other) > 0;
};


/**
 * @param {root.gLong} other Long to compare against.
 * @return {boolean} Whether this Long is greater than or equal to the other.
 */
root.gLong.prototype.greaterThanOrEqual = function(other) {
  return this.compare(other) >= 0;
};


/**
 * Compares this Long with the given one.
 * @param {root.gLong} other Long to compare against.
 * @return {number} 0 if they are the same, 1 if the this is greater, and -1
 *     if the given one is greater.
 */
root.gLong.prototype.compare = function(other) {
  if (this.equals(other)) {
    return 0;
  }

  var thisNeg = this.isNegative();
  var otherNeg = other.isNegative();
  if (thisNeg && !otherNeg) {
    return -1;
  }
  if (!thisNeg && otherNeg) {
    return 1;
  }

  // at this point, the signs are the same, so subtraction will not overflow
  if (this.subtract(other).isNegative()) {
    return -1;
  } else {
    return 1;
  }
};


/** @return {!root.gLong} The negation of this value. */
root.gLong.prototype.negate = function() {
  if (this.equals(root.gLong.MIN_VALUE)) {
    return root.gLong.MIN_VALUE;
  } else {
    return this.not().add(root.gLong.ONE);
  }
};


/**
 * Returns the sum of this and the given Long.
 * @param {root.gLong} other Long to add to this one.
 * @return {!root.gLong} The sum of this and the given Long.
 */
root.gLong.prototype.add = function(other) {
  // Divide each number into 4 chunks of 16 bits, and then sum the chunks.

  var a48 = this.high_ >>> 16;
  var a32 = this.high_ & 0xFFFF;
  var a16 = this.low_ >>> 16;
  var a00 = this.low_ & 0xFFFF;

  var b48 = other.high_ >>> 16;
  var b32 = other.high_ & 0xFFFF;
  var b16 = other.low_ >>> 16;
  var b00 = other.low_ & 0xFFFF;

  var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
  c00 += a00 + b00;
  c16 += c00 >>> 16;
  c00 &= 0xFFFF;
  c16 += a16 + b16;
  c32 += c16 >>> 16;
  c16 &= 0xFFFF;
  c32 += a32 + b32;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c48 += a48 + b48;
  c48 &= 0xFFFF;
  return root.gLong.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
};


/**
 * Returns the difference of this and the given Long.
 * @param {root.gLong} other Long to subtract from this.
 * @return {!root.gLong} The difference of this and the given Long.
 */
root.gLong.prototype.subtract = function(other) {
  return this.add(other.negate());
};


/**
 * Returns the product of this and the given long.
 * @param {root.gLong} other Long to multiply with this.
 * @return {!root.gLong} The product of this and the other.
 */
root.gLong.prototype.multiply = function(other) {
  if (this.isZero()) {
    return root.gLong.ZERO;
  } else if (other.isZero()) {
    return root.gLong.ZERO;
  }

  if (this.equals(root.gLong.MIN_VALUE)) {
    return other.isOdd() ? root.gLong.MIN_VALUE : root.gLong.ZERO;
  } else if (other.equals(root.gLong.MIN_VALUE)) {
    return this.isOdd() ? root.gLong.MIN_VALUE : root.gLong.ZERO;
  }

  if (this.isNegative()) {
    if (other.isNegative()) {
      return this.negate().multiply(other.negate());
    } else {
      return this.negate().multiply(other).negate();
    }
  } else if (other.isNegative()) {
    return this.multiply(other.negate()).negate();
  }

  // If both longs are small, use float multiplication
  if (this.lessThan(root.gLong.TWO_PWR_24_) &&
      other.lessThan(root.gLong.TWO_PWR_24_)) {
    return root.gLong.fromNumber(this.toNumber() * other.toNumber());
  }

  // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
  // We can skip products that would overflow.

  var a48 = this.high_ >>> 16;
  var a32 = this.high_ & 0xFFFF;
  var a16 = this.low_ >>> 16;
  var a00 = this.low_ & 0xFFFF;

  var b48 = other.high_ >>> 16;
  var b32 = other.high_ & 0xFFFF;
  var b16 = other.low_ >>> 16;
  var b00 = other.low_ & 0xFFFF;

  var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
  c00 += a00 * b00;
  c16 += c00 >>> 16;
  c00 &= 0xFFFF;
  c16 += a16 * b00;
  c32 += c16 >>> 16;
  c16 &= 0xFFFF;
  c16 += a00 * b16;
  c32 += c16 >>> 16;
  c16 &= 0xFFFF;
  c32 += a32 * b00;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c32 += a16 * b16;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c32 += a00 * b32;
  c48 += c32 >>> 16;
  c32 &= 0xFFFF;
  c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
  c48 &= 0xFFFF;
  return root.gLong.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
};


/**
 * Returns this Long divided by the given one.
 * @param {root.gLong} other Long by which to divide.
 * @return {!root.gLong} This Long divided by the given one.
 */
root.gLong.prototype.div = function(other) {
  if (other.isZero()) {
    throw Error('division by zero');
  } else if (this.isZero()) {
    return root.gLong.ZERO;
  }

  if (this.equals(root.gLong.MIN_VALUE)) {
    if (other.equals(root.gLong.ONE) ||
        other.equals(root.gLong.NEG_ONE)) {
      return root.gLong.MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
    } else if (other.equals(root.gLong.MIN_VALUE)) {
      return root.gLong.ONE;
    } else {
      // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
      var halfThis = this.shiftRight(1);
      var approx = halfThis.div(other).shiftLeft(1);
      if (approx.equals(root.gLong.ZERO)) {
        return other.isNegative() ? root.gLong.ONE : root.gLong.NEG_ONE;
      } else {
        var rem = this.subtract(other.multiply(approx));
        var result = approx.add(rem.div(other));
        return result;
      }
    }
  } else if (other.equals(root.gLong.MIN_VALUE)) {
    return root.gLong.ZERO;
  }

  if (this.isNegative()) {
    if (other.isNegative()) {
      return this.negate().div(other.negate());
    } else {
      return this.negate().div(other).negate();
    }
  } else if (other.isNegative()) {
    return this.div(other.negate()).negate();
  }

  // Repeat the following until the remainder is less than other:  find a
  // floating-point that approximates remainder / other *from below*, add this
  // into the result, and subtract it from the remainder.  It is critical that
  // the approximate value is less than or equal to the real value so that the
  // remainder never becomes negative.
  var res = root.gLong.ZERO;
  var rem = this;
  while (rem.greaterThanOrEqual(other)) {
    // Approximate the result of division. This may be a little greater or
    // smaller than the actual value.
    var approx = Math.max(1, Math.floor(rem.toNumber() / other.toNumber()));

    // We will tweak the approximate result by changing it in the 48-th digit or
    // the smallest non-fractional digit, whichever is larger.
    var log2 = Math.ceil(Math.log(approx) / Math.LN2);
    var delta = (log2 <= 48) ? 1 : Math.pow(2, log2 - 48);

    // Decrease the approximation until it is smaller than the remainder.  Note
    // that if it is too large, the product overflows and is negative.
    var approxRes = root.gLong.fromNumber(approx);
    var approxRem = approxRes.multiply(other);
    while (approxRem.isNegative() || approxRem.greaterThan(rem)) {
      approx -= delta;
      approxRes = root.gLong.fromNumber(approx);
      approxRem = approxRes.multiply(other);
    }

    // We know the answer can't be zero... and actually, zero would cause
    // infinite recursion since we would make no progress.
    if (approxRes.isZero()) {
      approxRes = root.gLong.ONE;
    }

    res = res.add(approxRes);
    rem = rem.subtract(approxRem);
  }
  return res;
};


/**
 * Returns this Long modulo the given one.
 * @param {root.gLong} other Long by which to mod.
 * @return {!root.gLong} This Long modulo the given one.
 */
root.gLong.prototype.modulo = function(other) {
  return this.subtract(this.div(other).multiply(other));
};


/** @return {!root.gLong} The bitwise-NOT of this value. */
root.gLong.prototype.not = function() {
  return root.gLong.fromBits(~this.low_, ~this.high_);
};


/**
 * Returns the bitwise-AND of this Long and the given one.
 * @param {root.gLong} other The Long with which to AND.
 * @return {!root.gLong} The bitwise-AND of this and the other.
 */
root.gLong.prototype.and = function(other) {
  return root.gLong.fromBits(this.low_ & other.low_,
                                 this.high_ & other.high_);
};


/**
 * Returns the bitwise-OR of this Long and the given one.
 * @param {root.gLong} other The Long with which to OR.
 * @return {!root.gLong} The bitwise-OR of this and the other.
 */
root.gLong.prototype.or = function(other) {
  return root.gLong.fromBits(this.low_ | other.low_,
                                 this.high_ | other.high_);
};


/**
 * Returns the bitwise-XOR of this Long and the given one.
 * @param {root.gLong} other The Long with which to XOR.
 * @return {!root.gLong} The bitwise-XOR of this and the other.
 */
root.gLong.prototype.xor = function(other) {
  return root.gLong.fromBits(this.low_ ^ other.low_,
                                 this.high_ ^ other.high_);
};


/**
 * Returns this Long with bits shifted to the left by the given amount.
 * @param {number} numBits The number of bits by which to shift.
 * @return {!root.gLong} This shifted to the left by the given amount.
 */
root.gLong.prototype.shiftLeft = function(numBits) {
  numBits &= 63;
  if (numBits == 0) {
    return this;
  } else {
    var low = this.low_;
    if (numBits < 32) {
      var high = this.high_;
      return root.gLong.fromBits(
          low << numBits,
          (high << numBits) | (low >>> (32 - numBits)));
    } else {
      return root.gLong.fromBits(0, low << (numBits - 32));
    }
  }
};


/**
 * Returns this Long with bits shifted to the right by the given amount.
 * @param {number} numBits The number of bits by which to shift.
 * @return {!root.gLong} This shifted to the right by the given amount.
 */
root.gLong.prototype.shiftRight = function(numBits) {
  numBits &= 63;
  if (numBits == 0) {
    return this;
  } else {
    var high = this.high_;
    if (numBits < 32) {
      var low = this.low_;
      return root.gLong.fromBits(
          (low >>> numBits) | (high << (32 - numBits)),
          high >> numBits);
    } else {
      return root.gLong.fromBits(
          high >> (numBits - 32),
          high >= 0 ? 0 : -1);
    }
  }
};


/**
 * Returns this Long with bits shifted to the right by the given amount, with
 * the new top bits matching the current sign bit.
 * @param {number} numBits The number of bits by which to shift.
 * @return {!root.gLong} This shifted to the right by the given amount, with
 *     zeros placed into the new leading bits.
 */
root.gLong.prototype.shiftRightUnsigned = function(numBits) {
  numBits &= 63;
  if (numBits == 0) {
    return this;
  } else {
    var high = this.high_;
    if (numBits < 32) {
      var low = this.low_;
      return root.gLong.fromBits(
          (low >>> numBits) | (high << (32 - numBits)),
          high >>> numBits);
    } else if (numBits == 32) {
      return root.gLong.fromBits(high, 0);
    } else {
      return root.gLong.fromBits(high >>> (numBits - 32), 0);
    }
  }
};

  if (typeof module !== "undefined" && module !== null) {
    module.exports = root.gLong;
  }

}).call(this);
// Generated by CoffeeScript 1.6.2
(function() {
  "use strict";
  var gLong, root, _ref, _ref1,
    __slice = [].slice;

  gLong = require('../vendor/gLong.js');

  root = typeof exports !== "undefined" && exports !== null ? exports : (_ref = window.logging) != null ? _ref : window.logging = {};

  root.debug_vars = function(arr) {
    return arr.map(function(e) {
      if (e === null) {
        return '!';
      }
      if (e === void 0) {
        return 'undef';
      }
      if (e.ref != null) {
        return "*" + e.ref;
      }
      if (e instanceof gLong) {
        return "" + e + "L";
      }
      return e;
    });
  };

  root.VTRACE = 10;

  root.TRACE = 9;

  root.DEBUG = 5;

  root.ERROR = 1;

  if ((_ref1 = root.log_level) == null) {
    root.log_level = root.ERROR;
  }

  if (!((typeof console !== "undefined" && console !== null) || (typeof window !== "undefined" && window !== null ? window.console : void 0))) {
    window.console = {
      log: function() {},
      error: function() {
        var msgs;

        msgs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        throw msgs.join(' ') + '\n';
      },
      profile: function() {},
      profileEnd: function() {}
    };
  }

  root.log = function() {
    var level, msgs;

    level = arguments[0], msgs = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    if (level <= root.log_level) {
      return console[level === 1 ? 'error' : 'log'](msgs.join(' '));
    }
  };

  root.vtrace = function() {
    var msgs;

    msgs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return root.log.apply(root, [root.VTRACE].concat(__slice.call(msgs)));
  };

  root.trace = function() {
    var msgs;

    msgs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return root.log.apply(root, [root.TRACE].concat(__slice.call(msgs)));
  };

  root.debug = function() {
    var msgs;

    msgs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return root.log.apply(root, [root.DEBUG].concat(__slice.call(msgs)));
  };

  root.error = function() {
    var msgs;

    msgs = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return root.log.apply(root, [root.ERROR].concat(__slice.call(msgs)));
  };

}).call(this);
;
// Generated by CoffeeScript 1.6.2
(function() {
  "use strict";
  var debug, error, root, _, _ref, _ref1, _ref2,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  _ = require('../vendor/_.js');

  _ref = require('./logging'), error = _ref.error, debug = _ref.debug;

  root = typeof exports !== "undefined" && exports !== null ? exports : (_ref1 = window.exceptions) != null ? _ref1 : window.exceptions = {};

  root.HaltException = (function() {
    function HaltException(exit_code) {
      this.exit_code = exit_code;
    }

    HaltException.prototype.toplevel_catch_handler = function() {
      if (this.exit_code !== 0) {
        return error("\nExited with code " + this.exit_code);
      }
    };

    return HaltException;

  })();

  root.ReturnException = 'RETURNEXCEPTION';

  root.YieldException = (function() {
    function YieldException(condition) {
      this.condition = condition;
    }

    return YieldException;

  })();

  root.YieldIOException = (function(_super) {
    __extends(YieldIOException, _super);

    function YieldIOException() {
      _ref2 = YieldIOException.__super__.constructor.apply(this, arguments);
      return _ref2;
    }

    return YieldIOException;

  })(root.YieldException);

  root.JavaException = (function() {
    function JavaException(exception) {
      this.exception = exception;
    }

    JavaException.prototype.method_catch_handler = function(rs, cf, top_of_stack) {
      var ecls, exception_handlers, handler, method, _ref3, _ref4,
        _this = this;

      method = cf.method;
      if (!top_of_stack && method.has_bytecode) {
        cf.pc -= 3;
        while (!(cf.pc <= 0 || ((_ref3 = method.code.opcodes[cf.pc]) != null ? _ref3.name.match(/^invoke/) : void 0))) {
          --cf.pc;
        }
      }
      if (cf["native"]) {
        if (cf.error != null) {
          cf.runner = function() {
            return cf.error(_this);
          };
          return true;
        }
        return false;
      }
      exception_handlers = (_ref4 = method.code) != null ? _ref4.exception_handlers : void 0;
      ecls = this.exception.cls;
      handler = _.find(exception_handlers, function(eh) {
        var _ref5;

        return (eh.start_pc <= (_ref5 = cf.pc) && _ref5 < eh.end_pc) && (method.cls.loader.get_resolved_class(eh.catch_type, true) != null) && (eh.catch_type === "<any>" || ecls.is_castable(method.cls.loader.get_resolved_class(eh.catch_type)));
      });
      if (handler != null) {
        ;
        cf.stack = [this.exception];
        cf.pc = handler.handler_pc;
        return true;
      }
      ;
      return false;
    };

    JavaException.prototype.toplevel_catch_handler = function(rs) {
      ;
      var msg, thread_cls;

      msg = this.exception.get_field(rs, 'Ljava/lang/Throwable;detailMessage');
      ;
      rs.push2(rs.curr_thread, this.exception);
      thread_cls = rs.get_bs_class('Ljava/lang/Thread;');
      return thread_cls.method_lookup(rs, 'dispatchUncaughtException(Ljava/lang/Throwable;)V').setup_stack(rs);
    };

    return JavaException;

  })();

}).call(this);
;
// Generated by CoffeeScript 1.6.2
(function() {
  "use strict";
  var debug, error, external2internal, gLong, k, root, trace, v, vtrace, _ref, _ref1, _ref2;

  gLong = require('../vendor/gLong.js');

  _ref = require('./logging'), trace = _ref.trace, vtrace = _ref.vtrace, error = _ref.error, debug = _ref.debug;

  root = typeof exports !== "undefined" && exports !== null ? exports : (_ref1 = window.util) != null ? _ref1 : window.util = {};

  root.INT_MAX = Math.pow(2, 31) - 1;

  root.INT_MIN = -root.INT_MAX - 1;

  root.FLOAT_POS_INFINITY = Math.pow(2, 128);

  root.FLOAT_NEG_INFINITY = -1 * root.FLOAT_POS_INFINITY;

  root.FLOAT_POS_INFINITY_AS_INT = 0x7F800000;

  root.FLOAT_NEG_INFINITY_AS_INT = -8388608;

  root.FLOAT_NaN_AS_INT = 0x7fc00000;

  if (Math.imul == null) {
    Math.imul = function(a, b) {
      var ah, al, bh, bl;

      ah = (a >>> 16) & 0xffff;
      al = a & 0xffff;
      bh = (b >>> 16) & 0xffff;
      bl = b & 0xffff;
      return (al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0;
    };
  }

  root.arrayset = function(len, val) {
    var array, i, _i;

    array = new Array(len);
    for (i = _i = 0; _i < len; i = _i += 1) {
      array[i] = val;
    }
    return array;
  };

  root.int_mod = function(rs, a, b) {
    if (b === 0) {
      rs.java_throw(rs.get_bs_class('Ljava/lang/ArithmeticException;'), '/ by zero');
    }
    return a % b;
  };

  root.int_div = function(rs, a, b) {
    if (b === 0) {
      rs.java_throw(rs.get_bs_class('Ljava/lang/ArithmeticException;'), '/ by zero');
    }
    if (a === root.INT_MIN && b === -1) {
      return a;
    }
    return (a / b) | 0;
  };

  root.long_mod = function(rs, a, b) {
    if (b.isZero()) {
      rs.java_throw(rs.get_bs_class('Ljava/lang/ArithmeticException;'), '/ by zero');
    }
    return a.modulo(b);
  };

  root.long_div = function(rs, a, b) {
    if (b.isZero()) {
      rs.java_throw(rs.get_bs_class('Ljava/lang/ArithmeticException;'), '/ by zero');
    }
    return a.div(b);
  };

  root.float2int = function(a) {
    if (a > root.INT_MAX) {
      return root.INT_MAX;
    } else if (a < root.INT_MIN) {
      return root.INT_MIN;
    } else {
      return a | 0;
    }
  };

  root.intbits2float = function(int32) {
    var exponent, f_view, i_view, sign, significand, value;

    if (typeof Int32Array !== "undefined" && Int32Array !== null) {
      i_view = new Int32Array([int32]);
      f_view = new Float32Array(i_view.buffer);
      return f_view[0];
    }
    if (int32 === root.FLOAT_POS_INFINITY_AS_INT) {
      return Number.POSITIVE_INFINITY;
    } else if (int32 === root.FLOAT_NEG_INFINITY_AS_INT) {
      return Number.NEGATIVE_INFINITY;
    }
    sign = (int32 & 0x80000000) >>> 31;
    exponent = (int32 & 0x7F800000) >>> 23;
    significand = int32 & 0x007FFFFF;
    if (exponent === 0) {
      value = Math.pow(-1, sign) * significand * Math.pow(2, -149);
    } else {
      value = Math.pow(-1, sign) * (1 + significand * Math.pow(2, -23)) * Math.pow(2, exponent - 127);
    }
    if (value < root.FLOAT_NEG_INFINITY || value > root.FLOAT_POS_INFINITY) {
      value = NaN;
    }
    return value;
  };

  root.longbits2double = function(uint32_a, uint32_b) {
    var d_view, exponent, i_view, sign, significand, value;

    if (typeof Uint32Array !== "undefined" && Uint32Array !== null) {
      i_view = new Uint32Array(2);
      i_view[0] = uint32_b;
      i_view[1] = uint32_a;
      d_view = new Float64Array(i_view.buffer);
      return d_view[0];
    }
    sign = (uint32_a & 0x80000000) >>> 31;
    exponent = (uint32_a & 0x7FF00000) >>> 20;
    significand = root.lshift(uint32_a & 0x000FFFFF, 32) + uint32_b;
    if (exponent === 0 && significand === 0) {
      return 0;
    }
    if (exponent === 2047) {
      if (significand === 0) {
        if (sign === 1) {
          return Number.NEGATIVE_INFINITY;
        }
        return Number.POSITIVE_INFINITY;
      } else {
        return NaN;
      }
    }
    if (exponent === 0) {
      value = Math.pow(-1, sign) * significand * Math.pow(2, -1074);
    } else {
      value = Math.pow(-1, sign) * (1 + significand * Math.pow(2, -52)) * Math.pow(2, exponent - 1023);
    }
    return value;
  };

  root.wrap_float = function(a) {
    if (a > 3.40282346638528860e+38) {
      return Number.POSITIVE_INFINITY;
    }
    if ((0 < a && a < 1.40129846432481707e-45)) {
      return 0;
    }
    if (a < -3.40282346638528860e+38) {
      return Number.NEGATIVE_INFINITY;
    }
    if ((0 > a && a > -1.40129846432481707e-45)) {
      return 0;
    }
    return a;
  };

  root.cmp = function(a, b) {
    if (a === b) {
      return 0;
    }
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return null;
  };

  root.lshift = function(x, n) {
    return x * Math.pow(2, n);
  };

  root.read_uint = function(bytes) {
    var i, n, sum, _i;

    n = bytes.length - 1;
    sum = 0;
    for (i = _i = 0; _i <= n; i = _i += 1) {
      sum += root.lshift(bytes[i], 8 * (n - i));
    }
    return sum;
  };

  root.chars2js_str = function(jvm_carr, offset, count) {
    return root.bytes2str(jvm_carr.array).substr(offset != null ? offset : 0, count);
  };

  root.bytestr_to_array = function(bytecode_string) {
    var i, _i, _ref2, _results;

    _results = [];
    for (i = _i = 0, _ref2 = bytecode_string.length; _i < _ref2; i = _i += 1) {
      _results.push(bytecode_string.charCodeAt(i) & 0xFF);
    }
    return _results;
  };

  root.array_to_bytestr = function(bytecode_array) {
    var b;

    return ((function() {
      var _i, _len, _results;

      _results = [];
      for (_i = 0, _len = bytecode_array.length; _i < _len; _i++) {
        b = bytecode_array[_i];
        _results.push(String.fromCharCode(b));
      }
      return _results;
    })()).join('');
  };

  root.parse_flags = function(flag_byte) {
    return {
      "public": flag_byte & 0x1,
      "private": flag_byte & 0x2,
      "protected": flag_byte & 0x4,
      "static": flag_byte & 0x8,
      final: flag_byte & 0x10,
      synchronized: flag_byte & 0x20,
      "super": flag_byte & 0x20,
      volatile: flag_byte & 0x40,
      transient: flag_byte & 0x80,
      "native": flag_byte & 0x100,
      "interface": flag_byte & 0x200,
      abstract: flag_byte & 0x400,
      strict: flag_byte & 0x800
    };
  };

  root.escape_whitespace = function(str) {
    return str.replace(/\s/g, function(c) {
      switch (c) {
        case "\n":
          return "\\n";
        case "\r":
          return "\\r";
        case "\t":
          return "\\t";
        case "\v":
          return "\\v";
        case "\f":
          return "\\f";
        default:
          return c;
      }
    });
  };

  root.format_extra_info = function(entry) {
    var info, type;

    type = entry.type;
    info = typeof entry.deref === "function" ? entry.deref() : void 0;
    if (!info) {
      return "";
    }
    switch (type) {
      case 'Method':
      case 'InterfaceMethod':
        return "\t//  " + info["class"] + "." + info.sig;
      case 'Field':
        return "\t//  " + info["class"] + "." + info.name + ":" + info.type;
      case 'NameAndType':
        return "//  " + info.name + ":" + info.type;
      default:
        if (root.is_string(info)) {
          return "\t//  " + root.escape_whitespace(info);
        }
    }
  };

  root.BytesArray = (function() {
    function BytesArray(raw_array, start, end) {
      this.raw_array = raw_array;
      this.start = start != null ? start : 0;
      this.end = end != null ? end : this.raw_array.length;
      this._index = 0;
    }

    BytesArray.prototype.rewind = function() {
      return this._index = 0;
    };

    BytesArray.prototype.pos = function() {
      return this._index;
    };

    BytesArray.prototype.skip = function(bytes_count) {
      return this._index += bytes_count;
    };

    BytesArray.prototype.has_bytes = function() {
      return this.start + this._index < this.end;
    };

    BytesArray.prototype.get_uint = function(bytes_count) {
      var rv;

      rv = root.read_uint(this.raw_array.slice(this.start + this._index, this.start + this._index + bytes_count));
      this._index += bytes_count;
      return rv;
    };

    BytesArray.prototype.get_int = function(bytes_count) {
      var bytes_to_set;

      bytes_to_set = 32 - bytes_count * 8;
      return this.get_uint(bytes_count) << bytes_to_set >> bytes_to_set;
    };

    BytesArray.prototype.read = function(bytes_count) {
      var rv;

      rv = this.raw_array.slice(this.start + this._index, this.start + this._index + bytes_count);
      this._index += bytes_count;
      return rv;
    };

    BytesArray.prototype.peek = function() {
      return this.raw_array[this.start + this._index];
    };

    BytesArray.prototype.size = function() {
      return this.end - this.start - this._index;
    };

    BytesArray.prototype.splice = function(len) {
      var arr;

      arr = new root.BytesArray(this.raw_array, this.start + this._index, this.start + this._index + len);
      this._index += len;
      return arr;
    };

    return BytesArray;

  })();

  root.initial_value = function(type_str) {
    var _ref2;

    if (type_str === 'J') {
      return gLong.ZERO;
    } else if ((_ref2 = type_str[0]) === '[' || _ref2 === 'L') {
      return null;
    } else {
      return 0;
    }
  };

  root.is_string = function(obj) {
    return typeof obj === 'string' || obj instanceof String;
  };

  root.ext_classname = function(str) {
    return root.descriptor2typestr(str).replace(/\//g, '.');
  };

  root.int_classname = function(str) {
    return root.typestr2descriptor(str).replace(/\./g, '/');
  };

  root.verify_int_classname = function(str) {
    var array_nesting, part, _i, _len, _ref2;

    array_nesting = str.match(/^\[*/)[0].length;
    if (array_nesting > 255) {
      return false;
    }
    if (array_nesting > 0) {
      str = str.slice(array_nesting);
    }
    if (str[0] === 'L') {
      if (str[str.length - 1] !== ';') {
        return false;
      }
      str = str.slice(1, -1);
    }
    if (str in root.internal2external) {
      return true;
    }
    if (str.match(/\/{2,}/)) {
      return false;
    }
    _ref2 = str.split('/');
    for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
      part = _ref2[_i];
      if (part.match(/[^$_a-z0-9]/i)) {
        return false;
      }
    }
    return true;
  };

  root.internal2external = {
    B: 'byte',
    C: 'char',
    D: 'double',
    F: 'float',
    I: 'int',
    J: 'long',
    S: 'short',
    V: 'void',
    Z: 'boolean'
  };

  external2internal = {};

  _ref2 = root.internal2external;
  for (k in _ref2) {
    v = _ref2[k];
    external2internal[v] = k;
  }

  root.get_component_type = function(type_str) {
    return type_str.slice(1);
  };

  root.is_array_type = function(type_str) {
    return type_str[0] === '[';
  };

  root.is_primitive_type = function(type_str) {
    return type_str in root.internal2external;
  };

  root.is_reference_type = function(type_str) {
    return type_str[0] === 'L';
  };

  root.descriptor2typestr = function(type_str) {
    var c;

    c = type_str[0];
    if (c in root.internal2external) {
      return root.internal2external[c];
    } else if (c === 'L') {
      return type_str.slice(1, -1);
    } else if (c === '[') {
      return type_str;
    } else {
      throw new Error("Unrecognized type string: " + type_str);
    }
  };

  root.carr2descriptor = function(carr) {
    var c;

    c = carr.shift();
    if (c == null) {
      return null;
    }
    if (c in root.internal2external) {
      return c;
    } else if (c === 'L') {
      return "L" + (((function() {
        var _results;

        _results = [];
        while ((c = carr.shift()) !== ';') {
          _results.push(c);
        }
        return _results;
      })()).join('')) + ";";
    } else if (c === '[') {
      return "[" + (root.carr2descriptor(carr));
    } else {
      carr.unshift(c);
      throw new Error("Unrecognized descriptor: " + (carr.join('')));
    }
  };

  root.typestr2descriptor = function(type_str) {
    var c;

    c = type_str[0];
    if (type_str in external2internal) {
      return external2internal[type_str];
    } else if (c === '[') {
      return type_str;
    } else {
      return "L" + type_str + ";";
    }
  };

  root.bytes2str = function(bytes, null_terminate) {
    var char_array, idx, x, y, z;

    if (null_terminate == null) {
      null_terminate = false;
    }
    idx = 0;
    char_array = (function() {
      var _results;

      _results = [];
      while (idx < bytes.length) {
        x = bytes[idx++] & 0xff;
        if (null_terminate && x === 0) {
          break;
        }
        _results.push(String.fromCharCode(x <= 0x7f ? x : x <= 0xdf ? (y = bytes[idx++], ((x & 0x1f) << 6) + (y & 0x3f)) : (y = bytes[idx++], z = bytes[idx++], ((x & 0xf) << 12) + ((y & 0x3f) << 6) + (z & 0x3f))));
      }
      return _results;
    })();
    return char_array.join('');
  };

  root.last = function(array) {
    return array[array.length - 1];
  };

  root.SafeMap = (function() {
    function SafeMap() {
      this.cache = Object.create(null);
      this.proto_cache = void 0;
    }

    SafeMap.prototype.get = function(key) {
      if (this.cache[key] != null) {
        return this.cache[key];
      }
      if (key.toString() === '__proto__' && this.proto_cache !== void 0) {
        return this.proto_cache;
      }
      return void 0;
    };

    SafeMap.prototype.has = function(key) {
      return this.get(key) !== void 0;
    };

    SafeMap.prototype.set = function(key, value) {
      if (key.toString() !== '__proto__') {
        return this.cache[key] = value;
      } else {
        return this.proto_cache = value;
      }
    };

    return SafeMap;

  })();

}).call(this);
;
// Generated by CoffeeScript 1.6.2
(function() {
  "use strict";
  var CustomClassLoader, debug, error, log, root, trace, util, vtrace, _, _ref, _ref1,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  _ = require('../vendor/_.js');

  util = require('./util');

  _ref = require('./logging'), log = _ref.log, debug = _ref.debug, error = _ref.error, trace = _ref.trace, vtrace = _ref.vtrace;

  CustomClassLoader = void 0;

  root = typeof exports !== "undefined" && exports !== null ? exports : (_ref1 = window.java_object) != null ? _ref1 : window.java_object = {};

  root.JavaArray = (function() {
    function JavaArray(rs, cls, obj) {
      this.cls = cls;
      this.ref = rs.high_oref++;
      this.array = obj;
    }

    JavaArray.prototype.clone = function(rs) {
      return new root.JavaArray(rs, this.cls, _.clone(this.array));
    };

    JavaArray.prototype.get_field_from_offset = function(rs, offset) {
      return this.array[offset.toInt()];
    };

    JavaArray.prototype.set_field_from_offset = function(rs, offset, value) {
      return this.array[offset.toInt()] = value;
    };

    JavaArray.prototype.toString = function() {
      if (this.array.length <= 10) {
        return "<" + (this.cls.get_type()) + " [" + this.array + "] (*" + this.ref + ")>";
      } else {
        return "<" + (this.cls.get_type()) + " of length " + this.array.length + " (*" + this.ref + ")>";
      }
    };

    JavaArray.prototype.serialize = function(visited) {
      var f;

      if (this.ref in visited) {
        return "<*" + this.ref + ">";
      }
      visited[this.ref] = true;
      return {
        type: this.cls.get_type(),
        ref: this.ref,
        array: (function() {
          var _i, _len, _ref2, _ref3, _results;

          _ref2 = this.array;
          _results = [];
          for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
            f = _ref2[_i];
            _results.push((_ref3 = f != null ? typeof f.serialize === "function" ? f.serialize(visited) : void 0 : void 0) != null ? _ref3 : f);
          }
          return _results;
        }).call(this)
      };
    };

    return JavaArray;

  })();

  root.JavaObject = (function() {
    function JavaObject(rs, cls, obj) {
      var field;

      this.cls = cls;
      if (obj == null) {
        obj = {};
      }
      this.ref = rs.high_oref++;
      this.fields = Object.create(this.cls.get_default_fields());
      for (field in obj) {
        if (obj.hasOwnProperty(field)) {
          this.fields[field] = obj[field];
        }
      }
      return;
    }

    JavaObject.prototype.clone = function(rs) {
      return new root.JavaObject(rs, this.cls, _.clone(this.fields));
    };

    JavaObject.prototype.set_field = function(rs, name, val) {
      if (this.fields[name] !== void 0) {
        this.fields[name] = val;
      } else {
        rs.java_throw(this.cls.loader.get_initialized_class('Ljava/lang/NoSuchFieldError;'), name);
      }
    };

    JavaObject.prototype.get_field = function(rs, name) {
      if (this.fields[name] !== void 0) {
        return this.fields[name];
      }
      return rs.java_throw(this.cls.loader.get_initialized_class('Ljava/lang/NoSuchFieldError;'), name);
    };

    JavaObject.prototype.get_field_from_offset = function(rs, offset) {
      var f;

      f = this._get_field_from_offset(rs, this.cls, offset.toInt());
      if (f.field.access_flags["static"]) {
        return f.cls_obj.static_get(rs, f.field.name);
      }
      return this.get_field(rs, f.cls + f.field.name);
    };

    JavaObject.prototype._get_field_from_offset = function(rs, cls, offset) {
      var classname, f, jco_ref;

      classname = cls.get_type();
      while (cls != null) {
        jco_ref = cls.get_class_object(rs).ref;
        f = cls.get_fields()[offset - jco_ref];
        if (f != null) {
          return {
            field: f,
            cls: cls.get_type(),
            cls_obj: cls
          };
        }
        cls = cls.get_super_class();
      }
      return rs.java_throw(this.cls.loader.get_initialized_class('Ljava/lang/NullPointerException;'), "field " + offset + " doesn't exist in class " + classname);
    };

    JavaObject.prototype.set_field_from_offset = function(rs, offset, value) {
      var f;

      f = this._get_field_from_offset(rs, this.cls, offset.toInt());
      if (f.field.access_flags["static"]) {
        return f.cls_obj.static_put(rs, f.field.name, value);
      } else {
        return this.set_field(rs, f.cls + f.field.name, value);
      }
    };

    JavaObject.prototype.toString = function() {
      if (this.cls.get_type() === 'Ljava/lang/String;') {
        return "<" + (this.cls.get_type()) + " '" + (this.jvm2js_str()) + "' (*" + this.ref + ")>";
      } else {
        return "<" + (this.cls.get_type()) + " (*" + this.ref + ")>";
      }
    };

    JavaObject.prototype.serialize = function(visited) {
      var fields, k, v, _ref2, _ref3;

      if (this.ref in visited) {
        return "<*" + this.ref + ">";
      }
      visited[this.ref] = true;
      fields = {};
      _ref2 = this.fields;
      for (k in _ref2) {
        v = _ref2[k];
        fields[k] = (_ref3 = v != null ? typeof v.serialize === "function" ? v.serialize(visited) : void 0 : void 0) != null ? _ref3 : v;
      }
      return {
        type: this.cls.get_type(),
        ref: this.ref,
        fields: fields
      };
    };

    JavaObject.prototype.jvm2js_str = function() {
      return util.chars2js_str(this.fields['Ljava/lang/String;value'], this.fields['Ljava/lang/String;offset'], this.fields['Ljava/lang/String;count']);
    };

    return JavaObject;

  })();

  root.JavaClassObject = (function(_super) {
    __extends(JavaClassObject, _super);

    function JavaClassObject(rs, $cls) {
      this.$cls = $cls;
      JavaClassObject.__super__.constructor.call(this, rs, rs.get_bs_cl().get_resolved_class('Ljava/lang/Class;'));
    }

    JavaClassObject.prototype.toString = function() {
      return "<Class " + (this.$cls.get_type()) + " (*" + this.ref + ")>";
    };

    return JavaClassObject;

  })(root.JavaObject);

  root.JavaClassLoaderObject = (function(_super) {
    __extends(JavaClassLoaderObject, _super);

    function JavaClassLoaderObject(rs, cls) {
      this.cls = cls;
      JavaClassLoaderObject.__super__.constructor.call(this, rs, this.cls);
      if (CustomClassLoader == null) {
        CustomClassLoader = require('./ClassLoader').CustomClassLoader;
      }
      this.$loader = new CustomClassLoader(rs.get_bs_cl(), this);
    }

    JavaClassLoaderObject.prototype.serialize = function(visited) {
      var cls, fields, k, loaded, type, v, _ref2, _ref3, _ref4;

      if (this.ref in visited) {
        return "<*" + this.ref + ">";
      }
      visited[this.ref] = true;
      fields = {};
      _ref2 = this.fields;
      for (k in _ref2) {
        v = _ref2[k];
        fields[k] = (_ref3 = v != null ? typeof v.serialize === "function" ? v.serialize(visited) : void 0 : void 0) != null ? _ref3 : v;
      }
      loaded = {};
      _ref4 = this.$loader.loaded_classes;
      for (type in _ref4) {
        cls = _ref4[type];
        loaded["" + type + "(" + (cls.getLoadState()) + ")"] = cls.loader.serialize(visited);
      }
      return {
        type: this.cls.get_type(),
        ref: this.ref,
        fields: fields,
        loaded: loaded
      };
    };

    return JavaClassLoaderObject;

  })(root.JavaObject);

  root.thread_name = function(rs, thread) {
    return util.chars2js_str(thread.get_field(rs, 'Ljava/lang/Thread;name'));
  };

}).call(this);
;
// Generated by CoffeeScript 1.6.2
(function() {
  "use strict";
  var JavaArray, JavaClassLoaderObject, JavaException, JavaObject, ReturnException, gLong, jsr, root, util, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  gLong = require('../vendor/gLong.js');

  util = require('./util');

  _ref = require('./exceptions'), JavaException = _ref.JavaException, ReturnException = _ref.ReturnException;

  _ref1 = require('./java_object'), JavaObject = _ref1.JavaObject, JavaArray = _ref1.JavaArray, JavaClassLoaderObject = _ref1.JavaClassLoaderObject;

  root = typeof exports !== "undefined" && exports !== null ? exports : window.opcodes = {};

  root.Opcode = (function() {
    function Opcode(name, params) {
      var prop, val, _ref2, _ref3;

      this.name = name;
      if (params == null) {
        params = {};
      }
      for (prop in params) {
        val = params[prop];
        this[prop] = val;
      }
      if ((_ref2 = this.execute) == null) {
        this.execute = this._execute;
      }
      this.byte_count = (_ref3 = params.byte_count) != null ? _ref3 : 0;
      this.orig_execute = this.execute;
    }

    Opcode.prototype.take_args = function(code_array) {
      return this.args = (function() {
        var _i, _ref2, _results;

        _results = [];
        for (_i = 0, _ref2 = this.byte_count; 0 <= _ref2 ? _i < _ref2 : _i > _ref2; 0 <= _ref2 ? _i++ : _i--) {
          _results.push(code_array.get_uint(1));
        }
        return _results;
      }).call(this);
    };

    Opcode.prototype.annotate = function() {
      return '';
    };

    Opcode.prototype.reset_cache = function() {
      if (this.execute !== this.orig_execute) {
        return this.execute = this.orig_execute;
      }
    };

    Opcode.prototype.inc_pc = function(rs, offset) {
      return rs.inc_pc(offset - 1 - this.byte_count);
    };

    Opcode.prototype.goto_pc = function(rs, new_pc) {
      return rs.goto_pc(new_pc - 1 - this.byte_count);
    };

    return Opcode;

  })();

  root.FieldOpcode = (function(_super) {
    __extends(FieldOpcode, _super);

    function FieldOpcode(name, params) {
      FieldOpcode.__super__.constructor.call(this, name, params);
      this.byte_count = 2;
    }

    FieldOpcode.prototype.take_args = function(code_array, constant_pool) {
      this.field_spec_ref = code_array.get_uint(2);
      return this.field_spec = constant_pool.get(this.field_spec_ref).deref();
    };

    FieldOpcode.prototype.annotate = function(idx, pool) {
      return "\t#" + this.field_spec_ref + ";" + (util.format_extra_info(pool.get(this.field_spec_ref)));
    };

    return FieldOpcode;

  })(root.Opcode);

  root.ClassOpcode = (function(_super) {
    __extends(ClassOpcode, _super);

    function ClassOpcode(name, params) {
      ClassOpcode.__super__.constructor.call(this, name, params);
      this.byte_count = 2;
    }

    ClassOpcode.prototype.take_args = function(code_array, constant_pool) {
      this.class_ref = code_array.get_uint(2);
      return this["class"] = constant_pool.get(this.class_ref).deref();
    };

    ClassOpcode.prototype.annotate = function(idx, pool) {
      return "\t#" + this.class_ref + ";" + (util.format_extra_info(pool.get(this.class_ref)));
    };

    return ClassOpcode;

  })(root.Opcode);

  root.InvokeOpcode = (function(_super) {
    __extends(InvokeOpcode, _super);

    function InvokeOpcode(name, params) {
      InvokeOpcode.__super__.constructor.call(this, name, params);
      this.byte_count = 2;
    }

    InvokeOpcode.prototype.take_args = function(code_array, constant_pool) {
      this.method_spec_ref = code_array.get_uint(2);
      return this.method_spec = constant_pool.get(this.method_spec_ref).deref();
    };

    InvokeOpcode.prototype.annotate = function(idx, pool) {
      return ("\t#" + this.method_spec_ref) + (this.name === 'invokeinterface' ? ",  " + this.count : "") + (";" + (util.format_extra_info(pool.get(this.method_spec_ref))));
    };

    InvokeOpcode.prototype.execute = function(rs) {
      var cls, m, my_sf,
        _this = this;

      cls = rs.get_class(this.method_spec["class"], true);
      if (cls != null) {
        my_sf = rs.curr_frame();
        if ((m = cls.method_lookup(rs, this.method_spec.sig)) != null) {
          if (m.setup_stack(rs) != null) {
            my_sf.pc += 1 + this.byte_count;
            return false;
          }
        } else {
          rs.async_op(function(resume_cb, except_cb) {
            return cls.resolve_method(rs, _this.method_spec.sig, (function() {
              return resume_cb(void 0, void 0, true, false);
            }), except_cb);
          });
        }
      } else {
        rs.async_op(function(resume_cb, except_cb) {
          return rs.get_cl().initialize_class(rs, _this.method_spec["class"], (function() {
            return resume_cb(void 0, void 0, true, false);
          }), except_cb);
        });
      }
    };

    return InvokeOpcode;

  })(root.Opcode);

  root.DynInvokeOpcode = (function(_super) {
    var get_param_word_size;

    __extends(DynInvokeOpcode, _super);

    function DynInvokeOpcode(name, params) {
      DynInvokeOpcode.__super__.constructor.call(this, name, params);
      this.byte_count = 2;
    }

    DynInvokeOpcode.prototype.take_args = function(code_array, constant_pool) {
      DynInvokeOpcode.__super__.take_args.call(this, code_array, constant_pool);
      if (this.name === 'invokeinterface') {
        this.count = code_array.get_uint(1);
        code_array.skip(1);
        return this.byte_count += 2;
      } else {
        return this.count = 1 + get_param_word_size(this.method_spec.sig);
      }
    };

    DynInvokeOpcode.prototype.execute = function(rs) {
      var cls, cls_obj, m, my_sf, obj, stack,
        _this = this;

      cls = rs.get_class(this.method_spec["class"], true);
      if (cls != null) {
        my_sf = rs.curr_frame();
        stack = my_sf.stack;
        obj = stack[stack.length - this.count];
        cls_obj = rs.check_null(obj).cls;
        if ((m = cls_obj.method_lookup(rs, this.method_spec.sig)) != null) {
          if (m.setup_stack(rs) != null) {
            my_sf.pc += 1 + this.byte_count;
            return false;
          }
        } else {
          rs.async_op(function(resume_cb, except_cb) {
            return cls_obj.resolve_method(rs, _this.method_spec.sig, (function() {
              return resume_cb(void 0, void 0, true, false);
            }), except_cb);
          });
        }
      } else {
        rs.async_op(function(resume_cb, except_cb) {
          return rs.get_cl().initialize_class(rs, _this.method_spec["class"], (function() {
            return resume_cb(void 0, void 0, true, false);
          }), except_cb);
        });
      }
    };

    get_param_word_size = function(spec) {
      var c, size, state, _i, _len;

      state = 'name';
      size = 0;
      for (_i = 0, _len = spec.length; _i < _len; _i++) {
        c = spec[_i];
        switch (state) {
          case 'name':
            if (c === '(') {
              state = 'type';
            }
            break;
          case 'type':
            if (c === ')') {
              return size;
            }
            if (c === 'J' || c === 'D') {
              size += 2;
            } else {
              ++size;
            }
            if (c === 'L') {
              state = 'class';
            } else if (c === '[') {
              state = 'array';
            }
            break;
          case 'class':
            if (c === ';') {
              state = 'type';
            }
            break;
          case 'array':
            if (c === 'L') {
              state = 'class';
            } else if (c !== '[') {
              state = 'type';
            }
        }
      }
    };

    return DynInvokeOpcode;

  })(root.InvokeOpcode);

  root.LoadConstantOpcode = (function(_super) {
    __extends(LoadConstantOpcode, _super);

    function LoadConstantOpcode() {
      _ref2 = LoadConstantOpcode.__super__.constructor.apply(this, arguments);
      return _ref2;
    }

    LoadConstantOpcode.prototype.take_args = function(code_array, constant_pool) {
      var _ref3;

      this.constant_ref = code_array.get_uint(this.byte_count);
      this.constant = constant_pool.get(this.constant_ref);
      if ((_ref3 = this.constant.type) === 'String' || _ref3 === 'class') {
        return this.str_constant = constant_pool.get(this.constant.value);
      }
    };

    LoadConstantOpcode.prototype.annotate = function(idx, pool) {
      var _ref3;

      return ("\t#" + this.constant_ref + ";\t// " + this.constant.type + " ") + ((_ref3 = this.constant.type) === 'String' || _ref3 === 'class' ? util.escape_whitespace(this.constant.deref()) : this.constant.value);
    };

    LoadConstantOpcode.prototype._execute = function(rs) {
      var cdesc;

      switch (this.constant.type) {
        case 'String':
          rs.push(rs.init_string(this.str_constant.value, true));
          break;
        case 'class':
          cdesc = util.typestr2descriptor(this.str_constant.value);
          rs.async_op(function(resume_cb, except_cb) {
            return rs.get_cl().resolve_class(rs, cdesc, (function(cls) {
              return resume_cb(cls.get_class_object(rs), void 0, true);
            }), except_cb);
          });
          return;
        default:
          rs.push(this.constant.value);
      }
    };

    return LoadConstantOpcode;

  })(root.Opcode);

  root.BranchOpcode = (function(_super) {
    __extends(BranchOpcode, _super);

    function BranchOpcode(name, params) {
      var _ref3;

      if (params == null) {
        params = {};
      }
      if ((_ref3 = params.byte_count) == null) {
        params.byte_count = 2;
      }
      BranchOpcode.__super__.constructor.call(this, name, params);
    }

    BranchOpcode.prototype.take_args = function(code_array) {
      return this.offset = code_array.get_int(this.byte_count);
    };

    BranchOpcode.prototype.annotate = function(idx, pool) {
      return "\t" + (idx + this.offset);
    };

    return BranchOpcode;

  })(root.Opcode);

  root.UnaryBranchOpcode = (function(_super) {
    __extends(UnaryBranchOpcode, _super);

    function UnaryBranchOpcode(name, params) {
      UnaryBranchOpcode.__super__.constructor.call(this, name, {
        execute: function(rs) {
          var v;

          v = rs.pop();
          if (params.cmp(v)) {
            return this.inc_pc(rs, this.offset);
          }
        }
      });
    }

    return UnaryBranchOpcode;

  })(root.BranchOpcode);

  root.BinaryBranchOpcode = (function(_super) {
    __extends(BinaryBranchOpcode, _super);

    function BinaryBranchOpcode(name, params) {
      BinaryBranchOpcode.__super__.constructor.call(this, name, {
        execute: function(rs) {
          var v1, v2;

          v2 = rs.pop();
          v1 = rs.pop();
          if (params.cmp(v1, v2)) {
            return this.inc_pc(rs, this.offset);
          }
        }
      });
    }

    return BinaryBranchOpcode;

  })(root.BranchOpcode);

  root.PushOpcode = (function(_super) {
    __extends(PushOpcode, _super);

    function PushOpcode() {
      _ref3 = PushOpcode.__super__.constructor.apply(this, arguments);
      return _ref3;
    }

    PushOpcode.prototype.take_args = function(code_array) {
      return this.value = code_array.get_int(this.byte_count);
    };

    PushOpcode.prototype.annotate = function(idx, pool) {
      return "\t" + this.value;
    };

    PushOpcode.prototype._execute = function(rs) {
      return rs.push(this.value);
    };

    return PushOpcode;

  })(root.Opcode);

  root.IIncOpcode = (function(_super) {
    __extends(IIncOpcode, _super);

    function IIncOpcode(name, params) {
      IIncOpcode.__super__.constructor.call(this, name, params);
    }

    IIncOpcode.prototype.take_args = function(code_array, constant_pool, wide) {
      var arg_size;

      if (wide == null) {
        wide = false;
      }
      if (wide) {
        this.name += "_w";
        arg_size = 2;
        this.byte_count = 5;
      } else {
        arg_size = 1;
        this.byte_count = 2;
      }
      this.index = code_array.get_uint(arg_size);
      return this["const"] = code_array.get_int(arg_size);
    };

    IIncOpcode.prototype.annotate = function(idx, pool) {
      return "\t" + this.index + ", " + this["const"];
    };

    IIncOpcode.prototype._execute = function(rs) {
      var v;

      v = rs.cl(this.index) + this["const"];
      return rs.put_cl(this.index, v | 0);
    };

    return IIncOpcode;

  })(root.Opcode);

  root.LoadOpcode = (function(_super) {
    __extends(LoadOpcode, _super);

    function LoadOpcode(name, params) {
      var _ref4;

      if (params == null) {
        params = {};
      }
      if ((_ref4 = params.execute) == null) {
        params.execute = name.match(/[ld]load/) ? function(rs) {
          return rs.push2(rs.cl(this.var_num), null);
        } : function(rs) {
          return rs.push(rs.cl(this.var_num));
        };
      }
      LoadOpcode.__super__.constructor.call(this, name, params);
    }

    LoadOpcode.prototype.take_args = function(code_array) {
      return this.var_num = parseInt(this.name[6]);
    };

    return LoadOpcode;

  })(root.Opcode);

  root.LoadVarOpcode = (function(_super) {
    __extends(LoadVarOpcode, _super);

    function LoadVarOpcode() {
      _ref4 = LoadVarOpcode.__super__.constructor.apply(this, arguments);
      return _ref4;
    }

    LoadVarOpcode.prototype.take_args = function(code_array, constant_pool, wide) {
      if (wide == null) {
        wide = false;
      }
      if (wide) {
        this.name += "_w";
        this.byte_count = 3;
        return this.var_num = code_array.get_uint(2);
      } else {
        this.byte_count = 1;
        return this.var_num = code_array.get_uint(1);
      }
    };

    LoadVarOpcode.prototype.annotate = function(idx, pool) {
      return "\t" + this.var_num;
    };

    return LoadVarOpcode;

  })(root.LoadOpcode);

  root.StoreOpcode = (function(_super) {
    __extends(StoreOpcode, _super);

    function StoreOpcode(name, params) {
      var _ref5;

      if (params == null) {
        params = {};
      }
      if ((_ref5 = params.execute) == null) {
        params.execute = name.match(/[ld]store/) ? function(rs) {
          return rs.put_cl2(this.var_num, rs.pop2());
        } : function(rs) {
          return rs.put_cl(this.var_num, rs.pop());
        };
      }
      StoreOpcode.__super__.constructor.call(this, name, params);
    }

    StoreOpcode.prototype.take_args = function(code_array) {
      return this.var_num = parseInt(this.name[7]);
    };

    return StoreOpcode;

  })(root.Opcode);

  root.StoreVarOpcode = (function(_super) {
    __extends(StoreVarOpcode, _super);

    function StoreVarOpcode(name, params) {
      StoreVarOpcode.__super__.constructor.call(this, name, params);
    }

    StoreVarOpcode.prototype.take_args = function(code_array, constant_pool, wide) {
      if (wide == null) {
        wide = false;
      }
      if (wide) {
        this.name += "_w";
        this.byte_count = 3;
        return this.var_num = code_array.get_uint(2);
      } else {
        this.byte_count = 1;
        return this.var_num = code_array.get_uint(1);
      }
    };

    StoreVarOpcode.prototype.annotate = function(idx, pool) {
      return "\t" + this.var_num;
    };

    return StoreVarOpcode;

  })(root.StoreOpcode);

  root.SwitchOpcode = (function(_super) {
    __extends(SwitchOpcode, _super);

    function SwitchOpcode() {
      _ref5 = SwitchOpcode.__super__.constructor.apply(this, arguments);
      return _ref5;
    }

    SwitchOpcode.prototype.annotate = function(idx, pool) {
      var match, offset;

      return "{\n" + ((function() {
        var _ref6, _results;

        _ref6 = this.offsets;
        _results = [];
        for (match in _ref6) {
          offset = _ref6[match];
          _results.push("\t\t" + match + ": " + (idx + offset) + ";\n");
        }
        return _results;
      }).call(this)).join('') + ("\t\tdefault: " + (idx + this._default) + " }");
    };

    SwitchOpcode.prototype.execute = function(rs) {
      var key;

      key = rs.pop();
      if (key in this.offsets) {
        return this.inc_pc(rs, this.offsets[key]);
      } else {
        return this.inc_pc(rs, this._default);
      }
    };

    return SwitchOpcode;

  })(root.BranchOpcode);

  root.LookupSwitchOpcode = (function(_super) {
    __extends(LookupSwitchOpcode, _super);

    function LookupSwitchOpcode() {
      _ref6 = LookupSwitchOpcode.__super__.constructor.apply(this, arguments);
      return _ref6;
    }

    LookupSwitchOpcode.prototype.take_args = function(code_array, constant_pool) {
      var i, match, npairs, offset, padding_size, _i;

      padding_size = (4 - code_array.pos() % 4) % 4;
      code_array.skip(padding_size);
      this._default = code_array.get_int(4);
      npairs = code_array.get_int(4);
      this.offsets = {};
      for (i = _i = 0; _i < npairs; i = _i += 1) {
        match = code_array.get_int(4);
        offset = code_array.get_int(4);
        this.offsets[match] = offset;
      }
      return this.byte_count = padding_size + 8 * (npairs + 1);
    };

    return LookupSwitchOpcode;

  })(root.SwitchOpcode);

  root.TableSwitchOpcode = (function(_super) {
    __extends(TableSwitchOpcode, _super);

    function TableSwitchOpcode() {
      _ref7 = TableSwitchOpcode.__super__.constructor.apply(this, arguments);
      return _ref7;
    }

    TableSwitchOpcode.prototype.take_args = function(code_array, constant_pool) {
      var high, i, low, offset, padding_size, total_offsets, _i;

      padding_size = (4 - code_array.pos() % 4) % 4;
      code_array.skip(padding_size);
      this._default = code_array.get_int(4);
      low = code_array.get_int(4);
      high = code_array.get_int(4);
      this.offsets = {};
      total_offsets = high - low + 1;
      for (i = _i = 0; _i < total_offsets; i = _i += 1) {
        offset = code_array.get_int(4);
        this.offsets[low + i] = offset;
      }
      return this.byte_count = padding_size + 12 + 4 * total_offsets;
    };

    return TableSwitchOpcode;

  })(root.SwitchOpcode);

  root.NewArrayOpcode = (function(_super) {
    var arr_types;

    __extends(NewArrayOpcode, _super);

    arr_types = {
      4: 'Z',
      5: 'C',
      6: 'F',
      7: 'D',
      8: 'B',
      9: 'S',
      10: 'I',
      11: 'J'
    };

    function NewArrayOpcode(name, params) {
      NewArrayOpcode.__super__.constructor.call(this, name, params);
      this.byte_count = 1;
    }

    NewArrayOpcode.prototype.take_args = function(code_array, constant_pool) {
      var type_code;

      type_code = code_array.get_uint(1);
      return this.element_type = arr_types[type_code];
    };

    NewArrayOpcode.prototype.annotate = function(idx, pool) {
      return "\t" + util.internal2external[this.element_type];
    };

    return NewArrayOpcode;

  })(root.Opcode);

  root.MultiArrayOpcode = (function(_super) {
    __extends(MultiArrayOpcode, _super);

    function MultiArrayOpcode(name, params) {
      var _ref8;

      if (params == null) {
        params = {};
      }
      if ((_ref8 = params.byte_count) == null) {
        params.byte_count = 3;
      }
      MultiArrayOpcode.__super__.constructor.call(this, name, params);
    }

    MultiArrayOpcode.prototype.take_args = function(code_array, constant_pool) {
      this.class_ref = code_array.get_uint(2);
      this["class"] = constant_pool.get(this.class_ref).deref();
      return this.dim = code_array.get_uint(1);
    };

    MultiArrayOpcode.prototype.annotate = function(idx, pool) {
      return "\t#" + this.class_ref + ",  " + this.dim + ";";
    };

    MultiArrayOpcode.prototype.execute = function(rs) {
      var cls, new_execute,
        _this = this;

      cls = rs.get_class(this["class"], true);
      if (cls == null) {
        rs.async_op(function(resume_cb, except_cb) {
          return rs.get_cl().initialize_class(rs, _this["class"], (function(class_file) {
            return resume_cb(void 0, void 0, true, false);
          }), except_cb);
        });
        return;
      }
      new_execute = function(rs) {
        var arr_types, counts, d, default_val, init_arr,
          _this = this;

        counts = rs.curr_frame().stack.splice(-this.dim, this.dim);
        default_val = util.initial_value(this["class"].slice(this.dim));
        arr_types = (function() {
          var _i, _ref8, _results;

          _results = [];
          for (d = _i = 0, _ref8 = this.dim; _i < _ref8; d = _i += 1) {
            _results.push(this["class"].slice(d));
          }
          return _results;
        }).call(this);
        init_arr = function(curr_dim) {
          var array, i, len, type, _i, _j;

          len = counts[curr_dim];
          if (len < 0) {
            rs.java_throw(rs.get_bs_class('Ljava/lang/NegativeArraySizeException;'), "Tried to init dimension " + curr_dim + " of a " + _this.dim + " dimensional " + (_this["class"].toString()) + " array with length " + len);
          }
          type = arr_types[curr_dim];
          array = new Array(len);
          if (curr_dim + 1 === _this.dim) {
            for (i = _i = 0; _i < len; i = _i += 1) {
              array[i] = default_val;
            }
          } else {
            for (i = _j = 0; _j < len; i = _j += 1) {
              array[i] = init_arr(curr_dim + 1);
            }
          }
          return new JavaArray(rs, rs.get_bs_class(type), array);
        };
        return rs.push(init_arr(0));
      };
      new_execute.call(this, rs);
      this.execute = new_execute;
    };

    return MultiArrayOpcode;

  })(root.Opcode);

  root.ArrayLoadOpcode = (function(_super) {
    __extends(ArrayLoadOpcode, _super);

    function ArrayLoadOpcode() {
      _ref8 = ArrayLoadOpcode.__super__.constructor.apply(this, arguments);
      return _ref8;
    }

    ArrayLoadOpcode.prototype.execute = function(rs) {
      var array, idx, obj, _ref9;

      idx = rs.pop();
      obj = rs.check_null(rs.pop());
      array = obj.array;
      if (!((0 <= idx && idx < array.length))) {
        rs.java_throw(rs.get_bs_class('Ljava/lang/ArrayIndexOutOfBoundsException;'), "" + idx + " not in length " + array.length + " array of type " + (obj.cls.get_type()));
      }
      rs.push(array[idx]);
      if ((_ref9 = this.name[0]) === 'l' || _ref9 === 'd') {
        rs.push(null);
      }
    };

    return ArrayLoadOpcode;

  })(root.Opcode);

  root.ArrayStoreOpcode = (function(_super) {
    __extends(ArrayStoreOpcode, _super);

    function ArrayStoreOpcode() {
      _ref9 = ArrayStoreOpcode.__super__.constructor.apply(this, arguments);
      return _ref9;
    }

    ArrayStoreOpcode.prototype.execute = function(rs) {
      var array, idx, obj, value, _ref10;

      value = (_ref10 = this.name[0]) === 'l' || _ref10 === 'd' ? rs.pop2() : rs.pop();
      idx = rs.pop();
      obj = rs.check_null(rs.pop());
      array = obj.array;
      if (!((0 <= idx && idx < array.length))) {
        rs.java_throw(rs.get_bs_class('Ljava/lang/ArrayIndexOutOfBoundsException;'), "" + idx + " not in length " + array.length + " array of type " + (obj.cls.get_type()));
      }
      array[idx] = value;
    };

    return ArrayStoreOpcode;

  })(root.Opcode);

  root.ReturnOpcode = (function(_super) {
    __extends(ReturnOpcode, _super);

    function ReturnOpcode(name, params) {
      var _ref10;

      if (params == null) {
        params = {};
      }
      if ((_ref10 = params.execute) == null) {
        params.execute = name.match(/[ld]return/) ? function(rs) {
          var cf;

          cf = rs.meta_stack().pop();
          rs.push2(cf.stack[0], null);
          return false;
        } : name === 'return' ? function(rs) {
          rs.meta_stack().pop();
          return false;
        } : function(rs) {
          var cf;

          cf = rs.meta_stack().pop();
          rs.push(cf.stack[0]);
          return false;
        };
      }
      ReturnOpcode.__super__.constructor.call(this, name, params);
    }

    return ReturnOpcode;

  })(root.Opcode);

  jsr = function(rs) {
    rs.push(rs.curr_pc() + this.byte_count + 1);
    return this.inc_pc(rs, this.offset);
  };

  root.monitorenter = function(rs, monitor, inst) {
    var locked_thread;

    if ((locked_thread = rs.lock_refs[monitor]) != null) {
      if (locked_thread === rs.curr_thread) {
        rs.lock_counts[monitor]++;
      } else {
        if (inst != null) {
          inst.inc_pc(rs, 1);
        } else {
          rs.inc_pc(1);
        }
        rs.meta_stack().push({});
        rs.wait(monitor);
        return false;
      }
    } else {
      rs.lock_refs[monitor] = rs.curr_thread;
      rs.lock_counts[monitor] = 1;
    }
    return true;
  };

  root.monitorexit = function(rs, monitor) {
    var locked_thread;

    if ((locked_thread = rs.lock_refs[monitor]) == null) {
      return;
    }
    if (locked_thread === rs.curr_thread) {
      rs.lock_counts[monitor]--;
      if (rs.lock_counts[monitor] === 0) {
        delete rs.lock_refs[monitor];
        if (rs.waiting_threads[monitor] != null) {
          return rs.waiting_threads[monitor] = [];
        }
      }
    } else {
      return rs.java_throw(rs.get_bs_class('Ljava/lang/IllegalMonitorStateException;'), "Tried to monitorexit on lock not held by current thread");
    }
  };

  root.opcodes = {
    0: new root.Opcode('nop', {
      execute: function() {}
    }),
    1: new root.Opcode('aconst_null', {
      execute: function(rs) {
        return rs.push(null);
      }
    }),
    2: new root.Opcode('iconst_m1', {
      execute: function(rs) {
        return rs.push(-1);
      }
    }),
    3: new root.Opcode('iconst_0', {
      execute: function(rs) {
        return rs.push(0);
      }
    }),
    4: new root.Opcode('iconst_1', {
      execute: function(rs) {
        return rs.push(1);
      }
    }),
    5: new root.Opcode('iconst_2', {
      execute: function(rs) {
        return rs.push(2);
      }
    }),
    6: new root.Opcode('iconst_3', {
      execute: function(rs) {
        return rs.push(3);
      }
    }),
    7: new root.Opcode('iconst_4', {
      execute: function(rs) {
        return rs.push(4);
      }
    }),
    8: new root.Opcode('iconst_5', {
      execute: function(rs) {
        return rs.push(5);
      }
    }),
    9: new root.Opcode('lconst_0', {
      execute: function(rs) {
        return rs.push2(gLong.ZERO, null);
      }
    }),
    10: new root.Opcode('lconst_1', {
      execute: function(rs) {
        return rs.push2(gLong.ONE, null);
      }
    }),
    11: new root.Opcode('fconst_0', {
      execute: function(rs) {
        return rs.push(0);
      }
    }),
    12: new root.Opcode('fconst_1', {
      execute: function(rs) {
        return rs.push(1);
      }
    }),
    13: new root.Opcode('fconst_2', {
      execute: function(rs) {
        return rs.push(2);
      }
    }),
    14: new root.Opcode('dconst_0', {
      execute: function(rs) {
        return rs.push2(0, null);
      }
    }),
    15: new root.Opcode('dconst_1', {
      execute: function(rs) {
        return rs.push2(1, null);
      }
    }),
    16: new root.PushOpcode('bipush', {
      byte_count: 1
    }),
    17: new root.PushOpcode('sipush', {
      byte_count: 2
    }),
    18: new root.LoadConstantOpcode('ldc', {
      byte_count: 1
    }),
    19: new root.LoadConstantOpcode('ldc_w', {
      byte_count: 2
    }),
    20: new root.LoadConstantOpcode('ldc2_w', {
      byte_count: 2,
      execute: (function(rs) {
        return rs.push2(this.constant.value, null);
      })
    }),
    21: new root.LoadVarOpcode('iload'),
    22: new root.LoadVarOpcode('lload'),
    23: new root.LoadVarOpcode('fload'),
    24: new root.LoadVarOpcode('dload'),
    25: new root.LoadVarOpcode('aload'),
    26: new root.LoadOpcode('iload_0'),
    27: new root.LoadOpcode('iload_1'),
    28: new root.LoadOpcode('iload_2'),
    29: new root.LoadOpcode('iload_3'),
    30: new root.LoadOpcode('lload_0'),
    31: new root.LoadOpcode('lload_1'),
    32: new root.LoadOpcode('lload_2'),
    33: new root.LoadOpcode('lload_3'),
    34: new root.LoadOpcode('fload_0'),
    35: new root.LoadOpcode('fload_1'),
    36: new root.LoadOpcode('fload_2'),
    37: new root.LoadOpcode('fload_3'),
    38: new root.LoadOpcode('dload_0'),
    39: new root.LoadOpcode('dload_1'),
    40: new root.LoadOpcode('dload_2'),
    41: new root.LoadOpcode('dload_3'),
    42: new root.LoadOpcode('aload_0'),
    43: new root.LoadOpcode('aload_1'),
    44: new root.LoadOpcode('aload_2'),
    45: new root.LoadOpcode('aload_3'),
    46: new root.ArrayLoadOpcode('iaload'),
    47: new root.ArrayLoadOpcode('laload'),
    48: new root.ArrayLoadOpcode('faload'),
    49: new root.ArrayLoadOpcode('daload'),
    50: new root.ArrayLoadOpcode('aaload'),
    51: new root.ArrayLoadOpcode('baload'),
    52: new root.ArrayLoadOpcode('caload'),
    53: new root.ArrayLoadOpcode('saload'),
    54: new root.StoreVarOpcode('istore'),
    55: new root.StoreVarOpcode('lstore'),
    56: new root.StoreVarOpcode('fstore'),
    57: new root.StoreVarOpcode('dstore'),
    58: new root.StoreVarOpcode('astore'),
    59: new root.StoreOpcode('istore_0'),
    60: new root.StoreOpcode('istore_1'),
    61: new root.StoreOpcode('istore_2'),
    62: new root.StoreOpcode('istore_3'),
    63: new root.StoreOpcode('lstore_0'),
    64: new root.StoreOpcode('lstore_1'),
    65: new root.StoreOpcode('lstore_2'),
    66: new root.StoreOpcode('lstore_3'),
    67: new root.StoreOpcode('fstore_0'),
    68: new root.StoreOpcode('fstore_1'),
    69: new root.StoreOpcode('fstore_2'),
    70: new root.StoreOpcode('fstore_3'),
    71: new root.StoreOpcode('dstore_0'),
    72: new root.StoreOpcode('dstore_1'),
    73: new root.StoreOpcode('dstore_2'),
    74: new root.StoreOpcode('dstore_3'),
    75: new root.StoreOpcode('astore_0'),
    76: new root.StoreOpcode('astore_1'),
    77: new root.StoreOpcode('astore_2'),
    78: new root.StoreOpcode('astore_3'),
    79: new root.ArrayStoreOpcode('iastore'),
    80: new root.ArrayStoreOpcode('lastore'),
    81: new root.ArrayStoreOpcode('fastore'),
    82: new root.ArrayStoreOpcode('dastore'),
    83: new root.ArrayStoreOpcode('aastore'),
    84: new root.ArrayStoreOpcode('bastore'),
    85: new root.ArrayStoreOpcode('castore'),
    86: new root.ArrayStoreOpcode('sastore'),
    87: new root.Opcode('pop', {
      execute: function(rs) {
        return rs.pop();
      }
    }),
    88: new root.Opcode('pop2', {
      execute: function(rs) {
        return rs.pop2();
      }
    }),
    89: new root.Opcode('dup', {
      execute: function(rs) {
        var v;

        v = rs.pop();
        return rs.push2(v, v);
      }
    }),
    90: new root.Opcode('dup_x1', {
      execute: function(rs) {
        var v1, v2;

        v1 = rs.pop();
        v2 = rs.pop();
        return rs.push_array([v1, v2, v1]);
      }
    }),
    91: new root.Opcode('dup_x2', {
      execute: function(rs) {
        var v1, v2, v3, _ref10;

        _ref10 = [rs.pop(), rs.pop(), rs.pop()], v1 = _ref10[0], v2 = _ref10[1], v3 = _ref10[2];
        return rs.push_array([v1, v3, v2, v1]);
      }
    }),
    92: new root.Opcode('dup2', {
      execute: function(rs) {
        var v1, v2;

        v1 = rs.pop();
        v2 = rs.pop();
        return rs.push_array([v2, v1, v2, v1]);
      }
    }),
    93: new root.Opcode('dup2_x1', {
      execute: function(rs) {
        var v1, v2, v3, _ref10;

        _ref10 = [rs.pop(), rs.pop(), rs.pop()], v1 = _ref10[0], v2 = _ref10[1], v3 = _ref10[2];
        return rs.push_array([v2, v1, v3, v2, v1]);
      }
    }),
    94: new root.Opcode('dup2_x2', {
      execute: function(rs) {
        var v1, v2, v3, v4, _ref10;

        _ref10 = [rs.pop(), rs.pop(), rs.pop(), rs.pop()], v1 = _ref10[0], v2 = _ref10[1], v3 = _ref10[2], v4 = _ref10[3];
        return rs.push_array([v2, v1, v4, v3, v2, v1]);
      }
    }),
    95: new root.Opcode('swap', {
      execute: function(rs) {
        var v1, v2;

        v2 = rs.pop();
        v1 = rs.pop();
        return rs.push2(v2, v1);
      }
    }),
    96: new root.Opcode('iadd', {
      execute: function(rs) {
        return rs.push((rs.pop() + rs.pop()) | 0);
      }
    }),
    97: new root.Opcode('ladd', {
      execute: function(rs) {
        return rs.push2(rs.pop2().add(rs.pop2()), null);
      }
    }),
    98: new root.Opcode('fadd', {
      execute: function(rs) {
        return rs.push(util.wrap_float(rs.pop() + rs.pop()));
      }
    }),
    99: new root.Opcode('dadd', {
      execute: function(rs) {
        return rs.push2(rs.pop2() + rs.pop2(), null);
      }
    }),
    100: new root.Opcode('isub', {
      execute: function(rs) {
        return rs.push((-rs.pop() + rs.pop()) | 0);
      }
    }),
    101: new root.Opcode('lsub', {
      execute: function(rs) {
        return rs.push2(rs.pop2().negate().add(rs.pop2()), null);
      }
    }),
    102: new root.Opcode('fsub', {
      execute: function(rs) {
        return rs.push(util.wrap_float(-rs.pop() + rs.pop()));
      }
    }),
    103: new root.Opcode('dsub', {
      execute: function(rs) {
        return rs.push2(-rs.pop2() + rs.pop2(), null);
      }
    }),
    104: new root.Opcode('imul', {
      execute: function(rs) {
        return rs.push(Math.imul(rs.pop(), rs.pop()));
      }
    }),
    105: new root.Opcode('lmul', {
      execute: function(rs) {
        return rs.push2(rs.pop2().multiply(rs.pop2()), null);
      }
    }),
    106: new root.Opcode('fmul', {
      execute: function(rs) {
        return rs.push(util.wrap_float(rs.pop() * rs.pop()));
      }
    }),
    107: new root.Opcode('dmul', {
      execute: function(rs) {
        return rs.push2(rs.pop2() * rs.pop2(), null);
      }
    }),
    108: new root.Opcode('idiv', {
      execute: function(rs) {
        var v;

        v = rs.pop();
        return rs.push(util.int_div(rs, rs.pop(), v));
      }
    }),
    109: new root.Opcode('ldiv', {
      execute: function(rs) {
        var v;

        v = rs.pop2();
        return rs.push2(util.long_div(rs, rs.pop2(), v), null);
      }
    }),
    110: new root.Opcode('fdiv', {
      execute: function(rs) {
        var a;

        a = rs.pop();
        return rs.push(util.wrap_float(rs.pop() / a));
      }
    }),
    111: new root.Opcode('ddiv', {
      execute: function(rs) {
        var v;

        v = rs.pop2();
        return rs.push2(rs.pop2() / v, null);
      }
    }),
    112: new root.Opcode('irem', {
      execute: function(rs) {
        var v2;

        v2 = rs.pop();
        return rs.push(util.int_mod(rs, rs.pop(), v2));
      }
    }),
    113: new root.Opcode('lrem', {
      execute: function(rs) {
        var v2;

        v2 = rs.pop2();
        return rs.push2(util.long_mod(rs, rs.pop2(), v2), null);
      }
    }),
    114: new root.Opcode('frem', {
      execute: function(rs) {
        var b;

        b = rs.pop();
        return rs.push(rs.pop() % b);
      }
    }),
    115: new root.Opcode('drem', {
      execute: function(rs) {
        var v2;

        v2 = rs.pop2();
        return rs.push2(rs.pop2() % v2, null);
      }
    }),
    116: new root.Opcode('ineg', {
      execute: function(rs) {
        return rs.push(-rs.pop() | 0);
      }
    }),
    117: new root.Opcode('lneg', {
      execute: function(rs) {
        return rs.push2(rs.pop2().negate(), null);
      }
    }),
    118: new root.Opcode('fneg', {
      execute: function(rs) {
        return rs.push(-rs.pop());
      }
    }),
    119: new root.Opcode('dneg', {
      execute: function(rs) {
        return rs.push2(-rs.pop2(), null);
      }
    }),
    120: new root.Opcode('ishl', {
      execute: function(rs) {
        var s;

        s = rs.pop();
        return rs.push(rs.pop() << s);
      }
    }),
    121: new root.Opcode('lshl', {
      execute: function(rs) {
        var s;

        s = rs.pop();
        return rs.push2(rs.pop2().shiftLeft(gLong.fromInt(s)), null);
      }
    }),
    122: new root.Opcode('ishr', {
      execute: function(rs) {
        var s;

        s = rs.pop();
        return rs.push(rs.pop() >> s);
      }
    }),
    123: new root.Opcode('lshr', {
      execute: function(rs) {
        var s;

        s = rs.pop();
        return rs.push2(rs.pop2().shiftRight(gLong.fromInt(s)), null);
      }
    }),
    124: new root.Opcode('iushr', {
      execute: function(rs) {
        var s;

        s = rs.pop();
        return rs.push(rs.pop() >>> s);
      }
    }),
    125: new root.Opcode('lushr', {
      execute: function(rs) {
        var s;

        s = rs.pop();
        return rs.push2(rs.pop2().shiftRightUnsigned(gLong.fromInt(s)), null);
      }
    }),
    126: new root.Opcode('iand', {
      execute: function(rs) {
        return rs.push(rs.pop() & rs.pop());
      }
    }),
    127: new root.Opcode('land', {
      execute: function(rs) {
        return rs.push2(rs.pop2().and(rs.pop2()), null);
      }
    }),
    128: new root.Opcode('ior', {
      execute: function(rs) {
        return rs.push(rs.pop() | rs.pop());
      }
    }),
    129: new root.Opcode('lor', {
      execute: function(rs) {
        return rs.push2(rs.pop2().or(rs.pop2()), null);
      }
    }),
    130: new root.Opcode('ixor', {
      execute: function(rs) {
        return rs.push(rs.pop() ^ rs.pop());
      }
    }),
    131: new root.Opcode('lxor', {
      execute: function(rs) {
        return rs.push2(rs.pop2().xor(rs.pop2()), null);
      }
    }),
    132: new root.IIncOpcode('iinc'),
    133: new root.Opcode('i2l', {
      execute: function(rs) {
        return rs.push2(gLong.fromInt(rs.pop()), null);
      }
    }),
    134: new root.Opcode('i2f', {
      execute: function(rs) {}
    }),
    135: new root.Opcode('i2d', {
      execute: function(rs) {
        return rs.push(null);
      }
    }),
    136: new root.Opcode('l2i', {
      execute: function(rs) {
        return rs.push(rs.pop2().toInt());
      }
    }),
    137: new root.Opcode('l2f', {
      execute: function(rs) {
        return rs.push(rs.pop2().toNumber());
      }
    }),
    138: new root.Opcode('l2d', {
      execute: function(rs) {
        return rs.push2(rs.pop2().toNumber(), null);
      }
    }),
    139: new root.Opcode('f2i', {
      execute: function(rs) {
        return rs.push(util.float2int(rs.pop()));
      }
    }),
    140: new root.Opcode('f2l', {
      execute: function(rs) {
        return rs.push2(gLong.fromNumber(rs.pop()), null);
      }
    }),
    141: new root.Opcode('f2d', {
      execute: function(rs) {
        return rs.push(null);
      }
    }),
    142: new root.Opcode('d2i', {
      execute: function(rs) {
        return rs.push(util.float2int(rs.pop2()));
      }
    }),
    143: new root.Opcode('d2l', {
      execute: function(rs) {
        var d_val;

        d_val = rs.pop2();
        if (d_val === Number.POSITIVE_INFINITY) {
          return rs.push2(gLong.MAX_VALUE, null);
        } else if (d_val === Number.NEGATIVE_INFINITY) {
          return rs.push2(gLong.MIN_VALUE, null);
        } else {
          return rs.push2(gLong.fromNumber(d_val), null);
        }
      }
    }),
    144: new root.Opcode('d2f', {
      execute: function(rs) {
        return rs.push(util.wrap_float(rs.pop2()));
      }
    }),
    145: new root.Opcode('i2b', {
      execute: function(rs) {
        return rs.push((rs.pop() << 24) >> 24);
      }
    }),
    146: new root.Opcode('i2c', {
      execute: function(rs) {
        return rs.push(rs.pop() & 0xFFFF);
      }
    }),
    147: new root.Opcode('i2s', {
      execute: function(rs) {
        return rs.push((rs.pop() << 16) >> 16);
      }
    }),
    148: new root.Opcode('lcmp', {
      execute: function(rs) {
        var v2;

        v2 = rs.pop2();
        return rs.push(rs.pop2().compare(v2));
      }
    }),
    149: new root.Opcode('fcmpl', {
      execute: function(rs) {
        var v2, _ref10;

        v2 = rs.pop();
        return rs.push((_ref10 = util.cmp(rs.pop(), v2)) != null ? _ref10 : -1);
      }
    }),
    150: new root.Opcode('fcmpg', {
      execute: function(rs) {
        var v2, _ref10;

        v2 = rs.pop();
        return rs.push((_ref10 = util.cmp(rs.pop(), v2)) != null ? _ref10 : 1);
      }
    }),
    151: new root.Opcode('dcmpl', {
      execute: function(rs) {
        var v2, _ref10;

        v2 = rs.pop2();
        return rs.push((_ref10 = util.cmp(rs.pop2(), v2)) != null ? _ref10 : -1);
      }
    }),
    152: new root.Opcode('dcmpg', {
      execute: function(rs) {
        var v2, _ref10;

        v2 = rs.pop2();
        return rs.push((_ref10 = util.cmp(rs.pop2(), v2)) != null ? _ref10 : 1);
      }
    }),
    153: new root.UnaryBranchOpcode('ifeq', {
      cmp: function(v) {
        return v === 0;
      }
    }),
    154: new root.UnaryBranchOpcode('ifne', {
      cmp: function(v) {
        return v !== 0;
      }
    }),
    155: new root.UnaryBranchOpcode('iflt', {
      cmp: function(v) {
        return v < 0;
      }
    }),
    156: new root.UnaryBranchOpcode('ifge', {
      cmp: function(v) {
        return v >= 0;
      }
    }),
    157: new root.UnaryBranchOpcode('ifgt', {
      cmp: function(v) {
        return v > 0;
      }
    }),
    158: new root.UnaryBranchOpcode('ifle', {
      cmp: function(v) {
        return v <= 0;
      }
    }),
    159: new root.BinaryBranchOpcode('if_icmpeq', {
      cmp: function(v1, v2) {
        return v1 === v2;
      }
    }),
    160: new root.BinaryBranchOpcode('if_icmpne', {
      cmp: function(v1, v2) {
        return v1 !== v2;
      }
    }),
    161: new root.BinaryBranchOpcode('if_icmplt', {
      cmp: function(v1, v2) {
        return v1 < v2;
      }
    }),
    162: new root.BinaryBranchOpcode('if_icmpge', {
      cmp: function(v1, v2) {
        return v1 >= v2;
      }
    }),
    163: new root.BinaryBranchOpcode('if_icmpgt', {
      cmp: function(v1, v2) {
        return v1 > v2;
      }
    }),
    164: new root.BinaryBranchOpcode('if_icmple', {
      cmp: function(v1, v2) {
        return v1 <= v2;
      }
    }),
    165: new root.BinaryBranchOpcode('if_acmpeq', {
      cmp: function(v1, v2) {
        return v1 === v2;
      }
    }),
    166: new root.BinaryBranchOpcode('if_acmpne', {
      cmp: function(v1, v2) {
        return v1 !== v2;
      }
    }),
    167: new root.BranchOpcode('goto', {
      execute: function(rs) {
        return this.inc_pc(rs, this.offset);
      }
    }),
    168: new root.BranchOpcode('jsr', {
      execute: jsr
    }),
    169: new root.Opcode('ret', {
      byte_count: 1,
      execute: function(rs) {
        return this.goto_pc(rs, rs.cl(this.args[0]));
      }
    }),
    170: new root.TableSwitchOpcode('tableswitch'),
    171: new root.LookupSwitchOpcode('lookupswitch'),
    172: new root.ReturnOpcode('ireturn'),
    173: new root.ReturnOpcode('lreturn'),
    174: new root.ReturnOpcode('freturn'),
    175: new root.ReturnOpcode('dreturn'),
    176: new root.ReturnOpcode('areturn'),
    177: new root.ReturnOpcode('return'),
    178: new root.FieldOpcode('getstatic', {
      execute: function(rs) {
        var cls_type, new_execute, ref_cls, _ref10,
          _this = this;

        ref_cls = rs.get_class(this.field_spec["class"], true);
        new_execute = (_ref10 = this.field_spec.type) !== 'J' && _ref10 !== 'D' ? function(rs) {
          return rs.push(this.cls.static_get(rs, this.field_spec.name));
        } : function(rs) {
          return rs.push2(this.cls.static_get(rs, this.field_spec.name), null);
        };
        if (ref_cls != null) {
          cls_type = ref_cls.field_lookup(rs, this.field_spec.name).cls.get_type();
          this.cls = rs.get_class(cls_type, true);
          if (this.cls != null) {
            new_execute.call(this, rs);
            this.execute = new_execute;
          } else {
            rs.async_op(function(resume_cb, except_cb) {
              return rs.get_cl().initialize_class(rs, cls_type, (function(class_file) {
                return resume_cb(void 0, void 0, true, false);
              }), except_cb);
            });
          }
        } else {
          rs.async_op(function(resume_cb, except_cb) {
            return rs.get_cl().initialize_class(rs, _this.field_spec["class"], (function(class_file) {
              return resume_cb(void 0, void 0, true, false);
            }), except_cb);
          });
        }
      }
    }),
    179: new root.FieldOpcode('putstatic', {
      execute: function(rs) {
        var cls_type, new_execute, ref_cls, _ref10,
          _this = this;

        ref_cls = rs.get_class(this.field_spec["class"], true);
        new_execute = (_ref10 = this.field_spec.type) !== 'J' && _ref10 !== 'D' ? function(rs) {
          return this.cls.static_put(rs, this.field_spec.name, rs.pop());
        } : function(rs) {
          return this.cls.static_put(rs, this.field_spec.name, rs.pop2());
        };
        if (ref_cls != null) {
          cls_type = ref_cls.field_lookup(rs, this.field_spec.name).cls.get_type();
          this.cls = rs.get_class(cls_type, true);
          if (this.cls != null) {
            new_execute.call(this, rs);
            this.execute = new_execute;
          } else {
            rs.async_op(function(resume_cb, except_cb) {
              return rs.get_cl().initialize_class(rs, cls_type, (function(class_file) {
                return resume_cb(void 0, void 0, true, false);
              }), except_cb);
            });
          }
        } else {
          rs.async_op(function(resume_cb, except_cb) {
            return rs.get_cl().initialize_class(rs, _this.field_spec["class"], (function(class_file) {
              return resume_cb(void 0, void 0, true, false);
            }), except_cb);
          });
        }
      }
    }),
    180: new root.FieldOpcode('getfield', {
      execute: function(rs) {
        var cls, field, name, new_execute, obj, _ref10,
          _this = this;

        obj = rs.check_null(rs.peek());
        cls = rs.get_class(this.field_spec["class"], true);
        if (cls != null) {
          field = cls.field_lookup(rs, this.field_spec.name);
          name = field.cls.get_type() + this.field_spec.name;
          new_execute = (_ref10 = this.field_spec.type) !== 'J' && _ref10 !== 'D' ? function(rs) {
            var val;

            val = rs.check_null(rs.pop()).get_field(rs, name);
            return rs.push(val);
          } : function(rs) {
            var val;

            val = rs.check_null(rs.pop()).get_field(rs, name);
            return rs.push2(val, null);
          };
          new_execute.call(this, rs);
          this.execute = new_execute;
        } else {
          rs.async_op(function(resume_cb, except_cb) {
            return rs.get_cl().resolve_class(rs, _this.field_spec["class"], (function() {
              return resume_cb(void 0, void 0, true, false);
            }), except_cb);
          });
        }
      }
    }),
    181: new root.FieldOpcode('putfield', {
      execute: function(rs) {
        var cls_obj, field, name, new_execute, _obj, _ref10, _ref11,
          _this = this;

        if ((_ref10 = this.field_spec.type) === 'J' || _ref10 === 'D') {
          _obj = rs.check_null(rs.peek(2));
        } else {
          _obj = rs.check_null(rs.peek(1));
        }
        cls_obj = rs.get_class(this.field_spec["class"], true);
        if (cls_obj != null) {
          field = cls_obj.field_lookup(rs, this.field_spec.name);
          name = field.cls.get_type() + this.field_spec.name;
          new_execute = (_ref11 = this.field_spec.type) !== 'J' && _ref11 !== 'D' ? function(rs) {
            var val;

            val = rs.pop();
            return rs.check_null(rs.pop()).set_field(rs, name, val);
          } : function(rs) {
            var val;

            val = rs.pop2();
            return rs.check_null(rs.pop()).set_field(rs, name, val);
          };
          new_execute.call(this, rs);
          this.execute = new_execute;
        } else {
          rs.async_op(function(resume_cb, except_cb) {
            return rs.get_cl().resolve_class(rs, _this.field_spec["class"], (function() {
              return resume_cb(void 0, void 0, true, false);
            }), except_cb);
          });
        }
      }
    }),
    182: new root.DynInvokeOpcode('invokevirtual'),
    183: new root.InvokeOpcode('invokespecial'),
    184: new root.InvokeOpcode('invokestatic'),
    185: new root.DynInvokeOpcode('invokeinterface'),
    187: new root.ClassOpcode('new', {
      execute: function(rs) {
        var _this = this;

        this.cls = rs.get_class(this["class"], true);
        if (this.cls != null) {
          if (this.cls.is_castable(rs.get_bs_cl().get_resolved_class('Ljava/lang/ClassLoader;'))) {
            rs.push(new JavaClassLoaderObject(rs, this.cls));
            return this.execute = function(rs) {
              return rs.push(new JavaClassLoaderObject(rs, this.cls));
            };
          } else {
            rs.push(new JavaObject(rs, this.cls));
            return this.execute = function(rs) {
              return rs.push(new JavaObject(rs, this.cls));
            };
          }
        } else {
          return rs.async_op(function(resume_cb, except_cb) {
            var success_fn;

            success_fn = function(class_file) {
              var obj;

              if (class_file.is_castable(rs.get_bs_cl().get_resolved_class('Ljava/lang/ClassLoader;'))) {
                obj = new JavaClassLoaderObject(rs, class_file);
              } else {
                obj = new JavaObject(rs, class_file);
              }
              return resume_cb(obj, void 0, true);
            };
            return rs.get_cl().initialize_class(rs, _this["class"], success_fn, except_cb);
          });
        }
      }
    }),
    188: new root.NewArrayOpcode('newarray', {
      execute: function(rs) {
        return rs.push(rs.heap_newarray(this.element_type, rs.pop()));
      }
    }),
    189: new root.ClassOpcode('anewarray', {
      execute: function(rs) {
        var cls, new_execute,
          _this = this;

        cls = rs.get_cl().get_resolved_class(this["class"], true);
        if (cls != null) {
          new_execute = function(rs) {
            return rs.push(rs.heap_newarray(this["class"], rs.pop()));
          };
          new_execute.call(this, rs);
          this.execute = new_execute;
        } else {
          rs.async_op(function(resume_cb, except_cb) {
            return rs.get_cl().resolve_class(rs, _this["class"], (function(class_file) {
              return resume_cb(void 0, void 0, true, false);
            }), except_cb);
          });
        }
      }
    }),
    190: new root.Opcode('arraylength', {
      execute: function(rs) {
        return rs.push(rs.check_null(rs.pop()).array.length);
      }
    }),
    191: new root.Opcode('athrow', {
      execute: function(rs) {
        throw new JavaException(rs.pop());
      }
    }),
    192: new root.ClassOpcode('checkcast', {
      execute: function(rs) {
        var new_execute,
          _this = this;

        this.cls = rs.get_cl().get_resolved_class(this["class"], true);
        if (this.cls != null) {
          new_execute = function(rs) {
            var candidate_class, o, target_class;

            o = rs.peek();
            if ((o != null) && !o.cls.is_castable(this.cls)) {
              target_class = this.cls.toExternalString();
              candidate_class = o.cls.toExternalString();
              return rs.java_throw(rs.get_bs_class('Ljava/lang/ClassCastException;'), "" + candidate_class + " cannot be cast to " + target_class);
            }
          };
          new_execute.call(this, rs);
          return this.execute = new_execute;
        } else {
          return rs.async_op(function(resume_cb, except_cb) {
            return rs.get_cl().resolve_class(rs, _this["class"], (function() {
              return resume_cb(void 0, void 0, true, false);
            }), except_cb);
          });
        }
      }
    }),
    193: new root.ClassOpcode('instanceof', {
      execute: function(rs) {
        var new_execute,
          _this = this;

        this.cls = rs.get_cl().get_resolved_class(this["class"], true);
        if (this.cls != null) {
          new_execute = function(rs) {
            var o;

            o = rs.pop();
            return rs.push(o != null ? o.cls.is_castable(this.cls) + 0 : 0);
          };
          new_execute.call(this, rs);
          return this.execute = new_execute;
        } else {
          return rs.async_op(function(resume_cb, except_cb) {
            return rs.get_cl().resolve_class(rs, _this["class"], (function() {
              return resume_cb(void 0, void 0, true, false);
            }), except_cb);
          });
        }
      }
    }),
    194: new root.Opcode('monitorenter', {
      execute: function(rs) {
        if (!root.monitorenter(rs, rs.pop(), this)) {
          throw ReturnException;
        }
      }
    }),
    195: new root.Opcode('monitorexit', {
      execute: function(rs) {
        return root.monitorexit(rs, rs.pop());
      }
    }),
    197: new root.MultiArrayOpcode('multianewarray'),
    198: new root.UnaryBranchOpcode('ifnull', {
      cmp: function(v) {
        return v == null;
      }
    }),
    199: new root.UnaryBranchOpcode('ifnonnull', {
      cmp: function(v) {
        return v != null;
      }
    }),
    200: new root.BranchOpcode('goto_w', {
      byte_count: 4,
      execute: function(rs) {
        return this.inc_pc(rs, this.offset);
      }
    }),
    201: new root.BranchOpcode('jsr_w', {
      byte_count: 4,
      execute: jsr
    })
  };

}).call(this);
;
// Generated by CoffeeScript 1.6.2
(function() {
  "use strict";
  var AnnotationDefault, Code, ConstantValue, Deprecated, EnclosingMethod, ExceptionHandler, Exceptions, InnerClasses, LineNumberTable, LocalVariableTable, RuntimeVisibleAnnotations, Signature, SourceFile, StackMapTable, Synthetic, opcodes, root, util, _ref;

  util = require('./util');

  opcodes = require('./opcodes');

  root = typeof exports !== "undefined" && exports !== null ? exports : (_ref = window.attributes) != null ? _ref : window.attributes = {};

  ExceptionHandler = (function() {
    function ExceptionHandler() {}

    ExceptionHandler.prototype.name = 'ExceptionHandler';

    ExceptionHandler.prototype.parse = function(bytes_array, constant_pool) {
      var cti;

      this.start_pc = bytes_array.get_uint(2);
      this.end_pc = bytes_array.get_uint(2);
      this.handler_pc = bytes_array.get_uint(2);
      cti = bytes_array.get_uint(2);
      return this.catch_type = cti === 0 ? "<any>" : constant_pool.get(cti).deref();
    };

    return ExceptionHandler;

  })();

  Code = (function() {
    function Code() {}

    Code.prototype.name = 'Code';

    Code.prototype.parse = function(bytes_array, constant_pool) {
      var eh, except_len, _i, _len, _ref1;

      this.constant_pool = constant_pool;
      this.max_stack = bytes_array.get_uint(2);
      this.max_locals = bytes_array.get_uint(2);
      this.code_len = bytes_array.get_uint(4);
      if (this.code_len === 0) {
        (typeof RELEASE !== "undefined" && RELEASE !== null) || (function() {
          throw "Code.parse error: Code length is zero";
        })();
      }
      this._code_array = bytes_array.splice(this.code_len);
      this.opcodes = null;
      except_len = bytes_array.get_uint(2);
      this.exception_handlers = (function() {
        var _i, _results;

        _results = [];
        for (_i = 0; 0 <= except_len ? _i < except_len : _i > except_len; 0 <= except_len ? _i++ : _i--) {
          _results.push(new ExceptionHandler);
        }
        return _results;
      })();
      _ref1 = this.exception_handlers;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        eh = _ref1[_i];
        eh.parse(bytes_array, constant_pool);
      }
      this.attrs = root.make_attributes(bytes_array, constant_pool);
      return this.run_stamp = 0;
    };

    Code.prototype.parse_code = function() {
      var c, op, op_index, wide;

      this.opcodes = new Array(this.code_len);
      while (this._code_array.has_bytes()) {
        op_index = this._code_array.pos();
        c = this._code_array.get_uint(1);
        wide = c === 196;
        if (wide) {
          c = this._code_array.get_uint(1);
        }
        if (opcodes.opcodes[c] == null) {
          (typeof RELEASE !== "undefined" && RELEASE !== null) || (function() {
            throw "unknown opcode code: " + c;
          })();
        }
        op = Object.create(opcodes.opcodes[c]);
        op.take_args(this._code_array, this.constant_pool, wide);
        this.opcodes[op_index] = op;
      }
      this._code_array.rewind();
    };

    Code.prototype.each_opcode = function(fn) {
      var i, _i, _ref1;

      for (i = _i = 0, _ref1 = this.code_len; 0 <= _ref1 ? _i <= _ref1 : _i >= _ref1; i = 0 <= _ref1 ? ++_i : --_i) {
        if (i in this.opcodes) {
          fn(i, this.opcodes[i]);
        }
      }
    };

    Code.prototype.get_attribute = function(name) {
      var attr, _i, _len, _ref1;

      _ref1 = this.attrs;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        attr = _ref1[_i];
        if (attr.name === name) {
          return attr;
        }
      }
      return null;
    };

    return Code;

  })();

  LineNumberTable = (function() {
    function LineNumberTable() {}

    LineNumberTable.prototype.name = 'LineNumberTable';

    LineNumberTable.prototype.parse = function(bytes_array, constant_pool) {
      var i, ln, lnt_len, spc, _i, _results;

      this.entries = [];
      lnt_len = bytes_array.get_uint(2);
      _results = [];
      for (i = _i = 0; _i < lnt_len; i = _i += 1) {
        spc = bytes_array.get_uint(2);
        ln = bytes_array.get_uint(2);
        _results.push(this.entries.push({
          'start_pc': spc,
          'line_number': ln
        }));
      }
      return _results;
    };

    LineNumberTable.prototype.disassemblyOutput = function() {
      var entry, rv, _i, _len, _ref1;

      rv = "  LineNumberTable:\n";
      _ref1 = this.entries;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        entry = _ref1[_i];
        rv += "   line " + entry.line_number + ": " + entry.start_pc + "\n";
      }
      return rv;
    };

    return LineNumberTable;

  })();

  SourceFile = (function() {
    function SourceFile() {}

    SourceFile.prototype.name = 'SourceFile';

    SourceFile.prototype.parse = function(bytes_array, constant_pool) {
      return this.filename = constant_pool.get(bytes_array.get_uint(2)).value;
    };

    return SourceFile;

  })();

  StackMapTable = (function() {
    var parse_entries, parse_verification_type_info;

    function StackMapTable() {}

    StackMapTable.prototype.name = 'StackMapTable';

    StackMapTable.prototype.parse = function(bytes_array, constant_pool) {
      var i;

      this.num_entries = bytes_array.get_uint(2);
      return this.entries = (function() {
        var _i, _ref1, _results;

        _results = [];
        for (i = _i = 0, _ref1 = this.num_entries; _i < _ref1; i = _i += 1) {
          _results.push(parse_entries(bytes_array, constant_pool));
        }
        return _results;
      }).call(this);
    };

    parse_entries = function(bytes_array, constant_pool) {
      var frame_type, i, num_locals, num_stack_items;

      frame_type = bytes_array.get_uint(1);
      if ((0 <= frame_type && frame_type < 64)) {
        return {
          frame_type: frame_type,
          frame_name: 'same'
        };
      } else if ((64 <= frame_type && frame_type < 128)) {
        return {
          frame_type: frame_type,
          frame_name: 'same_locals_1_stack_item',
          stack: [parse_verification_type_info(bytes_array, constant_pool)]
        };
      } else if ((128 <= frame_type && frame_type < 247)) {

      } else if (frame_type === 247) {
        return {
          frame_type: frame_type,
          frame_name: 'same_locals_1_stack_item_frame_extended',
          offset_delta: bytes_array.get_uint(2),
          stack: [parse_verification_type_info(bytes_array, constant_pool)]
        };
      } else if ((248 <= frame_type && frame_type < 251)) {
        return {
          frame_type: frame_type,
          frame_name: 'chop',
          offset_delta: [bytes_array.get_uint(2)]
        };
      } else if (frame_type === 251) {
        return {
          frame_type: frame_type,
          frame_name: 'same_frame_extended',
          offset_delta: [bytes_array.get_uint(2)]
        };
      } else if ((252 <= frame_type && frame_type < 255)) {
        return {
          frame_type: frame_type,
          frame_name: 'append',
          offset_delta: bytes_array.get_uint(2),
          locals: (function() {
            var _i, _ref1, _results;

            _results = [];
            for (i = _i = 0, _ref1 = frame_type - 251; _i < _ref1; i = _i += 1) {
              _results.push(parse_verification_type_info(bytes_array, constant_pool));
            }
            return _results;
          })()
        };
      } else if (frame_type === 255) {
        return {
          frame_type: frame_type,
          frame_name: 'full_frame',
          offset_delta: bytes_array.get_uint(2),
          num_locals: num_locals = bytes_array.get_uint(2),
          locals: (function() {
            var _i, _results;

            _results = [];
            for (i = _i = 0; _i < num_locals; i = _i += 1) {
              _results.push(parse_verification_type_info(bytes_array, constant_pool));
            }
            return _results;
          })(),
          num_stack_items: num_stack_items = bytes_array.get_uint(2),
          stack: (function() {
            var _i, _results;

            _results = [];
            for (i = _i = 0; _i < num_stack_items; i = _i += 1) {
              _results.push(parse_verification_type_info(bytes_array, constant_pool));
            }
            return _results;
          })()
        };
      }
    };

    parse_verification_type_info = function(bytes_array, constant_pool) {
      var cls, offset, tag, tag_to_type;

      tag = bytes_array.get_uint(1);
      if (tag === 7) {
        cls = constant_pool.get(bytes_array.get_uint(2)).deref();
        return 'class ' + (/\w/.test(cls[0]) ? util.descriptor2typestr(cls) : "\"" + cls + "\"");
      } else if (tag === 8) {
        offset = bytes_array.get_uint(2);
        return 'uninitialized ' + offset;
      } else {
        tag_to_type = ['bogus', 'int', 'float', 'double', 'long', 'null', 'this', 'object', 'uninitialized'];
        return tag_to_type[tag];
      }
    };

    StackMapTable.prototype.disassemblyOutput = function() {
      var entry, rv, _i, _len, _ref1;

      rv = "  StackMapTable: number_of_entries = " + this.num_entries + "\n";
      _ref1 = this.entries;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        entry = _ref1[_i];
        rv += "   frame_type = " + entry.frame_type + " /* " + entry.frame_name + " */\n";
        if (entry.offset_delta != null) {
          rv += "     offset_delta = " + entry.offset_delta + "\n";
        }
        if (entry.locals != null) {
          rv += "     locals = [ " + (entry.locals.join(', ')) + " ]\n";
        }
        if (entry.stack != null) {
          rv += "     stack = [ " + (entry.stack.join(', ')) + " ]\n";
        }
      }
      return rv;
    };

    return StackMapTable;

  })();

  LocalVariableTable = (function() {
    function LocalVariableTable() {}

    LocalVariableTable.prototype.name = 'LocalVariableTable';

    LocalVariableTable.prototype.parse = function(bytes_array, constant_pool) {
      var i;

      this.num_entries = bytes_array.get_uint(2);
      return this.entries = (function() {
        var _i, _ref1, _results;

        _results = [];
        for (i = _i = 0, _ref1 = this.num_entries; _i < _ref1; i = _i += 1) {
          _results.push(this.parse_entries(bytes_array, constant_pool));
        }
        return _results;
      }).call(this);
    };

    LocalVariableTable.prototype.parse_entries = function(bytes_array, constant_pool) {
      return {
        start_pc: bytes_array.get_uint(2),
        length: bytes_array.get_uint(2),
        name: constant_pool.get(bytes_array.get_uint(2)).value,
        descriptor: constant_pool.get(bytes_array.get_uint(2)).value,
        ref: bytes_array.get_uint(2)
      };
    };

    LocalVariableTable.prototype.disassemblyOutput = function() {
      var entry, rv, _i, _len, _ref1;

      rv = "  LocalVariableTable:\n   Start  Length  Slot  Name   Signature\n";
      _ref1 = this.entries;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        entry = _ref1[_i];
        rv += "   " + entry.start_pc + "      " + entry.length + "      " + entry.ref;
        rv += "" + entry.name + "      " + entry.descriptor + "\n";
      }
      return rv;
    };

    return LocalVariableTable;

  })();

  Exceptions = (function() {
    function Exceptions() {}

    Exceptions.prototype.name = 'Exceptions';

    Exceptions.prototype.parse = function(bytes_array, constant_pool) {
      var exc_refs, i, ref;

      this.num_exceptions = bytes_array.get_uint(2);
      exc_refs = (function() {
        var _i, _ref1, _results;

        _results = [];
        for (i = _i = 0, _ref1 = this.num_exceptions; _i < _ref1; i = _i += 1) {
          _results.push(bytes_array.get_uint(2));
        }
        return _results;
      }).call(this);
      return this.exceptions = (function() {
        var _i, _len, _results;

        _results = [];
        for (_i = 0, _len = exc_refs.length; _i < _len; _i++) {
          ref = exc_refs[_i];
          _results.push(constant_pool.get(ref).deref());
        }
        return _results;
      })();
    };

    return Exceptions;

  })();

  InnerClasses = (function() {
    function InnerClasses() {}

    InnerClasses.prototype.name = 'InnerClasses';

    InnerClasses.prototype.parse = function(bytes_array, constant_pool) {
      var i, num_classes;

      num_classes = bytes_array.get_uint(2);
      return this.classes = (function() {
        var _i, _results;

        _results = [];
        for (i = _i = 0; _i < num_classes; i = _i += 1) {
          _results.push(this.parse_class(bytes_array, constant_pool));
        }
        return _results;
      }).call(this);
    };

    InnerClasses.prototype.parse_class = function(bytes_array, constant_pool) {
      return {
        inner_info_index: bytes_array.get_uint(2),
        outer_info_index: bytes_array.get_uint(2),
        inner_name_index: bytes_array.get_uint(2),
        inner_access_flags: bytes_array.get_uint(2)
      };
    };

    return InnerClasses;

  })();

  ConstantValue = (function() {
    function ConstantValue() {}

    ConstantValue.prototype.name = 'ConstantValue';

    ConstantValue.prototype.parse = function(bytes_array, constant_pool) {
      var valref;

      this.ref = bytes_array.get_uint(2);
      valref = constant_pool.get(this.ref);
      return this.value = (typeof valref.deref === "function" ? valref.deref() : void 0) || valref.value;
    };

    return ConstantValue;

  })();

  Synthetic = (function() {
    function Synthetic() {}

    Synthetic.prototype.name = 'Synthetic';

    Synthetic.prototype.parse = function() {};

    return Synthetic;

  })();

  Deprecated = (function() {
    function Deprecated() {}

    Deprecated.prototype.name = 'Deprecated';

    Deprecated.prototype.parse = function() {};

    return Deprecated;

  })();

  Signature = (function() {
    function Signature() {}

    Signature.prototype.name = 'Signature';

    Signature.prototype.parse = function(bytes_array, constant_pool, attr_len) {
      var ref;

      this.raw_bytes = bytes_array.read(attr_len);
      ref = util.read_uint(this.raw_bytes);
      return this.sig = constant_pool.get(ref).value;
    };

    return Signature;

  })();

  RuntimeVisibleAnnotations = (function() {
    function RuntimeVisibleAnnotations() {}

    RuntimeVisibleAnnotations.prototype.name = 'RuntimeVisibleAnnotations';

    RuntimeVisibleAnnotations.prototype.parse = function(bytes_array, constant_pool, attr_len) {
      return this.raw_bytes = bytes_array.read(attr_len);
    };

    return RuntimeVisibleAnnotations;

  })();

  AnnotationDefault = (function() {
    function AnnotationDefault() {}

    AnnotationDefault.prototype.name = 'AnnotationDefault';

    AnnotationDefault.prototype.parse = function(bytes_array, constant_pool, attr_len) {
      return this.raw_bytes = bytes_array.read(attr_len);
    };

    return AnnotationDefault;

  })();

  EnclosingMethod = (function() {
    function EnclosingMethod() {}

    EnclosingMethod.prototype.name = 'EnclosingMethod';

    EnclosingMethod.prototype.parse = function(bytes_array, constant_pool) {
      var method_ref;

      this.enc_class = constant_pool.get(bytes_array.get_uint(2)).deref();
      method_ref = bytes_array.get_uint(2);
      if (method_ref > 0) {
        return this.enc_method = constant_pool.get(method_ref).deref();
      }
    };

    return EnclosingMethod;

  })();

  root.make_attributes = function(bytes_array, constant_pool) {
    var attr, attr_len, attr_types, attrs, i, name, new_len, num_attrs, old_len, _i;

    attr_types = {
      'Code': Code,
      'LineNumberTable': LineNumberTable,
      'SourceFile': SourceFile,
      'StackMapTable': StackMapTable,
      'LocalVariableTable': LocalVariableTable,
      'ConstantValue': ConstantValue,
      'Exceptions': Exceptions,
      'InnerClasses': InnerClasses,
      'Synthetic': Synthetic,
      'Deprecated': Deprecated,
      'Signature': Signature,
      'RuntimeVisibleAnnotations': RuntimeVisibleAnnotations,
      'AnnotationDefault': AnnotationDefault,
      'EnclosingMethod': EnclosingMethod
    };
    num_attrs = bytes_array.get_uint(2);
    attrs = [];
    for (i = _i = 0; _i < num_attrs; i = _i += 1) {
      name = constant_pool.get(bytes_array.get_uint(2)).value;
      attr_len = bytes_array.get_uint(4);
      if (attr_types[name] != null) {
        attr = new attr_types[name];
        old_len = bytes_array.size();
        attr.parse(bytes_array, constant_pool, attr_len);
        new_len = bytes_array.size();
        if (old_len - new_len !== attr_len) {
          bytes_array.skip(attr_len - old_len + new_len);
        }
        attrs.push(attr);
      } else {
        bytes_array.skip(attr_len);
      }
    }
    return attrs;
  };

}).call(this);
;
// Generated by CoffeeScript 1.6.2
(function() {
  "use strict";
  var AbstractMethodFieldReference, ClassReference, ConstDouble, ConstFloat, ConstInt32, ConstLong, ConstString, ConstantPool, FieldReference, InterfaceMethodReference, MethodReference, MethodSignature, SimpleReference, StringReference, gLong, util,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  gLong = require('../vendor/gLong.js');

  util = require('./util');

  SimpleReference = (function() {
    function SimpleReference(constant_pool, value) {
      this.constant_pool = constant_pool;
      this.value = value;
    }

    SimpleReference.size = 1;

    SimpleReference.from_bytes = function(bytes_array, constant_pool) {
      var ref, value;

      value = bytes_array.get_uint(2);
      ref = new this(constant_pool, value);
      return ref;
    };

    SimpleReference.prototype.deref = function() {
      var pool_obj;

      pool_obj = this.constant_pool[this.value];
      return (typeof pool_obj.deref === "function" ? pool_obj.deref() : void 0) || pool_obj.value;
    };

    return SimpleReference;

  })();

  ClassReference = (function(_super) {
    __extends(ClassReference, _super);

    function ClassReference(constant_pool, value) {
      this.constant_pool = constant_pool;
      this.value = value;
      this.type = 'class';
    }

    ClassReference.prototype.deref = function() {
      var pool_obj;

      pool_obj = this.constant_pool[this.value];
      return (typeof pool_obj.deref === "function" ? pool_obj.deref() : void 0) || util.typestr2descriptor(pool_obj.value);
    };

    return ClassReference;

  })(SimpleReference);

  StringReference = (function(_super) {
    __extends(StringReference, _super);

    function StringReference(constant_pool, value) {
      this.constant_pool = constant_pool;
      this.value = value;
      this.type = 'String';
    }

    return StringReference;

  })(SimpleReference);

  AbstractMethodFieldReference = (function() {
    function AbstractMethodFieldReference() {}

    AbstractMethodFieldReference.size = 1;

    AbstractMethodFieldReference.from_bytes = function(bytes_array, constant_pool) {
      var class_ref, ref, sig;

      class_ref = ClassReference.from_bytes(bytes_array, constant_pool);
      sig = SimpleReference.from_bytes(bytes_array, constant_pool);
      ref = new this(constant_pool, {
        class_ref: class_ref,
        sig: sig
      });
      return ref;
    };

    AbstractMethodFieldReference.prototype.deref = function() {
      var sig;

      sig = this.value.sig.deref();
      return {
        "class": this.value.class_ref.deref(),
        sig: sig.name + sig.type
      };
    };

    return AbstractMethodFieldReference;

  })();

  MethodReference = (function(_super) {
    __extends(MethodReference, _super);

    function MethodReference(constant_pool, value) {
      this.constant_pool = constant_pool;
      this.value = value;
      this.type = 'Method';
    }

    return MethodReference;

  })(AbstractMethodFieldReference);

  InterfaceMethodReference = (function(_super) {
    __extends(InterfaceMethodReference, _super);

    function InterfaceMethodReference(constant_pool, value) {
      this.constant_pool = constant_pool;
      this.value = value;
      this.type = 'InterfaceMethod';
    }

    return InterfaceMethodReference;

  })(AbstractMethodFieldReference);

  FieldReference = (function(_super) {
    __extends(FieldReference, _super);

    function FieldReference(constant_pool, value) {
      this.constant_pool = constant_pool;
      this.value = value;
      this.type = 'Field';
    }

    FieldReference.prototype.deref = function() {
      var sig;

      sig = this.value.sig.deref();
      return {
        "class": this.value.class_ref.deref(),
        name: sig.name,
        type: sig.type
      };
    };

    return FieldReference;

  })(AbstractMethodFieldReference);

  MethodSignature = (function() {
    function MethodSignature(constant_pool, value) {
      this.constant_pool = constant_pool;
      this.value = value;
      this.type = 'NameAndType';
    }

    MethodSignature.size = 1;

    MethodSignature.from_bytes = function(bytes_array, constant_pool) {
      var meth_ref, ref, type_ref;

      meth_ref = StringReference.from_bytes(bytes_array, constant_pool);
      type_ref = StringReference.from_bytes(bytes_array, constant_pool);
      ref = new this(constant_pool, {
        meth_ref: meth_ref,
        type_ref: type_ref
      });
      return ref;
    };

    MethodSignature.prototype.deref = function() {
      return {
        name: this.value.meth_ref.deref(),
        type: this.value.type_ref.deref()
      };
    };

    return MethodSignature;

  })();

  ConstString = (function() {
    function ConstString(value) {
      this.value = value;
      this.type = 'Asciz';
    }

    ConstString.size = 1;

    ConstString.from_bytes = function(bytes_array) {
      var const_string, strlen, value;

      strlen = bytes_array.get_uint(2);
      value = util.bytes2str(bytes_array.read(strlen));
      const_string = new this(value);
      return const_string;
    };

    return ConstString;

  })();

  ConstInt32 = (function() {
    function ConstInt32(value) {
      this.value = value;
      this.type = 'int';
    }

    ConstInt32.size = 1;

    ConstInt32.from_bytes = function(bytes_array) {
      var int32, uint32, value;

      uint32 = bytes_array.get_uint(4);
      value = -(1 + ~uint32);
      int32 = new this(value);
      return int32;
    };

    return ConstInt32;

  })();

  ConstFloat = (function() {
    function ConstFloat(value) {
      this.value = value;
      this.type = 'float';
    }

    ConstFloat.size = 1;

    ConstFloat.from_bytes = function(bytes_array) {
      var float, uint32, value;

      uint32 = bytes_array.get_uint(4);
      value = util.intbits2float(uint32 | 0);
      float = new this(value);
      return float;
    };

    return ConstFloat;

  })();

  ConstLong = (function() {
    function ConstLong(value) {
      this.value = value;
      this.type = 'long';
    }

    ConstLong.size = 2;

    ConstLong.from_bytes = function(bytes_array) {
      var high, long, low, value;

      high = bytes_array.get_uint(4);
      low = bytes_array.get_uint(4);
      value = gLong.fromBits(low, high);
      long = new this(value);
      return long;
    };

    return ConstLong;

  })();

  ConstDouble = (function() {
    function ConstDouble(value) {
      this.value = value;
      this.type = 'double';
    }

    ConstDouble.size = 2;

    ConstDouble.from_bytes = function(bytes_array) {
      var double, uint32_a, uint32_b;

      uint32_a = bytes_array.get_uint(4);
      uint32_b = bytes_array.get_uint(4);
      double = new this(util.longbits2double(uint32_a, uint32_b));
      return double;
    };

    return ConstDouble;

  })();

  ConstantPool = (function() {
    function ConstantPool() {}

    ConstantPool.prototype.parse = function(bytes_array) {
      var constant_tags, idx, pool_obj, tag;

      constant_tags = {
        1: ConstString,
        3: ConstInt32,
        4: ConstFloat,
        5: ConstLong,
        6: ConstDouble,
        7: ClassReference,
        8: StringReference,
        9: FieldReference,
        10: MethodReference,
        11: InterfaceMethodReference,
        12: MethodSignature
      };
      this.cp_count = bytes_array.get_uint(2);
      this.constant_pool = {};
      idx = 1;
      while (idx < this.cp_count) {
        tag = bytes_array.get_uint(1);
        if (!((1 <= tag && tag <= 12))) {
          throw "invalid tag: " + tag;
        }
        pool_obj = constant_tags[tag].from_bytes(bytes_array, this.constant_pool);
        this.constant_pool[idx] = pool_obj;
        idx += constant_tags[tag].size;
      }
      return bytes_array;
    };

    ConstantPool.prototype.get = function(idx) {
      var _ref;

      return (function() {
        if ((_ref = this.constant_pool[idx]) != null) {
          return _ref;
        } else {
          throw new Error("Invalid constant_pool reference: " + idx);
        }
      }).call(this);
    };

    ConstantPool.prototype.each = function(fn) {
      var i, _i, _ref, _results;

      _results = [];
      for (i = _i = 0, _ref = this.cp_count; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
        if (i in this.constant_pool) {
          _results.push(fn(i, this.constant_pool[i]));
        }
      }
      return _results;
    };

    return ConstantPool;

  })();

  if (typeof module !== "undefined" && module !== null) {
    module.exports = ConstantPool;
  } else {
    window.ConstantPool = ConstantPool;
  }

}).call(this);
;
// Generated by CoffeeScript 1.6.2
(function() {
  "use strict";
  var access_string, fixed_width, format, format_decimal, make_dis, pad_left, pp_type, print_excs, root, show_disassembly, util;

  root = typeof exports !== "undefined" && exports !== null ? exports : this.disassembler = {};

  util = require('./util');

  pad_left = function(value, padding) {
    var zeroes;

    zeroes = new Array(padding).join('0');
    return (zeroes + value).slice(-padding);
  };

  access_string = function(access_flags) {
    var flag, ordered_flags;

    ordered_flags = ['public', 'protected', 'private', 'static', 'final', 'native'];
    if (!access_flags["interface"]) {
      ordered_flags.push('abstract');
    }
    return ((function() {
      var _i, _len, _results;

      _results = [];
      for (_i = 0, _len = ordered_flags.length; _i < _len; _i++) {
        flag = ordered_flags[_i];
        if (access_flags[flag]) {
          _results.push(flag + ' ');
        }
      }
      return _results;
    })()).join('');
  };

  format_decimal = function(val, type_char) {
    var m, str, valStr, _ref;

    valStr = val.toString();
    if (type_char === 'f') {
      if (val === util.FLOAT_POS_INFINITY || val === Number.POSITIVE_INFINITY) {
        valStr = "Infinity";
      } else if (val === util.FLOAT_NEG_INFINITY || val === Number.NEGATIVE_INFINITY) {
        valStr = "-Infinity";
      } else if (val === NaN) {
        valStr = "NaN";
      }
    }
    if (valStr.match(/-?(Infinity|NaN)/)) {
      str = valStr;
    } else {
      m = valStr.match(/(-?\d+)(\.\d+)?(?:e\+?(-?\d+))?/);
      str = m[1] + (m[2] ? m[2] : '.0');
      if (type_char === 'f' && ((_ref = m[2]) != null ? _ref.length : void 0) > 8) {
        str = parseFloat(str).toFixed(7);
      }
      str = str.replace(/0+$/, '').replace(/\.$/, '.0');
      if (m[3] != null) {
        str += "E" + m[3];
      }
    }
    return str + type_char;
  };

  format = function(entry) {
    var val;

    val = entry.value;
    switch (entry.type) {
      case 'Method':
      case 'InterfaceMethod':
      case 'Field':
        return "#" + val.class_ref.value + ".#" + val.sig.value;
      case 'NameAndType':
        return "#" + val.meth_ref.value + ":#" + val.type_ref.value;
      case 'float':
        return format_decimal(val, 'f');
      case 'double':
        return format_decimal(val, 'd');
      case 'long':
        return val + "l";
      default:
        return util.escape_whitespace((entry.deref != null ? '#' : '') + val).replace(/"/g, '\\"');
    }
  };

  pp_type = function(field_type) {
    if (util.is_array_type(field_type)) {
      return pp_type(util.get_component_type(field_type)) + '[]';
    } else {
      return util.ext_classname(field_type);
    }
  };

  print_excs = function(excs) {
    var e;

    return "   throws " + (((function() {
      var _i, _len, _results;

      _results = [];
      for (_i = 0, _len = excs.length; _i < _len; _i++) {
        e = excs[_i];
        _results.push(util.ext_classname(e));
      }
      return _results;
    })()).join(', '));
  };

  fixed_width = function(num, width) {
    var num_str;

    num_str = num.toString();
    return (new Array(width - num_str.length + 1)).join(' ') + num_str;
  };

  root.disassemble = function(class_file) {
    return show_disassembly(make_dis(class_file));
  };

  make_dis = function(class_file) {
    var cls, code, const_attr, dis, entry, f, field, flags, icls, icls_group, m, method, ops, pool, sig, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref10, _ref11, _ref12, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;

    dis = {
      source_file: (_ref = (_ref1 = class_file.get_attribute('SourceFile')) != null ? _ref1.filename : void 0) != null ? _ref : null,
      is_deprecated: class_file.get_attribute('Deprecated') != null,
      annotation_bytes: (_ref2 = (_ref3 = class_file.get_attribute('RuntimeVisibleAnnotations')) != null ? _ref3.raw_bytes : void 0) != null ? _ref2 : null,
      interfaces: class_file.get_interface_types(),
      access_string: access_string(class_file.access_flags),
      class_type: (class_file.access_flags["interface"] ? 'interface' : 'class'),
      class_name: class_file.get_type(),
      superclass: class_file.get_super_class_type(),
      major_version: class_file.major_version,
      minor_version: class_file.minor_version,
      constant_pool: [],
      inner_classes: [],
      fields: [],
      methods: []
    };
    pool = class_file.constant_pool;
    pool.each(function(idx, entry) {
      return dis.constant_pool.push({
        idx: idx,
        type: entry.type,
        value: format(entry),
        extra: util.format_extra_info(entry)
      });
    });
    _ref4 = class_file.get_attributes('InnerClasses');
    for (_i = 0, _len = _ref4.length; _i < _len; _i++) {
      icls = _ref4[_i];
      icls_group = [];
      _ref5 = icls.classes;
      for (_j = 0, _len1 = _ref5.length; _j < _len1; _j++) {
        cls = _ref5[_j];
        flags = util.parse_flags(cls.inner_access_flags);
        icls_group.push({
          access_string: ((function() {
            var _k, _len2, _ref6, _results;

            _ref6 = ['public', 'abstract'];
            _results = [];
            for (_k = 0, _len2 = _ref6.length; _k < _len2; _k++) {
              f = _ref6[_k];
              if (flags[f]) {
                _results.push(f + ' ');
              }
            }
            return _results;
          })()).join(''),
          type: util.descriptor2typestr(pool.get(cls.inner_info_index).deref()),
          raw: cls,
          name: cls.inner_name_index > 0 ? pool.get(cls.inner_name_index).value : null,
          outer_type: cls.outer_info_index > 0 ? pool.get(cls.outer_info_index).deref() : null
        });
      }
      dis.inner_classes.push(icls_group);
    }
    _ref6 = class_file.get_fields();
    for (_k = 0, _len2 = _ref6.length; _k < _len2; _k++) {
      f = _ref6[_k];
      field = {
        type: f.type,
        name: f.name,
        access_string: access_string(f.access_flags),
        signature_bytes: (_ref7 = (_ref8 = f.get_attribute('Signature')) != null ? _ref8.raw_bytes : void 0) != null ? _ref7 : null
      };
      const_attr = f.get_attribute('ConstantValue');
      if (const_attr != null) {
        entry = pool.get(const_attr.ref);
        field.const_type = entry.type;
        field.const_value = (typeof entry.deref === "function" ? entry.deref() : void 0) || format(entry);
      }
      dis.fields.push(field);
    }
    _ref9 = class_file.get_methods();
    for (sig in _ref9) {
      m = _ref9[sig];
      method = {
        access_string: access_string(m.access_flags),
        is_synchronized: m.access_flags.synchronized,
        return_type: (_ref10 = m.return_type) != null ? _ref10 : '',
        name: m.name,
        param_types: m.param_types,
        exceptions: (_ref11 = (_ref12 = m.get_attribute('Exceptions')) != null ? _ref12.exceptions : void 0) != null ? _ref11 : null
      };
      if (!(m.access_flags["native"] || m.access_flags.abstract)) {
        code = m.code;
        code.parse_code();
        method.code = {
          max_stack: code.max_stack,
          max_locals: code.max_locals,
          num_args: m.num_args,
          exception_handlers: code.exception_handlers,
          attributes: code.attrs
        };
        method.code.opcodes = ops = [];
        code.each_opcode(function(idx, oc) {
          return ops.push({
            idx: idx,
            name: oc.name,
            annotation: oc.annotate(idx, pool)
          });
        });
      }
      dis.methods.push(method);
    }
    return dis;
  };

  show_disassembly = function(dis) {
    var abytes, alen, attr, b, c, eh, entry, f, i, icls, icls_group, ifaces, item, m, name, o, p, ptypes, rv, sigbytes, siglen, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _len5, _m, _n, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6;

    ifaces = ((function() {
      var _i, _len, _ref, _results;

      _ref = dis.interfaces;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        i = _ref[_i];
        _results.push(util.ext_classname(i));
      }
      return _results;
    })()).join(',');
    name = util.ext_classname(dis.class_name);
    rv = "Compiled from \"" + ((_ref = dis.source_file) != null ? _ref : 'unknown') + "\"\n" + dis.access_string + dis.class_type + " " + name + " ";
    if (dis.class_type === 'interface') {
      rv += ifaces.length > 0 ? "extends " + ifaces + "\n" : '\n';
    } else {
      rv += "extends " + (util.ext_classname(dis.superclass));
      rv += ifaces ? " implements " + ifaces + "\n" : '\n';
    }
    if (dis.source_file) {
      rv += "  SourceFile: \"" + dis.source_file + "\"\n";
    }
    if (dis.is_deprecated) {
      rv += "  Deprecated: length = 0x\n";
    }
    if (dis.annotation_bytes) {
      alen = dis.annotation_bytes.length.toString(16);
      abytes = ((function() {
        var _i, _len, _ref1, _results;

        _ref1 = dis.annotation_bytes;
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          b = _ref1[_i];
          _results.push(pad_left(b.toString(16), 2));
        }
        return _results;
      })()).join(' ');
      rv += "  RuntimeVisibleAnnotations: length = 0x" + alen + "\n   " + abytes + "\n";
    }
    _ref1 = dis.inner_classes;
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      icls_group = _ref1[_i];
      rv += "  InnerClass:\n";
      for (_j = 0, _len1 = icls_group.length; _j < _len1; _j++) {
        icls = icls_group[_j];
        if (icls.name == null) {
          rv += "   " + icls.access_string + "#" + icls.raw.inner_info_index + "; //class " + icls.type + "\n";
        } else {
          rv += "   " + icls.access_string + "#" + icls.raw.inner_name_index + "= #" + icls.raw.inner_info_index;
          if (icls.outer_type == null) {
            rv += "; //" + icls.name + "=class " + icls.type + "\n";
          } else {
            rv += " of #" + icls.raw.outer_info_index + "; //" + icls.name + "=class " + icls.type + " of class " + icls.outer_type + "\n";
          }
        }
      }
    }
    rv += "  minor version: " + dis.minor_version + "\n  major version: " + dis.major_version + "\n  Constant pool:\n";
    _ref2 = dis.constant_pool;
    for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
      entry = _ref2[_k];
      rv += "const #" + entry.idx + " = " + entry.type + "\t" + entry.value + ";" + entry.extra + "\n";
    }
    rv += "\n{\n";
    _ref3 = dis.fields;
    for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
      f = _ref3[_l];
      rv += "" + f.access_string + (pp_type(f.type)) + " " + f.name + ";\n";
      if (f.const_type != null) {
        rv += "  Constant value: " + f.const_type + " " + f.const_value + "\n";
      }
      if (f.signature_bytes != null) {
        siglen = f.signature_bytes.length.toString(16);
        sigbytes = ((function() {
          var _len4, _m, _ref4, _results;

          _ref4 = f.signature_bytes;
          _results = [];
          for (_m = 0, _len4 = _ref4.length; _m < _len4; _m++) {
            b = _ref4[_m];
            _results.push(pad_left(b.toString(16).toUpperCase(), 2));
          }
          return _results;
        })()).join(' ');
        rv += "  Signature: length = 0x" + siglen + "\n   " + sigbytes + "\n";
      }
      rv += "\n\n";
    }
    _ref4 = dis.methods;
    for (_m = 0, _len4 = _ref4.length; _m < _len4; _m++) {
      m = _ref4[_m];
      rv += m.access_string;
      if (m.is_synchronized) {
        rv += 'synchronized ';
      }
      ptypes = ((function() {
        var _len5, _n, _ref5, _results;

        _ref5 = m.param_types;
        _results = [];
        for (_n = 0, _len5 = _ref5.length; _n < _len5; _n++) {
          p = _ref5[_n];
          _results.push(pp_type(p));
        }
        return _results;
      })()).join(', ');
      if (m.name === '<clinit>') {
        rv += '{}';
      } else if (m.name === '<init>') {
        rv += "" + name + "(" + ptypes + ")";
      } else {
        rv += "" + (pp_type(m.return_type)) + " " + m.name + "(" + ptypes + ")";
      }
      if (m.exceptions != null) {
        rv += print_excs(m.exceptions);
      }
      rv += ";\n";
      if (m.code != null) {
        c = m.code;
        rv += "  Code:\n   Stack=" + c.max_stack + ", Locals=" + c.max_locals + ", Args_size=" + c.num_args + "\n";
        rv += ((function() {
          var _len5, _n, _ref5, _results;

          _ref5 = c.opcodes;
          _results = [];
          for (_n = 0, _len5 = _ref5.length; _n < _len5; _n++) {
            o = _ref5[_n];
            _results.push("   " + o.idx + ":\t" + o.name + o.annotation + "\n");
          }
          return _results;
        })()).join('');
        if (((_ref5 = c.exception_handlers) != null ? _ref5.length : void 0) > 0) {
          rv += "  Exception table:\n   from   to  target type\n";
          _ref6 = c.exception_handlers;
          for (_n = 0, _len5 = _ref6.length; _n < _len5; _n++) {
            eh = _ref6[_n];
            rv += ((function() {
              var _len6, _o, _ref7, _results;

              _ref7 = ['start_pc', 'end_pc', 'handler_pc'];
              _results = [];
              for (_o = 0, _len6 = _ref7.length; _o < _len6; _o++) {
                item = _ref7[_o];
                _results.push(fixed_width(eh[item], 6));
              }
              return _results;
            })()).join('');
            if (eh.catch_type === '<any>') {
              rv += "   any\n";
            } else {
              rv += "   Class " + eh.catch_type.slice(1, -1) + "\n";
            }
          }
          rv += "\n";
        }
        rv += ((function() {
          var _len6, _o, _ref7, _results;

          _ref7 = c.attributes;
          _results = [];
          for (_o = 0, _len6 = _ref7.length; _o < _len6; _o++) {
            attr = _ref7[_o];
            _results.push((typeof attr.disassemblyOutput === "function" ? attr.disassemblyOutput() : void 0) || '');
          }
          return _results;
        })()).join('');
        if (m.exceptions != null) {
          rv += "  Exceptions:\n" + (print_excs(m.exceptions)) + "\n";
        }
      }
      rv += "\n";
    }
    rv += "}\n";
    return rv;
  };

}).call(this);
;
// Generated by CoffeeScript 1.6.2
(function() {
  "use strict";
  var ClassData, ConstantPool, JavaClassObject, JavaObject, attributes, methods, opcodes, root, trace, util, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  util = require('./util');

  ConstantPool = require('./ConstantPool');

  attributes = require('./attributes');

  opcodes = require('./opcodes');

  methods = null;

  _ref = require('./java_object'), JavaObject = _ref.JavaObject, JavaClassObject = _ref.JavaClassObject;

  trace = require('./logging').trace;

  root = typeof exports !== "undefined" && exports !== null ? exports : this.ClassData = {};

  ClassData = (function() {
    function ClassData(loader) {
      this.loader = loader != null ? loader : null;
      this.access_flags = {};
      this.initialized = false;
      this.resolved = false;
      this.jco = null;
      this.reset_bit = 0;
    }

    ClassData.prototype.reset = function() {
      var iface, sc, _i, _len, _ref1;

      this.jco = null;
      this.reset_bit = 0;
      sc = this.get_super_class();
      if ((sc != null ? sc.reset_bit : void 0) === 1) {
        sc.reset();
      }
      _ref1 = this.get_interfaces;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        iface = _ref1[_i];
        if (iface.reset_bit === 1) {
          iface.reset();
        }
      }
    };

    ClassData.prototype.toExternalString = function() {
      return util.ext_classname(this.this_class);
    };

    ClassData.prototype.getLoadState = function() {
      if (this.initialized) {
        return 'initialized';
      } else if (this.resolved) {
        return 'resolved';
      } else {
        return 'loaded';
      }
    };

    ClassData.prototype.get_class_loader = function() {
      return this.loader;
    };

    ClassData.prototype.get_type = function() {
      return this.this_class;
    };

    ClassData.prototype.get_super_class_type = function() {
      return this.super_class;
    };

    ClassData.prototype.get_super_class = function() {
      return this.super_class_cdata;
    };

    ClassData.prototype.get_interface_types = function() {
      return [];
    };

    ClassData.prototype.get_interfaces = function() {
      return [];
    };

    ClassData.prototype.get_class_object = function(rs) {
      if (this.jco == null) {
        this.jco = new JavaClassObject(rs, this);
      }
      return this.jco;
    };

    ClassData.prototype.get_method = function() {
      return null;
    };

    ClassData.prototype.get_methods = function() {
      return {};
    };

    ClassData.prototype.get_fields = function() {
      return [];
    };

    ClassData.prototype.method_lookup = function(rs, sig) {
      return rs.java_throw(rs.get_bs_class('Ljava/lang/NoSuchMethodError;'), "No such method found in " + (util.ext_classname(this.get_type())) + "::" + sig);
    };

    ClassData.prototype.field_lookup = function(rs, name) {
      return rs.java_throw(rs.get_bs_class('Ljava/lang/NoSuchFieldError;'), "No such field found in " + (util.ext_classname(this.get_type())) + "::" + name);
    };

    ClassData.prototype.is_initialized = function() {
      var scls;

      if (this.initialized) {
        return true;
      }
      if (!this.is_resolved()) {
        return false;
      }
      if (this.get_method('<clinit>()V') != null) {
        return false;
      }
      scls = this.get_super_class();
      this.initialized = (scls != null) && scls.is_initialized();
      return this.initialized;
    };

    ClassData.prototype.is_resolved = function() {
      return this.resolved;
    };

    ClassData.prototype.is_subinterface = function() {
      return false;
    };

    ClassData.prototype.is_subclass = function(target) {
      if (this === target) {
        return true;
      }
      if (this.get_super_class() == null) {
        return false;
      }
      return this.get_super_class().is_subclass(target);
    };

    return ClassData;

  })();

  root.PrimitiveClassData = (function(_super) {
    __extends(PrimitiveClassData, _super);

    function PrimitiveClassData(this_class, loader) {
      this.this_class = this_class;
      PrimitiveClassData.__super__.constructor.call(this, loader);
      this.initialized = true;
      this.resolved = true;
    }

    PrimitiveClassData.prototype.is_castable = function(target) {
      return this.this_class === target.this_class;
    };

    PrimitiveClassData.prototype.box_class_name = function() {
      switch (this.this_class) {
        case 'B':
          return 'Ljava/lang/Byte;';
        case 'C':
          return 'Ljava/lang/Character;';
        case 'D':
          return 'Ljava/lang/Double;';
        case 'F':
          return 'Ljava/lang/Float;';
        case 'I':
          return 'Ljava/lang/Integer;';
        case 'J':
          return 'Ljava/lang/Long;';
        case 'S':
          return 'Ljava/lang/Short;';
        case 'Z':
          return 'Ljava/lang/Boolean;';
        default:
          throw new Error("Tried to box a non-primitive class: " + this.this_class);
      }
    };

    PrimitiveClassData.prototype.create_wrapper_object = function(rs, value) {
      var box_name, wrapped;

      box_name = this.box_class_name();
      wrapped = new JavaObject(rs, rs.get_bs_class(box_name));
      wrapped.fields[box_name + 'value'] = value;
      return wrapped;
    };

    return PrimitiveClassData;

  })(ClassData);

  root.ArrayClassData = (function(_super) {
    __extends(ArrayClassData, _super);

    function ArrayClassData(component_type, loader) {
      this.component_type = component_type;
      ArrayClassData.__super__.constructor.call(this, loader);
      this.this_class = "[" + this.component_type;
      this.super_class = 'Ljava/lang/Object;';
    }

    ArrayClassData.prototype.reset = function() {
      var ccls;

      ArrayClassData.__super__.reset.call(this);
      ccls = this.get_component_class();
      if (ccls != null ? ccls.reset_bit : void 0) {
        ccls.reset();
      }
    };

    ArrayClassData.prototype.get_component_type = function() {
      return this.component_type;
    };

    ArrayClassData.prototype.get_component_class = function() {
      return this.component_class_cdata;
    };

    ArrayClassData.prototype.field_lookup = function(rs, name) {
      return this.super_class_cdata.field_lookup(rs, name);
    };

    ArrayClassData.prototype.method_lookup = function(rs, sig) {
      return this.super_class_cdata.method_lookup(rs, sig);
    };

    ArrayClassData.prototype.set_resolved = function(super_class_cdata, component_class_cdata) {
      this.super_class_cdata = super_class_cdata;
      this.component_class_cdata = component_class_cdata;
      this.resolved = true;
      return this.initialized = true;
    };

    ArrayClassData.prototype.is_castable = function(target) {
      var _ref1;

      if (!(target instanceof root.ArrayClassData)) {
        if (target instanceof root.PrimitiveClassData) {
          return false;
        }
        if (target.access_flags["interface"]) {
          return (_ref1 = target.get_type()) === 'Ljava/lang/Cloneable;' || _ref1 === 'Ljava/io/Serializable;';
        }
        return target.get_type() === 'Ljava/lang/Object;';
      }
      return this.get_component_class().is_castable(target.get_component_class());
    };

    return ArrayClassData;

  })(ClassData);

  root.ReferenceClassData = (function(_super) {
    __extends(ReferenceClassData, _super);

    function ReferenceClassData(bytes_array, loader) {
      var f, i, isize, m, mkey, num_fields, num_methods, super_ref, _i, _j, _len, _ref1, _ref2;

      if (methods == null) {
        methods = require('./methods');
      }
      ReferenceClassData.__super__.constructor.call(this, loader);
      bytes_array = new util.BytesArray(bytes_array);
      if ((bytes_array.get_uint(4)) !== 0xCAFEBABE) {
        throw "Magic number invalid";
      }
      this.minor_version = bytes_array.get_uint(2);
      this.major_version = bytes_array.get_uint(2);
      if (!((45 <= (_ref1 = this.major_version) && _ref1 <= 51))) {
        throw "Major version invalid";
      }
      this.constant_pool = new ConstantPool;
      this.constant_pool.parse(bytes_array);
      this.access_byte = bytes_array.get_uint(2);
      this.access_flags = util.parse_flags(this.access_byte);
      this.this_class = this.constant_pool.get(bytes_array.get_uint(2)).deref();
      super_ref = bytes_array.get_uint(2);
      if (super_ref !== 0) {
        this.super_class = this.constant_pool.get(super_ref).deref();
      }
      isize = bytes_array.get_uint(2);
      this.interfaces = (function() {
        var _i, _results;

        _results = [];
        for (i = _i = 0; _i < isize; i = _i += 1) {
          _results.push(this.constant_pool.get(bytes_array.get_uint(2)).deref());
        }
        return _results;
      }).call(this);
      num_fields = bytes_array.get_uint(2);
      this.fields = (function() {
        var _i, _results;

        _results = [];
        for (i = _i = 0; _i < num_fields; i = _i += 1) {
          _results.push(new methods.Field(this));
        }
        return _results;
      }).call(this);
      this.fl_cache = {};
      _ref2 = this.fields;
      for (i = _i = 0, _len = _ref2.length; _i < _len; i = ++_i) {
        f = _ref2[i];
        f.parse(bytes_array, this.constant_pool, i);
        this.fl_cache[f.name] = f;
      }
      num_methods = bytes_array.get_uint(2);
      this.methods = {};
      this.ml_cache = {};
      for (i = _j = 0; _j < num_methods; i = _j += 1) {
        m = new methods.Method(this);
        m.parse(bytes_array, this.constant_pool, i);
        mkey = m.name + m.raw_descriptor;
        this.methods[mkey] = m;
      }
      this.attrs = attributes.make_attributes(bytes_array, this.constant_pool);
      if (bytes_array.has_bytes()) {
        throw "Leftover bytes in classfile: " + bytes_array;
      }
      this.static_fields = Object.create(null);
    }

    ReferenceClassData.prototype.reset = function() {
      var method, _i, _len, _ref1;

      ReferenceClassData.__super__.reset.call(this);
      this.initialized = false;
      this.static_fields = Object.create(null);
      _ref1 = this.methods;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        method = _ref1[_i];
        method.initialize();
      }
    };

    ReferenceClassData.prototype.get_interfaces = function() {
      return this.interface_cdatas;
    };

    ReferenceClassData.prototype.get_interface_types = function() {
      return this.interfaces;
    };

    ReferenceClassData.prototype.get_fields = function() {
      return this.fields;
    };

    ReferenceClassData.prototype.get_method = function(sig) {
      return this.methods[sig];
    };

    ReferenceClassData.prototype.get_methods = function() {
      return this.methods;
    };

    ReferenceClassData.prototype.get_attribute = function(name) {
      var attr, _i, _len, _ref1;

      _ref1 = this.attrs;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        attr = _ref1[_i];
        if (attr.name === name) {
          return attr;
        }
      }
      return null;
    };

    ReferenceClassData.prototype.get_attributes = function(name) {
      var attr, _i, _len, _ref1, _results;

      _ref1 = this.attrs;
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        attr = _ref1[_i];
        if (attr.name === name) {
          _results.push(attr);
        }
      }
      return _results;
    };

    ReferenceClassData.prototype.get_default_fields = function() {
      if (this.default_fields !== void 0) {
        return this.default_fields;
      }
      this.construct_default_fields();
      return this.default_fields;
    };

    ReferenceClassData.prototype._initialize_static_field = function(rs, name) {
      var cv, cva, f;

      f = this.fl_cache[name];
      if (f != null ? f.access_flags["static"] : void 0) {
        cva = f.get_attribute('ConstantValue');
        if (cva != null) {
          cv = f.type === 'Ljava/lang/String;' ? rs.init_string(cva.value) : cva.value;
        }
        this.static_fields[name] = cv != null ? cv : util.initial_value(f.raw_descriptor);
      } else {
        rs.java_throw(this.loader.get_initialized_class('Ljava/lang/NoSuchFieldError;'), name);
      }
    };

    ReferenceClassData.prototype.static_get = function(rs, name) {
      if (this.static_fields[name] !== void 0) {
        return this.static_fields[name];
      }
      this._initialize_static_field(rs, name);
      return this.static_get(rs, name);
    };

    ReferenceClassData.prototype.static_put = function(rs, name, val) {
      if (this.static_fields[name] !== void 0) {
        return this.static_fields[name] = val;
      } else {
        this._initialize_static_field(rs, name);
        return this.static_put(rs, name, val);
      }
    };

    ReferenceClassData.prototype.set_resolved = function(super_class_cdata, interface_cdatas) {
      this.super_class_cdata = super_class_cdata;
      ;
      this.interface_cdatas = interface_cdatas != null ? interface_cdatas : [];
      return this.resolved = true;
    };

    ReferenceClassData.prototype.construct_default_fields = function() {
      var cls, f, val, _i, _len, _ref1;

      cls = this;
      this.default_fields = Object.create(null);
      while (cls != null) {
        _ref1 = cls.fields;
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          f = _ref1[_i];
          if (!(!f.access_flags["static"])) {
            continue;
          }
          val = util.initial_value(f.raw_descriptor);
          this.default_fields[cls.get_type() + f.name] = val;
        }
        cls = cls.get_super_class();
      }
    };

    ReferenceClassData.prototype.field_lookup = function(rs, name, null_handled) {
      var field;

      field = this.fl_cache[name];
      if (field != null) {
        return field;
      }
      field = this._field_lookup(rs, name);
      if ((field != null) || null_handled === true) {
        this.fl_cache[name] = field;
        return field;
      }
      return rs.java_throw(rs.get_bs_class('Ljava/lang/NoSuchFieldError;'), "No such field found in " + (util.ext_classname(this.get_type())) + "::" + name);
    };

    ReferenceClassData.prototype._field_lookup = function(rs, name) {
      var field, ifc_cls, sc, _i, _j, _len, _len1, _ref1, _ref2;

      _ref1 = this.fields;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        field = _ref1[_i];
        if (field.name === name) {
          return field;
        }
      }
      _ref2 = this.get_interfaces();
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        ifc_cls = _ref2[_j];
        field = ifc_cls.field_lookup(rs, name, true);
        if (field != null) {
          return field;
        }
      }
      sc = this.get_super_class();
      if (sc != null) {
        field = sc.field_lookup(rs, name, true);
        if (field != null) {
          return field;
        }
      }
      return null;
    };

    ReferenceClassData.prototype.method_lookup = function(rs, sig) {
      var eh, handlers, method, _i, _len, _ref1;

      if (this.ml_cache[sig] != null) {
        return this.ml_cache[sig];
      }
      method = this._method_lookup(rs, sig);
      if (method == null) {
        rs.java_throw(rs.get_bs_class('Ljava/lang/NoSuchMethodError;'), "No such method found in " + (util.ext_classname(this.get_type())) + "::" + sig);
      }
      if ((handlers = (_ref1 = method.code) != null ? _ref1.exception_handlers : void 0) != null) {
        for (_i = 0, _len = handlers.length; _i < _len; _i++) {
          eh = handlers[_i];
          if (!(eh.catch_type === '<any>' || ((this.loader.get_resolved_class(eh.catch_type, true)) != null))) {
            return null;
          }
        }
      }
      return method;
    };

    ReferenceClassData.prototype._method_lookup = function(rs, sig) {
      var ifc, parent, _i, _len, _ref1;

      if (sig in this.ml_cache) {
        return this.ml_cache[sig];
      }
      if (sig in this.methods) {
        return this.ml_cache[sig] = this.methods[sig];
      }
      parent = this.get_super_class();
      if (parent != null) {
        this.ml_cache[sig] = parent._method_lookup(rs, sig);
        if (this.ml_cache[sig] != null) {
          return this.ml_cache[sig];
        }
      }
      _ref1 = this.get_interfaces();
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        ifc = _ref1[_i];
        this.ml_cache[sig] = ifc._method_lookup(rs, sig);
        if (this.ml_cache[sig] != null) {
          return this.ml_cache[sig];
        }
      }
      return this.ml_cache[sig] = null;
    };

    ReferenceClassData.prototype.resolve_method = function(rs, sig, success_fn, failure_fn) {
      ;
      var handlers, i, m, next_handler,
        _this = this;

      m = this.method_lookup(rs, sig);
      handlers = m.code.exception_handlers;
      i = 0;
      next_handler = function() {
        var eh;

        if (i === handlers.length) {
          return success_fn(m);
        } else {
          eh = handlers[i++];
          if (!(eh.catch_type === '<any>' || _this.loader.get_resolved_class(eh.catch_type, true))) {
            return _this.loader.resolve_class(rs, eh.catch_type, next_handler, failure_fn);
          } else {
            return next_handler();
          }
        }
      };
      return next_handler();
    };

    ReferenceClassData.prototype.is_castable = function(target) {
      if (!(target instanceof root.ReferenceClassData)) {
        return false;
      }
      if (this.access_flags["interface"]) {
        if (target.access_flags["interface"]) {
          return this.is_subinterface(target);
        }
        if (!target.access_flags["interface"]) {
          return target.get_type() === 'Ljava/lang/Object;';
        }
      } else {
        if (target.access_flags["interface"]) {
          return this.is_subinterface(target);
        }
        return this.is_subclass(target);
      }
    };

    ReferenceClassData.prototype.is_subinterface = function(target) {
      var super_iface, _i, _len, _ref1;

      if (this.this_class === target.this_class) {
        return true;
      }
      _ref1 = this.get_interfaces();
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        super_iface = _ref1[_i];
        if (super_iface.is_subinterface(target)) {
          return true;
        }
      }
      if (this.get_super_class() == null) {
        return false;
      }
      return this.get_super_class().is_subinterface(target);
    };

    return ReferenceClassData;

  })(ClassData);

}).call(this);
;
// Generated by CoffeeScript 1.6.2
(function() {
  "use strict";
  var ArrayClassData, JavaArray, JavaObject, PrimitiveClassData, ReferenceClassData, arraycopy_check, arraycopy_no_check, create_stack_trace, debug, doPrivileged, error, exceptions, flatten_pkg, fs, gLong, get_cl_from_jclo, get_property, log, logging, native_define_class, native_methods, o, path, root, runtime, setup_caller_stack, stat_fd, stat_file, thread_name, trace, trapped_methods, unsafe_compare_and_swap, unsafe_memcpy, util, write_to_file, _, _ref, _ref1, _ref2, _ref3,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  _ = require('../vendor/_.js');

  gLong = require('../vendor/gLong.js');

  util = require('./util');

  runtime = require('./runtime');

  _ref = require('./java_object'), thread_name = _ref.thread_name, JavaObject = _ref.JavaObject, JavaArray = _ref.JavaArray;

  exceptions = require('./exceptions');

  logging = require('./logging');

  log = logging.log, debug = logging.debug, error = logging.error, trace = logging.trace;

  path = (_ref1 = typeof node !== "undefined" && node !== null ? node.path : void 0) != null ? _ref1 : require('path');

  fs = (_ref2 = typeof node !== "undefined" && node !== null ? node.fs : void 0) != null ? _ref2 : require('fs');

  _ref3 = require('./ClassData'), ReferenceClassData = _ref3.ReferenceClassData, PrimitiveClassData = _ref3.PrimitiveClassData, ArrayClassData = _ref3.ArrayClassData;

  root = typeof exports !== "undefined" && exports !== null ? exports : this.natives = {};

  get_property = function(rs, jvm_key, _default) {
    var jvm, key, val;

    if (_default == null) {
      _default = null;
    }
    key = jvm_key.jvm2js_str();
    jvm = jvm != null ? jvm : require('./jvm');
    val = jvm.system_properties[key];
    if (key === 'java.class.path') {
      return rs.init_string(val.slice(0, val.length - 1).join(':'));
    }
    if (val != null) {
      return rs.init_string(val, true);
    } else {
      return _default;
    }
  };

  o = function(fn_name, fn) {
    return {
      fn_name: fn_name,
      fn: fn
    };
  };

  trapped_methods = {
    java: {
      lang: {
        ref: {
          Reference: [o('<clinit>()V', function(rs) {})]
        },
        String: [
          o('hashCode()I', function(rs, _this) {
            var chars, count, hash, i, offset, _i;

            hash = _this.get_field(rs, 'Ljava/lang/String;hash');
            if (hash === 0) {
              offset = _this.get_field(rs, 'Ljava/lang/String;offset');
              chars = _this.get_field(rs, 'Ljava/lang/String;value').array;
              count = _this.get_field(rs, 'Ljava/lang/String;count');
              for (i = _i = 0; _i < count; i = _i += 1) {
                hash = (hash * 31 + chars[offset++]) | 0;
              }
              _this.set_field(rs, 'Ljava/lang/String;hash', hash);
            }
            return hash;
          })
        ],
        System: [
          o('loadLibrary(L!/!/String;)V', function(rs, lib_name) {
            var lib;

            lib = lib_name.jvm2js_str();
            if (lib !== 'zip' && lib !== 'net' && lib !== 'nio' && lib !== 'awt' && lib !== 'fontmanager') {
              return rs.java_throw(rs.get_bs_class('Ljava/lang/UnsatisfiedLinkError;'), "no " + lib + " in java.library.path");
            }
          }), o('adjustPropertiesForBackwardCompatibility(L!/util/Properties;)V', function(rs) {}), o('getProperty(L!/!/String;)L!/!/String;', get_property), o('getProperty(L!/!/String;L!/!/String;)L!/!/String;', get_property)
        ],
        Terminator: [o('setup()V', function(rs) {})]
      },
      util: {
        concurrent: {
          atomic: {
            AtomicInteger: [
              o('<clinit>()V', function(rs) {}), o('compareAndSet(II)Z', function(rs, _this, expect, update) {
                _this.set_field(rs, 'Ljava/util/concurrent/atomic/AtomicInteger;value', update);
                return true;
              })
            ]
          }
        }
      },
      nio: {
        Bits: [
          o('byteOrder()L!/!/ByteOrder;', function(rs) {
            var cls;

            cls = rs.get_bs_class('Ljava/nio/ByteOrder;');
            return cls.static_get(rs, 'LITTLE_ENDIAN');
          }), o('copyToByteArray(JLjava/lang/Object;JJ)V', function(rs, srcAddr, dst, dstPos, length) {
            return unsafe_memcpy(rs, null, srcAddr, dst, dstPos, length);
          })
        ],
        charset: {
          Charset$3: [
            o('run()L!/lang/Object;', function(rs) {
              return null;
            })
          ]
        }
      }
    }
  };

  doPrivileged = function(rs, action) {
    var m, my_sf;

    my_sf = rs.curr_frame();
    m = action.cls.method_lookup(rs, 'run()Ljava/lang/Object;');
    if (m != null) {
      if (!m.access_flags["static"]) {
        rs.push(action);
      }
      m.setup_stack(rs);
      my_sf.runner = function() {
        var rv;

        rv = rs.pop();
        rs.meta_stack().pop();
        return rs.push(rv);
      };
      throw exceptions.ReturnException;
    } else {
      return rs.async_op(function(resume_cb, except_cb) {
        return action.cls.resolve_method(rs, 'run()Ljava/lang/Object;', (function() {
          rs.meta_stack().push({});
          return resume_cb();
        }), except_cb);
      });
    }
  };

  stat_fd = function(fd) {
    var e;

    try {
      return fs.fstatSync(fd);
    } catch (_error) {
      e = _error;
      return null;
    }
  };

  stat_file = function(fname, cb) {
    return fs.stat(fname, function(err, stat) {
      if (err != null) {
        return cb(null);
      } else {
        return cb(stat);
      }
    });
  };

  arraycopy_no_check = function(src, src_pos, dest, dest_pos, length) {
    var i, j, _i, _ref4;

    j = dest_pos;
    for (i = _i = src_pos, _ref4 = src_pos + length; _i < _ref4; i = _i += 1) {
      dest.array[j++] = src.array[i];
    }
  };

  arraycopy_check = function(rs, src, src_pos, dest, dest_pos, length) {
    var dest_comp_cls, i, j, _i, _ref4;

    j = dest_pos;
    dest_comp_cls = dest.cls.get_component_class();
    for (i = _i = src_pos, _ref4 = src_pos + length; _i < _ref4; i = _i += 1) {
      if (src.array[i] === null || src.array[i].cls.is_castable(dest_comp_cls)) {
        dest.array[j] = src.array[i];
      } else {
        rs.java_throw(rs.get_bs_class('Ljava/lang/ArrayStoreException;'), 'Array element in src cannot be cast to dest array type.');
      }
      j++;
    }
  };

  unsafe_memcpy = function(rs, src_base, src_offset, dest_base, dest_offset, num_bytes) {
    var dest_addr, i, src_addr, _i, _j, _k, _l, _m, _n;

    num_bytes = num_bytes.toNumber();
    if (src_base != null) {
      src_offset = src_offset.toNumber();
      if (dest_base != null) {
        arraycopy_no_check(src_base, src_offset, dest_base, dest_offset.toNumber(), num_bytes);
      } else {
        dest_addr = rs.block_addr(dest_offset);
        if (typeof DataView !== "undefined" && DataView !== null) {
          for (i = _i = 0; _i < num_bytes; i = _i += 1) {
            rs.mem_blocks[dest_addr].setInt8(i, src_base.array[src_offset + i]);
          }
        } else {
          for (i = _j = 0; _j < num_bytes; i = _j += 1) {
            rs.mem_blocks[dest_addr + i] = src_base.array[src_offset + i];
          }
        }
      }
    } else {
      src_addr = rs.block_addr(src_offset);
      if (dest_base != null) {
        dest_offset = dest_offset.toNumber();
        if (typeof DataView !== "undefined" && DataView !== null) {
          for (i = _k = 0; _k < num_bytes; i = _k += 1) {
            dest_base.array[dest_offset + i] = rs.mem_blocks[src_addr].getInt8(i);
          }
        } else {
          for (i = _l = 0; _l < num_bytes; i = _l += 1) {
            dest_base.array[dest_offset + i] = rs.mem_blocks[src_addr + i];
          }
        }
      } else {
        dest_addr = rs.block_addr(dest_offset);
        if (typeof DataView !== "undefined" && DataView !== null) {
          for (i = _m = 0; _m < num_bytes; i = _m += 1) {
            rs.mem_blocks[dest_addr].setInt8(i, rs.mem_blocks[src_addr].getInt8(i));
          }
        } else {
          for (i = _n = 0; _n < num_bytes; i = _n += 1) {
            rs.mem_blocks[dest_addr + i] = rs.mem_blocks[src_addr + i];
          }
        }
      }
    }
  };

  unsafe_compare_and_swap = function(rs, _this, obj, offset, expected, x) {
    var actual;

    actual = obj.get_field_from_offset(rs, offset);
    if (actual === expected) {
      obj.set_field_from_offset(rs, offset, x);
      return true;
    } else {
      return false;
    }
  };

  native_define_class = function(rs, name, bytes, offset, len, loader, resume_cb, except_cb) {
    var b, raw_bytes;

    raw_bytes = (function() {
      var _i, _len, _ref4, _results;

      _ref4 = bytes.array.slice(offset, offset + len);
      _results = [];
      for (_i = 0, _len = _ref4.length; _i < _len; _i++) {
        b = _ref4[_i];
        _results.push((256 + b) % 256);
      }
      return _results;
    })();
    return loader.define_class(rs, util.int_classname(name.jvm2js_str()), raw_bytes, (function(cdata) {
      return resume_cb(cdata.get_class_object(rs));
    }), except_cb);
  };

  write_to_file = function(rs, _this, bytes, offset, len, append) {
    var fd, fd_obj;

    fd_obj = _this.get_field(rs, 'Ljava/io/FileOutputStream;fd');
    fd = fd_obj.get_field(rs, 'Ljava/io/FileDescriptor;fd');
    if (fd === -1) {
      rs.java_throw(rs.get_bs_class('Ljava/io/IOException;'), "Bad file descriptor");
    }
    if (fd !== 1 && fd !== 2) {
      _this.$pos += fs.writeSync(fd, new Buffer(bytes.array), offset, len, _this.$pos);
      return;
    }
    rs.print(util.chars2js_str(bytes, offset, len));
    if (typeof node !== "undefined" && node !== null) {
      return rs.async_op(function(cb) {
        return cb();
      });
    }
  };

  get_cl_from_jclo = function(rs, jclo) {
    if ((jclo != null) && (jclo.$loader != null)) {
      return jclo.$loader;
    } else {
      return rs.get_bs_cl();
    }
  };

  create_stack_trace = function(rs, throwable) {
    var cls, cstack, i, ln, row, sf, source_file, stacktrace, table, _i, _len, _ref4, _ref5, _ref6, _ref7;

    stacktrace = [];
    cstack = rs.meta_stack()._cs.slice(1, -1);
    for (_i = 0, _len = cstack.length; _i < _len; _i++) {
      sf = cstack[_i];
      if (!(!(sf["native"] || sf.locals[0] === throwable))) {
        continue;
      }
      cls = sf.method.cls;
      ln = -1;
      if (throwable.cls.get_type() !== 'Ljava/lang/NoClassDefFoundError;') {
        if (sf.method.access_flags["native"]) {
          source_file = 'Native Method';
        } else {
          source_file = ((_ref4 = cls.get_attribute('SourceFile')) != null ? _ref4.filename : void 0) || 'unknown';
          table = (_ref5 = sf.method.code) != null ? _ref5.get_attribute('LineNumberTable') : void 0;
          if (table == null) {
            break;
          }
          _ref6 = table.entries;
          for (i in _ref6) {
            row = _ref6[i];
            if (row.start_pc <= sf.pc) {
              ln = row.line_number;
            }
          }
        }
      } else {
        source_file = 'unknown';
      }
      stacktrace.push(new JavaObject(rs, rs.get_bs_class('Ljava/lang/StackTraceElement;'), {
        'Ljava/lang/StackTraceElement;declaringClass': rs.init_string(util.ext_classname(cls.get_type())),
        'Ljava/lang/StackTraceElement;methodName': rs.init_string((_ref7 = sf.method.name) != null ? _ref7 : 'unknown'),
        'Ljava/lang/StackTraceElement;fileName': rs.init_string(source_file),
        'Ljava/lang/StackTraceElement;lineNumber': ln
      }));
    }
    return stacktrace.reverse();
  };

  native_methods = {
    classes: {
      awt: {
        CanvasGraphicsEnvironment: []
      },
      doppio: {
        JavaScript: [
          o('eval(Ljava/lang/String;)Ljava/lang/String;', function(rs, to_eval) {
            var rv;

            rv = eval(to_eval.jvm2js_str());
            if (rv != null) {
              return rs.init_string("" + rv);
            } else {
              return null;
            }
          })
        ],
        Debug: [
          o('SetLogLevel(L!/!/!$LogLevel;)V', function(rs, loglevel) {
            var ll;

            ll = loglevel.get_field(rs, 'Lclasses/doppio/Debug$LogLevel;level');
            return logging.log_level = ll;
          }), o('GetLogLevel()L!/!/!$LogLevel;', function(rs) {
            var ll_cls;

            ll_cls = rs.get_bs_class('Lclasses/doppio/Debug$LogLevel;');
            switch (logging.log_level) {
              case 10:
                return ll_cls.static_get(rs, 'VTRACE');
              case 9:
                return ll_cls.static_get(rs, 'TRACE');
              case 5:
                return ll_cls.static_get(rs, 'DEBUG');
              default:
                return ll_cls.static_get(rs, 'ERROR');
            }
          })
        ]
      }
    },
    java: {
      lang: {
        ClassLoader: [
          o('findLoadedClass0(L!/!/String;)L!/!/Class;', function(rs, _this, name) {
            var cls, loader, type;

            loader = get_cl_from_jclo(rs, _this);
            type = util.int_classname(name.jvm2js_str());
            cls = loader.get_resolved_class(type, true);
            if (cls != null) {
              return cls.get_class_object(rs);
            } else {
              return null;
            }
          }), o('findBootstrapClass(L!/!/String;)L!/!/Class;', function(rs, _this, name) {
            var type;

            type = util.int_classname(name.jvm2js_str());
            return rs.async_op(function(resume_cb, except_cb) {
              return rs.get_bs_cl().resolve_class(rs, type, (function(cls) {
                return resume_cb(cls.get_class_object(rs));
              }), except_cb, true);
            });
          }), o('getCaller(I)L!/!/Class;', function(rs, i) {
            var cls;

            cls = rs.meta_stack().get_caller(i).method.cls;
            return cls.get_class_object(rs);
          }), o('defineClass1(L!/!/String;[BIIL!/security/ProtectionDomain;L!/!/String;Z)L!/!/Class;', function(rs, _this, name, bytes, offset, len, pd, source, unused) {
            var loader;

            loader = get_cl_from_jclo(rs, _this);
            return rs.async_op(function(resume_cb, except_cb) {
              return native_define_class(rs, name, bytes, offset, len, loader, resume_cb, except_cb);
            });
          }), o('defineClass1(L!/!/String;[BIIL!/security/ProtectionDomain;L!/!/String;)L!/!/Class;', function(rs, _this, name, bytes, offset, len, pd, source) {
            var loader;

            loader = get_cl_from_jclo(rs, _this);
            return rs.async_op(function(resume_cb, except_cb) {
              return native_define_class(rs, name, bytes, offset, len, loader, resume_cb, except_cb);
            });
          }), o('resolveClass0(L!/!/Class;)V', function(rs, _this, cls) {
            var loader, type;

            loader = get_cl_from_jclo(rs, _this);
            type = cls.$cls.get_type();
            if (loader.get_resolved_class(type, true) != null) {
              return;
            }
            return rs.async_op(function(resume_cb, except_cb) {
              return loader.resolve_class(rs, type, (function() {
                return resume_cb();
              }), except_cb, true);
            });
          })
        ],
        Compiler: [o('disable()V', function(rs, _this) {}), o('enable()V', function(rs, _this) {})],
        Float: [
          o('floatToRawIntBits(F)I', function(rs, f_val) {
            var exp, f_view, i_view, sig, sign;

            if (typeof Float32Array !== "undefined" && Float32Array !== null) {
              f_view = new Float32Array([f_val]);
              i_view = new Int32Array(f_view.buffer);
              return i_view[0];
            }
            if (f_val === 0) {
              return 0;
            }
            if (f_val === Number.POSITIVE_INFINITY) {
              return util.FLOAT_POS_INFINITY_AS_INT;
            }
            if (f_val === Number.NEGATIVE_INFINITY) {
              return util.FLOAT_NEG_INFINITY_AS_INT;
            }
            if (isNaN(f_val)) {
              return util.FLOAT_NaN_AS_INT;
            }
            sign = f_val < 0 ? 1 : 0;
            f_val = Math.abs(f_val);
            if (f_val <= 1.1754942106924411e-38 && f_val >= 1.4012984643248170e-45) {
              exp = 0;
              sig = Math.round((f_val / Math.pow(2, -126)) * Math.pow(2, 23));
              return (sign << 31) | (exp << 23) | sig;
            } else {
              exp = Math.floor(Math.log(f_val) / Math.LN2);
              sig = Math.round((f_val / Math.pow(2, exp) - 1) * Math.pow(2, 23));
              return (sign << 31) | ((exp + 127) << 23) | sig;
            }
          }), o('intBitsToFloat(I)F', function(rs, i_val) {
            return util.intbits2float(i_val);
          })
        ],
        Double: [
          o('doubleToRawLongBits(D)J', function(rs, d_val) {
            var d_view, exp, high_bits, i_view, sig, sign;

            if (typeof Float64Array !== "undefined" && Float64Array !== null) {
              d_view = new Float64Array([d_val]);
              i_view = new Uint32Array(d_view.buffer);
              return gLong.fromBits(i_view[0], i_view[1]);
            }
            if (d_val === 0) {
              return gLong.ZERO;
            }
            if (d_val === Number.POSITIVE_INFINITY) {
              return gLong.fromBits(0, 2146435072);
            } else if (d_val === Number.NEGATIVE_INFINITY) {
              return gLong.fromBits(0, -1048576);
            } else if (isNaN(d_val)) {
              return gLong.fromBits(0, 2146959360);
            }
            sign = d_val < 0 ? 1 << 31 : 0;
            d_val = Math.abs(d_val);
            if (d_val <= 2.2250738585072010e-308 && d_val >= 5.0000000000000000e-324) {
              exp = 0;
              sig = gLong.fromNumber((d_val / Math.pow(2, -1022)) * Math.pow(2, 52));
            } else {
              exp = Math.floor(Math.log(d_val) / Math.LN2);
              if (d_val < Math.pow(2, exp)) {
                exp = exp - 1;
              }
              sig = gLong.fromNumber((d_val / Math.pow(2, exp) - 1) * Math.pow(2, 52));
              exp = (exp + 1023) << 20;
            }
            high_bits = sig.getHighBits() | sign | exp;
            return gLong.fromBits(sig.getLowBits(), high_bits);
          }), o('longBitsToDouble(J)D', function(rs, l_val) {
            return util.longbits2double(l_val.getHighBits(), l_val.getLowBitsUnsigned());
          })
        ],
        Object: [
          o('getClass()L!/!/Class;', function(rs, _this) {
            return _this.cls.get_class_object(rs);
          }), o('hashCode()I', function(rs, _this) {
            return _this.ref;
          }), o('clone()L!/!/!;', function(rs, _this) {
            return _this.clone(rs);
          }), o('notify()V', function(rs, _this) {
            ;
            var locker, owner;

            if ((locker = rs.lock_refs[_this]) != null) {
              if (locker !== rs.curr_thread) {
                owner = thread_name(rs, locker);
                rs.java_throw(rs.get_bs_class('Ljava/lang/IllegalMonitorStateException;'), "Thread '" + owner + "' owns this monitor");
              }
            }
            if (rs.waiting_threads[_this] != null) {
              return rs.waiting_threads[_this].shift();
            }
          }), o('notifyAll()V', function(rs, _this) {
            ;
            var locker, owner;

            if ((locker = rs.lock_refs[_this]) != null) {
              if (locker !== rs.curr_thread) {
                owner = thread_name(rs, locker);
                rs.java_throw(rs.get_bs_class('Ljava/lang/IllegalMonitorStateException;'), "Thread '" + owner + "' owns this monitor");
              }
            }
            if (rs.waiting_threads[_this] != null) {
              return rs.waiting_threads[_this] = [];
            }
          }), o('wait(J)V', function(rs, _this, timeout) {
            var locker, owner;

            if (timeout !== gLong.ZERO) {
              error("TODO(Object::wait): respect the timeout param (" + timeout + ")");
            }
            if ((locker = rs.lock_refs[_this]) != null) {
              if (locker !== rs.curr_thread) {
                owner = thread_name(rs, locker);
                rs.java_throw(rs.get_bs_class('Ljava/lang/IllegalMonitorStateException;'), "Thread '" + owner + "' owns this monitor");
              }
            }
            rs.lock_refs[_this] = null;
            return rs.wait(_this);
          })
        ],
        Package: [
          o('getSystemPackage0(Ljava/lang/String;)Ljava/lang/String;', function(rs, pkg_name_obj) {
            var pkg_name;

            pkg_name = pkg_name_obj.jvm2js_str();
            if (__indexOf.call(rs.get_bs_cl().get_package_names(), pkg_name) >= 0) {
              return pkg_name_obj;
            } else {
              return null;
            }
          }), o('getSystemPackages0()[Ljava/lang/String;', function(rs) {
            var cls_name;

            return new JavaArray(rs, rs.get_bs_class('[Ljava/lang/String;'), (function() {
              var _i, _len, _ref4, _results;

              _ref4 = rs.get_bs_cl().get_package_names();
              _results = [];
              for (_i = 0, _len = _ref4.length; _i < _len; _i++) {
                cls_name = _ref4[_i];
                _results.push(rs.init_string(cls_name));
              }
              return _results;
            })());
          })
        ],
        ProcessEnvironment: [
          o('environ()[[B', function(rs) {
            var env_arr, k, v, _ref4;

            env_arr = [];
            _ref4 = process.env;
            for (k in _ref4) {
              v = _ref4[k];
              env_arr.push(new JavaArray(rs, rs.get_bs_class('[B'), util.bytestr_to_array(k)));
              env_arr.push(new JavaArray(rs, rs.get_bs_class('[B'), util.bytestr_to_array(v)));
            }
            return new JavaArray(rs, rs.get_bs_class('[[B'), env_arr);
          })
        ],
        reflect: {
          Array: [
            o('newArray(L!/!/Class;I)L!/!/Object;', function(rs, _this, len) {
              return rs.heap_newarray(_this.$cls.get_type(), len);
            }), o('getLength(Ljava/lang/Object;)I', function(rs, arr) {
              return rs.check_null(arr).array.length;
            }), o('set(Ljava/lang/Object;ILjava/lang/Object;)V', function(rs, arr, idx, val) {
              var array, ccls, ccname, ecls, illegal_exc, m, my_sf;

              my_sf = rs.curr_frame();
              array = rs.check_null(arr).array;
              if (!(idx < array.length)) {
                rs.java_throw(rs.get_bs_class('Ljava/lang/ArrayIndexOutOfBoundsException;'), 'Tried to write to an illegal index in an array.');
              }
              if ((ccls = arr.cls.get_component_class()) instanceof PrimitiveClassData) {
                if (val.cls.is_subclass(rs.get_bs_class(ccls.box_class_name()))) {
                  ccname = ccls.get_type();
                  m = val.cls.method_lookup(rs, "" + util.internal2external[ccname] + "Value()" + ccname);
                  rs.push(val);
                  m.setup_stack(rs);
                  my_sf.runner = function() {
                    array[idx] = ccname === 'J' || ccname === 'D' ? rs.pop2() : rs.pop();
                    return rs.meta_stack().pop();
                  };
                  throw exceptions.ReturnException;
                }
              } else if (val.cls.is_subclass(ccls)) {
                array[idx] = val;
                return;
              }
              illegal_exc = 'Ljava/lang/IllegalArgumentException;';
              if ((ecls = rs.get_bs_class(illegal_exc, true)) != null) {
                return rs.java_throw(ecls, 'argument type mismatch');
              } else {
                return rs.async_op(function(resume_cb, except_cb) {
                  return rs.get_cl().initialize_class(rs, illegal_exc, (function(ecls) {
                    return except_cb((function() {
                      return rs.java_throw(ecls, 'argument type mismatch');
                    }));
                  }), except_cb);
                });
              }
            })
          ],
          Proxy: [
            o('defineClass0(L!/!/ClassLoader;L!/!/String;[BII)L!/!/Class;', function(rs, cl, name, bytes, offset, len) {
              return rs.async_op(function(success_cb, except_cb) {
                return native_define_class(rs, name, bytes, offset, len, get_cl_from_jclo(rs, cl), success_cb, except_cb);
              });
            })
          ]
        },
        SecurityManager: [
          o('getClassContext()[Ljava/lang/Class;', function(rs, _this) {
            var classes, sf, _i, _ref4;

            classes = [];
            _ref4 = rs.meta_stack()._cs;
            for (_i = _ref4.length - 1; _i >= 0; _i += -1) {
              sf = _ref4[_i];
              if (!sf["native"]) {
                classes.push(sf.method.cls.get_class_object(rs));
              }
            }
            return new JavaArray(rs, rs.get_bs_class('[Ljava/lang/Class;'), classes);
          })
        ],
        Shutdown: [
          o('halt0(I)V', function(rs, status) {
            throw new exceptions.HaltException(status);
          })
        ],
        StrictMath: [
          o('acos(D)D', function(rs, d_val) {
            return Math.acos(d_val);
          }), o('asin(D)D', function(rs, d_val) {
            return Math.asin(d_val);
          }), o('atan(D)D', function(rs, d_val) {
            return Math.atan(d_val);
          }), o('atan2(DD)D', function(rs, y, x) {
            return Math.atan2(y, x);
          }), o('cbrt(D)D', function(rs, d_val) {
            var is_neg;

            is_neg = d_val < 0;
            if (is_neg) {
              return -Math.pow(-d_val, 1 / 3);
            } else {
              return Math.pow(d_val, 1 / 3);
            }
          }), o('cos(D)D', function(rs, d_val) {
            return Math.cos(d_val);
          }), o('exp(D)D', function(rs, d_val) {
            return Math.exp(d_val);
          }), o('log(D)D', function(rs, d_val) {
            return Math.log(d_val);
          }), o('log10(D)D', function(rs, d_val) {
            return Math.log(d_val) / Math.LN10;
          }), o('pow(DD)D', function(rs, base, exp) {
            return Math.pow(base, exp);
          }), o('sin(D)D', function(rs, d_val) {
            return Math.sin(d_val);
          }), o('sqrt(D)D', function(rs, d_val) {
            return Math.sqrt(d_val);
          }), o('tan(D)D', function(rs, d_val) {
            return Math.tan(d_val);
          }), o('floor(D)D', function(rs, d_val) {
            return Math.floor(d_val);
          }), o('ceil(D)D', function(rs, d_val) {
            return Math.ceil(d_val);
          })
        ],
        String: [
          o('intern()L!/!/!;', function(rs, _this) {
            var js_str, s;

            js_str = _this.jvm2js_str();
            if ((s = rs.string_pool.get(js_str)) == null) {
              s = rs.string_pool.set(js_str, _this);
            }
            return s;
          })
        ],
        System: [
          o('arraycopy(L!/!/Object;IL!/!/Object;II)V', function(rs, src, src_pos, dest, dest_pos, length) {
            var dest_comp_cls, src_comp_cls;

            if ((src == null) || (dest == null)) {
              rs.java_throw(rs.get_bs_class('Ljava/lang/NullPointerException;'), 'Cannot copy to/from a null array.');
            }
            if (!(src.cls instanceof ArrayClassData) || !(dest.cls instanceof ArrayClassData)) {
              rs.java_throw(rs.get_bs_class('Ljava/lang/ArrayStoreException;'), 'src and dest arguments must be of array type.');
            }
            if (src_pos < 0 || (src_pos + length) > src.array.length || dest_pos < 0 || (dest_pos + length) > dest.array.length || length < 0) {
              rs.java_throw(rs.get_bs_class('Ljava/lang/ArrayIndexOutOfBoundsException;'), 'Tried to write to an illegal index in an array.');
            }
            if (src === dest) {
              src = {
                cls: src.cls,
                array: src.array.slice(src_pos, src_pos + length)
              };
              src_pos = 0;
            }
            if (src.cls.is_castable(dest.cls)) {
              return arraycopy_no_check(src, src_pos, dest, dest_pos, length);
            } else {
              src_comp_cls = src.cls.get_component_class();
              dest_comp_cls = dest.cls.get_component_class();
              if ((src_comp_cls instanceof PrimitiveClassData) || (dest_comp_cls instanceof PrimitiveClassData)) {
                return rs.java_throw(rs.get_bs_class('Ljava/lang/ArrayStoreException;'), 'If calling arraycopy with a primitive array, both src and dest must be of the same primitive type.');
              } else {
                return arraycopy_check(rs, src, src_pos, dest, dest_pos, length);
              }
            }
          }), o('currentTimeMillis()J', function(rs) {
            return gLong.fromNumber((new Date).getTime());
          }), o('identityHashCode(L!/!/Object;)I', function(rs, x) {
            var _ref4;

            return (_ref4 = x != null ? x.ref : void 0) != null ? _ref4 : 0;
          }), o('initProperties(L!/util/Properties;)L!/util/Properties;', function(rs, props) {
            return rs.push(null);
          }), o('nanoTime()J', function(rs) {
            return gLong.fromNumber((new Date).getTime()).multiply(gLong.fromNumber(1000000));
          }), o('setIn0(L!/io/InputStream;)V', function(rs, stream) {
            var sys;

            sys = rs.get_bs_class('Ljava/lang/System;');
            return sys.static_put(rs, 'in', stream);
          }), o('setOut0(L!/io/PrintStream;)V', function(rs, stream) {
            var sys;

            sys = rs.get_bs_class('Ljava/lang/System;');
            return sys.static_put(rs, 'out', stream);
          }), o('setErr0(L!/io/PrintStream;)V', function(rs, stream) {
            var sys;

            sys = rs.get_bs_class('Ljava/lang/System;');
            return sys.static_put(rs, 'err', stream);
          })
        ],
        Thread: [
          o('currentThread()L!/!/!;', function(rs) {
            return rs.curr_thread;
          }), o('setPriority0(I)V', function(rs) {}), o('holdsLock(L!/!/Object;)Z', function(rs, obj) {
            return rs.curr_thread === rs.lock_refs[obj];
          }), o('isAlive()Z', function(rs, _this) {
            var _ref4;

            return (_ref4 = _this.$isAlive) != null ? _ref4 : false;
          }), o('isInterrupted(Z)Z', function(rs, _this, clear_flag) {
            var tmp, _ref4;

            tmp = (_ref4 = _this.$isInterrupted) != null ? _ref4 : false;
            if (clear_flag) {
              _this.$isInterrupted = false;
            }
            return tmp;
          }), o('interrupt0()V', function(rs, _this) {
            var new_thread_sf;

            _this.$isInterrupted = true;
            if (_this === rs.curr_thread) {
              return;
            }
            if (rs.parked(_this)) {
              rs["yield"](_this);
              return;
            }
            ;
            new_thread_sf = util.last(_this.$meta_stack._cs);
            new_thread_sf.runner = function() {
              return rs.java_throw(rs.get_bs_class('Ljava/lang/InterruptedException;'), 'interrupt0 called');
            };
            _this.$meta_stack.push({});
            rs["yield"](_this);
            throw exceptions.ReturnException;
          }), o('start0()V', function(rs, _this) {
            var new_thread_sf, old_thread_sf, run_method, thread_runner_sf;

            _this.$isAlive = true;
            _this.$meta_stack = new runtime.CallStack();
            rs.thread_pool.push(_this);
            old_thread_sf = rs.curr_frame();
            ;
            rs.curr_thread = _this;
            new_thread_sf = rs.curr_frame();
            rs.push(_this);
            run_method = _this.cls.method_lookup(rs, 'run()V');
            thread_runner_sf = run_method.setup_stack(rs);
            new_thread_sf.runner = function() {
              new_thread_sf.runner = null;
              _this.$isAlive = false;
              return ;
            };
            old_thread_sf.runner = function() {
              ;              return rs.meta_stack().pop();
            };
            throw exceptions.ReturnException;
          }), o('sleep(J)V', function(rs, millis) {
            rs.curr_thread.wakeup_time = (new Date).getTime() + millis.toNumber();
            return rs.async_op(function(resume_cb) {
              return rs.choose_next_thread(null, function(next_thread) {
                rs["yield"](next_thread);
                return resume_cb();
              });
            });
          }), o('yield()V', function(rs, _this) {
            return rs.async_op(function(resume_cb) {
              return rs.choose_next_thread(null, function(next_thread) {
                rs["yield"](next_thread);
                return resume_cb();
              });
            });
          })
        ],
        Throwable: [
          o('fillInStackTrace()L!/!/!;', function(rs, _this) {
            var strace;

            strace = new JavaArray(rs, rs.get_bs_class('[Ljava/lang/StackTraceElement;'), create_stack_trace(rs, _this));
            _this.set_field(rs, 'Ljava/lang/Throwable;stackTrace', strace);
            return _this;
          }), o('getStackTraceDepth()I', function(rs, _this) {
            return create_stack_trace(rs, _this).length;
          }), o('getStackTraceElement(I)L!/!/StackTraceElement;', function(rs, _this, depth) {
            return create_stack_trace(rs, _this)[depth];
          })
        ],
        UNIXProcess: [
          o('forkAndExec([B[BI[BI[BZLjava/io/FileDescriptor;Ljava/io/FileDescriptor;Ljava/io/FileDescriptor;)I', function(rs, _this, prog, argBlock) {
            var args, progname;

            progname = util.chars2js_str(prog, 0, prog.array.length);
            args = util.chars2js_str(argBlock, 0, argBlock.array.length);
            return rs.java_throw(rs.get_bs_class('Ljava/lang/Error;'), "Doppio doesn't support forking processes. Command was: `" + progname + " " + args + "`");
          })
        ]
      },
      security: {
        AccessController: [
          o('doPrivileged(L!/!/PrivilegedAction;)L!/lang/Object;', doPrivileged), o('doPrivileged(L!/!/PrivilegedAction;L!/!/AccessControlContext;)L!/lang/Object;', doPrivileged), o('doPrivileged(L!/!/PrivilegedExceptionAction;)L!/lang/Object;', doPrivileged), o('doPrivileged(L!/!/PrivilegedExceptionAction;L!/!/AccessControlContext;)L!/lang/Object;', doPrivileged), o('getStackAccessControlContext()Ljava/security/AccessControlContext;', function(rs) {
            return null;
          })
        ]
      },
      sql: {
        DriverManager: [
          o('getCallerClassLoader()Ljava/lang/ClassLoader;', function(rs) {
            var rv;

            rv = rs.meta_stack().get_caller(1).method.cls.loader.loader_obj;
            if (rv !== void 0) {
              return rv;
            } else {
              return null;
            }
          })
        ]
      },
      io: {
        Console: [
          o('encoding()L!/lang/String;', function() {
            return null;
          }), o('istty()Z', function() {
            return true;
          })
        ],
        FileSystem: [
          o('getFileSystem()L!/!/!;', function(rs) {
            var cache1, cache2, cache_init, cdata, my_sf;

            my_sf = rs.curr_frame();
            cdata = rs.get_bs_class('Ljava/io/ExpiringCache;');
            cache1 = new JavaObject(rs, cdata);
            cache2 = new JavaObject(rs, cdata);
            cache_init = cdata.method_lookup(rs, '<init>()V');
            rs.push2(cache1, cache2);
            cache_init.setup_stack(rs);
            my_sf.runner = function() {
              cache_init.setup_stack(rs);
              return my_sf.runner = function() {
                var rv, system_properties;

                system_properties = (typeof jvm !== "undefined" && jvm !== null ? jvm : require('./jvm')).system_properties;
                rv = new JavaObject(rs, rs.get_bs_class('Ljava/io/UnixFileSystem;'), {
                  'Ljava/io/UnixFileSystem;cache': cache1,
                  'Ljava/io/UnixFileSystem;javaHomePrefixCache': cache2,
                  'Ljava/io/UnixFileSystem;slash': system_properties['file.separator'].charCodeAt(0),
                  'Ljava/io/UnixFileSystem;colon': system_properties['path.separator'].charCodeAt(0),
                  'Ljava/io/UnixFileSystem;javaHome': rs.init_string(system_properties['java.home'], true)
                });
                rs.meta_stack().pop();
                return rs.push(rv);
              };
            };
            throw exceptions.ReturnException;
          })
        ],
        FileOutputStream: [
          o('open(L!/lang/String;)V', function(rs, _this, fname) {
            return rs.async_op(function(resume_cb) {
              return fs.open(fname.jvm2js_str(), 'w', function(err, fd) {
                var fd_obj;

                fd_obj = _this.get_field(rs, 'Ljava/io/FileOutputStream;fd');
                fd_obj.set_field(rs, 'Ljava/io/FileDescriptor;fd', fd);
                _this.$pos = 0;
                return resume_cb();
              });
            });
          }), o('openAppend(Ljava/lang/String;)V', function(rs, _this, fname) {
            return rs.async_op(function(resume_cb) {
              return fs.open(fname.jvm2js_str(), 'a', function(err, fd) {
                var fd_obj;

                fd_obj = _this.get_field(rs, 'Ljava/io/FileOutputStream;fd');
                fd_obj.set_field(rs, 'Ljava/io/FileDescriptor;fd', fd);
                _this.$pos = (stat_fd(fd)).size;
                return resume_cb();
              });
            });
          }), o('writeBytes([BIIZ)V', write_to_file), o('writeBytes([BII)V', write_to_file), o('close0()V', function(rs, _this) {
            var fd, fd_obj;

            fd_obj = _this.get_field(rs, 'Ljava/io/FileOutputStream;fd');
            fd = fd_obj.get_field(rs, 'Ljava/io/FileDescriptor;fd');
            return rs.async_op(function(resume_cb, except_cb) {
              return fs.close(fd, function(err) {
                if (err) {
                  return except_cb(function() {
                    return rs.java_throw(rs.get_bs_class('Ljava/io/IOException;'), err.message);
                  });
                } else {
                  fd_obj.set_field(rs, 'Ljava/io/FileDescriptor;fd', -1);
                  return resume_cb();
                }
              });
            });
          })
        ],
        FileInputStream: [
          o('available()I', function(rs, _this) {
            var fd, fd_obj, stats;

            fd_obj = _this.get_field(rs, 'Ljava/io/FileInputStream;fd');
            fd = fd_obj.get_field(rs, 'Ljava/io/FileDescriptor;fd');
            if (fd === -1) {
              rs.java_throw(rs.get_bs_class('Ljava/io/IOException;'), "Bad file descriptor");
            }
            if (fd === 0) {
              return 0;
            }
            stats = fs.fstatSync(fd);
            return stats.size - _this.$pos;
          }), o('read()I', function(rs, _this) {
            var buf, bytes_read, fd, fd_obj;

            fd_obj = _this.get_field(rs, 'Ljava/io/FileInputStream;fd');
            fd = fd_obj.get_field(rs, 'Ljava/io/FileDescriptor;fd');
            if (fd === -1) {
              rs.java_throw(rs.get_bs_class('Ljava/io/IOException;'), "Bad file descriptor");
            }
            if (fd !== 0) {
              buf = new Buffer((fs.fstatSync(fd)).size);
              bytes_read = fs.readSync(fd, buf, 0, 1, _this.$pos);
              _this.$pos++;
              if (bytes_read === 0) {
                return -1;
              } else {
                return buf.readUInt8(0);
              }
            }
            return rs.async_op(function(cb) {
              return rs.async_input(1, function(byte) {
                return cb(byte.length === 0 ? -1 : byte[0]);
              });
            });
          }), o('readBytes([BII)I', function(rs, _this, byte_arr, offset, n_bytes) {
            var buf, bytes_read, fd, fd_obj, filesize, i, pos, _i;

            fd_obj = _this.get_field(rs, 'Ljava/io/FileInputStream;fd');
            fd = fd_obj.get_field(rs, 'Ljava/io/FileDescriptor;fd');
            if (fd === -1) {
              rs.java_throw(rs.get_bs_class('Ljava/io/IOException;'), "Bad file descriptor");
            }
            if (fd !== 0) {
              pos = _this.$pos;
              buf = new Buffer(n_bytes);
              filesize = fs.fstatSync(fd).size;
              if (filesize > 0 && pos >= filesize - 1) {
                return -1;
              }
              bytes_read = fs.readSync(fd, buf, 0, n_bytes, pos);
              _this.$pos += bytes_read;
              for (i = _i = 0; _i < bytes_read; i = _i += 1) {
                byte_arr.array[offset + i] = buf.readUInt8(i);
              }
              if (bytes_read === 0 && n_bytes !== 0) {
                return -1;
              } else {
                return bytes_read;
              }
            }
            return rs.async_op(function(cb) {
              return rs.async_input(n_bytes, function(bytes) {
                var b, idx, _j, _len;

                for (idx = _j = 0, _len = bytes.length; _j < _len; idx = ++_j) {
                  b = bytes[idx];
                  byte_arr.array[offset + idx] = b;
                }
                return cb(bytes.length);
              });
            });
          }), o('open(Ljava/lang/String;)V', function(rs, _this, filename) {
            var filepath;

            filepath = filename.jvm2js_str();
            return rs.async_op(function(resume_cb, except_cb) {
              return fs.open(filepath, 'r', function(e, fd) {
                var fd_obj;

                if (e != null) {
                  if (e.code === 'ENOENT') {
                    return except_cb(function() {
                      return rs.java_throw(rs.get_bs_class('Ljava/io/FileNotFoundException;'), "" + filepath + " (No such file or directory)");
                    });
                  } else {
                    return except_cb(function() {
                      throw e;
                    });
                  }
                } else {
                  fd_obj = _this.get_field(rs, 'Ljava/io/FileInputStream;fd');
                  fd_obj.set_field(rs, 'Ljava/io/FileDescriptor;fd', fd);
                  _this.$pos = 0;
                  return resume_cb();
                }
              });
            });
          }), o('close0()V', function(rs, _this) {
            var fd, fd_obj;

            fd_obj = _this.get_field(rs, 'Ljava/io/FileInputStream;fd');
            fd = fd_obj.get_field(rs, 'Ljava/io/FileDescriptor;fd');
            return rs.async_op(function(resume_cb, except_cb) {
              return fs.close(fd, function(err) {
                if (err) {
                  return except_cb(function() {
                    return rs.java_throw(rs.get_bs_class('Ljava/io/IOException;'), err.message);
                  });
                } else {
                  fd_obj.set_field(rs, 'Ljava/io/FileDescriptor;fd', -1);
                  return resume_cb();
                }
              });
            });
          }), o('skip(J)J', function(rs, _this, n_bytes) {
            var bytes_left, fd, fd_obj, to_skip;

            fd_obj = _this.get_field(rs, 'Ljava/io/FileInputStream;fd');
            fd = fd_obj.get_field(rs, 'Ljava/io/FileDescriptor;fd');
            if (fd === -1) {
              rs.java_throw(rs.get_bs_class('Ljava/io/IOException;'), "Bad file descriptor");
            }
            if (fd !== 0) {
              bytes_left = fs.fstatSync(fd).size - _this.$pos;
              to_skip = Math.min(n_bytes.toNumber(), bytes_left);
              _this.$pos += to_skip;
              return gLong.fromNumber(to_skip);
            }
            return rs.async_op(function(cb) {
              return rs.async_input(n_bytes.toNumber(), function(bytes) {
                return cb(gLong.fromNumber(bytes.length), null);
              });
            });
          })
        ],
        ObjectInputStream: [
          o('latestUserDefinedLoader()Ljava/lang/ClassLoader;', function(rs) {
            return null;
          })
        ],
        ObjectStreamClass: [
          o('initNative()V', function(rs) {}), o('hasStaticInitializer(Ljava/lang/Class;)Z', function(rs, cls) {
            return cls.$cls.get_method('<clinit>()V') != null;
          })
        ],
        RandomAccessFile: [
          o('open(Ljava/lang/String;I)V', function(rs, _this, filename, mode) {
            var filepath, mode_str;

            filepath = filename.jvm2js_str();
            mode_str = (function() {
              switch (mode) {
                case 1:
                  return 'r';
                case 2:
                  return 'r+';
                case 4:
                case 8:
                  return 'rs+';
              }
            })();
            return rs.async_op(function(resume_cb, except_cb) {
              return fs.open(filepath, mode_str, function(e, fd) {
                var fd_obj;

                if (e != null) {
                  if (e.code === 'ENOENT') {
                    return except_cb(function() {
                      return rs.java_throw(rs.get_bs_class('Ljava/io/FileNotFoundException;'), "Could not open file " + filepath);
                    });
                  } else {
                    return except_cb(function() {
                      throw e;
                    });
                  }
                } else {
                  fd_obj = _this.get_field(rs, 'Ljava/io/RandomAccessFile;fd');
                  fd_obj.set_field(rs, 'Ljava/io/FileDescriptor;fd', fd);
                  _this.$pos = 0;
                  return resume_cb();
                }
              });
            });
          }), o('getFilePointer()J', function(rs, _this) {
            return gLong.fromNumber(_this.$pos);
          }), o('length()J', function(rs, _this) {
            var fd, fd_obj;

            fd_obj = _this.get_field(rs, 'Ljava/io/RandomAccessFile;fd');
            fd = fd_obj.get_field(rs, 'Ljava/io/FileDescriptor;fd');
            return gLong.fromNumber((stat_fd(fd)).size);
          }), o('seek(J)V', function(rs, _this, pos) {
            return _this.$pos = pos.toNumber();
          }), o('readBytes([BII)I', function(rs, _this, byte_arr, offset, len) {
            var buf, bytes_read, fd, fd_obj, i, _i;

            fd_obj = _this.get_field(rs, 'Ljava/io/RandomAccessFile;fd');
            fd = fd_obj.get_field(rs, 'Ljava/io/FileDescriptor;fd');
            if (_this.$pos >= fs.fstatSync(fd).size - 1) {
              return -1;
            }
            buf = new Buffer(len);
            bytes_read = fs.readSync(fd, buf, 0, len, _this.$pos);
            for (i = _i = 0; _i < bytes_read; i = _i += 1) {
              byte_arr.array[offset + i] = buf.readUInt8(i);
            }
            _this.$pos += bytes_read;
            if (bytes_read === 0 && len !== 0) {
              return -1;
            } else {
              return bytes_read;
            }
          }), o('writeBytes([BII)V', function(rs, _this, byte_arr, offset, len) {
            var fd, fd_obj;

            fd_obj = _this.get_field(rs, 'Ljava/io/RandomAccessFile;fd');
            fd = fd_obj.get_field(rs, 'Ljava/io/FileDescriptor;fd');
            return _this.$pos += fs.writeSync(fd, new Buffer(byte_arr.array), offset, len, _this.$pos);
          }), o('close0()V', function(rs, _this) {
            var fd, fd_obj;

            fd_obj = _this.get_field(rs, 'Ljava/io/RandomAccessFile;fd');
            fd = fd_obj.get_field(rs, 'Ljava/io/FileDescriptor;fd');
            return rs.async_op(function(resume_cb, except_cb) {
              return fs.close(fd, function(err) {
                if (err) {
                  return except_cb(function() {
                    return rs.java_throw(rs.get_bs_class('Ljava/io/IOException;'), err.message);
                  });
                } else {
                  fd_obj.set_field(rs, 'Ljava/io/FileDescriptor;fd', -1);
                  return resume_cb();
                }
              });
            });
          })
        ],
        UnixFileSystem: [
          o('canonicalize0(L!/lang/String;)L!/lang/String;', function(rs, _this, jvm_path_str) {
            var js_str;

            js_str = jvm_path_str.jvm2js_str();
            return rs.init_string(path.resolve(path.normalize(js_str)));
          }), o('checkAccess(Ljava/io/File;I)Z', function(rs, _this, file, access) {
            var filepath;

            filepath = file.get_field(rs, 'Ljava/io/File;path');
            return rs.async_op(function(resume_cb) {
              return stat_file(filepath.jvm2js_str(), function(stats) {
                var mask;

                if (stats == null) {
                  return resume_cb(false);
                } else {
                  mask = access | (access << 3) | (access << 6);
                  return resume_cb((stats.mode & mask) > 0);
                }
              });
            });
          }), o('createDirectory(Ljava/io/File;)Z', function(rs, _this, file) {
            var filepath;

            filepath = (file.get_field(rs, 'Ljava/io/File;path')).jvm2js_str();
            return rs.async_op(function(resume_cb) {
              return stat_file(filepath, function(stat) {
                if (stat != null) {
                  return resume_cb(false);
                } else {
                  return fs.mkdir(filepath, function(err) {
                    return resume_cb(err != null ? false : true);
                  });
                }
              });
            });
          }), o('createFileExclusively(Ljava/lang/String;)Z', function(rs, _this, path) {
            var filepath;

            filepath = path.jvm2js_str();
            return rs.async_op(function(resume_cb, except_cb) {
              return stat_file(filepath, function(stat) {
                if (stat != null) {
                  return resume_cb(false);
                } else {
                  return fs.open(filepath, 'w', function(err, fd) {
                    if (err != null) {
                      return except_cb(function() {
                        return rs.java_throw(rs.get_bs_class('Ljava/io/IOException;'), err.message);
                      });
                    } else {
                      return fs.close(fd, function(err) {
                        if (err != null) {
                          return except_cb(function() {
                            return rs.java_throw(rs.get_bs_class('Ljava/io/IOException;'), err.message);
                          });
                        } else {
                          return resume_cb(true);
                        }
                      });
                    }
                  });
                }
              });
            });
          }), o('createFileExclusively(Ljava/lang/String;Z)Z', function(rs, _this, path) {
            var filepath;

            filepath = path.jvm2js_str();
            return rs.async_op(function(resume_cb, except_cb) {
              return stat_file(filepath, function(stat) {
                if (stat != null) {
                  return resume_cb(false);
                } else {
                  return fs.open(filepath, 'w', function(err, fd) {
                    if (err != null) {
                      return except_cb(function() {
                        return rs.java_throw(rs.get_bs_class('Ljava/io/IOException;'), err.message);
                      });
                    } else {
                      return fs.close(fd, function(err) {
                        if (err != null) {
                          return except_cb(function() {
                            return rs.java_throw(rs.get_bs_class('Ljava/io/IOException;'), err.message);
                          });
                        } else {
                          return resume_cb(true);
                        }
                      });
                    }
                  });
                }
              });
            });
          }), o('delete0(Ljava/io/File;)Z', function(rs, _this, file) {
            var filepath;

            filepath = (file.get_field(rs, 'Ljava/io/File;path')).jvm2js_str();
            return rs.async_op(function(resume_cb, except_cb) {
              return stat_file(filepath, function(stats) {
                if (stats == null) {
                  return resume_cb(false);
                } else if (stats.isDirectory()) {
                  return fs.readdir(filepath, function(err, files) {
                    if (files.length > 0) {
                      return resume_cb(false);
                    } else {
                      return fs.rmdir(filepath, function(err) {
                        return resume_cb(true);
                      });
                    }
                  });
                } else {
                  return fs.unlink(filepath, function(err) {
                    return resume_cb(true);
                  });
                }
              });
            });
          }), o('getBooleanAttributes0(Ljava/io/File;)I', function(rs, _this, file) {
            var filepath;

            filepath = file.get_field(rs, 'Ljava/io/File;path');
            return rs.async_op(function(resume_cb) {
              return stat_file(filepath.jvm2js_str(), function(stats) {
                if (stats == null) {
                  return resume_cb(0);
                } else if (stats.isFile()) {
                  return resume_cb(3);
                } else if (stats.isDirectory()) {
                  return resume_cb(5);
                } else {
                  return resume_cb(1);
                }
              });
            });
          }), o('getLastModifiedTime(Ljava/io/File;)J', function(rs, _this, file) {
            var filepath;

            filepath = file.get_field(rs, 'Ljava/io/File;path').jvm2js_str();
            return rs.async_op(function(resume_cb) {
              return stat_file(filepath, function(stats) {
                if (stats == null) {
                  return resume_cb(gLong.ZERO, null);
                } else {
                  return resume_cb(gLong.fromNumber((new Date(stats.mtime)).getTime()), null);
                }
              });
            });
          }), o('setLastModifiedTime(Ljava/io/File;J)Z', function(rs, _this, file, time) {
            var atime, filepath, mtime;

            mtime = time.toNumber();
            atime = (new Date).getTime();
            filepath = file.get_field(rs, 'Ljava/io/File;path').jvm2js_str();
            return rs.async_op(function(resume_cb) {
              return fs.utimes(filepath, atime, mtime, function(err) {
                return resume_cb(true);
              });
            });
          }), o('getLength(Ljava/io/File;)J', function(rs, _this, file) {
            var filepath;

            filepath = file.get_field(rs, 'Ljava/io/File;path');
            return rs.async_op(function(resume_cb) {
              return fs.stat(filepath.jvm2js_str(), function(err, stat) {
                return resume_cb(gLong.fromNumber(err != null ? 0 : stat.size), null);
              });
            });
          }), o('list(Ljava/io/File;)[Ljava/lang/String;', function(rs, _this, file) {
            var filepath;

            filepath = file.get_field(rs, 'Ljava/io/File;path');
            return rs.async_op(function(resume_cb) {
              return fs.readdir(filepath.jvm2js_str(), function(err, files) {
                var f;

                if (err != null) {
                  return resume_cb(null);
                } else {
                  return resume_cb(new JavaArray(rs, rs.get_bs_class('[Ljava/lang/String;'), (function() {
                    var _i, _len, _results;

                    _results = [];
                    for (_i = 0, _len = files.length; _i < _len; _i++) {
                      f = files[_i];
                      _results.push(rs.init_string(f));
                    }
                    return _results;
                  })()));
                }
              });
            });
          }), o('rename0(Ljava/io/File;Ljava/io/File;)Z', function(rs, _this, file1, file2) {
            var file1path, file2path;

            file1path = (file1.get_field(rs, 'Ljava/io/File;path')).jvm2js_str();
            file2path = (file2.get_field(rs, 'Ljava/io/File;path')).jvm2js_str();
            return rs.async_op(function(resume_cb) {
              return fs.rename(file1path, file2path, function(err) {
                return resume_cb(err != null ? false : true);
              });
            });
          }), o('setPermission(Ljava/io/File;IZZ)Z', function(rs, _this, file, access, enable, owneronly) {
            var filepath;

            filepath = (file.get_field(rs, 'Ljava/io/File;path')).jvm2js_str();
            if (owneronly) {
              access <<= 6;
            } else {
              access |= (access << 6) | (access << 3);
            }
            if (!enable) {
              access = ~access;
            }
            return rs.async_op(function(resume_cb) {
              return stat_file(filepath, function(stats) {
                var existing_access;

                if (stats == null) {
                  return resume_cb(false);
                } else {
                  existing_access = stats.mode;
                  access = enable ? existing_access | access : existing_access & access;
                  return fs.chmod(filepath, access, function(err) {
                    return resume_cb(err != null ? false : true);
                  });
                }
              });
            });
          }), o('setReadOnly(Ljava/io/File;)Z', function(rs, _this, file) {
            var filepath, mask;

            filepath = (file.get_field(rs, 'Ljava/io/File;path')).jvm2js_str();
            mask = ~0x92;
            return rs.async_op(function(resume_cb) {
              return stat_file(filepath, function(stats) {
                if (stats == null) {
                  return resume_cb(false);
                } else {
                  return fs.chmod(filepath, stats.mode & mask, function(err) {
                    return resume_cb(err != null ? false : true);
                  });
                }
              });
            });
          })
        ]
      },
      util: {
        concurrent: {
          atomic: {
            AtomicLong: [
              o('VMSupportsCS8()Z', function() {
                return true;
              })
            ]
          }
        },
        jar: {
          JarFile: [
            o('getMetaInfEntryNames()[L!/lang/String;', function(rs) {
              return null;
            })
          ]
        },
        ResourceBundle: [
          o('getClassContext()[L!/lang/Class;', function(rs) {
            return new JavaArray(rs, rs.get_bs_class('[Ljava/lang/Class;'), [null, null, null]);
          })
        ],
        TimeZone: [
          o('getSystemTimeZoneID(L!/lang/String;L!/lang/String;)L!/lang/String;', function(rs, java_home, country) {
            return rs.init_string('GMT');
          }), o('getSystemGMTOffsetID()L!/lang/String;', function(rs) {
            return null;
          })
        ]
      }
    },
    sun: {
      font: {
        FontManager: [],
        FreetypeFontScaler: [o('initIDs(Ljava/lang/Class;)V', function() {})],
        StrikeCache: [
          o('getGlyphCacheDescription([J)V', function(rs, infoArray) {
            infoArray.array[0] = gLong.fromInt(8);
            return infoArray.array[1] = gLong.fromInt(8);
          })
        ]
      },
      management: {
        VMManagementImpl: [
          o('getStartupTime()J', function(rs) {
            return rs.startup_time;
          }), o('getVersion0()Ljava/lang/String;', function(rs) {
            return rs.init_string("1.2", true);
          }), o('initOptionalSupportFields()V', function(rs) {
            var field_names, name, vm_management_impl, _i, _len, _results;

            field_names = ['compTimeMonitoringSupport', 'threadContentionMonitoringSupport', 'currentThreadCpuTimeSupport', 'otherThreadCpuTimeSupport', 'bootClassPathSupport', 'objectMonitorUsageSupport', 'synchronizerUsageSupport'];
            vm_management_impl = rs.get_bs_class('Lsun/management/VMManagementImpl;');
            _results = [];
            for (_i = 0, _len = field_names.length; _i < _len; _i++) {
              name = field_names[_i];
              _results.push(vm_management_impl.static_put(rs, name, 0));
            }
            return _results;
          }), o('isThreadAllocatedMemoryEnabled()Z', function() {
            return false;
          }), o('isThreadContentionMonitoringEnabled()Z', function() {
            return false;
          }), o('isThreadCpuTimeEnabled()Z', function() {
            return false;
          }), o('getAvailableProcessors()I', function() {
            return 1;
          }), o('getProcessId()I', function() {
            return 1;
          })
        ],
        MemoryImpl: [
          o('getMemoryManagers0()[Ljava/lang/management/MemoryManagerMXBean;', function(rs) {
            return new JavaArray(rs, rs.get_bs_class('[Lsun/management/MemoryManagerImpl;'), []);
          }), o('getMemoryPools0()[Ljava/lang/management/MemoryPoolMXBean;', function(rs) {
            return new JavaArray(rs, rs.get_bs_class('[Lsun/management/MemoryPoolImpl;'), []);
          })
        ]
      },
      misc: {
        VM: [
          o('initialize()V', function(rs) {
            var props, sys_cls, vm_cls;

            vm_cls = rs.get_bs_class('Lsun/misc/VM;');
            if (!(vm_cls.major_version >= 51)) {
              return;
            }
            sys_cls = rs.get_bs_class('Ljava/lang/System;');
            props = sys_cls.static_get(rs, 'props');
            vm_cls = rs.get_bs_class('Lsun/misc/VM;');
            return vm_cls.static_put('savedProps', props);
          })
        ],
        Unsafe: [
          o('addressSize()I', function(rs, _this) {
            return 4;
          }), o('allocateInstance(Ljava/lang/Class;)Ljava/lang/Object;', function(rs, _this, cls) {
            cls = cls.$cls;
            if (cls.is_initialized(rs)) {
              return new JavaObject(rs, cls);
            } else {
              return rs.async_op(function(resume_cb, except_cb) {
                return cls.loader.initialize_class(rs, cls.get_type(), (function() {
                  return resume_cb(new JavaObject(rs, cls));
                }), except_cb);
              });
            }
          }), o('allocateMemory(J)J', function(rs, _this, size) {
            var i, next_addr, _i;

            next_addr = util.last(rs.mem_start_addrs);
            if (typeof DataView !== "undefined" && DataView !== null) {
              rs.mem_blocks[next_addr] = new DataView(new ArrayBuffer(size));
            } else {
              rs.mem_blocks[next_addr] = size;
              next_addr += 1;
              for (i = _i = 0; _i < size; i = _i += 1) {
                rs.mem_blocks[next_addr + i] = 0;
              }
            }
            rs.mem_start_addrs.push(next_addr + size);
            return gLong.fromNumber(next_addr);
          }), o('copyMemory(Ljava/lang/Object;JLjava/lang/Object;JJ)V', function(rs, _this, src_base, src_offset, dest_base, dest_offset, num_bytes) {
            return unsafe_memcpy(rs, src_base, src_offset, dest_base, dest_offset, num_bytes);
          }), o('setMemory(JJB)V', function(rs, _this, address, bytes, value) {
            var block_addr, i, _i;

            block_addr = rs.block_addr(address);
            for (i = _i = 0; _i < bytes; i = _i += 1) {
              if (typeof DataView !== "undefined" && DataView !== null) {
                rs.mem_blocks[block_addr].setInt8(i, value);
              } else {
                rs.mem_blocks[block_addr + i] = value;
              }
            }
          }), o('freeMemory(J)V', function(rs, _this, address) {
            var i, num_blocks, _i;

            if (typeof DataView !== "undefined" && DataView !== null) {
              delete rs.mem_blocks[address.toNumber()];
            } else {
              address = address.toNumber();
              num_blocks = rs.mem_blocks[address - 1];
              for (i = _i = 0; _i < num_blocks; i = _i += 1) {
                delete rs.mem_blocks[address + i];
              }
              delete rs.mem_blocks[address - 1];
              address = address - 1;
            }
            return rs.mem_start_addrs.splice(rs.mem_start_addrs.indexOf(address), 1);
          }), o('putLong(JJ)V', function(rs, _this, address, value) {
            var block_addr, offset, store_word;

            block_addr = rs.block_addr(address);
            offset = address - block_addr;
            if (typeof DataView !== "undefined" && DataView !== null) {
              rs.mem_blocks[block_addr].setInt32(offset, value.getLowBits(), true);
              rs.mem_blocks[block_addr].setInt32(offset + 4, value.getHighBits, true);
            } else {
              store_word = function(rs_, address, word) {
                rs_.mem_blocks[address] = word & 0xFF;
                rs_.mem_blocks[address + 1] = (word >>> 8) & 0xFF;
                rs_.mem_blocks[address + 2] = (word >>> 16) & 0xFF;
                return rs_.mem_blocks[address + 3] = (word >>> 24) & 0xFF;
              };
              store_word(rs, address, value.getLowBits());
              store_word(rs, address + 4, value.getHighBits());
            }
          }), o('getByte(J)B', function(rs, _this, address) {
            var block_addr;

            block_addr = rs.block_addr(address);
            if (typeof DataView !== "undefined" && DataView !== null) {
              return rs.mem_blocks[block_addr].getInt8(address - block_addr);
            } else {
              return rs.mem_blocks[block_addr];
            }
          }), o('arrayBaseOffset(Ljava/lang/Class;)I', function(rs, _this, cls) {
            return 0;
          }), o('arrayIndexScale(Ljava/lang/Class;)I', function(rs, _this, cls) {
            return 1;
          }), o('compareAndSwapObject(Ljava/lang/Object;JLjava/lang/Object;Ljava/lang/Object;)Z', unsafe_compare_and_swap), o('compareAndSwapInt(Ljava/lang/Object;JII)Z', unsafe_compare_and_swap), o('compareAndSwapLong(Ljava/lang/Object;JJJ)Z', unsafe_compare_and_swap), o('ensureClassInitialized(Ljava/lang/Class;)V', function(rs, _this, cls) {
            return rs.async_op(function(resume_cb, except_cb) {
              return cls.$cls.loader.initialize_class(rs, cls.$cls.get_type(), (function() {
                return resume_cb();
              }), except_cb);
            });
          }), o('staticFieldOffset(Ljava/lang/reflect/Field;)J', function(rs, _this, field) {
            var jco, slot;

            jco = field.get_field(rs, 'Ljava/lang/reflect/Field;clazz');
            slot = field.get_field(rs, 'Ljava/lang/reflect/Field;slot');
            return gLong.fromNumber(slot + jco.ref);
          }), o('objectFieldOffset(Ljava/lang/reflect/Field;)J', function(rs, _this, field) {
            var jco, slot;

            jco = field.get_field(rs, 'Ljava/lang/reflect/Field;clazz');
            slot = field.get_field(rs, 'Ljava/lang/reflect/Field;slot');
            return gLong.fromNumber(slot + jco.ref);
          }), o('staticFieldBase(Ljava/lang/reflect/Field;)Ljava/lang/Object;', function(rs, _this, field) {
            var cls;

            cls = field.get_field(rs, 'Ljava/lang/reflect/Field;clazz');
            return new JavaObject(rs, cls.$cls);
          }), o('getBoolean(Ljava/lang/Object;J)Z', function(rs, _this, obj, offset) {
            return obj.get_field_from_offset(rs, offset);
          }), o('getBooleanVolatile(Ljava/lang/Object;J)Z', function(rs, _this, obj, offset) {
            return obj.get_field_from_offset(rs, offset);
          }), o('getDouble(Ljava/lang/Object;J)D', function(rs, _this, obj, offset) {
            return obj.get_field_from_offset(rs, offset);
          }), o('getDoubleVolatile(Ljava/lang/Object;J)D', function(rs, _this, obj, offset) {
            return obj.get_field_from_offset(rs, offset);
          }), o('getFloat(Ljava/lang/Object;J)F', function(rs, _this, obj, offset) {
            return obj.get_field_from_offset(rs, offset);
          }), o('getFloatVolatile(Ljava/lang/Object;J)F', function(rs, _this, obj, offset) {
            return obj.get_field_from_offset(rs, offset);
          }), o('getInt(Ljava/lang/Object;J)I', function(rs, _this, obj, offset) {
            return obj.get_field_from_offset(rs, offset);
          }), o('getIntVolatile(Ljava/lang/Object;J)I', function(rs, _this, obj, offset) {
            return obj.get_field_from_offset(rs, offset);
          }), o('getLong(Ljava/lang/Object;J)J', function(rs, _this, obj, offset) {
            return obj.get_field_from_offset(rs, offset);
          }), o('getLongVolatile(Ljava/lang/Object;J)J', function(rs, _this, obj, offset) {
            return obj.get_field_from_offset(rs, offset);
          }), o('getShort(Ljava/lang/Object;J)S', function(rs, _this, obj, offset) {
            return obj.get_field_from_offset(rs, offset);
          }), o('getShortVolatile(Ljava/lang/Object;J)S', function(rs, _this, obj, offset) {
            return obj.get_field_from_offset(rs, offset);
          }), o('getObject(Ljava/lang/Object;J)Ljava/lang/Object;', function(rs, _this, obj, offset) {
            return obj.get_field_from_offset(rs, offset);
          }), o('getObjectVolatile(Ljava/lang/Object;J)Ljava/lang/Object;', function(rs, _this, obj, offset) {
            return obj.get_field_from_offset(rs, offset);
          }), o('putDouble(Ljava/lang/Object;JD)V', function(rs, _this, obj, offset, new_value) {
            return obj.set_field_from_offset(rs, offset, new_value);
          }), o('putInt(Ljava/lang/Object;JI)V', function(rs, _this, obj, offset, new_value) {
            return obj.set_field_from_offset(rs, offset, new_value);
          }), o('putObject(Ljava/lang/Object;JLjava/lang/Object;)V', function(rs, _this, obj, offset, new_obj) {
            return obj.set_field_from_offset(rs, offset, new_obj);
          }), o('putObjectVolatile(Ljava/lang/Object;JLjava/lang/Object;)V', function(rs, _this, obj, offset, new_obj) {
            return obj.set_field_from_offset(rs, offset, new_obj);
          }), o('putOrderedObject(Ljava/lang/Object;JLjava/lang/Object;)V', function(rs, _this, obj, offset, new_obj) {
            return obj.set_field_from_offset(rs, offset, new_obj);
          }), o('defineClass(Ljava/lang/String;[BIILjava/lang/ClassLoader;Ljava/security/ProtectionDomain;)Ljava/lang/Class;', function(rs, _this, name, bytes, offset, len, loader, pd) {
            return rs.async_op(function(success_cb, except_cb) {
              return native_define_class(rs, name, bytes, offset, len, get_cl_from_jclo(rs, loader), success_cb, except_cb);
            });
          }), o('pageSize()I', function(rs) {
            return 1024;
          }), o('throwException(Ljava/lang/Throwable;)V', function(rs, _this, exception) {
            var my_sf;

            my_sf = rs.curr_frame();
            my_sf.runner = function() {
              my_sf.runner = null;
              throw new exceptions.JavaException(exception);
            };
            throw exceptions.ReturnException;
          }), o('park(ZJ)V', function(rs, _this, absolute, time) {
            var timeout;

            timeout = Infinity;
            if (absolute) {
              timeout = time;
            } else {
              if (time > 0) {
                timeout = (new Date).getTime() + time / 1000000;
              }
            }
            return rs.park(rs.curr_thread, timeout);
          }), o('unpark(Ljava/lang/Object;)V', function(rs, _this, thread) {
            return rs.unpark(thread);
          })
        ]
      },
      nio: {
        ch: {
          FileChannelImpl: [
            o('initIDs()J', function(rs) {
              return gLong.fromNumber(1024);
            }), o('size0(Ljava/io/FileDescriptor;)J', function(rs, _this, fd_obj) {
              var e, fd;

              fd = fd_obj.get_field(rs, 'Ljava/io/FileDescriptor;fd');
              try {
                return gLong.fromNumber(fs.fstatSync(fd).size);
              } catch (_error) {
                e = _error;
                return rs.java_throw(rs.get_bs_class('Ljava/io/IOException;'), 'Bad file descriptor.');
              }
            }), o('position0(Ljava/io/FileDescriptor;J)J', function(rs, _this, fd, offset) {
              var parent;

              parent = _this.get_field(rs, 'Lsun/nio/ch/FileChannelImpl;parent');
              return gLong.fromNumber(offset.equals(gLong.NEG_ONE) ? parent.$pos : parent.$pos = offset.toNumber());
            })
          ],
          FileDispatcher: [
            o('init()V', function(rs) {}), o('read0(Ljava/io/FileDescriptor;JI)I', function(rs, fd_obj, address, len) {
              var block_addr, buf, bytes_read, fd, i, _i, _j;

              fd = fd_obj.get_field(rs, 'Ljava/io/FileDescriptor;fd');
              block_addr = rs.block_addr(address);
              buf = new Buffer(len);
              bytes_read = fs.readSync(fd, buf, 0, len);
              if (typeof DataView !== "undefined" && DataView !== null) {
                for (i = _i = 0; _i < bytes_read; i = _i += 1) {
                  rs.mem_blocks[block_addr].setInt8(i, buf.readInt8(i));
                }
              } else {
                for (i = _j = 0; _j < bytes_read; i = _j += 1) {
                  rs.mem_blocks[block_addr + i] = buf.readInt8(i);
                }
              }
              return bytes_read;
            }), o('preClose0(Ljava/io/FileDescriptor;)V', function(rs, fd_obj) {})
          ],
          NativeThread: [
            o("init()V", function(rs) {}), o("current()J", function(rs) {
              return gLong.fromNumber(-1);
            })
          ]
        }
      }
    }
  };

  native_methods.java.lang.Class = [
    o('getPrimitiveClass(L!/!/String;)L!/!/!;', function(rs, jvm_str) {
      var prim_cls, type_desc;

      type_desc = util.typestr2descriptor(jvm_str.jvm2js_str());
      prim_cls = rs.get_bs_class(type_desc);
      return prim_cls.get_class_object(rs);
    }), o('getClassLoader0()L!/!/ClassLoader;', function(rs, _this) {
      var loader;

      loader = _this.$cls.loader;
      if (loader.loader_obj != null) {
        return loader.loader_obj;
      }
      return null;
    }), o('desiredAssertionStatus0(L!/!/!;)Z', function(rs) {
      return false;
    }), o('getName0()L!/!/String;', function(rs, _this) {
      return rs.init_string(_this.$cls.toExternalString());
    }), o('forName0(L!/!/String;ZL!/!/ClassLoader;)L!/!/!;', function(rs, jvm_str, initialize, loader) {
      var classname;

      classname = util.int_classname(jvm_str.jvm2js_str());
      if (!util.verify_int_classname(classname)) {
        rs.java_throw(rs.get_bs_class('Ljava/lang/ClassNotFoundException;'), classname);
      }
      loader = get_cl_from_jclo(rs, loader);
      rs.async_op(function(resume_cb, except_cb) {
        if (initialize) {
          return loader.initialize_class(rs, classname, (function(cls) {
            return resume_cb(cls.get_class_object(rs));
          }), except_cb, true);
        } else {
          return loader.resolve_class(rs, classname, (function(cls) {
            return resume_cb(cls.get_class_object(rs));
          }), except_cb, true);
        }
      });
    }), o('getComponentType()L!/!/!;', function(rs, _this) {
      if (!(_this.$cls instanceof ArrayClassData)) {
        return null;
      }
      return _this.$cls.get_component_class().get_class_object(rs);
    }), o('getGenericSignature()Ljava/lang/String;', function(rs, _this) {
      var sig, _ref4;

      sig = (_ref4 = _this.$cls.get_attribute('Signature')) != null ? _ref4.sig : void 0;
      if (sig != null) {
        return rs.init_string(sig);
      } else {
        return null;
      }
    }), o('getProtectionDomain0()Ljava/security/ProtectionDomain;', function(rs, _this) {
      return null;
    }), o('isAssignableFrom(L!/!/!;)Z', function(rs, _this, cls) {
      return cls.$cls.is_castable(_this.$cls);
    }), o('isInterface()Z', function(rs, _this) {
      if (!(_this.$cls instanceof ReferenceClassData)) {
        return false;
      }
      return _this.$cls.access_flags["interface"];
    }), o('isInstance(L!/!/Object;)Z', function(rs, _this, obj) {
      return obj.cls.is_castable(_this.$cls);
    }), o('isPrimitive()Z', function(rs, _this) {
      return _this.$cls instanceof PrimitiveClassData;
    }), o('isArray()Z', function(rs, _this) {
      return _this.$cls instanceof ArrayClassData;
    }), o('getSuperclass()L!/!/!;', function(rs, _this) {
      var cls;

      if (_this.$cls instanceof PrimitiveClassData) {
        return null;
      }
      cls = _this.$cls;
      if (cls.access_flags["interface"] || (cls.get_super_class() == null)) {
        return null;
      }
      return cls.get_super_class().get_class_object(rs);
    }), o('getDeclaredFields0(Z)[Ljava/lang/reflect/Field;', function(rs, _this, public_only) {
      var base_array, f, fields;

      fields = _this.$cls.get_fields();
      if (public_only) {
        fields = (function() {
          var _i, _len, _results;

          _results = [];
          for (_i = 0, _len = fields.length; _i < _len; _i++) {
            f = fields[_i];
            if (f.access_flags["public"]) {
              _results.push(f);
            }
          }
          return _results;
        })();
      }
      base_array = [];
      rs.async_op(function(resume_cb, except_cb) {
        var fetch_next_field, i;

        i = -1;
        fetch_next_field = function() {
          i++;
          if (i < fields.length) {
            f = fields[i];
            return f.reflector(rs, (function(jco) {
              base_array.push(jco);
              return fetch_next_field();
            }), except_cb);
          } else {
            return resume_cb(new JavaArray(rs, rs.get_bs_class('[Ljava/lang/reflect/Field;'), base_array));
          }
        };
        return fetch_next_field();
      });
    }), o('getDeclaredMethods0(Z)[Ljava/lang/reflect/Method;', function(rs, _this, public_only) {
      var base_array, m, methods, sig;

      methods = _this.$cls.get_methods();
      methods = (function() {
        var _results;

        _results = [];
        for (sig in methods) {
          m = methods[sig];
          if (sig[0] !== '<' && (m.access_flags["public"] || !public_only)) {
            _results.push(m);
          }
        }
        return _results;
      })();
      base_array = [];
      rs.async_op(function(resume_cb, except_cb) {
        var fetch_next_method, i;

        i = -1;
        fetch_next_method = function() {
          i++;
          if (i < methods.length) {
            m = methods[i];
            return m.reflector(rs, false, (function(jco) {
              base_array.push(jco);
              return fetch_next_method();
            }), except_cb);
          } else {
            return resume_cb(new JavaArray(rs, rs.get_bs_class('[Ljava/lang/reflect/Method;'), base_array));
          }
        };
        return fetch_next_method();
      });
    }), o('getDeclaredConstructors0(Z)[Ljava/lang/reflect/Constructor;', function(rs, _this, public_only) {
      var base_array, ctor_array_cdata, m, methods, sig;

      methods = _this.$cls.get_methods();
      methods = (function() {
        var _results;

        _results = [];
        for (sig in methods) {
          m = methods[sig];
          if (m.name === '<init>') {
            _results.push(m);
          }
        }
        return _results;
      })();
      if (public_only) {
        methods = (function() {
          var _i, _len, _results;

          _results = [];
          for (_i = 0, _len = methods.length; _i < _len; _i++) {
            m = methods[_i];
            if (m.access_flags["public"]) {
              _results.push(m);
            }
          }
          return _results;
        })();
      }
      ctor_array_cdata = rs.get_bs_class('[Ljava/lang/reflect/Constructor;');
      base_array = [];
      rs.async_op(function(resume_cb, except_cb) {
        var fetch_next_method, i;

        i = -1;
        fetch_next_method = function() {
          i++;
          if (i < methods.length) {
            m = methods[i];
            return m.reflector(rs, true, (function(jco) {
              base_array.push(jco);
              return fetch_next_method();
            }), except_cb);
          } else {
            return resume_cb(new JavaArray(rs, ctor_array_cdata, base_array));
          }
        };
        return fetch_next_method();
      });
    }), o('getInterfaces()[L!/!/!;', function(rs, _this) {
      var cls, iface, iface_objs, ifaces;

      cls = _this.$cls;
      ifaces = cls.get_interfaces();
      iface_objs = (function() {
        var _i, _len, _results;

        _results = [];
        for (_i = 0, _len = ifaces.length; _i < _len; _i++) {
          iface = ifaces[_i];
          _results.push(iface.get_class_object(rs));
        }
        return _results;
      })();
      return new JavaArray(rs, rs.get_bs_class('[Ljava/lang/Class;'), iface_objs);
    }), o('getModifiers()I', function(rs, _this) {
      return _this.$cls.access_byte;
    }), o('getRawAnnotations()[B', function(rs, _this) {
      var annotations, cls, m, sig, _ref4;

      cls = _this.$cls;
      annotations = cls.get_attribute('RuntimeVisibleAnnotations');
      if (annotations != null) {
        return new JavaArray(rs, rs.get_bs_class('[B'), annotations.raw_bytes);
      }
      _ref4 = cls.get_methods();
      for (sig in _ref4) {
        m = _ref4[sig];
        annotations = m.get_attribute('RuntimeVisibleAnnotations');
        if (annotations != null) {
          return new JavaArray(rs, rs.get_bs_class('[B'), annotations.raw_bytes);
        }
      }
      return null;
    }), o('getConstantPool()Lsun/reflect/ConstantPool;', function(rs, _this) {
      var cls;

      cls = _this.$cls;
      return new JavaObject(rs, rs.get_bs_class('Lsun/reflect/ConstantPool;'), {
        'Lsun/reflect/ConstantPool;constantPoolOop': cls.constant_pool
      });
    }), o('getEnclosingMethod0()[L!/!/Object;', function(rs, _this) {
      var cls, em, enc_cls, enc_desc, enc_name;

      if (!(_this.$cls instanceof ReferenceClassData)) {
        return null;
      }
      cls = _this.$cls;
      em = cls.get_attribute('EnclosingMethod');
      if (em == null) {
        return null;
      }
      enc_cls = cls.loader.get_resolved_class(em.enc_class).get_class_object(rs);
      if (em.enc_method != null) {
        enc_name = rs.init_string(em.enc_method.name);
        enc_desc = rs.init_string(em.enc_method.type);
      } else {
        enc_name = null;
        enc_desc = null;
      }
      return new JavaArray(rs, rs.get_bs_class('[Ljava/lang/Object;'), [enc_cls, enc_name, enc_desc]);
    }), o('getDeclaringClass()L!/!/!;', function(rs, _this) {
      var cls, declaring_name, entry, icls, my_class, name, _i, _len, _ref4;

      if (!(_this.$cls instanceof ReferenceClassData)) {
        return null;
      }
      cls = _this.$cls;
      icls = cls.get_attribute('InnerClasses');
      if (icls == null) {
        return null;
      }
      my_class = _this.$cls.get_type();
      _ref4 = icls.classes;
      for (_i = 0, _len = _ref4.length; _i < _len; _i++) {
        entry = _ref4[_i];
        if (!(entry.outer_info_index > 0)) {
          continue;
        }
        name = cls.constant_pool.get(entry.inner_info_index).deref();
        if (name !== my_class) {
          continue;
        }
        declaring_name = cls.constant_pool.get(entry.outer_info_index).deref();
        return cls.loader.get_resolved_class(declaring_name).get_class_object(rs);
      }
      return null;
    }), o('getDeclaredClasses0()[L!/!/!;', function(rs, _this) {
      var c, cls, enclosing_name, flat_names, icls, iclses, my_class, ret, _i, _j, _len, _len1, _ref4;

      ret = new JavaArray(rs, rs.get_bs_class('[Ljava/lang/Class;'), []);
      if (!(_this.$cls instanceof ReferenceClassData)) {
        return ret;
      }
      cls = _this.$cls;
      my_class = _this.$cls.get_type();
      iclses = cls.get_attributes('InnerClasses');
      if (iclses.length === 0) {
        return ret;
      }
      flat_names = [];
      for (_i = 0, _len = iclses.length; _i < _len; _i++) {
        icls = iclses[_i];
        _ref4 = icls.classes;
        for (_j = 0, _len1 = _ref4.length; _j < _len1; _j++) {
          c = _ref4[_j];
          if (!(c.outer_info_index > 0)) {
            continue;
          }
          enclosing_name = cls.constant_pool.get(c.outer_info_index).deref();
          if (enclosing_name !== my_class) {
            continue;
          }
          flat_names.push(cls.constant_pool.get(c.inner_info_index).deref());
        }
      }
      rs.async_op(function(resume_cb, except_cb) {
        var fetch_next_jco, i;

        i = -1;
        fetch_next_jco = function() {
          var name;

          i++;
          if (i < flat_names.length) {
            name = flat_names[i];
            return cls.loader.resolve_class(rs, name, (function(cls) {
              ret.array.push(cls.get_class_object(rs));
              return fetch_next_jco();
            }), except_cb);
          } else {
            return resume_cb(ret);
          }
        };
        return fetch_next_jco();
      });
    })
  ];

  native_methods.java.lang.Runtime = [
    o('availableProcessors()I', function() {
      return 1;
    }), o('gc()V', function(rs) {
      return rs.async_op(function(cb) {
        return cb();
      });
    }), o('maxMemory()J', function(rs) {
      ;      return gLong.MAX_VALUE;
    })
  ];

  setup_caller_stack = function(rs, method, obj, params) {
    var i, p, p_type, primitive_value, _i, _len, _ref4;

    if (!method.access_flags["static"]) {
      rs.push(obj);
    }
    i = 0;
    _ref4 = method.param_types;
    for (_i = 0, _len = _ref4.length; _i < _len; _i++) {
      p_type = _ref4[_i];
      p = params.array[i++];
      if (p_type === 'J' || p_type === 'D') {
        if ((p != null ? p.ref : void 0) != null) {
          primitive_value = p.get_field(rs, p.cls.get_type() + 'value');
          rs.push2(primitive_value, null);
        } else {
          rs.push2(p, null);
          i++;
        }
      } else if (util.is_primitive_type(p_type)) {
        if ((p != null ? p.ref : void 0) != null) {
          primitive_value = p.get_field(rs, p.cls.get_type() + 'value');
          rs.push(primitive_value);
        } else {
          rs.push(p);
        }
      } else {
        rs.push(p);
      }
    }
    return rs.curr_frame();
  };

  native_methods.sun.reflect = {
    ConstantPool: [
      o('getLongAt0(Ljava/lang/Object;I)J', function(rs, _this, cp, idx) {
        return cp.get(idx).value;
      }), o('getUTF8At0(Ljava/lang/Object;I)Ljava/lang/String;', function(rs, _this, cp, idx) {
        return rs.init_string(cp.get(idx).value);
      })
    ],
    NativeMethodAccessorImpl: [
      o('invoke0(Ljava/lang/reflect/Method;Ljava/lang/Object;[Ljava/lang/Object;)Ljava/lang/Object;', function(rs, m, obj, params) {
        var caller_sf, cleanup_runner, cls, cls_obj, m_sig, method, name, p_desc, p_types, pt, ret_descriptor, ret_type, slot;

        cls = m.get_field(rs, 'Ljava/lang/reflect/Method;clazz');
        ret_type = m.get_field(rs, 'Ljava/lang/reflect/Method;returnType');
        ret_descriptor = ret_type.$cls.get_type();
        if (util.is_primitive_type(ret_descriptor) && ret_descriptor !== 'V') {
          cleanup_runner = function() {
            var rv;

            rv = ret_descriptor === 'J' || ret_descriptor === 'D' ? rs.pop2() : rs.pop();
            rs.meta_stack().pop();
            return rs.push(ret_type.$cls.create_wrapper_object(rs, rv));
          };
        } else {
          cleanup_runner = function() {
            var rv;

            rv = rs.pop();
            rs.meta_stack().pop();
            return rs.push(rv);
          };
        }
        if (cls.$cls.access_byte & 0x200) {
          cls_obj = rs.check_null(obj).cls;
          name = m.get_field(rs, 'Ljava/lang/reflect/Method;name').jvm2js_str(rs);
          p_types = m.get_field(rs, 'Ljava/lang/reflect/Method;parameterTypes');
          p_desc = ((function() {
            var _i, _len, _ref4, _results;

            _ref4 = p_types.array;
            _results = [];
            for (_i = 0, _len = _ref4.length; _i < _len; _i++) {
              pt = _ref4[_i];
              _results.push(pt.$cls.get_type());
            }
            return _results;
          })()).join('');
          m_sig = "" + name + "(" + p_desc + ")" + ret_descriptor;
          method = cls_obj.method_lookup(rs, m_sig);
          caller_sf = setup_caller_stack(rs, method, obj, params);
          method.setup_stack(rs);
          caller_sf.runner = cleanup_runner;
          throw exceptions.ReturnException;
        } else {
          slot = m.get_field(rs, 'Ljava/lang/reflect/Method;slot');
          return rs.async_op(function(resume_cb, except_cb) {
            return cls.$cls.loader.initialize_class(rs, cls.$cls.get_type(), (function(cls_obj) {
              var sig;

              method = ((function() {
                var _ref4, _results;

                _ref4 = cls_obj.get_methods();
                _results = [];
                for (sig in _ref4) {
                  method = _ref4[sig];
                  if (method.idx === slot) {
                    _results.push(method);
                  }
                }
                return _results;
              })())[0];
              caller_sf = setup_caller_stack(rs, method, obj, params);
              return except_cb(function() {
                method.setup_stack(rs);
                return caller_sf.runner = cleanup_runner;
              });
            }), except_cb);
          });
        }
      })
    ],
    NativeConstructorAccessorImpl: [
      o('newInstance0(Ljava/lang/reflect/Constructor;[Ljava/lang/Object;)Ljava/lang/Object;', function(rs, m, params) {
        var cls, slot;

        cls = m.get_field(rs, 'Ljava/lang/reflect/Constructor;clazz');
        slot = m.get_field(rs, 'Ljava/lang/reflect/Constructor;slot');
        return rs.async_op(function(resume_cb, except_cb) {
          return cls.$cls.loader.initialize_class(rs, cls.$cls.get_type(), (function(cls_obj) {
            var method, my_sf, obj, sig;

            method = ((function() {
              var _ref4, _results;

              _ref4 = cls_obj.get_methods();
              _results = [];
              for (sig in _ref4) {
                method = _ref4[sig];
                if (method.idx === slot) {
                  _results.push(method);
                }
              }
              return _results;
            })())[0];
            my_sf = rs.curr_frame();
            obj = new JavaObject(rs, cls_obj);
            rs.push(obj);
            if (params != null) {
              rs.push_array(params.array);
            }
            return except_cb(function() {
              method.setup_stack(rs);
              return my_sf.runner = function() {
                rs.meta_stack().pop();
                return rs.push(obj);
              };
            });
          }), except_cb);
        });
      })
    ],
    Reflection: [
      o('getCallerClass(I)Ljava/lang/Class;', function(rs, frames_to_skip) {
        var caller, cls;

        caller = rs.meta_stack().get_caller(frames_to_skip);
        if (caller.name.indexOf('Ljava/lang/reflect/Method;::invoke') === 0) {
          caller = rs.meta_stack().get_caller(frames_to_skip + 1);
        }
        cls = caller.method.cls;
        return cls.get_class_object(rs);
      }), o('getClassAccessFlags(Ljava/lang/Class;)I', function(rs, class_obj) {
        return class_obj.$cls.access_byte;
      })
    ]
  };

  flatten_pkg = function(pkg) {
    var pkg_name_arr, rec_flatten, result;

    result = {};
    pkg_name_arr = [];
    rec_flatten = function(pkg) {
      var flattened_inner, fn, fn_name, full_name, full_pkg_name, inner_pkg, method, pkg_name, _i, _len;

      for (pkg_name in pkg) {
        inner_pkg = pkg[pkg_name];
        pkg_name_arr.push(pkg_name);
        if (inner_pkg instanceof Array) {
          full_pkg_name = pkg_name_arr.join('/');
          for (_i = 0, _len = inner_pkg.length; _i < _len; _i++) {
            method = inner_pkg[_i];
            fn_name = method.fn_name, fn = method.fn;
            fn_name = fn_name.replace(/!|;/g, (function() {
              var depth;

              depth = 0;
              return function(c) {
                if (c === '!') {
                  return pkg_name_arr[depth++];
                } else if (c === ';') {
                  depth = 0;
                  return c;
                } else {
                  return c;
                }
              };
            })());
            full_name = "L" + full_pkg_name + ";::" + fn_name;
            result[full_name] = fn;
          }
        } else {
          flattened_inner = rec_flatten(inner_pkg);
        }
        pkg_name_arr.pop(pkg_name);
      }
    };
    rec_flatten(pkg);
    return result;
  };

  root.trapped_methods = flatten_pkg(trapped_methods);

  root.native_methods = flatten_pkg(native_methods);

}).call(this);
;
// Generated by CoffeeScript 1.6.2
(function() {
  "use strict";
  var AbstractMethodField, JavaArray, JavaObject, ReturnException, attributes, debug_vars, jvm, logging, native_methods, natives, opcodes, root, runtime, thread_name, trace, trapped_methods, util, vtrace, _ref, _ref1, _ref2,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  util = require('./util');

  opcodes = require('./opcodes');

  attributes = require('./attributes');

  natives = require('./natives');

  runtime = require('./runtime');

  logging = require('./logging');

  jvm = require('./jvm');

  vtrace = logging.vtrace, trace = logging.trace, debug_vars = logging.debug_vars;

  ReturnException = require('./exceptions').ReturnException;

  native_methods = natives.native_methods, trapped_methods = natives.trapped_methods;

  _ref = require('./java_object'), JavaArray = _ref.JavaArray, JavaObject = _ref.JavaObject, thread_name = _ref.thread_name;

  root = typeof exports !== "undefined" && exports !== null ? exports : this.methods = {};

  AbstractMethodField = (function() {
    function AbstractMethodField(cls) {
      this.cls = cls;
    }

    AbstractMethodField.prototype.parse = function(bytes_array, constant_pool, idx) {
      this.idx = idx;
      this.access_byte = bytes_array.get_uint(2);
      this.access_flags = util.parse_flags(this.access_byte);
      this.name = constant_pool.get(bytes_array.get_uint(2)).value;
      this.raw_descriptor = constant_pool.get(bytes_array.get_uint(2)).value;
      this.parse_descriptor(this.raw_descriptor);
      return this.attrs = attributes.make_attributes(bytes_array, constant_pool);
    };

    AbstractMethodField.prototype.get_attribute = function(name) {
      var attr, _i, _len, _ref1;

      _ref1 = this.attrs;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        attr = _ref1[_i];
        if (attr.name === name) {
          return attr;
        }
      }
      return null;
    };

    AbstractMethodField.prototype.get_attributes = function(name) {
      var attr, _i, _len, _ref1, _results;

      _ref1 = this.attrs;
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        attr = _ref1[_i];
        if (attr.name === name) {
          _results.push(attr);
        }
      }
      return _results;
    };

    return AbstractMethodField;

  })();

  root.Field = (function(_super) {
    __extends(Field, _super);

    function Field() {
      _ref1 = Field.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    Field.prototype.parse_descriptor = function(raw_descriptor) {
      return this.type = raw_descriptor;
    };

    Field.prototype.reflector = function(rs, success_fn, failure_fn) {
      var clazz_obj, create_obj, sig, _ref2,
        _this = this;

      sig = (_ref2 = this.get_attribute("Signature")) != null ? _ref2.sig : void 0;
      create_obj = function(clazz_obj, type_obj) {
        return new JavaObject(rs, rs.get_bs_class('Ljava/lang/reflect/Field;'), {
          'Ljava/lang/reflect/Field;clazz': clazz_obj,
          'Ljava/lang/reflect/Field;name': rs.init_string(_this.name, true),
          'Ljava/lang/reflect/Field;type': type_obj,
          'Ljava/lang/reflect/Field;modifiers': _this.access_byte,
          'Ljava/lang/reflect/Field;slot': _this.idx,
          'Ljava/lang/reflect/Field;signature': sig != null ? rs.init_string(sig) : null
        });
      };
      clazz_obj = this.cls.get_class_object(rs);
      this.cls.loader.resolve_class(rs, this.type, (function(type_cls) {
        var rv, type_obj;

        type_obj = type_cls.get_class_object(rs);
        rv = create_obj(clazz_obj, type_obj);
        return success_fn(rv);
      }), failure_fn);
    };

    return Field;

  })(AbstractMethodField);

  root.Method = (function(_super) {
    __extends(Method, _super);

    function Method() {
      _ref2 = Method.__super__.constructor.apply(this, arguments);
      return _ref2;
    }

    Method.prototype.parse_descriptor = function(raw_descriptor) {
      var field, p, param_carr, param_str, return_str, __, _i, _len, _ref3, _ref4;

      this.reset_caches = false;
      _ref3 = /\(([^)]*)\)(.*)/.exec(raw_descriptor), __ = _ref3[0], param_str = _ref3[1], return_str = _ref3[2];
      param_carr = param_str.split('');
      this.param_types = ((function() {
        var _results;

        _results = [];
        while ((field = util.carr2descriptor(param_carr))) {
          _results.push(field);
        }
        return _results;
      })());
      this.param_bytes = 0;
      _ref4 = this.param_types;
      for (_i = 0, _len = _ref4.length; _i < _len; _i++) {
        p = _ref4[_i];
        this.param_bytes += p === 'D' || p === 'J' ? 2 : 1;
      }
      if (!this.access_flags["static"]) {
        this.param_bytes++;
      }
      this.num_args = this.param_types.length;
      if (!this.access_flags["static"]) {
        this.num_args++;
      }
      return this.return_type = return_str;
    };

    Method.prototype.full_signature = function() {
      return "" + (this.cls.get_type()) + "::" + this.name + this.raw_descriptor;
    };

    Method.prototype.parse = function(bytes_array, constant_pool, idx) {
      var c, sig;

      Method.__super__.parse.call(this, bytes_array, constant_pool, idx);
      sig = this.full_signature();
      if ((c = trapped_methods[sig]) != null) {
        this.code = c;
        return this.access_flags["native"] = true;
      } else if (this.access_flags["native"]) {
        if ((c = native_methods[sig]) != null) {
          return this.code = c;
        } else if (sig.indexOf('::registerNatives()V', 1) < 0 && sig.indexOf('::initIDs()V', 1) < 0) {
          if (jvm.show_NYI_natives) {
            console.log(sig);
          }
          return this.code = function(rs) {
            return rs.java_throw(rs.get_bs_class('Ljava/lang/UnsatisfiedLinkError;'), "Native method '" + sig + "' not implemented.\nPlease fix or file a bug at https://github.com/int3/doppio/issues");
          };
        } else {
          return this.code = null;
        }
      } else if (!this.access_flags.abstract) {
        this.has_bytecode = true;
        return this.code = this.get_attribute('Code');
      }
    };

    Method.prototype.reflector = function(rs, is_constructor, success_fn, failure_fn) {
      var adefs, anns, clazz_obj, exceptions, obj, sig, typestr, _ref3, _ref4, _ref5, _ref6, _ref7,
        _this = this;

      if (is_constructor == null) {
        is_constructor = false;
      }
      typestr = is_constructor ? 'Ljava/lang/reflect/Constructor;' : 'Ljava/lang/reflect/Method;';
      exceptions = (_ref3 = (_ref4 = this.get_attribute('Exceptions')) != null ? _ref4.exceptions : void 0) != null ? _ref3 : [];
      anns = (_ref5 = this.get_attribute('RuntimeVisibleAnnotations')) != null ? _ref5.raw_bytes : void 0;
      adefs = (_ref6 = this.get_attribute('AnnotationDefault')) != null ? _ref6.raw_bytes : void 0;
      sig = (_ref7 = this.get_attribute('Signature')) != null ? _ref7.sig : void 0;
      obj = {};
      clazz_obj = this.cls.get_class_object(rs);
      return this.cls.loader.resolve_class(rs, this.return_type, (function(rt_cls) {
        var etype_objs, fetch_catch_type, fetch_etype, fetch_ptype, handlers, i, j, k, param_type_objs, rt_obj, _ref8;

        rt_obj = rt_cls.get_class_object(rs);
        j = -1;
        etype_objs = [];
        i = -1;
        param_type_objs = [];
        k = 0;
        if ((((_ref8 = _this.code) != null ? _ref8.exception_handlers : void 0) != null) && _this.code.exception_handlers.length > 0) {
          handlers = [
            {
              catch_type: 'Ljava/lang/Throwable;'
            }
          ];
          Array.prototype.push.apply(handlers, _this.code.exception_handlers);
        } else {
          handlers = [];
        }
        fetch_catch_type = function() {
          var eh;

          if (k < handlers.length) {
            eh = handlers[k++];
            if (eh.catch_type === '<any>') {
              return fetch_catch_type();
            }
            return _this.cls.loader.resolve_class(rs, eh.catch_type, fetch_catch_type, failure_fn);
          } else {
            return fetch_ptype();
          }
        };
        fetch_etype = function() {
          var e_desc;

          j++;
          if (j < exceptions.length) {
            e_desc = exceptions[j];
            return _this.cls.loader.resolve_class(rs, e_desc, (function(cls) {
              etype_objs[j] = cls.get_class_object(rs);
              return fetch_etype();
            }), failure_fn);
          } else {
            obj[typestr + 'clazz'] = clazz_obj;
            obj[typestr + 'name'] = rs.init_string(_this.name, true);
            obj[typestr + 'parameterTypes'] = new JavaArray(rs, rs.get_bs_class('[Ljava/lang/Class;'), param_type_objs);
            obj[typestr + 'returnType'] = rt_obj;
            obj[typestr + 'exceptionTypes'] = new JavaArray(rs, rs.get_bs_class('[Ljava/lang/Class;'), etype_objs);
            obj[typestr + 'modifiers'] = _this.access_byte;
            obj[typestr + 'slot'] = _this.idx;
            obj[typestr + 'signature'] = sig != null ? rs.init_string(sig) : null;
            obj[typestr + 'annotations'] = anns != null ? new JavaArray(rs, rs.get_bs_class('[B'), anns) : null;
            obj[typestr + 'annotationDefault'] = adefs != null ? new JavaArray(rs, rs.get_bs_class('[B'), adefs) : null;
            return success_fn(new JavaObject(rs, rs.get_bs_class(typestr), obj));
          }
        };
        fetch_ptype = function() {
          i++;
          if (i < _this.param_types.length) {
            return _this.cls.loader.resolve_class(rs, _this.param_types[i], (function(cls) {
              param_type_objs[i] = cls.get_class_object(rs);
              return fetch_ptype();
            }), failure_fn);
          } else {
            return fetch_etype();
          }
        };
        return fetch_catch_type();
      }), failure_fn);
    };

    Method.prototype.take_params = function(caller_stack) {
      var params, start;

      start = caller_stack.length - this.param_bytes;
      params = caller_stack.slice(start);
      caller_stack.length -= this.param_bytes;
      return params;
    };

    Method.prototype.convert_params = function(rs, params) {
      var converted_params, p, param_idx, _i, _len, _ref3;

      converted_params = [rs];
      param_idx = 0;
      if (!this.access_flags["static"]) {
        converted_params.push(params[0]);
        param_idx = 1;
      }
      _ref3 = this.param_types;
      for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
        p = _ref3[_i];
        converted_params.push(params[param_idx]);
        param_idx += (p === 'J' || p === 'D') ? 2 : 1;
      }
      return converted_params;
    };

    Method.prototype.run_manually = function(func, rs, converted_params) {
      ;
      var e, ret_type, rv;

      try {
        rv = func.apply(null, converted_params);
      } catch (_error) {
        e = _error;
        if (e === ReturnException) {
          return;
        }
        throw e;
      }
      rs.meta_stack().pop();
      ret_type = this.return_type;
      if (ret_type !== 'V') {
        if (ret_type === 'Z') {
          rs.push(rv + 0);
        } else {
          rs.push(rv);
        }
        if (ret_type === 'J' || ret_type === 'D') {
          return rs.push(null);
        }
      }
    };

    Method.prototype.initialize = function() {
      return this.reset_caches = true;
    };

    Method.prototype.method_lock = function(rs) {
      if (this.access_flags["static"]) {
        return this.cls.get_class_object(rs);
      } else {
        return rs.cl(0);
      }
    };

    Method.prototype.run_bytecode = function(rs) {
      ;
      var annotation, cf, code, depth, instr, op, pc, _i, _len, _ref3, _ref4;

      if (this.reset_caches && (((_ref3 = this.code) != null ? _ref3.opcodes : void 0) != null)) {
        _ref4 = this.code.opcodes;
        for (_i = 0, _len = _ref4.length; _i < _len; _i++) {
          instr = _ref4[_i];
          if (instr != null) {
            instr.reset_cache();
          }
        }
      }
      code = this.code.opcodes;
      cf = rs.curr_frame();
      if (this.access_flags.synchronized && cf.pc === 0) {
        if (!opcodes.monitorenter(rs, this.method_lock(rs))) {
          cf.pc = 0;
          return;
        }
      }
      op = code[cf.pc];
      while (true) {
        if (!((typeof RELEASE !== "undefined" && RELEASE !== null) || logging.log_level < logging.VTRACE)) {
          pc = cf.pc;
          if (!op) {
            throw "" + this.name + ":" + pc + " => (null)";
          }
          annotation = op.annotate(pc, this.cls.constant_pool);
        }
        if (op.execute(rs) === false) {
          break;
        }
        if (!((typeof RELEASE !== "undefined" && RELEASE !== null) || logging.log_level < logging.VTRACE)) {
          ;
          depth = rs.meta_stack().length();
          ;
        }
        cf.pc += 1 + op.byte_count;
        op = code[cf.pc];
      }
    };

    Method.prototype.setup_stack = function(runtime_state) {
      var c, c_params, caller_stack, i, ms, params, sf, _ref3,
        _this = this;

      ms = runtime_state.meta_stack();
      caller_stack = runtime_state.curr_frame().stack;
      params = this.take_params(caller_stack);
      if (this.access_flags["native"]) {
        if (this.code != null) {
          ms.push(sf = new runtime.StackFrame(this, [], []));
          c_params = this.convert_params(runtime_state, params);
          sf.runner = function() {
            return _this.run_manually(_this.code, runtime_state, c_params);
          };
          return sf;
        }
        return;
      }
      if (this.access_flags.abstract) {
        runtime_state.java_throw(runtime_state.get_bs_class('Ljava/lang/Error;'), "called abstract method: " + (this.full_signature()));
      }
      ms.push(sf = new runtime.StackFrame(this, params, []));
      if (this.code.run_stamp < runtime_state.run_stamp) {
        this.code.run_stamp = runtime_state.run_stamp;
        this.code.parse_code();
        if (this.access_flags.synchronized) {
          _ref3 = this.code.opcodes;
          for (i in _ref3) {
            c = _ref3[i];
            if (c.name.match(/^[ildfa]?return$/)) {
              (function(c) {
                return c.execute = function(rs) {
                  opcodes.monitorexit(rs, _this.method_lock(rs));
                  return c.orig_execute(rs);
                };
              })(c);
            }
          }
        }
      }
      sf.runner = function() {
        return _this.run_bytecode(runtime_state);
      };
      return sf;
    };

    return Method;

  })(AbstractMethodField);

}).call(this);
;
// Generated by CoffeeScript 1.6.2
(function() {
  "use strict";
  var JavaArray, JavaException, JavaObject, ReturnException, YieldIOException, debug, error, gLong, jvm, log, process, root, thread_name, trace, util, vtrace, _, _ref, _ref1, _ref2, _ref3, _ref4, _ref5,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  root = typeof exports !== "undefined" && exports !== null ? exports : (_ref = window.runtime) != null ? _ref : window.runtime = {};

  _ = require('../vendor/_.js');

  gLong = require('../vendor/gLong.js');

  util = require('./util');

  _ref1 = require('./logging'), log = _ref1.log, vtrace = _ref1.vtrace, trace = _ref1.trace, debug = _ref1.debug, error = _ref1.error;

  _ref2 = require('./exceptions'), YieldIOException = _ref2.YieldIOException, ReturnException = _ref2.ReturnException, JavaException = _ref2.JavaException;

  _ref3 = require('./java_object'), JavaObject = _ref3.JavaObject, JavaArray = _ref3.JavaArray, thread_name = _ref3.thread_name;

  jvm = null;

  process = (_ref4 = typeof node !== "undefined" && node !== null ? node.process : void 0) != null ? _ref4 : global.process;

  if ((_ref5 = Date.now) == null) {
    Date.now = function() {
      return +(new Date);
    };
  }

  root.CallStack = (function() {
    function CallStack(initial_stack) {
      this._cs = [root.StackFrame.native_frame('$bootstrap')];
      if (initial_stack != null) {
        this._cs[0].stack = initial_stack;
      }
    }

    CallStack.prototype.snap = function() {
      var frame, snapshots, visited;

      visited = {};
      snapshots = (function() {
        var _i, _len, _ref6, _results;

        _ref6 = this._cs;
        _results = [];
        for (_i = 0, _len = _ref6.length; _i < _len; _i++) {
          frame = _ref6[_i];
          _results.push(frame.snap(visited));
        }
        return _results;
      }).call(this);
      return {
        serialize: function() {
          var ss, _i, _len, _results;

          _results = [];
          for (_i = 0, _len = snapshots.length; _i < _len; _i++) {
            ss = snapshots[_i];
            _results.push(ss.serialize());
          }
          return _results;
        }
      };
    };

    CallStack.prototype.length = function() {
      return this._cs.length;
    };

    CallStack.prototype.push = function(sf) {
      return this._cs.push(sf);
    };

    CallStack.prototype.pop = function() {
      return this._cs.pop();
    };

    CallStack.prototype.pop_n = function(n) {
      return this._cs.length -= n;
    };

    CallStack.prototype.curr_frame = function() {
      return util.last(this._cs);
    };

    CallStack.prototype.get_caller = function(frames_to_skip) {
      return this._cs[this._cs.length - 1 - frames_to_skip];
    };

    return CallStack;

  })();

  root.StackFrame = (function() {
    function StackFrame(method, locals, stack) {
      this.method = method;
      this.locals = locals;
      this.stack = stack;
      this.pc = 0;
      this.runner = null;
      this["native"] = false;
      this.name = this.method.full_signature();
    }

    StackFrame.prototype.snap = function(visited) {
      var rv,
        _this = this;

      rv = {
        name: this.name,
        pc: this.pc,
        "native": this["native"]
      };
      return {
        serialize: function() {
          var obj, _ref6;

          rv.loader = (_ref6 = _this.method.cls) != null ? _ref6.loader.serialize(visited) : void 0;
          rv.stack = (function() {
            var _i, _len, _ref7, _ref8, _results;

            _ref7 = this.stack;
            _results = [];
            for (_i = 0, _len = _ref7.length; _i < _len; _i++) {
              obj = _ref7[_i];
              _results.push((_ref8 = obj != null ? typeof obj.serialize === "function" ? obj.serialize(visited) : void 0 : void 0) != null ? _ref8 : obj);
            }
            return _results;
          }).call(_this);
          rv.locals = (function() {
            var _i, _len, _ref7, _ref8, _results;

            _ref7 = this.locals;
            _results = [];
            for (_i = 0, _len = _ref7.length; _i < _len; _i++) {
              obj = _ref7[_i];
              _results.push((_ref8 = obj != null ? typeof obj.serialize === "function" ? obj.serialize(visited) : void 0 : void 0) != null ? _ref8 : obj);
            }
            return _results;
          }).call(_this);
          return rv;
        }
      };
    };

    StackFrame.native_frame = function(name, handler, error_handler) {
      var sf;

      sf = new root.StackFrame({
        full_signature: function() {
          return name;
        }
      }, [], []);
      sf.runner = handler;
      sf.name = name;
      if (error_handler != null) {
        sf.error = error_handler;
      }
      sf["native"] = true;
      return sf;
    };

    return StackFrame;

  })();

  root.RuntimeState = (function() {
    var run_count;

    run_count = 0;

    function RuntimeState(print, _async_input, bcl) {
      this.print = print;
      this._async_input = _async_input;
      this.bcl = bcl;
      jvm = require('./jvm');
      this.input_buffer = [];
      this.bcl.reset();
      this.startup_time = gLong.fromNumber((new Date).getTime());
      this.run_stamp = ++run_count;
      this.mem_start_addrs = [1];
      this.mem_blocks = {};
      this.high_oref = 1;
      this.string_pool = new util.SafeMap;
      this.lock_refs = {};
      this.lock_counts = {};
      this.waiting_threads = {};
      this.thread_pool = [];
      this.curr_thread = {
        $meta_stack: new root.CallStack()
      };
      this.max_m_count = 10000;
    }

    RuntimeState.prototype.get_bs_cl = function() {
      return this.bcl;
    };

    RuntimeState.prototype.get_bs_class = function(type, handle_null) {
      if (handle_null == null) {
        handle_null = false;
      }
      return this.bcl.get_initialized_class(type, handle_null);
    };

    RuntimeState.prototype.get_class = function(type, handle_null) {
      if (handle_null == null) {
        handle_null = false;
      }
      return this.curr_frame().method.cls.loader.get_initialized_class(type, handle_null);
    };

    RuntimeState.prototype.get_cl = function() {
      return this.curr_frame().method.cls.loader;
    };

    RuntimeState.prototype.preinitialize_core_classes = function(resume_cb, except_cb) {
      var core_classes, i, init_next_core_class,
        _this = this;

      core_classes = ['Ljava/lang/Class;', 'Ljava/lang/ClassLoader;', 'Ljava/lang/String;', 'Ljava/lang/Error;', 'Ljava/lang/StackTraceElement;', 'Ljava/io/ExpiringCache;', 'Ljava/io/FileDescriptor;', 'Ljava/io/FileNotFoundException;', 'Ljava/io/IOException;', 'Ljava/io/Serializable;', 'Ljava/io/UnixFileSystem;', 'Ljava/lang/ArithmeticException;', 'Ljava/lang/ArrayIndexOutOfBoundsException;', 'Ljava/lang/ArrayStoreException;', 'Ljava/lang/ClassCastException;', 'Ljava/lang/ClassNotFoundException;', 'Ljava/lang/NoClassDefFoundError;', 'Ljava/lang/Cloneable;', 'Ljava/lang/ExceptionInInitializerError;', 'Ljava/lang/IllegalMonitorStateException;', 'Ljava/lang/InterruptedException;', 'Ljava/lang/NegativeArraySizeException;', 'Ljava/lang/NoSuchFieldError;', 'Ljava/lang/NoSuchMethodError;', 'Ljava/lang/NullPointerException;', 'Ljava/lang/reflect/Constructor;', 'Ljava/lang/reflect/Field;', 'Ljava/lang/reflect/Method;', 'Ljava/lang/System;', 'Ljava/lang/Thread;', 'Ljava/lang/ThreadGroup;', 'Ljava/lang/Throwable;', 'Ljava/lang/UnsatisfiedLinkError;', 'Ljava/nio/ByteOrder;', 'Lsun/misc/VM;', 'Lsun/reflect/ConstantPool;', 'Ljava/lang/Byte;', 'Ljava/lang/Character;', 'Ljava/lang/Double;', 'Ljava/lang/Float;', 'Ljava/lang/Integer;', 'Ljava/lang/Long;', 'Ljava/lang/Short;', 'Ljava/lang/Boolean;', '[Lsun/management/MemoryManagerImpl;', '[Lsun/management/MemoryPoolImpl;'];
      i = -1;
      init_next_core_class = function() {
        ;        i++;
        if (i < core_classes.length) {
          ;
          return _this.bcl.initialize_class(_this, core_classes[i], init_next_core_class, except_cb);
        } else {
          ;
          return resume_cb();
        }
      };
      return init_next_core_class();
    };

    RuntimeState.prototype.init_threads = function() {
      var group, my_sf,
        _this = this;

      my_sf = this.curr_frame();
      this.push((group = new JavaObject(this, this.get_bs_class('Ljava/lang/ThreadGroup;'))));
      this.get_bs_class('Ljava/lang/ThreadGroup;').method_lookup(this, '<init>()V').setup_stack(this);
      return my_sf.runner = function() {
        var ct;

        ct = null;
        my_sf.runner = function() {
          my_sf.runner = null;
          ct.$meta_stack = _this.meta_stack();
          _this.curr_thread = ct;
          _this.curr_thread.$isAlive = true;
          _this.thread_pool.push(_this.curr_thread);
          _this.get_bs_class('Ljava/lang/Thread;').static_fields.threadInitNumber = 1;
          return ;
        };
        return ct = new JavaObject(_this, _this.get_bs_class('Ljava/lang/Thread;'), {
          'Ljava/lang/Thread;name': _this.init_carr('main'),
          'Ljava/lang/Thread;priority': 1,
          'Ljava/lang/Thread;group': group,
          'Ljava/lang/Thread;threadLocals': null
        });
      };
    };

    RuntimeState.prototype.meta_stack = function() {
      return this.curr_thread.$meta_stack;
    };

    RuntimeState.prototype.java_throw = function(cls, msg) {
      var my_sf, v,
        _this = this;

      v = new JavaObject(this, cls);
      this.push_array([v, v, this.init_string(msg)]);
      my_sf = this.curr_frame();
      cls.method_lookup(this, '<init>(Ljava/lang/String;)V').setup_stack(this);
      my_sf.runner = function() {
        if (my_sf.method.has_bytecode) {
          my_sf.runner = (function() {
            return my_sf.method.run_bytecode(_this);
          });
        } else {
          my_sf.runner = null;
        }
        throw new JavaException(_this.pop());
      };
      throw ReturnException;
    };

    RuntimeState.prototype.init_system_class = function() {
      var my_sf,
        _this = this;

      my_sf = this.curr_frame();
      this.get_bs_class('Ljava/lang/System;').get_method('initializeSystemClass()V').setup_stack(this);
      return my_sf.runner = function() {
        my_sf.runner = null;
        _this.system_initialized = true;
        return ;
      };
    };

    RuntimeState.prototype.init_args = function(initial_args) {
      var a, args;

      args = new JavaArray(this, this.get_bs_class('[Ljava/lang/String;'), (function() {
        var _i, _len, _results;

        _results = [];
        for (_i = 0, _len = initial_args.length; _i < _len; _i++) {
          a = initial_args[_i];
          _results.push(this.init_string(a));
        }
        return _results;
      }).call(this));
      this.curr_thread.$meta_stack = new root.CallStack([args]);
      return ;
    };

    RuntimeState.prototype.dump_state = function(snapshot, suffix) {
      var fs, _ref6;

      if (snapshot == null) {
        snapshot = this.meta_stack().snap();
      }
      suffix = suffix != null ? "-" + suffix : '';
      fs = (_ref6 = typeof node !== "undefined" && node !== null ? node.fs : void 0) != null ? _ref6 : require('fs');
      return fs.writeFileSync("./core-" + (thread_name(this, this.curr_thread)) + suffix + ".json", JSON.stringify(snapshot.serialize()), 'utf8', true);
    };

    RuntimeState.prototype.choose_next_thread = function(blacklist, cb) {
      var b, bl, current_time, key, t, wakeup_time, _i, _j, _len, _len1, _ref6, _ref7, _ref8,
        _this = this;

      if (blacklist == null) {
        blacklist = [];
        _ref6 = this.waiting_threads;
        for (key in _ref6) {
          bl = _ref6[key];
          for (_i = 0, _len = bl.length; _i < _len; _i++) {
            b = bl[_i];
            blacklist.push(b);
          }
        }
      }
      wakeup_time = (_ref7 = this.curr_thread.wakeup_time) != null ? _ref7 : Infinity;
      current_time = (new Date).getTime();
      _ref8 = this.thread_pool;
      for (_j = 0, _len1 = _ref8.length; _j < _len1; _j++) {
        t = _ref8[_j];
        if (!(t !== this.curr_thread && t.$isAlive)) {
          continue;
        }
        if (this.parked(t)) {
          if (t.$park_timeout > current_time) {
            continue;
          }
          this.unpark(t);
        }
        if (__indexOf.call(blacklist, t) >= 0) {
          continue;
        }
        if (t.wakeup_time > current_time) {
          if (t.wakeup_time < wakeup_time) {
            wakeup_time = t.wakeup_time;
          }
          continue;
        }
        ;
        return cb(t);
      }
      if ((Infinity > wakeup_time && wakeup_time > current_time)) {
        ;
        return setTimeout((function() {
          return _this.choose_next_thread(null, cb);
        }), wakeup_time - current_time);
      } else {
        ;
        return cb(this.curr_thread);
      }
    };

    RuntimeState.prototype.wait = function(monitor, yieldee) {
      ;
      var _this = this;

      if (this.waiting_threads[monitor] != null) {
        this.waiting_threads[monitor].push(this.curr_thread);
      } else {
        this.waiting_threads[monitor] = [this.curr_thread];
      }
      if (yieldee != null) {
        return this["yield"](yieldee);
      }
      return this.choose_next_thread(this.waiting_threads[monitor], (function(nt) {
        return _this["yield"](nt);
      }));
    };

    RuntimeState.prototype["yield"] = function(yieldee) {
      ;
      var new_thread_sf, old_thread_sf,
        _this = this;

      old_thread_sf = this.curr_frame();
      this.curr_thread = yieldee;
      new_thread_sf = this.curr_frame();
      new_thread_sf.runner = function() {
        return _this.meta_stack().pop();
      };
      old_thread_sf.runner = function() {
        return _this.meta_stack().pop();
      };
    };

    RuntimeState.prototype.init_park_state = function(thread) {
      var _ref6, _ref7;

      if ((_ref6 = thread.$park_count) == null) {
        thread.$park_count = 0;
      }
      return (_ref7 = thread.$park_timeout) != null ? _ref7 : thread.$park_timeout = Infinity;
    };

    RuntimeState.prototype.park = function(thread, timeout) {
      var _this = this;

      this.init_park_state(thread);
      thread.$park_count++;
      thread.$park_timeout = timeout;
      ;
      if (this.parked(thread)) {
        return this.choose_next_thread(null, (function(nt) {
          return _this["yield"](nt);
        }));
      }
    };

    RuntimeState.prototype.unpark = function(thread) {
      this.init_park_state(thread);
      ;
      thread.$park_count--;
      thread.$park_timeout = Infinity;
      if (!this.parked(thread)) {
        return this["yield"](thread);
      }
    };

    RuntimeState.prototype.parked = function(thread) {
      return thread.$park_count > 0;
    };

    RuntimeState.prototype.curr_frame = function() {
      return this.meta_stack().curr_frame();
    };

    RuntimeState.prototype.cl = function(idx) {
      return this.curr_frame().locals[idx];
    };

    RuntimeState.prototype.put_cl = function(idx, val) {
      return this.curr_frame().locals[idx] = val;
    };

    RuntimeState.prototype.put_cl2 = function(idx, val) {
      this.put_cl(idx, val);
      return (typeof UNSAFE !== "undefined" && UNSAFE !== null) || this.put_cl(idx + 1, null);
    };

    RuntimeState.prototype.push = function(arg) {
      return this.curr_frame().stack.push(arg);
    };

    RuntimeState.prototype.push2 = function(arg1, arg2) {
      return this.curr_frame().stack.push(arg1, arg2);
    };

    RuntimeState.prototype.push_array = function(args) {
      var cs;

      cs = this.curr_frame().stack;
      return Array.prototype.push.apply(cs, args);
    };

    RuntimeState.prototype.pop = function() {
      return this.curr_frame().stack.pop();
    };

    RuntimeState.prototype.pop2 = function() {
      this.pop();
      return this.pop();
    };

    RuntimeState.prototype.peek = function(depth) {
      var s;

      if (depth == null) {
        depth = 0;
      }
      s = this.curr_frame().stack;
      return s[s.length - 1 - depth];
    };

    RuntimeState.prototype.curr_pc = function() {
      return this.curr_frame().pc;
    };

    RuntimeState.prototype.goto_pc = function(pc) {
      return this.curr_frame().pc = pc;
    };

    RuntimeState.prototype.inc_pc = function(n) {
      return this.curr_frame().pc += n;
    };

    RuntimeState.prototype.check_null = function(obj) {
      if (obj == null) {
        this.java_throw(this.get_bs_class('Ljava/lang/NullPointerException;'), '');
      }
      return obj;
    };

    RuntimeState.prototype.heap_newarray = function(type, len) {
      var _ref6;

      if (len < 0) {
        this.java_throw(this.get_bs_class('Ljava/lang/NegativeArraySizeException;'), "Tried to init [" + type + " array with length " + len);
      }
      if (type === 'J') {
        return new JavaArray(this, this.get_bs_class('[J'), util.arrayset(len, gLong.ZERO));
      } else if ((_ref6 = type[0]) === 'L' || _ref6 === '[') {
        return new JavaArray(this, this.get_class("[" + type), util.arrayset(len, null));
      } else {
        return new JavaArray(this, this.get_class("[" + type), util.arrayset(len, 0));
      }
    };

    RuntimeState.prototype.init_string = function(str, intern) {
      var carr, jvm_str, s;

      if (intern == null) {
        intern = false;
      }
      if (intern && ((s = this.string_pool.get(str)) != null)) {
        return s;
      }
      carr = this.init_carr(str);
      jvm_str = new JavaObject(this, this.get_bs_class('Ljava/lang/String;'), {
        'Ljava/lang/String;value': carr,
        'Ljava/lang/String;count': str.length
      });
      if (intern) {
        this.string_pool.set(str, jvm_str);
      }
      return jvm_str;
    };

    RuntimeState.prototype.init_carr = function(str) {
      var carr, i, _i, _ref6;

      carr = new Array(str.length);
      for (i = _i = 0, _ref6 = str.length; _i < _ref6; i = _i += 1) {
        carr[i] = str.charCodeAt(i);
      }
      return new JavaArray(this, this.get_bs_class('[C'), carr);
    };

    RuntimeState.prototype.block_addr = function(address) {
      var addr, block_addr, _i, _len, _ref6;

      address = address.toNumber();
      if (typeof DataView !== "undefined" && DataView !== null) {
        block_addr = this.mem_start_addrs[0];
        _ref6 = this.mem_start_addrs.slice(1);
        for (_i = 0, _len = _ref6.length; _i < _len; _i++) {
          addr = _ref6[_i];
          if (address < addr) {
            return block_addr;
          }
          block_addr = addr;
        }
      } else {
        if (this.mem_blocks[address] != null) {
          return address;
        }
      }
      return (typeof UNSAFE !== "undefined" && UNSAFE !== null) || (function() {
        throw new Error("Invalid memory access at " + address);
      })();
    };

    RuntimeState.prototype.handle_toplevel_exception = function(e, no_threads, done_cb) {
      var _this = this;

      this.unusual_termination = true;
      if (e.toplevel_catch_handler != null) {
        this.run_until_finished((function() {
          return e.toplevel_catch_handler(_this);
        }), no_threads, done_cb);
      } else {
        error("\nInternal JVM Error:", e);
        if ((e != null ? e.stack : void 0) != null) {
          error(e.stack);
        }
        done_cb(false);
      }
    };

    RuntimeState.prototype.async_op = function(cb) {
      throw new YieldIOException(cb);
    };

    RuntimeState.prototype.call_bytecode = function(cls, method, args, success_cb, except_cb) {
      var bad_cb, good_cb,
        _this = this;

      good_cb = function(ret1, ret2) {
        return _this.async_op(function(good) {
          return good(ret1, ret2);
        });
      };
      bad_cb = function(e_fn) {
        return _this.async_op(function(good, bad) {
          return bad(e_fn);
        });
      };
      return this.async_op(function() {
        var is_constructor, nf, v;

        is_constructor = false;
        if (method.name.charAt(0) === '<' && method.name.charAt(1) === 'i') {
          v = new JavaObject(_this, cls);
          args.unshift(v, v);
          is_constructor = true;
        }
        nf = root.StackFrame.native_frame("$bytecode_call", (function() {
          var rv;

          rv = void 0;
          if (method.return_type !== 'V' || is_constructor) {
            if (method.return_type === 'J' || method.return_type === 'D') {
              _this.pop();
            }
            rv = _this.pop();
          }
          _this.meta_stack().pop();
          return success_cb(rv, good_cb, bad_cb);
        }), (function(e) {
          _this.meta_stack().pop();
          return except_cb((function() {
            throw e;
          }), good_cb, bad_cb);
        }));
        _this.meta_stack().push(nf);
        _this.push_array(args);
        method.setup_stack(_this);
        return _this.run_until_finished((function() {}), false, _this.stashed_done_cb);
      });
    };

    RuntimeState.prototype.async_abort = function(cb) {
      return this.abort_requested = cb;
    };

    RuntimeState.prototype.is_abort_requested = function() {
      return this.abort_requested;
    };

    RuntimeState.prototype.run_until_finished = function(setup_fn, no_threads, done_cb) {
      var _this = this;

      return setImmediate((function() {
        var duration, e, failure_fn, frames_to_pop, m_count, ms_per_m, sf, stack, start_time, success_fn;

        if (_this.abort_requested) {
          if (typeof _this.abort_requested === 'function') {
            _this.abort_requested();
          }
          return done_cb(false);
        }
        _this.stashed_done_cb = done_cb;
        try {
          setup_fn();
          start_time = (new Date()).getTime();
          m_count = _this.max_m_count;
          sf = _this.curr_frame();
          while ((sf.runner != null) && m_count > 0) {
            sf.runner();
            m_count--;
            sf = _this.curr_frame();
          }
          if ((sf.runner != null) && m_count === 0) {
            if (_this.abort_requested) {
              if (typeof _this.abort_requested === 'function') {
                _this.abort_requested();
              }
              return done_cb(false);
            }
            duration = (new Date()).getTime() - start_time;
            if (duration > 2000 || duration < 1000) {
              ms_per_m = duration / _this.max_m_count;
              _this.max_m_count = (1000 / ms_per_m) | 0;
            }
            return _this.run_until_finished((function() {}), no_threads, done_cb);
          }
          if (no_threads || _this.thread_pool.length <= 1) {
            return done_cb(true);
          }
          ;
          _this.curr_thread.$isAlive = false;
          _this.thread_pool.splice(_this.thread_pool.indexOf(_this.curr_thread), 1);
          return _this.choose_next_thread(null, function(next_thread) {
            _this.curr_thread = next_thread;
            return _this.run_until_finished((function() {}), no_threads, done_cb);
          });
        } catch (_error) {
          e = _error;
          if (e === ReturnException) {
            _this.run_until_finished((function() {}), no_threads, done_cb);
          } else if (e instanceof YieldIOException) {
            success_fn = function(ret1, ret2, bytecode, advance_pc) {
              if (advance_pc == null) {
                advance_pc = true;
              }
              if (bytecode) {
                _this.meta_stack().push(root.StackFrame.native_frame("async_op"));
              }
              _this.curr_frame().runner = function() {
                _this.meta_stack().pop();
                if (bytecode && advance_pc) {
                  _this.curr_frame().pc += 1 + _this.curr_frame().method.code.opcodes[_this.curr_frame().pc].byte_count;
                }
                if (ret1 !== void 0) {
                  if (typeof ret1 === 'boolean') {
                    ret1 += 0;
                  }
                  _this.push(ret1);
                }
                if (ret2 !== void 0) {
                  return _this.push(ret2);
                }
              };
              return _this.run_until_finished((function() {}), no_threads, done_cb);
            };
            failure_fn = function(e_cb) {
              _this.meta_stack().push(root.StackFrame.native_frame("async_op"));
              _this.curr_frame().runner = function() {
                _this.meta_stack().pop();
                return e_cb();
              };
              return _this.run_until_finished((function() {}), no_threads, done_cb);
            };
            e.condition(success_fn, failure_fn);
          } else {
            stack = _this.meta_stack();
            if ((e.method_catch_handler != null) && stack.length() > 1) {
              frames_to_pop = 0;
              while (!e.method_catch_handler(_this, stack.get_caller(frames_to_pop), frames_to_pop === 0)) {
                if (stack.length() === ++frames_to_pop) {
                  if (jvm.dump_state) {
                    _this.dump_state();
                  }
                  stack.pop_n(stack.length() - 1);
                  _this.handle_toplevel_exception(e, no_threads, done_cb);
                  return;
                }
              }
              stack.pop_n(frames_to_pop);
              _this.run_until_finished((function() {}), no_threads, done_cb);
            } else {
              if (jvm.dump_state) {
                _this.dump_state();
              }
              stack.pop_n(Math.max(stack.length() - 1, 0));
              _this.handle_toplevel_exception(e, no_threads, done_cb);
            }
          }
        }
      }));
    };

    RuntimeState.prototype.async_input = function(n_bytes, resume) {
      var data,
        _this = this;

      if (this.input_buffer.length > 0) {
        data = this.input_buffer.slice(0, n_bytes);
        this.input_buffer = this.input_buffer.slice(n_bytes);
        resume(data);
        return;
      }
      return this._async_input(function(data) {
        if (data.length > n_bytes) {
          _this.input_buffer = data.slice(n_bytes);
        }
        return resume(data.slice(0, n_bytes));
      });
    };

    return RuntimeState;

  })();

}).call(this);
;
// Generated by CoffeeScript 1.6.2
(function() {
  "use strict";
  var ArrayClassData, ClassLoader, JavaException, JavaObject, PrimitiveClassData, ReferenceClassData, StackFrame, root, trace, util, _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  _ref = require('./ClassData'), ReferenceClassData = _ref.ReferenceClassData, PrimitiveClassData = _ref.PrimitiveClassData, ArrayClassData = _ref.ArrayClassData;

  util = require('./util');

  trace = require('./logging').trace;

  StackFrame = require('./runtime').StackFrame;

  JavaException = require('./exceptions').JavaException;

  JavaObject = require('./java_object').JavaObject;

  root = typeof exports !== "undefined" && exports !== null ? exports : this.ClassLoader = {};

  ClassLoader = (function() {
    function ClassLoader(bootstrap) {
      this.bootstrap = bootstrap;
      this.loaded_classes = Object.create(null);
    }

    ClassLoader.prototype.get_package_names = function() {
      var classes, cls, pkg_names, _i, _len;

      classes = this.get_loaded_class_list(true);
      pkg_names = {};
      for (_i = 0, _len = classes.length; _i < _len; _i++) {
        cls = classes[_i];
        pkg_names[cls.substring(0, (cls.lastIndexOf('/')) + 1)] = true;
      }
      return Object.keys(pkg_names);
    };

    ClassLoader.prototype.get_loaded_class_list = function(ref_class_only) {
      var cdata, k, _ref1, _results;

      if (ref_class_only == null) {
        ref_class_only = false;
      }
      if (ref_class_only) {
        _ref1 = this.loaded_classes;
        _results = [];
        for (k in _ref1) {
          cdata = _ref1[k];
          if (cdata.major_version != null) {
            _results.push(k.slice(1, -1));
          }
        }
        return _results;
      } else {
        return Object.keys(this.loaded_classes);
      }
    };

    ClassLoader.prototype.remove_class = function(type_str) {
      var cdata, k, _ref1;

      this._rem_class(type_str);
      if (util.is_primitive_type(type_str)) {
        return;
      }
      _ref1 = this.loaded_classes;
      for (k in _ref1) {
        cdata = _ref1[k];
        if (type_str === (typeof cdata.get_component_type === "function" ? cdata.get_component_type() : void 0) || type_str === cdata.get_super_class_type()) {
          this.remove_class(k);
        }
      }
    };

    ClassLoader.prototype._rem_class = function(type_str) {
      delete this.loaded_classes[type_str];
    };

    ClassLoader.prototype._add_class = function(type_str, cdata) {
      this.loaded_classes[type_str] = cdata;
    };

    ClassLoader.prototype._get_class = function(type_str) {
      var cdata;

      cdata = this.loaded_classes[type_str];
      if ((cdata != null ? cdata.reset_bit : void 0) === 1) {
        cdata.reset();
      }
      if (cdata != null) {
        return cdata;
      } else {
        return null;
      }
    };

    ClassLoader.prototype._try_define_array_class = function(type_str) {
      var component_cdata, component_type;

      component_type = util.get_component_type(type_str);
      component_cdata = this.get_resolved_class(component_type, true);
      if (component_cdata == null) {
        return null;
      }
      return this._define_array_class(type_str, component_cdata);
    };

    ClassLoader.prototype._define_array_class = function(type_str, component_cdata) {
      var cdata;

      if (component_cdata.get_class_loader() !== this) {
        return component_cdata.get_class_loader()._define_array_class(type_str, component_cdata);
      } else {
        cdata = new ArrayClassData(component_cdata.get_type(), this);
        this._add_class(type_str, cdata);
        cdata.set_resolved(this.bootstrap.get_resolved_class('Ljava/lang/Object;'), component_cdata);
        return cdata;
      }
    };

    ClassLoader.prototype._parallel_class_resolve = function(rs, types, success_fn, failure_fn, explicit) {
      var failure, fetch_data, pending_requests, request_finished, resolved, type, _i, _len, _results,
        _this = this;

      if (explicit == null) {
        explicit = false;
      }
      pending_requests = types.length;
      failure = null;
      resolved = [];
      request_finished = function() {
        pending_requests--;
        if (pending_requests === 0) {
          if (failure == null) {
            return success_fn(resolved);
          } else {
            return failure_fn(failure);
          }
        }
      };
      fetch_data = function(type) {
        return _this.resolve_class(rs, type, (function(cdata) {
          resolved.push(cdata);
          return request_finished();
        }), (function(f_fn) {
          failure = f_fn;
          return request_finished();
        }), explicit);
      };
      _results = [];
      for (_i = 0, _len = types.length; _i < _len; _i++) {
        type = types[_i];
        _results.push(fetch_data(type));
      }
      return _results;
    };

    ClassLoader.prototype._regular_class_resolve = function(rs, types, success_fn, failure_fn, explicit) {
      var fetch_class, resolved,
        _this = this;

      if (explicit == null) {
        explicit = false;
      }
      if (!(types.length > 0)) {
        return success_fn();
      }
      resolved = [];
      fetch_class = function(type) {
        return _this.resolve_class(rs, type, (function(cdata) {
          resolved.push(cdata);
          if (types.length > 0) {
            return fetch_class(types.shift());
          } else {
            return success_fn(resolved);
          }
        }), failure_fn, explicit);
      };
      return fetch_class(types.shift());
    };

    ClassLoader.prototype.define_class = function(rs, type_str, data, success_fn, failure_fn, parallel, explicit) {
      var cdata, clsdata, msg, process_resolved_classes, resolved_already, to_resolve, type, types, _i, _len,
        _this = this;

      if (parallel == null) {
        parallel = false;
      }
      if (explicit == null) {
        explicit = false;
      }
      ;
      cdata = new ReferenceClassData(data, this);
      if ((type = cdata.get_type()) !== type_str) {
        msg = "" + (util.descriptor2typestr(type_str)) + " (wrong name: " + (util.descriptor2typestr(type)) + ")";
        return failure_fn((function() {
          return rs.java_throw(_this.get_initialized_class('Ljava/lang/NoClassDefFoundError;'), msg);
        }));
      }
      this._add_class(type_str, cdata);
      types = cdata.get_interface_types();
      types.push(cdata.get_super_class_type());
      to_resolve = [];
      resolved_already = [];
      for (_i = 0, _len = types.length; _i < _len; _i++) {
        type = types[_i];
        if (type == null) {
          continue;
        }
        clsdata = this.get_resolved_class(type, true);
        if (clsdata != null) {
          resolved_already.push(clsdata);
        } else {
          to_resolve.push(type);
        }
      }
      process_resolved_classes = function(cdatas) {
        var a_cdata, interface_cdatas, super_cdata, super_type, _j, _len1;

        cdatas = resolved_already.concat(cdatas);
        super_cdata = null;
        interface_cdatas = [];
        super_type = cdata.get_super_class_type();
        for (_j = 0, _len1 = cdatas.length; _j < _len1; _j++) {
          a_cdata = cdatas[_j];
          type = a_cdata.get_type();
          if (type === super_type) {
            super_cdata = a_cdata;
          } else {
            interface_cdatas.push(a_cdata);
          }
        }
        cdata.set_resolved(super_cdata, interface_cdatas);
        return success_fn(cdata);
      };
      if (to_resolve.length > 0) {
        if (false) {
          return this._parallel_class_resolve(rs, to_resolve, process_resolved_classes, failure_fn, explicit);
        } else {
          return this._regular_class_resolve(rs, to_resolve, process_resolved_classes, failure_fn, explicit);
        }
      } else {
        return process_resolved_classes([]);
      }
    };

    ClassLoader.prototype.get_loaded_class = function(type_str, null_handled) {
      var cdata;

      if (null_handled == null) {
        null_handled = false;
      }
      cdata = this._get_class(type_str);
      if (cdata != null) {
        return cdata;
      }
      if (util.is_array_type(type_str)) {
        cdata = this._try_define_array_class(type_str);
        if (cdata != null) {
          return cdata;
        }
      }
      if (util.is_primitive_type(type_str)) {
        return this.bootstrap.get_primitive_class(type_str);
      }
      if (null_handled) {
        return null;
      }
      throw new Error("Error in get_loaded_class: Class " + type_str + " is not loaded.");
    };

    ClassLoader.prototype.get_resolved_class = function(type_str, null_handled) {
      var cdata;

      if (null_handled == null) {
        null_handled = false;
      }
      cdata = this.get_loaded_class(type_str, null_handled);
      if (cdata != null ? cdata.is_resolved() : void 0) {
        return cdata;
      }
      if (null_handled) {
        return null;
      }
      throw new Error("Error in get_resolved_class: Class " + type_str + " is not resolved.");
    };

    ClassLoader.prototype.get_initialized_class = function(type_str, null_handled) {
      var cdata;

      if (null_handled == null) {
        null_handled = false;
      }
      cdata = this.get_resolved_class(type_str, null_handled);
      if (cdata != null ? cdata.is_initialized() : void 0) {
        return cdata;
      }
      if (null_handled) {
        return null;
      }
      throw new Error("Error in get_initialized_class: Class " + type_str + " is not initialized.");
    };

    ClassLoader.prototype._initialize_class = function(rs, cdata, success_fn, failure_fn) {
      ;
      var class_file, clinit, first_clinit, first_native_frame, next_nf,
        _this = this;

      if (!(cdata instanceof ReferenceClassData)) {
        (typeof UNSAFE !== "undefined" && UNSAFE !== null) || (function() {
          throw new Error("Tried to initialize a non-reference type: " + (cdata.get_type()));
        })();
      }
      first_clinit = true;
      first_native_frame = StackFrame.native_frame("$clinit", (function() {
        if (rs.curr_frame() !== first_native_frame) {
          throw new Error("The top of the meta stack should be this native frame, but it is not: " + (rs.curr_frame().name) + " at " + (rs.meta_stack().length()));
        }
        rs.meta_stack().pop();
        return rs.async_op(function() {
          return success_fn(cdata);
        });
      }), (function(e) {
        var cls, nf, v;

        rs.curr_frame().cdata.reset();
        if (e instanceof JavaException) {
          if (e.exception.cls.get_type() === 'Ljava/lang/NoClassDefFoundError;') {
            rs.meta_stack().pop();
            throw e;
          }
          nf = rs.curr_frame();
          nf.runner = function() {
            var rv;

            rv = rs.pop();
            rs.meta_stack().pop();
            throw new JavaException(rv);
          };
          nf.error = function() {
            rs.meta_stack().pop();
            return failure_fn((function() {
              throw e;
            }));
          };
          cls = _this.bootstrap.get_resolved_class('Ljava/lang/ExceptionInInitializerError;');
          v = new JavaObject(rs, cls);
          rs.push_array([v, v, e.exception]);
          return cls.method_lookup(rs, '<init>(Ljava/lang/Throwable;)V').setup_stack(rs);
        } else {
          rs.meta_stack().pop();
          throw e;
        }
      }));
      first_native_frame.cdata = cdata;
      class_file = cdata;
      while ((class_file != null) && !class_file.is_initialized()) {
        ;
        class_file.initialized = true;
        clinit = class_file.get_method('<clinit>()V');
        if (clinit != null) {
          ;
          if (first_clinit) {
            ;
            first_clinit = false;
            rs.meta_stack().push(first_native_frame);
          } else {
            next_nf = StackFrame.native_frame("$clinit_secondary", (function() {
              return rs.meta_stack().pop();
            }), (function(e) {
              rs.curr_frame().cdata.reset();
              rs.meta_stack().pop();
              while (!rs.curr_frame()["native"]) {
                rs.meta_stack().pop();
              }
              return rs.async_op((function() {
                return failure_fn((function() {
                  throw e;
                }), true);
              }));
            }));
            next_nf.cdata = class_file;
            rs.meta_stack().push(next_nf);
          }
          clinit.setup_stack(rs);
        }
        class_file = class_file.get_super_class();
      }
      if (!first_clinit) {
        rs.run_until_finished((function() {}), false, rs.stashed_done_cb);
        return;
      }
      success_fn(cdata);
    };

    ClassLoader.prototype.initialize_class = function(rs, type_str, success_fn, failure_fn, explicit) {
      var cdata, component_type,
        _this = this;

      if (explicit == null) {
        explicit = false;
      }
      ;
      cdata = this.get_initialized_class(type_str, true);
      if (cdata != null) {
        return success_fn(cdata);
      }
      if (util.is_array_type(type_str)) {
        component_type = util.get_component_type(type_str);
        this.resolve_class(rs, component_type, (function(cdata) {
          return success_fn(_this._define_array_class(type_str, cdata));
        }), failure_fn, explicit);
        return;
      }
      cdata = this.get_resolved_class(type_str, true);
      if (cdata != null) {
        return this._initialize_class(rs, cdata, success_fn, failure_fn);
      }
      return this.resolve_class(rs, type_str, (function(cdata) {
        if (cdata.is_initialized(rs)) {
          return success_fn(cdata);
        } else {
          return _this._initialize_class(rs, cdata, success_fn, failure_fn);
        }
      }), failure_fn, explicit);
    };

    ClassLoader.prototype.resolve_class = function(rs, type_str, success_fn, failure_fn, explicit) {
      var component_type, rv,
        _this = this;

      if (explicit == null) {
        explicit = false;
      }
      ;
      rv = this.get_resolved_class(type_str, true);
      if (rv != null) {
        return success_fn(rv);
      }
      if (util.is_array_type(type_str)) {
        component_type = util.get_component_type(type_str);
        this.resolve_class(rs, component_type, (function(cdata) {
          return success_fn(_this._define_array_class(type_str, cdata));
        }), failure_fn, explicit);
        return;
      }
      return this._resolve_class(rs, type_str, success_fn, failure_fn, explicit);
    };

    return ClassLoader;

  })();

  root.BootstrapClassLoader = (function(_super) {
    __extends(BootstrapClassLoader, _super);

    function BootstrapClassLoader(read_classfile) {
      this.read_classfile = read_classfile;
      this._resolve_class = __bind(this._resolve_class, this);
      BootstrapClassLoader.__super__.constructor.call(this, this);
    }

    BootstrapClassLoader.prototype.serialize = function(visited) {
      var cls, loaded, type, _ref1;

      if ('bootstrapLoader' in visited) {
        return '<*bootstrapLoader>';
      }
      visited['bootstrapLoader'] = true;
      loaded = {};
      _ref1 = this.loaded_classes;
      for (type in _ref1) {
        cls = _ref1[type];
        if (type !== "__proto__") {
          loaded["" + type + "(" + (cls.getLoadState()) + ")"] = cls.loader.serialize(visited);
        }
      }
      return {
        ref: 'bootstrapLoader',
        loaded: loaded
      };
    };

    BootstrapClassLoader.prototype.reset = function() {
      var cls, cname, _ref1;

      _ref1 = this.loaded_classes;
      for (cname in _ref1) {
        cls = _ref1[cname];
        if (cname !== "__proto__") {
          cls.reset_bit = 1;
        }
      }
    };

    BootstrapClassLoader.prototype.get_primitive_class = function(type_str) {
      var cdata;

      cdata = this._get_class(type_str);
      if (cdata != null) {
        return cdata;
      }
      cdata = new PrimitiveClassData(type_str, this);
      this._add_class(type_str, cdata);
      return cdata;
    };

    BootstrapClassLoader.prototype._resolve_class = function(rs, type_str, success_fn, failure_fn, explicit) {
      var rv,
        _this = this;

      if (explicit == null) {
        explicit = false;
      }
      ;
      rv = this.get_resolved_class(type_str, true);
      if (rv != null) {
        return success_fn(rv);
      }
      this.read_classfile(type_str, (function(data) {
        return _this.define_class(rs, type_str, data, success_fn, failure_fn, true, explicit);
      }), (function() {
        return failure_fn(function() {
          var cls, msg, v;

          rs.meta_stack().push(StackFrame.native_frame('$class_not_found', (function() {
            var cls, v;

            rs.curr_frame().runner = function() {
              rv = rs.pop();
              rs.meta_stack().pop();
              throw new JavaException(rv);
            };
            if (!explicit) {
              rv = rs.pop();
              cls = _this.bootstrap.get_initialized_class('Ljava/lang/NoClassDefFoundError;');
              v = new JavaObject(rs, cls);
              rs.push_array([v, v, rv]);
              return cls.method_lookup(rs, '<init>(Ljava/lang/Throwable;)V').setup_stack(rs);
            }
          }), (function() {
            rs.meta_stack().pop();
            return failure_fn((function() {
              throw new Error("Failed to throw a " + (explicit ? 'ClassNotFoundException' : 'NoClassDefFoundError') + ".");
            }));
          })));
          cls = _this.bootstrap.get_initialized_class('Ljava/lang/ClassNotFoundException;');
          v = new JavaObject(rs, cls);
          msg = rs.init_string(util.ext_classname(type_str));
          rs.push_array([v, v, msg]);
          return cls.method_lookup(rs, '<init>(Ljava/lang/String;)V').setup_stack(rs);
        });
      }));
    };

    return BootstrapClassLoader;

  })(ClassLoader);

  root.CustomClassLoader = (function(_super) {
    __extends(CustomClassLoader, _super);

    function CustomClassLoader(bootstrap, loader_obj) {
      this.loader_obj = loader_obj;
      CustomClassLoader.__super__.constructor.call(this, bootstrap);
    }

    CustomClassLoader.prototype.serialize = function(visited) {
      return this.loader_obj.serialize(visited);
    };

    CustomClassLoader.prototype._resolve_class = function(rs, type_str, success_fn, failure_fn, explicit) {
      var _this = this;

      if (explicit == null) {
        explicit = false;
      }
      ;
      rs.meta_stack().push(StackFrame.native_frame("$" + (this.loader_obj.cls.get_type()), (function() {
        var cls, jclo;

        jclo = rs.pop();
        rs.meta_stack().pop();
        cls = jclo.$cls;
        if (_this.get_resolved_class(type_str, true) == null) {
          _this._add_class(type_str, cls);
        }
        return rs.async_op(function() {
          return success_fn(cls);
        });
      }), (function(e) {
        rs.meta_stack().pop();
        return rs.async_op(function() {
          return failure_fn(function() {
            throw e;
          });
        });
      })));
      rs.push2(this.loader_obj, rs.init_string(util.ext_classname(type_str)));
      this.loader_obj.cls.method_lookup(rs, 'loadClass(Ljava/lang/String;)Ljava/lang/Class;').setup_stack(rs);
      rs.run_until_finished((function() {}), false, rs.stashed_done_cb);
    };

    return CustomClassLoader;

  })(ClassLoader);

}).call(this);
;
// Generated by CoffeeScript 1.6.2
(function() {
  "use strict";
  var error, fs, path, root, trace, util, vendor_path, _ref, _ref1, _ref2;

  util = require('./util');

  fs = (_ref = typeof node !== "undefined" && node !== null ? node.fs : void 0) != null ? _ref : require('fs');

  path = (_ref1 = typeof node !== "undefined" && node !== null ? node.path : void 0) != null ? _ref1 : require('path');

  _ref2 = require('../src/logging'), trace = _ref2.trace, error = _ref2.error;

  root = typeof exports !== "undefined" && exports !== null ? exports : this.jvm = {};

  root.show_NYI_natives = false;

  root.dump_state = false;

  vendor_path = typeof node !== "undefined" && node !== null ? '/home/doppio/vendor' : path.resolve(__dirname, '../vendor');

  root.reset_system_properties = function() {
    return root.system_properties = {
      'java.class.path': [],
      'java.home': "" + vendor_path + "/java_home",
      'sun.boot.class.path': "" + vendor_path + "/classes",
      'file.encoding': 'UTF-8',
      'java.vendor': 'Doppio',
      'java.version': '1.6',
      'java.vendor.url': 'https://github.com/int3/doppio',
      'java.class.version': '50.0',
      'java.specification.version': '1.6',
      'line.separator': '\n',
      'file.separator': '/',
      'path.separator': ':',
      'user.dir': path.resolve('.'),
      'user.home': '.',
      'user.name': 'DoppioUser',
      'os.name': 'doppio',
      'os.arch': 'js',
      'os.version': '0',
      'java.vm.name': 'Doppio 64-bit VM',
      'java.vm.vendor': 'Doppio Inc.',
      'java.awt.headless': (typeof node === "undefined" || node === null).toString(),
      'java.awt.graphicsenv': 'classes.awt.CanvasGraphicsEnvironment',
      'useJavaUtilZip': 'true',
      'jline.terminal': 'jline.UnsupportedTerminal'
    };
  };

  root.reset_system_properties();

  root.read_classfile = function(cls, cb, failure_cb) {
    var data, e, filename, p, _i, _len, _ref3;

    cls = cls.slice(1, -1);
    _ref3 = root.system_properties['java.class.path'];
    for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
      p = _ref3[_i];
      filename = "" + p + "/" + cls + ".class";
      try {
        if (!fs.existsSync(filename)) {
          continue;
        }
        data = util.bytestr_to_array(fs.readFileSync(filename, 'binary'));
        if (data != null) {
          cb(data);
        }
        return;
      } catch (_error) {
        e = _error;
        failure_cb(function() {
          throw e;
        });
        return;
      }
    }
    return failure_cb((function() {
      throw new Error("Error: No file found for class " + cls + ".");
    }));
  };

  root.set_classpath = function(jcl_path, classpath) {
    var class_path, tmp_cp, _i, _len;

    classpath = classpath.split(':');
    classpath.push(jcl_path);
    root.system_properties['java.class.path'] = tmp_cp = [];
    for (_i = 0, _len = classpath.length; _i < _len; _i++) {
      class_path = classpath[_i];
      class_path = path.normalize(class_path);
      if (class_path.charAt(class_path.length - 1) !== '/') {
        class_path += '/';
      }
      if (fs.existsSync(class_path)) {
        tmp_cp.push(class_path);
      }
    }
  };

  root.run_class = function(rs, class_name, cmdline_args, done_cb) {
    var class_descriptor, main_method, main_sig, run_main, run_program;

    class_descriptor = "L" + class_name + ";";
    main_sig = 'main([Ljava/lang/String;)V';
    main_method = null;
    run_main = function() {
      ;      return rs.run_until_finished((function() {
        return rs.async_op(function(resume_cb, except_cb) {
          return rs.get_bs_cl().initialize_class(rs, class_descriptor, (function(cls) {
            rs.init_args(cmdline_args);
            return rs.run_until_finished((function() {
              main_method = cls.method_lookup(rs, main_sig);
              if (main_method != null) {
                return;
              }
              return rs.async_op(function(resume_cb, except_cb) {
                return cls.resolve_method(rs, main_sig, (function(m) {
                  main_method = m;
                  return except_cb(function() {});
                }), except_cb);
              });
            }), true, function(success) {
              if (!(success && (main_method != null))) {
                return typeof done_cb === "function" ? done_cb(success) : void 0;
              }
              return rs.run_until_finished((function() {
                return main_method.setup_stack(rs);
              }), false, function(success) {
                return typeof done_cb === "function" ? done_cb(success && !rs.unusual_termination) : void 0;
              });
            });
          }), except_cb);
        });
      }), true, done_cb);
    };
    run_program = function() {
      ;      return rs.run_until_finished((function() {
        return rs.init_threads();
      }), true, function(success) {
        if (!success) {
          return;
        }
        if (rs.system_initialized != null) {
          return run_main();
        } else {
          return rs.run_until_finished((function() {
            return rs.init_system_class();
          }), true, function(success) {
            if (!success) {
              return;
            }
            return run_main();
          });
        }
      });
    };
    return rs.run_until_finished((function() {
      return rs.async_op(function(resume_cb, except_cb) {
        return rs.preinitialize_core_classes(run_program, (function(e) {
          throw e;
        }));
      });
    }), true, (function() {}));
  };

}).call(this);
;
