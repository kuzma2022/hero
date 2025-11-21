
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export const MAX_STORY_PAGES = 10;
export const BACK_COVER_PAGE = 11;
export const TOTAL_PAGES = 11;
export const INITIAL_PAGES = 2;
export const GATE_PAGE = 2;
export const BATCH_SIZE = 6;
export const DECISION_PAGES = [3];

export const GENRES = ["经典恐怖", "超级英雄动作", "黑暗科幻", "奇幻史诗", "霓虹侦探", "废土末日", "轻松喜剧", "青春校园 / 生活切片", "自定义"];

export const TONES = [
    "动作密集 (对话简短有力，侧重动感)",
    "内心独白 (大量旁白揭示思想)",
    "诙谐幽默 (角色用幽默作为防御机制)",
    "歌剧史诗 (宏大的戏剧性声明和高风险)",
    "轻松日常 (自然对话，侧重关系/八卦)",
    "温馨治愈 (温暖，温柔，乐观)"
];

export const LANGUAGES = [
    { code: 'zh-CN', name: '中文 (简体)' },
    { code: 'en-US', name: 'English (US)' },
    { code: 'ja-JP', name: '日本語 (日本)' },
    { code: 'ko-KR', name: '한국어 (韩国)' },
    { code: 'es-MX', name: 'Español (Mexico)' },
    { code: 'fr-FR', name: 'Français (France)' },
    { code: 'de-DE', name: 'Deutsch (Germany)' },
    { code: 'it-IT', name: 'Italiano (Italy)' },
    { code: 'pt-BR', name: 'Português (Brazil)' },
    { code: 'ru-RU', name: 'Русский (Russia)' },
    { code: 'ar-EG', name: 'العربية (Egypt)' },
    { code: 'hi-IN', name: 'हिन्दी (India)' },
    { code: 'id-ID', name: 'Bahasa Indonesia' },
    { code: 'vi-VN', name: 'Tiếng Việt (Vietnam)' },
    { code: 'ua-UA', name: 'Українська (Ukraine)' }
];

export interface ComicFace {
  id: string;
  type: 'cover' | 'story' | 'back_cover';
  imageUrl?: string;
  narrative?: Beat;
  choices: string[];
  resolvedChoice?: string;
  isLoading: boolean;
  pageIndex?: number;
  isDecisionPage?: boolean;
}

export interface Beat {
  caption?: string;
  dialogue?: string;
  scene: string;
  choices: string[];
  focus_char: 'hero' | 'friend' | 'other';
}

export interface Persona {
  base64: string;
  desc: string;
}
