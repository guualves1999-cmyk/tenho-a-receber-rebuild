import { ArrowLeft, Cookie, FileText, Mail, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

/**
 * Direção visual: documento editorial em papel escuro, mantendo o azul-marinho e o
 * ouro da landing page com leitura confortável e avisos operacionais explícitos.
 */
type LegalDocument = "termos" | "privacidade" | "cookies" | "contato";

const documents: Record<LegalDocument, {
  eyebrow: string;
  title: string;
  intro: string;
  icon: typeof FileText;
  sections: Array<{ title: string; body: string }>;
}> = {
  termos: {
    eyebrow: "INFORMAÇÕES LEGAIS",
    title: "Termos de Uso",
    intro: "Condições gerais para acesso a este conteúdo educativo e aos links de fontes externas.",
    icon: FileText,
    sections: [
      { title: "Natureza do conteúdo", body: "Este site apresenta orientação geral sobre segurança digital e caminhos de consulta. Ele não realiza consultas, não movimenta recursos e não oferece aconselhamento financeiro individualizado." },
      { title: "Resultados e responsabilidade", body: "A existência de valores ou direitos depende da situação de cada pessoa e dos critérios da instituição responsável. Nenhum conteúdo desta página constitui promessa de resultado." },
      { title: "Serviços de terceiros", body: "Links externos são fornecidos para conveniência. O usuário deve conferir o domínio, as regras e as políticas do serviço responsável antes de fornecer qualquer informação." },
    ],
  },
  privacidade: {
    eyebrow: "PROTEÇÃO DE DADOS",
    title: "Política de Privacidade",
    intro: "Resumo transparente sobre o tratamento de dados nesta versão estática do projeto.",
    icon: ShieldCheck,
    sections: [
      { title: "Dados informados pelo visitante", body: "Esta página não possui cadastro, formulário, área de acesso ou campo para CPF. Não solicitamos senha bancária, código de autenticação ou dados de cartão." },
      { title: "Dados técnicos", body: "A infraestrutura de hospedagem poderá registrar informações técnicas essenciais, como endereço IP, navegador, data e horário, para segurança e funcionamento do serviço." },
      { title: "Contato e direitos", body: "Antes da publicação comercial, o responsável pelo site deverá informar a identidade do controlador, o canal de privacidade e os procedimentos para exercício dos direitos previstos na LGPD." },
    ],
  },
  cookies: {
    eyebrow: "PREFERÊNCIAS",
    title: "Política de Cookies",
    intro: "Como esta demonstração lida com armazenamento local e tecnologias semelhantes.",
    icon: Cookie,
    sections: [
      { title: "Cookies próprios", body: "A experiência implementada não cria cookies próprios para identificar visitantes, medir cliques ou liberar conteúdo por temporizador." },
      { title: "Infraestrutura", body: "A plataforma de hospedagem poderá empregar recursos estritamente necessários para segurança, disponibilidade e métricas técnicas, conforme suas próprias políticas." },
      { title: "Versão pública", body: "Qualquer ferramenta futura de publicidade, vídeo, atendimento ou análise deverá ser documentada aqui e, quando aplicável, depender da escolha do visitante." },
    ],
  },
  contato: {
    eyebrow: "ATENDIMENTO",
    title: "Contato",
    intro: "Canal de atendimento a ser configurado pelo responsável antes da publicação pública.",
    icon: Mail,
    sections: [
      { title: "Responsável pelo projeto", body: "Os dados empresariais, o nome do responsável e o e-mail oficial ainda não foram fornecidos para esta reconstrução. Essas informações não devem ser inventadas." },
      { title: "Segurança no atendimento", body: "Nenhum atendimento legítimo deve pedir senha bancária, código recebido por SMS, token de autenticação ou credenciais de acesso a contas." },
      { title: "Próxima etapa", body: "Antes de publicar, cadastre um e-mail no domínio oficial e revise os textos legais com um profissional adequado ao modelo real da operação." },
    ],
  },
};

export default function Legal({ document }: { document: LegalDocument }) {
  const content = documents[document];
  const Icon = content.icon;

  return (
    <main className="legal-shell">
      <div className="legal-topline" />
      <article className="legal-card">
        <Link href="/" className="legal-back"><ArrowLeft aria-hidden="true" /> Voltar para a página principal</Link>
        <div className="legal-heading">
          <span className="legal-heading__icon"><Icon aria-hidden="true" /></span>
          <div>
            <span>{content.eyebrow}</span>
            <h1>{content.title}</h1>
          </div>
        </div>
        <p className="legal-intro">{content.intro}</p>
        <div className="draft-note">
          <strong>Documento de trabalho.</strong> Revise com os dados reais do responsável e orientação jurídica antes da publicação comercial.
        </div>
        <div className="legal-sections">
          {content.sections.map((section, index) => (
            <section key={section.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h2>{section.title}</h2><p>{section.body}</p></div>
            </section>
          ))}
        </div>
        <div className="legal-footer">
          <span>Consulta Clara • Conteúdo educativo</span>
          <Link href="/">Página principal</Link>
        </div>
      </article>
    </main>
  );
}
