export default {
  data: [
    {
      name: 'John',
      email: 'john2@mail.com',
      disabled: true,
    },
    {
      name: 'John',
      email: 'john1@mail.com',
      disabled: true,
    },
    {
      name: 'Jane',
      email: 'jane@mail.com',
      disabled: false,
    },
    {
      name: 'John',
      email: 'john0@mail.com',
      disabled: true,
    },
  ],
  condition: {
    exclude: [
      {
        disabled: true,
      },
    ],
    sort_by: ['email'],
  },
};
