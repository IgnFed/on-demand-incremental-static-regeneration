// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiResponse, NextApiRequest } from "next"

/**
 * @param {NextApiRequest} req 
 * @param {NextApiResponse} res 
 */

export default async function handler(req, res) {
  console.log("[Next.js] Revalidating...")
  let revalidate = false
  try{
    await res.unstable_revalidate('/')
    revalidate = true
  }catch(err){
    console.log("Something was wrong with revalidation")
  }
  res.json({
    revalidate
  })
}
