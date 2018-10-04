module.exports = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api/v1/backoffice': {
        target: 'https://frozen-brook-96679.herokuapp.com',
        ws: true,
        changeOrigin: true
      }
    }
  },
  lintOnSave: process.env.NODE_ENV !== 'production'
}
