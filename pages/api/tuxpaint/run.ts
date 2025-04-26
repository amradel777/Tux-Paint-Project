import type { NextApiRequest, NextApiResponse } from 'next';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import os from 'os';

// Common Tux Paint installation paths on Windows
const TUXPAINT_PATHS = [
  'C:\\Program Files\\TuxPaint\\tuxpaint.exe',
  'C:\\Program Files (x86)\\TuxPaint\\tuxpaint.exe',
  path.join(os.homedir(), 'AppData\\Local\\TuxPaint\\tuxpaint.exe')
];

type ResponseData = {
  status: string;
  message: string;
  path?: string;
  checked_paths?: string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Check each path and try to launch Tux Paint
  for (const path of TUXPAINT_PATHS) {
    if (fs.existsSync(path)) {
      try {
        spawn(path, [], { detached: true });
        return res.status(200).json({
          status: 'success',
          message: 'Tux Paint is running.',
          path: path
        });
      } catch (e) {
        return res.status(500).json({
          status: 'error',
          message: `Failed to launch Tux Paint: ${e instanceof Error ? e.message : String(e)}`,
          path: path
        });
      }
    }
  }

  // If Tux Paint is not found in any of the paths
  return res.status(404).json({
    status: 'error',
    message: 'Tux Paint not found in common installation locations.',
    checked_paths: TUXPAINT_PATHS
  });
}