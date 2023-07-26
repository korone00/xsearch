FROM node:18 as builder

WORKDIR /app
COPY . .
RUN npm install || npm run build
# As for alpine, it's small because it's for linux distribution, so I think you can use node:18 for development and alpine for deployment


FROM node:18-alpine
WORKDIR /app
RUN mkdir -p /app
RUN mkdir -p /app/dist
COPY --from=builder /app/package*.json ./
# COPY --from=builder /app/public ./public/
RUN npm install --only=production
COPY --from=builder /app/dist ./dist/

CMD [ "node", "dist/main" ]
