// module.exports = {
//   preset: 'jest-expo',
//   transformIgnorePatterns: [
//     "node_modules/(?!(react-native|@react-native|@testing-library|react-clone-referenced-element)/)"
//   ],
// };


module.exports = {
  preset: 'jest-expo',
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native|@react-navigation|expo(nent)?|@expo(nent)?/.*|expo-modules-core|@expo/.*|@testing-library|react-clone-referenced-element|react-native-svg))"
  ]
};

