// ============================================================================
// CONTEÚDO DAS PÁGINAS DE SERVIÇO
// ----------------------------------------------------------------------------
// Cada item vira uma rota /{slug} (ver src/routes.jsx) renderizada pelo
// template src/pages/ServicePage.jsx, com <title>/description/canonical e
// JSON-LD (Service + FAQPage + BreadcrumbList) próprios.
//
// ⚠️ VALIDAÇÃO OBRIGATÓRIA: os textos abaixo são um rascunho de SEO. Antes de
//    publicar, o cliente deve conferir dados regulatórios (documentos exigidos,
//    prazos e procedimentos do Detran-SP), pois mudam e têm peso legal.
// ============================================================================

export const serviceList = [
  {
    slug: "licenciamento-campinas",
    icon: "badge",
    breadcrumb: "Licenciamento",
    title: "Licenciamento de Veículos em Campinas | CRLV-e Digital | Winner Despachante",
    h1: "Licenciamento de Veículos em Campinas",
    metaDescription:
      "Faça o licenciamento anual do seu veículo em Campinas com a Winner Despachante: consulta de débitos, quitação de IPVA e taxas, emissão do CRLV-e e parcelamento em até 12x no cartão. Sem fila no Detran-SP.",
    hero:
      "Circule tranquilo e em dia com o Detran-SP. Cuidamos de todo o licenciamento anual do seu veículo em Campinas e região — você recebe o CRLV-e sem sair de casa.",
    intro: [
      "O licenciamento anual é a regularização obrigatória que todo veículo precisa fazer uma vez por ano para poder circular legalmente. Sem o Certificado de Registro e Licenciamento de Veículo (CRLV) em dia, o condutor está sujeito a multa gravíssima, pontos na carteira e à remoção do veículo ao pátio. Há 29 anos em Campinas, a Winner Despachante cuida de todo o processo para você — da consulta de débitos até a emissão do documento digital.",
      "Hoje o licenciamento é 100% digital: o resultado é o CRLV-e (CRLV eletrônico), um documento em PDF com QR Code que tem a mesma validade do antigo documento de papel. Você pode guardá-lo no celular, imprimir em papel comum e apresentá-lo em qualquer fiscalização. Assim que todos os débitos do exercício estiverem quitados, emitimos e enviamos o seu CRLV-e.",
    ],
    documents: [
      "Placa e Renavam do veículo",
      "CPF do proprietário",
      "CNH ou documento de identificação do proprietário",
      "Comprovantes de débitos já pagos, se houver",
    ],
    steps: [
      { title: "Consulta de débitos", desc: "Levantamos IPVA, taxa de licenciamento, seguro obrigatório (quando aplicável) e multas vinculadas ao veículo." },
      { title: "Quitação e parcelamento", desc: "Você quita tudo à vista ou parcela em até 12x no cartão de crédito, com as melhores condições." },
      { title: "Emissão do CRLV-e", desc: "Com os débitos do exercício quitados, o licenciamento é processado e o CRLV-e é gerado junto ao Detran-SP." },
      { title: "Entrega digital", desc: "Enviamos o seu CRLV-e em PDF pelo WhatsApp. É só salvar no celular ou imprimir em papel comum." },
    ],
    deadline:
      "O prazo para licenciar depende do último número da placa do seu veículo, seguindo o calendário anual do Detran-SP. Na dúvida sobre a sua data de vencimento, fale com a gente que confirmamos na hora.",
    faq: [
      { q: "Preciso ir até o Detran para licenciar meu veículo?", a: "Não. A Winner resolve todo o processo para você. Você nos envia os dados do veículo pelo WhatsApp e recebe o CRLV-e digital sem enfrentar filas." },
      { q: "O que é o CRLV-e?", a: "É o Certificado de Registro e Licenciamento de Veículo em formato eletrônico. Tem QR Code, pode ser guardado no celular ou impresso em papel comum e tem a mesma validade do antigo documento de papel." },
      { q: "Posso parcelar o licenciamento e o IPVA?", a: "Sim. Na Winner você parcela o IPVA, a taxa de licenciamento e até as multas em até 12x no cartão de crédito." },
      { q: "Circular com o licenciamento atrasado dá multa?", a: "Sim. Dirigir com o licenciamento vencido é infração gravíssima: gera multa, pontos na CNH e o veículo pode ser removido ao pátio. Por isso é importante manter o CRLV-e sempre em dia." },
      { q: "Qual é o prazo para licenciar meu veículo?", a: "O prazo segue o último dígito da placa, conforme o calendário anual do Detran-SP. Envie a placa do seu veículo que confirmamos a sua data de vencimento." },
    ],
    related: ["transferencia-de-veiculo-campinas", "primeiro-emplacamento-campinas", "placa-mercosul-campinas"],
  },

  {
    slug: "transferencia-de-veiculo-campinas",
    icon: "swap_horiz",
    breadcrumb: "Transferência",
    title: "Transferência de Veículo em Campinas | Mudança de Proprietário | Winner Despachante",
    h1: "Transferência de Veículo em Campinas",
    metaDescription:
      "Transferência de propriedade de veículo em Campinas com a Winner Despachante: vistoria, ATPV-e, quitação de débitos e emissão do novo CRV/CRLV-e. Parcele em até 12x. Sem fila no Detran-SP.",
    hero:
      "Comprou ou vendeu um veículo? A Winner cuida de toda a transferência de propriedade em Campinas e região — rápido, seguro e sem você enfrentar filas no Detran-SP.",
    intro: [
      "A transferência de propriedade é o processo que coloca o veículo no nome do novo dono junto ao Detran-SP. Ela é obrigatória e deve ser feita logo após a compra — passado o prazo legal, o comprador fica sujeito a multa e o vendedor pode continuar respondendo por débitos e infrações do carro. Há 29 anos em Campinas, a Winner Despachante conduz todo o processo para você, do início ao documento final.",
      "Com a Transferência Digital de Veículos (TDV) e o documento eletrônico (ATPV-e — Autorização para Transferência de Propriedade do Veículo), boa parte do procedimento é digital. Ainda assim, há vistoria, conferência de documentos e quitação de débitos envolvidos — e é aí que entramos, garantindo que nada trave o seu processo.",
    ],
    documents: [
      "CRV/ATPV-e preenchido e assinado (com reconhecimento de firma ou assinatura digital)",
      "Documento de identificação e CPF do comprador e do vendedor",
      "Comprovante de endereço do comprador",
      "Comprovante de vistoria veicular (quando exigida)",
      "Placa e Renavam do veículo",
    ],
    steps: [
      { title: "Consulta e quitação de débitos", desc: "Verificamos IPVA, licenciamento, multas e eventuais restrições antes de iniciar." },
      { title: "Vistoria e documentação", desc: "Providenciamos a vistoria veicular e conferimos o ATPV-e/CRV para evitar recusas." },
      { title: "Protocolo no Detran-SP", desc: "Damos entrada na transferência de propriedade junto ao órgão." },
      { title: "Novo documento", desc: "Você recebe o novo CRLV-e já no nome do comprador." },
    ],
    deadline:
      "A transferência deve ser feita dentro do prazo legal a partir da data da venda. Depois disso há multa para o comprador — por isso não deixe para a última hora; a gente agiliza para você.",
    faq: [
      { q: "Qual o prazo para transferir um veículo comprado?", a: "A transferência deve ser feita no prazo legal após a compra. Passado esse prazo, o comprador fica sujeito a multa e pontos na CNH. Fale com a gente para confirmar o seu caso." },
      { q: "Preciso fazer vistoria para transferir?", a: "Na maioria dos casos sim. A Winner providencia a vistoria e cuida de todo o restante do processo." },
      { q: "Comprei um carro com multas. Posso transferir?", a: "É necessário regularizar os débitos vinculados ao veículo. Nós levantamos tudo e você pode parcelar em até 12x no cartão." },
      { q: "Posso parcelar as taxas de transferência?", a: "Sim, você parcela as taxas e débitos em até 12x no cartão de crédito." },
      { q: "O vendedor precisa comunicar a venda também?", a: "Sim, é altamente recomendável que o vendedor faça a comunicação de venda para se resguardar. A gente também cuida disso." },
    ],
    related: ["comunicacao-de-venda", "transferencia-interestadual-campinas", "vistoria-veicular-campinas"],
  },

  {
    slug: "transferencia-interestadual-campinas",
    icon: "public",
    breadcrumb: "Transferência interestadual",
    title: "Transferência de Veículo de Outro Estado para Campinas/SP | Winner Despachante",
    h1: "Transferência de Veículo de Outro Estado para São Paulo",
    metaDescription:
      "Trouxe um veículo de outro estado? A Winner Despachante faz a transferência interestadual para Campinas/SP: vistoria, quitação de débitos e novo emplacamento. Parcele em até 12x.",
    hero:
      "Veículo registrado em outro estado? Regularizamos a transferência interestadual para Campinas e região, do começo ao fim, sem você precisar viajar ou enfrentar filas.",
    intro: [
      "A transferência interestadual é necessária quando um veículo registrado em outro estado passa a ter proprietário ou domicílio em São Paulo. Além da mudança de proprietário, ela envolve a migração do registro para o Detran-SP e, geralmente, novo emplacamento no padrão vigente. É um processo com mais etapas que a transferência comum — e a Winner Despachante domina cada uma delas.",
      "O procedimento exige vistoria, quitação de débitos e conferência criteriosa da documentação de origem. Qualquer pendência no estado anterior pode travar tudo. Nós fazemos esse levantamento antes de começar, para que o seu processo corra sem surpresas.",
    ],
    documents: [
      "CRV/ATPV-e do estado de origem, preenchido e assinado",
      "Documento de identificação e CPF do proprietário",
      "Comprovante de endereço em São Paulo",
      "Comprovante de vistoria veicular",
      "Placa e Renavam do veículo",
    ],
    steps: [
      { title: "Levantamento nos dois estados", desc: "Consultamos débitos e restrições na origem e no destino." },
      { title: "Vistoria e quitação", desc: "Providenciamos a vistoria e a regularização dos débitos." },
      { title: "Migração do registro", desc: "Damos entrada na transferência para o Detran-SP." },
      { title: "Emplacamento e documento", desc: "Concluímos com o novo emplacamento (placa Mercosul) e o CRLV-e paulista." },
    ],
    deadline:
      "Assim como na transferência comum, o ideal é regularizar logo após a mudança de propriedade ou domicílio. Fale com a gente para confirmar os prazos e débitos do seu caso.",
    faq: [
      { q: "Preciso ir até o estado de origem?", a: "Não. A Winner conduz o processo à distância, cuidando das exigências dos dois estados para você." },
      { q: "Vou precisar trocar a placa?", a: "Em geral sim — a transferência interestadual costuma incluir novo emplacamento no padrão Mercosul. Nós cuidamos disso." },
      { q: "Quanto tempo demora?", a: "Depende das pendências no estado de origem. Fazemos o levantamento no início para dar uma previsão realista." },
      { q: "Posso parcelar as taxas?", a: "Sim, em até 12x no cartão de crédito." },
      { q: "O veículo tem débito no outro estado. E agora?", a: "É preciso quitar os débitos da origem antes de migrar o registro. Levantamos tudo e você pode parcelar." },
    ],
    related: ["transferencia-de-veiculo-campinas", "placa-mercosul-campinas", "vistoria-veicular-campinas"],
  },

  {
    slug: "primeiro-emplacamento-campinas",
    icon: "new_releases",
    breadcrumb: "Primeiro emplacamento",
    title: "Primeiro Emplacamento de Veículo 0 km em Campinas | Winner Despachante",
    h1: "Primeiro Emplacamento em Campinas",
    metaDescription:
      "Comprou um 0 km? A Winner Despachante faz o primeiro emplacamento em Campinas: registro do veículo, placa Mercosul e CRLV-e. Rápido, sem fila e com parcelamento em até 12x.",
    hero:
      "Comprou um veículo 0 km? Cuidamos de todo o primeiro emplacamento em Campinas e região — do registro à placa Mercosul — para você sair rodando legalizado.",
    intro: [
      "O primeiro emplacamento é o registro inicial de um veículo novo (0 km) junto ao Detran-SP, que resulta na placa e no primeiro CRLV-e. É a etapa que transforma o carro recém-comprado em um veículo oficialmente registrado e apto a circular. A Winner Despachante realiza todo o processo com agilidade, para você não perder tempo com burocracia logo na estreia do seu carro novo.",
      "O procedimento envolve a nota fiscal do veículo, o registro no Detran-SP e a confecção da placa no padrão Mercosul. Normalmente a concessionária inicia parte disso, mas contar com um despachante garante que tudo saia certo e no menor prazo possível.",
    ],
    documents: [
      "Nota fiscal do veículo (0 km)",
      "Documento de identificação e CPF do proprietário",
      "Comprovante de endereço",
      "Dados do veículo (chassi e modelo)",
    ],
    steps: [
      { title: "Conferência da nota fiscal", desc: "Validamos os dados do veículo e do comprador." },
      { title: "Registro no Detran-SP", desc: "Damos entrada no primeiro registro do veículo." },
      { title: "Confecção da placa Mercosul", desc: "Providenciamos a estampagem da placa no padrão vigente." },
      { title: "Entrega do CRLV-e", desc: "Você recebe o documento digital do seu veículo novo." },
    ],
    deadline:
      "O primeiro emplacamento deve ser feito antes de o veículo circular. Fale com a gente assim que fechar a compra que já agilizamos.",
    faq: [
      { q: "A concessionária não faz isso?", a: "Muitas vezes sim, mas o processo pode demorar. Com a Winner você garante agilidade e acompanhamento próximo até a placa ficar pronta." },
      { q: "Já vem com placa Mercosul?", a: "Sim. Todo primeiro emplacamento hoje é feito no padrão Mercosul." },
      { q: "Posso parcelar as taxas e a placa?", a: "Sim, em até 12x no cartão de crédito." },
      { q: "Quanto tempo leva?", a: "Costuma ser rápido quando a documentação está completa. Confirmamos o prazo ao iniciar." },
      { q: "Preciso levar o carro para vistoria?", a: "No primeiro emplacamento de 0 km normalmente não há vistoria de transferência, mas há a etapa de identificação. Cuidamos de tudo." },
    ],
    related: ["placa-mercosul-campinas", "licenciamento-campinas", "transferencia-de-veiculo-campinas"],
  },

  {
    slug: "placa-mercosul-campinas",
    icon: "directions_car",
    breadcrumb: "Placa Mercosul",
    title: "Placa Mercosul em Campinas | Emplacamento e Troca de Placa | Winner Despachante",
    h1: "Placa Mercosul em Campinas",
    metaDescription:
      "Precisa da placa Mercosul em Campinas? A Winner Despachante faz emplacamento e troca para o padrão Mercosul: primeira via, transferência, extravio ou dano. Parcele em até 12x.",
    hero:
      "Emplacamento no padrão Mercosul em Campinas e região: primeira via, troca por transferência, extravio ou dano na placa. A Winner resolve tudo para você.",
    intro: [
      "A placa Mercosul é o padrão de identificação veicular adotado no Brasil, com o formato de letras e números integrado aos países do bloco. A troca para o padrão Mercosul é obrigatória em situações como transferência de propriedade, mudança de município, primeiro emplacamento e casos de placa danificada, extraviada ou furtada. A Winner Despachante providencia a estampagem oficial e toda a documentação necessária.",
      "A placa só pode ser confeccionada por estampadores credenciados junto ao Detran-SP, mediante autorização. Nós cuidamos dessa autorização e da logística, para você trocar a placa sem dor de cabeça e dentro das regras.",
    ],
    documents: [
      "Documento de identificação e CPF do proprietário",
      "CRLV do veículo",
      "Boletim de ocorrência (em caso de furto ou extravio da placa)",
      "Placa e Renavam do veículo",
    ],
    steps: [
      { title: "Verificação do motivo", desc: "Identificamos se é primeiro emplacamento, transferência, dano ou extravio." },
      { title: "Autorização de estampagem", desc: "Emitimos a autorização junto ao Detran-SP." },
      { title: "Confecção da placa", desc: "A placa é estampada por fornecedor credenciado no padrão Mercosul." },
      { title: "Atualização do documento", desc: "Regularizamos o registro e o CRLV-e." },
    ],
    faq: [
      { q: "Quando sou obrigado a trocar para a placa Mercosul?", a: "Em transferências, mudança de município, primeiro emplacamento e quando a placa está danificada, extraviada ou furtada." },
      { q: "Minha placa antiga ainda vale?", a: "Placas no padrão anterior continuam válidas até ocorrer um dos eventos que exigem a troca. Aí é preciso migrar para o Mercosul." },
      { q: "Perdi ou roubaram minha placa. O que faço?", a: "É preciso um boletim de ocorrência e a confecção de nova placa. A Winner cuida do processo completo." },
      { q: "Posso parcelar?", a: "Sim, em até 12x no cartão de crédito." },
      { q: "Onde a placa é feita?", a: "Somente por estampadores credenciados pelo Detran-SP. Nós providenciamos a autorização e a estampagem." },
    ],
    related: ["primeiro-emplacamento-campinas", "transferencia-de-veiculo-campinas", "licenciamento-campinas"],
  },

  {
    slug: "segunda-via-crv-crlv",
    icon: "content_copy",
    breadcrumb: "2ª via de documento",
    title: "2ª Via de CRV e CRLV em Campinas | Documento do Veículo | Winner Despachante",
    h1: "2ª Via de CRV e CRLV em Campinas",
    metaDescription:
      "Perdeu o documento do veículo? A Winner Despachante emite a 2ª via do CRV e o CRLV-e em Campinas por perda, roubo, dano ou alteração de dados. Rápido e com parcelamento em até 12x.",
    hero:
      "Perdeu, rasgou ou teve o documento do veículo furtado? Emitimos a 2ª via do CRV e o CRLV-e em Campinas, sem você enfrentar filas.",
    intro: [
      "O CRV (Certificado de Registro de Veículo) é o documento de propriedade — usado, por exemplo, na venda do carro — enquanto o CRLV (hoje CRLV-e, digital) é o documento de porte obrigatório para circular. Quando qualquer um deles é perdido, furtado, danificado ou fica desatualizado, é preciso solicitar a segunda via. A Winner Despachante providencia a emissão com agilidade.",
      "A segunda via do CRV geralmente exige reconhecimento de firma e, em alguns casos, boletim de ocorrência. Já o CRLV-e pode ser reemitido digitalmente com os débitos do exercício em dia. Nós avaliamos o seu caso e cuidamos do procedimento correto.",
    ],
    documents: [
      "Documento de identificação e CPF do proprietário",
      "Boletim de ocorrência (em caso de furto ou roubo do documento)",
      "Comprovante de endereço",
      "Placa e Renavam do veículo",
    ],
    steps: [
      { title: "Identificação do documento", desc: "Verificamos se é CRV, CRLV-e ou ambos, e o motivo do pedido." },
      { title: "Regularização de pendências", desc: "Conferimos débitos que possam impedir a emissão." },
      { title: "Solicitação da 2ª via", desc: "Damos entrada no pedido junto ao Detran-SP." },
      { title: "Entrega", desc: "Você recebe o novo documento (CRLV-e digital e/ou CRV)." },
    ],
    faq: [
      { q: "Qual a diferença entre CRV e CRLV?", a: "O CRV é o documento de propriedade (usado na venda); o CRLV-e é o documento digital de porte obrigatório para circular." },
      { q: "Preciso de boletim de ocorrência?", a: "Em casos de furto ou roubo do documento, sim. Para perda ou dano, nem sempre. Nós orientamos você." },
      { q: "Consigo o CRLV-e no mesmo dia?", a: "Com os débitos do exercício quitados, a reemissão do CRLV-e costuma ser rápida." },
      { q: "Posso parcelar as taxas?", a: "Sim, em até 12x no cartão de crédito." },
      { q: "Perdi só o documento de porte. Preciso da 2ª via do CRV também?", a: "Não necessariamente. Se você só precisa circular, o CRLV-e resolve. Avaliamos o que é necessário no seu caso." },
    ],
    related: ["licenciamento-campinas", "alteracao-dados-proprietario", "transferencia-de-veiculo-campinas"],
  },

  {
    slug: "alteracao-caracteristicas-veiculo",
    icon: "build",
    breadcrumb: "Alteração de características",
    title: "Alteração de Características do Veículo em Campinas | Winner Despachante",
    h1: "Alteração de Características do Veículo em Campinas",
    metaDescription:
      "Mudou cor, motor, combustível ou blindou o veículo? A Winner Despachante regulariza a alteração de características no Detran-SP em Campinas, com vistoria e novo CRV. Parcele em até 12x.",
    hero:
      "Trocou o motor, mudou a cor, instalou kit gás ou blindou o carro? Regularizamos a alteração de características junto ao Detran-SP para o seu veículo ficar em dia.",
    intro: [
      "Qualquer mudança nas características de fábrica do veículo — cor (inclusive envelopamento), tipo de combustível (como instalação de kit gás), troca de motor, transformação em motorhome ou blindagem — precisa ser comunicada e registrada no Detran-SP. A regularização resulta na emissão de um novo CRV com as informações atualizadas. Circular com o veículo diferente do que consta no documento é infração e pode gerar problemas em fiscalizações e no seguro.",
      "O processo exige vistoria e, muitas vezes, documentação técnica específica (como nota fiscal de peças, laudos ou certificados de segurança). A Winner Despachante organiza toda essa documentação e conduz o processo, que costuma exigir agendamento prévio no Detran-SP.",
    ],
    documents: [
      "Documento de identificação e CPF do proprietário",
      "CRV/CRLV do veículo",
      "Nota fiscal das peças ou serviços (motor, kit gás, blindagem etc.)",
      "Laudos ou certificados técnicos exigidos para a alteração",
      "Comprovante de vistoria",
    ],
    steps: [
      { title: "Análise da alteração", desc: "Identificamos o tipo de mudança e a documentação exigida." },
      { title: "Vistoria e laudos", desc: "Providenciamos a vistoria e reunimos os laudos necessários." },
      { title: "Protocolo no Detran-SP", desc: "Damos entrada no processo (com agendamento, quando exigido)." },
      { title: "Novo CRV", desc: "Você recebe o documento atualizado com as novas características." },
    ],
    deadline:
      "A alteração deve ser regularizada assim que a modificação é feita. Circular com característica não registrada é infração — fale com a gente para regularizar rápido.",
    faq: [
      { q: "Mudei a cor com envelopamento. Preciso registrar?", a: "Sim. Mudança de cor, mesmo por envelopamento, deve constar no documento do veículo." },
      { q: "Instalei kit gás. E agora?", a: "É preciso registrar a alteração de combustível, com vistoria e documentação. A Winner cuida de tudo." },
      { q: "Blindei meu carro. Preciso comunicar?", a: "Sim, a blindagem é uma alteração de característica e precisa ser registrada no Detran-SP." },
      { q: "Posso parcelar as taxas?", a: "Sim, em até 12x no cartão de crédito." },
      { q: "Preciso agendar?", a: "Muitas alterações exigem agendamento prévio. Nós cuidamos do agendamento e do processo." },
    ],
    related: ["vistoria-veicular-campinas", "remarcacao-chassi-motor", "segunda-via-crv-crlv"],
  },

  {
    slug: "alteracao-dados-proprietario",
    icon: "manage_accounts",
    breadcrumb: "Alteração de dados",
    title: "Alteração de Dados do Proprietário do Veículo em Campinas | Winner Despachante",
    h1: "Alteração de Dados do Proprietário em Campinas",
    metaDescription:
      "Mudou de nome, estado civil ou razão social? A Winner Despachante atualiza os dados do proprietário no CRV e CRLV-e do veículo em Campinas. Rápido e com parcelamento em até 12x.",
    hero:
      "Casou, mudou de nome ou de razão social? Atualizamos os dados do proprietário no documento do seu veículo junto ao Detran-SP.",
    intro: [
      "Quando há mudança nos dados do proprietário — nome (por casamento ou decisão judicial), razão social da empresa ou outros dados cadastrais — é preciso atualizar essas informações no CRV e no CRLV-e do veículo. Manter o documento condizente com o seu cadastro atual evita problemas em transferências futuras, fiscalizações e comunicações oficiais. A Winner Despachante faz essa atualização com agilidade.",
      "O procedimento normalmente exige a documentação que comprova a mudança (como certidão de casamento ou alteração contratual) e resulta na emissão de um documento atualizado. Nós conferimos o que é necessário e cuidamos de todo o processo.",
    ],
    documents: [
      "Documento de identificação atualizado e CPF do proprietário",
      "Documento que comprova a mudança (certidão de casamento, alteração de contrato social etc.)",
      "CRV/CRLV do veículo",
      "Comprovante de endereço",
    ],
    steps: [
      { title: "Conferência da mudança", desc: "Verificamos a documentação que comprova a alteração." },
      { title: "Regularização de pendências", desc: "Checamos débitos que possam impedir a emissão." },
      { title: "Protocolo no Detran-SP", desc: "Damos entrada na atualização cadastral." },
      { title: "Documento atualizado", desc: "Você recebe o CRV/CRLV-e com os dados corretos." },
    ],
    faq: [
      { q: "Casei e mudei de nome. Preciso atualizar o documento do carro?", a: "Sim. É recomendável atualizar para evitar divergências em transferências e fiscalizações." },
      { q: "Minha empresa mudou de razão social. Como fica?", a: "É preciso atualizar os dados no documento do veículo, com a alteração contratual. A gente resolve." },
      { q: "Preciso trocar a placa?", a: "Não. Alteração de dados do proprietário não muda a placa do veículo." },
      { q: "Posso parcelar as taxas?", a: "Sim, em até 12x no cartão de crédito." },
      { q: "Quanto tempo leva?", a: "Costuma ser rápido quando a documentação está completa. Confirmamos ao iniciar." },
    ],
    related: ["segunda-via-crv-crlv", "transferencia-de-veiculo-campinas", "licenciamento-campinas"],
  },

  {
    slug: "comunicacao-de-venda",
    icon: "sell",
    breadcrumb: "Comunicação de venda",
    title: "Comunicação de Venda de Veículo em Campinas | Winner Despachante",
    h1: "Comunicação de Venda em Campinas",
    metaDescription:
      "Vendeu seu veículo? Faça a comunicação de venda no Detran-SP com a Winner Despachante e não responda mais por multas e débitos do comprador. Rápido e sem burocracia.",
    hero:
      "Vendeu o carro? A comunicação de venda protege você de multas e débitos que o novo dono venha a gerar. A Winner faz isso rapidinho para você.",
    intro: [
      "A comunicação de venda é o aviso oficial ao Detran-SP de que você vendeu o veículo. Ela é fundamental para o vendedor: enquanto o comprador não transfere o carro para o nome dele, as infrações e alguns débitos podem continuar aparecendo no CPF do antigo dono. Ao comunicar a venda, você se resguarda dessas responsabilidades a partir da data informada. A Winner Despachante faz esse registro para você em minutos.",
      "A comunicação de venda não substitui a transferência de propriedade — quem transfere é o comprador — mas é a proteção do vendedor. O ideal é fazê-la logo após a venda, informando os dados do comprador e a data da transação.",
    ],
    documents: [
      "Documento de identificação e CPF do vendedor",
      "Dados do comprador (nome e CPF)",
      "Cópia do ATPV-e/CRV preenchido e assinado",
      "Placa e Renavam do veículo",
    ],
    steps: [
      { title: "Coleta dos dados da venda", desc: "Reunimos os dados do comprador e a data da transação." },
      { title: "Registro no Detran-SP", desc: "Fazemos a comunicação de venda oficialmente." },
      { title: "Comprovante", desc: "Você recebe o comprovante da comunicação para guardar." },
    ],
    deadline:
      "Faça a comunicação de venda o quanto antes após vender o veículo — quanto antes registrada, mais cedo você deixa de responder por infrações do comprador.",
    faq: [
      { q: "Comunicação de venda é o mesmo que transferência?", a: "Não. A comunicação protege o vendedor; a transferência (feita pelo comprador) muda a propriedade. São processos diferentes e complementares." },
      { q: "Por que devo comunicar a venda?", a: "Para não responder por multas e débitos gerados pelo comprador enquanto ele não transfere o veículo para o nome dele." },
      { q: "Preciso da assinatura do comprador?", a: "Você precisa dos dados do comprador e, idealmente, de uma cópia do documento de transferência assinado. Nós orientamos você." },
      { q: "Quanto tempo leva?", a: "É um dos serviços mais rápidos — normalmente resolvido no mesmo dia." },
      { q: "E se o comprador não transferir?", a: "Com a comunicação de venda feita, você fica resguardado das infrações a partir da data informada, mesmo que ele demore a transferir." },
    ],
    related: ["transferencia-de-veiculo-campinas", "licenciamento-campinas", "parcelamento-debitos-veiculares"],
  },

  {
    slug: "gravame-financiamento",
    icon: "account_balance",
    breadcrumb: "Gravame / financiamento",
    title: "Inclusão e Baixa de Gravame em Campinas | Veículo Financiado | Winner Despachante",
    h1: "Gravame de Veículo Financiado em Campinas",
    metaDescription:
      "Quitou o financiamento ou vai financiar? A Winner Despachante cuida da inclusão e baixa de gravame no Detran-SP em Campinas, liberando a transferência do veículo. Parcele em até 12x.",
    hero:
      "Financiou ou quitou o veículo? Cuidamos da inclusão e da baixa do gravame junto ao Detran-SP para você regularizar e transferir sem travas.",
    intro: [
      "O gravame é a anotação no registro do veículo indicando que ele está vinculado a um financiamento (alienação fiduciária, arrendamento ou reserva de domínio). Enquanto houver gravame ativo, o veículo não pode ser transferido livremente. Quando você quita o financiamento, a instituição financeira baixa o gravame — mas às vezes esse processo trava, impedindo a venda ou transferência. A Winner Despachante acompanha a inclusão e, principalmente, a baixa do gravame para liberar o seu veículo.",
      "Após a quitação, a baixa do gravame precisa constar no sistema do Detran-SP para que um novo CRV possa ser emitido sem restrição. Nós verificamos a situação do gravame e regularizamos pendências que estejam impedindo a transferência.",
    ],
    documents: [
      "Documento de identificação e CPF do proprietário",
      "CRV/CRLV do veículo",
      "Comprovante de quitação do financiamento (para baixa)",
      "Placa e Renavam do veículo",
    ],
    steps: [
      { title: "Consulta do gravame", desc: "Verificamos a situação do gravame no registro do veículo." },
      { title: "Regularização", desc: "Acompanhamos a inclusão ou a baixa junto à financeira e ao Detran-SP." },
      { title: "Emissão do novo documento", desc: "Com o gravame baixado, providenciamos o CRV sem restrição." },
      { title: "Veículo liberado", desc: "Seu veículo fica apto a ser transferido ou vendido." },
    ],
    faq: [
      { q: "Quitei meu financiamento mas o gravame não saiu. O que faço?", a: "A baixa depende da financeira e do Detran-SP. A Winner acompanha o processo e regulariza para liberar seu veículo." },
      { q: "Preciso baixar o gravame para vender o carro?", a: "Sim. Com gravame ativo o veículo não pode ser transferido para o comprador." },
      { q: "Quanto tempo leva a baixa?", a: "Depende da instituição financeira. Nós verificamos e agilizamos junto aos envolvidos." },
      { q: "Posso parcelar as taxas?", a: "Sim, em até 12x no cartão de crédito." },
      { q: "Vou financiar um carro. Vocês incluem o gravame?", a: "Sim, cuidamos da inclusão do gravame e da regularização do documento." },
    ],
    related: ["transferencia-de-veiculo-campinas", "segunda-via-crv-crlv", "licenciamento-campinas"],
  },

  {
    slug: "remarcacao-chassi-motor",
    icon: "handyman",
    breadcrumb: "Remarcação de chassi",
    title: "Remarcação de Chassi e Motor em Campinas | Winner Despachante",
    h1: "Remarcação de Chassi e Motor em Campinas",
    metaDescription:
      "Chassi ou motor corroído, danificado ou ilegível? A Winner Despachante regulariza a remarcação de chassi e motor no Detran-SP em Campinas, com vistoria e novo documento. Parcele em 12x.",
    hero:
      "Numeração de chassi ou motor corroída, danificada ou ilegível? Regularizamos a remarcação junto ao Detran-SP para o seu veículo voltar a circular em dia.",
    intro: [
      "A remarcação de chassi (ou de motor) é necessária quando a numeração de identificação do veículo está corroída, danificada, adulterada ou ilegível — situação comum em veículos mais antigos ou após reparos. Sem uma numeração legível e regular, o veículo não passa em vistorias e não pode ser transferido ou licenciado normalmente. A Winner Despachante conduz todo o processo de remarcação, que envolve vistoria e autorização específica do Detran-SP.",
      "O procedimento é técnico e exige laudos e vistoria em local credenciado, além de autorização prévia. Qualquer erro pode gerar recusa e atraso. Por isso, contar com um despachante experiente faz diferença para o processo correr sem retrabalho.",
    ],
    documents: [
      "Documento de identificação e CPF do proprietário",
      "CRV/CRLV do veículo",
      "Laudo de vistoria de identificação veicular",
      "Boletim de ocorrência (quando aplicável)",
      "Placa e Renavam do veículo",
    ],
    steps: [
      { title: "Avaliação do caso", desc: "Verificamos a condição do chassi/motor e as exigências." },
      { title: "Autorização e vistoria", desc: "Providenciamos a autorização do Detran-SP e a vistoria de identificação." },
      { title: "Remarcação", desc: "A remarcação é feita conforme as normas, em local credenciado." },
      { title: "Novo documento", desc: "Regularizamos o registro e você recebe o CRLV-e atualizado." },
    ],
    deadline:
      "Se o chassi ou motor está ilegível, o veículo pode ser reprovado em vistoria e ficar impedido de licenciar. Fale com a gente para regularizar antes que vire problema.",
    faq: [
      { q: "Por que meu chassi precisa ser remarcado?", a: "Quando a numeração está corroída, danificada ou ilegível, ela precisa ser remarcada para o veículo passar em vistoria e ser regularizado." },
      { q: "Isso é legalizado?", a: "Sim. A remarcação é um procedimento oficial autorizado e fiscalizado pelo Detran-SP, feito em local credenciado." },
      { q: "Meu carro reprovou na vistoria por causa do chassi. Vocês resolvem?", a: "Sim. Conduzimos todo o processo de remarcação para regularizar o veículo." },
      { q: "Posso parcelar?", a: "Sim, em até 12x no cartão de crédito." },
      { q: "Preciso de boletim de ocorrência?", a: "Em alguns casos sim. Avaliamos a situação e orientamos você." },
    ],
    related: ["vistoria-veicular-campinas", "alteracao-caracteristicas-veiculo", "licenciamento-campinas"],
  },

  {
    slug: "vistoria-veicular-campinas",
    icon: "fact_check",
    breadcrumb: "Vistoria veicular",
    title: "Vistoria Veicular em Campinas | Transferência e Regularização | Winner Despachante",
    h1: "Vistoria Veicular em Campinas",
    metaDescription:
      "Precisa de vistoria veicular em Campinas para transferência, alteração ou regularização? A Winner Despachante organiza a vistoria e todo o processo no Detran-SP. Parcele em até 12x.",
    hero:
      "Vistoria para transferência, alteração de características ou regularização? A Winner organiza a vistoria veicular e cuida do processo completo em Campinas.",
    intro: [
      "A vistoria veicular é a verificação obrigatória da identificação e das condições do veículo, exigida em diversos processos: transferência de propriedade, transferência entre municípios ou estados, alteração de características, remarcação de chassi e regularização em geral. Ela confirma que o veículo corresponde ao que consta no registro. A Winner Despachante organiza a vistoria e integra esse passo ao processo que você precisa concluir.",
      "A vistoria deve ser feita em estabelecimentos credenciados pelo Detran-SP. Reprovar por um detalhe simples (numeração suja, item faltando) atrasa todo o processo. Nós orientamos você para o veículo chegar pronto e a vistoria ser aprovada de primeira.",
    ],
    documents: [
      "Documento de identificação e CPF do proprietário",
      "CRV/CRLV do veículo",
      "Placa e Renavam do veículo",
      "Documentação do processo relacionado (transferência, alteração etc.)",
    ],
    steps: [
      { title: "Identificação da necessidade", desc: "Verificamos qual processo exige a vistoria." },
      { title: "Agendamento", desc: "Organizamos a vistoria em local credenciado." },
      { title: "Acompanhamento", desc: "Orientamos para o veículo ser aprovado sem retrabalho." },
      { title: "Continuidade do processo", desc: "Com a vistoria aprovada, damos sequência ao seu processo." },
    ],
    faq: [
      { q: "Quando preciso de vistoria?", a: "Em transferências, mudança de município ou estado, alteração de características, remarcação e várias regularizações." },
      { q: "Onde a vistoria é feita?", a: "Em unidades credenciadas pelo Detran-SP. Nós organizamos para você." },
      { q: "Meu carro pode reprovar?", a: "Sim, por itens simples como numeração suja ou item de segurança faltando. Orientamos você para aprovar de primeira." },
      { q: "Posso parcelar as taxas?", a: "Sim, em até 12x no cartão de crédito." },
      { q: "A vistoria vale para quê?", a: "Ela é uma etapa dentro de um processo maior (transferência, alteração etc.). Cuidamos do processo completo." },
    ],
    related: ["transferencia-de-veiculo-campinas", "alteracao-caracteristicas-veiculo", "remarcacao-chassi-motor"],
  },

  {
    slug: "baixa-de-veiculo",
    icon: "block",
    breadcrumb: "Baixa de veículo",
    title: "Baixa de Veículo em Campinas | Baixa Definitiva no Detran-SP | Winner Despachante",
    h1: "Baixa de Veículo em Campinas",
    metaDescription:
      "Veículo inservível, sinistrado ou para desmonte? A Winner Despachante faz a baixa definitiva do veículo no Detran-SP em Campinas, encerrando obrigações. Sem fila e sem burocracia.",
    hero:
      "Veículo irrecuperável, sinistrado ou destinado a desmonte? Fazemos a baixa definitiva no Detran-SP para encerrar as obrigações do veículo.",
    intro: [
      "A baixa de veículo é o registro que encerra definitivamente a vida legal de um veículo junto ao Detran-SP, retirando-o de circulação. Ela é necessária em casos de perda total (sinistro), veículo inservível, destinado a desmonte ou irrecuperável. Depois da baixa, o veículo não pode voltar a circular, e o proprietário deixa de ter as obrigações vinculadas a ele. A Winner Despachante conduz esse processo para você.",
      "A baixa exige documentação específica e, muitas vezes, comprovação da destinação do veículo (por exemplo, para desmontagem credenciada). Nós verificamos os requisitos do seu caso e cuidamos de todo o procedimento.",
    ],
    documents: [
      "Documento de identificação e CPF do proprietário",
      "CRV/CRLV do veículo",
      "Comprovante da destinação do veículo (quando aplicável)",
      "Placa e Renavam do veículo",
    ],
    steps: [
      { title: "Análise do caso", desc: "Verificamos o motivo da baixa e os documentos exigidos." },
      { title: "Regularização de pendências", desc: "Conferimos débitos que precisam ser resolvidos antes." },
      { title: "Protocolo no Detran-SP", desc: "Damos entrada na baixa definitiva do veículo." },
      { title: "Conclusão", desc: "Você recebe o comprovante da baixa e encerra as obrigações." },
    ],
    faq: [
      { q: "Quando devo dar baixa no veículo?", a: "Em casos de perda total, veículo inservível, irrecuperável ou destinado a desmonte." },
      { q: "Depois da baixa o carro pode voltar a rodar?", a: "Não. A baixa definitiva retira o veículo de circulação de forma permanente." },
      { q: "Tenho débitos no veículo. Consigo dar baixa?", a: "Em geral é preciso regularizar pendências antes. Levantamos tudo e você pode parcelar." },
      { q: "Preciso levar o veículo a algum lugar?", a: "Depende do motivo da baixa. Em casos de desmonte, há comprovação de destinação. Nós orientamos você." },
      { q: "Posso parcelar as taxas?", a: "Sim, em até 12x no cartão de crédito." },
    ],
    related: ["parcelamento-debitos-veiculares", "comunicacao-de-venda", "vistoria-veicular-campinas"],
  },

  {
    slug: "parcelamento-debitos-veiculares",
    icon: "credit_card",
    breadcrumb: "Débitos e parcelamento",
    title: "Parcelamento de IPVA, Multas e Débitos Veiculares em Campinas | Winner Despachante",
    h1: "Parcelamento de Débitos Veiculares em Campinas",
    metaDescription:
      "IPVA atrasado, multas e taxas? A Winner Despachante parcela seus débitos veiculares em até 12x no cartão em Campinas e regulariza o veículo. Consulte e resolva tudo pelo WhatsApp.",
    hero:
      "IPVA, multas, licenciamento e taxas acumulados? Parcele tudo em até 12x no cartão e regularize seu veículo com a Winner Despachante.",
    intro: [
      "Débitos veiculares acumulados — IPVA atrasado, multas, taxa de licenciamento e seguro obrigatório — impedem o licenciamento do veículo e podem levar a restrições e até à apreensão. A boa notícia é que você não precisa pagar tudo à vista: a Winner Despachante parcela seus débitos em até 12x no cartão de crédito e cuida da regularização completa do veículo, para você voltar a rodar tranquilo.",
      "Fazemos o levantamento de todos os débitos vinculados ao veículo, apresentamos as condições de parcelamento e conduzimos a regularização (licenciamento, quitação e emissão do CRLV-e). Tudo pelo WhatsApp, sem você enfrentar filas.",
    ],
    documents: [
      "Placa e Renavam do veículo",
      "CPF do proprietário",
      "CNH ou documento de identificação do proprietário",
    ],
    steps: [
      { title: "Consulta de débitos", desc: "Levantamos IPVA, multas, licenciamento e demais taxas do veículo." },
      { title: "Simulação do parcelamento", desc: "Apresentamos as condições em até 12x no cartão de crédito." },
      { title: "Quitação e regularização", desc: "Com o parcelamento fechado, regularizamos o veículo." },
      { title: "Documento em dia", desc: "Você recebe o CRLV-e e volta a rodar tranquilo." },
    ],
    faq: [
      { q: "Posso parcelar IPVA atrasado e multas juntos?", a: "Sim. A Winner reúne os débitos do veículo e parcela em até 12x no cartão de crédito." },
      { q: "Preciso pagar tudo à vista para licenciar?", a: "Não. Com o parcelamento você regulariza o veículo sem desembolsar tudo de uma vez." },
      { q: "Como faço a consulta dos meus débitos?", a: "Basta enviar a placa e o Renavam pelo WhatsApp que levantamos tudo para você." },
      { q: "Débito impede o licenciamento?", a: "Sim. Sem quitar (ou parcelar) IPVA, taxa e multas do exercício, o licenciamento não é emitido." },
      { q: "Multa impede a transferência do veículo?", a: "Débitos vinculados ao veículo precisam ser regularizados para transferir. Nós parcelamos e cuidamos do processo." },
    ],
    related: ["licenciamento-campinas", "transferencia-de-veiculo-campinas", "comunicacao-de-venda"],
  },
]

export const serviceBySlug = Object.fromEntries(serviceList.map((s) => [s.slug, s]))

// JSON-LD por serviço (Service + FAQPage + BreadcrumbList). Gerado em tempo de
// build e injetado no <head> pelo hook onPageRendered (vite.config.js).
const SITE = "https://winnerdespachante.com.br"

export function buildServiceJsonLd(service) {
  const url = `${SITE}/${service.slug}`

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.h1,
    name: service.h1,
    description: service.metaDescription,
    areaServed: [
      { "@type": "City", name: "Campinas" },
      { "@type": "AdministrativeArea", name: "Região Metropolitana de Campinas" },
    ],
    provider: {
      "@type": "ProfessionalService",
      "@id": `${SITE}/#business`,
      name: "Winner Despachante",
    },
    url,
  }

  const faqLd = service.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: service.breadcrumb, item: url },
    ],
  }

  return [serviceLd, faqLd, breadcrumbLd].filter(Boolean)
}
