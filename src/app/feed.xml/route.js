// This route is intentionally left blank because the feed feature is not used and the articles directory has been removed.a
export async function GET() {
  return new Response('', {
    status: 404,
    headers: {
      'content-type': 'text/plain',
    },
  })
}
