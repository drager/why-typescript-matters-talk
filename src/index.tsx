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
          ??? Why TypeScript matters ???
        </Heading>
        <Heading margin="0px" fontSize="h2">
          Jesper H??kansson
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
      <Heading fontSize="h3">Vad ??r TypeScript?</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            TypeScript ??r JavaScript fast med syntax f??r typer
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Starkt typat spr??k som transpilerar till JavaScript
          </ListItem>
        </Appear>

        <Appear>
          <ListItem>Utvecklat av Microsoft</ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Open source, finns p?? Github:{" "}
            <Link href="https://github.com/Microsoft/TypeScript">
              https://github.com/Microsoft/TypeScript
            </Link>{" "}
            (??ver 80k stars)
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>Funnits sedan 2012</ListItem>
        </Appear>
      </UnorderedList>
      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            S?? vad ??r TypeScript d??? Jo, Typescript ??r JavaScript fast med
            syntax f??r typer plus enums och en hel del annat skoj, som jag
            kommer visa senare.
          </ListItem>
          <ListItem>
            JavaScript i sig har ju en del primitiva typer, men inget som man
            deklarerar n??r man anv??nder spr??ket. Det inferas ist??llet av
            JavaScript-runtimen, vilket kan vara browsern, node.js eller n??gon
            annan runtime. Har ju b??rjat komma fler och fler nu p?? senare tid.
          </ListItem>
          <ListItem>
            TypeScript d??remot ??r ett starkt typat spr??k och TypeScript
            transpilerar till JavaScript, vilket betyder att n??r vi k??r v??r
            TypeScript-kod genom TypeScripts kompiler s?? blir outputen
            JavaScript-kod och inte maskinkod direkt. Med andra ord s?? kan
            TypeScript k??ras ??verallt d??r JavaScript kan k??ras. Vi kan allts??
            utveckla webbappar, mobilappar, tvappar etc med TypeScript ocks??.
          </ListItem>
          <ListItem>
            TypeScript ??r utvecklat och underh??lls utav Microsoft.
          </ListItem>
          <ListItem>
            Det utvecklas open source och k??llkoden finns p?? Github. Repot har
            ??ver 80k stars, och m??nga fler anv??ndare ??ver hela v??rlden. Det har
            funnits sedan 2012.
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Vad inneb??r ett starkt typat spr??k?</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>Strikta typ-regler i compile time</ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Kan ej f?? koden att kompilera f??ren vi uppr??tth??ller korrekta typer
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
          <ListItem>Vad inneb??r ett starkt typat spr??k d???</ListItem>
          <ListItem>
            Ett starkt typat spr??k inneb??r att vi har strikta typ-regler i
            compile time som vi m??ste uppfylla.
          </ListItem>
          <ListItem>
            Vi kan inte f?? koden att kompilera f??ren vi uppr??tth??ller korrekta
            typer. Med det kan vi hitta fel direkt i v??r editor, innan koden
            k??rs. Till skillnad mot l??st typade spr??k som exempelvis, JavaScript
            d??r vi m??rker felen i runtime, n??r dom faktiskt h??nder.
          </ListItem>
          <ListItem>
            Vi har en hel del olika typer i TypeScript, n??gra av dom ??r string,
            number, boolean och Array. Vi kommer senare kika n??rmare hur man
            anv??nder dom och dessutom visa n??gra fler.
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Vad inneb??r ett starkt typat spr??k?</Heading>
      <GruvboxCodePane language="jsx">{`
// compat.js
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
// compat.ts
function compat(arr: Array<string>) {
  if (arr.length > 10) return arr.slice(0, 10);
  return arr;
}
        `}</GruvboxCodePane>
        <Notes>
          <UnorderedList color="#fff">
            <ListItem>
              H??r har vi lite JavaScript-kod som ??r lite knasigt skriven. Ni
              kanske ser felen i den h??r koden, men vi f??r tyv??rr inga fel i v??r
              editor och koden kraschar i runtime.
            </ListItem>
            <ListItem>
              Men skriver vi den h??r koden i TypeScript s?? f??r vi d??remot fel
              direkt i editorn. Att rad 2 inneh??ller en variabel som inte finns,
              och att trim-funktionen inte finns p?? en array.
            </ListItem>
            <ListItem>
              Och sist ser vi funktionen skriven helt i TypeScript och dessutom
              r??ttad efter felen som TypeScript visade oss. Dvs att det ??r arr
              och inte orr och att det ??r slice vi vill ha och inte trim.
            </ListItem>
          </UnorderedList>
        </Notes>
      </Appear>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Varf??r ??r typer bra?</Heading>

      <UnorderedList>
        <Appear>
          <ListItem>Vi f??r mer hj??lp av TypeScript</ListItem>

          <Image src={help} width="100%" />
          <Image src={help2} width="100%" />
        </Appear>

        <Appear>
          <ListItem>Refactorering av kod med sj??lvf??rtroende</ListItem>
        </Appear>
      </UnorderedList>
      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            S?? varf??r ??r typer bra? Vi f??r som sagt hj??lp i compile time av
            TypeScript.
          </ListItem>
          <ListItem>
            H??r ser vi en enkel felstavning n??r vi f??rs??ker kalla p?? en
            funktion, och TypeScript ger oss till och med f??rslag p?? vilken
            funktion vi kanske vill egentligen kalla p??.
          </ListItem>
          <ListItem>
            Vi ser ocks?? att vi inte kan addera en siffra med en boolean. Eller
            ja, det ??r m??jligt att g??ra det i JavaScript, men ??r f??rmodligen
            inget vi egentligen ville g??ra.
          </ListItem>

          <ListItem>
            F??nga fel i compile time ??r absolut en av dom st??rsta positiva
            effekterna vi kan f??. Men vi f??r faktiskt en hel del andra positiva
            effekter som refactorering av kod med sj??lvf??rtroende.
          </ListItem>
          <ListItem>
            Men vad betyder refactorering av kod med sj??lvf??rtroende egentligen?
            Jo, har vi typat allt bra och ??ndrar p?? kod n??gonstans, till exempel
            ??ndrar p?? hur ett objekt ser ut, att en property inte l??ngre finns
            eller ??ndrat namn p?? en property eller liknande. N??r koden v??l
            kompilerar d?? ??r vi klara med refactorering och slipper f?? undefined
            i runtime i och med att propertyn inte l??ngre finns.
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Varf??r ??r typer bra?</Heading>

      <UnorderedList>
        <ListItem>Autocomplete</ListItem>

        <Image src={autocomplete} width={1000} />
      </UnorderedList>
      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            N??got annat som ??r mycket trevligt ??r att vi f??r bra autocomplete i
            v??r editor med hj??lp av TypeScript
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Varf??r ??r typer bra?</Heading>
      <UnorderedList>
        <ListItem>
          Tydligare kod, intentioner direkt genom att l??sa koden
        </ListItem>
        <Appear>
          <ListItem>Jump-to-definition</ListItem>
        </Appear>
        <Appear>
          <ListItem>Auto-import</ListItem>
        </Appear>
        <Appear>
          <ListItem>B??ttre utvecklarverktyg</ListItem>
        </Appear>
      </UnorderedList>
      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            Vi f??r ocks?? tydligare kod genom att skriva typer. Man kan se vissa
            intentioner direkt genom att l??sa koden.
          </ListItem>
          <ListItem>
            Jump-to-definition f??r vi ocks??, s?? vi kan snabbt och enkelt hoppa
            in i k??llkoden och exempelvis l??sa hur en funktion ser ut och
            fungerar
          </ListItem>
          <ListItem>
            Auto-import av funktioner genom en knapptrycking ??r otroligt sk??nt,
            och beh??va g??ra en manuell import ??r hyffsat segt
          </ListItem>
          <ListItem>
            I och med typer s?? blir det ocks?? mindre tveksamheter f??r verktyg.
            Vilket ger oss b??ttre utvecklarverktyg. Exempelvis eslint, codegen
            och codemods.
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>

    <Slide>
      <Heading fontSize="h3">
        Varf??r <i>inte</i> typer?
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
            Falsk s??kerhet med typer. ??ven om typer hj??lper mycket s?? kan koden
            ??nd?? ha buggar. Typer utesluter inte tester!
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
            Varf??r inte typer d??? Det ??r mer komplext med typer. Det blir ett
            extra steg som ??r jobbigt, dvs att vi ska beh??va typa allt innan vi
            kan k??ra koden
          </ListItem>
          <ListItem>
            Vi f??r ett extra byggsteg att f??rh??lla oss till. Bara det i sig ??r
            mer komplext. Ett extra byggsteg g??r det dessutom l??ngsammare, att
            beh??va typchecka koden g??r det l??ngsammare.
          </ListItem>
          <ListItem>
            Det blir mer verbose kod. Vi f??r ett extra lager ovanp?? ett enklare
            dynamiskt spr??k som JavaScript
          </ListItem>
          <ListItem>
            Det kan bli problem med otypad eller feltypade tredje-partskod
          </ListItem>
          <ListItem>
            Man kan f?? en falsk trygghet med typer. ??ven om typer hj??lper mycket
            s?? kan koden ??nd?? ha buggar, men typer utesluter inte tester!
          </ListItem>
          <ListItem>
            Det finns en risk att TypeScript hamnar efter de senaste versionerna
            av ECMAScript, och ECMAScript jobbas ju p?? hela tiden med en rad
            olika proposals
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>

    <Slide>
      <Heading fontSize="h3">
        Varf??r <i>inte</i> typer svar
      </Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            <i>Jobbigt att typa allt</i>: TypeScript inferar faktiskt typer, det
            finns ocks?? en escape hatch och det ??r att typa saker som <i>any</i>
            . Dock ej bra!
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <i>Extra byggsteg</i>: Antagligen s?? anv??nder man redan babel och
            n??gon nyare version av EcmaScript och kr??ver bak??tkompabiltet
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <i>Verbose</i>: Att typer ??r verbose ??r sv??rt att komma ifr??n
          </ListItem>
        </Appear>
      </UnorderedList>

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            Om man tycker att det ??r jobbigt att typ allt hela tiden s?? kan man
            faktiskt skippa det, TypeScript inferar faktiskt typer. Allts??,
            gissar typen med hj??lp av v??rdet. S?? har vi en konstant som assignas
            till siffran 1 s?? vet TypeScript att den variabeln ??r av typen
            number.
          </ListItem>
          <ListItem>
            TypeScript har ocks?? en escape hatch, och det ??r genom att typa
            saker som any. Detta ??r dock inte rekommenderat och vi tappar grejen
            med att anv??nda TypeScript
          </ListItem>
          <ListItem>
            Att man f??r ett extra byggsteg ??r s??llan ett problem nu f??r tiden,
            dom flesta anv??nder redan babel och n??gon nyare version av
            EcmaScript f??r att f?? tillg??ng till det senaste men beh??ver ??nd??
            bak??tkompabiltet. Nu f??r tiden ??r det enkelt att integrera
            TypeScript i sitt befintliga byggsteg
          </ListItem>
          <ListItem>
            Att typer ??r verbose ??r sv??rt att komma ifr??n, och tycker man s?? och
            att vinningen att anv??nda typer inte ??r tillr??ckligt stor s?? kanske
            inte typer ??r f??r den personen helt enkelt
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>

    <Slide>
      <Heading fontSize="h3">
        Varf??r <i>inte</i> typer svar
      </Heading>
      <UnorderedList>
          <Appear>
        <ListItem>
          <i>Problem/jobbigt med tredje-partskod</i>. I v??rsta fall kan man
          skapa egna TypeScript typer f??r koden och typa upp det s?? gott man
          kan, alternativt s?? f??r man det lika d??ligt typat som om det vore
          JavaScript
        </ListItem>
</Appear>
        <Appear>
        <ListItem>
          <i>Falsk trygghet med typer</i>. Sv??rt att komma ifr??n. Dock b??r man
          ju ??nd?? skriva tester!
        </ListItem>
</Appear>
      </UnorderedList>

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            Att det kan bli problem med tredje-partskod kan h??nda, men i v??rsta
            fall s?? kan man skapa egna TypeScript typer f??r tredje-partskoden.
            Alternativt s?? kan man f?? det lika d??ligt typat som om det vore
            JavaScript.
          </ListItem>
          <ListItem>
            Falsk trygghet ??r sv??rt att komma ifr??n, men bara f??r att man har
            typer s?? betyder inte det att man inte beh??ver n??gra tester. S?? typa
            saker och skriv tester s?? blir ni ??nnu tryggare.
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Dags f??r lite kod! ????</Heading>
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
            Okej, nu ??r det dags f??r det ni har v??ntat p??! Nu ska vi kolla p??
            lite kod!
          </ListItem>
          <ListItem>
            Den h??r koden visar ett vanligt JavaScript-objekt. Vi ser ett id,
            ett username och en email i objektet. Jag har ocks?? lagt en
            kommentar ovan h??r f??r att se vad TypeScript inferar.
          </ListItem>
          <ListItem>
            Det som TypeScript inferar ??r att id ??r av typen number, username av
            typen str??ng och likas?? email
          </ListItem>
          <ListItem>
            Nu har vi faktiskt skrivit v??r f??rsta TypeScript-kod, i och med att
            vi har fil??ndelsen .ts. Som k??nnetecknar att det ??r en
            TypeScript-fil. ??r ni vana med JavaScript s?? har vi inte skrivit
            n??gon annorlunda kod ??n JavaScript, men vi f??r redan en hel del
            f??rdelar av TypeScript, bara genom att ha en TypeScript-fil.
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
            H??r har vi d?? samma kod som innan, men vi har introducerat en egen
            typ som vi ben??mner till user.
          </ListItem>
          <ListItem>
            Den h??r user-typen inneh??ller egentligen precis samma som det som
            TypeScript inferade ??t oss.
          </ListItem>
          <ListItem>
            Vi s??tter sedan att v??r variabel ska vara va typen User med hj??lp av
            kolonet innan v??rdet assignas till variablen.
          </ListItem>
          <ListItem>
            Vi har nu v??r f??rsta egna typ deklarerad och som anv??nds
          </ListItem>
          <ListItem>
            Det fina med att s??tta v??r variabel till v??r typ s?? h??r ??r att vi
            f??r fel fr??n TypeScript om vi f??rs??ker l??gga en property i objektet
            som inte st??mmer ??verens med typen. Som vi ser h??r s?? finns ju inte
            firstName i typen och f??rs??ker vi l??gga till det i objektet s?? f??r
            vi ett fel. Detta blir en stor skillnad mot att TypeScript skulle
            infera typen ??t oss. D?? skulle den infera det som typen f??lten i
            typen User, men plus firstName satt till en str??ng. Vi skulle
            dessutom f?? fel h??r av TypeScript om vi inte skulle exempelvis haft
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
            H??r ser vi hur vi kan importera v??r nyligen skapade typ och
            ??teranv??nda den, och dessutom typa returv??rdet f??r
            getUser-funktionen till User.
          </ListItem>
          <ListItem>
            Den andra funktionen editUser tar en user som parameter
          </ListItem>
          <ListItem>
            Detta inneb??r d?? allts?? att fr??n getUser s?? f??r vi tillbaka ett
            objekt som ??verensst??mmer med typen user. Vi f??r inte fler
            properties, och inte f??rre. Detsamma g??ller f??r editUser, n??r man
            anropar den funktionen s?? m??ste man skicka med ett objekt som
            ??verensst??mmer med v??r user-typ.
          </ListItem>
          <ListItem>
            Det blir tydligt att veta vad man ska skicka in, och vad man kan
            f??rv??ntas f?? tillbaka
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
            Nu har vi sett lite TypeScript-kod, men jag t??nkte jag skulle g??
            igenom lite olika typerna som finns i TypeScripts typsystemet.
          </ListItem>
          <ListItem>Vi b??rjar med de primitiva typerna.</ListItem>
          <ListItem>
            Dom primitiva typerna ??r number, string och boolean och dom ser ut
            som s?? h??r. Dessa primitiva typer finns i JavaScript ocks??, men
            inget som man skriver ut n??r man kodar JavaScript.
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
          <ListItem>N??sta sak ??r arrayer.</ListItem>
          <ListItem>Inte olikt hur vi jobbar med arrayer i JavaScript</ListItem>
          <ListItem>
            Syntaxen f??r att s??ga att en variabel ??r av typen array ??r tv??
            klamerparenteser, som ni kan se p?? rad 1. Vi har dvs en array med
            bools h??r
          </ListItem>
          <ListItem>
            Det finns ocks?? en alternativ syntax, som vissa kan tycka ??r
            tydligare och det ??r att s??ga en Array av typen number, som ni ser
            p?? rad 6.
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
          <ListItem>I TypeScript s?? finns det n??gra specialtyper</ListItem>
          <ListItem>Dom ??r any, never, undefined, null och void</ListItem>
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


// any ??r kompatibel med alla typer
let price: number = 0.0;
income = price;
price = income;
          `}
        </GruvboxCodePane>
      </Appear>

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>Vi b??rjar med att kolla p?? any</ListItem>
          <ListItem>
            any har en speciell plats i TypeScript typsystem. Den ger oss en
            escape hatch fr??n typsystemet. Med den s?? s??ger vi till TypeScript
            att vi vet b??ttre ??n TypeScript och g??r s?? att TypeScript backar
            undan. any ??r kompatibel med alla typer i typsystemet. Det betyder
            att vad som helst kan tilldelas till en variabel av typen any
          </ListItem>
          <ListItem>
            I koden h??r ser vi variablen income som har typen any, vi kan
            assigna precis vad som helst till den. Any ??r dessutom kompatibel
            med alla typer, s?? vi uppfyller variablen price's typ number i och
            med att vi ??r any.
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Never</Heading>

      <Appear>
        <GruvboxCodePane>
          {`
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error("Something failed");
}

function infiniteLoop(): never {
  while (true) {}
}
          `}
        </GruvboxCodePane>
      </Appear>

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            never representerar typen av v??rden som aldrig h??nder.
          </ListItem>
          <ListItem>
            Till exempel ??r never returtypen f??r en funktion som alltid kastar
            ett fel, eller en funktion som ??r en o??ndlig loop som vi kan se i
            koden h??r.
          </ListItem>
          <ListItem>
            I koden h??r ser vi variablen income som har typen any, vi kan
            assigna precis vad som helst till den. Any ??r dessutom kompatibel
            med alla typer, s?? vi uppfyller variablen price's typ number i och
            med att vi ??r any.
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>

    <Slide>
      <Heading fontSize="h3">null och undefined</Heading>

      <Appear>
        <GruvboxCodePane>
          {`
const nullableVar: null = null;
const undefinedVar: undefined = undefined;
          `}
        </GruvboxCodePane>
      </Appear>

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            Null och undefined har vi ju i JavaScript, och dom finns ocks?? som
            typer i TypeScript.
          </ListItem>
          <ListItem>
            Vi typar det precis som vi anv??nder v??rderna i JavaScript. Kolon
            null och kolon undefiend.
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>

    <Slide>
      <Heading fontSize="h3">void</Heading>

      <Appear>
        <GruvboxCodePane>
          {`
function log(message): void {
  console.log(message);
}
          `}
        </GruvboxCodePane>
      </Appear>

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            void representerar returv??rdet f??r funktioner som inte returnerar
            n??got v??rde. Det ??r inferas varje g??ng en funktion inte har n??got
            returv??rde
          </ListItem>
          <ListItem>
            Funktionen console.log ??r void d?? den inte returnerar n??got, och d??
            blir v??r funktion ocks?? det.
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Generics</Heading>

      <Appear>
        <GruvboxCodePane>
          {`
function reverseStrings(items: Array<string>) {
  return items.map((_item, index) => items[items.length - 1 - index]);
}

reverseStrings(["A", "B"]);

function reverseNumbers(items: Array<number>) {
  return items.map((_item, index) => items[items.length - 1 - index]);
}

reverseNumbers([1, 2]);
          `}
        </GruvboxCodePane>
      </Appear>
      <Notes>
        <UnorderedList color="#fff">
          <ListItem>??ver till generics</ListItem>
          <ListItem>
            Vi har generics i TypeScript, likt generics som finns i andra spr??k
            som C# och Java.
          </ListItem>
          <ListItem>
            Utan generics blir det sv??rt att ha ??teranv??ndbar kod. Att skriva
            kod som det h??r exempelet ??r otroligt oh??llbart.
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Generics</Heading>

      <GruvboxCodePane>
        {`
function reverse<T>(items: Array<T>): Array<T> {
  return items.map((_item, index) => items[items.length - 1 - index]);
}

reverse<number>([1, 2, 3, 4, 5]);

reverse<string>(["A", "B", "C", "D", "E"]);
        `}
      </GruvboxCodePane>

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            Ist??llet skriver vi en generisk funktion som vi kallar f??r reverse
            och som har en typ-parameter som vi ben??mner T.
          </ListItem>
          <ListItem>
            Med denna typ-parameter kan vi f??nga upp den typ som anv??ndaren
            anger. Till exempel number eller string. Vi s??tter ocks?? att
            returtypen ??r en Array av T, dvs en array av det som anv??ndaren
            anger.
          </ListItem>
          <ListItem>
            Vi beh??ver egentligen inte annotera anropen till reverse som i
            exempelet h??r, typen inferas av TypeScript beroende p?? vad din array
            inneh??ller.
          </ListItem>
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

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            Unions ??r kort sagt ett s??tt att kombinera olika typer p??. En union
            ??r en typ som bildas av tv?? eller flera andra typer och
            representerar v??rden som kan vara vilken som helst av dessa typer.
          </ListItem>
          <ListItem>
            Man kan t??nka att det ??r en eller-sats. Dvs att det ??r antingen det,
            eller det andra.
          </ListItem>
          <ListItem>
            Kollar vi p?? funktionen getUsername h??r s?? accepterar den funktionen
            antingen en user av typen User eller en user av typen GuestUser.
            B??da av dom typerna inneh??ller en username property och vi kan p?? s??
            vis alltid plocka ut username fr??n v??r user-parameter.
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Unions</Heading>

      <GruvboxCodePane>
        {`
const welcomePeople = (people: Array<string> | string) => {
  if (Array.isArray(people)) {
    // Here: 'people' is 'Array<string>
    console.log("Hello, " + people.join(" and "));
  } else {
    // Here: 'people' is 'string'
    console.log("Welcome lone traveler " + people);
  }
}
        `}
      </GruvboxCodePane>

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            En sak man kanske vill g??ra ??r att ta emot en array av n??gonting,
            eller bara ett v??rde. Vi kan d?? s??ga en Array av str??ngar eller en
            str??ng.
          </ListItem>
          <ListItem>
            Sen f??r vi guarda med hj??lp av if-satser f??r att agera olika
            beroende p?? vad v??rdet ??r f??r n??got. Men s?? fort vi har guardat och
            sagt att people ??r faktiskt en array, jo d?? fattar TypeScript att
            people kan bara vara en array och inget annat. Och vi kan d?? jobba
            med v??rdet med hj??lp av olika funktioner som finns p?? arrayer.
          </ListItem>
          <ListItem>
            Detsamma g??ller f??r else-blocket. D??r i vet TypeScript att people nu
            ??r en str??ng och vi kan jobba med v??rdet och applicera olika
            str??ng-funktioner p?? det. B??da av dom typerna inneh??ller en username
            property.
          </ListItem>
        </UnorderedList>
      </Notes>
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

type UserResponse = User & ErrorHandling;

const handleUserResponse = (userResponse: UserResponse): User | null => {
  if (userResponse.error) {
    // Report error to log service
    return null;
  }

  return userResponse;
};
        `}
      </GruvboxCodePane>

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            Intersections ??r p?? liknande tema som unions, men de anv??nds mycket
            olika. Intersections kombinerar flera typer till en. P?? s?? s??tt kan
            du l??gga ihop befintliga typer f??r att skapa en ny typ som
            inneh??ller exempelvis alla properties som tv?? eller flera typer har.
          </ListItem>
          <ListItem>
            Med unions s?? kunde man ju t??nka att det var en eller-sats. Med
            intersections s?? kan man t??nka att det ??r en och-sats. Dvs, denna
            typen och den andra typen.
          </ListItem>
          <ListItem>
            Vi har h??r tv?? typer, user-typen som vi har definerat sedan innan
            som importeras h??r p?? rad 1, och en ny typ som vi kallar f??r
            ErrorHandling p?? rad 3. V??r intersection typ ser vi p?? rad 8, som vi
            ben??mnt till UserResponse. Den h??r typen ??r allts?? av typen User och
            typen ErrorHandling.
          </ListItem>
          <ListItem>
            Koden f??rs??ker visa ett vanligt exempel, vi n??gon funktion som
            h??mtat data fr??n exempelvis ett API och s?? ska vi hantera responset.
            M??let ??r ju att returnera ett objekt av typen user.
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Tuples</Heading>

      <GruvboxCodePane>
        {`
import type { User } from "./user";

const getBalanceWithUsername = (user: User): [string, number] => {
  const accountBalance: number = getAccountBalance(user);

  return [user.username, accountBalance];
};

const [username, accountBalance] = getBalanceWithUsername({
  id: 1,
  username: "johndoe",
  email: "johndoe@doe.doe",
});
        `}
      </GruvboxCodePane>

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            Tupels kan man s??ga ??r en special-typ av Array-typen. Sj??lva
            datastrukturen tupel som exempelvis finns, och ??r mycket popul??r i
            spr??ket Python finns inte i JavaScript, men vi kan typa saker som om
            det vore en tupel.
          </ListItem>
          <ListItem>
            S??, en tupel ??r en array-typ som vet exakt hur m??nga element den
            inneh??ller och exakt vilka typer den inneh??ller p?? specifika
            positioner.
          </ListItem>
          <ListItem>
            Kollar vi p?? det h??r exempelet s?? ser vi att funktionen
            getIdWithName returnerar en tuple. En array som inneh??ller tv??
            element, det f??rsta av typen string, och det andra av typen number.
          </ListItem>
          <ListItem>
            Vi kan som vi ser p?? rad 9 plocka ut username ur f??rsta position ur
            tupeln, och accountBalance ur den andra. Vi f??r r??tt typer h??r.
            username ??r av typen string, och accountBalance ??r av typen number
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Tuples</Heading>

      <Appear>
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
      </Appear>

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            Eftersom det f??rra exempelet kanske var en aning trivialt s?? har jag
            valt att visa ett till exempel p?? tuples som ni kanske k??nner igen
          </ListItem>
          <ListItem>I allafall om ni har kodat React.</ListItem>
          <ListItem>
            Det som returneras fr??n Reacts funktion useState ??r just en tupel.
            Jag har lagt till typerna h??r f??r att g??ra det tydligt vad man f??r
            tillbaka fr??n useState.
          </ListItem>
          <ListItem>
            Vi f??r i alla fall tillbaka en tupel, d??r f??rsta positions v??rde ??r
            av typen number och det andra v??rdet ??r av typen Dispatch, som tar
            en generisk typ-parameter som vi s??tter till SetStateAction som
            ocks?? tar en generisk typ-parameter som vi s??tter till number. Vi
            beh??ver inte g?? in djupare p?? hur dom typerna defineras, men
            f??renklat kan vi s??ga att det ??r en funktion som tar ett v??rde av en
            siffra.
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Enums</Heading>

      <Appear>
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
      </Appear>

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            ??ver till enums. Enums ??r inget som finns i JavaScript och ??r en av
            f?? funktioner som ??r ett extra-till??gg i TypeScript som inte handlar
            om typer.
          </ListItem>
          <ListItem>
            Kommer man fr??n andra spr??k till JavaScript, s?? brukar det vara
            n??got man saknar
          </ListItem>
          <ListItem>
            Enums kan anv??ndas f??r att gruppera ihop en samling av relaterade
            v??rden. Enums l??ter oss definera en samling av namngivna konstanter.
          </ListItem>
        </UnorderedList>
      </Notes>
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
          <ListItem>Enums kan ocks?? inneh??lla str??ngar</ListItem>
          <ListItem>
            Det ??r m??jligt att mixa str??ng-enums med siffer-enums. Det ??r dock
            inte rekommenderat att anv??ndas s??
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
      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            Array och objekt kan muteras och skrivas ??ver hur som helst by
            default
          </ListItem>
        </UnorderedList>
      </Notes>
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

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            Men typar vi n??got som readonly s?? f??rsvinner till och med f??rslagen
            med push och andra muterande funktioner. Vi kan inte pusha till
            arrayen, och inte heller skriva ??ver v??rden direkt.
          </ListItem>
        </UnorderedList>
      </Notes>
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

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            Detsamma g??ller f??r v??r nydefinerade typ ReadonlyPoint. Vi s??ger att
            v??ra properties ska vara readonly av typen number.
          </ListItem>
          <ListItem>
            Vi f??r d?? liknande fel som p?? array och vi kan med andra ord inte
            skriva ??ver readonly properties hur vi vill
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="h3">
        F?? in TypeScript i redan befintlig kodbas?
      </Heading>

      <UnorderedList>
        <ListItem>
          <CodeSpan color="primary">
            yarn add -D typescript @babel/preset-typescript
          </CodeSpan>
        </ListItem>
        <ListItem>L??gg till "@babel/preset-typescript" i er .babelrc</ListItem>
        <ListItem>
          tsc --init f??r att f?? en tsconfig.json med default-v??rden
        </ListItem>
        <ListItem>S??tt allowJs till true i tsconfig.json</ListItem>
        <ListItem>
          Bygg nya funktioner i TypeScript och importera gammal JavaScript-kod
          ????
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Myter om TypeScript</Heading>

      <UnorderedList>
        <ListItem>Det ??r inte JavaScript</ListItem>
        <ListItem>
          TypeScript ??r ??verfl??digt, r??cker att anv??nda doc comments. E.g.
          @param, @return
        </ListItem>
        <ListItem>
          Man kan typa allt som <i>any</i> s?? det ??r inte ??r types??kert
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Det ??r inte JavaScript</Heading>
      <UnorderedList>
        <ListItem>
          TypeScript f??ljer noga ECMAScript. Implementerar stage 3 proposals
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

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>H??r har vi lite kod skriven i TypeScript</ListItem>
          <ListItem>
            och h??r ser vi den transpilerade JavaScript-koden. Ser ganska s?? lik
            ut, eller vad tycker ni?
          </ListItem>
        </UnorderedList>
      </Notes>
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

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            Men enums finns ju inte i JavaScript? Och jag har ju dessutom st??tt
            och sagt att enums ??r ett av f?? till??gg ut??ver typer som TypeScript
            har gentemot JavaScript.
          </ListItem>
          <ListItem>
            Och ja, det st??mmer bra. Enums finns inte i JavaScript. H??r till
            v??nster ser vi lite enums i TypeScript.
          </ListItem>
          <ListItem>
            Och till h??ger har vi den outputen. Dvs JavaScript-koden. Nu var ju
            TypeScript-koden och JavaScript-koden inte l??ngre s?? lika varandra.
            Och nej, det st??mmer. Men det ??r ju f??r att enums inte finns som
            koncept i JavaScript.
          </ListItem>
          <ListItem>
            Och tycker man att detta ??r ett problem, och att man f??r f??r mycket
            kod outputtad.
          </ListItem>
        </UnorderedList>
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="h3">const enums till r??ddningen</Heading>
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

        <Notes>
          <UnorderedList color="#fff">
            <ListItem>const enums till r??ddningen!</ListItem>
            <ListItem>
              TypeScript-koden till v??nster blir JavaScript-koden till h??ger.
              Allt som hade med enums att g??ra har f??rsvunnit och ersatts direkt
              inline i koden ist??llet.
            </ListItem>
            <ListItem>
              Det man missar med att anv??nda const enums ??r att faktiskt kunna
              jobba med enumen som ett v??rde. N??r vi k??r icke const enums s?? kan
              vi faktiskt anv??nda oss av Object.values, Object.entries etc i och
              med att enums blir ett objekt n??r det blir JavaScript. Det
              f??rsvinner dessv??rre n??r vi anv??nder oss av const enums. Men som
              mycket annat, s?? f??r man v??ga f??r och nackdelar mot varandra.
            </ListItem>
          </UnorderedList>
        </Notes>
      </FlexBox>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Doc comments</Heading>

      <UnorderedList>
        <ListItem>
          Absolut bra, men det ??r s??llan dokumentation h??nger med implementation
        </ListItem>
        <ListItem>
          Vi kan anv??nda b??de och med TypeScript. Doc comments funkar
          fortfarande, en aning ??verfl??digt dock. Men @examples och beskrivning
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
// tsconfig.json
{
  "compilerOptions": {
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
//.eslintrc.js
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

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            Ja, man kan typa allt som any, men vi kan faktiskt enforca regler
            som g??r att det inte g??r, vilket kan vara en rekommendation att ta
            med sig till sitt team.
          </ListItem>
          <ListItem>
            Det f??rsta ??r att s??tta noImplicitAny till true i sin tsconfig.json
          </ListItem>
          <ListItem>
            Och det andra ??r att l??gga till en typescript-eslint regel som heter
            no-explicit-any till error
          </ListItem>
        </UnorderedList>
      </Notes>
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

      <Notes>
        <UnorderedList color="#fff">
          <ListItem>
            Med dessa regler och kod som i det h??r exempelet s?? f??r vi errors.
          </ListItem>
          <ListItem>P?? rad 1 av v??r tsconfig</ListItem>
          <ListItem>Och p?? rad 3 av v??r eslint regel</ListItem>
        </UnorderedList>
      </Notes>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Alternativ till TypeScript</Heading>
      <UnorderedList>
        <ListItem>
          Flow.js - Facebooks statiska type-checker. I princip utd??tt.
        </ListItem>
        <ListItem>
          Elm - Ett strikt funktionellt spr??k som kompilerar till JavaScript
        </ListItem>
        <ListItem>
          PureScript - Ocks?? starkt typat funktionellt spr??k som kompilerar till
          JavaScript
        </ListItem>
        <ListItem>
          ReasonML - Starkt typat spr??k kompilerar till JavaScript och OCaml.
          Kan nyttja b??de OCaml-paket och JavaScript-paket
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Bra l??nkar</Heading>
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
          Tack f??r mig
        </Heading>
        <Heading margin="0px" fontSize="h1">
          Fr??gor?
        </Heading>
      </FlexBox>
    </Slide>
  </Deck>
);

const root = createRoot(document.getElementById("root")!);
root.render(<Presentation />);
