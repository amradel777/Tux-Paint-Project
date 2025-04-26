import type { NextApiRequest, NextApiResponse } from 'next'

// This route is now deprecated. Use /api/tuxpaint/run directly instead.
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Redirect to the new implementation
  return res.redirect('/api/tuxpaint/run')
}

export default handler