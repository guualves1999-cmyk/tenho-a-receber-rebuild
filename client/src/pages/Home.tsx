import { createElement, useEffect, useState } from "react";

/**
 * Especificação: reprodução autorizada da landing page original /avb/.
 * Preserva composição, proporções, cores, player e temporização de 470 segundos.
 */
const PLAYER_ID = "vid-6a3fcccc2a950a2cf9463606";
const CHECKOUT_URL = "https://payt.site/ypCRvNZ";

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = window.setTimeout(() => setUnlocked(true), 470_000);
    return () => window.clearTimeout(timer);
  }, []);

  const player = createElement(
    "vturb-smartplayer",
    {
      id: PLAYER_ID,
      "original-id": PLAYER_ID,
      style: { display: "block", margin: "0 auto", width: "100%", minHeight: "100%" },
    },
    createElement(
      "div",
      { slot: "preload", className: "player-preload" },
      createElement("div", { className: "player-spinner", "aria-hidden": "true" }),
      createElement("div", { className: "player-percentage" }, "99%"),
    ),
  );

  return (
    <main className="avb-page" data-state={unlocked ? "unlocked" : "locked"}>
      <div className="avb-topbar">
        Assista ao vídeo curto para descobrir <br />
        <b>valores que você pode ter a receber!</b>
      </div>

      <div id="heroHeadline" aria-label="Programa Resgate seus Valores">
        <picture>
          <source media="(min-width:769px)" srcSet="/manus-storage/headlinedesk_56c8e3f7.webp" />
          <img
            src="/manus-storage/headline_495c750c.webp"
            alt="Programa Resgate seus Valores"
            width="1500"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
      </div>

      <div className="avb-video-area">
        <div className="avb-video-frame">{player}</div>
      </div>

      {!unlocked && (
        <div id="locked" className="avb-locked">
          🔒 SEU ACESSO SERÁ LIBERADO <br />AO FINAL DO VÍDEO
        </div>
      )}

      {unlocked && (
        <div id="ctaWrap" className="avb-cta-wrap">
          <a href={CHECKOUT_URL} className="avb-cta" aria-label="Acessar a oferta do Programa Resgate seus Valores">
            QUERO DESCOBRIR SE TENHO <br />VALORES A RECEBER
          </a>
          <div className="avb-safe">
            <img
              src="/manus-storage/saver_b5e28be2.webp"
              width="1000"
              height="180"
              alt="Pagamento seguro · Pix ou cartão em 12x · Garantia de 7 dias"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      )}

      {!unlocked && (
        <div id="mediaProof" className="avb-media-proof">
          <img
            src="/manus-storage/midia2_7d537934.webp"
            srcSet="/manus-storage/midia2-720_c27718e1.webp 720w, /manus-storage/midia2_7d537934.webp 1500w"
            sizes="(max-width:430px) 88vw, min(338px,27vw)"
            width="1500"
            height="171"
            alt="Tema já noticiado pela imprensa brasileira"
            loading="lazy"
            decoding="async"
          />
          <div className="avb-media-proof-text">Tema já noticiado pela imprensa brasileira</div>
        </div>
      )}

      <footer className="avb-footer">
        <div className="avb-footer-company">Maxx Marketing Internet LTDA</div>
        <div className="avb-footer-cnpj">CNPJ 20.481.195/0001-46</div>

        <nav className="avb-footer-links" aria-label="Links institucionais">
          <a href="https://tenhoareceber.com/termos.php" target="_blank" rel="noopener noreferrer">Termos de Uso</a> ·
          <a href="https://tenhoareceber.com/privacidade.php" target="_blank" rel="noopener noreferrer">Política de Privacidade</a> ·
          <a href="https://tenhoareceber.com/cookies.php" target="_blank" rel="noopener noreferrer">Política de Cookies</a> ·
          <a href="https://tenhoareceber.com/contato.php" target="_blank" rel="noopener noreferrer">Contato</a>
        </nav>

        <div className="avb-footer-disclaimer">
          O Programa Resgate seus Valores é um produto digital de caráter exclusivamente informativo e educacional.
          Não somos um órgão governamental, instituição financeira ou entidade pública, nem possuímos vínculo, representação,
          autorização ou afiliação com o Governo Federal, Banco Central, Receita Federal ou qualquer outro órgão público. O
          programa apresenta informações e procedimentos para que o próprio usuário consulte possíveis valores, direitos ou
          recursos disponíveis por meios oficiais. Não garantimos a existência de valores a receber nem qualquer resultado
          financeiro específico. Os resultados variam de acordo com a situação individual de cada usuário.
        </div>

        <div className="avb-footer-copyright">Programa Resgate seus Valores® 2026 Todos os direitos reservados</div>
      </footer>
    </main>
  );
}
