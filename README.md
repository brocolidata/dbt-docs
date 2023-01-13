# dbt docs

[dbt](https://github.com/dbt-labs/dbt-core) helps analysts write reliable, modular code using a workflow that closely mirrors software development.

This repository contains code for generating a Data Catalog site for dbt projects in Brocoli flavor. Check out the [dbt documentation](https://docs.getdbt.com/docs/overview) for more information.

---
## Quickstart
1. Clone repo
2. Duplicate the `.env.example` , rename it to `.env` and replace dummy values with yours
3. Click on *Open a Remote Window* button (left-down corner) & select **Reopen in Container**
4. Wait while your Development Environment is being built (it may take some time)


## Development workflow
### Showing dbt docs

In your dbt project, run `dbt docs generate` then `dbt docs serve`. 

### Development

After cloning this repository, run:

```bash
git submodule update --init --recursive
```

You'll also need to install bundler if you don't already have it:
```bash
gem install bundler
bundle install
```

### Build / Run

To build the css files required for webpack:

```bash
cd styles
bundle exec jekyll build
cd -
```


To build an index.html file:

```bash
npm install
npx webpack
```

To run the dev server, first copy your `manifest.json` and `catalog.json` files to
the `src/` directory. Then run:

```bash
npm install
npm start
```


## Release Brocoli Data Catalog
See [Release Brocoli Data Catalog](release.md)
