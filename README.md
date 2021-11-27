crystaland
==========



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/crystaland.svg)](https://npmjs.org/package/crystaland)
[![CircleCI](https://circleci.com/gh/sweetliquid/crystaland/tree/master.svg?style=shield)](https://circleci.com/gh/sweetliquid/crystaland/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/crystaland.svg)](https://npmjs.org/package/crystaland)
[![License](https://img.shields.io/npm/l/crystaland.svg)](https://github.com/sweetliquid/crystaland/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g crystaland
$ crystaland COMMAND
running command...
$ crystaland (-v|--version|version)
crystaland/0.0.0 darwin-arm64 node-v14.18.1
$ crystaland --help [COMMAND]
USAGE
  $ crystaland COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`crystaland hello [FILE]`](#crystaland-hello-file)
* [`crystaland help [COMMAND]`](#crystaland-help-command)

## `crystaland hello [FILE]`

describe the command here

```
USAGE
  $ crystaland hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ crystaland hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/sweetliquid/crystaland/blob/v0.0.0/src/commands/hello.ts)_

## `crystaland help [COMMAND]`

display help for crystaland

```
USAGE
  $ crystaland help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.7/src/commands/help.ts)_
<!-- commandsstop -->
