import { Command, flags } from '@oclif/command'
import * as globby from 'globby'
import * as path from 'node:path'
import sizeOf from 'image-size'
import * as dedent from 'dedent'
import { escapeRegExp } from 'lodash'
import * as fs from 'node:fs/promises'

export default class AddStyles extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: 'f' }),
    input: flags.string({
      char: 'i',
      description: 'images path',
    }),
    output: flags.string({
      char: 'o',
      description: 'styles path',
    }),
  }

  static args = [{ name: 'file' }]

  async run() {
    const { args, flags } = this.parse(AddStyles)
    const { name = 'world', input = 'images', output = 'styles', force } = flags

    this.log(`hello ${name} from /Users/sweetliquid/repos/crystaland/src/commands/add/styles.ts`)
    if (args.file && force) {
      this.log(`you input --force and --file: ${args.file}`)
    }

    const paths = await globby(path.join(input, '**'))
    const styles = paths
      .map((x) => {
        // TODO: 2021/11/27 sweetliquid 计算 output 和 input 的相对路径，并添加到 background-image 的前缀中
        const filepath = path.parse(x)
        const className = path
          .join(
            filepath.dir.slice(Math.max(0, input.length + path.delimiter.length)),
            filepath.name
          )
          .replace(/@\d+x/, '')
          .replace(new RegExp(escapeRegExp(path.sep), 'g'), '-')

        const size = sizeOf(x)

        return dedent`
          .${className} {
            width: ${size.width}px;
            height: ${size.height}px;
            background-image: url('../${x}');
          }
        `
      })
      .join('\n')

    await fs.mkdir(output, { recursive: true })
    await fs.writeFile(path.join(output, 'images.scss'), styles)
  }
}
