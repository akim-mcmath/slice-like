# slice-like

[![Version][version-badge]][npm]
[![License][license-badge]][license]
[![Build][build-badge]][travis]
[![Coverage][coverage-badge]][coveralls]
[![Dependencies][dependencies-badge]][gemnasium]

Creates an Array from a slice of an Array-like object.

## Install

Install via [npm][npm]:

```sh
npm install --save slice-like
```

## Usage

#### Convert an Array-like object to an Array

Pass any [Array-like][array-like] object &mdash; an object with a `'length'`
property and numerical indices &mdash; in order to convert it to an
[Array][array].

```js
const sliceLike = require('slice-like');

var arrayLike = {
  0: 'zero',
  1: 'one',
  length: 2
};

var arr = sliceLike(arrayLike); // => ['zero', 'one'];
```

#### An Alternative to Rest Parameters

This module may be used in place of [rest parameters][rest-parameters] in
environments where they are unsupported. Pass the [`arguments`][arguments]
object and the index at which the rest parameters start, as follows:

```js
function someFunction(firstParam, secondParam /*, ...restParams */) {
  var restParams = sliceLike(arguments, 2);
  // ...
}
```

## API

### `sliceLike(arrayLike, [start], [end])`

Slices an [Array-like][array-like] object and returns an [Array][array]. Slicing
behavior is similar to the [`Array.prototype.slice()`][slice] method.

#### Parameters

<table>
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>arrayLike</td>
    <td><code>object</code></td>
    <td>
      An object with a <code>'length'</code> property and indexed elements,
      e.g., the
      <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/arguments">
        arguments
      </a> object.
    </td>
  </tr>
  <tr>
    <td>[start]</td>
    <td><code>number</code></td>
    <td>
      The index at which to start the slice. The resulting Array includes the
      start index. Defaults to the beginning of `arrayLike`.
    </td>
  </tr>
  <tr>
    <td>[end]</td>
    <td><code>number</code></td>
    <td>
      The index at which to end the slice. The resulting Array does not include
      the end index. Defaults to the end of `arrayLike`.
    </td>
  </tr>
  </tbody>
</table>

#### Returns

Type: `Array`

The resulting Array, sliced according to the `start` and/or `end` arguments if provided.

## License

Copyright &copy; 2016 Akim McMath. Licensed under the [MIT License][license].

[version-badge]: https://img.shields.io/npm/v/slice-like.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/slice-like.svg?style=flat-square
[build-badge]: https://img.shields.io/travis/akim-mcmath/slice-like/master.svg?style=flat-square
[coverage-badge]: https://img.shields.io/coveralls/akim-mcmath/slice-like/master.svg?style=flat-square&service=github
[dependencies-badge]: https://img.shields.io/gemnasium/akim-mcmath/slice-like.svg?style=flat-square

[npm]: https://www.npmjs.com/package/slice-like
[license]: LICENSE
[travis]: https://travis-ci.org/akim-mcmath/slice-like
[coveralls]: https://coveralls.io/github/akim-mcmath/slice-like?branch=master
[gemnasium]: https://gemnasium.com/akim-mcmath/slice-like
[slice]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
[array-like]: http://www.2ality.com/2013/05/quirk-array-like-objects.html
[array]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array
[rest-parameters]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/rest_parameters
[arguments]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/arguments
