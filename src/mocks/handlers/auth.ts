import { http, HttpResponse } from 'msw';
import { users } from '../data/users';

export const authHandlers = [
  http.post('/login', async ({ request }) => {
    const body = (await request.json()) as
      | { email?: string; password?: string }
      | null;

    if (!body?.email || !body?.password) {
      return HttpResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    const user = users.find(
      u => u.email === body.email && u.password === body.password
    );

    if (!user) {
      return HttpResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    return HttpResponse.json({
      accessToken: 'fake-token',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  })
];