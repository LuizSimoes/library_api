const service = require('../services/serviceUser');
const createToken = require('../auth/createToken');
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
    return res.status(badRequest).json({ falha: 'Entradas inválidas. Tente novamente.' });
   }
  const emailNotExist = await service.emailExist(name, email, password);
  if (!regexEmail.test(email)) {
    return res.status(badRequest)
    .json({ falha: 'Entradas inválidas. Tente novamente.' });
  }
  if (!emailNotExist) return res.status(conflict).json({ falha: 'E-mail já registrado.' });
  const newUser = await service.userCreate(name, email, password, role);
  res.status(created).json(newUser);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(unauthorized).json({ falha: 'Todos os campos devem ser preenchidos.' });
  }
  if (typeof password !== 'string') {
  return res.status(unauthorized).json({ falha: 'Usuário ou senha incorretos' });
  }
  const emailFounded = await service.findByEmail(email);
  if (!emailFounded || emailFounded.password !== password) {
    return res.status(unauthorized).json({ falha: 'Usuário ou senha incorretos' });
  }
  // "_" serve para evitar conflito com o password do body
  const { password: _, ...userWithoutPassword } = emailFounded;
  const payload = userWithoutPassword;
  const token = createToken.createToken(payload);
  return res.status(OK).json({ token });
};

module.exports = {
  createUser,
  loginUser,
};
