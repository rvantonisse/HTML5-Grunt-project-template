# Grunt html5 project Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- PostCss (autoprefixer, cssnext)
- Linting (esLint, stylelint)
- Tidy html

### Changed
- Refactor prompts used for create-* and remove-* tasks

### Updated
- GruntJS to current version

---

## [2.0.0] - 2017-07-09

### Added
- Templates
  - Nunjucks date filter
  - Site data, accessible with {{ site.[ title, date, menu, meta ] }}

### Changed
- Templates
  - All media (images, files, audio) should now be placed inside source/media. All dirs within views will be read as being a (sub)view.
  - View data is now all imported inside data.view.
- html compiler refactored and optimized

### Deprecated
- Templates
  - View data model key "menu-order" changed to "order".
  - {{ viewData }}, use {{ view }}.
    Anything inside the view.json will go there.

---

## [1.0.0] - 2015-07-01
### Added
- Initial commit
