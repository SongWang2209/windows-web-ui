module.exports = {
  root: true,
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'airbnb-base',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': 'off',
    'max-len': 'off', // 强制一行的最大长度
    'import/extensions': 'off', // 不验证导入文件扩展名
    'vue/multi-word-component-names': 'off', // 不校验vue组件名称
    'no-shadow': 'off', // 禁止变量声明与外层作用域的变量同名
    'import/no-cycle': 'error', // 禁止一个模块导入一个有依赖路径的模块回到自己身上
    semi: ['error', 'never'], // 不使用分号
    eqeqeq: 'warn', // 要求使用 === 和 !==
    'no-param-reassign': 'off', // 允许 function 的参数进行重新赋值
    'import/prefer-default-export': 'off', // 禁用默认输出
    'default-case': 'error', // switch 必须使用 default
    'no-restricted-syntax': 'off', // 禁用特定的语法
    'no-await-in-loop': 'error', // 禁止在循环中出现 await
    'import/no-unresolved': 'off', // 确保导入指向一个可以解析的文件/模块
    '@typescript-eslint/no-var-requires': 'off', // 允许require
    'no-use-before-define': 'off', // 允许定义之前使用
    'vue/max-attributes-per-line': [ // 强制每行属性的最大数量
      'warn',
      {
        singleline: {
          max: 3,
        },
        multiline: {
          max: 1,
        },
      },
    ],
  },
}
