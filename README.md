# WebAssembly Type Definitions

Type definitions of wasm types and some C types for use in JavaScript.

```
npm install wasm-types
```

## 'Native' WebAssembly Types

```javascript
// Number types
i32, i64, f32, f64
```

Extras. You _should_ be able to pass around anyfunc in WebAssembly, not sure about the other two but they are there if you need it.
```
anyfunc
func
block_type
```
## Utility sizes

The following types are of sizes you can load/set in WebAssembly but are not **types**. _See https://github.com/WebAssembly/spec/tree/master/interpreter#s-expression-syntax_
```
i8, u8, i16, u16, u32
// u64 is special
u64
```

`u64` is not something you can set read in raw WebAssembly but something you can set into memory from JavaScript

## sizeof

This module also exports a `sizeof` lookup Object for convenience.

```javascript
// In _bytes_
const word = 4;

const sizeof = {
  [i32]: word,
  [i64]: word * 2,
  [f32]: word,
  [f64]: word * 2,
  [u32]: word,
  [u16]: word >> 1,
  [u8]: word >> 2,
  [i8]: word >> 2,
  [i16]: word >> 1,
  [anyfunc]: word,
  [func]: word,
  [block_type]: word
};
```

## Helpers API

Better with [curry](https://en.wikipedia.org/wiki/Currying).

### wasmTypes.get(type, index, dataView) -> number

Get a value at `index` of `type` from `DataView`.

### wasmTypes.set(type, index, dataView, value) -> void

Set a value at `index` of `type` in `DataView` with `value`.

