const Services = jest.genMockFromModule('../../services/UsersService');

function create(body) {
  const keys = ['email', 'first_name', 'last_name'];
  const newUser = {
    "_id": "5eaa3d0977f826805ad5f89e",
    "is_active": true,
    "first_name": "Maui",
    "last_name": "Saavedra",
    "email": "maui@devf.mx",
    "__v": 2,
    "books": [],
    "roles": [],
    "profile_img": "http://res.cloudinary.com/dplkcfxqf/image/upload/v1588987869/jnwa9t2vbqejcn40pnf2.png"
  };
  return new Promise((resolve) => {
    if (keys.every(key => Object.keys(body).includes(key))) {
      resolve(newUser);
    }
    throw new Error("Mongo error");
  });
}

Services.create = create;

module.exports = Services;
