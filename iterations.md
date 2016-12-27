# Iteration List

## Iteration 23. _Set up Jade transformation_

### Branch: jade-base-page 
+ based on the base-page branch 

### Design Goals:
1. Set up production build with minification
2. Set up source-map for the production build
3. Set up compression for js and html

### Developer's Notes
+ Set up Jade process to render html
+ Learn Jade

### Steps to use the iteration
1. Clone the project
  ```
  git clone -b jade-base-page [github repository] jade-base-page
  ```
2. Install the NPM packages:
  ```
  npm install
  ```
3. Start the app by running gulp:
  ```
  gulp
  ```

---

## Iteration 22. _Set up a mock server and production build_

### Branch: further-setup-3 
+ based on the further-setup-2 branch 

### Design Goals:
1. Set up production build with minification
2. Set up source-map for the production build
3. Set up compression for js and html

### Developer's Notes
1. Change source-map setting
2. Change the build destination to “dist”
3. Add minify plugin
4. Add deduce plugin

### Steps to use the iteration
1. Clone the project
  ```
  git clone -b further-setup-3 [github repository] further-setup-3
  ```
2. Install the NPM packages:
  ```
  npm install
  ```
3. Build the application:
  ```
  npm build
  ```

---

## Iteration 21. _Serve local http JSON data_

### Branch: further-setup-2 
+ based on the further-setup branch 

### Design Goals:
+ Fetch the JSON data from express server

### Developer's Notes
+ Learn how to fetch JSON data
+ Repository pattern

### Steps to use the iteration
1. Clone the project
  ```
  git clone -b further-setup-2 [github repository] further-setup-2
  ```
2. Install the NPM packages:
  ```
  npm install
  ```
3. Start the app:
  ```
  npm start
  ```

---

## Iteration 20. _Set up sass loader_

### Branch: further-setup 
+ based on the express-server-5 branch 

### Design Goals:
+ Set up sass loader to support autoprefixer and source-map

### Developer's Notes
+ Learn sass loader

### Steps to use the iteration
1. Clone the project
  ```
  git clone -b further-setup [github repository] further-setup
  ```
2. Install the NPM packages:
  ```
  npm install
  ```
3. Start the app:
  ```
  npm start
  ```

---

## Iteration 19. _Set up a test framework with an assertion library_

### Branch: express-server-5 
+ based on the express-server-4 branch 

### Design Goals:
+ Set up a test framework and an assertion library

### Developer's Notes
+ Learn unit test
+ Learn how a test framework works
+ Learn how to use an assertion library
+ Learn JSDOM

### Steps to use the iteration
1. Clone the project
  ```
  git clone -b express-server-5 [github repository] express-server-5
  ```
2. Install the NPM packages:
  ```
  npm install
  ```
3. Start the app:
  ```
  npm start
  ```

---

## Iteration 18. _Set up ESLint for JavaScript_

### Branch: express-server-4 
+ based on the express-server-3 branch 

### Design Goals:
+ Use eslint to lint the javascript files

### Developer's Notes
+ How to configure ESLint

### Steps to use the iteration
1. Clone the project
  ```
  git clone -b express-server-4 [github repository] express-server-4
  ```
2. Install the NPM packages:
  ```
  npm install
  ```
3. Start the app by running:
  ```
  npm start
  ```

---

## Iteration 17. _Bundle the application assets with an automation tool_

### Branch: express-server-3 
+ based on the express-server-2 branch 

### Design Goals:
+ Bundle the application assets with webpack

### Developer's Notes
+ How to use webpack to bundle the assets
+ How to load CSS with webpack

### Steps to use the iteration
1. Clone the project
  ```
  git clone -b express-server-3 [github repository] express-server-3
  ```
2. Install the NPM packages:
  ```
  npm install
  ```
3. Start the app by running:
  ```
  npm start
  ```

---

## Iteration 16. _Set up babel transpiler_

### Branch: express-server-2 
+ based on the express-server branch 

### Design Goals:
+ Set up babel transpiler

### Developer's Notes
+ Learn babel

### Steps to use the iteration
1. Clone the project
  ```
  git clone -b express-server-2 [github repository] express-server-2
  ```
2. Install the NPM packages:
  ```
  npm install
  ```
3. Start the app by running:
  ```
  npm start
  ```

---

## Iteration 15. _Set up an express server_

### Branch: express-server 
+ based on the base-page branch 

### Design Goals:
+ Set up an express server in a DEV project

### Developer's Notes
1. Learn Express
2. Learn npm scripts: "npm start" along with prestart and postsrart

### Steps to use the iteration
1. Clone the project
  ```
  git clone -b express-server [github repository] express-server
  ```
2. Install the NPM packages:
  ```
  npm install
  ```
3. Start the app by running:
  ```
  npm start
  ```

---

## Iteration 14. _Tune up the saved-favorites component_

### Branch: my-favorites-5

### Design Goals:
+ Improve the saved-favorites component

### Developer's Notes
+ Practice on UI and JS

### Steps to use the iteration
1. Clone the project
  ```
  git clone -b my-favorites-5 [github repository] my-favorites-5
  ```
2. Install the NPM packages:
  ```
  npm install
  ```
3. Start the app by running gulp:
  ```
  gulp
  ```

---

## Iteration 13. _Combine the type-ahead and my-favorites features_

### Branch: my-favorites-4

### Design Goals:
+ Add type-ahead search capability to the my-favorites component

### Developer's Notes
+ Practice on UI and JS

### Steps to use the iteration
1. Clone the project
  ```
  git clone -b my-favorites-4 [github repository] my-favorites-4
  ```
2. Install the NPM packages:
  ```
  npm install
  ```
3. Start the app by running gulp:
  ```
  gulp
  ```

---

## Iteration 12. _Create a "my saved favorites" component_

### Branch: my-favorites-3

### Design Goals:
1. Create UI component (widget) to display the saved favorites
2. Retrieve the saved user options from local storage

### Developer's Notes
+ Learn how to read data to local storage

### Steps to use the iteration
1. Clone the project
  ```
  git clone -b my-favorites-3 [github repository] my-favorites-3
  ```
2. Install the NPM packages:
  ```
  npm install
  ```
3. Start the app by running gulp:
  ```
  gulp
  ```

---

## Iteration 11. _Add the behavior to the "my favorites" menu_

### Branch: my-favorites-2

### Design Goals:
1. Implement the expected behavior to the "my favorites" menu
2. Save the user options to the local storage

### Developer's Notes
1. Learn how to save data to local storage
2. Learn JS event deligation

### Steps to use the iteration
1. Clone the project
  ```
  git clone -b my-favorites-2 [github repository] my-favorites-2
  ```
2. Install the NPM packages:
  ```
  npm install
  ```
3. Start the app by running gulp:
  ```
  gulp
  ```

---

## Iteration 10. _Create a "my favorites" menu (UI)_

### Branch: my-favorites

### Design Goals:
+ Create the UI for the my favorites menu

### Developer's Notes
+ Learn how to create a form with a list of checked/unchecked items

### Steps to use the iteration
1. Clone the project
  ```
  git clone -b my-favorites [github repository] my-favorites
  ```
2. Install the NPM packages:
  ```
  npm install
  ```
3. Start the app by running gulp:
  ```
  gulp
  ```

---

## Iteration 9. _Organize the JS codes into modules_

### Branch: search-form-2

### Design Goals:
+ Reorganize the JS codes into modules

### Developer's Notes
+ Learn JavaScript modules

### Surge: http://futuristic-aftermath.surge.sh

### Steps to use the iteration
1. Clone the project
  ```
  git clone -b search-form-2 [github repository] search-form-2
  ```
2. Install the NPM packages:
  ```
  npm install
  ```
3. Start the app by running gulp:
  ```
  gulp
  ```

---

## Iteration 8. _Implement the type-ahead logic_

### Branch: search-form

### Design Goals:
1. Add JS regex logic in main.js
2. Dynamically update the search results

### Developer's Notes
1. Learn JS regex 
2. Learn how to update the search form

### Surge: http://lush-plants.surge.sh

### Steps to use the iteration
1. Clone the project
  ```
  git clone -b search-form [github repository] search-form
  ```
2. Install the NPM packages:
  ```
  npm install
  ```
3. Start the app by running gulp:
  ```
  gulp
  ```

---

## Iteration 7. _Create a type-ahead form (UI Only)_

### Branch: site-menu-5

### Design Goals:
1. Create a search form 
2. Implement the type-ahead feature
3. Hightlight the matching text

### Developer's Notes
+ Learn the UI for a type-ahead form

### Surge: http://oafish-brother.surge.sh

### Steps to use the iteration
1. Clone the project
  ```
  git clone -b site-menu-5 [github repository] site-menu-5
  ```
2. Install the NPM packages:
  ```
  npm install
  ```
3. Start the app by running gulp:
  ```
  gulp
  ```

---

## Iteration 6. _Improve site menu to support a complex menu structure_

### Branch: site-menu-4

### Design Goals:
1. Expand the desktop site menu with a second level structure.

### Developer's Notes
+ Learn how to create a complex site menu structure

### Surge: http://wry-icicle.surge.sh/

### Steps to use the iteration
1. Clone the project
  ```
  git clone -b site-menu-4 [github repository] site-menu-4
  ```
2. Install the NPM packages:
  ```
  npm install
  ```
3. Start the app by running gulp:
  ```
  gulp
  ```

---

## Iteration 5. _Improve "the desktop mode" site menu with animation_

### Branch: site-menu-3

### Design Goals:
1. Apply animation to the desktop site menu.

### Developer's Notes
+ The updated template is saved as index.html
+ Learn how to use animation in SCSS

### Steps to use the iteration
1. Clone the project
  ```
  git clone -b site-menu-3 [github repository] site-menu-3
  ```
2. Install the NPM packages:
  ```
  npm install
  ```
3. Start the app by running gulp:
  ```
  gulp
  ```

---

## Iteration 4. _Improve the mobile site menu_

### Branch: site-menu-2

### Design Goals:
1. Update the mobile menu with accordion feature, so the user can expand or collapse a menu category.

### Developer's Notes
+ The updated template is saved as index.html
+ Learn how to apply accordion with SCSS

### Steps to use the iteration
1. Clone the project
  ```
  git clone -b site-menu-2 [github repository] site-menu-2
  ```
2. Install the NPM packages:
  ```
  npm install
  ```
3. Start the app by running gulp:
  ```
  gulp
  ```
  
---

## Iteration 3. _Construct the site menu_

### Branch: site-menu

### Design Goals:
1. In the mobile mode: Create a vertically stacked menu. 
2. In the desktop mode: Create a horizonal menu structure. 

### Developer's Notes
+ The updated template is saved as index.html
+ Learn the SMACSS basic 
+ Learn CSS flex-box basic

### Steps to use the iteration
1. Clone the project
  ```
  git clone -b site-menu [github repository] site-menu
  ```
2. Install the NPM packages:
  ```
  npm install
  ```
3. Start the app by running gulp:
  ```
  gulp
  ```

---

## Iteration 2. _Add header and footer to the base template_

### Branch: header-footer

### Design Goals:
1. Add a header section to the template
2. Place an application logo to the top-left of the template
3. Align the hamburger icon for the site menu to the upper-right of the template to show/hide the site menu in the mobile mode
4. The site menu block will slide out from right in the mobile mode
5. Add a footer sectrion to the template

### Developer's Notes
+ The updated template is saved as index.html

### Steps to use the iteration
1. Clone the project
  ```
  git clone -b header-footer [github repository] header-footer
  ```
2. Install the NPM packages:
  ```
  npm install
  ```
3. Start the app by running gulp:
  ```
  gulp
  ```

---


## Iteration 1. _Create a page template_

### Branch: base-page

### Design Goals:
1. Create a structure with placeholders for header and footer 
2. Ensure a responsive structure
3. Support fixed header
4. Support fixed footer

### Developer's Notes
+ The initial template is saved as index-base.html

### Steps to use the iteration
1. Clone the project
  ```
  git clone -b base-page [github repository] base-page
  ```
2. Install the NPM packages:
  ```
  npm install
  ```
3. Start the app by running gulp:
  ```
  gulp
  ```


  