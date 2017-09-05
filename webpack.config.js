module.exports = {
  entry: './src/main.js',                                   // Главный фаил, который включает все остальные модули
  output: {
    filename: './build/vue-timepickr.js',                      // Итоговый фаил, в который происходит компиляция
    library: 'VueTimepickr',
    libraryTarget: 'umd'
  },

resolve: {
      alias: {
        vue: 'vue/dist/vue.js'
      }
  },
  module: {
    loaders: [ // Специальные правила компиляции
        {
            test: /\.css$/,                                 // Если это фаил .css, то webpack запускает его
            loader: "style-loader!css-loader",              // спомощью style-loader и css-loader
            exclude: /node_modules/                         // Не преобразуем папку node_modules (её не нужно компилировать)
        },
        {
            test: /\.js$/,                                  // Если это фаил .js, то webpack запускает его
            loader: 'babel-loader',                         // спомощью babel
            exclude: /node_modules/                         // Не преобразуем папку node_modules (её не нужно компилировать)
        },
        {
            test: /\.vue$/,                                 // Если это фаил .vue, то запускаем некоторые преобразования
            loader: 'vue-loader'                            // преобразуем это используя vue
        }
      ]
   }
}
