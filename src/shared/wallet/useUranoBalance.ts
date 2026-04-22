'use client';

import { useEffect, useState } from 'react';
import { Contract, JsonRpcProvider, formatUnits } from 'ethers';
import { ERC20_ABI, TOKEN_ADDRESS, TOKEN_DECIMALS } from '@/shared/constants';

const ARBITRUM_RPC = 'https://arb1.arbitrum.io/rpc';

export function useUranoBalance(address: string | null): { balance: number; loading: boolean } {
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!address) {
      setBalance(0);
      setLoading(false);
      return;
    }
    let cancelled = false;
    setLoading(true);
    void (async () => {
      try {
        const provider = new JsonRpcProvider(ARBITRUM_RPC);
        const token = new Contract(TOKEN_ADDRESS, ERC20_ABI, provider);
        const raw = await token.balanceOf!(address);
        if (!cancelled) setBalance(parseFloat(formatUnits(raw, TOKEN_DECIMALS)));
      } catch {
        if (!cancelled) setBalance(0);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [address]);

  return { balance, loading };
}
