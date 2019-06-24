'use strict';

let gulp = require('gulp'),
    babel = require('gulp-babel'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cssmin = require('gulp-clean-css'),
    clean = require('gulp-clean'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync").create(),
    webpack = require('webpack'),
    webpackStream = require('webpack-stream'),
    postcss = require("gulp-postcss"),
    twig = require('gulp-twig'),
    VueLoaderPlugin = require('vue-loader/lib/plugin'),
    reload = browserSync.reload;
var path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: {
        html: 'src/html/*.twig',
        js: 'src/js/**/*.js',
        style: 'src/style/main.css',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    watch: {
        html: 'src/html/**/*.twig',
        js: 'src/js/**/*.*',
        style: 'src/style/**/*.css',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

gulp.task('clean', function (cb) {
    return rimraf('build/', cb);
});

gulp.task('html:build', function (cb) {
    del(['build/**/*.html']);

    return gulp.src(path.src.html)
        .pipe(twig())
        .pipe(gulp.dest(path.build.html))
});

gulp.task('js:dev', function () {
    return gulp.src(path.src.js)
        .pipe(webpackStream({
            entry: ["@babel/polyfill", "./src/js/app.js"],
            mode: 'development',
            output: {
                filename: 'app.js',
            },
            resolve: {
                alias: {
                    'vue$': 'vue/dist/vue.esm.js'
                },
                extensions: ['*', '.js', '.vue', '.json']
            },
            module: {
                rules: [
                    {
                        test: /\.(vue)$/,
                        loader: 'vue-loader'
                    },
                    {
                        test: /\.(js)$/,
                        exclude: /(node_modules)/,
                        loader: 'babel-loader',
                    },
                    {
                        test: /\.(postcss|css)$/,
                        use: [
                            'vue-style-loader',
                            {
                                loader: 'css-loader',
                                options: { importLoaders: 1 }
                            },
                            'postcss-loader'
                        ]
                    }

                ]
            },
            plugins: [
                new VueLoaderPlugin()
            ]
        }))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
});

gulp.task('js:build', function () {
    return gulp.src(path.src.js)
        .pipe(webpackStream())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
});

gulp.task('style:build', function () {
    return gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(postcss())
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
    del(['build/img/**/*']);
    return gulp.src(path.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

gulp.task('fonts:build', function () {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
        .pipe(reload({stream: true}));
});

gulp.task('build', gulp.series('clean', 'html:build', 'js:dev', 'style:build', 'image:build', 'fonts:build'));

gulp.task('prod', gulp.series('clean', 'html:build', 'js:build', 'style:build', 'image:build', 'fonts:build'));

gulp.task('reload', function () {
    browserSync.reload();
});

gulp.task('watch', function () {
    watch(path.watch.html, gulp.series('html:build')).on('change', browserSync.reload);
    watch(path.watch.style, gulp.series('style:build'));
    watch(path.src.fonts, gulp.series('fonts:build'));
    watch(path.watch.js, gulp.series('js:dev'));
    watch(path.src.img, gulp.series('image:build')).on('change', browserSync.reload);
});

gulp.task('server', function () {
    browserSync.init({
        server: './build',
        port: 8888
    })
});

gulp.task('dev', gulp.series('build', gulp.parallel('watch', 'server')));
gulp.task('build', gulp.series('prod'));

