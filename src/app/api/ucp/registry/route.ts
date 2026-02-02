import { NextResponse } from 'next/server';
import { MOCK_REGISTRY } from '@/lib/mock-data';

export async function GET() {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 800));
  
  return NextResponse.json({ 
    registry_version: "1.0",
    merchants: MOCK_REGISTRY 
  });
}
