const { Router } = require('express');
const { pool } = require('../db.js');

const router = Router();

router.post('/', async (req, res) => {
  let { wallet, ref } = req.body;

  if (!wallet || !ref) {
    return res.status(400).json({ error: 'wallet and ref are required' });
  }

  wallet = wallet.toLowerCase();

  try {
    // First write wins: once a wallet is linked to a referral, never overwrite it.
    await pool.query(
      'INSERT INTO wallet_refs (wallet, ref_code) VALUES ($1, $2) ON CONFLICT (wallet) DO NOTHING',
      [wallet, ref]
    );
    res.json({ success: true });
  } catch (err) {
    console.error('[track-wallet] error:', err.message);
    res.status(500).json({ error: 'internal error' });
  }
});

module.exports = router;
