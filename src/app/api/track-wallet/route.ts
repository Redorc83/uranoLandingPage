import { NextResponse } from "next/server";
import { getPool } from "@/server/db";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    wallet?: string;
    ref?: string;
  };

  if (!body.wallet || !body.ref) {
    return NextResponse.json(
      { error: "wallet and ref are required" },
      { status: 400 },
    );
  }

  const wallet = body.wallet.toLowerCase();
  const ref = body.ref;

  try {
    const pool = await getPool();
    await pool.query(
      "INSERT INTO wallet_refs (wallet, ref_code) VALUES ($1, $2) ON CONFLICT (wallet) DO NOTHING",
      [wallet, ref],
    );
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[track-wallet] error:", err);
    return NextResponse.json({ error: "internal error" }, { status: 500 });
  }
}
