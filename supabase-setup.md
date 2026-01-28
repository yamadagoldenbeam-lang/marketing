# Supabase セットアップガイド

## 1. Supabaseプロジェクトの作成

1. [Supabase](https://app.supabase.com/) にアクセス
2. 「New Project」をクリック
3. プロジェクト名、データベースパスワードを設定
4. リージョンを選択（日本の場合は `Northeast Asia (Tokyo)` を推奨）
5. 「Create new project」をクリック

## 2. 環境変数の設定

プロジェクト作成後、以下の手順で環境変数を取得：

1. Supabaseダッシュボードで「Settings」→「API」を開く
2. 以下の値をコピー：
   - **Project URL**: `NEXT_PUBLIC_SUPABASE_URL` に設定
   - **anon public**: `NEXT_PUBLIC_SUPABASE_ANON_KEY` に設定

3. `.env.local` ファイルに値を貼り付け

```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
```

## 3. データベーステーブルの作成例

Supabase SQL Editorで以下を実行：

```sql
-- ユーザープロファイルテーブル
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  username text unique,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Row Level Security (RLS) の有効化
alter table profiles enable row level security;

-- ポリシーの設定（ユーザーは自分のプロファイルのみ読み書き可能）
create policy "Users can view their own profile"
  on profiles for select
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on profiles for update
  using (auth.uid() = id);
```

## 4. 認証の設定

1. Supabaseダッシュボードで「Authentication」→「Providers」を開く
2. 使用したい認証プロバイダーを有効化：
   - Email/Password
   - Google
   - GitHub
   - など

## 5. ストレージの設定（画像アップロード等）

1. 「Storage」→「New bucket」をクリック
2. バケット名を設定（例: `avatars`, `images`）
3. Public/Private を選択
4. ポリシーを設定

## トラブルシューティング

- **接続エラー**: `.env.local` の値が正しいか確認
- **CORS エラー**: Supabaseの設定で許可されたオリジンを確認
- **認証エラー**: RLSポリシーが正しく設定されているか確認
