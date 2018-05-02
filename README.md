# jQuery expression for filtering input elements using [dayjs](https://www.npmjs.com/package/dayjs).

- [source](jquery.dayjs.js)
- [changelog](CHANGELOG.md)

## Installation

```
npm install mu-jquery-dayjs
```

```
bower install mu-jquery-dayjs
```

## Installation

```javascript
// AMD
require(["jquery", "mu-jquery-dayjs/jquery.dayjs"], function($, $dayjs) {
  $.expr[":"].dayjs = $dayjs($);
});

// CJS
$.expr[":"].dayjs  = require("mu-jquery-dayjs/jquery.dayjs")($);

// Global
$.expr[":"].dayjs  = window["mu-jquery-dayjs/jquery.dayjs"]($);
```

## Usage

The format for the selecor is `<op>(=+-)<time>`

Supported `op`:

- `isSame`
- `isBefore`
- `isAfter`

Supported `time`

- `=(yyyy-mm-dd)` for absolute dates
- `(+|-)\d(years|months|days|minutes|seconds)` for relative dates

```javascript
// Select all elements where the date equals 1999-01-01
$("input[type=date]:dayjs(isSame=1999-01-01)");
```

```javascript
// Select all elements where the date is one day ago
$("input[type=date]:dayjs(isSame-1days)");
```

```javascript
// Select all elements where the date is one hour from now
$("input[type=date]:dayjs(isSame+1hours)");
```

```javascript
// Select all elements where the date is before 1 year from now
$("input[type=date]:dayjs(isBefore-1hours)");
```

```javascript
// Select all elements where the date is after 1 month from now
$("input[type=date]:dayjs(isAfter+1months)");
```
