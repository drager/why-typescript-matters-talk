import {
  FlexBox,
  Heading,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  FullScreen,
  AnimatedProgress,
  Appear,
  Slide,
  Deck,
  Link,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
  Notes,
  SlideLayout,
} from "spectacle";
import { createRoot } from "react-dom/client";

import autocomplete from "./autocomplete.png";
console.log("autocomplete", autocomplete);

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Ubuntu", Helvetica, Arial, sans-serif',
    text: '"Ubuntu", Helvetica, Arial, sans-serif',
  },
  colors: {
    tertiary: "#5d2a42",
    primary: "#93b5c6",
    secondary: "#93b5c6",
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
      <FullScreen />
    </Box>
    <Box padding="1em">
      <AnimatedProgress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const SlideFragments = () => (
  <>
    <Slide>
      <Text>This is a slide fragment.</Text>
    </Slide>
    <Slide>
      <Text>This is also a slide fragment.</Text>
      <Appear>
        <Text>This item shows up!</Text>
      </Appear>
      <Appear>
        <Text>This item also shows up!</Text>
      </Appear>
    </Slide>
  </>
);

const Presentation = () => (
  <Deck theme={theme} template={template} loop>
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
        <ListItem>TypeScript är JavaScript fast med syntax för typer</ListItem>
        <ListItem>Starkt typat språk som transpilerar till JavaScript</ListItem>
        <ListItem>Utvecklat av Microsoft</ListItem>
        <ListItem>
          Open source, finns på Github:{" "}
          <Link href="https://github.com/Microsoft/TypeScript">
            https://github.com/Microsoft/TypeScript
          </Link>{" "}
          (över 80k stars)
        </ListItem>
        <ListItem>Funnits sedan 2012</ListItem>
      </UnorderedList>
      <Notes>
        Typescript är JavaScript fast med syntax för typer plus enums och annat
        skoj. JavaScript i sig har ju en del primitiva typer, men inget som man
        deklarerar när man använder språket. Det inferas av JavaScript runtimen,
        vilket kan vara browsern, node.js eller någon annan runtime. Typescript
        däremot är ett starkt typat språk som transpilerar till JavaScript.
        Kommer berätta mer gällande en del typer som TypeScript har i senare
        slides.
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
      </UnorderedList>
      <Appear>
        <CodePane language="jsx">{`
            function compat(arr) {
              if (orr.length > 10)
                return arr.trim(0, 10)
              return arr
            }
        `}</CodePane>
      </Appear>

      <Notes>
        Ett starkt typat språk innebär strikta typ-regler i compile time. Vi kan
        inte få koden att kompilera fören vi upprätthåller korrekta typer. Med
        det kan vi hitta fel direkt i vår editor, innan koden körs. Till
        skillnad mot löst typade språk som exempelvis JavaScript. Den här koden
        ger inga fel i JavaScript-filer, och den kraschar i runtime. I
        Typescript däremot så får vi fel direkt i editorn. Att rad 2 innehåller
        en variabel som undefined, och att trim-funktionen inte finns på en
        array.
      </Notes>
    </Slide>
    <Slide>
      <CodePane language="tsx">{`
        function compat(arr: Array<string>) {
          if (arr.length > 10)
            return arr.slice(0, 10)
          return arr
        }
        `}</CodePane>
      <Appear>
        <Text>En rad olika typer finns i TypeScript. Exempelvis:</Text>
        <UnorderedList>
          <ListItem>string</ListItem>
          <ListItem>number</ListItem>
          <ListItem>boolean</ListItem>
          <ListItem>Array</ListItem>
          <ListItem>Object</ListItem>
        </UnorderedList>
      </Appear>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Varför är typer bra?</Heading>

      <UnorderedList>
        <Appear>
          <ListItem>Autocomplete</ListItem>

          <Image src={autocomplete} width={700} />
        </Appear>
        <Appear>
          <ListItem>
            Tydligare kod, intentioner direkt genom att läsa koden
          </ListItem>
        </Appear>
      </UnorderedList>
      <Notes>
        Men varför är typer bra? Förutom att fånga fel i compile time så får vi
        också en rad olika positiva effekter: - Autocomplete i vår editor
      </Notes>
    </Slide>
    <Slide>
      <UnorderedList>
        <ListItem>Bättre utvecklarverktyg</ListItem>
      </UnorderedList>
      <Notes>
        I och med typer så blir det mindre tveksamheter för verktyg. Exempelvis
        eslint, codegen och codemods.
      </Notes>
    </Slide>

    <Slide>
      <Heading fontSize="h3">
        Varför <i>inte</i> typer?
      </Heading>
      <UnorderedList>
        <ListItem>Mer komplext, jobbigt att typa allt</ListItem>
        <ListItem>Extra byggsteg</ListItem>
        <ListItem>Verbose</ListItem>
        <ListItem>Problem/jobbigt med tredje-partskod</ListItem>
        <ListItem>
          Falsk säkerhet med typer. Även om typer hjälper mycket så kan koden
          ändå ha buggar. Typer utesluter inte tester!
        </ListItem>
      </UnorderedList>
      <Notes>
        I och med typer så blir det mindre tveksamheter för verktyg. Exempelvis
        eslint, codegen och codemods.
      </Notes>
    </Slide>

    <Slide>
      <Heading fontSize="h3">
        Varför <i>inte</i> typer?
      </Heading>
      <UnorderedList>
        <ListItem>
          Vi kan typa saker som <i>any</i>
        </ListItem>
        <ListItem>
          Antagligen så använder man redan babel och någon nyare version av
          EcmaScript och kräver bakåtkompabiltet
        </ListItem>
        <ListItem>Att typer är verbose är svårt att komma ifrån</ListItem>
        <ListItem>
          Problemet med tredje-partskod. I värsta fall kan man skapa en egen
          modul av paketet och få det lika dåligt typat som om det vore
          JavaScript
        </ListItem>
        <ListItem>
          Falsk säkerhet med typer. Också svårt att komma ifrån
        </ListItem>
      </UnorderedList>
      <Notes>
        I och med typer så blir det mindre tveksamheter för verktyg. Exempelvis
        eslint, codegen och codemods.
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="h3">
        Få in TypeScript i redan befintlig kodbas?
      </Heading>

      <UnorderedList>
        <ListItem>
          <CodeSpan color='primary'>yarn install typescript</CodeSpan>
        </ListItem>
        <ListItem>Lägg till "@babel/preset-typescript" i er .babelrc</ListItem>
      </UnorderedList>
    </Slide>
  </Deck>
);

const root = createRoot(document.getElementById("root")!);
root.render(<Presentation />);
