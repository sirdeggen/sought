# @moneybutton/config

![banner](assets/blue-white.png)

[![npm version](https://badge.fury.io/js/%40moneybutton%2Fconfig.svg)](https://badge.fury.io/js/%40moneybutton%2Fconfig)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Money Button configuration.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Maintainers](#maintainers)
- [Contribute](#contribute)
- [License](#license)

## Background

[Money Button](https://www.moneybutton.com) is a UI/UX and API layer for the blockchain which takes 0% transaction fees and makes Bitcoin SV easy for everyone, everywhere.

## Install

```
yarn add -E @moneybutton/config
```

or

```
npm install --exact @moneybutton/config
```

## Usage

```
const MoneyButtonConfigBuilder = require('@moneybutton/config')
const config = new MoneyButtonConfigBuilder()
  .addValue('SOME_REQUIRED_VALUE', process.env.SOME_REQUIRED_VALUE)
  .addValueWithDefault('SOME_OPTIONAL_VALUE', process.env.SOME_OPTIONAL_VALUE, '42')
  .build()
console.log(config.get('SOME_OPTIONAL_VALUE')) // '42'
```

## API

For in-detail API documentation, please see our automatically generated [docs](https://htmlpreview.github.io/?https://github.com/moneybutton/config/blob/master/docs/index.html).

## Maintainers

[@ealmansi](https://github.com/ealmansi)
[@hojarasca](https://github.com/hojarasca)
[@kevinejohn](https://github.com/kevinejohn)
[@ryanxcharles](https://github.com/ryanxcharles)

## Contribute

PRs accepted.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.
