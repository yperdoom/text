# Estudo sobre o uso das APIs de localização da google
Autor: Pedro Henrique Antunes Pinto

## Tabs {.tabset}
### Guia para instalação da demo

O guia apresentado aqui, é o mesmo que foi enviado pela equipe da MapLink, esse guia consiste em passos para executar um sdk que realize operações de simulação de rotas para testar as aplicações da Google.

1. Passo 1
Acesse o site do [INTELLIJ](https://www.jetbrains.com/pt-br/idea/download/?section=windows) e faça o download da IDE - COMMUNITY

1. Passo 2
Após a instalação entre no GITHUB do google e faça o download do projeto [demo do LMFS](https://github.com/googlemaps/last-mile-fleet-solution-samples).

1. Passo 3
Verifique se as APIS e SDKs estão ativos no projeto que irá utilizar os recursos de mobilidade.
Verifique se as **CONTAS DE SERVIÇO** estão criadas e com os acessos abaixo:
`Consumer SDK User`
*Usuário consumidor de entrega do Fleet Engine*
*Usuário do SDK do consumidor do Fleet Engine*
`Driver SDK User`
*Usuário de driver não confiável de entrega do Fleet Engine*
*Usuário do SDK do driver Fleet Engine*
*Usuário motorista confiável de entrega do Fleet Engine*
`Fleet Engineer Super`
*Criador do token da conta de serviço*
*Superusuário de entrega do Fleet Engine*
*Superusuário do serviço do Fleet Engine*
`Fleer Reader`
*Usuário de leitura de frota do Fleet Engine*

1. Passo 4
Verifique se tem instalado o [GOOGLE GCLOUD CLI](https://cloud.google.com/sdk/docs/install#windows).

1. Passo 5
Crie dentro do projeto LMFS ou em outro lugar uma pasta chamada TOKENS
Dentro desta pasta deve ser criado um arquivo JSON, contendo o conteúdo abaixo:
Arquivo: consumerfleet.json
```json
{
  "iss": "consume-sdk-user@maplink-odrd.iam.gserviceaccount.com",
  "sub": "consume-sdk-user@maplink-odrd.iam.gserviceaccount.com",
  "aud": "https://fleetengine.googleapis.com/",
  "iat": 1663875977,
  "authorization": {
     "vehicleid": "*",
     "tripid": "*"
   }
}
```
Faça o mesmo para as demais **CONTAS DE SERVIÇO**, alterando dentro do BODY para as contas de serviço respectivamente e salvando com outros nomes o arquivo.

6. Passo 6
Abra o terminal do GCLOUD CLI e acesse a pasta de TOKENS via terminal.
Rode o comando de autenticação com a conta do google:
`gcloud auth login`
`gcloud auth application-default login`
Rode o comando abaixo alterando para as CONTAS DE SERVIÇO criadas anteriormente e os nomes dos arquivos salvos na pasta:
`gcloud beta iam service-accounts sign-jwt --iam-account=fleet-engineer-super@maplink-odrd.iam.gserviceaccount.com superfleet.json super_signed_token.jwt`

1. Passo 7
O [JAVA 11](https://www.azul.com/downloads/?version=java-11-lts&os=windows&package=jdk#zulu) deve estar instalado na máquina e mapeado no [JAVA_HOME](https://www.youtube.com/watch?v=QekeJBShCy4).

1. Passo 8
Abra o *INTELLIJ* e crie um projeto **ANDROID** vazio para que seja instalado o SDK do android
Após finalizado a instalação pode fechar o *INTELLIJ*.
Abra o *INTELLIJ* e mande abrir o projeto **DEMO do LMFS** salvo na máquina do usuário e espere fazer o download das dependências do projeto:
Após carregado o projeto entre em *SETTINGS* -> *BUILD,EXECUTION, DEPLOYMENT* -> *BUILD TOOLS* -> *GRADLE*
Selecione a pasta **BACKEND** e verifique se em **GRADLE JVM** está selecionado o ***JAVA AZUL ZULU 11***.
Feito isso aperte em *APPLY* e depois em *OK*
No menu superior acesse *PROJECT STRUCTURE* e selecione *PROJECT*
Verifique se em SDK está selecionado **JAVA AZUL ZULU 11**
Feito isso aperte em *APPLY* e depois em *OK*

1. Passo 9
Acesse a pasta *ANDROID_DRIVERAPP_SAMPLES* -> *APP* -> *build.gradle*
Modifique os campos **compileSdkVersion** e **targetSdkVersion** para o número **33** e mande sincronizar o projeto.
Acesse a pasta *ANDROID_DRIVERAPP_SAMPLES* -> *APP* -> *SRC* -> *MAIN* -> *AndroidManifest.xml*
Procure o parâmetro meta-data e altere o valor de **android:value** pela **API_KEY** criada no [GCP](https://console.cloud.google.com/)

1. Passo 10
No menu direito acesse **DEVICE MANAGER** e aperte em **CREATE DEVICE**
Selecione a opção **PHONE** e procure na lista por **NEXUS 6**
Aperte em **Next** para selecionar a **IMAGEM** do emulador
Escolha a opção **OREO**, caso tenha problema na instalação faça com a versão **S (31)**.
Aperte em **Next** para ir para etapa final coloque o nome do emulador e aperte em **FINISH**

1. Passo 11
No menu **DEVICE MANAGER** rode o emulador para que seja instalado os componentes dele
Caso apresente algum **erro de HAXM**, veja se ele resolve sozinho a instalação. Caso ele não abra o emulador e fique apresentando o erro **HAXM**, [clique aqui](https://www.youtube.com/watch?v=F6q6YfM8qD8).
Uma vez o emulador aperto mande executar a aplicação do Motorista para que o app seja instalado no emulador apertando na **PLAY VERDE**
Após o app instalado feche ele no emulador e de um stop no emulador.

1. Passo 12
Acesse a pasta *BACKEND* -> *SRC* -> *MAIN* -> *RESOURCES* -> **config.properties**.
Coloque o **ID do PROJETO + CONTAS DE SERVIÇO + API_KEY**
Dentro da pasta **BACKEND**, substitua o arquivo ***build.gradle*** pelo arquivo enviado em anexo
Rode o servidor **BACKEND**, caso tenha um erro de **GRADLE**:
Entre na pasta *BACKEND* -> *GRADLE* -> *WRAPPER* -> **gradle-wrapper.properties** e verifique se a versão do gradle é a **7.6.1** ou **7.6.2**, caso não seja altere para essa versão e mande sincronizar o projeto.
Rode novamente o servidor **BACKEND**, ele irá fazer o **downloadCloudSdk** e deve aguardar esse processo que pode demorar um pouco, quando finalizado deve chegar na tela abaixo
`O servidor está rodando corretamente`.
Caso tenha um erro no **appegineRun** é porque na máquina não está instalado o **JAVA 11**, volte para o **PASSO 7** e faça a instalação dele primeiro.

1. Passo 13
O **DEMO - LMFS** está instalado e configurado corretamente, pode seguir com o processo de simulação de rotas para testar as aplicações.

### Uso das APIs

#### Autenticação
A autenticação com as APIs acontecem em 2 *camadas*, o primeiro é o [papel do IAM](https://cloud.google.com/iam/docs/understanding-roles?hl=pt-br&_gl=1*y3tjyh*_ga*Nzk0MDIxOTI4LjE2OTk2MzMxOTI.*_ga_NRWSTWS78N*MTcwMTMwOTQyNC42LjEuMTcwMTMwOTU3OC4wLjAuMA..), aqui que pode-se definir o escopo da atividade que será permitada para o autor da chamada. São associados às contas de serviço.

A segunda *camada*, é um JWT, todas as solicitações ao Fleet Engine precisam de um JWT.

#### Fluxo de autenticação
1. O administrador da frota cria contas de serviço.

1. O administrador da frota atribui papéis específicos do IAM às contas de serviço.

1. O administrador da frota configura o back-end com as contas de serviço.

1. O app cliente solicita um JWT do back-end do parceiro. O requerente pode ser o app do motorista, do consumidor ou de monitoramento.

1. O Fleet Engine emite um JWT para a respectiva conta de serviço. O app cliente recebe o JWT.

1. O app cliente usa o JWT para se conectar ao Fleet Engine e ler ou modificar dados, dependendo dos papéis do IAM atribuídos a ele durante a fase de configuração.

#### Contas de serviço
Uma conta de serviço é um tipo especial de conta usado por um aplicativo, em vez de uma pessoa. Normalmente, uma conta de serviço é usada para criar JWTs que concedem diferentes conjuntos de permissões, dependendo do papel. Para reduzir a possibilidade de abuso, crie várias contas de serviço, cada uma com o conjunto mínimo de papéis necessários.

A Last Mile Fleet Solution usa os papéis a seguir:

<details>
<summary>Usuário de motorista confiável de entrega do Fleet Engine</summary>
Concede permissão para criar e atualizar tarefas e veículos de entrega, incluindo a atualização do local do veículo de entrega e do status ou resultado da tarefa. Os tokens gerados por uma conta de serviço com esse papel costumam ser usados nos dispositivos móveis do motorista de entrega ou nos servidores de back-end.

`roles/fleetengine.deliveryTrustedDriver`
</details>

<details>
<summary>Usuário de motorista não confiável de entrega do Fleet Engine</summary>
Concede permissão para atualizar a localização do veículo de entrega. Os tokens gerados por uma conta de serviço com esse papel costumam ser usados nos dispositivos móveis dos motoristas de entregas.

`roles/fleetengine.deliveryUntrustedDriver`
</details>

<details>
<summary>Usuário consumidor de entrega do Fleet Engine</summary>
Concede permissão para pesquisar tarefas usando um ID de acompanhamento e ler, mas não atualizar, as informações da tarefa. Os tokens criados por uma conta de serviço com esse papel geralmente são usados a partir do navegador da Web de um consumidor de entrega.

`roles/fleetengine.deliveryConsumer`
</details>

<details>
<summary>Superusuário de entrega do Fleet Engine</summary>
Concede permissão a todos os veículos de entrega e APIs de tarefas. Os tokens criados por uma conta de serviço com esse papel geralmente são usados nos servidores de back-end.

`roles/fleetengine.deliverySuperUser`
</details>

<details>
<summary>Leitor de frota do Fleet Engine</summary>
Concede permissão para ler veículos de entrega e tarefas e pesquisar tarefas usando um ID de rastreamento. Os tokens gerados por uma conta de serviço com esse papel geralmente são usados no navegador da Web de um operador da frota de entrega.

`roles/fleetengine.deliveryFleetReader`
</details>


#### Usuário

Se usar dispositivos gerenciados pela própria empresa (amo), é possível aproveitar a flexibilidade que é oferecida pelo papel de usuário motorista confiável do Fleet Engine. É possíivel, assim, integrar algumas ou todas as interações do Fleet Engine ao aplicativo mobile.

Caso o celular **não** seja gerenciado pela empresa, é recomendável optar pela segurança da permissão *Usuário de motorista não confiável de entrega do Fleet Engine*. Assim será possível apenas aplicar no app mobile, a responsabilidade para enviar atualizações de localização do veículo para o Fleet Engine.

É possível personalizar o nível de acesso para diferentes usuários, permitindo agrupamento arbitrário de permissões. Quando uma permissão estiver ausente, por exemplo, o SDK irá exibir uma mensagem de erro. Devido a configuração maleável, o **Google recomenda** utilizar papéis padrões ao invés de personalizados.

#### JWT
#### Tabs {.tabset}
##### Biblioteca de autenticação

O Fleet Engine, usa JWTs para restringir o acesso a suas APIs, para construir tokens de forma mais simplificada, é recomendado o uso da biblioteca [Engine Auth](https://github.com/googlemaps/java-fleetengine-auth) em **java**. Com ela, é possível simplificar o processo de criação de tokens, ela anexa tokens assinados as solicitações de saida e, dispõe de mecanismos para assinatura de token que não são uso de arquivos de credenciais, como a representação de uma conta de serviço.

##### Criação de um JWT

Para criar um JWT sem usar a biblioteca Engine Auth, é preciso entender como o Fleet Engine lida com esses tokens. A contrução do JWT para a API do google é estruturada em duas seções, cabeçalho e declaração.
A seção de cabeçalho, contém informações sobre a chave privada usada e o algoritmo de criptografia.
```json
	"alg": "O algoritmo a ser usado", // Ex: "RS256"
	"typ": "O tipo de token",  // Ex: "JWT"
	"kid": "ID da chave privada da conta de serviço Esse valor está no campo "private_key_id" do arquivo JSON da conta de serviço. Use uma chave de uma conta de serviço com o nível correto de permissões."
```
No campo `kid` no cabeçalho, deve ser especificado o ID da chave privada da conta de serviço. Esse valor pode ser encontrado no campo `private_key_id` do arquivo JSON da conta de serviço.

A seção de declaração contém informações como o tempo de criação do token, o time to live do token, os serviços a que o token está reinvindicando acesso e outras informações de autorização para reduzir o escopo do acesso, por exemplo, o código do veículo de entrega.

```json
	"iss":	"O endereço de e-mail da sua conta de serviço.",
	"sub":	"O endereço de e-mail da sua conta de serviço.",
	"aud":	"O SERVICE_NAME da sua conta de serviço, neste caso, "https://fleetengine.googleapis.com/"",
	"iat":	"O carimbo de data/hora em que o token foi criado, especificado em segundos desde 1o de janeiro de 1970, às 00:00:00 UTC. Aguarde 10 minutos para o desvio. Se o carimbo de data/hora estiver muito distante no passado ou no futuro, o servidor poderá relatar um erro.",
	"exp":	"O carimbo de data/hora da expiração do token, especificado em segundos desde 1o de janeiro de 1970, às 00:00:00 UTC. A solicitação falhará se o carimbo de data/hora for maior que uma hora no futuro.",
	"authorization": "Dependendo do caso de uso, pode conter "deliveryvehicleid", "trackingid", "taskid" ou "taskids"".
```
Nos campos `iss` e `sub`, especifique o endereço de **e-mail** da sua conta de serviço. Esse valor pode ser encontrado no campo `client_email` do arquivo JSON da conta de serviço.
No campo `aud`, especifique **https://SERVICE_NAME/**.
No campo `iat`, especifique o carimbo de data/hora em que o token foi criado, em segundos, desde 1o de janeiro de 1970, às 00:00:00 UTC. Aguarde 10 minutos para o desvio. Se o carimbo de data/hora estiver muito distante no passado ou no futuro, o servidor poderá relatar um erro.
No campo `exp`, especifique o carimbo de data/hora da expiração do token em segundos desde 1o de janeiro de 1970, às 00:00:00 UTC. O valor recomendado é iat + 3.600.

###### Declarações JWT

A LMFS usa reinvindicações particulares, garantindo assim, que apenas clientes autorizados possam acessar os próprios dados. Na criação, podem ser declarados os seguintes campos, que serão analisados pela LMFS:
```json
	"deliveryvehicleid": "use ao chamar APIs por veículo de entrega.",
	"taskid": "use ao chamar APIs por tarefa.",
	"taskids": "use ao chamar BatchCreateTasksAPI. Essa declaração precisa estar em formato de matriz que contenha todos os IDs de tarefa necessários para concluir a solicitação. Não inclua declarações delivervehicleid, trackingid ou taskid.",
	"trackingid": "use ao chamar o SearchTasksAPI. A declaração precisa corresponder ao ID de acompanhamento na solicitação. Não inclua declarações delivervehicleid, taskid ou taskids."
```

O token também precisa conter a declaração apropriada quando você estiver chamando APIs do servidor de back-end, mas é possível usar o valor especial de um asterisco ("*") para declarações deliveryvehicleid, taskid e trackingid. O asterisco ("*") também pode ser usado na declaração taskids, mas precisa ser o único elemento na matriz.

Se você quiser criar e assinar um JSON diretamente como portador de token, em vez de usar tokens de acesso do OAuth 2.0, leia as instruções para [autorização da conta de serviço](https://developers.google.com/identity/protocols/oauth2/service-account?hl=pt-br#jwt-auth) sem OAuth na documentação do desenvolvedor de identidade.

O mecanismo para anexar o token a uma chamada gRPC depende da linguagem e do framework usados para fazer a chamada. O mecanismo para especificar um token para uma chamada HTTP é incluir um cabeçalho de autorização com um token do portador cujo valor é o token, conforme observado nas notas de autorização para casos de uso de [rastreamento de envio](https://developers.google.com/maps/documentation/transportation-logistics/last-mile-fleet-solution/shipment-tracking/fleet-engine/deliveries_api?hl=pt-br#use_cases) individual ou [desempenho de frota](https://developers.google.com/maps/documentation/transportation-logistics/last-mile-fleet-solution/fleet-performance/fleet-engine/deliveries_api?hl=pt-br#use_cases).

Ao assinar o token que será transmitido para um dispositivo móvel ou usuário final, use o arquivo de credencial para o papel de Motorista de entrega ou Consumidor. Caso contrário, o dispositivo móvel ou o usuário final poderá alterar ou visualizar informações a que não deveria ter acesso.

##### Exemplos de JWTs

Exemplo de token para uma operação por tarefa do servidor back-end.
```json
    {
      "alg": "RS256",
      "typ": "JWT",
      "kid": "private_key_id_of_provider_service_account"
    }
    .
    {
      "iss": "provider@yourgcpproject.iam.gserviceaccount.com",
      "sub": "provider@yourgcpproject.iam.gserviceaccount.com",
      "aud": "https://fleetengine.googleapis.com/",
      "iat": 1511900000,
      "exp": 1511903600,
      "authorization": {
         "taskid": "*"
       }
    }
```

A seguir, um exemplo de token para uma operação de criação de tarefas em lote do servidor de back-end.

```json
    {
      "alg": "RS256",
      "typ": "JWT",
      "kid": "private_key_id_of_provider_service_account"
    }
    .
    {
      "iss": "provider@yourgcpproject.iam.gserviceaccount.com",
      "sub": "provider@yourgcpproject.iam.gserviceaccount.com",
      "aud": "https://fleetengine.googleapis.com/",
      "iat": 1511900000,
      "exp": 1511903600,
      "authorization": {
         "taskids": ["*"]
       }
    }
```

Operação por veículo de entrega:
```json
    {
      "alg": "RS256",
      "typ": "JWT",
      "kid": "private_key_id_of_provider_service_account"
    }
    .
    {
      "iss": "provider@yourgcpproject.iam.gserviceaccount.com",
      "sub": "provider@yourgcpproject.iam.gserviceaccount.com",
      "aud": "https://fleetengine.googleapis.com/",
      "iat": 1511900000,
      "exp": 1511903600,
      "authorization": {
         "deliveryvehicleid": "*"
       }
    }
```

Token para clientes usuários finais:
```json
    {
      "alg": "RS256",
      "typ": "JWT",
      "kid": "private_key_id_of_delivery_consumer_service_account"
    }
    .
    {
      "iss": "consumer@yourgcpproject.iam.gserviceaccount.com",
      "sub": "consumer@yourgcpproject.iam.gserviceaccount.com",
      "aud": "https://fleetengine.googleapis.com/",
      "iat": 1511900000,
      "exp": 1511903600,
      "authorization": {
         "trackingid": "shipment_12345"
       }
    }
```

Token para o app de motorista:
```json
    {
      "alg": "RS256",
      "typ": "JWT",
      "kid": "private_key_id_of_delivery_driver_service_account"
    }
    .
    {
      "iss": "driver@yourgcpproject.iam.gserviceaccount.com",
      "sub": "driver@yourgcpproject.iam.gserviceaccount.com",
      "aud": "https://fleetengine.googleapis.com/",
      "iat": 1511900000,
      "exp": 1511903600,
      "authorization": {
         "deliveryvehicleid": "driver_12345"
       }
    }
```

Mais informações relacionados aos JWTs podem ser consultadas [aqui](https://developers.google.com/identity/protocols/oauth2/service-account?hl=pt-br#jwt-auth).
