module.exports = {
  plugins: [
    '@babel/plugin-proposal-export-default-from'
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: 3,
        useBuiltIns: 'entry'
      }
    ],
    '@babel/preset-react'
  ]
}
