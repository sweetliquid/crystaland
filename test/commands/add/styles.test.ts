import {expect, test} from '@oclif/test'

describe('add:styles', () => {
  test
  .stdout()
  .command(['add:styles'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['add:styles', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
