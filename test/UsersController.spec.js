jest.mock('../services/UsersService', () => jest.requireActual('../services/_mock_/UsersService.js'));
const { create } = require('../controller/UsersController');

describe('Users', () => {
  describe('Create', () => {
    it('Create', async () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      const req = {
        body: {
          email: 'maui@devf.mx',
          first_name: 'Maui',
          last_name: 'Saavedra',
        },
      };
      await create(req, res);
      expect(res.status.mock.calls).toEqual([[201]]);
      expect(res.send.mock.calls).toEqual([[expect.objectContaining({ is_active: true })]]);
    });

    it('Error Create', async () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      const req = {
        body: {
          first_name: 'Maui',
          last_name: 'Saavedra',
        },
      };
      await create(req, res);
      expect(res.status.mock.calls).toEqual([[400]]);
    });
  });
  // describe('Update', () => {
  //   it('Update', async () => {
  //     const res = {
  //       status: jest.fn().mockReturnThis(),
  //       send: jest.fn(),
  //     };
  //     const req = {
  //       body: {
  //         email: 'mauricio@devf.mx',
  //       },
  //     };
  //     await update(req, res);
  //     expect(res.status.mock.calls).toEqual([[200]]);
  //     expect(res.send.mock.calls).toEqual([[expect.objectContaining({ email: 'mauricio@devf.mx' })]]);
  //   });
  // });
});
