import { NextApiRequest, NextApiResponse } from "next";

export default async function tempo(req: NextApiRequest, res: NextApiResponse) {
  res.json({
    date: (new Date()).toISOString()
  })
}
