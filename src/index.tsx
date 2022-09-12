import {
  FlexBox,
  Heading,
  UnorderedList,
  CodeSpan,
  ListItem,
  FullScreen,
  AnimatedProgress,
  Appear,
  Slide,
  Deck,
  Link,
  Box,
  Image,
  CodePane,
  Notes,
} from "spectacle";
import gruvboxDark from "react-syntax-highlighter/dist/cjs/styles/prism/gruvbox-dark";
import { createRoot } from "react-dom/client";
import { CodePaneProps } from "spectacle/lib/components/code-pane";

import autocomplete from "./autocomplete.png";
import error from "./error.png";
import help from "./help.png";
import help2 from "./help2.png";
import firstNameError from "./firstname_error.png";
import readonlyError from "./readonly.png";
import readonlyError1 from "./readonly-error-1.png";
import readonlyError2 from "./readonly-error-2.png";
import readonlyError3 from "./readonly-error-3.png";
import readonlyError4 from "./readonly-error-4.png";
import noAnyError from "./no-any-1.png";
import noAnyError2 from "./no-any-2.png";
import { CSSProperties } from "react";

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

const GruvboxCodePane = ({
  children,
  language,
  ...props
}: Optional<CodePaneProps, "language"> & { style?: CSSProperties }) => (
  <CodePane theme={gruvboxDark} language={language || "tsx"} {...props}>
    {children}
  </CodePane>
);

const red = "#f96555";
const teal = "#0097a9";
const dark = "#1d1c21";
const purple = "#6a49f5";

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Encode Sans", Helvetica, Arial, sans-serif',
    text: '"Encode Sans", Helvetica, Arial, sans-serif',
  },
  colors: {
    tertiary: teal,
    primary: dark,
    secondary: dark,
  },
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen color={theme.colors.primary} />
    </Box>
    <Box padding="0 1em 0 0">
      <AnimatedProgress
        pacmanColor={theme.colors.primary}
        color={theme.colors.primary}
      />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="h1">
          ✨ Why TypeScript matters ✨
        </Heading>
        <Heading margin="0px" fontSize="h2">
          Jesper Håkansson
        </Heading>
      </FlexBox>
    </Slide>
    <Slide
      transition={{
        from: {
          transform: "scale(0.5) rotate(45deg)",
          opacity: 0,
        },
        enter: {
          transform: "scale(1) rotate(0)",
          opacity: 1,
        },
        leave: {
          transform: "scale(0.2) rotate(315deg)",
          opacity: 0,
        },
      }}
      backgroundColor="tertiary"
    >
      <Heading fontSize="h3">Vad är TypeScript?</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            TypeScript är JavaScript fast med syntax för typer
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Starkt typat språk som transpilerar till JavaScript
          </ListItem>
        </Appear>

        <Appear>
          <ListItem>Utvecklat av Microsoft</ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Open source, finns på Github:{" "}
            <Link href="https://github.com/Microsoft/TypeScript">
              https://github.com/Microsoft/TypeScript
            </Link>{" "}
            (över 80k stars)
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>Funnits sedan 2012</ListItem>
        </Appear>
      </UnorderedList>
      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            Så vad är TypeScript då? Jo, Typescript är JavaScript fast med
            syntax för typer plus enums och en hel del annat skoj, som jag
            kommer visa senare.
          </ListItem>
          <ListItem>
            JavaScript i sig har ju en del primitiva typer, men inget som man
            deklarerar när man använder språket. Det inferas istället av
            JavaScript-runtimen, vilket kan vara browsern, node.js eller någon
            annan runtime. Har ju börjat komma fler och fler nu på senare tid.
          </ListItem>
          <ListItem>
            TypeScript däremot är ett starkt typat språk och TypeScript
            transpilerar till JavaScript, vilket betyder att när vi kör vår
            TypeScript-kod genom TypeScripts kompiler så blir outputen
            JavaScript-kod och inte maskinkod direkt. Med andra ord så kan
            TypeScript köras överallt där JavaScript kan köras. Vi kan alltså
            utveckla webbappar, mobilappar, tvappar etc med TypeScript också.
          </ListItem>
          <ListItem>
            TypeScript är utvecklat och underhålls utav Microsoft.
          </ListItem>
          <ListItem>
            Det utvecklas open source och källkoden finns på Github. Repot har
            över 80k stars, och många fler användare över hela världen. Det har
            funnits sedan 2012.
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Vad innebär ett starkt typat språk?</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Strikta typ-regler i compile time</ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Kan ej få koden att kompilera fören vi upprätthåller korrekta typer
          </ListItem>
        </Appear>

        <Appear>
          <ListItem>
            En rad olika typer finns i TypeScript. Exempelvis:
          </ListItem>
          <UnorderedList>
            <ListItem>string</ListItem>
            <ListItem>number</ListItem>
            <ListItem>boolean</ListItem>
            <ListItem>Array</ListItem>
          </UnorderedList>
        </Appear>
      </UnorderedList>

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>Vad innebär ett starkt typat språk då?</ListItem>
          <ListItem>
            Ett starkt typat språk innebär att vi har strikta typ-regler i
            compile time som vi måste uppfylla.
          </ListItem>
          <ListItem>
            Vi kan inte få koden att kompilera fören vi upprätthåller korrekta
            typer. Med det kan vi hitta fel direkt i vår editor, innan koden
            körs. Till skillnad mot löst typade språk som exempelvis, JavaScript
            där vi märker felen i runtime, när dom faktiskt händer.
          </ListItem>
          <ListItem>
            Vi har en hel del olika typer i TypeScript, några av dom är string,
            number, boolean och Array. Vi kommer senare kika närmare hur man
            använder dom och dessutom visa några fler.
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>
    <Slide>
      <GruvboxCodePane language="jsx">{`
function compat(arr) {
  if (orr.length > 10) return arr.trim(0, 10);
  return arr;
}
        `}</GruvboxCodePane>

      <Box padding="1em" />
      <Appear>
        <Image src={error} width="100%" />
      </Appear>
      <Box padding="1em" />
      <Appear>
        <GruvboxCodePane language="tsx">{`
function compat(arr: Array<string>) {
  if (arr.length > 10) return arr.slice(0, 10);
  return arr;
}
        `}</GruvboxCodePane>
        <Notes>
          <UnorderedList color="#fff">
            <ListItem>
              Här har vi lite JavaScript-kod som är lite knasigt skriven. Ni
              kanske ser felen i den här koden, men vi får tyvärr inga fel i vår
              editor och koden kraschar i runtime.
            </ListItem>
            <ListItem>
              Men skriver vi den här koden i TypeScript så får vi däremot fel
              direkt i editorn. Att rad 2 innehåller en variabel som inte finns,
              och att trim-funktionen inte finns på en array.
            </ListItem>
            <ListItem>
              Och sist ser vi funktionen skriven helt i TypeScript och dessutom
              rättad efter felen som TypeScript visade oss. Dvs att det är arr
              och inte orr och att det är slice vi vill ha och inte trim.
            </ListItem>
          </UnorderedList>
        </Notes>
      </Appear>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Varför är typer bra?</Heading>

      <UnorderedList>
        <Appear>
          <ListItem>Vi får mer hjälp av TypeScript</ListItem>

          <Image src={help} width="100%" />
          <Image src={help2} width="100%" />
        </Appear>

        <Appear>
          <ListItem>Refactorering av kod med självförtroende</ListItem>
        </Appear>
      </UnorderedList>
      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            Så varför är typer bra? Vi får som sagt hjälp i compile time av
            TypeScript.
          </ListItem>
          <ListItem>
            Här ser vi en enkel felstavning när vi försöker kalla på en
            funktion, och TypeScript ger oss till och med förslag på vilken
            funktion vi kanske vill egentligen kalla på.
          </ListItem>
          <ListItem>
            Vi ser också att vi inte kan addera en siffra med en boolean. Eller
            ja, det är möjligt att göra det i JavaScript, men är förmodligen
            inget vi egentligen ville göra.
          </ListItem>

          <ListItem>
            Fånga fel i compile time är absolut en av dom största positiva
            effekterna vi kan få. Men vi får faktiskt en hel del andra positiva
            effekter som refactorering av kod med självförtroende.
          </ListItem>
          <ListItem>
            Men vad betyder refactorering av kod med självförtroende egentligen?
            Jo, har vi typat allt bra och ändrar på kod någonstans, till exempel
            ändrar på hur ett objekt ser ut, att en property inte längre finns
            eller ändrat namn på en property eller liknande. När koden väl
            kompilerar då är vi klara med refactorering och slipper få undefined
            i runtime i och med att propertyn inte längre finns.
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Varför är typer bra?</Heading>

      <UnorderedList>
        <ListItem>Autocomplete</ListItem>

        <Image src={autocomplete} width={1000} />
      </UnorderedList>
      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            Något annat som är mycket trevligt är att vi får bra autocomplete i
            vår editor med hjälp av TypeScript
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Varför är typer bra?</Heading>
      <UnorderedList>
        <ListItem>
          Tydligare kod, intentioner direkt genom att läsa koden
        </ListItem>
        <Appear>
          <ListItem>Jump-to-definition</ListItem>
        </Appear>
        <Appear>
          <ListItem>Auto-import</ListItem>
        </Appear>
        <Appear>
          <ListItem>Bättre utvecklarverktyg</ListItem>
        </Appear>
      </UnorderedList>
      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            Vi får också tydligare kod genom att skriva typer. Man kan se vissa
            intentioner direkt genom att läsa koden.
          </ListItem>
          <ListItem>
            Jump-to-definition får vi också, så vi kan snabbt och enkelt hoppa
            in i källkoden och exempelvis läsa hur en funktion ser ut och
            fungerar
          </ListItem>
          <ListItem>
            Auto-import av funktioner genom en knapptrycking är otroligt skönt,
            och behöva göra en manuell import är hyffsat segt
          </ListItem>
          <ListItem>
            I och med typer så blir det också mindre tveksamheter för verktyg.
            Vilket ger oss bättre utvecklarverktyg. Exempelvis eslint, codegen
            och codemods.
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>

    <Slide>
      <Heading fontSize="h3">
        Varför <i>inte</i> typer?
      </Heading>
      <UnorderedList>
        <ListItem>Mer komplext, jobbigt att typa allt</ListItem>
        <Appear>
          <ListItem>Extra byggsteg</ListItem>
        </Appear>
        <Appear>
          <ListItem>Verbose</ListItem>
        </Appear>
        <Appear>
          <ListItem>Problem/jobbigt med tredje-partskod</ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Falsk säkerhet med typer. Även om typer hjälper mycket så kan koden
            ändå ha buggar. Typer utesluter inte tester!
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Finns risk att TypeScript hamnar efter de senaste versionerna av
            ECMAScript
          </ListItem>
        </Appear>
      </UnorderedList>
      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            Varför inte typer då? Det är mer komplext med typer. Det blir ett
            extra steg som är jobbigt, dvs att vi ska behöva typa allt innan vi
            kan köra koden
          </ListItem>
          <ListItem>
            Vi får ett extra byggsteg att förhålla oss till. Bara det i sig är
            mer komplext. Ett extra byggsteg gör det dessutom långsammare, att
            behöva typchecka koden gör det långsammare.
          </ListItem>
          <ListItem>
            Det blir mer verbose kod. Vi får ett extra lager ovanpå ett enklare
            dynamiskt språk som JavaScript
          </ListItem>
          <ListItem>
            Det kan bli problem med otypad eller feltypade tredje-partskod
          </ListItem>
          <ListItem>
            Man kan få en falsk trygghet med typer. Även om typer hjälper mycket
            så kan koden ändå ha buggar, men typer utesluter inte tester!
          </ListItem>
          <ListItem>
            Det finns en risk att TypeScript hamnar efter de senaste versionerna
            av ECMAScript, och ECMAScript jobbas ju på hela tiden med en rad
            olika proposals
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>

    <Slide>
      <Heading fontSize="h3">
        Varför <i>inte</i> typer svar
      </Heading>
      <UnorderedList>
        <ListItem>
          <i>Jobbigt att typa allt</i>: TypeScript inferar faktiskt typer, det
          finns också en escape hatch och det är att typa saker som <i>any</i>.
          Dock ej bra!
        </ListItem>
        <ListItem>
          <i>Extra byggsteg</i>: Antagligen så använder man redan babel och
          någon nyare version av EcmaScript och kräver bakåtkompabiltet
        </ListItem>
        <ListItem>
          <i>Verbose</i>: Att typer är verbose är svårt att komma ifrån
        </ListItem>
      </UnorderedList>

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            Om man tycker att det är jobbigt att typ allt hela tiden så kan man
            faktiskt skippa det, TypeScript inferar faktiskt typer. Alltså,
            gissar typen med hjälp av värdet. Så har vi en konstant som assignas
            till siffran 1 så vet TypeScript att den variabeln är av typen
            number.
          </ListItem>
          <ListItem>
            TypeScript har också en escape hatch, och det är genom att typa
            saker som any. Detta är dock inte rekommenderat och vi tappar grejen
            med att använda TypeScript
          </ListItem>
          <ListItem>
            Att man får ett extra byggsteg är sällan ett problem nu för tiden,
            dom flesta använder redan babel och någon nyare version av
            EcmaScript för att få tillgång till det senaste men behöver ändå
            bakåtkompabiltet. Nu för tiden är det enkelt att integrera
            TypeScript i sitt befintliga byggsteg
          </ListItem>
          <ListItem>
            Att typer är verbose är svårt att komma ifrån, och tycker man så och
            att vinningen att använda typer inte är tillräckligt stor så kanske
            inte typer är för den personen helt enkelt
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>

    <Slide>
      <Heading fontSize="h3">
        Varför <i>inte</i> typer svar
      </Heading>
      <UnorderedList>
        <ListItem>
          <i>Problem/jobbigt med tredje-partskod</i>. I värsta fall kan man
          skapa egna TypeScript typer för koden och typa upp det så gott man
          kan, alternativt så får man det lika dåligt typat som om det vore
          JavaScript
        </ListItem>
        <ListItem>
          <i>Falsk trygghet med typer</i>. Svårt att komma ifrån. Dock bör man
          ju ändå skriva tester!
        </ListItem>
      </UnorderedList>

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            Att det kan bli problem med tredje-partskod kan hända, men i värsta
            fall så kan man skapa egna TypeScript typer för tredje-partskoden.
            Alternativt så kan man få det lika dåligt typat som om det vore
            JavaScript.
          </ListItem>
          <ListItem>
            Falsk trygghet är svårt att komma ifrån, men bara för att man har
            typer så betyder inte det att man inte behöver några tester. Så typa
            saker och skriv tester så blir ni ännu tryggare.
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Dags för lite kod! 🎉</Heading>
      <Appear>
        <GruvboxCodePane>
          {`
// user.ts

// TypeScript infer it as: {id: number, username: string, email: string}
const user = { id: 1, username: "jesper", email: "jesper@beanloop.se" }; 
        `}
        </GruvboxCodePane>
      </Appear>

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            Okej, nu är det dags för det ni har väntat på! Nu ska vi kolla på
            lite kod!
          </ListItem>
          <ListItem>
            Den här koden visar ett vanligt JavaScript-objekt. Vi ser ett id,
            ett username och en email i objektet. Jag har också lagt en
            kommentar ovan här för att se vad TypeScript inferar.
          </ListItem>
          <ListItem>
            Det som TypeScript inferar är att id är av typen number, username av
            typen sträng och likaså email
          </ListItem>
          <ListItem>
            Nu har vi faktiskt skrivit vår första TypeScript-kod, i och med att
            vi har filändelsen .ts. Som kännetecknar att det är en
            TypeScript-fil. Är ni vana med JavaScript så har vi inte skrivit
            någon annorlunda kod än JavaScript, men vi får redan en hel del
            fördelar av TypeScript, bara genom att ha en TypeScript-fil.
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>

    <Slide>
      <GruvboxCodePane>
        {`
// user.ts

type User = {
  id: number;
  username: string;
  email: string;
};

const user: User = { id: 1, username: "jesper", email: "jesper@beanloop.se" }; 
        `}
      </GruvboxCodePane>

      <Box padding="1em" />
      <Appear>
        <Image src={firstNameError} width="100%" />
      </Appear>

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            Här har vi då samma kod som innan, men vi har introducerat en egen
            typ som vi benämner till user.
          </ListItem>
          <ListItem>
            Den här user-typen innehåller egentligen precis samma som det som
            TypeScript inferade åt oss.
          </ListItem>
          <ListItem>
            Vi sätter sedan att vår variabel ska vara va typen User med hjälp av
            kolonet innan värdet assignas till variablen.
          </ListItem>
          <ListItem>
            Vi har nu vår första egna typ deklarerad och som används
          </ListItem>
          <ListItem>
            Det fina med att sätta vår variabel till vår typ så här är att vi
            får fel från TypeScript om vi försöker lägga en property i objektet
            som inte stämmer överens med typen. Som vi ser här så finns ju inte
            firstName i typen och försöker vi lägga till det i objektet så får
            vi ett fel. Detta blir en stor skillnad mot att TypeScript skulle
            infera typen åt oss. Då skulle den infera det som typen fälten i
            typen User, men plus firstName satt till en sträng. Vi skulle
            dessutom få fel här av TypeScript om vi inte skulle exempelvis haft
            med property id.
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>

    <Slide>
      <GruvboxCodePane>
        {`
// user-service.ts

import type { User } from "./user";

const getUser: User = () => // ...

const editUser = (user: User) => // ...
        `}
      </GruvboxCodePane>

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            Här ser vi hur vi kan importera vår nyligen skapade typ och
            återanvända den, och dessutom typa returvärdet för
            getUser-funktionen till User.
          </ListItem>
          <ListItem>
            Den andra funktionen editUser tar en user som parameter
          </ListItem>
          <ListItem>
            Detta innebär då alltså att från getUser så får vi tillbaka ett
            objekt som överensstämmer med typen user. Vi får inte fler
            properties, och inte färre. Detsamma gäller för editUser, när man
            anropar den funktionen så måste man skicka med ett objekt som
            överensstämmer med vår user-typ.
          </ListItem>
          <ListItem>
            Det blir tydligt att veta vad man ska skicka in, och vad man kan
            förväntas få tillbaka
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Primitiva typer</Heading>

      <Appear>
        <GruvboxCodePane>
          {`
const num: number = 123;
const floatNum: number = 123.456;

const str: string = "Hello";

const bool: boolean = true;
const falseBool: boolean = false;
          `}
        </GruvboxCodePane>
      </Appear>

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            Nu har vi sett lite TypeScript-kod, men jag tänkte jag skulle gå
            igenom lite olika typerna som finns i TypeScripts typsystemet.
          </ListItem>
          <ListItem>Vi börjar med de primitiva typerna.</ListItem>
          <ListItem>
            Dom primitiva typerna är number, string och boolean och dom ser ut
            som så här. Dessa primitiva typer finns i JavaScript också, men
            inget som man skriver ut när man kodar JavaScript.
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Arrays</Heading>

      <Appear>
        <GruvboxCodePane>
          {`
const boolArray: boolean[] = [true, false];

console.log(boolArray[0]); // true
console.log(boolArray.length); // 2

const numbers: Array<number> = [1, 2, 3, 4, 5];
          `}
        </GruvboxCodePane>
      </Appear>

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>Nästa sak är arrayer.</ListItem>
          <ListItem>Inte olikt hur vi jobbar med arrayer i JavaScript</ListItem>
          <ListItem>
            Syntaxen för att säga att en variabel är av typen array är två
            klamerparenteser, som ni kan se på rad 1. Vi har dvs en array med
            bools här
          </ListItem>
          <ListItem>
            Det finns också en alternativ syntax, som vissa kan tycka är
            tydligare och det är att säga en Array av typen number, som ni ser
            på rad 6.
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Specialtyper</Heading>

      <Appear>
        <UnorderedList>
          <ListItem>any</ListItem>
          <ListItem>never</ListItem>
          <ListItem>undefined</ListItem>
          <ListItem>null</ListItem>
          <ListItem>void</ListItem>
        </UnorderedList>
      </Appear>

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>I TypeScript så finns det några specialtyper</ListItem>
          <ListItem>Dom är any, never, undefined, null och void</ListItem>
        </UnorderedList>
      </Notes>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Any</Heading>

      <Appear>
        <GruvboxCodePane>
          {`
// income tar alla typer
let income: any = "100";
income = 100;
income = false;


// any är kompatibel med alla typer
let price: number = 0.0;
income = price;
price = income;
          `}
        </GruvboxCodePane>
      </Appear>

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>Vi börjar kolla på any</ListItem>
          <ListItem>
            any har en speciell plats i TypeScript-typsystem. Den ger oss en
            escape hatch från typsystemet. Med den så säger vi till TypeScript
            att vi vet bättre än TypeScript och gör så att TypeScript backar
            undan. any är kompatibel med alla typer i typsystemet. Det betyder
            att vad som helst kan tilldelas till en variabel av typen any
          </ListItem>
          <ListItem>
            I koden här ser vi variablen income som har typen any, vi kan
            assigna precis vad som helst till den. Any är dessutom kompatibel
            med alla typer, så vi uppfyller variablen price's typ number i och
            med att vi är any.
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Any</Heading>

      <Appear>
        <GruvboxCodePane>
          {`
// income tar alla typer
let income: any = "100";
income = 100;
income = false;


// any är kompatibel med alla typer
let price: number = 0.0;
income = price;
price = income;
          `}
        </GruvboxCodePane>
      </Appear>

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>Vi börjar kolla på any</ListItem>
          <ListItem>
            any har en speciell plats i TypeScript-typsystem. Den ger oss en
            escape hatch från typsystemet. Med den så säger vi till TypeScript
            att vi vet bättre än TypeScript och gör så att TypeScript backar
            undan. any är kompatibel med alla typer i typsystemet. Det betyder
            att vad som helst kan tilldelas till en variabel av typen any
          </ListItem>
          <ListItem>
            I koden här ser vi variablen income som har typen any, vi kan
            assigna precis vad som helst till den. Any är dessutom kompatibel
            med alla typer, så vi uppfyller variablen price's typ number i och
            med att vi är any.
          </ListItem>
        </UnorderedList>
      </Notes>
      </Slide>

    <Slide>
      <Heading fontSize="h3">Generics</Heading>

      <Appear>
        <GruvboxCodePane>
          {`
function reverse<T>(items: Array<T>) {
  return items.map((_item, index) => items[items.length - 1 - index]);
}

reverse([1, 2, 3, 4, 5]);

reverse(["A", "B", "C", "D", "E"]);
        `}
        </GruvboxCodePane>
      </Appear>

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>Över till generics</ListItem>
        </UnorderedList>
      </Notes>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Unions</Heading>

      <GruvboxCodePane>
        {`
type User = {
  id: number;
  username: string;
  email: string;
};

type GuestUser = {
  username: string;
};

const getUsername = (user: User | GuestUser): string => user.username;
        `}
      </GruvboxCodePane>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Intersection</Heading>

      <GruvboxCodePane>
        {`
import type { User } from "./user";

type ErrorHandling = {
  success: boolean;
  error?: { message: string };
};

type UserReponse = User & ErrorHandling;

const handleUserResponse = (userResponse: UserReponse): User | null => {
  if (userResponse.error) {
    // Report error to log service
    return null;
  }

  return userResponse;
};
        `}
      </GruvboxCodePane>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Tuples</Heading>

      <GruvboxCodePane>
        {`
import type { User } from "./user";

const getIdWithName = (user: User): [number, string] => {
  return [user.id, user.username];
};

const [id, username] = getIdWithName({
  id: 1,
  username: "johndoe",
  email: "johndoe@doe.doe",
});
        `}
      </GruvboxCodePane>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Tuples</Heading>

      <GruvboxCodePane>
        {`
import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

const MyButton = () => {
  const [count, setCount]: [number, Dispatch<SetStateAction<number>>] =
    useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return <button onClick={handleClick}>Clicked {count} times</button>;
};
        `}
      </GruvboxCodePane>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Enums</Heading>

      <GruvboxCodePane>
        {`
enum Color {
  Red // 0,
  Green // 1,
  Blue // 2,
}

const getColor = (color: Color): string => {
  switch (color) {
    case Color.Red:
      return "#FF0000";
    case Color.Green:
      return "#00FF00";
    case Color.Blue:
      return "#0000FF";
  }
};
        `}
      </GruvboxCodePane>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Enums</Heading>
      <GruvboxCodePane>
        {`
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
        `}
      </GruvboxCodePane>
      <Box padding="1em" />
      <Appear>
        <GruvboxCodePane>
          {`
// Don't do this
enum BooleanLikeHeterogeneousEnum {
  Yes = "YES",
  No = 0,
}
        `}
        </GruvboxCodePane>
      </Appear>
      <Notes>
        <UnorderedList color="#fff">
          <ListItem>Enums kan också innehålla strängar</ListItem>
          <ListItem>
            Det är möjligt att mixa sträng-enums med siffer-enums. Det är dock
            inte rekommenderat att användas så
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Readonly</Heading>

      <GruvboxCodePane>
        {`
const items = [1, 2, 3];
items.push(230);
items[0] = 100;

const point = { x: 10, y: 20 };
point.x = 20;
point.y = 40;
        `}
      </GruvboxCodePane>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Readonly</Heading>

      <GruvboxCodePane>
        {`

let readonlyItems: ReadonlyArray<number> = [1, 2, 3];

readonlyItems.push(230);
readonlyItems[0] = 100;
        `}
      </GruvboxCodePane>
      <Box padding="1em" />

      <FlexBox>
        <Appear>
          <Image src={readonlyError} width="500px" />
        </Appear>

        <Box padding="1em" />
        <FlexBox flexDirection="column">
          <Appear>
            <Image src={readonlyError1} width="800px" />
          </Appear>

          <Box padding="1em" />

          <Appear>
            <Image src={readonlyError2} width="800px" />
          </Appear>
        </FlexBox>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Readonly</Heading>

      <GruvboxCodePane>
        {`

type ReadonlyPoint = {
  readonly x: number;
  readonly y: number;
};

const readonlyPoint: ReadonlyPoint = { x: 10, y: 20 };

readonlyPoint.x = 20;
readonlyPoint.y = 40;

        `}
      </GruvboxCodePane>
      <Box padding="1em" />

      <Appear>
        <FlexBox>
          <Image src={readonlyError3} width="100%" />
          <Box padding="1em" />
          <Image src={readonlyError4} width="100%" />
        </FlexBox>
      </Appear>
    </Slide>
    <Slide>
      <Heading fontSize="h3">
        Få in TypeScript i redan befintlig kodbas?
      </Heading>

      <UnorderedList>
        <ListItem>
          <CodeSpan color="primary">
            yarn add -D typescript @babel/preset-typescript
          </CodeSpan>
        </ListItem>
        <ListItem>Lägg till "@babel/preset-typescript" i er .babelrc</ListItem>
        <ListItem>
          tsc --init för att få en tsconfig.json med default-värden
        </ListItem>
        <ListItem>Sätt allowJs till true i tsconfig.json</ListItem>
        <ListItem>
          Bygg nya funktioner i TypeScript och importera gammal JavaScript-kod
          🎉
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Myter om TypeScript</Heading>

      <UnorderedList>
        <ListItem>Det är inte JavaScript</ListItem>
        <ListItem>
          TypeScript är överflödigt, räcker att använda doc comments. E.g.
          @param, @return
        </ListItem>
        <ListItem>
          Man kan typa allt som <i>any</i> så det är inte är typesäkert
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Det är inte JavaScript</Heading>
      <UnorderedList>
        <ListItem>
          TypeScript följer noga ECMAScript. Implementerar stage 3 proposals
        </ListItem>

        <ListItem>Fungerar som JavaScript fast med typer</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <GruvboxCodePane language="ts">
        {`
// get-user.ts
type User = {
  id: number;
  username: string;
  email: string;
};

const users: ReadonlyArray<User> = [
  { id: 1, username: "jesper", email: "jesper@beanloop.se" },
];

export const getUser = ({ userId }: { userId: User["id"] }): User | null =>
  users.find((user) => user.id === userId) || null;
          `}
      </GruvboxCodePane>

      <Box padding="1em" />
      <Appear>
        <GruvboxCodePane language="js">
          {`
// get-user.js
const users = [
    { id: 1, username: "jesper", email: "jesper@beanloop.se" },
];

export const getUser = ({ userId }) => users.find((user) => user.id === userId) || null;
        `}
        </GruvboxCodePane>
      </Appear>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Men enums finns ju inte i JavaScript?</Heading>

      <FlexBox flexDirection="row" justifyContent="flexStart">
        <GruvboxCodePane
          language="js"
          style={{ width: 650, overflow: "hidden" }}
        >
          {`
enum Color {
  Red,
  Green,
  Blue,
}

const getColor = (color: Color): string => {
  switch (color) {
    case Color.Red:
      return "#FF0000";
    case Color.Green:
      return "#00FF00";
    case Color.Blue:
      return "#0000FF";
  }
};
        `}
        </GruvboxCodePane>

        <Box padding="1em" />
        <Appear>
          <GruvboxCodePane
            language="js"
            style={{ width: 600, overflow: "hidden" }}
          >
            {`
"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
const getColor = (color) => {
    switch (color) {
        case Color.Red:
            return "#FF0000";
        case Color.Green:
            return "#00FF00";
        case Color.Blue:
            return "#0000FF";
    }
};
        `}
          </GruvboxCodePane>
        </Appear>
      </FlexBox>
    </Slide>
    <Slide>
      <Heading fontSize="h3">const enums till räddningen</Heading>
      <FlexBox flexDirection="row" justifyContent="flexStart">
        <GruvboxCodePane
          language="js"
          style={{ width: 650, overflow: "hidden" }}
        >
          {`
const enum Color {
  Red,
  Green,
  Blue,
}

const getColor = (color: Color): string => {
  switch (color) {
    case Color.Red:
      return "#FF0000";
    case Color.Green:
      return "#00FF00";
    case Color.Blue:
      return "#0000FF";
  }
};
        `}
        </GruvboxCodePane>

        <Box padding="1em" />
        <Appear>
          <GruvboxCodePane
            language="js"
            style={{ width: 600, overflow: "hidden" }}
          >
            {`
"use strict";
const getColor = (color) => {
    switch (color) {
        case Color.Red:
            return "#FF0000";
        case Color.Green:
            return "#00FF00";
        case Color.Blue:
            return "#0000FF";
    }
};
        `}
          </GruvboxCodePane>
        </Appear>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Doc comments</Heading>

      <UnorderedList>
        <ListItem>
          Absolut bra, men det är sällan dokumentation hänger med implementation
        </ListItem>
        <ListItem>
          Vi kan använda både och med TypeScript. Doc comments funkar
          fortfarande, en aning överflödigt dock. Men @examples och beskrivning
          kan fortfarande vara ett trevligt komplement!
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading fontSize="h3">
        Man kan typa allt som <i>any</i>
      </Heading>
      <Appear>
        <GruvboxCodePane language="json">
          {`
{
  ...
  "compilerOptions": {
    ...
    "noImplicitAny": true
  }
}
          `}
        </GruvboxCodePane>
      </Appear>
      <Box padding="1em" />
      <Appear>
        <GruvboxCodePane language="js">
          {`
module.exports = {
  plugins: ["@typescript-eslint"],
  extends: [...],
  rules: {
    "@typescript-eslint/no-explicit-any": "error",
  },
};
          `}
        </GruvboxCodePane>
      </Appear>
    </Slide>

    <Slide>
      <Heading fontSize="h3">
        Man kan typa allt som <i>any</i>
      </Heading>
      <GruvboxCodePane>
        {`
const p;

const age: any = "seventeen";
          `}
      </GruvboxCodePane>
      <Box padding="1em" />

      <Appear>
        <Image src={noAnyError} width="1000px" />
      </Appear>

      <Box padding="1em" />
      <Appear>
        <Image src={noAnyError2} width="1000px" />
      </Appear>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Alternativ till TypeScript</Heading>
      <UnorderedList>
        <ListItem>
          Flow.js - Facebooks statiska type-checker. I princip utdött.
        </ListItem>
        <ListItem>
          Elm - Ett strikt funktionellt språk som kompilerar till JavaScript
        </ListItem>
        <ListItem>
          PureScript - Också starkt typat funktionellt språk som kompilerar till
          JavaScript
        </ListItem>
        <ListItem>
          ReasonML - Starkt typat språk kompilerar till JavaScript och OCaml.
          Kan nyttja både OCaml-paket och JavaScript-paket
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Tips och tricks</Heading>
      <GruvboxCodePane>
        {`
  enum Direction {
    Up = "Upp",
    Down = "Ner",
    Left = "Vänster",
    Right = "Höger",
  }

  Object.values(Direction); // [ 'Upp', 'Ner', 'Vänster', 'Höger' ]

    `}
      </GruvboxCodePane>
      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            Dock inte möjligt att göra med const enums då dom försvinner efter
            koden blivit JavaScript-kod.
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Bra länkar</Heading>
      <UnorderedList>
        <ListItem>
          <Link href="https://github.com/Microsoft/TypeScript">
            https://github.com/Microsoft/TypeScript
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://www.typescriptlang.org/docs/handbook/intro.html">
            https://www.typescriptlang.org/docs/handbook/intro.html
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.typescriptlang.org/docs/handbook/utility-types.html">
            https://www.typescriptlang.org/docs/handbook/utility-types.html
          </Link>
        </ListItem>
      </UnorderedList>
    </Slide>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="h1">
          Tack för mig
        </Heading>
        <Heading margin="0px" fontSize="h1">
          Frågor?
        </Heading>
      </FlexBox>
    </Slide>
  </Deck>
);

const root = createRoot(document.getElementById("root")!);
root.render(<Presentation />);
