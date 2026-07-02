// Conteúdo da Winner Despachante — design "Velocity Authority" (Stitch).
// Tudo centralizado aqui; ajuste livremente.

export const company = {
  name: "Winner Despachante",
  slogan: "O Campeão de Campinas",
  years: "29 Anos",
  cnpj: "65.754.648/0001-07",
  // Contatos informados pelo cliente:
  phoneDisplay: "(19) 99311-1640",
  phoneRaw: "5519993111640", // WhatsApp
  landlineDisplay: "(19) 3291-3494",
  landlineRaw: "551932913494",
  email: "winner@winnerdespachante.com.br",
  address1: "Av. Mirandópolis, 520 - Vila Pompéia",
  address2: "Campinas - SP, 13050-470",
  // Google Maps embed (sem API key)
  mapEmbed:
    "https://maps.google.com/maps?q=Av.%20Mirand%C3%B3polis%2C%20520%2C%20Vila%20Pomp%C3%A9ia%2C%20Campinas%20-%20SP&t=&z=16&ie=UTF8&iwloc=&output=embed",
  hours: "Segunda a Sexta: 08h às 18h",
  region: "Campinas e Região",
}

export const whatsappMsg =
  "Olá! Vim pelo site da Winner Despachante e quero regularizar a documentação do meu veículo."

export const whatsappLink = (msg) =>
  `https://api.whatsapp.com/send?phone=${company.phoneRaw}&text=${encodeURIComponent(msg || whatsappMsg)}`

export const nav = {
  links: [
    { href: "#top", label: "Início" },
    { href: "#servicos", label: "Serviços" },
    { href: "#solucoes", label: "Soluções" },
    { href: "#contato", label: "Contato" },
  ],
  cta: "Fale Conosco",
}

export const hero = {
  title: "Conte com o Despachante Campeão de Campinas e Região!",
  subtitle:
    "Agilidade e confiança para regularizar sua documentação veicular sem burocracia.",
  cta: "QUERO REGULARIZAR AGORA",
}

export const features = [
  {
    big: "29 Anos",
    title: "Tradição e Segurança",
    desc: "Experiência comprovada atendendo gerações de motoristas em Campinas.",
  },
  {
    icon: "speed",
    title: "Rapidez Total",
    desc: "Processos otimizados para você não perder tempo com filas e burocracia.",
  },
  {
    icon: "credit_card",
    title: "Até 12x no Cartão",
    desc: "Parcelamento facilitado de todos os seus débitos veiculares.",
  },
]

export const services = {
  title: "Nossos Serviços",
  cta: "Clique aqui para ver todos os serviços",
  items: [
    { icon: "badge", title: "Licenciamento em 12X" },
    { icon: "swap_horiz", title: "Transferência de Proprietário" },
    { icon: "new_releases", title: "Primeiro Emplacamento" },
    { icon: "handyman", title: "Remarcação de Chassi e Motor" },
    { icon: "directions_car", title: "Placa Mercosul" },
    { icon: "verified", title: "Vistoria Veicular" },
  ],
  more: "Saiba mais",
}

export const promo = {
  title: "Aproveite mais seu tempo!",
  textPre: "Na ",
  brand: "Winner Despachante",
  textPost:
    ", resolvemos tudo para você! Enquanto cuidamos da papelada, você aproveita o que realmente importa.",
  badge: "ATÉ 12x NO CARTÃO!",
  note: "Parcele débitos e taxas com as melhores condições do mercado.",
}

export const solutions = {
  title: "Soluções Completas",
  sub: "Tudo o que você precisa em um só lugar",
  slides: [
    { src: "/img/sol-1-ipva.png", alt: "IPVA" },
    { src: "/img/sol-2-apreendido.png", alt: "Carro Apreendido" },
    { src: "/img/sol-3-multas.png", alt: "Multas Pendentes" },
    { src: "/img/sol-4-parcelamento.png", alt: "Parcelamento 12x" },
    { src: "/img/sol-5-calendario.png", alt: "Calendário de Licenciamento" },
  ],
}

export const location = {
  title: "Onde estamos",
  cta: "CHAME NO WHATSAPP",
  addressTitle: "Endereço",
  contactsTitle: "Contatos",
  hoursTitle: "Horário",
}

// ============================================================================
// CALENDÁRIO DE LICENCIAMENTO SP (Detran-SP) — final da placa -> mês de vencimento
// ----------------------------------------------------------------------------
// O ANO e as DATAS são dinâmicos (o componente usa o ano atual), então o
// calendário "vira" sozinho a cada ano. O VALOR da taxa NÃO é exibido — o widget
// convida o cliente a confirmar o valor e regularizar com a Winner. Sem manutenção
// de valor.
//
// ⚠️ ÚNICA conferência (rara e opcional): o Detran define o escalonamento por
//    resolução anual; costuma ser estável há anos. Se mudar, ajuste `categories[].map`
//    (e os dias em `months[].dd`). Fonte oficial:
//    https://www.detran.sp.gov.br/detransp/pb?id=licenciamento_dados
// ============================================================================
export const licensing = {
  source: "Prazos oficiais do Detran-SP",
  categories: [
    {
      key: "carros",
      label: "Carros & Motos",
      hint: "Camionetas, ônibus, reboques e semirreboques",
      map: { "1": "jul", "2": "jul", "3": "ago", "4": "ago", "5": "set", "6": "set", "7": "out", "8": "out", "9": "nov", "0": "dez" },
    },
    {
      key: "caminhoes",
      label: "Caminhões",
      hint: "Caminhões e caminhões-tratores",
      map: { "1": "set", "2": "set", "3": "out", "4": "out", "5": "out", "6": "nov", "7": "nov", "8": "nov", "9": "dez", "0": "dez" },
    },
  ],
  // mês -> nome + dia/mês limite (o ano é aplicado dinamicamente)
  months: {
    jul: { name: "Julho", dd: "31", mm: "07" },
    ago: { name: "Agosto", dd: "31", mm: "08" },
    set: { name: "Setembro", dd: "30", mm: "09" },
    out: { name: "Outubro", dd: "31", mm: "10" },
    nov: { name: "Novembro", dd: "30", mm: "11" },
    dez: { name: "Dezembro", dd: "31", mm: "12" },
  },
}

export const footer = {
  about:
    "A Winner Despachante é referência em agilidade e transparência no setor de documentação veicular. Há 29 anos acelerando processos e garantindo tranquilidade aos clientes.",
  linksTitle: "Links",
  servicesTitle: "Serviços",
  links: [
    { label: "Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
    { label: "Localização", href: "#contato" },
    { label: "Contato", href: "#contato" },
  ],
  services: [
    { label: "Licenciamento", href: "#servicos" },
    { label: "Transferência", href: "#servicos" },
    { label: "Emplacamento", href: "#servicos" },
    { label: "Multas", href: "#servicos" },
  ],
  copyright: "© 2024 Winner Despachante. Todos os direitos reservados.",
}
