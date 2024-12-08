FROM node:13.12.0-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Добавляем путь для локальных модулей
ENV PATH /app/node_modules/.bin:$PATH

# Устанавливаем зависимости приложения
COPY package.json ./ 
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm install web-vitals --silent # Устанавливаем web-vitals

# Копируем весь код приложения
COPY . .

# Открываем порт для dev-сервера React
EXPOSE 3000

# Запускаем приложение в режиме разработки
CMD ["npm", "start"]
