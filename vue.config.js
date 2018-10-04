module.exports = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api/v1/backoffice': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true
      }
    }
  },
  lintOnSave: process.env.NODE_ENV !== 'production'
}
