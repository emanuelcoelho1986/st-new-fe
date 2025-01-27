[![Unit Tests - Jest](https://github.com/emanuelcoelho1986/st-new-fe/actions/workflows/unit-tests.yml/badge.svg)](https://github.com/emanuelcoelho1986/st-new-fe/actions/workflows/unit-tests.yml) [![Playwright tests](https://github.com/emanuelcoelho1986/st-new-fe/actions/workflows/playwright.yml/badge.svg)](https://github.com/emanuelcoelho1986/st-new-fe/actions/workflows/playwright.yml) [![ESLinter](https://github.com/emanuelcoelho1986/st-new-fe/actions/workflows/linter.yml/badge.svg)](https://github.com/emanuelcoelho1986/st-new-fe/actions/workflows/linter.yml)

# st-new-fe Project

## Introduction

The purpose of this project is to create a possible solution for the problem/challange presented at https://github.com/new-ft/frontend-take-home-assignment.

https://github.com/new-ft/frontend-take-home-assignment

This is one solution, there are many solutions. 

## About

- The project is available to access in Vercel in the following URL: https://st-new-fe.vercel.app/

## Requirements

- [NodeJS 22](https://nodejs.org/en)
- [PNPM 9+](https://pnpm.io/installation#using-corepack)

Optional but handy

- [nvm](https://github.com/nvm-sh/nvm)
    - Handle Node Version based on `.nvmrc` in the project

### How to start

Assuming we have everything installed and we are on a UNIX/MacOS (WSL on Windows)

- Clone the project
- Navigate to the project
- If we have `nvm` installed run: `nvm use`
- run: `pnpm install`
- run: `pnpm run dev` or `pnpm dev`

If nothing from the defaults is changed the project should be available at: http://localhost:3000/

## Projects structure

I’m using the latest `NextJs` as well as `AppRouter` approach.

```tsx
app // The pages using page router
components // compoenents to be used in pages inside app or otehr components
	// Each component has it's own unit tests beside them
hooks // custom hooks
test // e2e tests => playwright
```

## How component works

The component follows the user experience defined in the challenge, but code wise this is how it works:

```tsx

const options: Option[] = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "date", label: "Date" },
  { value: "elderberry", label: "Elderberry" },
]

<DropdownSelect options={options} isSearchable />
```

## Development process

I usually follow the https://www.conventionalcommits.org/en/v1.0.0/ approach. Taking into consideration my code approach, I also like to have the following:

- Unit tests
- E2E tests (if applicable)
- A preview URL for each pull request I make
- Signed commits

The merge to `master/main` only happens if everything is green from the actions checklist and, in case we have a full team, QA approves it. 

There is a pull request merged into `master/main` where we can check this approach, for example:

[PR Example here](https://github.com/emanuelcoelho1986/st-new-fe/pull/4)

## Missing features I would like to have

- Click outside to close the Options
- Save reports after each test
- One command to install/start all
    - Makefile or similar

***
# Section auto generated by Next.JS

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
