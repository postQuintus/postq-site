import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности — postq vpn',
  description: 'Политика обработки персональных данных сервиса postq vpn',
}

const sections = [
  {
    id: 's1',
    num: '1',
    title: 'Общие положения',
    content: (
      <>
        <p>Настоящая Политика обработки персональных данных (далее — «Политика») разработана в соответствии с Федеральным законом №152-ФЗ «О персональных данных» и определяет правила обработки и меры по защите персональных данных в сервисе <strong>postq vpn</strong> (далее — «Сервис»).</p>
        <p>Политика регулирует правоотношения между пользователем сети Интернет (далее — «Клиент») и Сервисом в части обработки персональных данных.</p>
        <p>Клиент обязан ознакомиться с настоящей Политикой до начала использования сервисов, предложений и услуг, предоставляемых через <a href="https://t.me/postq_vpn_bot">@postq_vpn_bot</a> (далее — «Сайт»).</p>
        <p>Продолжение использования Сервиса означает полное согласие Клиента с условиями настоящей Политики. В случае несогласия с положениями Политики, Клиент обязан прекратить использование Сайта и его сервисов.</p>
        <div className="highlight">Сервис не собирает и не обрабатывает персональные данные в смысле, установленном Федеральным законом №152-ФЗ «О персональных данных».</div>
      </>
    ),
  },
  {
    id: 's2',
    num: '2',
    title: 'Определения',
    content: (
      <>
        <p><strong>Персональные данные</strong> — любая информация, относящаяся к прямо или косвенно определённому физическому лицу (субъекту персональных данных).</p>
        <p><strong>Обработка персональных данных</strong> — любое действие или совокупность действий с персональными данными, совершаемых как с использованием средств автоматизации, так и без них, включая: сбор, запись, систематизацию, накопление, хранение, уточнение, извлечение, использование, передачу, обезличивание, блокирование, удаление и уничтожение данных.</p>
        <p><strong>Автоматизированная обработка</strong> — обработка персональных данных с помощью средств вычислительной техники.</p>
        <p><strong>Сайт</strong> — совокупность материалов, программного обеспечения и баз данных, обеспечивающих доступ к сервису по адресу: <a href="https://t.me/postq_vpn_bot">https://t.me/postq_vpn_bot</a>.</p>
        <p><strong>Пользователь</strong> — физическое лицо, использующее функционал Сервиса.</p>
      </>
    ),
  },
  {
    id: 's3',
    num: '3',
    title: 'Принципы обработки персональных данных',
    content: (
      <>
        <p>Сервис не собирает и не обрабатывает персональные данные в смысле, определённом Федеральным законом №152-ФЗ «О персональных данных».</p>
        <p>Единственная техническая информация, доступная Сервису — это <strong>Telegram ID</strong>, получаемый при взаимодействии с Telegram-ботом.</p>
        <div className="highlight">Telegram ID не позволяет установить личность пользователя без дополнительной информации и не является персональными данными. Это подтверждается Письмом Роскомнадзора от 24 сентября 2024 г. № 75084-02-11/77.</div>
        <p>Информация о платежах и платёжных данных пользователей не передаётся в Сервис.</p>
      </>
    ),
  },
  {
    id: 's4',
    num: '4',
    title: 'Цели обработки данных',
    content: (
      <>
        <p>Telegram ID используется исключительно для:</p>
        <ul>
          <li>автоматического предоставления доступа к Сервису;</li>
          <li>уведомления пользователя о статусе подписки;</li>
          <li>идентификации пользователя для использования услуг Сервиса;</li>
          <li>улучшения качества обслуживания и разработки новых услуг;</li>
          <li>информирования о новых продуктах, специальных предложениях и событиях.</li>
        </ul>
      </>
    ),
  },
  {
    id: 's5',
    num: '5',
    title: 'Условия обработки и хранения',
    content: (
      <>
        <p>Telegram ID может храниться в базах данных Сервиса исключительно в технических целях — для обеспечения авторизации и автоматической активации/деактивации доступа.</p>
        <p>Сервис не передает и не раскрывает Telegram ID третьим лицам, за исключением случаев, предусмотренных законодательством Российской Федерации.</p>
      </>
    ),
  },
  {
    id: 's6',
    num: '6',
    title: 'Обеспечение безопасности',
    content: (
      <p>Сервис принимает необходимые правовые, организационные и технические меры для защиты информации от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования и распространения.</p>
    ),
  },
  {
    id: 's7',
    num: '7',
    title: 'Права субъекта данных',
    content: (
      <>
        <p>Субъект персональных данных имеет право на получение информации, касающейся обработки его персональных данных, за исключением случаев, предусмотренных федеральными законами.</p>
        <p>Субъект вправе требовать от Сервиса уточнения, блокирования или уничтожения персональных данных в случае, если они являются неполными, устаревшими, неточными или незаконно полученными.</p>
        <p>Субъект вправе обратиться к Сервису и потребовать прекращения обработки в случае нарушения законодательства РФ, а также по собственному желанию — без объяснения причин.</p>
      </>
    ),
  },
  {
    id: 's8',
    num: '8',
    title: 'Передача данных третьим лицам',
    content: (
      <>
        <p>Сервис имеет право передавать данные третьим лицам в следующих случаях:</p>
        <ul>
          <li>клиент выразил явное согласие на такую передачу;</li>
          <li>передача необходима для предоставления пользователю определённого сервиса либо для исполнения договора;</li>
          <li>передача предусмотрена российским или иным применимым законодательством.</li>
        </ul>
      </>
    ),
  },
  {
    id: 's9',
    num: '9',
    title: 'Хранение данных',
    content: (
      <p>Данные пользователей обрабатываются и хранятся в течение срока, необходимого для достижения целей их обработки, либо в течение срока, установленного законодательством РФ, либо в течение срока действия договора с пользователем.</p>
    ),
  },
  {
    id: 's10',
    num: '10',
    title: 'Изменения политики',
    content: (
      <>
        <p>Сервис оставляет за собой право вносить изменения в настоящую Политику, в том числе в случаях, когда изменения связаны с изменениями в применимом законодательстве или в работе Сайта.</p>
        <p>При внесении изменений в актуальной редакции указывается дата последнего обновления. Новая редакция вступает в силу с момента её размещения. Пользователь обязуется самостоятельно контролировать наличие изменений.</p>
      </>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <style>{`
        .privacy-main p { color: var(--text2); margin-bottom: 0.75rem; }
        .privacy-main p:last-child { margin-bottom: 0; }
        .privacy-main strong { color: var(--text); font-weight: 500; }
        .privacy-main a { color: var(--accent); text-decoration: none; }
        .privacy-main a:hover { text-decoration: underline; }
        .privacy-main ul, .privacy-main ol { padding-left: 1.25rem; color: var(--text2); }
        .privacy-main li { margin-bottom: 0.4rem; }
        .highlight {
          background: rgba(207,0,163,0.08);
          border-left: 3px solid var(--accent);
          border-radius: 0 8px 8px 0;
          padding: 0.75rem 1rem;
          margin: 1rem 0;
          color: var(--text2);
          font-size: 14px;
        }
      `}</style>

      <main className="privacy-main" style={{ maxWidth: 760, margin: '0 auto', padding: '5rem 2rem 6rem' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'rgba(207,0,163,0.1)',
          border: '1px solid rgba(207,0,163,0.25)',
          color: '#cf00a3',
          fontSize: 12, fontWeight: 500,
          padding: '4px 12px', borderRadius: 100,
          marginBottom: '1.5rem',
        }}>
          📄 Политика конфиденциальности
        </div>

        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem', lineHeight: 1.3, fontFamily: "'GT Eesti Pro Display', system-ui, -apple-system, sans-serif" }}>
          Политика обработки персональных данных
        </h1>

        <div style={{
          color: 'var(--text2)', fontSize: 13, marginBottom: '2.5rem',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{ width: 4, height: 4, background: 'var(--accent)', borderRadius: '50%', display: 'inline-block' }} />
          Последнее обновление: 21 марта 2026 г.
        </div>

        <div style={{
          background: 'var(--bg2)', border: '1px solid var(--border)',
          borderRadius: 12, padding: '1.25rem 1.5rem', marginBottom: '2.5rem',
        }}>
          <div style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text2)', marginBottom: '0.75rem' }}>
            Содержание
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`} style={{
                color: 'var(--text2)', textDecoration: 'none', fontSize: 13,
                background: 'var(--bg3)', padding: '3px 10px',
                borderRadius: 6, border: '1px solid var(--border)',
              }}>
                {s.num}. {s.title}
              </a>
            ))}
          </div>
        </div>

        {sections.map((section, i) => (
          <div key={section.id}>
            <section id={section.id} style={{ marginBottom: '2.5rem' }}>
              <h2 style={{
                fontSize: '1.1rem', fontWeight: 600, color: 'var(--text)',
                marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <span style={{
                  background: 'rgba(207,0,163,0.15)', color: 'var(--accent)',
                  fontSize: 11, fontWeight: 700, width: 24, height: 24,
                  borderRadius: 6, display: 'inline-flex', alignItems: 'center',
                  justifyContent: 'center', flexShrink: 0,
                }}>{section.num}</span>
                {section.title}
              </h2>
              {section.content}
            </section>
            {i < sections.length - 1 && (
              <div style={{ height: 1, background: 'var(--border)', margin: '2.5rem 0' }} />
            )}
          </div>
        ))}
      </main>

      <footer style={{
        textAlign: 'center', padding: '2rem',
        color: 'var(--text2)', fontSize: 13,
        borderTop: '1px solid var(--border)',
      }}>
        © 2026 postq vpn ·{' '}
        <a href="https://t.me/postq_vpn_bot" style={{ color: 'var(--accent)', textDecoration: 'none' }}>@postq_vpn_bot</a>
        {' '}·{' '}
        <Link href="/privacy" style={{ color: 'var(--text2)', textDecoration: 'none' }}>Политика конфиденциальности</Link>
      </footer>
    </>
  )
}
