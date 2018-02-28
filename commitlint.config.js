module.exports = {
   extends: ['@commitlint/config-angular'],
   rules: {
      'subject-case': [2, 'always', 'sentence-case'],
      'type-enum': [
         2,
         'always',
         [
            'feat',
            'fix',
            'docs',
            'style',
            'refactor',
            'test',
            'revert',
            'build',
            'ci',
            'chore',
         ],
      ],
   },
};
