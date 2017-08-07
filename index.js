/* eslint-env es6 */
/**
 * WASM types
 *
 * https://github.com/WebAssembly/spec/tree/master/interpreter#s-expression-syntax
 *
 * Plus some extra C type mappings
 *
 * @author arthrubuldauskas@gmail.com
 * @license MIT
 */

const i32 = 1;
const i64 = 1 << 1;
const f32 = 1 << 2;
const f64 = 1 << 3;
const anyfunc = 1 << 4;
const func = 1 << 5;
const block_type = 1 << 6;

// C type mappings
const i8 = 1 << 7;
const u8 = 1 << 8;
const i16 = 1 << 9;
const u16 = 1 << 10;
const u32 = 1 << 11;
const u64 = 1 << 12;

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

// TODO: Make this configurable.
const LITTLE_ENDIAN = true;

const get = (type, index, dataView) => {
  switch (type) {
    case i32: return dataView.getInt32(index, LITTLE_ENDIAN);
    case i64: return dataView.getInt64(index, LITTLE_ENDIAN);
    case f32: return dataView.getFloat32(index, LITTLE_ENDIAN);
    case f64: return dataView.getFloat64(index, LITTLE_ENDIAN);
    case anyfunc: return dataView.getUint32(index, LITTLE_ENDIAN);
    case func: return dataView.getUint32(index, LITTLE_ENDIAN);
    case i8: return dataView.getInt8(index, LITTLE_ENDIAN);
    case u8: return dataView.getUint8(index, LITTLE_ENDIAN);
    case i16: return dataView.getInt16(index, LITTLE_ENDIAN);
    case u16: return dataView.getUint16(index, LITTLE_ENDIAN);
    case u32: return dataView.getUint32(index, LITTLE_ENDIAN);
    case u64: return dataView.getUint64(index, LITTLE_ENDIAN);
    default:
      return dataView.getUint8(index, LITTLE_ENDIAN);
  };
};

const set = (type, index, dataView, value) => {
  switch (type) {
    case i32: return dataView.setInt32(index, value, LITTLE_ENDIAN);
    case i64: return dataView.setInt64(index, value, LITTLE_ENDIAN);
    case f32: return dataView.setFloat32(index, value, LITTLE_ENDIAN);
    case f64: return dataView.setFloat64(index, value, LITTLE_ENDIAN);
    case anyfunc: return dataView.setUint32(index, value, LITTLE_ENDIAN);
    case func: return dataView.setUint32(index, value, LITTLE_ENDIAN);
    case i8: return dataView.setInt8(index, value, LITTLE_ENDIAN);
    case u8: return dataView.setUint8(index, value, LITTLE_ENDIAN);
    case i16: return dataView.setInt16(index, value, LITTLE_ENDIAN);
    case u16: return dataView.setUint16(index, value, LITTLE_ENDIAN);
    case u32: return dataView.setUint32(index, value, LITTLE_ENDIAN);
    case u64: return dataView.setUint64(index, value, LITTLE_ENDIAN);
    default:
      return dataView.setUint8(index, value, LITTLE_ENDIAN);
  };
}

module.exports = {
  i32,
  i64,
  f32,
  f64,
  anyfunc,
  func,
  block_type,
  i8,
  u8,
  i16,
  u16,
  u32,
  u64,
  set,
  get,
  sizeof
}

