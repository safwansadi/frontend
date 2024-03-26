import { apiBaseUrl } from "@/app/utils/env";

export async function GET(request: Request) {
  try {
    const response = await fetch(`${apiBaseUrl}/api/animal`, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const responseData = await response.json();

    console.log("responseData", responseData)
    
    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}
