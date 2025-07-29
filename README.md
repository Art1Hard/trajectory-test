# 🚗 Car Management SPA

Single Page Application для управления списком автомобилей: просмотр, сортировка, редактирование, удаление, отображение на карте.

[Ссылка на демо](https://art1hard.github.io/trajectory-test)

## 📌 Стек технологий

- ⚛️ **React 19**
- 🔷 **TypeScript**
- ⚡️ **Vite**
- 🗃 **Zustand** — управление состоянием
- 🔄 **TanStack Query (React Query)** — работа с API
- 🗺 **React Leaflet** + Leaflet — карта с маркерами
- 💅 **TailwindCSS** — стилизация

## 🚀 Функциональность

- ✅ Получение списка машин с API
- ✅ Просмотр информации (name, model, year, price)
- ✅ Сортировка по `year` и `price`
- ✅ Редактирование `name` и `price` для каждой машины
- ✅ Удаление машины
- ✅ Отображение автомобилей на карте по координатам `latitude` и `longitude`

## 📦 Установка и запуск
```bash
# Если yarn:

# 1. Установка зависимостей
yarn install

# 2. Запуск проекта
yarn dev

# Если npm:

# 1. Установка зависимостей
npm install

# 2. Запуск проекта
npm run dev
