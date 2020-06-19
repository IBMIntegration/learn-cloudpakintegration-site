# Client Technical Engineering - Learn CP4I Site

## Contribute

We are a small team and the site is fairly modular so we can probably just work off master
to start.

1. Clone the repo
1. Run `yarn install`
1. Run `yarn dev` to start the dev environment. The dev environment can be accessed at `http://localhost:8000`.
1. Create a directory for your article under
   `/src/pages/{labs | cp4i-guides | cp4a-guides}` use the kebab-case naming convention.
1. Navigate into the new directory and create the `article-name.mdx` file
1. Create an 'images' directory next to the new article file that can be used to store
   images related to the article.
1. Add a navigation item to the navigation panel by updating the
   `/src/data/nav-items.yaml` file.

   For example to add a new navigation menu for a lab article you can append a new object
   to the pages array specifying a title that will appear as the buttons text and a path
   that points to the `article-name.mdx` file:

   ```yaml
   - title: Labs
     pages:
       - title: Lab Placeholder
         path: /labs/placeholder/prerequisites
   ```

1. Start the dev server to see live updates for changes made to the article: `yarn dev`
1. Push updates to the repo when you have finished the article.

   ```sh
   git add -A
   git commit -m "Add {lab | cp4i-guide | cp4a-guide} article-name"
   git push
   ```

## Build Site

1. Ensure the site is running okay locally

1. Run `yarn deploy`
