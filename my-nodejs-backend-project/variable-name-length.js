module.exports = {
    create(context) {
      return {
        VariableDeclarator(node) {
          const { id } = node;
          const name = id.name;
          if (name.length < 5 || name.length > 20) {
            context.report({
              node,
              message: 'Variable names must be between 5 and 20 characters long.'
            });
          }
        }
      };
    }
  };
  