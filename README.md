## Getting Started

Firstly, install package.json

```bash
npm install
```

Secondly, run the development server:

```bash
npm run dev
# or
yarn dev
```

Hello

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## To run unit testing of the app.

```bash
npm run test
# or
yarn test
```

## Docker commands to run the service in a Docker container

```bash
docker pull zzr6036/ntuc-test
docker run --name NTUC_CLIENT_CONTAINER -p 0.0.0.0:5000:3000 zzr6036/ntuc-test

```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
