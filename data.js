const endChapterFactory_1 = (index) => {
  const CHAPTER_15 = {
    messages: [
    {
      type: "received",
      text: "Ладно, уже так поздно. Спать пора! Я пойду, и ты долго не сиди",
      delay: 1000
    },
    {
      type: "sent",
      text: "Дааа, ты права. Пойду тогда тоже понемногу",
      delay: 2500
    }],
    choices: [
    {
      text: "Сладких снов!",
      result: [
      {
        type: "received",
        text: "Спасибо! Увидимся завтра в университете 💫",
        delay: 1000
      }, ],
      nextChapter: "end_" + index
    },
    {
      text: "Но даже как-то жалко прощаться на сегодня...",
      result: [
      {
        type: "received",
        text: "Мне, если честно, тоже... Но нам обоим нужно выспаться 🌙",
        delay: 1000
      },
      {
        type: "sent",
        text: "Ну, тогда сладких снов тебе, и доброй ночи! ❤️",
        delay: 1000
      }, ],
      nextChapter: "end_" + index
    }],
  };

  const CHAPTER_END = {
      messages: [
      {
        type: "received",
        text: "Сладких снов и спокойной ночи! ❤️",
        delay: 1000
      },
    ],
    choices: [],
    isLastChapter: true,
  };

  return {
    ['chapter15_' + index]: CHAPTER_15,
    ['end_' + index]: CHAPTER_END,
  }
};
const GameData = {
	...endChapterFactory_1('date_cancel'),
	...endChapterFactory_1('date'),
	...endChapterFactory_1('lesson_library_successful'),
	...endChapterFactory_1('lesson_library'),
	...endChapterFactory_1('lessons_successful'),
	...endChapterFactory_1('lessons'),
	...endChapterFactory_1('male_photo'),
	...endChapterFactory_1('pair_photo'),
	...endChapterFactory_1('photo_postfactum'),
	...endChapterFactory_1('solo_photo'),

  ru:
  {
    start:
    {
      messages: [],
      choices: [
        {
          text: '"У меня новые сообщения... надо посмотреть"',
          printable: false,
          result: [],
          nextChapter: "chapter1",
        }]
    },
    chapter1:
    {
      messages: [
        {
          type: "received",
          text: "Привет, сладкий! 💋 Посмотри мой новый пост в PureGram!",
          delay: 1000
        },
        {
          type: "sent",
          text: "Привет! Уже бегу смотреть...",
          delay: 2500
        },
        {
          type: "received",
          text: "Ну как? Особенно понравилось декольте? 😇",
          delay: 4000
        },
        {
          type: "received",
          text: "Честно-честно, хочу твоё мнение! 💄",
          delay: 5500
        },],
      choices: [
        {
          text: "Ого, а не слишком глубокое декольте?",
          result: [
            {
              type: "received",
              text: "Да ладно тебе! Пусть все завидуют моему стилю 💅",
              delay: 1000
            },
            {
              type: "received",
              text: "Кстати, насчёт фотографа... Мне надо будет потом с тобой посоветоваться 😏",
              delay: 2500
            }],
          nextChapter: "chapter2"
        },
        {
          text: "Выглядишь прекрасно!",
          result: [
            {
              type: "received",
              text: "Ага, особенно декольте удалось 💋",
              delay: 1000
            },
            {
              type: "received",
              text: "Кажется, фотограф бесстыдно засматривался туда... Но об этом позже 😈",
              delay: 2500
            }],
          nextChapter: "chapter2"
        }],
    },

    chapter2:
    {
      messages: [
        {
          type: "received",
          text: "Слушай, а ты не поверишь, что было на фотосессии! 📸",
          delay: 1000
        },
        {
          type: "sent",
          text: "Что там случилось?",
          delay: 2500
        },
        {
          type: "received",
          text: "Этот фотограф... Он постоянно просил меня «чуть развернуться», «показать профиль»...",
          delay: 4000
        },
        {
          type: "received",
          text: "А потом предложил сделать несколько кадров в более... «свободной» позе 🙄",
          delay: 5500
        },],
      choices: [
        {
          text: "Что значит «свободной»? Он что, приставал к тебе?",
          result: [
            {
              type: "received",
              text: "Ну, не то чтобы приставал... Но глазами раздевал точно! 👀",
              delay: 1000
            },
            {
              type: "received",
              text: "Особенно когда я в коротком платье была. Всё на ноги пялился...",
              delay: 2500
            }],
          nextChapter: "chapter3_jealous"
        },
        {
          text: "Звучит как обычная работа фотографа. Он профессионал?",
          result: [
            {
              type: "received",
              text: "Да, вроде профи. Но знаешь, иногда мне кажется, что он слишком... увлекается процессом 📷",
              delay: 1000
            },
            {
              type: "received",
              text: "Хотя фотки получились классные! Завтра покажу тебе остальные 😊",
              delay: 2500
            }],
          nextChapter: "chapter3_neutral"
        }],
    },

    chapter3_jealous:
    {
      messages: [
        {
          type: "sent",
          text: "Мне это не нравится. Может, стоит сменить фотографа?",
          delay: 1000
        },
        {
          type: "received",
          text: "Ой, да ладно тебе! Он просто делает свою работу... по-своему 💁‍♀️",
          delay: 2500
        },
        {
          type: "received",
          text: "К тому же, он предложил сделать мне скидку на следующую фотосессию...",
          delay: 4000
        },
        {
          type: "received",
          text: "...если я приду в той же мини-юбке 🙈",
          delay: 5500
        },],
      choices: [
        {
          text: "Это уже переходит все границы! Я пойду с тобой на следующую фотосессию.",
          result: [
            {
              type: "received",
              text: "Ого! Мой рыцарь в сияющих доспехах! 🛡️",
              delay: 1000
            },
            {
              type: "received",
              text: "Если честно, мне будет спокойнее, если ты придёшь. Спасибо! ❤️",
              delay: 2500
            }],
          nextChapter: "chapter4_protective"
        },
        {
          text: "Тебе нравится его внимание, да?",
          result: [
            {
              type: "received",
              text: "Ревнуешь что ли? 😏",
              delay: 1000
            },
            {
              type: "received",
              text: "Не переживай, он мне не интересен. Просто забавно наблюдать за его реакцией...",
              delay: 2500
            }],
          nextChapter: "chapter4_jealous"
        }],
    },

    chapter3_neutral:
    {
      messages: [
        {
          type: "sent",
          text: "Буду ждать! Уверен, фотографии получились отличные.",
          delay: 1000
        },
        {
          type: "received",
          text: "Кстати, я думала о том, чтобы попробовать себя в роли модели. Как считаешь?",
          delay: 2500
        },
        {
          type: "received",
          text: "У меня уже есть несколько предложений от небольших брендов одежды...",
          delay: 4000
        },
        {
          type: "received",
          text: "Но я не уверена, стоит ли соглашаться 🤔",
          delay: 5500
        },],
      choices: [
        {
          text: "Конечно стоит! У тебя отличные данные для модели.",
          result: [
            {
              type: "received",
              text: "Правда? Спасибо за поддержку! 🥰",
              delay: 1000
            },
            {
              type: "received",
              text: "Тогда я, пожалуй, соглашусь на предложение от того бренда купальников...",
              delay: 2500
            }],
          nextChapter: "chapter4_supportive"
        },
        {
          text: "А учёба? У тебя же скоро экзамены...",
          result: [
            {
              type: "received",
              text: "Ты прав... Наверное, стоит сначала закончить семестр 📚",
              delay: 1000
            },
            {
              type: "received",
              text: "Хотя... может, ты просто не хочешь, чтобы другие парни на меня смотрели? 😉",
              delay: 2500
            }],
          nextChapter: "chapter4_concerned"
        }],
    },

    chapter4_protective:
    {
      messages: [
        {
          type: "sent",
          text: "Когда следующая фотосессия? Я освобожу время.",
          delay: 1000
        },
        {
          type: "received",
          text: "В эту субботу, в 14:00. Студия недалеко от университета.",
          delay: 2500
        },
        {
          type: "received",
          text: "Кстати, ты не думал сам попробовать себя в качестве модели? У тебя хорошие данные! 📏",
          delay: 4000
        },],
      choices: [
        {
          text: "Я? Нет, это не моё. Я лучше буду твоим телохранителем.",
          result: [
            {
              type: "received",
              text: "Мой персональный защитник! Как мило 🥰",
              delay: 1000
            },
            {
              type: "received",
              text: "Знаешь, мне нравится, что ты так заботишься обо мне...",
              delay: 2500
            }],
          nextChapter: "chapter5_protective"
        },
        {
          text: "Может быть... А что, ты бы хотела увидеть меня в роли модели?",
          result: [
            {
              type: "received",
              text: "Ещё бы! Думаю, у тебя отлично получилось бы! 🤩",
              delay: 1000
            },
            {
              type: "received",
              text: "Можем даже сделать совместную фотосессию... Что скажешь?",
              delay: 2500
            }],
          nextChapter: "chapter5_joint"
        }],
    },

    chapter4_jealous:
    {
      messages: [
        {
          type: "sent",
          text: "Я не ревную. Просто беспокоюсь о тебе.",
          delay: 1000
        },
        {
          type: "received",
          text: "Ну-ну, конечно 😏 Твои уши краснеют даже через сообщения!",
          delay: 2500
        },
        {
          type: "received",
          text: "Если хочешь знать, он пригласил меня на ужин после фотосессии...",
          delay: 4000
        },],
      choices: [
        {
          text: "И ты согласилась?",
          result: [
            {
              type: "received",
              text: "А что, если да? 🤔",
              delay: 1000
            },
            {
              type: "received",
              text: "Шучу! Конечно нет. Я сказала, что у меня уже есть планы.",
              delay: 2500
            }],
          nextChapter: "chapter5_relief"
        },
        {
          text: "Это твоё дело. Ты свободная девушка.",
          result: [
            {
              type: "received",
              text: "Ого! Какой ты... спокойный 😐",
              delay: 1000
            },
            {
              type: "received",
              text: "Если тебе интересно, я отказалась. Сказала, что встречаюсь с другом из университета...",
              delay: 2500
            }],
          nextChapter: "chapter5_cool"
        }],
    },

    chapter4_supportive:
    {
      messages: [
        {
          type: "sent",
          text: "Купальники? Звучит интересно! Когда съёмка?",
          delay: 1000
        },
        {
          type: "received",
          text: "На следующей неделе! Немного волнуюсь, если честно... 😅",
          delay: 2500
        },
        {
          type: "received",
          text: "Там будет целая команда: визажисты, стилисты, фотографы...",
          delay: 4000
        },],
      choices: [
        {
          text: "Ты справишься! Хочешь, я пойду с тобой для моральной поддержки?",
          result: [
            {
              type: "received",
              text: "Правда? Это было бы супер! 🙏",
              delay: 1000
            },
            {
              type: "received",
              text: "Только обещай не смеяться, если я буду выглядеть нелепо!",
              delay: 2500
            }],
          nextChapter: "chapter5_support"
        },
        {
          text: "Уверен, ты будешь звездой этой фотосессии!",
          result: [
            {
              type: "received",
              text: "Спасибо за веру в меня! ❤️",
              delay: 1000
            },
            {
              type: "received",
              text: "Кстати, они сказали, что можно привести друга. Не хочешь посмотреть, как это происходит?",
              delay: 2500
            }],
          nextChapter: "chapter5_invite"
        }],
    },

    chapter4_concerned:
    {
      messages: [
        {
          type: "sent",
          text: "Дело не в других парнях. Просто не хочу, чтобы учёба пострадала.",
          delay: 1000
        },
        {
          type: "received",
          text: "Да-да, конечно! Я же вижу тебя насквозь 👀",
          delay: 2500
        },
        {
          type: "received",
          text: "Но вообще ты прав. Сначала экзамены, потом всё остальное.",
          delay: 4000
        },
        {
          type: "received",
          text: "Кстати о учёбе... Поможешь мне подготовиться к тесту по экономике?",
          delay: 5500
        },],
      choices: [
        {
          text: "Конечно! Когда удобно встретиться?",
          result: [
            {
              type: "received",
              text: "Может, завтра вечером? У меня дома никого не будет... 😏",
              delay: 1000
            },
            {
              type: "received",
              text: "Либо можем в библиотеку пойти. Там тихо и можно сосредоточиться",
              delay: 2500
            },
            {
              type: "received",
              text: "Сможем спокойно позаниматься, без отвлечений!",
              delay: 4000
            }],
          nextChapter: "chapter6_study_together"
        },
        {
          text: "Прости, я не могу сейчас. У меня самого много дел, еще на подработку хотел пойти.",
          result: [
            {
              type: "received",
              text: "Вот ты бяка 😒",
              delay: 1000
            },
            {
              type: "received",
              text: "Давай так.",
              delay: 1500
            },
            {
              type: "received",
              text: "Ты мне помогаешь, с меня подарок!",
              delay: 1500
            }],
          nextChapter: "chapter5_gift"
        }],
    },

    chapter5_gift:
    {
      messages: [
        {
          type: "sent",
          text: "Хм... Подарок? Ну не знаю...",
          delay: 1000
        },
        {
          type: "sent",
          text: "Ладно, я помогу. А что за подарок-то?",
          delay: 2500
        },
        {
          type: "received",
          text: "Сладкий! 🍬 Что захочешь, то и будет!",
          delay: 4000
        },
        {
          type: "received",
          text: "Так что, договорились? Завтра в библиотеке в 17:00?",
          delay: 5500
        },],
      choices: [
        {
          text: "Хочу фото с твоей фотосессии... ну, погорячее 😏",
          result: [
            {
              type: "received",
              text: "Ого! Какие у тебя запросы! 😳",
              delay: 1000
            },
            {
              type: "received",
              text: "Ну... если ты хорошо мне поможешь с экономикой, то почему бы и нет? Посмотрим, что можно сделать 😉",
              delay: 2500
            },
            {
              type: "sent",
              text: "Супер! Спасибо тебе заранее) Найду время.",
              delay: 4000
            },],
          nextChapter: "chapter6_gift_intim"
        },
        {
          text: "Эм... f можно фото твоих, ну... стоп после универа? Если тебе не сложно...",
          result: [
            {
              type: "received",
              text: "Моих ЧТО? 😲",
              delay: 1000
            },
            {
              type: "received",
              text: "Ты меня, конечно,удивляешь! Никогда бы не подумала... Ладно, если ты мне реально поможешь с экономикой, то может быть 🙈",
              delay: 2500
            }],
          nextChapter: "chapter6_gift_foot"
        }],
    },

    chapter6_gift_intim:
    {
      messages: [
        {
          type: "received",
          text: "Хаха!",
          delay: 500
        },
        {
          type: "received",
          text: "Где будем заниматься?",
          delay: 1500
        }],
      choices: [
        {
          text: "Можно у тебя, если тебе так удобнее.",
          result: [
            {
              type: "received",
              text: "Отлично! У меня как раз никого не будет дома... Сможем спокойно позаниматься 😊",
              delay: 1000
            },
            {
              type: "received",
              text: "И я приготовлю что-нибудь вкусное! Ты ведь любишь шоколадное печенье?",
              delay: 2500
            }],
          nextChapter: "chapter15"
        },
        {
          text: "Давай в библиотеке. Там тихо и можно сосредоточиться.",
          result: [
            {
              type: "received",
              text: "Ладно, пусть будет библиотека. Завтра в 16:00? 🕓",
              delay: 1000
            },
            {
              type: "received",
              text: "Tолько не забудь свои конспекты по экономике! Они мне очень нужны.",
              delay: 2500
            }],
          nextChapter: "chapter15"
        }],
    },

    chapter6_gift_foot:
    {
      messages: [
        {
          type: "sent",
          text: "Обещаю, сделаю все, что в моих силах!",
          delay: 500
        },
        {
          type: "received",
          text: "Ну еще бы 😂",
          delay: 1500
        },
        {
          type: "received",
          text: "Где будем заниматься?",
          delay: 2500
        }],
      choices: [
        {
          text: "Можно у тебя, если тебе так удобнее.",
          result: [
            {
              type: "received",
              text: "Отлично! У меня как раз никого не будет дома... Сможем спокойно позаниматься 😊",
              delay: 1000
            },
            {
              type: "received",
              text: "Предложила бы тебе что-нибудь сладкого, но... сам понимаешь, на десерт будет кое-что другое",
              delay: 3000
            },],
          nextChapter: "chapter15"
        },
        {
          text: "Давай в библиотеке. Там тихо и можно сосредоточиться.",
          result: [
            {
              type: "received",
              text: "Ладно, пусть будет библиотека. Завтра в 16:00? 🕓",
              delay: 1000
            },
            {
              type: "received",
              text: "Tолько не забудь свои конспекты по экономике! Они мне очень нужны.",
              delay: 2500
            },
            {
              type: "received",
              text: "Если забудешь, придется тебе своими ногами любоваться, ахах. Я серьезно",
              delay: 4000
            },
            {
              type: "sent",
              text: "Я понял, честно! Обещаю, что не забуду",
              delay: 6000
            },],
          nextChapter: "chapter15"
        }],
    },

    chapter5_protective:
    {
      messages: [
        {
          type: "received",
          text: "Знаешь, я тут подумала... Может, нам стоит больше времени проводить вместе?",
          delay: 1000
        },
        {
          type: "sent",
          text: "Что ты имеешь в виду?",
          delay: 2500
        },
        {
          type: "received",
          text: "Ну, мы могли бы вместе готовиться к экзаменам, ходить в кино...",
          delay: 4000
        },
        {
          type: "received",
          text: "...или просто гулять. Что скажешь? 🌃",
          delay: 5500
        },],
      choices: [
        {
          text: "Звучит здорово! Я только за.",
          result: [
            {
              type: "received",
              text: "Отлично! Тогда завтра после пар идём в парк? 🌳",
              delay: 1000
            },
            {
              type: "received",
              text: "Говорят, там открылось новое кафе с потрясающими десертами!",
              delay: 2500
            }],
          nextChapter: "chapter15"
        },
        {
          text: "А как же твои фотосессии и карьера модели?",
          result: [
            {
              type: "received",
              text: "Это просто хобби. Ты для меня важнее! 💕",
              delay: 1000
            },
            {
              type: "received",
              text: "К тому же, с тобой мне всегда интересное, чем с этими напыщенными фотографами.",
              delay: 2500
            }],
          nextChapter: "chapter6_priority"
        }],
    },

    chapter5_joint:
    {
      messages: [
        {
          type: "sent",
          text: "Совместная фотосессия? Звучит интересно, но немного страшно...",
          delay: 1000
        },
        {
          type: "received",
          text: "Не бойся! Я буду рядом и всё подскажу. К тому же, это будет весело! 🎭",
          delay: 2500
        },
        {
          type: "received",
          text: "Представь, какие классные фотографии у нас будут! Можем даже сделать тематическую съёмку.",
          delay: 4000
        },],
      choices: [
        {
          text: "Хорошо, я согласен. Но только ради тебя!",
          result: [
            {
              type: "received",
              text: "Ура! Ты лучший! 🎉",
              delay: 1000
            },
            {
              type: "received",
              text: "Я уже представляю, как мы будем выглядеть. Это будет бомба!",
              delay: 2500
            }],
          nextChapter: "chapter6_photoshoot"
        },
        {
          text: "А какая тема фотосессии? Надеюсь, ничего слишком откровенного?",
          result: [
            {
              type: "received",
              text: "Ой, да ладно тебе! Я думала о чём-то стильном. Может, в стиле 90-х? 👖",
              delay: 1000
            },
            {
              type: "received",
              text: "Хотя... если хочешь что-то более... интересное, я не против 😏",
              delay: 2500
            }],
          nextChapter: "chapter6_theme"
        }],
    },

    chapter5_relief:
    {
      messages: [
        {
          type: "sent",
          text: "Я рад, что ты отказалась. Этот фотограф мне не нравится.",
          delay: 1000
        },
        {
          type: "received",
          text: "Ага! Значит, всё-таки ревнуешь! Попался! 😂",
          delay: 2500
        },
        {
          type: "received",
          text: "Если честно, он мне совсем не интересен. Слишком самовлюблённый.",
          delay: 4000
        },],
      choices: [
        {
          text: "Я не ревную, просто беспокоюсь о тебе.",
          result: [
            {
              type: "received",
              text: "Ну конечно! Продолжай себя в этом убеждать 😄",
              delay: 1000
            },
            {
              type: "received",
              text: "Но знаешь... мне приятно твоё беспокойство. Правда ❤️",
              delay: 2500
            }],
          nextChapter: "chapter6_denial"
        },
        {
          text: "Хорошо, может быть, немного ревную. Ты мне нравишься.",
          result: [
            {
              type: "received",
              text: "Ого! Я не ожидала такого признания... 😳",
              delay: 1000
            },
            {
              type: "received",
              text: "Знаешь, ты мне тоже очень нравишься. Давно хотела тебе сказать...",
              delay: 2500
            }],
          nextChapter: "chapter6_compliment"
        }],
    },

    chapter6_denial:
    {
      messages: [
        {
          type: "sent",
          text: "Я действительно просто беспокоюсь о тебе. Не хочу, чтобы кто-то тебя обидел.",
          delay: 1000
        },
        {
          type: "received",
          text: "Это очень мило с твоей стороны. Правда! 💕",
          delay: 2500
        },
        {
          type: "received",
          text: "Знаешь, не так много людей, которые искренне беспокоятся обо мне...",
          delay: 4000
        }],
      choices: [
        {
          text: "Я всегда буду рядом, если понадоблюсь. Можешь на меня рассчитывать.",
          result: [
            {
              type: "received",
              text: "Спасибо! Это так много для меня значит... 🥺",
              delay: 1000
            },
            {
              type: "received",
              text: "Может, сходим куда-нибудь на выходных? Просто вдвоем, без всяких фотографов?",
              delay: 2500
            }],
          nextChapter: "chapter6_date_plan"
        },
        {
          text: "Ты мне небезразлична... больше, чем просто друг.",
          result: [
            {
              type: "received",
              text: "Ого! Я не ожидала такого признания... 😳",
              delay: 1000
            },
            {
              type: "received",
              text: "Знаешь, ты мне тоже очень нравишься. Давно хотела тебе сказать...",
              delay: 2500
            }],
          nextChapter: "chapter6_compliment"
        }],
    },

    chapter6_compliment:
    {
      messages: [
        {
          type: "sent",
          text: "Правда? Я не ожидал такого ответа...",
          delay: 1000
        },
        {
          type: "received",
          text: "А чего ты ожидал? Что я тебя отвергну? 😄",
          delay: 2500
        },
        {
          type: "received",
          text: "Мы столько времени проводим вместе в университете... Я думала, ты давно заметил мои знаки внимания.",
          delay: 4000
        },],
      choices: [
        {
          text: "Может, сходим куда-нибудь вместе на выходных?",
          result: [
            {
              type: "received",
              text: "С удовольствием! Может, в ресторан на набережной, а потом прогуляемся вдоль реки? 🌃",
              delay: 1000
            },
            {
              type: "received",
              text: "Говорят, там очень романтично, особенно вечером...",
              delay: 2500
            }],
          nextChapter: "chapter6_date_plan"
        },
        {
          text: "Я просто не думал, что все будет так быстро...",
          result: [
            {
              type: "received",
              text: "Хаха, я тоже не ожидала! 💫 Даже сквозь экран чувствую, как ты покраснел!",
              delay: 1000
            },
            {
              type: "sent",
              text: "Неправда! Я не покраснел, я просто немного смутился... раз так, давай проводить больше времени вместе.",
              delay: 2500
            },
            {
              type: "received",
              text: "Может тогда начнем вместе делать домашние задания? Как насчет завтра?",
              delay: 4000
            }],
          nextChapter: "chapter6_study_together"
        }],
    },

    chapter5_cool:
    {
      messages: [
        {
          type: "sent",
          text: "Друг из университета? Это про меня?",
          delay: 1000
        },
        {
          type: "received",
          text: "А ты догадливый! 😉 Конечно про тебя.",
          delay: 2500
        },
        {
          type: "received",
          text: "Так что... получается, у нас с тобой свидание? Раз я уже сказала фотографу, что встречаюсь с тобой...",
          delay: 4000
        },],
      choices: [
        {
          text: "Да, давай встретимся. Куда пойдём?",
          result: [
            {
              type: "received",
              text: "Ого! Не ожидала такой решительности! 😍",
              delay: 1000
            },
            {
              type: "received",
              text: "Может, в тот новый ресторан на набережной? Говорят, там очень романтичная атмосфера...",
              delay: 2500
            }],
          nextChapter: "chapter6_date_plan"
        },
        {
          text: "Ты меня просто используешь как отговорку?",
          result: [
            {
              type: "received",
              text: "Ну вот, опять ты всё неправильно понял! 🙄",
              delay: 1000
            },
            {
              type: "received",
              text: "Я действительно хотела бы провести с тобой время... Если ты, конечно, не против.",
              delay: 2500
            }],
          nextChapter: "chapter6_misunderstanding"
        }],
    },

    chapter5_support:
    {
      messages: [
        {
          type: "sent",
          text: "Конечно, я пойду с тобой! Буду твоей группой поддержки.",
          delay: 1000
        },
        {
          type: "received",
          text: "Ты самый лучший! Мне будет намного спокойнее, если ты будешь рядом 🥰",
          delay: 2500
        },
        {
          type: "received",
          text: "Только обещай не смеяться, если я буду выглядеть нелепо в этих купальниках!",
          delay: 4000
        },],
      choices: [
        {
          text: "Ты никогда не выглядишь нелепо. Уверен, будет потрясающе!",
          result: [
            {
              type: "received",
              text: "Спасибо за поддержку! Ты всегда знаешь, как поднять мне настроение 💕",
              delay: 1000
            },
            {
              type: "received",
              text: "Уже поздно... Давай завтра обсудим детали? Спокойной ночи!",
              delay: 2500
            }],
          nextChapter: "chapter15"
        },
        {
          text: "Обещаю! Но взамен ты должна будешь помочь мне с подготовкой к экзамену по истории.",
          result: [
            {
              type: "received",
              text: "По рукам! Я отлично знаю историю 📚",
              delay: 1000
            },
            {
              type: "received",
              text: "Уже поздно... Давай завтра всё обсудим? Спокойной ночи!",
              delay: 2500
            }],
          nextChapter: "chapter15"
        }],
    },

    chapter5_invite:
    {
      messages: [
        {
          type: "sent",
          text: "С удовольствием посмотрю на процесс! Когда фотосессия?",
          delay: 1000
        },
        {
          type: "received",
          text: "В следующий четверг, в 15:00. Студия в центре города 🏙️",
          delay: 2500
        },
        {
          type: "received",
          text: "Я так рада, что ты придёшь! Будет не так страшно с тобой рядом.",
          delay: 4000
        },],
      choices: [
        {
          text: "Не переживай, всё пройдёт отлично! Ты будешь звездой фотосессии.",
          result: [
            {
              type: "received",
              text: "Надеюсь! Хотя немного волнуюсь... Никогда раньше не снималась в купальниках 👙",
              delay: 1000
            },
            {
              type: "received",
              text: "Уже поздно... Давай завтра поговорим об этом? Спокойной ночи!",
              delay: 2500
            }],
          nextChapter: "chapter15"
        },
        {
          text: "А что, если я тоже попробую себя в роли модели?",
          result: [
            {
              type: "received",
              text: "Серьёзно? Это было бы супер! У тебя отличные данные! 😍",
              delay: 1000
            },
            {
              type: "received",
              text: "Я спрошу у организаторов, может, им нужны и мужские модели! Но уже поздно, давай завтра обсудим?",
              delay: 2500
            }],
          nextChapter: "chapter15"
        }],
    },

    chapter5_library:
    {
      messages: [
        {
          type: "sent",
          text: "Да, библиотека в 16:00 звучит отлично.",
          delay: 1000
        },
        {
          type: "received",
          text: "Хорошо, договорились. Хотя у меня дома было бы уютнее... 😏",
          delay: 2500
        },
        {
          type: "received",
          text: "Но ты прав, в библиотеке мы точно сможем сосредоточиться на учёбе.",
          delay: 4000
        },],
      choices: [
        {
          text: "Именно! Сначала экзамены, потом развлечения.",
          result: [
            {
              type: "received",
              text: "Какой ты правильный! 📚",
              delay: 1000
            },
            {
              type: "received",
              text: "Ладно, уже поздно. Давай завтра встретимся в библиотеке. Спокойной ночи!",
              delay: 2500
            }],
          nextChapter: "chapter15"
        },
        {
          text: "Хотя... может, ты и права насчёт твоего дома. Там будет комфортнее.",
          result: [
            {
              type: "received",
              text: "Правда? Отлично! Тогда завтра в 18:00 у меня! 🏠",
              delay: 1000
            },
            {
              type: "received",
              text: "Я приготовлю что-нибудь вкусное! Но уже поздно, давай завтра обсудим детали?",
              delay: 2500
            }],
          nextChapter: "chapter15"
        }],
    },

    chapter6_priority:
    {
      messages: [
        {
          type: "received",
          text: "Это просто хобби. Ты для меня важнее! 💕",
          delay: 1000
        },
        {
          type: "received",
          text: "К тому же, с тобой мне всегда интереснее, чем с этими напыщенными фотографами.",
          delay: 2500
        },],
      choices: [
        {
          text: "А как же твои фотосессии и карьера модели?",
          result: [
            {
              type: "received",
              text: "Это просто хобби. Ты для меня важнее! 💕",
              delay: 1000
            },
            {
              type: "received",
              text: "К тому же, с тобой мне всегда интересное, чем с этими напыщенными фотографами.",
              delay: 2500
            }],
          nextChapter: "chapter6_priority"
        },],
    },

    chapter6_photoshoot:
    {
      messages: [
        {
          type: "sent",
          text: "Надеюсь, я не буду выглядеть нелепо. Никогда раньше не участвовал в фотосессиях.",
          delay: 1000
        },
        {
          type: "received",
          text: "Не переживай! Ты будешь выглядеть потрясающе! У тебя отличные данные для модели 📸",
          delay: 2500
        },
        {
          type: "received",
          text: "К тому же, я буду рядом и всё подскажу. Фотограф тоже очень профессиональный, он поможет с позами.",
          delay: 4000
        },],
      choices: [
        {
          text: "Хорошо, я доверяю тебе. Когда состоится фотосессия?",
          result: [
            {
              type: "received",
              text: "В эту субботу, в 14:00. Студия недалеко от университета 🏫",
              delay: 1000
            },
            {
              type: "received",
              text: "Я так рада, что ты согласился! Это будет незабываемо!",
              delay: 2500
            }],
          nextChapter: "chapter15"
        },
        {
          text: "А что мне надеть? У меня нет модной одежды.",
          result: [
            {
              type: "received",
              text: "Не волнуйся об этом! В студии есть гардеробная с разными образами 👔",
              delay: 1000
            },
            {
              type: "received",
              text: "Стилист подберёт тебе что-нибудь подходящее. Просто приходи в субботу к 14:00!",
              delay: 2500
            }],
          nextChapter: "chapter15"
        }],
    },

    chapter6_theme:
    {
      messages: [
        {
          type: "sent",
          text: "Давай всё-таки что-то стильное. В стиле 90-х звучит интересно!",
          delay: 1000
        },
        {
          type: "received",
          text: "Отлично! Я уже представляю: джинсы с высокой талией, яркие цвета, крупные аксессуары... 👖✨",
          delay: 2500
        },
        {
          type: "received",
          text: "Кстати, фотограф сказал, что может сделать нам скидку, если мы придём в следующую субботу. Ты свободен?",
          delay: 4000
        },],
      choices: [
        {
          text: "Да, в субботу я свободен. Во сколько встречаемся?",
          result: [
            {
              type: "received",
              text: "Супер! Давай в 13:00 у студии. Я скину тебе адрес завтра 📍",
              delay: 1000
            },
            {
              type: "received",
              text: "Не могу дождаться! Это будет так весело! 🎉",
              delay: 2500
            }],
          nextChapter: "chapter15"
        },
        {
          text: "А можно мне сначала посмотреть, как ты фотографируешься? Не уверен, что готов сразу участвовать.",
          result: [
            {
              type: "received",
              text: "Конечно можно! Я понимаю твоё волнение 😊",
              delay: 1000
            },
            {
              type: "received",
              text: "Приходи завтра на мою съёмку, посмотришь как это происходит. А потом решишь, хочешь ли участвовать сам.",
              delay: 2500
            }],
          nextChapter: "chapter15"
        }],
    },

    chapter6_misunderstanding:
    {
      messages: [
        {
          type: "sent",
          text: "Извини, я не хотел тебя обидеть. Просто был удивлён.",
          delay: 1000
        },
        {
          type: "received",
          text: "Ничего страшного! Я понимаю, как это могло прозвучать 😊",
          delay: 2500
        },
        {
          type: "received",
          text: "Но если серьёзно, я бы очень хотела провести с тобой время. Не как отговорка для фотографа, а потому что мне нравится быть с тобой.",
          delay: 4000
        },],
      choices: [
        {
          text: "Мне тоже нравится проводить с тобой время. Давай сходим куда-нибудь завтра?",
          result: [
            {
              type: "received",
              text: "С удовольствием! Может, в тот новый ресторан на набережной? 🌃",
              delay: 1000
            },
            {
              type: "received",
              text: "Говорят, там очень романтичная атмосфера... Но уже поздно, давай завтра обсудим детали?",
              delay: 2500
            }],
          nextChapter: "chapter15"
        },
        {
          text: "Давай просто останемся друзьями. Мне кажется, так будет лучше.",
          result: [
            {
              type: "received",
              text: "О... Конечно, я понимаю 😔",
              delay: 1000
            },
            {
              type: "received",
              text: "Дружба тоже очень ценна. Уже поздно, давай поговорим завтра? Спокойной ночи.",
              delay: 2500
            }],
          nextChapter: "chapter15"
        }],
    },

    chapter6_date_plan:
    {
      messages: [
        {
          type: "sent",
          text: "Ресторан звучит отлично! Во сколько тебе удобно?",
          delay: 1000
        },
        {
          type: "received",
          text: "Давай в 19:00? Как раз будет красивый закат 🌅",
          delay: 2500
        },
        {
          type: "received",
          text: "Я так рада, что мы наконец-то проведём время вместе вне университета!",
          delay: 6000
        }],
      choices: [
        {
          text: "Я тоже очень рад. Давно хотел пригласить тебя куда-нибудь.",
          result: [
            {
              type: "received",
              text: "Правда? А почему не пригласил? 🤔",
              delay: 1000
            },
            {
              type: "received",
              text: "Ладно, неважно. Главное, что мы наконец-то идём!",
              delay: 2500
            }],
          nextChapter: "chapter15"
        },
        {
          text: "Надеюсь, нам никто не будет нам мешать заонками...",
          result: [
            {
              type: "received",
              text: "Опять ты за своё! 😄 Не волнуйся, я выключу телефон.",
              delay: 1000
            },
            {
              type: "received",
              text: "Так что ничего не будет отвлекать нас друг от друга...",
              delay: 2500
            }],
          nextChapter: "chapter15"
        }],
    },

    chapter6_study_together:
    {
      messages: [
        {
          type: "sent",
          text: "Отличная идея! Вместе будет эффективнее готовиться.",
          delay: 1000
        },
        {
          type: "received",
          text: "Супер! Я знала, что ты согласишься! 📚",
          delay: 2500
        },
        {
          type: "received",
          text: "Так где? Быстрее выбирай давай, хаха. У меня дома или в библиотеке?",
          delay: 4000
        },],
      choices: [
        {
          text: "Давай в библиотеке. Там тихо и можно сосредоточиться.",
          result: [
            {
              type: "received",
              text: "Ладно, пусть будет библиотека. Завтра в 16:00? 🕓",
              delay: 1000
            },
            {
              type: "received",
              text: "Только не забудь свои конспекты по экономике! Они мне очень нужны.",
              delay: 2500
            }],
          nextChapter: "chapter15_lessons_library"
        },
        {
          text: "Можно у тебя, если тебе так удобнее.",
          result: [
            {
              type: "received",
              text: "Отлично! У меня как раз никого не будет дома... Сможем спокойно позаниматься 😊",
              delay: 1000
            },
            {
              type: "received",
              text: "И я приготовлю что-нибудь вкусное! Ты ведь любишь шоколадное печенье?",
              delay: 2500
            }],
          nextChapter: "chapter15_lessons"
        }],
    },
  },
  en: {
    start: {
      messages: [],
      choices: [
        {
          text: '"I have new messages... I should check them"',
          printable: false,
          result: [],
          nextChapter: "chapter1",
        }]
    },

    chapter1: {
      messages: [
        {
          type: "received",
          text: "Hey, sweetie! 💋 Check out my new post on PureGram!",
          delay: 1000
        },
        {
          type: "sent",
          text: "Hi! Checking it out now...",
          delay: 2500
        },
        {
          type: "received",
          text: "So, what do you think? Did you like the neckline? 😇",
          delay: 4000
        },
        {
          type: "received",
          text: "Honestly, I really want your opinion! 💄",
          delay: 5500
        },],
      choices: [
        {
          text: "Wow, isn't that neckline a bit too low?",
          result: [
            {
              type: "received",
              text: "Oh come on! Let everyone be jealous of my style 💅",
              delay: 1000
            },
            {
              type: "received",
              text: "By the way, about the photographer... I need to talk to you about that later 😏",
              delay: 2500
            }],
          nextChapter: "chapter2"
        },
        {
          text: "You look amazing!",
          result: [
            {
              type: "received",
              text: "Yeah, the neckline turned out great 💋",
              delay: 1000
            },
            {
              type: "received",
              text: "I think the photographer was shamelessly staring at it... But more on that later 😈",
              delay: 2500
            }],
          nextChapter: "chapter2"
        }],
    },

    chapter2: {
      messages: [
        {
          type: "received",
          text: "Listen, you won't believe what happened at the photoshoot! 📸",
          delay: 1000
        },
        {
          type: "sent",
          text: "What happened?",
          delay: 2500
        },
        {
          type: "received",
          text: "This photographer... He kept asking me to 'turn a little', 'show my profile'...",
          delay: 4000
        },
        {
          type: "received",
          text: "And then he suggested taking a few shots in a more... 'free' pose 🙄",
          delay: 5500
        },],
      choices: [
        {
          text: "What do you mean by 'free'? Was he hitting on you?",
          result: [
            {
              type: "received",
              text: "Well, not exactly hitting on me... But he was definitely undressing me with his eyes! 👀",
              delay: 1000
            },
            {
              type: "received",
              text: "Especially when I was in that short dress. He kept staring at my legs...",
              delay: 2500
            }],
          nextChapter: "chapter3_jealous"
        },
        {
          text: "Sounds like a normal photographer's job. Is he a professional?",
          result: [
            {
              type: "received",
              text: "Yeah, he seems professional. But you know, sometimes I feel like he gets too... involved in the process 📷",
              delay: 1000
            },
            {
              type: "received",
              text: "Though the photos turned out great! I'll show you the rest tomorrow 😊",
              delay: 2500
            }],
          nextChapter: "chapter3_neutral"
        }],
    },

    chapter3_jealous: {
      messages: [
        {
          type: "sent",
          text: "I don't like this. Maybe you should change photographers?",
          delay: 1000
        },
        {
          type: "received",
          text: "Oh, come on! He's just doing his job... in his own way 💁‍♀️",
          delay: 2500
        },
        {
          type: "received",
          text: "Besides, he offered me a discount for the next photoshoot...",
          delay: 4000
        },
        {
          type: "received",
          text: "...if I wear the same mini skirt 🙈",
          delay: 5500
        },],
      choices: [
        {
          text: "This is crossing the line! I'm coming with you to the next photoshoot.",
          result: [
            {
              type: "received",
              text: "Wow! My knight in shining armor! 🛡️",
              delay: 1000
            },
            {
              type: "received",
              text: "To be honest, I'll feel safer if you come. Thank you! ❤️",
              delay: 2500
            }],
          nextChapter: "chapter4_protective"
        },
        {
          text: "You like his attention, don't you?",
          result: [
            {
              type: "received",
              text: "Are you jealous? 😏",
              delay: 1000
            },
            {
              type: "received",
              text: "Don't worry, I'm not interested in him. It's just funny to watch his reaction...",
              delay: 2500
            }],
          nextChapter: "chapter4_jealous"
        }],
    },

    chapter3_neutral: {
      messages: [
        {
          type: "sent",
          text: "I'll be waiting! I'm sure the photos turned out great.",
          delay: 1000
        },
        {
          type: "received",
          text: "By the way, I was thinking about trying modeling. What do you think?",
          delay: 2500
        },
        {
          type: "received",
          text: "I already have a few offers from small clothing brands...",
          delay: 4000
        },
        {
          type: "received",
          text: "But I'm not sure if I should accept 🤔",
          delay: 5500
        },],
      choices: [
        {
          text: "Of course you should! You have great modeling potential.",
          result: [
            {
              type: "received",
              text: "Really? Thanks for the support! 🥰",
              delay: 1000
            },
            {
              type: "received",
              text: "Then I think I'll accept that offer from the swimwear brand...",
              delay: 2500
            }],
          nextChapter: "chapter4_supportive"
        },
        {
          text: "What about your studies? You have exams coming up...",
          result: [
            {
              type: "received",
              text: "You're right... I should probably finish the semester first 📚",
              delay: 1000
            },
            {
              type: "received",
              text: "Although... maybe you just don't want other guys looking at me? 😉",
              delay: 2500
            }],
          nextChapter: "chapter4_concerned"
        }],
    },

    chapter4_protective: {
      messages: [
        {
          type: "sent",
          text: "When is the next photoshoot? I'll make time for it.",
          delay: 1000
        },
        {
          type: "received",
          text: "This Saturday at 2:00 PM. The studio is near the university.",
          delay: 2500
        },
        {
          type: "received",
          text: "By the way, have you ever thought about trying modeling yourself? You have good features! 📏",
          delay: 4000
        },],
      choices: [
        {
          text: "Me? No, that's not my thing. I'd rather be your bodyguard.",
          result: [
            {
              type: "received",
              text: "My personal protector! How sweet 🥰",
              delay: 1000
            },
            {
              type: "received",
              text: "You know, I like that you care about me so much...",
              delay: 2500
            }],
          nextChapter: "chapter5_protective"
        },
        {
          text: "Maybe... Would you like to see me as a model?",
          result: [
            {
              type: "received",
              text: "Absolutely! I think you'd be great at it! 🤩",
              delay: 1000
            },
            {
              type: "received",
              text: "We could even do a joint photoshoot... What do you say?",
              delay: 2500
            }],
          nextChapter: "chapter5_joint"
        }],
    },

    chapter4_jealous: {
      messages: [
        {
          type: "sent",
          text: "I'm not jealous. I'm just concerned about you.",
          delay: 1000
        },
        {
          type: "received",
          text: "Sure, of course 😏 I can see your ears turning red through the messages!",
          delay: 2500
        },
        {
          type: "received",
          text: "If you want to know, he invited me to dinner after the photoshoot...",
          delay: 4000
        },],
      choices: [
        {
          text: "And you agreed?",
          result: [
            {
              type: "received",
              text: "What if I did? 🤔",
              delay: 1000
            },
            {
              type: "received",
              text: "Just kidding! Of course not. I said I already had plans.",
              delay: 2500
            }],
          nextChapter: "chapter5_relief"
        },
        {
          text: "That's your business. You're a free woman.",
          result: [
            {
              type: "received",
              text: "Wow! You're so... calm 😐",
              delay: 1000
            },
            {
              type: "received",
              text: "If you're curious, I declined. I said I was meeting a friend from university...",
              delay: 2500
            }],
          nextChapter: "chapter5_cool"
        }],
    },

    chapter4_supportive: {
      messages: [
        {
          type: "sent",
          text: "Swimwear? Sounds interesting! When is the shoot?",
          delay: 1000
        },
        {
          type: "received",
          text: "Next week! I'm a bit nervous, to be honest... 😅",
          delay: 2500
        },
        {
          type: "received",
          text: "There will be a whole team: makeup artists, stylists, photographers...",
          delay: 4000
        },],
      choices: [
        {
          text: "You'll do great! Want me to come with you for moral support?",
          result: [
            {
              type: "received",
              text: "Really? That would be super! 🙏",
              delay: 1000
            },
            {
              type: "received",
              text: "Just promise not to laugh if I look ridiculous!",
              delay: 2500
            }],
          nextChapter: "chapter5_support"
        },
        {
          text: "I'm sure you'll be the star of this photoshoot!",
          result: [
            {
              type: "received",
              text: "Thanks for believing in me! ❤️",
              delay: 1000
            },
            {
              type: "received",
              text: "By the way, they said I could bring a friend. Want to see how it all works?",
              delay: 2500
            }],
          nextChapter: "chapter5_invite"
        }],
    },

    chapter4_concerned: {
      messages: [
        {
          type: "sent",
          text: "It's not about other guys. I just don't want your studies to suffer.",
          delay: 1000
        },
        {
          type: "received",
          text: "Yeah, sure! I can see right through you 👀",
          delay: 2500
        },
        {
          type: "received",
          text: "But you're right. Exams first, everything else later.",
          delay: 4000
        },
        {
          type: "received",
          text: "Speaking of studies... Can you help me prepare for the economics test?",
          delay: 5500
        },],
      choices: [
        {
          text: "Of course! When would you like to meet?",
          result: [
            {
              type: "received",
              text: "Maybe tomorrow evening? No one will be at my place... 😏",
              delay: 1000
            },
            {
              type: "received",
              text: "Or we could go to the library. It's quiet there and we can focus",
              delay: 2500
            },
            {
              type: "received",
              text: "We can study peacefully, without distractions!",
              delay: 4000
            }],
          nextChapter: "chapter6_study_together"
        },
        {
          text: "Sorry, I can't right now. I have a lot to do, and I was planning to pick up some part-time work.",
          result: [
            {
              type: "received",
              text: "You're such a meanie 😒",
              delay: 1000
            },
            {
              type: "received",
              text: "Let's do this.",
              delay: 1500
            },
            {
              type: "received",
              text: "You help me, and I'll give you a gift!",
              delay: 1500
            }],
          nextChapter: "chapter5_gift"
        }],
    },

    chapter5_gift: {
      messages: [
        {
          type: "sent",
          text: "Hmm... A gift? I don't know...",
          delay: 1000
        },
        {
          type: "sent",
          text: "Alright, I'll help. What kind of gift are we talking about?",
          delay: 2500
        },
        {
          type: "received",
          text: "Sweetie! 🍬 Whatever you want, that's what it'll be!",
          delay: 4000
        },
        {
          type: "received",
          text: "So, do we have a deal? Tomorrow at the library at 5:00 PM?",
          delay: 5500
        },],
      choices: [
        {
          text: "I want photos from your photoshoot... you know, the spicy ones 😏",
          result: [
            {
              type: "received",
              text: "Wow! What demands you have! 😳",
              delay: 1000
            },
            {
              type: "received",
              text: "Well... if you help me well with economics, then why not? We'll see what I can do 😉",
              delay: 2500
            },
            {
              type: "sent",
              text: "Great! Thanks in advance) I'll make time.",
              delay: 4000
            },],
          nextChapter: "chapter6_gift_intim"
        },
        {
          text: "Um... could I get photos of your, um... feet after university? If it's not too much trouble...",
          result: [
            {
              type: "received",
              text: "My WHAT? 😲",
              delay: 1000
            },
            {
              type: "received",
              text: "You certainly surprise me! I never would have thought... Okay, if you really help me with economics, then maybe 🙈",
              delay: 2500
            }],
          nextChapter: "chapter6_gift_foot"
        }],
    },

    chapter6_gift_intim: {
      messages: [
        {
          type: "received",
          text: "Haha!",
          delay: 500
        },
        {
          type: "received",
          text: "Where shall we study?",
          delay: 1500
        }],
      choices: [
        {
          text: "We can do it at your place, if that's more convenient for you.",
          result: [
            {
              type: "received",
              text: "Perfect! No one will be at my home... We can study in peace 😊",
              delay: 1000
            },
            {
              type: "received",
              text: "And I'll make something delicious! You like chocolate cookies, right?",
              delay: 2500
            }],
          nextChapter: "chapter15"
        },
        {
          text: "Let's go to the library. It's quiet and we can focus.",
          result: [
            {
              type: "received",
              text: "Alright, the library it is. Tomorrow at 4:00 PM? 🕓",
              delay: 1000
            },
            {
              type: "received",
              text: "Just don't forget your economics notes! I really need them.",
              delay: 2500
            }],
          nextChapter: "chapter15"
        }],
    },

    chapter6_gift_foot: {
      messages: [
        {
          type: "sent",
          text: "I promise, I'll do everything I can!",
          delay: 500
        },
        {
          type: "received",
          text: "I bet you will 😂",
          delay: 1500
        },
        {
          type: "received",
          text: "Where shall we study?",
          delay: 2500
        }],
      choices: [
        {
          text: "We can do it at your place, if that's more convenient for you.",
          result: [
            {
              type: "received",
              text: "Perfect! No one will be at my home... We can study in peace 😊",
              delay: 1000
            },
            {
              type: "received",
              text: "I'd offer you something sweet, but... you know, there'll be a different kind of dessert",
              delay: 3000
            },],
          nextChapter: "chapter15"
        },
        {
          text: "Let's go to the library. It's quiet and we can focus.",
          result: [
            {
              type: "received",
              text: "Alright, the library it is. Tomorrow at 4:00 PM? 🕓",
              delay: 1000
            },
            {
              type: "received",
              text: "Just don't forget your economics notes! I really need them.",
              delay: 2500
            },
            {
              type: "received",
              text: "If you forget, you'll have to admire your own feet, haha. I'm serious",
              delay: 4000
            },
            {
              type: "sent",
              text: "I understand, honestly! I promise I won't forget",
              delay: 6000
            },],
          nextChapter: "chapter15"
        }],
    },

    chapter5_protective: {
      messages: [
        {
          type: "received",
          text: "You know, I was thinking... Maybe we should spend more time together?",
          delay: 1000
        },
        {
          type: "sent",
          text: "What do you mean?",
          delay: 2500
        },
        {
          type: "received",
          text: "Well, we could study for exams together, go to the movies...",
          delay: 4000
        },
        {
          type: "received",
          text: "...or just take walks. What do you say? 🌃",
          delay: 5500
        },],
      choices: [
        {
          text: "Sounds great! I'm all for it.",
          result: [
            {
              type: "received",
              text: "Excellent! So tomorrow after classes we go to the park? 🌳",
              delay: 1000
            },
            {
              type: "received",
              text: "They say there's a new cafe with amazing desserts!",
              delay: 2500
            }],
          nextChapter: "chapter15"
        },
        {
          text: "What about your photoshoots and modeling career?",
          result: [
            {
              type: "received",
              text: "That's just a hobby. You're more important to me! 💕",
              delay: 1000
            },
            {
              type: "received",
              text: "Besides, I always have more fun with you than with those pretentious photographers.",
              delay: 2500
            }],
          nextChapter: "chapter6_priority"
        }],
    },

    chapter5_joint: {
      messages: [
        {
          type: "sent",
          text: "A joint photoshoot? Sounds interesting, but a bit scary...",
          delay: 1000
        },
        {
          type: "received",
          text: "Don't be afraid! I'll be right there and guide you. Plus, it'll be fun! 🎭",
          delay: 2500
        },
        {
          type: "received",
          text: "Imagine what cool photos we'll have! We could even do a themed shoot.",
          delay: 4000
        },],
      choices: [
        {
          text: "Okay, I'm in. But only for you!",
          result: [
            {
              type: "received",
              text: "Yay! You're the best! 🎉",
              delay: 1000
            },
            {
              type: "received",
              text: "I can already picture how we'll look. It's going to be amazing!",
              delay: 2500
            }],
          nextChapter: "chapter6_photoshoot"
        },
        {
          text: "What's the theme of the photoshoot? Nothing too revealing, I hope?",
          result: [
            {
              type: "received",
              text: "Oh, come on! I was thinking of something stylish. Maybe 90s style? 👖",
              delay: 1000
            },
            {
              type: "received",
              text: "Although... if you want something more... interesting, I'm not against it 😏",
              delay: 2500
            }],
          nextChapter: "chapter6_theme"
        }],
    },

    chapter5_relief: {
      messages: [
        {
          type: "sent",
          text: "I'm glad you declined. I don't like that photographer.",
          delay: 1000
        },
        {
          type: "received",
          text: "Aha! So you are jealous! Caught you! 😂",
          delay: 2500
        },
        {
          type: "received",
          text: "To be honest, I'm not interested in him at all. He's too self-absorbed.",
          delay: 4000
        },],
      choices: [
        {
          text: "I'm not jealous, I'm just concerned about you.",
          result: [
            {
              type: "received",
              text: "Of course! Keep telling yourself that 😄",
              delay: 1000
            },
            {
              type: "received",
              text: "But you know... I appreciate your concern. Really ❤️",
              delay: 2500
            }],
          nextChapter: "chapter6_denial"
        },
        {
          text: "Okay, maybe I am a little jealous. I like you.",
          result: [
            {
              type: "received",
              text: "Wow! I wasn't expecting such a confession... 😳",
              delay: 1000
            },
            {
              type: "received",
              text: "You know, I really like you too. I've wanted to tell you for a while...",
              delay: 2500
            }],
          nextChapter: "chapter6_compliment"
        }],
    },

    chapter6_denial: {
      messages: [
        {
          type: "sent",
          text: "I really am just concerned about you. I don't want anyone to hurt you.",
          delay: 1000
        },
        {
          type: "received",
          text: "That's very sweet of you. Really! 💕",
          delay: 2500
        },
        {
          type: "received",
          text: "You know, not many people genuinely care about me...",
          delay: 4000
        }],
      choices: [
        {
          text: "I'll always be there if you need me. You can count on me.",
          result: [
            {
              type: "received",
              text: "Thank you! That means so much to me... 🥺",
              delay: 1000
            },
            {
              type: "received",
              text: "Maybe we could go somewhere this weekend? Just the two of us, no photographers?",
              delay: 2500
            }],
          nextChapter: "chapter6_date_plan"
        },
        {
          text: "I care about you... more than just a friend.",
          result: [
            {
              type: "received",
              text: "Wow! I wasn't expecting such a confession... 😳",
              delay: 1000
            },
            {
              type: "received",
              text: "You know, I really like you too. I've wanted to tell you for a while...",
              delay: 2500
            }],
          nextChapter: "chapter6_compliment"
        }],
    },

    chapter6_compliment: {
      messages: [
        {
          type: "sent",
          text: "Really? I wasn't expecting that response...",
          delay: 1000
        },
        {
          type: "received",
          text: "What were you expecting? That I'd reject you? 😄",
          delay: 2500
        },
        {
          type: "received",
          text: "We spend so much time together at university... I thought you'd noticed my signs of interest long ago.",
          delay: 4000
        },],
      choices: [
        {
          text: "Maybe we could go somewhere together this weekend?",
          result: [
            {
              type: "received",
              text: "I'd love to! Maybe that restaurant on the embankment, and then a walk along the river? 🌃",
              delay: 1000
            },
            {
              type: "received",
              text: "They say it's very romantic there, especially in the evening...",
              delay: 2500
            }],
          nextChapter: "chapter6_date_plan"
        },
        {
          text: "I just didn't think it would happen so quickly...",
          result: [
            {
              type: "received",
              text: "Haha, I didn't expect it either! 💫 I can feel you blushing through the screen!",
              delay: 1000
            },
            {
              type: "sent",
              text: "Not true! I'm not blushing, I'm just a little surprised... anyway, let's spend more time together.",
              delay: 2500
            },
            {
              type: "received",
              text: "Maybe we could start doing homework together? How about tomorrow?",
              delay: 4000
            }],
          nextChapter: "chapter6_study_together"
        }],
    },

    chapter5_cool: {
      messages: [
        {
          type: "sent",
          text: "Friend from university? Is that me?",
          delay: 1000
        },
        {
          type: "received",
          text: "You're quick! 😉 Of course it's you.",
          delay: 2500
        },
        {
          type: "received",
          text: "So... does that mean we have a date? Since I already told the photographer I'm meeting you...",
          delay: 4000
        },],
      choices: [
        {
          text: "Yes, let's meet. Where should we go?",
          result: [
            {
              type: "received",
              text: "Wow! I wasn't expecting such decisiveness! 😍",
              delay: 1000
            },
            {
              type: "received",
              text: "Maybe that new restaurant on the embankment? They say it has a very romantic atmosphere...",
              delay: 2500
            }],
          nextChapter: "chapter6_date_plan"
        },
        {
          text: "Are you just using me as an excuse?",
          result: [
            {
              type: "received",
              text: "There you go again, misunderstanding everything! 🙄",
              delay: 1000
            },
            {
              type: "received",
              text: "I really would like to spend time with you... If you're not against it.",
              delay: 2500
            }],
          nextChapter: "chapter6_misunderstanding"
        }],
    },

    chapter5_support: {
      messages: [
        {
          type: "sent",
          text: "Of course, I'll go with you! I'll be your support group.",
          delay: 1000
        },
        {
          type: "received",
          text: "You're the best! I'll feel much calmer with you nearby 🥰",
          delay: 2500
        },
        {
          type: "received",
          text: "Just promise not to laugh if I look ridiculous in these swimsuits!",
          delay: 4000
        },],
      choices: [
        {
          text: "You never look ridiculous. I'm sure it will be amazing!",
          result: [
            {
              type: "received",
              text: "Thanks for the support! You always know how to cheer me up 💕",
              delay: 1000
            },
            {
              type: "received",
              text: "It's getting late... Let's discuss the details tomorrow? Good night!",
              delay: 2500
            }],
          nextChapter: "chapter15"
        },
        {
          text: "I promise! But in return, you'll have to help me prepare for the history exam.",
          result: [
            {
              type: "received",
              text: "Deal! I'm great at history 📚",
              delay: 1000
            },
            {
              type: "received",
              text: "It's getting late... Let's talk about everything tomorrow? Good night!",
              delay: 2500
            }],
          nextChapter: "chapter15"
        }],
    },
    chapter5_invite: {
      messages: [
        {
          type: "sent",
          text: "I'd love to see the process! When is the photoshoot?",
          delay: 1000
        },
        {
          type: "received",
          text: "Next Thursday at 3:00 PM. The studio is downtown 🏙️",
          delay: 2500
        },
        {
          type: "received",
          text: "I'm so glad you're coming! It won't be as scary with you there.",
          delay: 4000
        },],
      choices: [
        {
          text: "Don't worry, everything will be great! You'll be the star of the photoshoot.",
          result: [
            {
              type: "received",
              text: "I hope so! Though I'm a bit nervous... I've never posed in swimwear before 👙",
              delay: 1000
            },
            {
              type: "received",
              text: "It's getting late... Let's talk about this tomorrow? Good night!",
              delay: 2500
            }],
          nextChapter: "chapter15"
        },
        {
          text: "What if I try modeling too?",
          result: [
            {
              type: "received",
              text: "Seriously? That would be super! You have great features! 😍",
              delay: 1000
            },
            {
              type: "received",
              text: "I'll ask the organizers if they need male models too! But it's late now, let's discuss tomorrow?",
              delay: 2500
            }],
          nextChapter: "chapter15"
        }],
    },

    chapter5_library: {
      messages: [
        {
          type: "sent",
          text: "Yes, the library at 4:00 PM sounds great.",
          delay: 1000
        },
        {
          type: "received",
          text: "Okay, it's a deal. Though it would have been cozier at my place... 😏",
          delay: 2500
        },
        {
          type: "received",
          text: "But you're right, we can definitely focus on studying at the library.",
          delay: 4000
        },],
      choices: [
        {
          text: "Exactly! Exams first, fun later.",
          result: [
            {
              type: "received",
              text: "You're so proper! 📚",
              delay: 1000
            },
            {
              type: "received",
              text: "Alright, it's late. Let's meet at the library tomorrow. Good night!",
              delay: 2500
            }],
          nextChapter: "chapter15"
        },
        {
          text: "Although... maybe you're right about your place. It would be more comfortable.",
          result: [
            {
              type: "received",
              text: "Really? Great! Then tomorrow at 6:00 PM at my place! 🏠",
              delay: 1000
            },
            {
              type: "received",
              text: "I'll make something delicious! But it's late now, let's discuss details tomorrow?",
              delay: 2500
            }],
          nextChapter: "chapter15"
        }],
    },

    chapter6_priority: {
      messages: [
        {
          type: "received",
          text: "It's just a hobby. You're more important to me! 💕",
          delay: 1000
        },
        {
          type: "received",
          text: "Besides, I always have more fun with you than with those pretentious photographers.",
          delay: 2500
        },],
      choices: [
        {
          text: "What about your photoshoots and modeling career?",
          result: [
            {
              type: "received",
              text: "It's just a hobby. You're more important to me! 💕",
              delay: 1000
            },
            {
              type: "received",
              text: "Besides, I always have more fun with you than with those pretentious photographers.",
              delay: 2500
            }],
          nextChapter: "chapter6_priority"
        },],
    },

    chapter6_photoshoot: {
      messages: [
        {
          type: "sent",
          text: "I hope I won't look ridiculous. I've never been in a photoshoot before.",
          delay: 1000
        },
        {
          type: "received",
          text: "Don't worry! You'll look amazing! You have great features for modeling 📸",
          delay: 2500
        },
        {
          type: "received",
          text: "Plus, I'll be right there to guide you. The photographer is very professional too, he'll help with poses.",
          delay: 4000
        },],
      choices: [
        {
          text: "Okay, I trust you. When is the photoshoot?",
          result: [
            {
              type: "received",
              text: "This Saturday at 2:00 PM. The studio is near the university 🏫",
              delay: 1000
            },
            {
              type: "received",
              text: "I'm so glad you agreed! It's going to be unforgettable!",
              delay: 2500
            }],
          nextChapter: "chapter15"
        },
        {
          text: "What should I wear? I don't have fashionable clothes.",
          result: [
            {
              type: "received",
              text: "Don't worry about that! The studio has a wardrobe with different outfits 👔",
              delay: 1000
            },
            {
              type: "received",
              text: "The stylist will pick something suitable for you. Just come on Saturday at 2:00 PM!",
              delay: 2500
            }],
          nextChapter: "chapter15"
        }],
    },

    chapter6_theme: {
      messages: [
        {
          type: "sent",
          text: "Let's go with something stylish. 90s style sounds interesting!",
          delay: 1000
        },
        {
          type: "received",
          text: "Great! I can already picture it: high-waisted jeans, bright colors, chunky accessories... 👖✨",
          delay: 2500
        },
        {
          type: "received",
          text: "By the way, the photographer said he could give us a discount if we come next Saturday. Are you free?",
          delay: 4000
        },],
      choices: [
        {
          text: "Yes, I'm free on Saturday. What time should we meet?",
          result: [
            {
              type: "received",
              text: "Great! Let's meet at the studio at 1:00 PM. I'll send you the address tomorrow 📍",
              delay: 1000
            },
            {
              type: "received",
              text: "I can't wait! It's going to be so much fun! 🎉",
              delay: 2500
            }],
          nextChapter: "chapter15"
        },
        {
          text: "Can I first watch how you do the photoshoot? I'm not sure I'm ready to participate right away.",
          result: [
            {
              type: "received",
              text: "Of course you can! I understand your nervousness 😊",
              delay: 1000
            },
            {
              type: "received",
              text: "Come to my shoot tomorrow, you'll see how it works. Then you can decide if you want to participate yourself.",
              delay: 2500
            }],
          nextChapter: "chapter15"
        }],
    },

    chapter6_misunderstanding: {
      messages: [
        {
          type: "sent",
          text: "I'm sorry, I didn't mean to offend you. I was just surprised.",
          delay: 1000
        },
        {
          type: "received",
          text: "It's okay! I understand how that might have sounded 😊",
          delay: 2500
        },
        {
          type: "received",
          text: "But seriously, I would really like to spend time with you. Not as an excuse for the photographer, but because I enjoy being with you.",
          delay: 4000
        },],
      choices: [
        {
          text: "I enjoy spending time with you too. Let's go somewhere tomorrow?",
          result: [
            {
              type: "received",
              text: "I'd love to! Maybe that new restaurant on the embankment? 🌃",
              delay: 1000
            },
            {
              type: "received",
              text: "They say it has a very romantic atmosphere... But it's late now, let's discuss details tomorrow?",
              delay: 2500
            }],
          nextChapter: "chapter15"
        },
        {
          text: "Let's just stay friends. I think that would be better.",
          result: [
            {
              type: "received",
              text: "Oh... Of course, I understand 😔",
              delay: 1000
            },
            {
              type: "received",
              text: "Friendship is valuable too. It's late now, let's talk tomorrow? Good night.",
              delay: 2500
            }],
          nextChapter: "chapter15"
        }],
    },

    chapter6_date_plan: {
      messages: [
        {
          type: "sent",
          text: "The restaurant sounds great! What time works for you?",
          delay: 1000
        },
        {
          type: "received",
          text: "How about 7:00 PM? There will be a beautiful sunset 🌅",
          delay: 2500
        },
        {
          type: "received",
          text: "I'm so happy that we're finally spending time together outside of university!",
          delay: 6000
        }],
      choices: [
        {
          text: "I'm really happy too. I've wanted to ask you out for a while.",
          result: [
            {
              type: "received",
              text: "Really? Then why didn't you? 🤔",
              delay: 1000
            },
            {
              type: "received",
              text: "Well, it doesn't matter. The important thing is that we're finally going!",
              delay: 2500
            }],
          nextChapter: "chapter15"
        },
        {
          text: "I hope no one will interrupt us with calls...",
          result: [
            {
              type: "received",
              text: "There you go again! 😄 Don't worry, I'll turn off my phone.",
              delay: 1000
            },
            {
              type: "received",
              text: "So nothing will distract us from each other...",
              delay: 2500
            }],
          nextChapter: "chapter15"
        }],
    },

    chapter6_study_together: {
      messages: [
        {
          type: "sent",
          text: "Great idea! It'll be more effective to study together.",
          delay: 1000
        },
        {
          type: "received",
          text: "Great! I knew you'd agree! 📚",
          delay: 2500
        },
        {
          type: "received",
          text: "So where? Quick, choose, haha. At my place or in the library?",
          delay: 4000
        },],
      choices: [
        {
          text: "Let's go to the library. It's quiet and we can focus.",
          result: [
            {
              type: "received",
              text: "Alright, the library it is. Tomorrow at 4:00 PM? 🕓",
              delay: 1000
            },
            {
              type: "received",
              text: "Just don't forget your economics notes! I really need them.",
              delay: 2500
            }],
          nextChapter: "chapter15"
        },
        {
          text: "We can do it at your place, if that's more convenient for you.",
          result: [
            {
              type: "received",
              text: "Perfect! No one will be at my home... We can study in peace 😊",
              delay: 1000
            },
            {
              type: "received",
              text: "And I'll make something delicious! You like chocolate cookies, right?",
              delay: 2500
            }],
          nextChapter: "chapter15"
        }],
    },

  }
};