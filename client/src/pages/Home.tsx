import { useEffect, useState } from "react";
import {
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  FileSearch,
  LockKeyhole,
  Pause,
  Play,
  ShieldCheck,
} from "lucide-react";
import { Link } from "wouter";

/**
 * Direção visual: landing page de resposta direta reinterpretada como editorial
 * educativo transparente. Coluna teatral, headline condensada, player dourado e
 * microinterações rápidas, sem temporizador artificial ou promessas financeiras.
 */
const brandMark = "/manus-storage/tenho-receber-mark_e85bbca7.png";
const videoPoster = "/manus-storage/video-poster-consulta-segura_ac0c56ff.jpg";
const officialChannels = "/manus-storage/canais-oficiais-visual_7f86297b.jpg";

const guideSteps = [
  {
    eyebrow: "PASSO 01",
    title: "Comece sempre pelo endereço oficial",
    text: "Digite o endereço do órgão diretamente no navegador. Evite links recebidos por mensagens inesperadas.",
  },
  {
    eyebrow: "PASSO 02",
    title: "Confira o domínio antes de informar dados",
    text: "Verifique a grafia do endereço e procure a conexão segura. Páginas oficiais não pedem sua senha bancária.",
  },
  {
    eyebrow: "PASSO 03",
    title: "Não pague para realizar uma consulta pública",
    text: "Consulte as regras na fonte responsável e desconfie de promessas de valor garantido ou liberação imediata.",
  },
  {
    eyebrow: "PASSO 04",
    title: "Guarde protocolos e canais de atendimento",
    text: "Registre as etapas realizadas e, em caso de dúvida, procure o atendimento oficial da instituição citada.",
  },
];

function VisualGuide() {
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      setStep((current) => {
        if (current === guideSteps.length - 1) {
          setPlaying(false);
          return current;
        }
        return current + 1;
      });
    }, 4600);
    return () => window.clearInterval(timer);
  }, [playing]);

  const startGuide = () => {
    if (!started) {
      setStarted(true);
      setStep(0);
    }
    setPlaying((current) => !current);
  };

  return (
    <div className={`visual-guide ${started ? "is-started" : ""}`}>
      <img
        src={videoPoster}
        alt="Apresentador de um guia educativo sobre consultas em fontes oficiais"
        className="visual-guide__poster"
      />
      <div className="visual-guide__shade" />

      {!started ? (
        <button className="visual-guide__start" type="button" onClick={startGuide}>
          <span className="visual-guide__play"><Play aria-hidden="true" fill="currentColor" /></span>
          <span>
            <strong>ASSISTIR AO GUIA VISUAL</strong>
            <small>Demonstração educativa • 20 segundos</small>
          </span>
        </button>
      ) : (
        <div className="visual-guide__content" aria-live="polite">
          <span className="visual-guide__eyebrow">{guideSteps[step].eyebrow}</span>
          <h2>{guideSteps[step].title}</h2>
          <p>{guideSteps[step].text}</p>
        </div>
      )}

      {started && (
        <div className="visual-guide__controls">
          <button type="button" onClick={startGuide} aria-label={playing ? "Pausar guia" : "Continuar guia"}>
            {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" fill="currentColor" />}
          </button>
          <div className="visual-guide__timeline" aria-label={`Etapa ${step + 1} de ${guideSteps.length}`}>
            {guideSteps.map((item, index) => (
              <button
                key={item.eyebrow}
                type="button"
                className={index <= step ? "is-complete" : ""}
                onClick={() => {
                  setStep(index);
                  setPlaying(false);
                }}
                aria-label={`Ir para ${item.eyebrow.toLowerCase()}`}
              />
            ))}
          </div>
          <span>{String(step + 1).padStart(2, "0")} / {String(guideSteps.length).padStart(2, "0")}</span>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="landing-shell">
      <header className="top-ribbon">
        <div className="top-ribbon__inner">
          <img src={brandMark} alt="" className="brand-mark" />
          <p>
            Veja como consultar possíveis valores com <strong>segurança e fontes oficiais</strong>
          </p>
          <span className="top-ribbon__status"><ShieldCheck aria-hidden="true" /> GUIA EDUCATIVO</span>
        </div>
      </header>

      <section className="hero" aria-labelledby="main-title">
        <div className="hero__signal hero__signal--one" />
        <div className="hero__signal hero__signal--two" />

        <div className="hero__content">
          <div className="hero__brand">
            <img src={brandMark} alt="Símbolo Consulta Clara" />
            <span>CONSULTA CLARA</span>
          </div>

          <p className="hero__kicker"><FileSearch aria-hidden="true" /> INFORMAÇÃO PARA DECIDIR COM CALMA</p>
          <h1 id="main-title">
            Descubra como verificar<br />
            <em>possíveis valores</em> sem cair em
            <strong> promessas fáceis</strong>
          </h1>
          <p className="hero__subtitle">
            Um passo a passo direto para reconhecer canais legítimos, proteger seus dados e entender o que realmente pode ser consultado.
          </p>

          <div className="player-frame">
            <VisualGuide />
          </div>

          <div className="availability-note">
            <LockKeyhole aria-hidden="true" />
            <span><strong>ACESSO IMEDIATO E GRATUITO</strong> — sem bloqueio por tempo e sem pedido de senha bancária.</span>
          </div>

          <div className="trust-grid" aria-label="Compromissos de transparência">
            <div><CheckCircle2 aria-hidden="true" /><span><strong>Sem promessa</strong> de resultado</span></div>
            <div><ShieldCheck aria-hidden="true" /><span><strong>Sem coleta</strong> de CPF nesta página</span></div>
            <div><FileCheck2 aria-hidden="true" /><span><strong>Fontes oficiais</strong> em primeiro lugar</span></div>
          </div>
        </div>
      </section>

      <section className="official-section" aria-labelledby="official-title">
        <div className="official-section__visual">
          <img src={officialChannels} alt="Dispositivos exibindo uma verificação segura de documentos" />
          <span className="visual-seal"><ShieldCheck aria-hidden="true" /> VERIFICAÇÃO CONSCIENTE</span>
        </div>
        <div className="official-section__copy">
          <span className="section-number">01 / FONTE</span>
          <h2 id="official-title">Quando o assunto é seu dinheiro, <em>confirme na origem.</em></h2>
          <p>
            O Sistema de Valores a Receber é um serviço oficial do Banco Central. A consulta deve ser feita no endereço oficial, sem intermediários prometendo resultado garantido.
          </p>
          <a
            className="official-cta"
            href="https://valoresareceber.bcb.gov.br/publico"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACESSAR O CANAL OFICIAL <ExternalLink aria-hidden="true" />
          </a>
          <small>Você será direcionado para um domínio externo do Banco Central do Brasil.</small>
        </div>
      </section>

      <section className="notice-panel">
        <div className="notice-panel__index">02</div>
        <div>
          <span>NOTA DE TRANSPARÊNCIA</span>
          <h2>Este site não consulta valores em seu nome.</h2>
          <p>
            O conteúdo é educativo e não substitui o atendimento de órgãos ou instituições responsáveis. Não há garantia de saldo, benefício, crédito ou resultado financeiro. Nunca compartilhe senhas, códigos de autenticação ou dados de cartão para realizar uma consulta.
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__brand">
          <img src={brandMark} alt="" />
          <div><strong>Consulta Clara</strong><span>Orientação digital independente</span></div>
        </div>
        <nav aria-label="Links institucionais">
          <Link href="/termos">Termos de Uso</Link>
          <Link href="/privacidade">Privacidade</Link>
          <Link href="/cookies">Cookies</Link>
          <Link href="/contato">Contato</Link>
        </nav>
        <p>
          Projeto independente, sem vínculo, representação ou afiliação com o Governo Federal, Banco Central, Receita Federal ou instituições financeiras. Os nomes de serviços públicos são citados apenas para orientação e direcionamento às fontes oficiais.
        </p>
        <div className="site-footer__bottom">
          <span>© 2026 Consulta Clara. Conteúdo educativo.</span>
          <span>Dados empresariais e contato devem ser revisados pelo responsável antes da publicação.</span>
        </div>
      </footer>
    </main>
  );
}
