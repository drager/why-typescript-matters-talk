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
          <ListItem>
            Ett starkt typat språk innebär strikta typ-regler i compile time. Vi
            kan inte få koden att kompilera fören vi upprätthåller korrekta
            typer. Med det kan vi hitta fel direkt i vår editor, innan koden
            körs. Till skillnad mot löst typade språk som exempelvis JavaScript
            där vi märker felen i runtime, när dom faktiskt händer.
          </ListItem>
          <ListItem>
            Vi har en hel del olika typer i TypeScript, några av dom är string,
            number, boolean och Array. Vi kommer kika närmare senare hur man
            använder dom och dessutom visa lite fler.
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
            Vi ser också att vi inte kan addera en siffra med en boolean.
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
            i runtime i och med att property in längre finns.
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
        I och med typer så blir det mindre tveksamheter för verktyg. Exempelvis
        eslint, codegen och codemods.
      </Notes>
    </Slide>

    <Slide>
      <Heading fontSize="h3">
        Varför <i>inte</i> typer
      </Heading>
      <UnorderedList>
        <ListItem>
          TypeScript inferar faktiskt typer. Finns en escape hatch och det är
          att typa saker som <i>any</i>. Dock ej bra!
        </ListItem>
        <ListItem>
          Antagligen så använder man redan babel och någon nyare version av
          EcmaScript och kräver bakåtkompabiltet
        </ListItem>
        <ListItem>Att typer är verbose är svårt att komma ifrån</ListItem>
      </UnorderedList>
      <Notes>
        I och med typer så blir det mindre tveksamheter för verktyg. Exempelvis
        eslint, codegen och codemods.
      </Notes>
    </Slide>

    <Slide>
      <Heading fontSize="h3">
        Varför <i>inte</i> typer
      </Heading>
      <UnorderedList>
        <ListItem>
          Problem med tredje-partskod. I värsta fall kan man skapa egna
          TypeScript typer av paketet och typa upp det så gott man kan,
          alternativt få det lika dåligt typat som om det vore JavaScript
        </ListItem>
        <ListItem>
          Falsk säkerhet med typer. Också svårt att komma ifrån.
        </ListItem>
      </UnorderedList>
      <Notes>
        I och med typer så blir det mindre tveksamheter för verktyg. Exempelvis
        eslint, codegen och codemods.
      </Notes>
    </Slide>
    <Slide>
      <Heading fontSize="h3">Dags för lite kod! 🎉</Heading>
      <Appear>
        <GruvboxCodePane>
          {`
// TypeScript infer it as: {id: number, username: string, email: string}
const user = { id: 1, username: "jesper", email: "jesper@beanloop.se" }; 
        `}
        </GruvboxCodePane>
      </Appear>
    </Slide>

    <Slide>
      <GruvboxCodePane>
        {`
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
    </Slide>

    <Slide>
      <GruvboxCodePane>
        {`
import type { User } from "./user";

const getUser: User | null = () => // ...

const editUser = (user: User) => // ...
        `}
      </GruvboxCodePane>
    </Slide>

    <Slide>
      <Heading fontSize="h3">Generics</Heading>

      <GruvboxCodePane>
        {`
function reverse<T>(items: Array<T>) {
  return items.map((_item, index) => items[items.length - 1 - index]);
}

reverse([1, 2, 3, 4, 5]);

reverse(["A", "B", "C", "D", "E"]);
        `}
      </GruvboxCodePane>
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
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="h1">
          Tack för mig
        </Heading>
        <Heading margin="0px" fontSize="h1">
          Frågor?
        </Heading>
      </FlexBox>
    </Slide>
    {/*<Slide>*/}
    {/*<Heading fontSize="h3">Tips och tricks</Heading>*/}
    {/*<GruvboxCodePane>*/}
    {/*{`*/}
    {/*enum Direction {*/}
    {/*Up = "Upp",*/}
    {/*Down = "Ner",*/}
    {/*Left = "Vänster",*/}
    {/*Right = "Höger",*/}
    {/*}*/}

    {/*Object.values(Direction); // [ 'Upp', 'Ner', 'Vänster', 'Höger' ]*/}

    {/*`}*/}
    {/*</GruvboxCodePane>*/}
    {/*<Notes>*/}
    {/*<UnorderedList color="#fff">*/}
    {/*<ListItem>*/}
    {/*Dock inte möjligt att göra med const enums då dom försvinner efter*/}
    {/*koden blivit JavaScript-kod.*/}
    {/*</ListItem>*/}
    {/*</UnorderedList>*/}
    {/*</Notes>*/}
    {/*</Slide>*/}
  </Deck>
);

const root = createRoot(document.getElementById("root")!);
root.render(<Presentation />);
