import React, { useState, useEffect } from "react";
import "./styles.css";

// Задачи и недели остаются такими же
const topics = {
  Математика: [
    {
      week: "Тиждень 1: Базовий фундамент (числа + рівняння)",
      days: [
        {
          day: "Понеділок",
          topic: "Теорія чисел: подільність, залишки, НСД, мала теорема Ферма",
          tasks: "10 задач",
        },
        {
          day: "Вівторок",
          topic: "Діофантові рівняння, метод оцінок",
          tasks: "5 рівнянь",
        },
        {
          day: "Середа",
          topic: "Поліноми та рівняння (теорема Безу, методи розкладу)",
          tasks: "10 задач",
        },
        {
          day: "Четвер",
          topic: "Комбінаторика (Принцип Діріхле, формули підрахунку)",
          tasks: "5 задач теорії чисел + 5 задач на комбінаторику",
        },
        {
          day: "П’ятниця",
          topic: "Вирішення задач з олімпіади КНУ",
          tasks: "Аналіз помилок",
        },
        {
          day: "Субота",
          topic: "Геометрія: трикутники, кола, медіани, бісектриси",
          tasks: "Задачі з координатами",
        },
        {
          day: "Неділя",
          topic: "Пробна міні-олімпіада",
          tasks: "4 задачі, 3 години",
        },
      ],
    },
    {
      week: "Тиждень 2: Тригонометрія + комбінаторика",
      days: [
        {
          day: "Понеділок",
          topic: "Тригонометричні рівняння та нерівності",
          tasks: "10 рівнянь",
        },
        {
          day: "Вівторок",
          topic: "Тригонометрія в геометрії",
          tasks: "5 задач із застосуванням тригонометрії",
        },
        {
          day: "Середа",
          topic: "Параметричні рівняння",
          tasks: "5 задач на параметри",
        },
        {
          day: "Четвер",
          topic: "Просторова геометрія",
          tasks: "5 задач на куби, піраміди",
        },
        {
          day: "П’ятниця",
          topic: "Вирішення складних задач з геометрії",
          tasks: "",
        },
        { day: "Субота", topic: "Повторення складних тем тижня", tasks: "" },
        { day: "Неділя", topic: "Пробна міні-олімпіада", tasks: "" },
      ],
    },
    {
      week: "Тиждень 3: Поглиблена практика + параметри",
      days: [
        {
          day: "Понеділок",
          topic: "Нерівності, середні арифметичні та геометричні",
          tasks: "10 задач",
        },
        { day: "Вівторок", topic: "Функціональні рівняння", tasks: "5 задач" },
        {
          day: "Середа",
          topic: "Теорія чисел (китайська теорема про залишки)",
          tasks: "5 задач",
        },
        { day: "Четвер", topic: "Параметричні рівняння", tasks: "5 задач" },
        {
          day: "П’ятниця",
          topic: "Вирішення задач з попередніх олімпіад",
          tasks: "",
        },
        { day: "Субота", topic: "Повторення всіх тем тижня", tasks: "" },
        {
          day: "Неділя",
          topic: "Повна пробна олімпіада",
          tasks: "5 задач, 4 години",
        },
      ],
    },
    {
      week: "Тиждень 4: Фінальна підготовка",
      days: [
        { day: "Понеділок", topic: "Повторення складних тем", tasks: "" },
        {
          day: "Вівторок",
          topic: "Завдання з поєднанням декількох тем",
          tasks: "",
        },
        {
          day: "Середа",
          topic: "Пробна олімпіада + аналіз помилок",
          tasks: "",
        },
        {
          day: "Четвер",
          topic: "Психологічний настрій, легке повторення",
          tasks: "",
        },
        {
          day: "П’ятниця",
          topic: "Легка підготовка перед олімпіадою",
          tasks: "",
        },
      ],
    },
  ],
  Фізика: [
    {
      week: "Тиждень 1: Механіка",
      days: [
        {
          day: "Понеділок",
          topic: "Кінематика, рівняння руху, графіки",
          tasks: "10 задач",
        },
        {
          day: "Вівторок",
          topic: "Динаміка, закони Ньютона, сили тертя",
          tasks: "8 задач",
        },
        {
          day: "Середа",
          topic: "Закон збереження імпульсу, удари, реактивний рух",
          tasks: "10 задач",
        },
        {
          day: "Четвер",
          topic:
            "Закон збереження енергії, консервативні та неконсервативні сили",
          tasks: "8 задач",
        },
        {
          day: "П’ятниця",
          topic: "Центр мас, рух твердого тіла",
          tasks: "8 задач",
        },
        { day: "Субота", topic: "Повторення", tasks: "10 змішаних задач" },
        { day: "Неділя", topic: "Пробний тест", tasks: "4 години" },
      ],
    },
    {
      week: "Тиждень 2: Молекулярна фізика, термодинаміка",
      days: [
        {
          day: "Понеділок",
          topic: "Ідеальний газ, рівняння Менделєєва-Клапейрона",
          tasks: "8 задач",
        },
        {
          day: "Вівторок",
          topic: "Перший закон термодинаміки",
          tasks: "10 задач",
        },
        {
          day: "Середа",
          topic: "Другий закон термодинаміки",
          tasks: "8 задач",
        },
        { day: "Четвер", topic: "Повторення", tasks: "10 змішаних задач" },
        { day: "П’ятниця", topic: "Пробний тест", tasks: "2 години" },
      ],
    },
    {
      week: "Тиждень 3: Електрика і магнетизм",
      days: [
        {
          day: "Понеділок",
          topic: "Закон Кулона, напруженість, потенціал",
          tasks: "8 задач",
        },
        {
          day: "Вівторок",
          topic: "Конденсатори, енергія електричного поля",
          tasks: "8 задач",
        },
        {
          day: "Середа",
          topic: "Закон Ома, правила Кірхгофа",
          tasks: "8 задач",
        },
        {
          day: "Четвер",
          topic: "Магнітне поле, сила Лоренца, закон Ампера",
          tasks: "8 задач",
        },
        { day: "П’ятниця", topic: "Повторення", tasks: "10 змішаних задач" },
        { day: "Неділя", topic: "Пробний тест", tasks: "3 години" },
      ],
    },
    {
      week: "Тиждень 4: Коливання, хвилі, оптика",
      days: [
        {
          day: "Понеділок",
          topic: "Гармонічні коливання, математичний та фізичний маятники",
          tasks: "10 задач",
        },
        {
          day: "Вівторок",
          topic: "Механічні хвилі, рівняння хвилі, стоячі хвилі",
          tasks: "8 задач",
        },
        {
          day: "Середа",
          topic: "Інтерференція, дифракція, дисперсія світла",
          tasks: "10 задач",
        },
        { day: "Четвер", topic: "Повторення", tasks: "10 змішаних задач" },
        { day: "П’ятниця", topic: "Пробний тест", tasks: "2 години" },
      ],
    },
    {
      week: "Тиждень 5: Квантова фізика, СТВ",
      days: [
        { day: "Понеділок", topic: "Фотоелектричний ефект", tasks: "8 задач" },
        {
          day: "Вівторок",
          topic: "Дефект маси, ядерні реакції",
          tasks: "8 задач",
        },
        {
          day: "Середа",
          topic: "Спеціальна теорія відносності, перетворення Лоренца",
          tasks: "10 задач",
        },
        { day: "Четвер", topic: "Повторення", tasks: "10 змішаних задач" },
        { day: "П’ятниця", topic: "Пробний тест", tasks: "3 години" },
      ],
    },
    {
      week: "Тиждень 6: Фінальне відпрацювання",
      days: [
        {
          day: "Понеділок",
          topic: "Аналіз помилок у пробних тестах, повторення складних тем",
          tasks: "",
        },
        {
          day: "Вівторок",
          topic: "Розв’язування завдань олімпіад минулих років",
          tasks: "",
        },
        {
          day: "Середа",
          topic: "Моделювання олімпіади",
          tasks: "4 години розв’язування задач",
        },
        {
          day: "Четвер",
          topic: "Легка підготовка, психологічний настрій перед олімпіадою",
          tasks: "",
        },
      ],
    },
  ],
};

const App = () => {
  const [activeTab, setActiveTab] = useState("Математика");
  const [expandedWeeks, setExpandedWeeks] = useState({});
  const [checkedTopics, setCheckedTopics] = useState({
    Математика: {},
    Фізика: {},
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Функция для загрузки состояния из localStorage
  useEffect(() => {
    const savedCheckedTopics = localStorage.getItem("checkedTopics");
    if (savedCheckedTopics) {
      setCheckedTopics(JSON.parse(savedCheckedTopics));
    }
  }, []);

  // Функция для сохранения состояния в localStorage
  useEffect(() => {
    localStorage.setItem("checkedTopics", JSON.stringify(checkedTopics));
  }, [checkedTopics]);

  const handleLogin = () => {
    if (username === "andreinik1" && password === "18722356kT!") {
      setIsAuthenticated(true);
    } else {
      alert("Невірний логін або пароль");
    }
  };

  const toggleWeek = (week) => {
    setExpandedWeeks((prev) => ({ ...prev, [week]: !prev[week] }));
  };

  const toggleChecked = (day, week) => {
    setCheckedTopics((prev) => {
      const newCheckedTopics = {
        ...prev,
        [activeTab]: {
          ...prev[activeTab],
          [week]: {
            ...prev[activeTab]?.[week],
            [day]: !prev[activeTab]?.[week]?.[day],
          },
        },
      };
      return newCheckedTopics;
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="login-container">
        <h2>Авторизація</h2>
        <div className="input-group">
          <label>Логін:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Введіть логін"
          />
        </div>
        <div className="input-group">
          <label>Пароль:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введіть пароль"
          />
        </div>
        <button onClick={handleLogin}>Увійти</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Журнал підготовки</h1>
      <div className="tab-buttons">
        {Object.keys(topics).map((subject) => (
          <button
            key={subject}
            className={`tab-button ${activeTab === subject ? "active" : ""}`}
            onClick={() => setActiveTab(subject)}
          >
            {subject}
          </button>
        ))}
      </div>
      {topics[activeTab].map((weekData) => (
        <div key={weekData.week} className="week-section">
          <h2 onClick={() => toggleWeek(weekData.week)}>
            {weekData.week}
            <span
              className={`arrow ${
                expandedWeeks[weekData.week] ? "rotate" : ""
              }`}
            >
              &#8595;
            </span>
          </h2>
          {expandedWeeks[weekData.week] && (
            <ul className="topic-list">
              {weekData.days.map((day, index) => (
                <li key={index} className="topic-item">
                  <div className="day">{day.day}</div>
                  <div className="topic">{day.topic}</div>
                  <div className="tasks">{day.tasks}</div>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      checked={
                        checkedTopics[activeTab]?.[weekData.week]?.[day.day] ||
                        false
                      }
                      onChange={() => toggleChecked(day.day, weekData.week)}
                      className="custom-checkbox"
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
