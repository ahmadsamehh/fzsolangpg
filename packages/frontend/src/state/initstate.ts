export const defaultCode = `contract flipper {
  bool private value;

  /// Constructor that initializes the \`bool\` value to the given \`init_value\`.
  constructor(bool initvalue) {
    value = initvalue;
  }

  /// A message that can be called on instantiated contracts.
  /// This one flips the value of the stored \`bool\` from \`true\`
  /// to \`false\` and vice versa.
  function flip() public {
    value = !value;
  }

  /// Simply returns the current value of our \`bool\`.
  function get() public view returns (bool) {
    return value;
  }
}
`;







export const defaultCodeSalah = `pragma solidity 0;

contract incrementer {
  uint32 private value;

  /// Constructor that initializes the int32 value to the given init_value.
  constructor(uint32 initvalue) {
    value = initvalue;
  }

  /// This increments the value by by.
  function inc(uint32 by) public {
    value += by;
  }

  /// Simply returns the current value of our uint32.
  function get() public view returns (uint32) {
    return value;
  }
}
`;