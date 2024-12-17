import { NextResponse } from "next/server";
import axios from 'axios';

export async function GET(
  req: Request,
  { params }: { params: { docName: string } }
) {
  try {
    const { docName } = params;
    console.log("[INDEXING_STATUS_GET] Checking status for doc:", docName);

    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/indexing_status/${docName}`,
        {
          headers: {
            'Accept': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
          },
          responseType: 'stream',
          timeout: 5000 // 5 second timeout
        }
      );

      const data = response.data;
      console.log("[INDEXING_STATUS_GET] Status stream received");

      // Convert stream to JSON
      let statusData = '';
      data.on('data', (chunk: Buffer) => {
        statusData += chunk.toString();
      });

      return new Promise((resolve) => {
        data.on('end', () => {
          try {
            const parsedData = JSON.parse(statusData);
            console.log("[INDEXING_STATUS_GET] Parsed status:", parsedData);

            // Ensure the response has the expected structure
            const status = {
              urls_processed: parsedData.urls_processed || 0,
              urls_queued: parsedData.urls_queued || 0,
              status: parsedData.status || 'unknown',
              error: parsedData.error || null
            };

            resolve(NextResponse.json(status));
          } catch (parseError) {
            console.error("[INDEXING_STATUS_GET] Failed to parse status:", parseError);
            resolve(NextResponse.json({
              urls_processed: 0,
              urls_queued: 0,
              status: 'error',
              error: 'Failed to parse indexing status'
            }, { status: 500 }));
          }
        });
      });
      
    } catch (fetchError: any) {
      console.error("[INDEXING_STATUS_GET] API request error:", {
        error: fetchError,
        message: fetchError.message,
        code: fetchError.code,
        response: fetchError.response ? {
          status: fetchError.response.status,
          data: fetchError.response.data
        } : 'No response'
      });
      
      // Handle ECONNREFUSED specifically
      if (fetchError.code === 'ECONNREFUSED') {
        return NextResponse.json({
          urls_processed: 0,
          urls_queued: 0,
          status: 'error',
          error: 'Indexing service is not running'
        }, { status: 503 });
      }

      // Handle timeout
      if (fetchError.code === 'ETIMEDOUT') {
        return NextResponse.json({
          urls_processed: 0,
          urls_queued: 0,
          status: 'error',
          error: 'Indexing service timeout'
        }, { status: 504 });
      }

      // Handle other API errors
      if (fetchError.response) {
        return NextResponse.json({
          urls_processed: 0,
          urls_queued: 0,
          status: 'error',
          error: fetchError.response.data
        }, { status: fetchError.response.status });
      }
      
      // Generic error response
      return NextResponse.json({
        urls_processed: 0,
        urls_queued: 0,
        status: 'error',
        error: 'Failed to connect to indexing service'
      }, { status: 500 });
    }
  } catch (error: any) {
    console.error("[INDEXING_STATUS_GET] Unexpected error:", error);
    return NextResponse.json({
      urls_processed: 0,
      urls_queued: 0,
      status: 'error',
      error: error.message || 'Internal Server Error'
    }, { status: 500 });
  }
}
