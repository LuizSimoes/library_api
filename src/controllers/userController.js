const service = require('../services/serviceUser');
const {
  created,
  conflict,
  badRequest,
  regexEmail,
  unauthorized,
  OK,
  forbidden,
} = require('../utils/messages');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const role = 'user';
  if (!name || !email || !password) {
    return res.status(badRequest).json({ mensagem: 'Entradas inválidas. Tente novamente.' });
   }
  const emailNotExist = await service.emailExist(name, email, password);
  if (!regexEmail.test(email)) {
    return res.status(badRequest)
    .json({ message: 'Invalid entries. Try again.' });
  }
  if (!emailNotExist) return res.status(conflict).json({ mensagem: 'E-mail já registrado' });
  const newUser = await service.userCreate(name, email, password, role);
  res.status(created).json(newUser);
};

module.exports = {
  createUser,
};
