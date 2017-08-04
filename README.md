# WebAssembly Type Definitions

Type definitions of wasm types and some C types for use in JavaScript.

```
npm install wasm-types
```

## Types

```javascript
const i32 = 1;
const i64 = 1 << 1;
const f32 = 1 << 2;
const f64 = 1 << 3;
const anyfunc = 1 << 4;
const func = 1 << 5;
const block_type = 1 << 6;
```
## C type mappings

```javascript
const i8 = 1 << 7;
const u8 = 1 << 8;
const i16 = 1 << 9;
const u16 = 1 << 10;
const u32 = 1 << 11;
const u64 = 1 << 12;
```

## Helpers API

Better with [curry](https://en.wikipedia.org/wiki/Currying).

### wasmTypes.get(type, index, dataView) -> number

Get a value at `index` of `type` from `DataView`.

### wasmTypes.set(type, index, dataView, value) -> void

Set a value at `index` of `type` in `DataView` with `value`.

