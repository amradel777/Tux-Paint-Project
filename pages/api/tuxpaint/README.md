# Tux Paint Launcher API

This API provides endpoints to launch the Tux Paint application on Windows systems.

## Endpoints

### GET `/api/tuxpaint/run`

Launches Tux Paint if it's installed on the system.

#### Response

- **Success (200)**

  ```json
  {
    "status": "success",
    "message": "Tux Paint is running.",
    "path": "C:Program FilesTuxPaint\tuxpaint.exe"
  }
  ```

- **Error (404)**

  ```json
  {
    "status": "error",
    "message": "Tux Paint not found in common installation locations.",
    "checked_paths": ["C:\Program Files\TuxPaint\tuxpaint.exe", ...]
  }
  ```

- **Error (500)**
  ```json
  {
    "status": "error",
    "message": "Failed to launch Tux Paint: [error message]",
    "path": "C:Program FilesTuxPaint\tuxpaint.exe"
  }
  ```

## Implementation Details

This API replaces the Python Flask implementation (`tuxpaint_server.py`) with a Next.js API route. It checks common installation paths for Tux Paint on Windows systems and attempts to launch the application using Node.js child processes.

The implementation includes proper error handling and CORS configuration to allow cross-origin requests.
