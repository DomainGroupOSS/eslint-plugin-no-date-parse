# eslint-plugin-no-date-parse

Stop users parsing ISO strings using Date due to browser quirks

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-date-parse`:

```
$ npm install eslint-plugin-no-date-parse --save-dev
```


## Usage

Add `no-date-parse` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-date-parse"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-date-parse/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





