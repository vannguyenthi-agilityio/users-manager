import { rest } from 'msw';
import { setStorage, getStorage, uuid, genReferralCode } from './helpers';

export const handlers = [
  // Provide request handlers
  // Handles a POST /register request
  rest.post('/register', async (req, res, ctx) => {
    const data = await req.json();
    const existingData = getStorage('users')
      ? JSON.parse(getStorage('users'))
      : [];

    // 1 - Invalid account
    // 2 - Existing user
    if (data && existingData.find((item) => item.username === data.username)) {
      return res(
        // Respond with a 200 status code
        ctx.status(400),
        ctx.json({
          errorMessage: 'User has already been existing'
        })
      );
    }

    // Generate new user
    const newUser = {
      ...data,
      id: uuid(),
      referralCode: genReferralCode(),
      otp: '123456'
    };
    existingData.push(newUser);

    // Save back to localStorage
    setStorage('users', JSON.stringify(existingData));
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(newUser)
    );
  }),

  // Handles a POST /login request
  rest.post('/login', async (req, res, ctx) => {
    const { username, otp } = await req.json();
    const existingData = getStorage('users')
      ? JSON.parse(getStorage('users'))
      : [];
    if (
      existingData.find(
        (item) => item.username === username && item.otp === otp
      )
    ) {
      return res(
        // Respond with a 200 status code
        ctx.status(200)
      );
    } else {
      return res(
        // Respond with a 200 status code
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized'
        })
      );
    }
  }),

  // Handles a GET /user request
  rest.get('/user/:id', (req, res, ctx) => {
    const { id } = req.params;
    // const userId = req.url.searchParams.get('userId')
    // Check if the user is authenticated in this session
    const existingData = getStorage('users')
      ? JSON.parse(getStorage('users'))
      : [];
    const user = existingData.find((item) => id && item.id === id);
    if (user) {
      // If authenticated, return a mocked user details
      return res(ctx.status(200), ctx.json(user));
    } else {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized'
        })
      );
    }
  })
];
