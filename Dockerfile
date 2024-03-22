FROM node:18-alpine

COPY . /opt

RUN apk update

RUN apk add xsel

RUN npm install -g pnpm

ARG VITE_NODE_ADDRESS  \
    VITE_CONTRACT_ADDRESS \
    VITE_AIRDROP_CONTRACT_ADDRESS
ENV VITE_NODE_ADDRESS=${VITE_NODE_ADDRESS} \
    VITE_CONTRACT_ADDRESS=${VITE_CONTRACT_ADDRESS} \
    VITE_AIRDROP_CONTRACT_ADDRESS=${VITE_AIRDROP_CONTRACT_ADDRESS} \
    DISABLE_ESLINT_PLUGIN=true

WORKDIR /opt

RUN pnpm install

RUN pnpm build

RUN npm install --global serve

CMD ["serve", "-s", "/opt/dist"]
