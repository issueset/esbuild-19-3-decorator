function createMyDecorator(prefix) {
  function myDecoratorWithPrefix(value, { kind, name }) {
    if (kind === 'class') {
      return class extends value {
        constructor(...args) {
          super(...args)
          console.log(
            `[${prefix}] constructing an instance of ${name} with arguments ${args.join(
              ', ',
            )}`,
          )
        }
      }
    }
  }

  return myDecoratorWithPrefix
}


const myDecorator = createMyDecorator("")


module.exports = { createMyDecorator, myDecorator }
