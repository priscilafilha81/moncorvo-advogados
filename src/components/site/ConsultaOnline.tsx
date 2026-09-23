import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/contact";
import { useReveal } from "@/hooks/use-reveal";

export const CONSULTA_ONLINE_EVENT = "consulta-online-select";

const areaFlows = {
  "Direito Trabalhista": [
    {
      key: "assunto",
      question: "Qual situação mais se aproxima do seu caso?",
      options: [
        "Fui demitido(a)",
        "Tenho verbas trabalhistas pendentes",
        "Tenho problema com horas extras",
        "Quero reconhecimento de vínculo empregatício",
        "Estou enfrentando outro problema durante o contrato de trabalho",
        "Outro assunto trabalhista",
      ],
    },
    {
      key: "situacao",
      question: "Você ainda está trabalhando nessa empresa?",
      options: ["Sim", "Não"],
    },
    { key: "resumo", question: "Conte brevemente o que aconteceu.", type: "textarea" },
  ],
  "Direito Previdenciário": [
    {
      key: "assunto",
      question: "Qual assunto você precisa resolver?",
      options: [
        "Aposentadoria",
        "Benefício do INSS",
        "Auxílio por incapacidade",
        "Benefício negado",
        "Revisão de benefício",
        "Outro assunto previdenciário",
      ],
    },
    {
      key: "situacao",
      question: "Você já fez algum pedido ao INSS?",
      options: [
        "Sim, e foi aprovado",
        "Sim, mas foi negado",
        "Está em análise",
        "Ainda não fiz o pedido",
      ],
    },
    { key: "resumo", question: "Conte brevemente sua situação.", type: "textarea" },
  ],
  "Direito do Consumidor": [
    {
      key: "assunto",
      question: "Qual problema você está enfrentando?",
      options: [
        "Cobrança indevida",
        "Nome negativado indevidamente",
        "Fraude ou golpe",
        "Problema com banco ou instituição financeira",
        "Danos materiais ou morais",
        "Problema com produto ou serviço",
        "Outro",
      ],
    },
    {
      key: "situacao",
      question: "Você possui documentos, comprovantes ou registros relacionados ao problema?",
      options: ["Sim", "Não"],
    },
    { key: "resumo", question: "Conte brevemente o que aconteceu.", type: "textarea" },
  ],
  "Direito Bancário": [
    {
      key: "assunto",
      question: "Qual é o principal problema?",
      options: [
        "Juros que considero abusivos",
        "Renegociação de dívida",
        "Empréstimo ou financiamento",
        "Golpe ou fraude bancária",
        "Cobrança indevida",
        "Revisão de contrato",
        "Outro problema bancário",
      ],
    },
    { key: "instituicao", question: "Qual instituição financeira está envolvida?", type: "text" },
    {
      key: "situacao",
      question: "Qual é aproximadamente o valor envolvido?",
      options: [
        "Até R$ 10 mil",
        "De R$ 10 mil a R$ 50 mil",
        "De R$ 50 mil a R$ 100 mil",
        "Acima de R$ 100 mil",
        "Não sei informar",
      ],
    },
    { key: "resumo", question: "Conte brevemente sua situação.", type: "textarea" },
  ],
  "Assessoria ao Terceiro Setor": [
    {
      key: "assunto",
      question: "Qual tipo de organização precisa de atendimento?",
      options: [
        "Associação",
        "Instituto",
        "Fundação",
        "Organização religiosa",
        "Outra organização sem fins lucrativos",
        "Ainda estamos constituindo a organização",
      ],
    },
    {
      key: "necessidade",
      question: "Qual é a principal necessidade neste momento?",
      options: [
        "Constituição ou regularização",
        "Alteração de estatuto",
        "Governança",
        "Compliance",
        "Contratos",
        "Segurança jurídica da organização",
        "Orientação jurídica recorrente",
        "Outro assunto",
      ],
    },
    {
      key: "situacao",
      question: "A organização já possui CNPJ?",
      options: ["Sim", "Não", "Está em processo de constituição"],
    },
    { key: "resumo", question: "Conte brevemente o que vocês precisam.", type: "textarea" },
  ],
} as const;

type Area = keyof typeof areaFlows;
type Answers = Record<string, string>;
type Step = { key: string; question: string; type?: string; options?: readonly string[] };
type SendState = "ready" | "opened" | "returned";
type SavedConsulta = {
  area: Area | "";
  answers: Answers;
  step: number;
  preselected: boolean;
  sendState: SendState;
};
const areas = Object.keys(areaFlows) as Area[];
const CONSULTA_STORAGE_KEY = "mas-consulta-online";

function loadSavedConsulta(): SavedConsulta {
  const empty: SavedConsulta = {
    area: "",
    answers: {},
    step: 0,
    preselected: false,
    sendState: "ready",
  };
  try {
    const saved = localStorage.getItem(CONSULTA_STORAGE_KEY);
    return saved ? { ...empty, ...JSON.parse(saved) } : empty;
  } catch {
    return empty;
  }
}

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function ConsultaOnline() {
  const sectionRef = useReveal<HTMLElement>();
  const [initialState] = useState(loadSavedConsulta);
  const [area, setArea] = useState<Area | "">(initialState.area);
  const [answers, setAnswers] = useState<Answers>(initialState.answers);
  const [step, setStep] = useState(initialState.step);
  const [preselected, setPreselected] = useState(initialState.preselected);
  const [sendState, setSendState] = useState<SendState>(initialState.sendState);
  const whatsappWasLeft = useRef(false);
  const skipNextPersistence = useRef(false);

  useEffect(() => {
    const selectArea = (event: Event) => {
      const selected = (event as CustomEvent<Area>).detail;
      if (!areas.includes(selected)) return;
      setArea(selected);
      setPreselected(true);
      setAnswers({});
      setStep(0);
      setSendState("ready");
    };
    window.addEventListener(CONSULTA_ONLINE_EVENT, selectArea);
    return () => window.removeEventListener(CONSULTA_ONLINE_EVENT, selectArea);
  }, []);

  useEffect(() => {
    if (skipNextPersistence.current) {
      skipNextPersistence.current = false;
      localStorage.removeItem(CONSULTA_STORAGE_KEY);
      return;
    }
    localStorage.setItem(
      CONSULTA_STORAGE_KEY,
      JSON.stringify({ area, answers, step, preselected, sendState }),
    );
  }, [area, answers, step, preselected, sendState]);

  useEffect(() => {
    if (sendState !== "opened") return;

    const markAway = () => {
      whatsappWasLeft.current = true;
    };
    const markReturned = () => {
      if (whatsappWasLeft.current) setSendState("returned");
    };
    const handleVisibility = () => {
      if (document.visibilityState === "hidden") markAway();
      else markReturned();
    };

    window.addEventListener("blur", markAway);
    window.addEventListener("focus", markReturned);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      window.removeEventListener("blur", markAway);
      window.removeEventListener("focus", markReturned);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [sendState]);

  const markWhatsappOpened = () => {
    whatsappWasLeft.current = false;
    setSendState("opened");
  };

  const startNewConsulta = () => {
    skipNextPersistence.current = true;
    whatsappWasLeft.current = false;
    setArea("");
    setAnswers({});
    setStep(0);
    setPreselected(false);
    setSendState("ready");
    document.getElementById("consulta-online")?.scrollIntoView({ behavior: "smooth" });
  };

  const steps = useMemo<Step[]>(() => {
    const result: Step[] = [
      { key: "nome", question: "Para começarmos, qual é o seu primeiro nome?", type: "text" },
    ];
    if (!preselected)
      result.push({
        key: "area",
        question: answers.nome
          ? `Olá, ${answers.nome}. Em qual área você precisa de atendimento?`
          : "Em qual área você precisa de atendimento?",
        options: areas,
      });
    if (area) result.push(...areaFlows[area]);
    result.push(
      {
        key: "whatsapp",
        question: "Qual é o melhor número de WhatsApp para entrarmos em contato?",
        type: "tel",
      },
      { key: "email", question: "Se desejar, informe também seu e-mail.", type: "email" },
      { key: "privacidade", question: "Tudo pronto para concluir?", type: "privacy" },
      { key: "conclusao", question: "", type: "done" },
    );
    return result;
  }, [area, answers.nome, preselected]);

  const current = steps[step];
  const isDone = current?.type === "done";
  const progressTotal = steps.length - 1;
  const value = current ? answers[current.key] || "" : "";

  const advance = () => setStep((currentStep) => Math.min(currentStep + 1, steps.length - 1));
  const choose = (option: string) => {
    if (current.key === "area") setArea(option as Area);
    setAnswers((existing) => ({ ...existing, [current.key]: option }));
    window.setTimeout(advance, 180);
  };
  const canAdvance =
    current?.key === "email" || current?.type === "privacy" || value.trim().length > 0;
  const emailValid = current?.key !== "email" || !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const phoneValid = current?.key !== "whatsapp" || value.replace(/\D/g, "").length >= 10;

  const whatsappMessage = useMemo(() => {
    const labelsByArea: Partial<Record<Area, Record<string, string>>> = {
      "Direito Trabalhista": { assunto: "Assunto", situacao: "Ainda trabalha na empresa" },
      "Direito Previdenciário": { assunto: "Assunto", situacao: "Situação do pedido ao INSS" },
      "Direito do Consumidor": {
        assunto: "Problema",
        situacao: "Possui documentos ou comprovantes",
      },
      "Direito Bancário": {
        assunto: "Assunto",
        instituicao: "Instituição financeira",
        situacao: "Valor aproximado",
      },
      "Assessoria ao Terceiro Setor": {
        assunto: "Tipo de organização",
        necessidade: "Principal necessidade",
        situacao: "Situação do CNPJ",
      },
    };
    const labels = area ? labelsByArea[area] || {} : {};
    const details = Object.entries(answers)
      .filter(
        ([key, answer]) => !["nome", "area", "whatsapp", "email", "resumo"].includes(key) && answer,
      )
      .map(([key, answer]) => `${labels[key] || key}: ${answer}`);
    return [
      "Olá, vim pela Consulta Online do MAS Advogados Associados.",
      "",
      `Nome: ${answers.nome || ""}`,
      `Área: ${area}`,
      ...details,
      `WhatsApp para contato: ${answers.whatsapp || ""}`,
      ...(answers.email ? [`E-mail: ${answers.email}`] : []),
      "",
      "Resumo da situação:",
      answers.resumo || "",
      "",
      "Gostaria de solicitar atendimento.",
    ].join("\n");
  }, [answers, area]);

  const consultationWhatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section
      id="consulta-online"
      ref={sectionRef}
      className="reveal-on-scroll scroll-mt-20 py-24 sm:py-32 bg-secondary/45"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Atendimento guiado
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-primary">ATENDIMENTO ONLINE</h2>
          <p className="mx-auto mt-5 text-lg text-ink/85">
            Conte-nos brevemente como podemos ajudar.
          </p>
          <p className="mx-auto mt-2 text-sm sm:text-base text-muted-foreground">
            Responda algumas perguntas rápidas para que o MAS Advogados Associados possa compreender
            melhor a sua necessidade.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-10">
          {!isDone && (
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
                <span>
                  Etapa {Math.min(step + 1, progressTotal)} de {progressTotal}
                </span>
                <span>
                  {Math.round((Math.min(step + 1, progressTotal) / progressTotal) * 100)}%
                </span>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-gold transition-all duration-500"
                  style={{ width: `${(Math.min(step + 1, progressTotal) / progressTotal) * 100}%` }}
                />
              </div>
            </div>
          )}

          <div
            key={`${current?.key}-${step}`}
            className="animate-in fade-in slide-in-from-right-2 duration-300"
          >
            {preselected && step === 0 && area && (
              <p className="mb-5 rounded-xl border border-gold/25 bg-gold/10 px-4 py-3 text-sm text-primary">
                Você selecionou <strong>{area}</strong>. Vamos entender melhor sua situação.
              </p>
            )}

            {isDone ? (
              <div className="text-center">
                {sendState !== "ready" ? (
                  <>
                    <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold text-gold-foreground">
                      <Check className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-display text-3xl text-primary">
                      {sendState === "returned"
                        ? `Tudo certo por aqui, ${answers.nome}.`
                        : `Solicitação preparada, ${answers.nome}.`}
                    </h3>
                    <p className="mx-auto mt-4 text-muted-foreground">
                      {sendState === "returned" ? (
                        <>
                          Se você já confirmou o envio da mensagem no WhatsApp, sua solicitação está
                          concluída.
                          <br />
                          <span className="mt-2 block">
                            Caso ainda não tenha enviado, você pode abrir o WhatsApp novamente.
                          </span>
                        </>
                      ) : (
                        "Confirme o envio da mensagem no WhatsApp para concluir seu atendimento."
                      )}
                    </p>
                    <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                      <a
                        href={consultationWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={markWhatsappOpened}
                        className="inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-primary hover:text-gold"
                      >
                        <MessageCircle className="h-4 w-4" /> Abrir WhatsApp novamente
                      </a>
                      {sendState === "returned" && (
                        <button
                          type="button"
                          onClick={startNewConsulta}
                          className="inline-flex min-h-11 items-center justify-center rounded-full border border-primary/25 px-5 py-2.5 text-sm font-medium text-primary hover:border-gold hover:text-gold"
                        >
                          Nova solicitação
                        </button>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="font-display text-3xl text-primary">
                      Sua solicitação está pronta para ser enviada.
                    </h3>
                    <p className="mx-auto mt-4 text-muted-foreground">
                      Confira e clique abaixo para enviar suas informações ao MAS Advogados
                      Associados.
                    </p>
                    <a
                      href={consultationWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={markWhatsappOpened}
                      className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90 sm:w-auto"
                    >
                      <MessageCircle className="h-5 w-5" /> Enviar solicitação
                    </a>
                  </>
                )}
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl sm:text-3xl text-primary">
                  {current.question}
                </h3>
                {current.options ? (
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {current.options.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => choose(option)}
                        className={`min-h-12 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors ${value === option ? "border-gold bg-gold/10 text-primary" : "border-border bg-background text-ink/85 hover:border-gold/70 hover:text-primary"}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ) : current.type === "privacy" ? (
                  <div className="mt-6 rounded-xl bg-secondary/70 p-5 text-sm text-ink/80">
                    <p>
                      Seus dados serão utilizados apenas para contato relacionado à sua solicitação.
                    </p>
                    <p className="mt-2">
                      Não é necessário enviar documentos ou informações confidenciais nesta etapa.
                    </p>
                  </div>
                ) : current.type === "textarea" ? (
                  <textarea
                    value={value}
                    onChange={(e) =>
                      setAnswers((existing) => ({ ...existing, [current.key]: e.target.value }))
                    }
                    rows={5}
                    placeholder="Escreva aqui, sem incluir informações confidenciais."
                    className="mt-7 w-full resize-y rounded-xl border border-input bg-background px-4 py-3 text-base text-ink placeholder:text-muted-foreground/70 focus:border-gold"
                  />
                ) : (
                  <div className="mt-7">
                    <input
                      type={current.type}
                      value={value}
                      onChange={(e) =>
                        setAnswers((existing) => ({
                          ...existing,
                          [current.key]:
                            current.key === "whatsapp"
                              ? formatPhone(e.target.value)
                              : e.target.value,
                        }))
                      }
                      placeholder={
                        current.key === "nome"
                          ? "Seu primeiro nome"
                          : current.key === "whatsapp"
                            ? "(71) 99999-9999"
                            : current.key === "email"
                              ? "seuemail@exemplo.com"
                              : "Digite aqui"
                      }
                      autoComplete={
                        current.key === "nome"
                          ? "given-name"
                          : current.key === "whatsapp"
                            ? "tel"
                            : current.key === "email"
                              ? "email"
                              : "off"
                      }
                      className="w-full rounded-xl border border-input bg-background px-4 py-3.5 text-base text-ink placeholder:text-muted-foreground/70 focus:border-gold"
                    />
                    {!emailValid && (
                      <p className="mt-2 text-xs text-destructive">Informe um e-mail válido.</p>
                    )}
                    {!phoneValid && value && (
                      <p className="mt-2 text-xs text-destructive">
                        Informe um número de WhatsApp válido.
                      </p>
                    )}
                  </div>
                )}

                {!current.options && (
                  <div className="mt-8 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setStep((currentStep) => Math.max(0, currentStep - 1))}
                      disabled={step === 0}
                      className="inline-flex min-h-11 items-center gap-2 px-2 text-sm font-medium text-muted-foreground disabled:invisible"
                    >
                      <ArrowLeft className="h-4 w-4" /> Voltar
                    </button>
                    <button
                      type="button"
                      onClick={advance}
                      disabled={!canAdvance || !emailValid || !phoneValid}
                      className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-45"
                    >
                      {current.type === "privacy" ? "Concluir" : "Continuar"}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
                {current.options && step > 0 && (
                  <button
                    type="button"
                    onClick={() => setStep((currentStep) => Math.max(0, currentStep - 1))}
                    className="mt-7 inline-flex min-h-11 items-center gap-2 px-2 text-sm font-medium text-muted-foreground"
                  >
                    <ArrowLeft className="h-4 w-4" /> Voltar
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
