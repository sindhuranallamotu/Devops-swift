module.exports = {
    create(context) {
      return {
        VariableDeclarator(node) {
          const { id } = node;
          const name = id.name;
          if (!/^[a-z][a-zA-Z0-9]*$/.test(name)) {
            context.report({
              node,
              message: 'Variable names must be in camel case.'
            });
          }
        }
      };
    }
  };
  