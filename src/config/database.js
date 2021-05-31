module.exports = {
  host: '127.0.0.1',
  username: 'docker',
  password: 'docker',
  database: 'tddpostgres',
  dialect: 'postgres',
  operatorsAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
};
