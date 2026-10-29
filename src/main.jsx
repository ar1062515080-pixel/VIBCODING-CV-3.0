import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const copy = {
  zh: {
    nav: ['个人情况', '履历', '项目', 'AI 能力', '联系'],
    navIds: ['about', 'experience', 'cases', 'ai', 'contact'],
    eyebrow: '品牌传播 · 内容营销 · AI 创意',
    heroLead: '让洞察成为',
    heroScript: '影响力。',
    heroSub: '我用策略、内容与视觉，把品牌故事变成值得被记住的体验。',
    explore: '继续阅读',
    based: 'ADELAIDE / SHANGHAI',
    caseKicker: 'SELECTED PROJECTS / 04',
    caseTitle: '亮点案例',
    caseIntro: '三封来自现场的信。点击贴纸，拆阅策略、执行与结果。',
    open: '点击拆阅',
    cases: [
      {
        id: 'guerlain',
        no: '01',
        title: '法国娇兰',
        en: 'GUERLAIN · CNY CAMPAIGN',
        tag: '整合营销',
        summary: '围绕 2026 新春打造完整的节日品牌叙事，连接媒体、KOL 与线下体验。',
        facts: ['竞品与趋势洞察', '传播主题及内容策划', '媒体 / KOL / 活动物料协同'],
        result: '相关话题登上微博热搜第一',
        metrics: [['#1', '微博热搜'], ['50+', '外部合作方'], ['8', '新闻稿与 Brief']],
        image: '/images/final-brand.png',
        tone: 'rose',
      },
      {
        id: 'parklands',
        no: '02',
        title: '阿德莱德公园城市',
        en: 'WORLD HERITAGE PROPOSAL',
        tag: '战略传播',
        summary: '为世界遗产申报构建面向政府、社区与公众的多利益相关者叙事。',
        facts: ['利益相关者研究', '沟通障碍识别', '跨平台传播框架'],
        result: '完成英文研究、策略提案与项目汇报',
        metrics: [['3', '核心利益相关方'], ['1', '跨平台框架'], ['EN', '全英文交付']],
        image: '/images/moodboard.png',
        tone: 'sage',
      },
      {
        id: 'chi',
        no: '03',
        title: 'Chi Bodycare',
        en: 'AI-ASSISTED WEBSITE',
        tag: '产品策划',
        summary: '用 AI 协作梳理本地服务品牌从了解服务到在线预约的关键路径。',
        facts: ['品牌与服务信息架构', '预约流程与后台需求', '测试反馈与体验迭代'],
        result: '形成可持续迭代的内容与功能方案',
        metrics: [['4', '核心功能模块'], ['1', '完整用户路径'], ['AI', '协作式策划']],
        image: '/images/dossier.png',
        tone: 'blue',
      },
    ],
    aboutKicker: 'PROFILE / 01',
    aboutTitle: '把复杂信息，整理成有温度的品牌表达。',
    aboutBody: '我是李沿睿，一名以洞察为起点、以落地为导向的传播实践者。目前在阿德莱德大学攻读战略传播硕士，拥有品牌公关、内容运营、数字营销与跨团队项目协作经验。',
    stats: [
      ['50+', '外部合作方协同'],
      ['30+', '日常媒体监测'],
      ['500+', '关键词研究'],
      ['5–8', 'Google Ads 项目管理'],
    ],
    experience: '履历',
    roles: [
      ['2026 — 至今', 'Kingway 经纬国际教育移民', '市场部实习生 · 阿德莱德'],
      ['2025 — 2026', 'FleishmanHillard 福莱希乐', '公共关系实习生 · 上海'],
      ['2023', '苏州卡达网络科技', '市场营销与策划专员 · 苏州'],
    ],
    education: '教育',
    educationKicker: 'EDUCATION / 02',
    educationTitle: '学习，是持续更新看世界的方法。',
    educationIntro: '从电子商务到战略传播，我持续连接商业理解、传播策略与创意表达。',
    experienceKicker: 'EXPERIENCE / 03',
    experienceTitle: '在内容、品牌与增长之间，积累真实的现场经验。',
    schools: [
      ['2025 — 2027', '阿德莱德大学', '传播学硕士 · 战略传播'],
      ['2018 — 2022', '成都信息工程大学', '管理学学士 · 电子商务'],
    ],
    aiKicker: 'AI PRACTICE / 05',
    aiTitle: '我的 AI 工作台',
    aiIntro: '不是替代思考，而是放大洞察、创意与执行。点击文件夹查看我的 AI 协作方式。',
    folders: [
      {
        tab: '01 / 洞察',
        title: 'AI + 营销洞察',
        desc: '快速归纳海量信息，建立趋势、受众与竞品之间的关联，再由人工判断真实机会。',
        tools: ['趋势扫描', '评论语义归纳', '竞品内容拆解', '受众画像假设'],
        output: 'OUTPUT · INSIGHT MAP',
      },
      {
        tab: '02 / 视觉',
        title: 'AI 视觉制作',
        desc: '从情绪板、视觉语言到多版本物料，让创意探索更快，同时保持品牌一致性。',
        tools: ['Moodboard', '概念视觉', '社媒物料', '视觉迭代'],
        output: 'OUTPUT · VISUAL SYSTEM',
      },
      {
        tab: '03 / 文案',
        title: 'AI 文案创作',
        desc: '基于品牌语调与渠道语境生成、评估和精修表达，让同一个故事适配不同触点。',
        tools: ['品牌语调', '双语文案', 'KOL Brief', '标题 A/B 测试'],
        output: 'OUTPUT · COPY MATRIX',
      },
      {
        tab: '04 / 协作',
        title: 'AI 项目协作',
        desc: '辅助梳理需求、拆分任务和沉淀反馈，让团队在清晰的上下文中更高效推进。',
        tools: ['需求梳理', '流程设计', '会议纪要', '测试反馈'],
        output: 'OUTPUT · ACTION PLAN',
      },
    ],
    contactKicker: 'LET’S CREATE / 06',
    contactTitleA: '有一个值得',
    contactTitleB: '讲好的故事？',
    contactBody: '期待与你一起，把想法变成清晰、有温度、能落地的品牌体验。',
    phone: '电话',
    mail: '邮件',
    wechat: '微信',
    wechatValue: 'AR1062515080',
    copy: '复制',
    copied: '已复制',
    availability: '开放品牌传播、内容营销与创意项目合作',
    footer: '© 2026 YANRUI LI · MADE WITH CURIOSITY',
  },
  en: {
    nav: ['Profile', 'Experience', 'Projects', 'AI Practice', 'Contact'],
    navIds: ['about', 'experience', 'cases', 'ai', 'contact'],
    eyebrow: 'BRAND COMMUNICATION · CONTENT · AI CREATIVE',
    heroLead: 'Turning insight into',
    heroScript: 'impact.',
    heroSub: 'I blend strategy, content and visuals to create brand stories worth remembering.',
    explore: 'Start here',
    based: 'ADELAIDE / SHANGHAI',
    caseKicker: 'SELECTED PROJECTS / 04',
    caseTitle: 'Selected cases',
    caseIntro: 'Three letters from the field. Click a sticker to unpack the thinking, craft and outcomes.',
    open: 'Click to open',
    cases: [
      {
        id: 'guerlain',
        no: '01',
        title: 'Guerlain',
        en: '2026 CNY CAMPAIGN',
        tag: 'Integrated Marketing',
        summary: 'Built a festive brand narrative connecting media, KOLs and an offline experience for Lunar New Year.',
        facts: ['Competitor and trend research', 'Campaign theme and content planning', 'Media, KOL and event coordination'],
        result: 'Campaign topic reached #1 on Weibo Trending',
        metrics: [['#1', 'Weibo Trending'], ['50+', 'External partners'], ['8', 'Releases & briefs']],
        image: '/images/final-brand.png',
        tone: 'rose',
      },
      {
        id: 'parklands',
        no: '02',
        title: 'Adelaide Park Lands',
        en: 'WORLD HERITAGE PROPOSAL',
        tag: 'Strategic Communication',
        summary: 'Shaped a multi-stakeholder narrative for a World Heritage nomination across government, community and public audiences.',
        facts: ['Stakeholder research', 'Barrier identification', 'Cross-platform framework'],
        result: 'Delivered research, strategy proposal and presentation in English',
        metrics: [['3', 'Stakeholder groups'], ['1', 'Cross-platform framework'], ['EN', 'Full delivery']],
        image: '/images/moodboard.png',
        tone: 'sage',
      },
      {
        id: 'chi',
        no: '03',
        title: 'Chi Bodycare',
        en: 'AI-ASSISTED WEBSITE',
        tag: 'Product Strategy',
        summary: 'Used AI-assisted planning to map the customer journey from discovering local services to booking online.',
        facts: ['Brand and service architecture', 'Booking and admin requirements', 'Testing and UX iterations'],
        result: 'Created an iterative content and functional roadmap',
        metrics: [['4', 'Core modules'], ['1', 'End-to-end journey'], ['AI', 'Assisted planning']],
        image: '/images/dossier.png',
        tone: 'blue',
      },
    ],
    aboutKicker: 'PROFILE / 01',
    aboutTitle: 'Making complex ideas feel clear, human and memorable.',
    aboutBody: 'I’m Yanrui Li, a communication practitioner who starts with insight and cares deeply about execution. I am pursuing a Master of Strategic Communication at the University of Adelaide, with experience across brand PR, content, digital marketing and cross-functional projects.',
    stats: [
      ['50+', 'External partners'],
      ['30+', 'Media outlets monitored daily'],
      ['500+', 'Keywords researched'],
      ['5–8', 'Google Ads projects managed'],
    ],
    experience: 'Experience',
    roles: [
      ['2026 — Present', 'Kingway International Education & Migration', 'Marketing Intern · Adelaide'],
      ['2025 — 2026', 'FleishmanHillard', 'Public Relations Intern · Shanghai'],
      ['2023', 'Suzhou Kada Network Technology', 'Marketing & Planning Specialist · Suzhou'],
    ],
    education: 'Education',
    educationKicker: 'EDUCATION / 02',
    educationTitle: 'Learning is how I keep renewing my view of the world.',
    educationIntro: 'From e-commerce to strategic communication, I connect commercial thinking with strategy and creative expression.',
    experienceKicker: 'EXPERIENCE / 03',
    experienceTitle: 'Field experience across content, brand and growth.',
    schools: [
      ['2025 — 2027', 'University of Adelaide', 'Master of Communication · Strategic Communication'],
      ['2018 — 2022', 'Chengdu University of Information Technology', 'Bachelor of Management · E-commerce'],
    ],
    aiKicker: 'AI PRACTICE / 05',
    aiTitle: 'My AI workbench',
    aiIntro: 'AI does not replace thinking—it expands insight, creative range and execution. Open a folder to see how I collaborate with it.',
    folders: [
      {
        tab: '01 / INSIGHT',
        title: 'AI + Marketing Insight',
        desc: 'Synthesize information to connect trends, audiences and competitors—then apply human judgment to identify the real opportunity.',
        tools: ['Trend scanning', 'Comment synthesis', 'Competitor analysis', 'Audience hypotheses'],
        output: 'OUTPUT · INSIGHT MAP',
      },
      {
        tab: '02 / VISUAL',
        title: 'AI Visual Production',
        desc: 'Move from moodboard to visual language and multi-format assets faster, while protecting brand consistency.',
        tools: ['Moodboards', 'Concept visuals', 'Social assets', 'Visual iteration'],
        output: 'OUTPUT · VISUAL SYSTEM',
      },
      {
        tab: '03 / COPY',
        title: 'AI Copywriting',
        desc: 'Generate, evaluate and refine language against brand voice and channel context, adapting one story across touchpoints.',
        tools: ['Brand voice', 'Bilingual copy', 'KOL briefs', 'Headline A/B tests'],
        output: 'OUTPUT · COPY MATRIX',
      },
      {
        tab: '04 / FLOW',
        title: 'AI Project Collaboration',
        desc: 'Clarify requirements, break down work and consolidate feedback so teams can move with shared context.',
        tools: ['Requirements', 'Process design', 'Meeting notes', 'Testing feedback'],
        output: 'OUTPUT · ACTION PLAN',
      },
    ],
    contactKicker: 'LET’S CREATE / 06',
    contactTitleA: 'Have a story',
    contactTitleB: 'worth telling?',
    contactBody: 'Let’s turn ideas into brand experiences that are clear, human and ready to make an impact.',
    phone: 'Phone',
    mail: 'Email',
    wechat: 'WeChat',
    wechatValue: 'AR1062515080',
    copy: 'Copy',
    copied: 'Copied',
    availability: 'Open to brand, content and creative collaborations',
    footer: '© 2026 YANRUI LI · MADE WITH CURIOSITY',
  },
}

function Arrow({ diagonal = false }) {
  return <span className={diagonal ? 'arrow diagonal' : 'arrow'} aria-hidden="true">→</span>
}

function Header({ lang, setLang, t }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <a className="logo" href="#top" aria-label="Yanrui Li home">
        <span>Y</span><span>R</span>
      </a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open}>
        {open ? 'CLOSE' : 'MENU'}
      </button>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Primary navigation">
        {t.nav.map((item, index) => (
          <a key={item} href={`#${t.navIds[index]}`} onClick={() => setOpen(false)}>
            <sup>0{index + 1}</sup>{item}
          </a>
        ))}
      </nav>
      <div className="language" aria-label="Language selection">
        <button className={lang === 'zh' ? 'active' : ''} onClick={() => setLang('zh')}>中</button>
        <span>/</span>
        <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
      </div>
    </header>
  )
}

function Hero({ t }) {
  return (
    <section className="hero" id="top">
      <div className="hero-rule" />
      <p className="eyebrow">{t.eyebrow}</p>
      <div className="hero-title">
        <span className="hero-wordmark">YANRUI</span>
        <span className="hero-wordmark offset">LI</span>
      </div>
      <div className="hero-statement">
        <p>{t.heroLead}</p>
        <em>{t.heroScript}</em>
      </div>
      <p className="hero-sub">{t.heroSub}</p>
      <a className="round-link" href="#about"><span>{t.explore}</span><Arrow diagonal /></a>
      <div className="hero-note">
        <span>PORTFOLIO / 2026</span>
        <span>{t.based}</span>
      </div>
      <div className="paperclip" aria-hidden="true" />
    </section>
  )
}

function Cases({ t }) {
  const [active, setActive] = useState(0)
  return (
    <section className="cases section" id="cases">
      <div className="section-heading">
        <p className="kicker">{t.caseKicker}</p>
        <h2>{t.caseTitle}</h2>
        <p>{t.caseIntro}</p>
      </div>
      <div className="case-stage">
        <div className="envelope-back">
          <span className="address">TO: CURIOUS MINDS<br />FROM: YANRUI LI</span>
          <span className="postmark">PORTFOLIO<br />2026</span>
          {t.cases.map((item, index) => (
            <button
              key={item.id}
              className={`case-sticker sticker-${index + 1} ${active === index ? 'active' : ''}`}
              onClick={() => setActive(index)}
              aria-label={`${t.open}: ${item.title}`}
            >
              <span className="sticker-no">{item.no}</span>
              <strong>{item.title}</strong>
              <small>{item.tag}</small>
            </button>
          ))}
          <div className="envelope-front">
            <span>{t.open}</span>
            <svg viewBox="0 0 800 310" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 310V20L400 240L800 20V310Z" />
            </svg>
          </div>
        </div>
        <article className={`case-detail ${t.cases[active].tone}`} key={`${t.cases[active].id}-${t.cases[active].title}`}>
          <div className="case-photo">
            <img src={t.cases[active].image} alt="" />
            <span>{t.cases[active].en}</span>
          </div>
          <div className="case-copy">
            <div className="case-meta"><span>{t.cases[active].no}</span><span>{t.cases[active].tag}</span></div>
            <h3>{t.cases[active].title}</h3>
            <p>{t.cases[active].summary}</p>
            <ul>
              {t.cases[active].facts.map((fact) => <li key={fact}>{fact}</li>)}
            </ul>
            <div className="project-metrics">
              {t.cases[active].metrics.map(([value, label]) => (
                <div key={label}><strong>{value}</strong><span>{label}</span></div>
              ))}
            </div>
            <div className="case-result"><span>RESULT</span>{t.cases[active].result}</div>
          </div>
        </article>
      </div>
    </section>
  )
}

function About({ t }) {
  return (
    <section className="about section" id="about">
      <div className="profile-card">
        <div className="profile-portrait">
          <span className="portrait-initials">YL</span>
          <span className="portrait-label">BRAND<br />STORYTELLER</span>
          <div className="portrait-orbit" />
        </div>
        <div className="profile-lines">
          <span>NAME</span><em>Yanrui Li / 李沿睿</em>
          <span>BASED</span><em>Adelaide · Shanghai</em>
          <span>FOCUS</span><em>Strategy · Content · AI</em>
        </div>
        <span className="binder-clip" aria-hidden="true" />
      </div>
      <div className="about-content">
        <p className="kicker">{t.aboutKicker}</p>
        <h2>{t.aboutTitle}</h2>
        <p className="about-lead">{t.aboutBody}</p>
        <div className="stats">
          {t.stats.map(([value, label]) => (
            <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Credentials({ t }) {
  return (
    <>
      <section className="education-section section" id="education">
        <div className="credential-heading">
          <p className="kicker">{t.educationKicker}</p>
          <h2>{t.educationTitle}</h2>
          <p>{t.educationIntro}</p>
        </div>
        <div className="education-cards">
          {t.schools.map(([date, school, degree], index) => (
            <article key={school}>
              <span className="edu-index">0{index + 1}</span>
              <time>{date}</time>
              <h3>{school}</h3>
              <p>{degree}</p>
              <div className="edu-seal">YL<br /><small>EDU</small></div>
            </article>
          ))}
        </div>
      </section>
      <section className="experience-section section" id="experience">
        <div className="experience-heading">
          <p className="kicker">{t.experienceKicker}</p>
          <h2>{t.experienceTitle}</h2>
        </div>
        <div className="experience-list">
          {t.roles.map(([date, company, role], index) => (
            <article key={company}>
              <span className="role-index">0{index + 1}</span>
              <time>{date}</time>
              <div><h3>{company}</h3><p>{role}</p></div>
              <span className="role-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

function AIPractice({ t }) {
  const [active, setActive] = useState(0)
  return (
    <section className="ai-section section" id="ai">
      <div className="ai-intro">
        <p className="kicker">{t.aiKicker}</p>
        <h2>{t.aiTitle}</h2>
        <p>{t.aiIntro}</p>
      </div>
      <div className="folder-desk">
        <div className="folder-stack">
          {t.folders.map((folder, index) => (
            <button
              key={folder.tab}
              onClick={() => setActive(index)}
              className={`folder ${active === index ? 'active' : ''}`}
              style={{ '--index': index }}
            >
              <span className="folder-tab">{folder.tab}</span>
              <span className="folder-index">0{index + 1}</span>
            </button>
          ))}
          <article className="folder-content" key={t.folders[active].title}>
            <p className="folder-output">{t.folders[active].output}</p>
            <h3>{t.folders[active].title}</h3>
            <p>{t.folders[active].desc}</p>
            <div className="tool-tags">
              {t.folders[active].tools.map((tool) => <span key={tool}>{tool}</span>)}
            </div>
            <div className="ai-diagram" aria-hidden="true">
              <span>INPUT</span><i /><span>AI</span><i /><span>JUDGMENT</span><i /><span>OUTPUT</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function Contact({ t }) {
  const [copied, setCopied] = useState(false)
  const copyWechat = async () => {
    await navigator.clipboard.writeText(t.wechatValue)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <section className="contact section" id="contact">
      <p className="kicker">{t.contactKicker}</p>
      <h2><span>{t.contactTitleA}</span><em>{t.contactTitleB}</em></h2>
      <p className="contact-intro">{t.contactBody}</p>
      <div className="contact-sheet">
        <a href="tel:+61435666358"><span>{t.phone}</span><strong>+61 435 666 358</strong><Arrow diagonal /></a>
        <a href="mailto:ar1062515080@gmail.com"><span>{t.mail}</span><strong>ar1062515080@gmail.com</strong><Arrow diagonal /></a>
        <div><span>{t.wechat}</span><strong>{t.wechatValue}</strong><button className="copy-mark" onClick={copyWechat}>{copied ? t.copied : t.copy}</button></div>
      </div>
      <div className="availability"><i />{t.availability}</div>
      <footer><span>{t.footer}</span><a href="#top">BACK TO TOP ↑</a></footer>
    </section>
  )
}

function App() {
  const [lang, setLang] = useState('zh')
  const t = copy[lang]

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
    document.title = lang === 'zh' ? '李沿睿｜品牌传播作品集' : 'Yanrui Li — Brand Communication Portfolio'
  }, [lang])

  return (
    <>
      <Header lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Credentials t={t} />
        <Cases t={t} />
        <AIPractice t={t} />
        <Contact t={t} />
      </main>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
