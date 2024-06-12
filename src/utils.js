module.exports = {
  /**
   * Generates a session id
   * @function genSessionID
   * @param {String} type Session type
   * @returns {string}
   */
  genSessionID(type = 'xs') {
    let r = '';
    const c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 12; i += 1) r += c.charAt(Math.floor(Math.random() * c.length));
    return `${type}_${r}`;
  },
  /**
   * Check if indicator output name is valid
   * @param {String} name
   * @returns {boolean}
   */
  checkOutputName(name) {
    return name?.match(/^st_[A-Za-z0-9]{12}\$\d$/);
  },
};
