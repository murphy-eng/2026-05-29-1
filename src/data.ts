/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CaseStudy, Article } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    title: '萬年通航',
    subtitle: '航向數位商機，高質感官方形象與企業品牌再造',
    category: 'web-design',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200',
    tags: ['品牌定位', '形象網站設計', '多國語系', '傳統產業轉型'],
    client: '萬年通航股份有限公司 (Manning Marine)',
    year: '2025',
    metrics: [
      { label: '品牌新訪客增長', value: '+140%', change: '較去年同期', subLabel: '海外諮詢顯著提升' },
      { label: '網頁停留時間', value: '4分32秒', change: '提升 +110%', subLabel: '深度品牌故事瀏覽' },
      { label: '跨國詢價轉換率', value: '4.8%', change: '增長 +215%', subLabel: '精準捕獲外銷買家' }
    ],
    challenge: '萬年通航作為經營數十年的指標性航運代理與造船服務商，過去官方網站資訊老舊且無行動版支援，無法在國際買家心中建立對等的高端信任感，也缺乏流暢的詢價管道。',
    solution: '默聲為其啟動「極致現代化品牌再造計建」，導入全新奢華藍金視覺與 Space Grotesk 頂級字形，打造流暢的 3D 船隊展示網頁。同時優化詢價流、中英日多國語系檢索，並建立符合資安標準的防護層。',
    results: [
      '透過回應式高質感介面，成功鎖定歐洲及日本高端買家詢價。',
      '大幅降低客服重覆釋疑時間，新版詢價單完整蒐集商務需求。',
      '導入符合企業級資安（傳產安全標準）之通訊防護。'
    ],
    testimonial: {
      text: '默聲的團隊不只懂視覺，更驚人的是他們對於傳產商業邏輯與國際詢價流程的掌握度。新網站上線第一個月，我們就接到了來自東京的全新合作諮詢！',
      author: '陳特助',
      role: '萬年通航 品牌戰略部'
    }
  },
  {
    id: 'case-2',
    title: '合大APP中心',
    subtitle: '撐起百萬流量的官方入口，兼顧極致效能與資安防護',
    category: 'web-design',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200',
    tags: ['企業入口網站', '高效能前端', '資安滲透防護', '雲端整合'],
    client: '合大科技 (Hoda App Center)',
    year: '2025',
    metrics: [
      { label: '首頁加載速度', value: '0.4秒', change: '領先 98% 網站', subLabel: 'LCP 指標極致優化' },
      { label: '高併發承載力', value: '50,000+', change: '每秒連續 QPS', subLabel: '承載活動彈性擴展' },
      { label: '全年度運行時間', value: '99.99%', change: '零阻斷紀錄', subLabel: '多節點負載均衡' }
    ],
    challenge: '作為高流量的應用發行與安全審核中心，客戶既有站台常有促銷或發表會期間因併發過大而斷線、且常面臨惡意掃描等安全風險。',
    solution: '默聲採用 React 19 與 Edge static-generation 架構，將靜態資產全球 CDN 分發。同時整合 Cloudflare Enterprise 高級安全防護，全站遵循最高防護標準，並將複雜的後端動態數據以輕巧的微服務代理。',
    results: [
      '徹底終結加載遲滯情況，轉換與下載按鈕點擊率提升 45%。',
      '在多次黑客駭客掃描與 CC 攻擊中完好無損，安全防護極佳。',
      '直覺易用的極簡科技美學深受百萬開發者好評。'
    ],
    testimonial: {
      text: '對資安有嚴苛要求的我們，在與默聲合作的過程中感到無比安心。他們卓越的技術硬實力與視覺交互，真正證明了科技網站也能極致優美。',
      author: '廖技術總監',
      role: '合大APP中心 開發維運處'
    }
  },
  {
    id: 'case-3',
    title: '愛麗醫療集團',
    subtitle: '短影音社群裂變與 SEO 自然流量，全面引爆線下約診',
    category: 'marketing',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200',
    tags: ['短影音行銷', 'SEO 優化', 'SEM 關鍵字投放', '轉化漏斗'],
    client: '愛麗醫美集團 (Ailis Medical)',
    year: '2026',
    metrics: [
      { label: '短影音全網曝光', value: '1.2M+', change: '三個月內狂飆', subLabel: 'Reels / Shorts 自然分發' },
      { label: '首頁關鍵字覆蓋', value: '320+', change: '躍升 Google Top 3', subLabel: '含醫美亮點核心詞' },
      { label: '預約轉換率', value: '+185%', change: '獲客成本下降 42%', subLabel: '社群直接跳轉合規諮詢' }
    ],
    challenge: '醫學美容市場高度飽和、廣告紅利消退。既有競品花費大量預算在硬廣告上，導致獲客成本 (CAC) 高企，且難以與消費者建立長期的專業信任感。',
    solution: '策劃「醫學冷知識短影音+核心病症SEO專欄」之雙軌引擎。由默聲團隊一站式包辦日常腳本、導演拍攝、三秒鉤型剪輯、乃至平台 SEO 優化。',
    results: [
      '三條破百萬爆款 Reels 觸及全台潛在愛美族群。',
      'SEO 策略長效生效，攻佔多項熱門微調與保養關鍵字。',
      '專屬數位預約漏斗上線，提供極簡、私密的顧客跳轉體驗。'
    ],
    testimonial: {
      text: '不再只是盲目追流量，默聲幫我們做到了影音與實際諮詢的闭环！預約報名前所未有的踴躍，團隊產出的腳本極具品味，非常符合醫療專業形象。',
      author: '張執行長',
      role: '愛麗醫療集團 創辦人'
    }
  },
  {
    id: 'case-4',
    title: '台灣蕎麥',
    subtitle: '年度電商平台建置與日系氛圍包裝設計，一秒傾心',
    category: 'brand-cis',
    imageUrl: 'https://images.unsplash.com/photo-1543083503-0c174e269876?auto=format&fit=crop&q=80&w=1200',
    tags: ['LOGO/CIS設計', '響應式電商開發', '行銷大禮包', '日系包裝'],
    client: '台灣蕎麥農創品牌 (Soba Taiwan)',
    year: '2025',
    metrics: [
      { label: '電商平台月營業額', value: 'NT$1.8M+', change: '首季破紀錄', subLabel: '客單價大幅提升 35%' },
      { label: '品牌質感滿意度', value: '98.6%', change: '全新包裝大洗牌', subLabel: '極簡精緻和風設計' },
      { label: '老顧客回購率', value: '31%', change: '高黏著日常營運', subLabel: '結合節慶會員再營銷' }
    ],
    challenge: '本土優質蕎麥農創產品過去僅在傳統農會銷售，精美產品受限於老氣包裝和繁雜的電話訂購，無法拓展客群至年輕白領與精緻伴手禮市場。',
    solution: '品牌全面年輕化！以清新質樸的日系禪意線條重新塑造 CIS 識別、量身定製暖白色質感提袋及環保包裝盒。並建置極速一頁購物電商與日常檔期策劃。',
    results: [
      '成功打入都會區誠品、無印良品等指標選物通路。',
      '電商平台完美承接日常流量，極致一鍵結帳整合 LINE Payload。',
      '結合中秋、年節等日常檔期營運，首季大舉超標。'
    ],
    testimonial: {
      text: '許多老客人直接對我們說，新包裝和新網站美得像京都的精品菓子店。非常感謝默聲團隊細膩的手工感與行銷嗅覺，讓台灣好物發光發熱。',
      author: '王創辦人',
      role: '台灣蕎麥農創 執行總監'
    }
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    category: 'web',
    categoryLabel: '網頁設計',
    title: '7個不可忽視的核心關鍵，打造高轉化率的企業品牌形象網站',
    excerpt: '在眼球經濟時代，使用者對一個網站快慢、美感的判定僅需 0.05 秒。我們將探討如何從排版、加載效能到首屏視覺設計，全面攻陷訪客心房。',
    publishDate: '2026-05-15',
    readTime: '6 分鐘',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    content: `設計網站不是自嗨，而是一場精準的顧客心理學。
很多企業建置官網時，習慣塞入成山的企業歷史與長篇大論，卻忽略了使用者的耐心只有一指滑動的瞬間。

**1. 首屏 (Above the Fold) 的極速傳遞**
訪客一進來，能不能在 3 秒內回答他們的三大終極疑問：你是誰？你賣什麼？我該如何與你聯絡？
這需要依靠高規格的 display 級排版和微動畫引導，並配合鮮明的主 CTA（例如「立即體驗 ➔」）。

**2. 速度就是真金白銀**
根據 Google 統計，若首頁載入時間超過 3 秒，高達 53% 的訪客會直接關閉。默聲將代碼壓縮、啟用次世代 Next-gen Image 格式並利用 Edge 節點優化，力求在 1 秒內為使用者描繪最精緻的初相遇。

**3. 資安防護與企業信用度**
近年針對企業網站的網絡攻擊與假託駭客事件頻傳。採用最安全的 SSL 憑證、高規格的 header 防禦防護 (Security Headers) 才能讓買家安心填寫詢價資料。

在 2026 年，一個成功的企業形象網站，是兼顧極致效能與現代美學的「線上無形王牌業務」。想知道您目前的網站存在哪些瓶頸嗎？歡迎透過我們的「立即報價」線上進行一對一診斷。`
  },
  {
    id: 'art-2',
    category: 'seo',
    categoryLabel: 'SEO & 行銷',
    title: '2026最新 SEO 優化策略：避開搜尋大洗牌，讓你的核心排名超越競品',
    excerpt: '隨著 AI 整合搜尋（Generative Search Experience）全網上線，傳統純堆疊關鍵字的黑帽 SEO 已徹底失效。如何提供有商業價值的原創內容？',
    publishDate: '2026-05-10',
    readTime: '8 分鐘',
    imageUrl: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&q=80&w=800',
    content: `Google 在今年大舉更新了核心算法，強力打擊那些為了排版而生成的「AI 廢話文章」。
真正的優勢內容必須回歸商業邏輯與對專業的「真實感」。

**第一：強化 E-E-A-T 新指引**
Google 特别看重 Experience (真實體驗) 與 Authoritativeness (權威性)。分享具體的個案研究，包含真實營收、對比圖表、數據以及客戶對話，將大幅提升您文章在演算法中的權重。

**第二：擁抱使用者意圖 (Search Intent)**
關鍵字不再是越多越好，而是要針對使用者的真實「痛點」布局長尾詞。
例如，與其競爭廣泛的「網頁設計」，不如佈局「傳產數位轉型網頁設計 台北案例」，能吸引更精緻的高價值諮詢。

**第三：站內代碼結構優化**
完美的 H1-H3 標籤階層、精細的 XML Sitemaps、以及全站對行動裝置的 100% 適配，是搜尋網頁的基本功。如果這部分漏氣，寫再優質的內容也是事倍功半。

透過默聲的行銷整合服務，我們能協助您的品牌進行跨渠道 SEO 健檢，讓自然流量成為不間斷的黃金資產。`
  },
  {
    id: 'art-3',
    category: 'video',
    categoryLabel: '短影音趨勢',
    title: '連鎖餐飲與零售品牌如何用 9:16 Shorts / Reels 創作者思維在 3 秒內留存高消費顧客？',
    excerpt: '短影音早已不是年輕人的專利，更是主力消費客群獲取新知的管道。如何在最短時間引燃好奇心？我們拆解黃金腳本結構。',
    publishDate: '2026-05-01',
    readTime: '5 分鐘',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
    content: `Reels、TikTok、Shorts 已改變了我們大腦的接收迴路。現在的爆款黃金法則是：3秒留存率決定一切。

**1. 首三秒「鉤子 (Hook)」公式**
千萬不要一開始就播放長達 5 秒的企業片頭！
直接用視覺衝突、逆向思維、或者強烈的提問作為首幀。例如：「大家都說這裡貴，但真材實料到日本師傅都落淚？」

**2. 節奏切換與音效渲染**
每 1.5 到 2 秒必須更換視覺鏡頭或加入貼切的動態字幕。搭配流動性強的專屬音效（Sound Effects）能使觀看完成度提高 140%。

**3. 轉化漏斗：千萬別忘了做 CTA**
很多品牌影音觀看百萬，卻沒有帶動半點業績。這就是漏掉了在結尾引導「點擊自訂主頁預約最新體驗券」或「留言：我想領取優惠，系統自動私訊」這類閉環玩法。

默聲不僅能提供創意腳本，更能從器材拍攝到後製一體化交付，幫您省下摸索的百萬冤枉路！`
  },
  {
    id: 'art-4',
    category: 'brand',
    categoryLabel: '品牌識別',
    title: '當品牌識別遇上科技感：傳統製造業與科技大廠數位轉型的 CIS 設計心法',
    excerpt: '如何兼顧一貫的穩重基業，又能向市場宣示「我們具備引領未來的核心研發能力」？從品牌商標與整體視覺延伸切入。',
    publishDate: '2026-04-20',
    readTime: '7 分鐘',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    content: `傳產轉型的第一步，往往不是更換生產線，而是重新梳理它對外的「長相」。
一個優秀的科技 CIS 視覺應具備以下三大核心：

**一、洗鍊、不過時的幾何比例**
精簡過去繁雜、具象的舊商標，取而代之的是數學般精美、高度抽象化且易於在網頁 favicon、App、制服或甚至設備上完美雕刻的幾何徽章。

**二、精巧的亮點點綴色 (Accent Color)**
主色通常採用深邃安全的炭黑、海軍藍或石墨灰，奠定專業的信任基石；但必須配有一款富有前瞻性、高亮度的科技綠、亮金或太光藍，作為網頁及產品的操作指引，象徵企業體在保守穩固中依然有蓬勃的生命力。

**三、極致規範的排版工具書 (Brand Guideline)**
確保各分部、業務名片、國際展會攤位展現 100% 統一的氣派度。
默聲在提供 LOGO CIS 規劃時，會一同交付最完善的延伸應用範本手冊，保證即便在五年後，您的品牌依舊走在美學最前線。`
  }
];
