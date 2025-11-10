# Task GlobIT - Frontend

Frontend приложение для отображения списка пользователей с поиском и модальным окном.

## Требования

- Node.js 18+
- npm или yarn

## Установка

1. Установите зависимости фронтенда:
```bash
npm install
```

2. Установите зависимости бэкенда:
```bash
cd server
npm install
cd ..
```

3. Запустите бэкенд сервер (в отдельном терминале):
```bash
cd server
npm run dev
```

Сервер будет доступен на `http://localhost:3000`

## Запуск фронтенда

В корневой папке проекта:
```bash
npm run dev
```

Приложение будет доступно по адресу `http://localhost:5173`

## Сборка

```bash
npm run build
```

## Функциональность

- Отображение списка пользователей в виде карточек
- Поиск по имени пользователя (фильтрация через бэкенд)
- Модальное окно с детальной информацией о пользователе
- Закрытие модального окна при клике вне области или на крестик

## Структура проекта (Feature-Sliced Design)

Проект организован по методологии FSD:

```
src/
├── app/                    # Инициализация приложения
│   └── App.tsx
├── pages/                  # Страницы приложения
│   └── contacts-page/
│       └── ui/
│           └── ContactsPage.tsx
├── widgets/                # Крупные блоки UI
│   └── contacts-list/
│       └── ui/
│           └── ContactsList.tsx
├── features/               # Функциональность
│   ├── search-contacts/
│   │   └── ui/
│   │       └── SearchBar.tsx
│   └── view-contact-details/
│       └── ui/
│           └── ContactModal.tsx
├── entities/               # Бизнес-сущности
│   └── contact/
│       ├── api/
│       │   └── contactApi.ts
│       ├── model/
│       │   └── types.ts
│       └── ui/
│           └── ContactCard.tsx
├── shared/                 # Переиспользуемые компоненты
│   └── ui/
│       └── Icon/
│           ├── Icon.tsx
│           ├── TelIcon.tsx
│           └── MailIcon.tsx
├── main.tsx               # Точка входа
└── index.css              # Глобальные стили
```

