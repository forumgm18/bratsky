'use strict';

/* параметры для gulp-autoprefixer */
var autoprefixerList = [
    'Chrome >= 45',
    'Firefox ESR',
    'Edge >= 12',
    'Explorer >= 10',
    'iOS >= 9',
    'Safari >= 9',
    'Android >= 4.4',
    'Opera >= 30'
];

/* пути к исходным файлам (src), к готовым файлам (build), а также к тем, за изменениями которых нужно наблюдать (watch) */
var path = {
    build: {
        html: 'assets/build/',
          js: 'assets/build/js/',
         css: 'assets/build/css/',
     jsOther: 'assets/build/js/other',
    cssOther: 'assets/build/css/other', // путь для  остальных файлов
         img: 'assets/build/img/',
       fonts: 'assets/build/fonts/',
         tpl: 'assets/build/tpl'  
    },
    src: {
        baseDir: 'assets/src',
            tpl: 'assets/src/tpl/*.html',  
           html: ['assets/src/*.html','!assets/src/tpl/**'],
             js: 'assets/src/js/main.js',
      jsplugins: 'assets/src/js/plugins/*.js',
          style: 'assets/src/style/main.scss',
     cssplugins: 'assets/src/style/plugins/*.css',
        jsOther: 'assets/src/js/other/*.js',
 scssOtherPages: 'assets/src/style/other/*-style.scss', // стили остальных файлов
            img: 'assets/src/img/**/*.*',
          fonts: 'assets/src/fonts/**/*.*'
    },
    watch: {
        // html: 'assets/src/**/*.html',
        html: ['assets/src/**/*.html','!assets/src/tpl/**'],
         tpl: 'assets/src/tpl/*.html',  
          js: 'assets/src/js/**/*.js',
         css: 'assets/src/style/**/*.scss',
         img: 'assets/src/img/**/*.*',
       fonts: 'assets/srs/fonts/**/*.*'
    },
    clean: './assets/build/*'
};

/* настройки сервера */
var config = {
    server: { baseDir: './assets/build' },
    notify: false
};

/* подключаем gulp и плагины */
var gulp = require('gulp'),  // подключаем Gulp
    webserver = require('browser-sync'), // сервер для работы и автоматического обновления страниц
    plumber = require('gulp-plumber'), // модуль для отслеживания ошибок
    sourcemaps = require('gulp-sourcemaps'), // модуль для генерации карты исходных файлов
    sass = require('gulp-sass'), // модуль для компиляции SASS (SCSS) в CSS
    autoprefixer = require('gulp-autoprefixer'), // модуль для автоматической установки автопрефиксов
    cleanCSS = require('gulp-clean-css'), // плагин для минимизации CSS
    uglify = require('gulp-uglify'), // модуль для минимизации JavaScript
    cache = require('gulp-cache'), // модуль для кэширования
    imagemin = require('gulp-imagemin'), // плагин для сжатия PNG, JPEG, GIF и SVG изображений
    jpegrecompress = require('imagemin-jpeg-recompress'), // плагин для сжатия jpeg	
    pngquant = require('imagemin-pngquant'), // плагин для сжатия png
    del = require('del'), // плагин для удаления файлов и каталогов
    rename = require('gulp-rename'),
    fileinclude = require('gulp-file-include'); // модуль для импорта содержимого одного файла в другой

/* задачи */

// запуск сервера
gulp.task('webserver', function () {
    webserver(config);
});

// сбор html
gulp.task('html:build', function () {
    return gulp.src(path.src.html) // выбор всех html файлов по указанному пути
        .pipe(plumber()) // отслеживание ошибок
        .pipe(fileinclude({ // импорт вложений
              prefix: '@@',
              basepath: path.src.baseDir
            }))        
        .pipe(gulp.dest(path.build.html)) // выкладывание готовых файлов
        .pipe(webserver.reload({ stream: true })); // перезагрузка сервера
});

// сбор html tpl
gulp.task('tpl:build', function () {
    return gulp.src(path.src.tpl) // выбор всех html файлов по указанному пути
        .pipe(plumber()) // отслеживание ошибок
        .pipe(fileinclude({ // импорт вложений
              prefix: '@@',
              basepath: path.src.baseDir
            }))        
        .pipe(gulp.dest(path.build.tpl)) // выкладывание готовых файлов
        .pipe(webserver.reload({ stream: true })); // перезагрузка сервера
});

// сбор стилей
gulp.task('css:build', function () {
    return gulp.src(path.src.style) // получим main.scss
        .pipe(plumber()) // для отслеживания ошибок
        .pipe(sourcemaps.init()) // инициализируем sourcemap
        .pipe(sass()) // scss -> css
        .pipe(autoprefixer({browsers: autoprefixerList})) // добавим префиксы
        .pipe(gulp.dest(path.build.css))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleanCSS()) // минимизируем CSS
        .pipe(sourcemaps.write('./')) // записываем sourcemap
        .pipe(gulp.dest(path.build.css)) // выгружаем в build
        .pipe(webserver.reload({ stream: true })); // перезагрузим сервер
});

// сбор js
gulp.task('js:build', function () {
    return gulp.src(path.src.js) // получим файл main.js
        .pipe(plumber()) // для отслеживания ошибок
        .pipe(fileinclude({ // импортируем все указанные файлы в main.js
              prefix: '@@',
              basepath: '@root'
            }))        

        .pipe(gulp.dest(path.build.js))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.init()) //инициализируем sourcemap
    //    .pipe(uglify()) // минимизируем js
        .pipe(sourcemaps.write('./')) //  записываем sourcemap
        .pipe(gulp.dest(path.build.js)) // положим готовый файл
        .pipe(webserver.reload({ stream: true })); // перезагрузим сервер
});

// перенос other js
gulp.task('jsOther:build', function () {
    return gulp.src(path.src.jsOther)
        .pipe(gulp.dest(path.build.jsOther));
});

// перенос шрифтов
gulp.task('fonts:build', function () {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
});
//===================================
// перенос css для плагинов
gulp.task('cssplugins:build', function () {
    return gulp.src(path.src.cssplugins)
        .pipe(gulp.dest(path.build.css));
});
// перенос css для других страниц
gulp.task('scssOtherPages:build', function () {
      return gulp.src(path.src.scssOtherPages) // получим все scss в папке other
        .pipe(plumber()) // для отслеживания ошибок
        //.pipe(sourcemaps.init()) // инициализируем sourcemap
        .pipe(sass()) // scss -> css
        .pipe(autoprefixer({ // добавим префиксы
            browsers: autoprefixerList
        }))
        //.pipe(gulp.dest(path.build.cssOther))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cleanCSS()) // минимизируем CSS
        //.pipe(sourcemaps.write('./')) // записываем sourcemap
        .pipe(gulp.dest(path.build.cssOther)) // выгружаем в build
        .pipe(webserver.reload({ stream: true })); // перезагрузим сервер
});


// перенос js плагинов
gulp.task('jsplugins:build', function () {
    return gulp.src(path.src.jsplugins)
        .pipe(gulp.dest(path.build.js));
});

// обработка картинок
gulp.task('image:build', function () {
    return gulp.src(path.src.img) // путь с исходниками картинок
        .pipe(cache(imagemin([ // сжатие изображений
            imagemin.gifsicle({ interlaced: true }),
            jpegrecompress({
                progressive: true,
                max: 90,
                min: 80
            }),
            pngquant(),
            imagemin.svgo({ plugins: [{ removeViewBox: false }] })
        ])))
        .pipe(gulp.dest(path.build.img)); // выгрузка готовых файлов
});

// удаление каталога build 
gulp.task('clean:build', async function () {
    return del.sync(path.clean);
});

// очистка кэша
gulp.task('cache:clear', function () {
    cache.clearAll();
});

// сборка
gulp.task('build',
    gulp.series('clean:build',
        gulp.parallel(
            'tpl:build',
            'html:build',
            'css:build',
            'cssplugins:build',
            'scssOtherPages:build',
            'js:build',
            'jsOther:build',
            'jsplugins:build',
            'fonts:build',
            'image:build'
        )
    )
);

// запуск задач при изменении файлов
gulp.task('watch', function () {
    gulp.watch(path.watch.html, gulp.series('html:build'));
    gulp.watch(path.watch.tpl, gulp.series('tpl:build'));
    gulp.watch(path.watch.css, gulp.series('css:build'));
    gulp.watch(path.watch.css, gulp.series('scssOtherPages:build'));
    gulp.watch(path.watch.css, gulp.series('cssplugins:build'));
    gulp.watch(path.watch.js, gulp.series('js:build'));
    gulp.watch(path.watch.js, gulp.series('jsOther:build'));
    gulp.watch(path.watch.js, gulp.series('jsplugins:build'));
    gulp.watch(path.watch.img, gulp.series('image:build'));
    gulp.watch(path.watch.fonts, gulp.series('fonts:build'));
});

// задача по умолчанию
gulp.task('default', gulp.series(
    'build',
    gulp.parallel('webserver','watch')      
));
