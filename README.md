# marketing

モダンなWebサービス - Next.js、TypeScript、Supabase、Vercelで構築

## 🚀 技術スタック

- **フロントエンド**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **バックエンド**: Supabase (認証 + PostgreSQL)
- **デプロイ**: Vercel
- **バージョン管理**: GitHub

## 📦 セットアップ

### 1. リポジトリのクローン

```bash
git clone https://github.com/yamadagoldenbeam-lang/marketing.git
cd marketing
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 環境変数の設定

`.env.local.example` を `.env.local` にコピーして、Supabaseの認証情報を設定します。

```bash
# .env.local ファイルを編集
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

#### Supabaseプロジェクトの作成

1. [Supabase](https://app.supabase.com/) にアクセス
2. 新しいプロジェクトを作成
3. Settings > API から以下を取得：
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon/public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 4. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

## 🌐 Vercelへのデプロイ

### 方法1: GitHub連携（推奨）

1. [Vercel](https://vercel.com/) にアクセスしてログイン
2. "New Project" をクリック
3. GitHubリポジトリ `yamadagoldenbeam-lang/marketing` をインポート
4. 環境変数を設定：
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. "Deploy" をクリック

これで、`main` ブランチへのプッシュごとに自動デプロイされます。

### 方法2: Vercel CLIを使用

```bash
npm i -g vercel
vercel login
vercel
```

## 📁 プロジェクト構造

```
marketing/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── api/          # APIルート
│   │   ├── layout.tsx    # ルートレイアウト
│   │   ├── page.tsx      # ホームページ
│   │   └── globals.css   # グローバルスタイル
│   ├── components/       # Reactコンポーネント
│   ├── lib/              # ユーティリティ・ライブラリ
│   │   └── supabase.ts   # Supabaseクライアント
│   └── utils/            # ヘルパー関数
├── public/               # 静的ファイル
├── .env.local           # 環境変数（Git除外）
├── .env.local.example   # 環境変数のテンプレート
├── next.config.js       # Next.js設定
├── tailwind.config.js   # Tailwind CSS設定
├── tsconfig.json        # TypeScript設定
└── package.json         # 依存関係

```

## 🛠️ 利用可能なスクリプト

```bash
npm run dev        # 開発サーバーを起動
npm run build      # 本番用にビルド
npm run start      # 本番サーバーを起動
npm run lint       # ESLintでコードチェック
npm run type-check # TypeScriptの型チェック
```

## 📝 API エンドポイント

- `GET /api/health` - ヘルスチェック

## 🔐 認証

Supabaseの認証機能を使用しています。詳細は [Supabase Auth ドキュメント](https://supabase.com/docs/guides/auth) を参照してください。

## 🗄️ データベース

Supabase PostgreSQLを使用しています。スキーマの作成は Supabase Dashboard の SQL Editor で行えます。

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🔗 リンク

- [Next.js ドキュメント](https://nextjs.org/docs)
- [Supabase ドキュメント](https://supabase.com/docs)
- [Vercel ドキュメント](https://vercel.com/docs)
- [Tailwind CSS ドキュメント](https://tailwindcss.com/docs)
