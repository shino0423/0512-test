import { defineEventHandler } from 'h3';

// API ハンドラを定義
export default defineEventHandler((event) => {
  return {
    api: 'works',
    nodeVersion: process.version, // 実行中の Node.js バージョンをレスポンスに含める（デバッグ用）
  };
});
