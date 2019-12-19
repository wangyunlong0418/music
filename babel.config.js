module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}], // 修饰器
    ['@babel/transform-runtime', {helpers: true, regenerator: false}],
  ],
};
