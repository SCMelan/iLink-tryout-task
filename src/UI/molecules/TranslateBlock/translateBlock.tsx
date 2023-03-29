import { SetStateAction, useEffect, useState } from "react";

import FlipMove from "react-flip-move";

import { BlockElement, Button, Paragraph } from "../../atoms";

import { StyledTextBlock, StyledWordElement } from "./style";

interface IWord {
  id: string;
  value: string;
}

export const TranslateBlock: React.FC = () => {
  //Массив фраз, в котором содержится фраза на обоих языках
  const question = [
    {
      id: 0,
      eng: "There are spots even on the sun",
      rus: "И на солнце есть пятна",
    },
    {
      id: 1,
      eng: "are There sun spots on add the even",
      rus: "И на солнце есть пятна",
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(question[0].eng);
  const [isChanged, setIsChanged] = useState(1);
  const [answer, setAnswer] = useState<IWord[]>([]);
  const [isMistake, setIsMistake] = useState<boolean | null>(null);
  const [textButton, setTextButton] = useState<string>("Проверить");
  const [wordsForSolution, setWordsForSolution] = useState<IWord[]>([]);
  const [currentItem, setCurrentItem] = useState<IWord>({
    id: "-1",
    value: "",
  });
  const [hoveredWord, setHoveredWord] = useState<IWord>({
    id: "-1",
    value: "",
  });

  const [styleTry, setStyleTry] = useState<boolean>(false);

  const dragOverOnHandler = (e: React.DragEvent<Element>, item: IWord) => {
    e.preventDefault();
    e.stopPropagation();
    setHoveredWord(item);
    if (hoveredWord.id == item?.id) {
      setStyleTry(true);
    }
  };

  //Функия, которая фиксирует передвижение объекта по области
  const dragOverHandler = (e: React.DragEvent<Element>) => {
    e.preventDefault();
    e.stopPropagation();
    setStyleTry(true);
  };

  const onDragLeave = (e: React.DragEvent<Element>) => {
    setStyleTry(false);
    setHoveredWord({ id: "-1", value: "" });
  };

  const onDragEnd = (e: React.DragEvent<Element>) => {
    setStyleTry(false);
  };

  //Функия, которая фиксирует начало движения
  const dragOnSolutionStartHandler = (
    e: React.DragEvent<Element>,
    item: SetStateAction<IWord>
  ) => {
    setCurrentItem(item);
  };

  //Функия, которая фиксирует начало движения из массива Доска
  const draOnAnswerStartHandler = (
    e: React.DragEvent<Element>,
    item: SetStateAction<IWord>
  ) => {
    setCurrentItem(item);
  };

  //Функия, которая переносит объект из массива Испоьзойте слова в Доска для  ответов при отпускании объекта в область ответа

  const dropOnAnswerHandler = (e: React.DragEvent<Element>) => {
    e.preventDefault();
    if (answer.includes(currentItem)) {
      const wordIndex = answer.indexOf(currentItem);
      answer.splice(wordIndex, 1);
    }
    if (hoveredWord?.value) {
      const wordIndex = answer.indexOf(hoveredWord);
      setAnswer((oldAnswer) => [
        ...oldAnswer.slice(0, wordIndex + 1),
        currentItem,
        ...oldAnswer.slice(wordIndex + 1, oldAnswer.length),
      ]);
      setWordsForSolution((oldWords) => [
        ...oldWords.filter((word) => word.id !== currentItem.id),
      ]);
      setHoveredWord({ id: "-1", value: "" });
      return;
    }
    setAnswer((oldAnswer) => [...oldAnswer, currentItem]);
    setWordsForSolution((oldWords) => [
      ...oldWords.filter((word) => word.id !== currentItem.id),
    ]);
    setHoveredWord({ id: "-1", value: "" });
    return;
  };

  //Функия, которая переносит объект из массива Доска для  ответов  в Испоьзойте слова при отпускании объекта в область ответа
  const dropOnSolutionHandler = (e: React.DragEvent<Element>) => {
    e.preventDefault();
    e.stopPropagation();
    setStyleTry(false);
    if (wordsForSolution.includes(currentItem)) return; //Не позволяет дублировать элементы в массиве
    const wordIndex = wordsForSolution.indexOf(hoveredWord); //Слово над которым вставляется CurrentItem
    const checkNewSolution = () => {
      if (hoveredWord?.value) {
        return [
          ...wordsForSolution.slice(0, wordIndex),
          currentItem,
          ...wordsForSolution.slice(wordIndex, wordsForSolution.length),
        ];
      } else {
        return [...wordsForSolution, currentItem];
      }
    };
    const newSolution = checkNewSolution();
    setWordsForSolution(newSolution);
    setAnswer((oldAnswer) => [
      ...oldAnswer.filter((word) => word.id !== currentItem.id),
    ]);
    setTimeout(() => {
      setWordsForSolution(
        newSolution.sort((a, b) => a.value.localeCompare(b.value))
      );
      setIsChanged((prev) => prev + 1);
    }, 500);
    return;
  };

  const buttonCheckHandler = () => {
    if (
      answer
        .map((value) => value.value)
        .join(" ")
        .toLowerCase() === currentQuestion.toLowerCase()
    ) {
      setIsMistake(false);
      setTextButton("Всё верно");
      setTimeout(() => {
        setTextButton("Проверить");
      }, 2100);
      const textToSpeech = new SpeechSynthesisUtterance(currentQuestion);
      window.speechSynthesis.speak(textToSpeech);
    } else {
      setIsMistake(true);
      setTextButton("Ошибка");
      setTimeout(() => {
        setTextButton("Проверить");
      }, 2100);
    }
    setTimeout(() => {
      if (!isMistake) {
        setTimeout(() => {
          setIsMistake(null);
        }, 2000);
      } else {
        setTimeout(() => {
          setIsMistake(null);
        }, 2000);
      }
    }, 100);
    console.log(answer);
  };

  //Константа  для проверки вместо тернарного оператора
  const isButtonDisabled = answer.length === 0;

  useEffect(() => {
    setWordsForSolution(
      question[1].eng
        .split(" ")
        .map((word, index) => ({
          value: word,
          id: `${word} + ${index}`,
        }))
        .sort((a, b) => a.value.localeCompare(b.value))
    );
  }, []);
  const checkIsChosen = (item: IWord) => {
    return item === hoveredWord;
  };

  return (
    <StyledTextBlock>
      <BlockElement>
        <BlockElement
          type="box"
          onDrop={(e) => dropOnAnswerHandler(e)}
          onDragOver={(e) => dragOverHandler(e)}
          onDragEnd={(e) => onDragEnd(e)}
          onDragLeave={(e) => onDragLeave(e)}
        >
          <Paragraph size="P_28" text={"Доска для ответа"} />
          <BlockElement type="DF">
            {answer.map((word) => {
              return (
                <BlockElement
                  isChosenWord={checkIsChosen(word)}
                  onDragEnd={(e) => onDragEnd(e)}
                  onDragLeave={(e) => onDragLeave(e)}
                  type="word_box"
                  key={word.id}
                  canDrag={true}
                  onDragOver={(e) => dragOverOnHandler(e, word)}
                  onDragStart={(e) => {
                    draOnAnswerStartHandler(e, word);
                  }}
                >
                  <Paragraph size="P_18" text={word.value}></Paragraph>
                </BlockElement>
              );
            })}
          </BlockElement>
        </BlockElement>
        <BlockElement
          type="box"
          onDrop={(e) => dropOnSolutionHandler(e)}
          onDragOver={(e) => dragOverHandler(e)}
          onDragEnd={(e) => onDragEnd(e)}
          onDragLeave={(e) => onDragLeave(e)}
        >
          <Paragraph size="P_28" text={"Используйте эти слова"} />
          <BlockElement type="DF">
            <FlipMove style={{ display: "flex", flexWrap: "wrap" }}>
              {wordsForSolution.map((item) => {
                return (
                  <StyledWordElement
                    key={item.id + "answer"}
                    draggable={true}
                    onDragStart={(e) => {
                      dragOnSolutionStartHandler(e, item);
                    }}
                    onDragOver={(e) => dragOverOnHandler(e, item)}
                  >
                    {item.value}
                  </StyledWordElement>
                );
              })}
            </FlipMove>
          </BlockElement>
        </BlockElement>
      </BlockElement>
      <Button
        text={textButton}
        buttonCheckHandler={() => {
          buttonCheckHandler();
        }}
        disabled={isButtonDisabled}
        isDis={isButtonDisabled}
        mistake={isMistake}
      />
    </StyledTextBlock>
  );
};
