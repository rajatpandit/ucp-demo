import { NextResponse } from 'next/server';
import { MOCK_MANIFESTS } from '@/lib/mock-data';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  // Simulate network latency per merchant (variable)
  const latency = Math.floor(Math.random() * 500) + 500;
  await new Promise((resolve) => setTimeout(resolve, latency));

  const { id } = await params;
  const merchantId = id;
  const manifest = MOCK_MANIFESTS[merchantId];

  if (!manifest) {
    return NextResponse.json({ error: "Merchant not found" }, { status: 404 });
  }

  return NextResponse.json(manifest);
}
