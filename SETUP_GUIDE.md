# 🚀 セットアップガイド

このガイドに従って、プロジェクトを完全に動作させましょう。

## ✅ 完了した作業

- ✅ Gitリポジトリの初期化
- ✅ Next.js + TypeScript プロジェクトの作成
- ✅ Tailwind CSS の設定
- ✅ GitHubへのプッシュ完了

## 📋 次のステップ

### 1. 依存関係のインストール

ターミナルで以下を実行してください：

```bash
npm install
```

### 2. Supabaseプロジェクトのセットアップ

#### 2.1 Supabaseアカウントを作成

1. [Supabase](https://app.supabase.com/) にアクセス
2. GitHubアカウントでサインイン
3. 「New Project」をクリック

#### 2.2 プロジェクトを作成

- **Name**: marketing（または任意の名前）
- **Database Password**: 強力なパスワードを設定（メモしておく）
- **Region**: Northeast Asia (Tokyo) を推奨
- 「Create new project」をクリック（数分かかります）

#### 2.3 API認証情報を取得

プロジェクトが作成されたら：

1. 左サイドバーの「Settings」（⚙️）をクリック
2. 「API」をクリック
3. 以下の情報をコピー：
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

#### 2.4 環境変数を設定

`.env.local` ファイルを開いて、取得した値を貼り付けます：

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 3. 開発サーバーを起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

### 4. Vercelへのデプロイ

#### 4.1 Vercelアカウントにログイン

1. [Vercel](https://vercel.com/) にアクセス
2. GitHubアカウントでサインイン

#### 4.2 プロジェクトをインポート

1. 「Add New...」→「Project」をクリック
2. GitHubリポジトリ一覧から `marketing` を選択
3. 「Import」をクリック

#### 4.3 環境変数を設定

「Environment Variables」セクションで以下を追加：

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabaseから取得したURL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabaseから取得したキー |

#### 4.4 デプロイ

「Deploy」をクリック！

数分後、本番環境のURLが発行されます（例: `https://marketing-xxx.vercel.app`）

### 5. 自動デプロイの設定完了

これで、`main` ブランチに変更をプッシュするたびに、Vercelが自動的にデプロイします！

```bash
# コード変更後
git add .
git commit -m "機能追加"
git push origin main
# 自動的にデプロイされます！
```

## 🎉 完了！

以下が利用可能になりました：

- ✅ **ローカル開発環境**: `http://localhost:3000`
- ✅ **本番環境**: Vercelから提供されるURL
- ✅ **自動デプロイ**: GitHubへのプッシュで自動更新
- ✅ **データベース**: Supabase PostgreSQL
- ✅ **認証**: Supabase Auth（実装時に使用可能）

## 📚 次に学ぶこと

- [Next.js App Router](https://nextjs.org/docs/app)
- [Supabase クライアントライブラリ](https://supabase.com/docs/reference/javascript/introduction)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)

## 🆘 トラブルシューティング

### インストールエラーが出る

```bash
# node_modulesを削除して再インストール
rm -rf node_modules package-lock.json
npm install
```

### Supabase接続エラー

- `.env.local` ファイルが存在するか確認
- 環境変数の値が正しいか確認
- 開発サーバーを再起動（Ctrl+C → `npm run dev`）

### Vercelデプロイエラー

- Vercelの環境変数が正しく設定されているか確認
- ビルドログを確認してエラーメッセージを確認

## 💬 サポート

質問がある場合は、GitHubのIssuesで質問してください！
