export default {
  // Navigation
  nav: {
    home: 'ホーム',
    about: '私について',
    skills: 'スキル',
    projects: 'プロジェクト',
    design: 'デザイン思考',
    career: '日本でのキャリア',
    contact: 'お問い合わせ'
  },

  // Hero Section
  hero: {
    tagline: 'Design Thinking × Frontend Engineering',
    greeting: 'こんにちは、私は',
    name: 'フロントエンドエンジニア',
    experience: '5年間のエンタープライズフロントエンド開発経験',
    specialization: 'Vue3 エコシステム / データ可視化 / コンポーネント設計',
    cta: {
      primary: 'プロジェクトを見る',
      secondary: '履歴書をダウンロード'
    }
  },

  // About Section
  about: {
    title: '私について',
    subtitle: 'ファッションデザインからフロントエンドへ：デザイン思考で技術を実現',
    story: `私は5年間の経験を持つフロントエンドエンジニアであり、異なる背景を持つ開発者です。
    ファッションデザイン専攻で卒業しました。このユニークな経験は、鋭い審美眼とユーザー体験への感性を養いました。

    フロントエンド開発に転向してから、デザイン思考をコード実装に統合しています：
    ユーザー体験の視点からインタラクションロジックを考え、視覚的階層スキルで情報アーキテクチャを最適化し、
    デザイン標準思考で保守可能なコンポーネントシステムを構築します。

    キャリアの中で、MESシステム、データ可視化プラットフォーム、
    エンタープライズ管理システムなど、複数の大規模エンタープライズプロジェクトを独立で担当しました。
    これらの経験は、ビジネス要件を深く理解し、複雑な要件をエレガントなフロントエンドソリューションに変換することを可能にしました。`,
    highlights: [
      { label: '異分野背景', desc: 'デザイン専攻 × フロントエンドエンジニアリングの二重思考' },
      { label: '5年経験', desc: '大規模プロジェクトの全工程開発を独立担当' },
      { label: '技術力', desc: 'Vue3 エコシステム / コンポーネント化 / エンジニアリング / パフォーマンス最適化' },
      { label: '日本への意向', desc: '日本で長期フロントエンド開発に従事したい' }
    ]
  },

  // Skills Section
  skills: {
    title: '专业技能',
    subtitle: 'フロントエンド技術スタック × エンジニアリング能力 × データ可視化',
    categories: [
      {
        name: 'フロントエンドコア',
        icon: 'code',
        items: ['Vue3 / Composition API', 'TypeScript / JavaScript ES6+', 'HTML5 / CSS3 / SCSS', 'Vite / Webpack']
      },
      {
        name: 'フレームワーク・ツール',
        icon: 'tool',
        items: ['Element Plus / Ant Design', 'Pinia / Vuex', 'Vue Router', 'Axios / RESTful API']
      },
      {
        name: 'データ可視化',
        icon: 'chart',
        items: ['ECharts / D3.js', 'ダッシュボード開発', 'BI可視化プラットフォーム', 'ラージスクリーンソリューション']
      },
      {
        name: 'エンジニアリング・協働',
        icon: 'git',
        items: ['Git ワークフロー', 'コンポーネント化開発', 'パフォーマンス最適化', 'チーム協働']
      }
    ]
  },

  // Projects Section
  projects: {
    title: 'プロジェクト経験',
    subtitle: 'エンタープライズフロントエンドプロジェクトの実戦経験',
    items: [
      {
        id: 'mes',
        name: 'スマートファクトリー MES システム',
        role: 'フロントエンド責任者',
        duration: '2021 - 2022',
        description: '製造業向けの生産管理実行システム。生産計画、作業オーダー管理、品質トレーサビリティ、設備監視などの主要機能を実装。複数の製造企業に導入され、生産効率を約30%向上させました。',
        tech_stack: ['Vue3 + TypeScript', 'Element Plus', 'ECharts データ可視化', 'WebSocket リアルタイム通信'],
        responsibilities: [
          'フロントエンドアーキテクチャ設計と技術選定を独立担当',
          '主要業務コンポーネントライブラリを開発、開発効率を40%向上',
          '複雑なフォームとデータ可視化モジュールを実装',
          '初回読み込みパフォーマンスを最適化、読み込み時間を50%短縮'
        ],
        achievements: [
          'システムが正常に稼働し2年間安定運用',
          '3社以上の製造企業の日常生産管理をサポート',
          'コンポーネントライブラリが会社の他プロジェクトで再利用'
        ]
      },
      {
        id: 'oee',
        name: 'OEE 設備管理システム',
        role: 'フロントエンドエンジニア',
        duration: '2022 - 2023',
        description: '設備総合効率（OEE）の監視・分析に特化したシステム。リアルタイムデータ収集と可視化により、工場の設備利用率向上とダウンタイム削減を支援します。',
        tech_stack: ['Vue3 + Composition API', 'TypeScript', 'ECharts', 'Pinia 状態管理'],
        responsibilities: [
          '設備状態リアルタイム監視ダッシュボードを開発',
          'OEE指標計算と可視化を実装',
          '大規模データレンダリングパフォーマンスを最適化',
          '再利用可能なチャートコンポーネントを作成'
        ],
        achievements: [
          '顧客の設備利用率を15%向上に貢献',
          '100台以上の設備同時監視をサポート',
          'チャートコンポーネントが会社共通コンポーネントライブラリに採用'
        ]
      },
      {
        id: 'dashboard',
        name: 'データコックピット・ラージスクリーン + BI可視化プラットフォーム',
        role: 'フロントエンドコア開発',
        duration: '2023 - 現在',
        description: 'エンタープライズ級データ可視化ソリューション。ラージスクリーン表示とセルフサービス分析プラットフォームを含みます。ドラッグ&ドロップレポート生成、多次元データ分析、リアルタイムデータ更新などの機能をサポート。',
        tech_stack: ['Vue3 + TypeScript', 'ECharts / D3.js', 'Vite ビルド最適化', 'レスポンシブデザイン'],
        responsibilities: [
          'データ可視化モジュール開発を主導',
          '設定可能なチャートコンポーネントシステムを設計',
          'ラージスクリーン適応レイアウトソリューションを実装',
          '複雑シーンでのレンダリングパフォーマンスを最適化'
        ],
        achievements: [
          '会社の中核業務データ表示をサポート',
          '日次アクセス数1000ユーザー以上',
          'ラージスクリーンソリューションが複数の顧客現場で導入'
        ]
      }
    ]
  },

  // Design Thinking Section
  designThinking: {
    title: 'デザイン思考',
    subtitle: 'デザイン背景による独自の強み',
    intro: 'ファッションデザイン専攻の背景は「キャリアチェンジ」の物語ではなく、「融合」の物語です。デザイントレーニングが培った3つのコア能力は、すべてフロントエンド開発の強みに直結します：',
    pillars: [
      {
        title: 'ユーザー視点',
        desc: 'ユーザー体験の観点からインタラクションを設計し、単に機能を実装するだけではありません',
        examples: [
          'ユーザーの使用シーンと心理的期待を考える',
          '直感的なインタラクションフィードバックを設計する',
          'アクセシビリティとユーザビリティに注目する'
        ]
      },
      {
        title: '視覚的階層',
        desc: '視覚デザイン原則を適用して情報アーキテクチャを組織化',
        examples: [
          'コントラスト、配置、繰り返しによる視覚的秩序を確立',
          'ホワイトスペースでユーザーの注意をガイド',
          '明確な情報階層と読み込みパスを設計'
        ]
      },
      {
        title: '细节へのこだわり',
        desc: 'ピクセルレベルの细节への追求で、洗練された製品体験を作り上げる',
        examples: [
          'アニメーション遷移の自然な滑らかさに注目',
          'インタラクション状態の視覚フィードバックを磨く',
          'デザインシステムの一貫性を維持'
        ]
      }
    ],
    closing: 'これらの能力は、コードを書くだけでなく、デザイナーと効率的に協働し、デザインの意図を理解し、高品質のフロントエンド実装に正確に変換することを可能にします。'
  },

  // Japan Career Section
  japanCareer: {
    title: '日本でのキャリア',
    subtitle: '日本で長期フロントエンド開発に従事したい',
    motivation: `日本で開発したい動機は、日本のデジタル製品と国際チームへの憧れから来ています。
    日本市場の製品品質とユーザー体験への高い標準は、技術的细节への追求と高度に合致しています。
    日本企業文化の責任感、チーム協働精神、長期的価値観を尊重しています。`,
    whyJapan: [
      { title: '製品品質文化', desc: '日本企業の製品细节と品質への重視は、私の開発理念と高度に一致' },
      { title: '技術成長環境', desc: '日本の技術環境で継続的に学び、国際プロジェクト開発に参加したい' },
      { title: '長期キャリア計画', desc: '安定した長期開発機会を求め、日本でキャリアを構築したい' }
    ],
    language: {
      status: '日本語学習中',
      level: 'N4 → N3 目標',
      commitment: '日本語能力を継続的に向上させ、チーム協働に早く適応'
    },
    valueProposition: '日本企業に提供できる価値：',
    values: [
      '5年間のエンタープライズ Vue3 開発経験',
      'データ可視化と複雑インタラクション開発能力',
      'デザイン背景によるユーザー体験意識',
      '異分野学習能力と適応力',
      '安定した長期就業コミットメント'
    ]
  },

  // Contact Section
  contact: {
    title: 'お問い合わせ',
    subtitle: '協業機会について交流できることを楽しみにしています',
    channels: [
      { type: 'Email', value: 'your.email@example.com', icon: 'email', url: 'mailto:your.email@example.com' },
      { type: 'GitHub', value: 'github.com/yourusername', icon: 'github', url: 'https://github.com/yourusername' },
      { type: 'LinkedIn', value: 'linkedin.com/in/yourprofile', icon: 'linkedin', url: 'https://linkedin.com/in/yourprofile' },
      { type: 'WeChat', value: 'your_wechat_id', icon: 'wechat', url: '' }
    ],
    cta: 'さらに交流できることを楽しみにしています'
  },

  // Footer
  footer: {
    copyright: '© 2024 Frontend Engineer Portfolio. All rights reserved.',
    madeWith: 'Made with Vue3 + TypeScript'
  }
}
