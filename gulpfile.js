/**
 * postcss 测试
 */

const conf = {};
conf.rootpath = "/Users/wangxin/Downloads/studies/tysx/work";
conf.projectPath = conf.rootpath + '/dist'
const detailcss = [
  conf.rootpath + '/css/*.css'
];

const gulp = require('gulp'),
  minifycss = require('gulp-clean-css'), // 压缩css
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  postcss = require('gulp-postcss'),
  // precss = require('precss'),
  autoprefixer = require('autoprefixer');
const mergeCss = () => {
  return gulp.src(detailcss)
    .pipe(concat('d.css')) // 合并
    .pipe(postcss([
      autoprefixer({
        // 兼容主流浏览器的版本
        overrideBrowserslist: [
          'last 10 versions',
          'Firefox >= 20',
          'Android >= 4.0',
          'iOS >= 8'
        ]
      }),
      // precss
    ]))
    .pipe(minifycss()) //压缩
    .pipe(rename('d.min.css'))
    .pipe(gulp.dest(conf.projectPath))
}

exports.default = mergeCss
// exports.default = function() {
//   watch(detailcss, mergeCss);
// };

console.log('dist => ', conf.projectPath);
