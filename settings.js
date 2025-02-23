// アプリケーションのデフォルト設定値
const DEFAULT_SETTINGS = {
  // YouTube設定
  YOUTUBE_API_KEY: '',
  VIDEO_ID: '',
  WAIT_TIME: 10, // チャット取得間隔（秒）
  MESSAGE_LIFETIME: 300, // メッセージの保持期間（秒）

  // OpenAI設定
  OPENAI_API_KEY: '',
  OPENAI_MODEL: 'gpt-4o-mini',
  SYSTEM_PROMPT: `あなたはYouTubeライブ配信のチャットに返答するAIチャットボットです。
視聴者からのチャットメッセージに対して、親しみやすく、でも礼儀正しい口調で返答してください。
返答は簡潔に、1〜2文程度でお願いします。`,

  // コメント選択用のプロンプトを追加
  COMMENT_SELECTION_PROMPT: `以下のYouTubeライブチャットのコメントリストから、最も返信に適したコメントを1つ選んでください。
選ぶ際は以下の基準を考慮してください：
- 質問や会話が成立しそうなコメント
- 不適切な内容を含まないコメント
- 単純な挨拶だけでないコメント

返答は以下のJSON形式で返してください：
{"selectedId": "選択したコメントのID"}`,

  // VOICEVOX設定
  VOICEVOX_ENDPOINT: 'http://localhost:50021',
  VOICEVOX_SPEAKER: 2,

  // VTubeStudio設定
  VTS_PORT: 8001, // VTubeStudioのプラグインAPIポート番号

  // 会話履歴の設定を追加
  CONVERSATION_HISTORY_SIZE: 10, // 保持する会話の数（0-100）
};

// 他のJavaScriptファイルから参照できるようにエクスポート
export { DEFAULT_SETTINGS };
