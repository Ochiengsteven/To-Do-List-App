module.exports = {
  ci: {
    collect: {
      staticDistDir: '.',
      settings: {
        skipAudits: ['*'], // Disable all audits
      },
    },
  },
};
