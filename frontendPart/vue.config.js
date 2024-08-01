
/*module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        logLevel: 'debug', // Proxy loglarını detaylı görmek için
        ws: true, // WebSocket proxy desteği
      },
    },
  },
};*/

module.exports={
    devServer:{
      proxy: 'http://localhost:8000',
    },
}

